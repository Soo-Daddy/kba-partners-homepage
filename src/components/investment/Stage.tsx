import { investmentStages } from "@/data/investmentStages";
import IconBadge from "@/components/IconBadge";

export default function Stage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-28">
      <div className="grid gap-20 lg:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
            INVESTMENT STAGE
          </p>
          <h2 className="mt-6 text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
            성장이 본격화되는
            <br />
            기업에 투자합니다.
          </h2>
          <p className="mt-6 text-sm leading-[1.9] text-[color:var(--color-gray-600)]">
            KBA파트너스는 초기 아이디어 단계의 기업보다는 기술력과
            사업모델이 검증되고 본격적인 성장구간에 진입한 기업을
            선호합니다.
          </p>
          <IconBadge kind="stairs" tone="gold" className="mx-auto mt-10 h-20 w-20" />
        </div>

        <div className="grid gap-0 divide-y divide-[color:var(--color-hairline)]">
          {investmentStages.map((stage) => (
            <div
              key={stage.en}
              className="grid gap-2 py-7 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <p className="text-sm font-semibold tracking-[0.08em] text-[color:var(--color-navy-900)]">
                {stage.en}
              </p>
              <p className="text-sm leading-relaxed text-[color:var(--color-gray-600)]">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
