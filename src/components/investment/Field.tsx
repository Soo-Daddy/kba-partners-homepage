import { investmentFields } from "@/data/investmentFields";

const IMAGES = [
  "/field/semiconductor.jpg",
  "/field/ai.jpg",
  "/field/robotics.jpg",
  "/field/aerospace.jpg",
  "/field/bio.jpg",
  "/field/advtech.jpg",
];

export default function Field() {
  return (
    <div className="bg-[color:var(--color-surface)] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
          INVESTMENT FIELD
        </p>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-[color:var(--color-hairline)] sm:grid-cols-2 lg:grid-cols-3">
          {investmentFields.map((field, i) => (
            <div key={field.en} className="group flex min-h-[360px] flex-col bg-white">
              <div className="relative h-56 w-full overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGES[i]}
                  alt=""
                  className="h-full w-full scale-100 object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(10,19,48,0.05) 0%, rgba(10,19,48,0.35) 100%)",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between p-8 text-center">
                <div>
                  <p className="text-base font-semibold tracking-[0.1em] text-[color:var(--color-navy-900)]">
                    {field.en}
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--color-gray-400)]">
                    {field.kr}
                  </p>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-[color:var(--color-gray-600)]">
                  {field.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
