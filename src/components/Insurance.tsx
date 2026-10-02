import IconBadge from "@/components/IconBadge";

const STRIP_IMAGES = [
  "/insurance/building1.jpg",
  "/insurance/advisory1.jpg",
  "/insurance/signing.jpg",
  "/insurance/protection.jpg",
  "/insurance/advisory2.jpg",
  "/insurance/building2.jpg",
];

const AFFILIATION = [
  { label: "소속", value: "인카금융서비스" },
  { label: "본부명", value: "케이비에이본부" },
];

const OFFICES = [
  { name: "가산 지사" },
  { name: "부천 지사" },
  { name: "구리 지사", status: "오픈 예정" },
];

const HISTORY = [
  { year: "2024", desc: "인카금융서비스 합류, 케이비에이본부 설립" },
  { year: "2024.12", desc: "가산 지사 오픈" },
  { year: "2025.12", desc: "부천 지사 오픈" },
  { year: "2026.10", desc: "구리 지사 오픈 예정" },
];

export default function Insurance() {
  return (
    <section id="insurance" className="section-offset py-28">
      <div className="overflow-hidden">
        <div className="flex justify-center gap-4 px-6">
          {STRIP_IMAGES.map((src) => (
            <div
              key={src}
              className="relative h-40 w-56 shrink-0 overflow-hidden rounded-2xl sm:h-52 sm:w-72"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" className="h-full w-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(10,19,48,0.05) 0%, rgba(10,19,48,0.35) 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
          INSURANCE
        </p>
        <h2 className="mt-6 max-w-lg text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
          자산을 키우는 투자,
          <br />
          자산을 지키는 보험.
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-[1.9] text-[color:var(--color-gray-600)]">
          케이비에이파트너스는 인카금융서비스 소속 케이비에이본부와 함께
          전문적인 보험 컨설팅 서비스를 제공합니다. 단순한 보험상품 제안을
          넘어, 고객의 보유자산, 현금흐름, 기존 보장, 생애주기를 종합적으로
          살펴 필요한 위험을 점검하고 합리적인 보장 구조를 설계합니다.
          <br />
          <br />
          투자와 자산관리가 장기적인 성장을 위한 선택이라면, 보험은 예상하지
          못한 위험으로부터 그 자산을 지키기 위한 준비입니다. KBA는 투자와
          보장을 하나의 자산관리 관점에서 바라봅니다.
        </p>

        <div className="mt-20 grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="text-center">
            <IconBadge kind="shield" tone="gold" className="mx-auto h-24 w-24" />
          </div>

          <div>
            <div className="grid gap-8 sm:grid-cols-2">
              {AFFILIATION.map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium tracking-wide text-[color:var(--color-gray-400)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[color:var(--color-navy-900)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-12 border-t border-[color:var(--color-hairline)] pt-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[color:var(--color-navy-900)]">
                지사 현황
              </p>
              <div className="mt-6 grid gap-px overflow-hidden rounded-sm bg-[color:var(--color-hairline)] sm:grid-cols-3">
                {OFFICES.map((office) => (
                  <div
                    key={office.name}
                    className="flex flex-col items-center gap-3 bg-white px-6 py-8 text-center"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 21c4-4.5 7-8.2 7-11.5A7 7 0 0 0 5 9.5C5 12.8 8 16.5 12 21Z"
                        stroke="var(--color-gold-500)"
                        strokeWidth="1.6"
                      />
                      <circle
                        cx="12"
                        cy="9.5"
                        r="2.4"
                        stroke="var(--color-gold-500)"
                        strokeWidth="1.6"
                      />
                    </svg>
                    <p className="text-sm font-medium text-[color:var(--color-navy-900)]">
                      {office.name}
                    </p>
                    {office.status && (
                      <span className="text-xs font-medium tracking-wide text-[color:var(--color-gold-500)]">
                        {office.status}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-[color:var(--color-hairline)] pt-16">
          <p className="text-xs font-semibold tracking-[0.2em] text-[color:var(--color-navy-900)]">
            연혁
          </p>
          <div className="mt-8 divide-y divide-[color:var(--color-hairline)]">
            {HISTORY.map((item) => (
              <div
                key={item.year}
                className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-8"
              >
                <p className="text-sm font-semibold tracking-[0.04em] text-[color:var(--color-navy-900)]">
                  {item.year}
                </p>
                <p className="text-sm leading-relaxed text-[color:var(--color-gray-600)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
