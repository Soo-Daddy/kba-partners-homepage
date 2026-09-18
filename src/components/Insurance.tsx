import IconBadge from "@/components/IconBadge";

const AFFILIATION = [
  { label: "소속", value: "인카금융서비스" },
  { label: "본부명", value: "케이비에이본부" },
];

const OFFICES = [
  { name: "가산 영업소" },
  { name: "부천 영업소" },
  { name: "강동 영업소", status: "오픈 예정" },
];

export default function Insurance() {
  return (
    <section id="insurance" className="section-offset mx-auto max-w-6xl px-6 py-28">
      <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
        INSURANCE
      </p>
      <h2 className="mt-6 max-w-lg text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
        투자와 함께, 보험 컨설팅 서비스를 운영합니다.
      </h2>
      <p className="mt-6 max-w-xl text-sm leading-[1.9] text-[color:var(--color-gray-600)]">
        케이비에이파트너스는 인카금융서비스 소속 케이비에이본부를 통해 보험
        컨설팅 서비스를 함께 운영하고 있습니다. 전문 보험설계사들이 고객
        개개인의 상황에 맞는 보장 설계와 재무 상담을 제공합니다.
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
              영업소 현황
            </p>
            <div className="mt-6 divide-y divide-[color:var(--color-hairline)]">
              {OFFICES.map((office) => (
                <div
                  key={office.name}
                  className="flex items-center justify-between py-4"
                >
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
    </section>
  );
}
