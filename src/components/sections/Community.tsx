import SectionTitle from "@/components/ui/SectionTitle";

const FACILITIES = [
  { name: "피트니스센터", size: "약 450㎡", floor: "지하 1층" },
  { name: "실내수영장", size: "약 620㎡", floor: "지하 2층" },
  { name: "스파&사우나", size: "약 280㎡", floor: "지하 2층" },
  { name: "골프연습장", size: "약 180㎡", floor: "지하 1층" },
  { name: "독서실·스터디룸", size: "약 160㎡", floor: "지하 1층" },
  { name: "어린이집", size: "약 380㎡", floor: "동 1층" },
  { name: "카페테리아", size: "약 220㎡", floor: "동 1층" },
  { name: "게스트하우스", size: "2룸·4실", floor: "동 1층" },
];

export default function Community() {
  return (
    <section className="bg-[#0c1b33] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        <SectionTitle
          subtitle="Community Facility"
          title="커뮤니티 시설"
          description="주민의 건강과 여가를 책임지는 프리미엄 커뮤니티 시설을 제공합니다."
          light
        />

        {/* 메인 이미지 플레이스홀더 */}
        <div className="mb-8">
          <div className="w-full aspect-[21/7] bg-gray-700/50 border border-white/10 flex flex-col items-center justify-center gap-3 text-white/20">
            <LargeImageIcon />
            <span className="text-sm tracking-[0.4em]">커뮤니티 시설 전경 이미지</span>
          </div>
        </div>

        {/* 시설 그리드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4">
          {FACILITIES.map((f, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] bg-gray-700/40 border border-white/8 hover:border-[#c4943a]/40 transition-all duration-300 group overflow-hidden"
            >
              {/* 플레이스홀더 */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white/20 group-hover:text-white/30 transition-colors">
                <SmallImageIcon />
              </div>
              {/* 시설 정보 오버레이 */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                <p className="text-white text-xs md:text-sm font-semibold leading-tight">{f.name}</p>
                <p className="text-[#c4943a] text-[10px] mt-0.5 tracking-wide">{f.floor} · {f.size}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 통계 바 */}
        <div className="mt-10 md:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 border-t border-white/10 pt-10">
          {[
            { value: "8종", label: "커뮤니티 시설" },
            { value: "2,290㎡", label: "총 시설 면적" },
            { value: "24시간", label: "관리 서비스" },
            { value: "무료", label: "입주민 이용" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-white font-bold text-2xl md:text-3xl">{s.value}</p>
              <p className="text-white/40 text-xs mt-1.5 tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LargeImageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function SmallImageIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
