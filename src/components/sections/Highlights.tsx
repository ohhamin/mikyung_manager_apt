import AnimatedSection from "@/components/ui/AnimatedSection";

const ITEMS = [
  {
    num: "01",
    title: "팍세권",
    subtitle: "Park Premium",
    desc: "사상공원 민간공원조성 특례사업으로 단지가 대규모 공원으로 둘러싸인 환경. 미세먼지 저감, 풍부한 녹지 조망, 도심 속 힐링 공간.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "직주근접",
    subtitle: "Live & Work",
    desc: "부산 도심 산업지구와 인접하면서도 공단과 이격된 쾌적한 주거 환경. 출퇴근 시간을 획기적으로 단축하는 최적의 입지.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "대중교통",
    subtitle: "Transit Hub",
    desc: "부산 2호선 감전역 도보 7분. 사상역(2·5호선, 부전~마산) 환승. 사상복합환승센터까지 도보 이동 가능한 트리플 교통망.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "개발 호재",
    subtitle: "Development",
    desc: "사상스마트드림시티, 사상복합환승센터, 사상~해운대 대심도 등 사상구 발전 10대 핵심사업 추진으로 미래 가치 상승 기대.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-9 h-9" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.4}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
];

export default function Highlights() {
  return (
    <section className="bg-[#f5f3ef] border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 py-16 md:py-24">
        <AnimatedSection animation="fade-up" className="text-center mb-12 md:mb-16">
          <p className="text-[#c9963c] text-[11px] tracking-[0.45em] font-semibold uppercase mb-3">
            Core Values
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0d1f15] tracking-tight">
            왜 더파크 비스타 동원인가
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {ITEMS.map((item, i) => (
            <AnimatedSection key={item.num} animation="fade-up" delay={i * 100} threshold={0.05}>
              <div className="hover-card group bg-white p-8 border border-gray-100 hover:border-[#c9963c]/25 h-full flex flex-col">
                {/* 번호 */}
                <span className="text-[#c9963c]/20 text-5xl font-black leading-none mb-4 block group-hover:text-[#c9963c]/30 transition-colors">
                  {item.num}
                </span>
                {/* 아이콘 */}
                <div className="text-[#c9963c] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                  {item.icon}
                </div>
                {/* 텍스트 */}
                <p className="text-[10px] text-[#c9963c] tracking-[0.35em] font-semibold uppercase mb-1.5">
                  {item.subtitle}
                </p>
                <h3 className="text-[#0d1f15] text-lg font-black mb-3 tracking-tight">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-[1.85] flex-1">{item.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
