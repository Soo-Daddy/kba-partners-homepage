"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const INITIAL_FORM = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  consent: false,
  website: "",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "mt-2 w-full rounded-sm border border-[color:var(--color-hairline)] bg-white px-4 py-3 text-sm text-[color:var(--color-navy-900)] outline-none transition-colors focus:border-[color:var(--color-navy-900)]";

export default function ContactForm() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  function validate() {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "담당자명을 입력해 주세요.";
    if (!form.email.trim()) next.email = "이메일을 입력해 주세요.";
    else if (!EMAIL_RE.test(form.email.trim()))
      next.email = "올바른 이메일 형식이 아닙니다.";
    if (!form.message.trim() || form.message.trim().length < 10)
      next.message = "문의 내용을 10자 이상 입력해 주세요.";
    if (!form.consent) next.consent = "개인정보 수집 및 이용에 동의해 주세요.";
    return next;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        if (data.errors) setErrors(data.errors);
        setErrorMessage(
          data.error ?? "문의 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm(INITIAL_FORM);
      setErrors({});
    } catch {
      setErrorMessage(
        "네트워크 오류로 문의를 전송하지 못했습니다. 잠시 후 다시 시도해 주세요."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mt-16 border-t border-[color:var(--color-hairline)] pt-10">
        <p className="text-sm font-medium text-[color:var(--color-navy-900)]">
          문의가 정상적으로 접수되었습니다.
        </p>
        <p className="mt-2 text-sm leading-[1.9] text-[color:var(--color-gray-600)]">
          검토 후 입력하신 이메일로 답변드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-medium tracking-[0.1em] text-[color:var(--color-gray-600)] underline underline-offset-4 hover:text-[color:var(--color-navy-900)]"
        >
          다른 문의 작성하기
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mt-16 border-t border-[color:var(--color-hairline)] pt-10"
    >
      <p className="text-xs font-semibold tracking-[0.2em] text-[color:var(--color-navy-900)]">
        투자문의 / INQUIRY
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-medium tracking-wide text-[color:var(--color-gray-400)]">
            담당자명 <span className="text-[color:var(--color-gold-500)]">*</span>
          </span>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className={inputClass}
            aria-invalid={!!errors.name}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-red-600">{errors.name}</p>
          )}
        </label>

        <label className="block">
          <span className="text-xs font-medium tracking-wide text-[color:var(--color-gray-400)]">
            이메일 <span className="text-[color:var(--color-gold-500)]">*</span>
          </span>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className={inputClass}
            aria-invalid={!!errors.email}
            autoComplete="email"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-red-600">{errors.email}</p>
          )}
        </label>

        <label className="block">
          <span className="text-xs font-medium tracking-wide text-[color:var(--color-gray-400)]">
            연락처
          </span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
            className={inputClass}
            autoComplete="tel"
          />
        </label>

        <label className="block">
          <span className="text-xs font-medium tracking-wide text-[color:var(--color-gray-400)]">
            회사명
          </span>
          <input
            type="text"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            className={inputClass}
            autoComplete="organization"
          />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="text-xs font-medium tracking-wide text-[color:var(--color-gray-400)]">
          문의 내용 <span className="text-[color:var(--color-gold-500)]">*</span>
        </span>
        <textarea
          value={form.message}
          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
          rows={6}
          className={`${inputClass} resize-none`}
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-red-600">{errors.message}</p>
        )}
      </label>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) =>
              setForm((f) => ({ ...f, consent: e.target.checked }))
            }
            className="mt-0.5 h-4 w-4 shrink-0 accent-[color:var(--color-navy-900)]"
          />
          <span className="text-xs leading-relaxed text-[color:var(--color-gray-600)]">
            입력하신 개인정보는 문의 답변 목적으로만 사용되며, 답변 완료 후
            파기됩니다. 개인정보 수집 및 이용에 동의합니다.{" "}
            <span className="text-[color:var(--color-gold-500)]">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="mt-1.5 text-xs text-red-600">{errors.consent}</p>
        )}
      </div>

      {status === "error" && errorMessage && (
        <p className="mt-6 text-xs text-red-600">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-8 inline-flex items-center gap-2 bg-[color:var(--color-navy-900)] px-8 py-3.5 text-xs font-medium tracking-[0.14em] text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "submitting" ? "전송 중..." : "문의 보내기"}
      </button>
    </form>
  );
}
