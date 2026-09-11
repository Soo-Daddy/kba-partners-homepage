import { investmentCriteria } from "@/data/investmentCriteria";

export default function Criteria() {
  return (
    <div className="bg-[color:var(--color-surface)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
          INVESTMENT CRITERIA
        </p>
        <h2 className="mt-6 max-w-lg text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
          What We Look For
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {investmentCriteria.map((item, i) => (
            <div key={item.en}>
              <p className="text-xs font-medium tracking-[0.1em] text-[color:var(--color-gray-400)]">
                {String(i + 1).padStart(2, "0")} / {item.en}
              </p>
              <h3 className="mt-3 text-base font-semibold text-[color:var(--color-navy-900)]">
                {item.kr}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-gray-600)]">
                {item.question}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
