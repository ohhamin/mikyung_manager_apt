"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "단지개요", id: "overview" },
  { label: "입지환경", id: "location" },
  { label: "평형안내", id: "units" },
  { label: "분양안내", id: "schedule" },
  { label: "단지특화", id: "features" },
  { label: "상담신청", id: "contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      let cur = "";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 120) cur = item.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0d1f15] shadow-[0_4px_32px_rgba(0,0,0,0.45)]"
          : "bg-gradient-to-b from-black/55 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[64px] md:h-[76px]">
          {/* 로고 */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start leading-none group"
          >
            <span className="text-[#c9963c] text-[9px] tracking-[0.45em] font-medium uppercase mb-0.5 transition-opacity group-hover:opacity-80">
              Dongwon Development
            </span>
            <span className="text-white text-[17px] md:text-[19px] font-black tracking-wide transition-opacity group-hover:opacity-80">
              더파크 비스타 동원
            </span>
          </button>

          {/* 데스크탑 메뉴 */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                  active === item.id
                    ? "text-[#c9963c]"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {item.label}
                {active === item.id && (
                  <span className="absolute bottom-0 left-4 right-4 h-px bg-[#c9963c]" />
                )}
              </button>
            ))}
          </nav>

          {/* 전화 + 햄버거 */}
          <div className="flex items-center gap-3">
            <a
              href="tel:051-123-4567"
              className="hidden sm:flex items-center gap-1.5 bg-[#c9963c] hover:bg-[#a87830] text-white px-4 py-2.5 text-[13px] font-semibold tracking-wide transition-colors btn-shine"
            >
              <PhoneIcon />
              <span>051-123-4567</span>
            </a>
            <button
              className="lg:hidden text-white p-2 -mr-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="메뉴"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#0d1f15] border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-4 text-sm font-medium border-b border-white/5 last:border-0 transition-colors flex items-center justify-between ${
                  active === item.id ? "text-[#c9963c]" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
                <span className="text-white/20 text-xs">›</span>
              </button>
            ))}
            <a
              href="tel:051-123-4567"
              className="mt-3.5 flex items-center justify-center gap-2 bg-[#c9963c] text-white px-4 py-4 text-sm font-bold btn-shine"
            >
              <PhoneIcon />
              051-123-4567 분양 문의
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
