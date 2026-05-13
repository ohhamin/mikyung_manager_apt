export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* 배경 이미지 플레이스홀더 */}
      <div className="absolute inset-0 bg-[#0d2347] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3 text-white/10">
          <ImageIcon />
          <span className="text-sm tracking-[0.5em] font-light">메인 비주얼 이미지</span>
        </div>
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-transparent" />
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
          <div className="max-w-2xl animate-fade-in-up">
            {/* 서브타이틀 */}
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-[#c4943a]" />
              <span className="text-[#c4943a] text-[11px] md:text-xs tracking-[0.45em] font-medium uppercase">
                Mikyung Park Vista · Hanam, Gyeonggi-do
              </span>
            </div>

            {/* 메인 타이틀 */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.0] tracking-tight mb-6">
              미경
              <br />
              파크 비스타
            </h1>

            {/* 설명 */}
            <p className="text-white/65 text-sm md:text-base leading-[1.9] mb-9 max-w-md">
              한강이 내려다보이는 미사강변의 프리미엄 주거공간.
              <br />
              자연과 도시가 공존하는 새로운 라이프스타일을 제안합니다.
            </p>

            {/* CTA 버튼 */}
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-[#c4943a] hover:bg-[#a87830] text-white px-7 py-4 text-sm font-semibold tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-[#c4943a]/25"
              >
                분양 상담 신청
                <ArrowIcon />
              </a>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 border border-white/40 text-white hover:border-white/80 hover:bg-white/10 px-7 py-4 text-sm font-medium tracking-wider transition-all duration-300"
              >
                단지 안내 보기
              </a>
            </div>
          </div>

          {/* 하단 스펙 바 */}
          <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/15 border border-white/15 max-w-2xl lg:max-w-3xl">
            {[
              { value: "1,234", unit: "세대", label: "총 세대수" },
              { value: "35", unit: "층", label: "최고 층수" },
              { value: "59~84", unit: "㎡", label: "전용면적" },
              { value: "2028", unit: "년 10월", label: "입주예정" },
            ].map((s) => (
              <div key={s.label} className="bg-black/35 backdrop-blur-sm px-5 sm:px-7 py-5 text-center">
                <div className="text-white font-bold text-xl sm:text-2xl leading-none">
                  {s.value}
                  <span className="text-[11px] text-[#c4943a] ml-0.5 font-light">{s.unit}</span>
                </div>
                <div className="text-white/45 text-[11px] mt-1.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[9px] tracking-[0.4em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30 animate-scroll-line" />
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-20 h-20"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={0.5}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
}
