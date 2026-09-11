const STRIP_IMAGES = [
  "/field/semiconductor.jpg",
  "/field/ai.jpg",
  "/field/robotics.jpg",
  "/field/aerospace.jpg",
  "/field/bio.jpg",
  "/field/advtech.jpg",
];

export default function Strategy() {
  return (
    <div className="py-28">
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
                    "linear-gradient(180deg, rgba(10,19,48,0.05) 0%, rgba(10,19,48,0.45) 100%)",
                }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
          INVESTMENT STRATEGY
        </p>
        <h2 className="mt-6 max-w-2xl text-3xl font-bold leading-tight text-[color:var(--color-navy-900)] sm:text-5xl">
          미래 산업을 이끌어갈
          <br />
          기업에 투자합니다.
        </h2>
        <p className="mt-8 max-w-xl leading-[1.9] text-[color:var(--color-gray-600)]">
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
  );
}
