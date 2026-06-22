"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
    <header className="fixed inset-x-0 top-0 z-50 shadow-[0_2px_20px_rgba(0,0,0,0.15)]">
      {/* 상단: 로고 */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="flex items-center h-[52px]">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center"
            >
              <Image
                src="/21.png"
                alt="동원개발"
                width={140}
                height={24}
                className="object-contain"
              />
            </button>
          </div>
        </div>
      </div>

      {/* 하단: 탭 네비게이션 */}
      <div className="bg-[#901649]">
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
