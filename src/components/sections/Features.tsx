import SectionTitle from "@/components/ui/SectionTitle";

const FEATURES = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "테마 조경",
    subtitle: "Nature Landscaping",
    desc: "한강을 모티브로 한 수변 테마 조경과 사계절 꽃길, 자연학습원이 펼쳐집니다. 약 12,000㎡ 규모의 중앙정원.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "스마트홈",
    subtitle: "Smart Home System",
    desc: "IoT 기반 스마트홈 시스템으로 조명·냉난방·보안을 스마트폰 하나로 제어. 에너지 절감 최대 30%.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "안전 시스템",
    subtitle: "Security System",
    desc: "CCTV 360대, AI 안면인식 출입 시스템, 무인 경비 로봇, 어린이 안심 귀가 서비스로 365일 안전.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "친환경 에너지",
    subtitle: "Eco Energy",
    desc: "태양광 발전 설비, 지열 히트펌프, 빗물 재활용 시스템으로 에너지 자립율 극대화. 그린 1등급 인증.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "무인 편의 서비스",
    subtitle: "Unmanned Service",
    desc: "무인 택배 보관함, 스마트 주차 관제, 자동화 분리수거, 전기차 충전소 40기 완비로 편의성 극대화.",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "한강 조망 설계",
    subtitle: "Han River View",
    desc: "전략적 동 배치로 한강 조망 세대 최대화. 북향·저층 세대도 중앙 정원 녹지 조망을 확보한 특화 설계.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#f7f5f0] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Special Features"
          title="특화설계"
          description="미경 파크 비스타만의 특별한 설계 포인트로 한 차원 높은 주거 경험을 선사합니다."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="group bg-white p-8 border border-gray-100 hover:border-[#c4943a]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-[#c4943a] mb-5 group-hover:scale-110 transition-transform duration-300 inline-block">
                {f.icon}
              </div>
              <p className="text-[10px] text-[#c4943a] tracking-[0.35em] font-medium uppercase mb-1.5">
                {f.subtitle}
              </p>
              <h3 className="text-[#0c1b33] text-lg font-bold mb-3">{f.title}</h3>
              <p className="text-gray-500 text-sm leading-[1.85]">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
