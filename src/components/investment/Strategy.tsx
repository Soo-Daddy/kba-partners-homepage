import IconBadge from "@/components/IconBadge";

export default function Strategy() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
            INVESTMENT STRATEGY
          </p>
          <IconBadge kind="compass" tone="gold" className="mx-auto mt-10 hidden h-24 w-24 lg:block" />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
            미래 산업을 이끌어갈 기업에 투자합니다.
          </h2>
          <p className="mt-8 leading-[1.9] text-[color:var(--color-gray-600)]">
            KBA파트너스는 대한민국이 글로벌 시장에서 경쟁력을 확보할 수 있는
            미래 성장산업과 혁신기업을 중심으로 투자합니다. 기술 변화가 새로운
            산업과 시장을 만들어가는 과정에서 독자적인 기술력과 사업 경쟁력을
            보유하고 지속적인 성장이 가능한 기업에 주목합니다.
            <br />
            <br />
            특히 기술과 사업성이 일정 수준 검증되고 향후 IPO를 통한 기업가치
            성장이 기대되는 Late Stage 및 Pre-IPO 기업을 주요 투자대상으로
            합니다.
          </p>
        </div>
      </div>
    </div>
  );
}
