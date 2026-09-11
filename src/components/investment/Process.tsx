import { investmentProcess } from "@/data/investmentProcess";

export default function Process() {
  return (
    <div className="bg-[color:var(--color-navy-950)] py-28 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.28em] text-white/40">
          INVESTMENT PROCESS
        </p>
        <h2 className="mt-6 max-w-lg text-xl font-medium leading-snug sm:text-2xl">
          Our Investment Process
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {investmentProcess.map((step) => (
            <div
              key={step.step}
              className="border-t border-white/15 pt-6"
            >
              <p className="text-xs font-medium tracking-[0.1em] text-white/35">
                {step.step}
              </p>
              <p className="mt-3 text-sm font-semibold tracking-[0.06em] text-white">
                {step.en}
              </p>
              <p className="mt-1 text-xs text-white/50">{step.kr}</p>
              <p className="mt-4 text-sm leading-relaxed text-white/55">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
