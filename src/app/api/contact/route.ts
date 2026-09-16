import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  message?: string;
  consent?: boolean;
  website?: string; // honeypot field, should always be empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort in-memory rate limit (per warm server instance). Not a
// substitute for a real rate limiter, but enough to blunt naive spam bots
// without adding a dependency or requiring credentials.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissionTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (submissionTimestamps.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  recent.push(now);
  submissionTimestamps.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

export async function POST(req: NextRequest) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // Honeypot: real visitors never fill this hidden field in.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "요청이 너무 많습니다. 잠시 후 다시 시도해 주세요." },
      { status: 429 }
    );
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const message = body.message?.trim() ?? "";
  const consent = body.consent === true;

  const errors: Record<string, string> = {};
  if (!name) errors.name = "담당자명을 입력해 주세요.";
  if (!email) errors.email = "이메일을 입력해 주세요.";
  else if (!EMAIL_RE.test(email)) errors.email = "올바른 이메일 형식이 아닙니다.";
  if (!message || message.length < 10)
    errors.message = "문의 내용을 10자 이상 입력해 주세요.";
  if (!consent) errors.consent = "개인정보 수집 및 이용에 동의해 주세요.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  const submission = {
    name,
    email,
    phone: phone || null,
    company: company || null,
    message,
    receivedAt: new Date().toISOString(),
    ip,
  };

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactTo = process.env.CONTACT_EMAIL_TO;

  if (resendApiKey && contactTo) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from:
            process.env.CONTACT_EMAIL_FROM ??
            "KBA Partners Website <onboarding@resend.dev>",
          to: [contactTo],
          reply_to: email,
          subject: `[홈페이지 문의] ${company ? `${company} - ` : ""}${name}`,
          text: `담당자명: ${name}\n이메일: ${email}\n연락처: ${phone || "-"}\n회사명: ${company || "-"}\n\n문의 내용:\n${message}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Resend API responded with ${res.status}`);
      }
    } catch (err) {
      console.error("[contact] failed to send email via Resend, logging instead:", err);
      console.log("[contact-submission]", JSON.stringify(submission));
    }
  } else {
    // ------------------------------------------------------------------
    // TODO(설정 필요): 회사 이메일 도메인이 준비되면 아래 환경변수를 Vercel
    // 프로젝트 설정(Settings > Environment Variables)에 등록해 주세요.
    //   RESEND_API_KEY   – https://resend.com 무료 가입 후 발급받는 API 키
    //   CONTACT_EMAIL_TO – 문의를 실제로 받을 회사 이메일 주소
    // 두 값을 등록하면 코드 수정 없이 이 폼이 곧바로 해당 이메일로 문의를
    // 전송합니다. 등록 전에는 아래처럼 서버 로그(Vercel 대시보드 > 프로젝트
    // > Logs)에 문의 내용이 기록되니, 그 사이에는 로그를 통해 확인해 주세요.
    // ------------------------------------------------------------------
    console.log("[contact-submission]", JSON.stringify(submission));
  }

  return NextResponse.json({ ok: true });
}
