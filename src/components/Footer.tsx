const NAV_ITEMS = [
  { href: "#about", label: "ABOUT" },
  { href: "#investment", label: "INVESTMENT" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#contact", label: "CONTACT" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[color:var(--color-navy-950)] py-16 text-white/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-mark.svg" alt="" className="h-5 w-auto" />
            <span className="text-sm font-semibold tracking-[0.08em] text-white">
              KBA PARTNERS
            </span>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-medium tracking-[0.1em] text-white/50 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-xs leading-relaxed">
          <p>
            케이비에이파트너스 주식회사 · 대표자 이규석 · 사업자등록번호
            497-88-01157
          </p>
          <p className="mt-1">
            주소 서울 송파구 송파대로167 테라타워B 703호
          </p>
          <p className="mt-6 text-white/35">
            본 웹사이트에 게시된 정보는 KBA파트너스의 사업 소개를 위한
            자료이며, 특정 금융상품의 가입이나 투자를 권유하기 위해 작성된
            것이 아닙니다.
          </p>
          <p className="mt-6">© {year} KBA Partners. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
