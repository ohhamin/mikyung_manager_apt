export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* 배경 그라디언트 (공원/자연 컨셉) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d3020] via-[#0d1f15] to-[#070f0a]">
        {/* 녹색 자연광 효과 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_30%,rgba(30,93,52,0.45),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_20%_70%,rgba(10,40,18,0.6),transparent)]" />
        {/* 파티클 느낌의 점들 */}
        <div className="absolute inset-0 opacity-[0.06]"
          style={{ backgroundImage: "radial-gradient(circle, #c9963c 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
        {/* 이미지 플레이스홀더 */}
        <div className="absolute inset-0 flex items-center justify-center text-white/[0.04]">
          <span className="text-[8vw] font-black tracking-tighter select-none">THE PARK VISTA</span>
        </div>
        {/* 하단 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
      </div>

      {/* 우측 장식선 */}
      <div className="absolute right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-2 items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="w-px bg-white/20"
            style={{ height: i === 2 ? "64px" : "24px", opacity: i === 2 ? 0.4 : 0.15 }}
          />
        ))}
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 w-full pb-20 md:pb-28 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

          {/* 상단 뱃지 */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-3">
            <div className="w-8 h-px bg-[#c9963c]" />
            <span className="text-[#c9963c] text-[10px] md:text-[11px] tracking-[0.5em] font-semibold uppercase">
              Busan · Sasang · Gamdong
            </span>
            <div className="w-8 h-px bg-[#c9963c]" />
          </div>

          {/* 메인 카피 */}
          <div className="animate-fade-in-up-d1">
            <p className="text-white/55 text-sm md:text-base font-light tracking-[0.25em] mb-3">
              공원 속의 명당
            </p>
            <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-black text-white leading-[0.9] tracking-tight mb-2">
              더파크
            </h1>
            <h1 className="text-[clamp(3rem,9vw,7.5rem)] font-black leading-[0.9] tracking-tight mb-6"
              style={{ WebkitTextStroke: "2px rgba(201,150,60,0.7)", color: "transparent" }}>
              비스타 동원
            </h1>
          </div>

          {/* 서브 카피 */}
          <p className="animate-fade-in-up-d2 text-white/60 text-sm md:text-base leading-[1.9] mb-10 max-w-lg">
            부산광역시 사상구 최초<br />
            <strong className="text-white/85 font-semibold">사상공원 민간공원조성 특례사업</strong>으로 탄생하는<br />
            공원이 곧 프리미엄인 주거 공간
          </p>

          {/* CTA 버튼 */}
          <div className="animate-fade-in-up-d2 flex flex-wrap gap-3 mb-12 md:mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#c9963c] hover:bg-[#a87830] text-white px-8 py-4 text-sm font-bold tracking-widest transition-all duration-300 hover:shadow-2xl hover:shadow-[#c9963c]/30 btn-shine"
            >
              분양 상담 신청
              <ArrowIcon />
            </a>
            <a
              href="#overview"
              className="inline-flex items-center gap-2 border border-white/35 text-white hover:border-[#c9963c]/70 hover:bg-white/5 px-8 py-4 text-sm font-medium tracking-wider transition-all duration-300"
            >
              단지 안내 보기
            </a>
          </div>

          {/* 하단 스펙 바 */}
          <div className="animate-fade-in-up-d3 grid grid-cols-2 sm:grid-cols-4 border border-white/12 max-w-2xl lg:max-w-3xl">
            {[
              { value: "852", unit: "세대", label: "총 세대수" },
              { value: "25", unit: "층", label: "최고 층수" },
              { value: "전용 84", unit: "㎡", label: "전용면적" },
              { value: "2029", unit: "년 01월", label: "입주예정" },
            ].map((s, i) => (
              <div
                key={s.label}
                className={`bg-black/40 backdrop-blur-sm px-5 sm:px-7 py-5 text-center ${
                  i < 3 ? "border-r border-white/12" : ""
                } ${i >= 2 ? "border-t border-white/12 sm:border-t-0" : ""}`}
              >
                <div className="text-white font-black text-xl sm:text-2xl leading-none">
                  {s.value}
                  <span className="text-[11px] text-[#c9963c] ml-0.5 font-medium">{s.unit}</span>
                </div>
                <div className="text-white/40 text-[11px] mt-1.5 tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 animate-fade-in-up-d3">
        <span className="text-[9px] tracking-[0.5em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/25 animate-scroll-line" />
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
