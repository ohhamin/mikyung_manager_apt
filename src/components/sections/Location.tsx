import SectionTitle from "@/components/ui/SectionTitle";

const TRANSIT = [
  {
    type: "지하철",
    icon: "🚇",
    items: [
      { name: "5호선 미사역", time: "도보 5분" },
      { name: "9호선 환승 연결", time: "14분" },
    ],
  },
  {
    type: "버스",
    icon: "🚌",
    items: [
      { name: "광역버스 강남행", time: "35분" },
      { name: "시내버스 다수 노선", time: "단지 앞" },
    ],
  },
  {
    type: "도로",
    icon: "🚗",
    items: [
      { name: "올림픽대로", time: "10분" },
      { name: "강변북로·외곽순환", time: "15분" },
    ],
  },
];

const INFRA = [
  { category: "교육", color: "bg-blue-50 border-blue-200 text-blue-700", items: ["미사초등학교 500m", "미사중학교 800m", "하남고등학교 1.2km", "하남미사학원가"] },
  { category: "쇼핑", color: "bg-amber-50 border-amber-200 text-amber-700", items: ["스타필드 하남 3km", "이마트 미사점 1km", "현대프리미엄아울렛 4km", "미사강변 로데오거리"] },
  { category: "의료", color: "bg-green-50 border-green-200 text-green-700", items: ["한양대 구리병원 5km", "하남 종합병원 2km", "미사 의료클러스터", "응급의료 24시"] },
  { category: "공원", color: "bg-emerald-50 border-emerald-200 text-emerald-700", items: ["한강미사지구 강변공원 도보 3분", "미사경정공원 2km", "강동그린웨이 1km", "한강시민공원"] },
];

export default function Location() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Location Guide"
          title="위치안내"
          description="경기도 하남시 미사강변의 최적 입지에서 편리한 교통과 풍부한 생활 인프라를 누려보세요."
        />

        {/* 지도 플레이스홀더 */}
        <div className="relative mb-10 md:mb-14">
          <div className="w-full aspect-[16/7] md:aspect-[16/6] bg-gray-200 flex flex-col items-center justify-center gap-3 text-gray-400">
            <MapIcon />
            <span className="text-sm tracking-wider">지도 이미지</span>
            <span className="text-xs text-gray-300">경기도 하남시 미사강변동 234-5번지 일원</span>
          </div>
          {/* 마커 라벨 */}
          <div className="absolute top-4 left-4 bg-[#0c1b33] text-white text-xs px-3 py-2 font-semibold tracking-wide">
            📍 미경 파크 비스타
          </div>
        </div>

        {/* 교통 접근성 */}
        <h3 className="text-[#0c1b33] text-lg font-bold mb-5 tracking-wide border-l-4 border-[#c4943a] pl-4">
          교통 접근성
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 md:mb-16">
          {TRANSIT.map((t) => (
            <div key={t.type} className="border border-gray-100 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">{t.icon}</span>
                <span className="text-[#0c1b33] font-bold text-base tracking-wide">{t.type}</span>
              </div>
              <div className="space-y-3">
                {t.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-baseline gap-2">
                    <span className="text-gray-600 text-sm">{item.name}</span>
                    <span className="text-[#c4943a] text-sm font-semibold shrink-0">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 주변 인프라 */}
        <h3 className="text-[#0c1b33] text-lg font-bold mb-5 tracking-wide border-l-4 border-[#c4943a] pl-4">
          주변 생활 인프라
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {INFRA.map((inf) => (
            <div key={inf.category} className={`border ${inf.color} p-5`}>
              <p className="font-bold text-sm mb-3 tracking-wide">{inf.category}</p>
              <ul className="space-y-1.5">
                {inf.items.map((item) => (
                  <li key={item} className="text-xs flex items-start gap-1.5 text-gray-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-current shrink-0 opacity-50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-16 h-16"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={0.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
      />
    </svg>
  );
}
