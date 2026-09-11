import IconBadge from "@/components/IconBadge";

export default function About() {
  return (
    <section id="about" className="section-offset mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
            ABOUT US
          </p>
          <h2 className="mt-6 text-2xl font-semibold leading-snug text-[color:var(--color-navy-900)] sm:text-3xl">
            About KBA Partners
          </h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/kba-logo.jpg"
            alt="KBA Partners"
            className="mx-auto mt-10 hidden w-full max-w-[280px] lg:block"
          />
        </div>

        <div className="max-w-2xl">
          <p className="text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
            기업의 성장 가능성과 미래가치에 투자합니다.
          </p>
          <p className="mt-8 leading-[1.9] text-[color:var(--color-gray-600)]">
            KBA파트너스는 성장 잠재력이 높은 기업을 발굴하고 투자하는
            투자회사입니다. 기업이 보유한 기술력과 사업 경쟁력뿐만 아니라
            산업의 성장 가능성, 재무성과, 시장 지위 및 기업가치를 종합적으로
            분석하여 투자기회를 검토합니다.
            <br />
            <br />
            특히 대한민국이 글로벌 시장에서 경쟁력을 확대할 수 있는 미래
            성장산업과 IPO를 준비하는 성장기업에 주목합니다. 단기적인 시장의
            흐름보다 기업이 가진 본질적인 경쟁력과 장기적인 기업가치의 성장을
            중요하게 생각합니다.
          </p>
        </div>
      </div>

      <div className="mt-24 grid gap-20 border-t border-[color:var(--color-hairline)] pt-24 lg:grid-cols-[0.7fr_1.3fr]">
        <div className="text-center">
          <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
            OUR PHILOSOPHY
          </p>
          <h2 className="mt-6 text-xl font-semibold leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
            좋은 기업을 발굴하고
            <br />
            기업의 성장과 함께합니다.
          </h2>
          <IconBadge kind="partnership" tone="navy" className="mx-auto mt-10 hidden h-24 w-24 lg:block" />
        </div>

        <div className="max-w-2xl">
          <p className="leading-[1.9] text-[color:var(--color-gray-600)]">
            KBA파트너스는 단순히 상장이 예정되어 있다는 이유만으로 투자하지
            않습니다. 기업이 속한 산업의 성장성과 기업 자체가 보유한 기술력,
            경쟁력, 실적 및 미래가치를 함께 분석합니다.
            <br />
            <br />
            투자의 시작부터 회수까지 합리적인 투자 판단을 가장 중요한 원칙으로
            생각합니다.
          </p>
        </div>
      </div>
    </section>
  );
}
