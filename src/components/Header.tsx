"use client";

import { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "단지개요", id: "overview" },
  { label: "세대평면", id: "units" },
  { label: "입지환경", id: "location" },
  { label: "단지특화", id: "features" },
  { label: "상담신청", id: "contact" },
];

export default function Header() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      let cur = "";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= 100) cur = item.id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 96,
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#901649] shadow-[0_2px_20px_rgba(0,0,0,0.3)]">
      {/* 상단: 로고 + 전화 */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-[52px]">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col items-start leading-none group"
          >
            <span className="text-white/60 text-[8px] tracking-[0.45em] font-medium uppercase mb-0.5 transition-opacity group-hover:opacity-80">
              Dongwon Development
            </span>
            <span className="text-white text-[15px] md:text-[17px] font-black tracking-wide transition-opacity group-hover:opacity-80">
              더파크 비스타 동원
            </span>
          </button>

          <a
            href="tel:1877-2131"
            className="flex items-center gap-1.5 bg-white text-[#901649] px-4 py-2 text-[13px] font-black tracking-wide transition-colors hover:bg-white/90"
          >
            <PhoneIcon />
            <span>1877-2131</span>
          </a>
        </div>
      </div>

      {/* 하단: 탭 네비게이션 */}
      <div className="border-t border-white/20">
        <nav className="max-w-7xl mx-auto px-0 flex overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`flex-1 min-w-[80px] py-3 text-[12px] md:text-[13px] font-bold tracking-wide transition-all whitespace-nowrap relative ${
                active === item.id
                  ? "text-white bg-white/15"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.label}
              {active === item.id && (
                <span className="absolute bottom-0 inset-x-0 h-0.5 bg-white" />
              )}
            </button>
          ))}
        </nav>
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
