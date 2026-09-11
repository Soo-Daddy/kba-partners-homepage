import { portfolio, OTHER_YEAR } from "@/data/portfolio";

const YEARS = Array.from(new Set(portfolio.map((c) => c.investedYear))).sort(
  (a, b) => {
    if (a === OTHER_YEAR) return 1;
    if (b === OTHER_YEAR) return -1;
    return b - a;
  }
);

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-offset mx-auto max-w-6xl px-6 py-28">
      <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
        PORTFOLIO
      </p>
      <h2 className="mt-6 max-w-lg text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
        함께 성장하는 기업들
      </h2>

      <div className="mt-16 space-y-16">
        {YEARS.map((year) => (
          <div key={year}>
            <p className="text-sm font-semibold tracking-[0.1em] text-[color:var(--color-navy-900)]">
              {year === OTHER_YEAR ? "그 외 함께한 기업" : year}
            </p>
            <div className="mt-6 flex flex-wrap border-l border-t border-[color:var(--color-hairline)]">
              {portfolio
                .filter((c) => c.investedYear === year)
                .map((company) => {
                  const cardClassName = `group flex min-h-[150px] w-1/2 items-center justify-center border-b border-r border-[color:var(--color-hairline)] p-6 transition-colors lg:w-1/4 ${
                    company.logoDark
                      ? "bg-[color:var(--color-navy-900)]"
                      : "bg-white hover:bg-[color:var(--color-surface)]"
                  }`;
                  const content = (
                    <>
                      {company.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={company.logo}
                          alt={company.name}
                          className={`w-auto max-w-[85%] object-contain transition-transform group-hover:scale-[1.04] ${
                            company.featured ? "h-24 max-h-24" : "h-16 max-h-16"
                          }`}
                        />
                      ) : (
                        <p className="text-base font-semibold tracking-tight text-[color:var(--color-navy-900)]">
                          {company.name}
                        </p>
                      )}
                    </>
                  );

                  return company.url ? (
                    <a
                      key={company.name}
                      href={company.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company.name} 공식 홈페이지로 이동`}
                      className={cardClassName}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={company.name} className={cardClassName}>
                      {content}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
