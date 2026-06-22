import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src="/1.jpg"
          alt="더파크 비스타 동원 단지 전경"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />
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
      <div className="relative z-10 w-full pt-[140px] pb-20 md:pt-[160px] md:pb-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">

          {/* 로고 - 가운데 정렬 */}
          <div className="animate-fade-in-up mb-8 flex justify-center">
            <Image
              src="/21.png"
              alt="동원개발"
              width={160}
              height={24}
              className="object-contain"
            />
          </div>

          {/* 메인 카피 */}
          <div className="animate-fade-in-up-d1 mb-6">
            <p className="text-white/55 text-xs md:text-sm font-medium tracking-[0.35em] mb-5 uppercase">
              민간공원 특례사업 · 서부산 랜드마크 대단지 아파트
            </p>
            <h1 className="text-[clamp(1.6rem,4vw,3.4rem)] font-black text-white/70 leading-[1.25] tracking-tight max-w-3xl">
              민간공원 특례사업
            </h1>
            <h2 className="text-[clamp(1.4rem,3.2vw,2.7rem)] font-black text-white leading-[1.25] tracking-tight mt-2 max-w-2xl">
              서부산 랜드마크 대단지 아파트
            </h2>
          </div>

          {/* 구분선 */}
          <div className="animate-fade-in-up-d2 flex items-center justify-center gap-4 mb-10">
            <div className="w-14 h-px bg-[#ffffff]" />
            <div className="w-2 h-2 rotate-45 bg-[#ffffff]" />
            <div className="w-14 h-px bg-[#ffffff]" />
          </div>

          {/* 하단 스펙 바 */}
          <div className="animate-fade-in-up-d3 grid grid-cols-2 sm:grid-cols-4 border border-white/12 max-w-2xl lg:max-w-3xl mx-auto">
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
                  <span className="text-[11px] text-[#ffffff] ml-0.5 font-medium">{s.unit}</span>
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
