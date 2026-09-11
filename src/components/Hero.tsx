import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center overflow-hidden bg-[color:var(--color-navy-950)]"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-60"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(6,12,31,0.97) 0%, rgba(6,12,31,0.9) 35%, rgba(6,12,31,0.55) 65%, rgba(6,12,31,0.35) 100%)",
        }}
      />

      <svg
        aria-hidden
        viewBox="0 0 1400 700"
        preserveAspectRatio="xMaxYMax slice"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      >
        <path
          d="M 950 480 L 1040 430 L 1110 460 L 1190 340 L 1260 400 L 1340 260"
          stroke="#e8c15c"
          strokeOpacity="0.6"
          strokeWidth="2.5"
          fill="none"
        />
        {[
          [950, 480],
          [1040, 430],
          [1110, 460],
          [1190, 340],
          [1260, 400],
          [1340, 260],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="4" fill="#e8c15c" fillOpacity="0.6" />
        ))}
      </svg>

      <div className="relative mx-auto w-full max-w-6xl px-6 py-28">
        <p className="text-xs font-medium tracking-[0.28em] text-white/50">
          KBA PARTNERS
        </p>

        <h1 className="mt-8 text-[2.6rem] font-semibold leading-[1.15] tracking-tight text-white sm:text-6xl">
          Investing in Growth.
          <br />
          Creating Long-Term Value.
        </h1>

        <p className="mt-10 max-w-xl text-[15px] leading-relaxed text-white/60 sm:text-base">
          성장 가능성이 높은 기업을 발굴하고 지속 가능한 기업가치에 투자합니다.
          <br />
          KBA파트너스는 미래 성장산업을 중심으로 기술력과 사업 경쟁력을 갖춘
          기업을 발굴하여 투자합니다. 특히 사업성과 성장성이 검증되고 IPO를
          준비하는 Late Stage 및 Pre-IPO 기업을 주요 투자대상으로 검토합니다.
        </p>

        <div className="mt-14 flex flex-wrap items-center gap-x-10 gap-y-4">
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-white"
          >
            ABOUT KBA
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
          <Link
            href="/investment"
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-[0.14em] text-white/60 hover:text-white"
          >
            OUR INVESTMENT
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
