"use client";

import { useState, useEffect } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* 모바일: 하단 고정 바 */}
      <div
        className={`fixed bottom-0 inset-x-0 z-40 lg:hidden transition-all duration-500 ${
          visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
        }`}
        style={{ boxShadow: "0 -4px 16px rgba(0,0,0,0.18)" }}
      >
        <div className="grid grid-cols-2">
          <a
            href="tel:1877-2131"
            className="flex items-center justify-center gap-2 bg-[#901649] text-white py-[18px] text-sm font-black tracking-wide active:bg-[#b01e5a] transition-colors"
          >
            <PhoneIcon />
            전화 문의
          </a>
          <button
            onClick={scrollToContact}
            className="flex items-center justify-center gap-2 bg-white text-[#901649] py-[18px] text-sm font-black tracking-wide active:bg-[#d0d0d0] transition-colors btn-shine"
          >
            <FormIcon />
            상담 신청
          </button>
        </div>
      </div>

      {/* 데스크탑: 우측 하단 버튼들 */}
      <div
        className={`fixed bottom-8 right-6 z-40 hidden lg:flex flex-col gap-3 transition-all duration-500 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <a
          href="tel:1877-2131"
          className="flex items-center gap-2.5 bg-[#901649] hover:bg-[#b01e5a] text-white px-5 py-3.5 text-sm font-black shadow-2xl transition-all hover:shadow-3xl"
        >
          <PhoneIcon />
          1877-2131
        </a>
        <button
          onClick={scrollToContact}
          className="flex items-center gap-2.5 bg-white hover:bg-gray-100 text-gray-900 px-5 py-3.5 text-sm font-black shadow-xl transition-all hover:shadow-2xl btn-shine"
        >
          <FormIcon />
          상담 신청하기
        </button>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="self-end w-11 h-11 bg-white/90 hover:bg-white border border-gray-200 text-gray-600 hover:text-[#901649] flex items-center justify-center shadow-lg transition-all"
          aria-label="맨 위로"
        >
          <UpIcon />
        </button>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
function FormIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
    </svg>
  );
}
function UpIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
    </svg>
  );
}
