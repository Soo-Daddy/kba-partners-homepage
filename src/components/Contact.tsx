const INFO = [
  { label: "Address", value: "서울 송파구 송파대로167 테라타워B 703호" },
  { label: "CEO", value: "이규석" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-offset bg-[color:var(--color-surface)] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="text-xs font-medium tracking-[0.28em] text-[color:var(--color-gray-400)]">
          CONTACT
        </p>
        <h2 className="mt-6 max-w-lg text-xl font-medium leading-snug text-[color:var(--color-navy-900)] sm:text-2xl">
          새로운 기업과
          <br />
          투자기회를 기다립니다.
        </h2>
        <p className="mt-6 max-w-xl text-sm leading-[1.9] text-[color:var(--color-gray-600)]">
          KBA파트너스는 성장 가능성이 높은 기업과 새로운 투자기회를 지속적으로
          검토하고 있습니다.
        </p>

        <p className="mt-16 text-xs font-semibold tracking-[0.2em] text-[color:var(--color-navy-900)]">
          KBA PARTNERS
        </p>
        <div className="mt-6 grid gap-8 border-t border-[color:var(--color-hairline)] pt-8 sm:grid-cols-2">
          {INFO.map((item) => (
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
      </div>
    </section>
  );
}
