"use client";

import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { href: "#about", label: "ABOUT" },
  { href: "#investment", label: "INVESTMENT" },
  { href: "#portfolio", label: "PORTFOLIO" },
  { href: "#contact", label: "CONTACT" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur border-b border-[color:var(--color-hairline)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          {scrolled ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/kba-logo.jpg" alt="KBA Partners" className="h-8 w-auto" />
          ) : (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.svg" alt="" className="h-5 w-auto" />
              <span className="text-base font-semibold tracking-[0.08em] text-white">
                KBA PARTNERS
              </span>
            </>
          )}
        </a>

        <nav className="hidden items-center gap-11 md:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs font-medium tracking-[0.12em] transition-colors ${
                scrolled
                  ? "text-[color:var(--color-gray-600)] hover:text-[color:var(--color-navy-900)]"
                  : "text-white/75 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          className={`md:hidden ${scrolled ? "text-[color:var(--color-navy-900)]" : "text-white"}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[color:var(--color-hairline)] bg-white px-6 py-5 md:hidden">
          <nav className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs font-medium tracking-[0.12em] text-[color:var(--color-gray-600)]"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
