const LINKS = [
  { label: "단지개요", id: "overview" },
  { label: "위치안내", id: "location" },
  { label: "평형안내", id: "units" },
  { label: "분양일정", id: "schedule" },
  { label: "특화설계", id: "features" },
  { label: "상담신청", id: "contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#070f1e] text-white/50 text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* 상단 */}
        <div className="border-b border-white/8 py-10 md:py-12 flex flex-col md:flex-row gap-8 md:gap-0 justify-between">
          {/* 로고 + 연락처 */}
          <div>
            <div className="mb-5">
              <p className="text-[#c4943a] text-[9px] tracking-[0.45em] font-medium uppercase mb-1">
                Mikyung · Hanam
              </p>
              <p className="text-white text-xl font-bold tracking-wider">파크 비스타</p>
            </div>
            <div className="space-y-1.5">
              <p>📍 경기도 하남시 미사강변동 234-5번지 일원</p>
              <p>
                📞 분양 문의:{" "}
                <a href="tel:031-1234-5678" className="text-white/70 hover:text-white transition-colors font-medium">
                  031-1234-5678
                </a>
              </p>
              <p>🕐 운영시간: 평일 09:00 ~ 18:00 · 주말 10:00 ~ 17:00</p>
            </div>
          </div>

          {/* 빠른 메뉴 */}
          <div>
            <p className="text-white/30 text-[10px] tracking-[0.35em] uppercase mb-4">Quick Menu</p>
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="hover:text-white hover:text-[#c4943a] transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 사업 주체 */}
        <div className="border-b border-white/8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px]">
          {[
            { label: "시행사", value: "미경개발 주식회사" },
            { label: "시공사", value: "미경건설 주식회사" },
            { label: "분양대행사", value: "(주)미경분양서비스" },
          ].map((c) => (
            <div key={c.label} className="flex gap-2">
              <span className="text-white/30 shrink-0">{c.label}</span>
              <span className="text-white/60">{c.value}</span>
            </div>
          ))}
        </div>

        {/* 법적 고지 */}
        <div className="py-7 space-y-3">
          <p className="text-[10px] leading-[1.85] text-white/30">
            ※ 본 홈페이지의 내용은 분양 홍보 목적으로 제작되었으며, 사업 진행 과정에서 변경될 수 있습니다.
            설계, 사업 일정, 분양가 등의 세부 내용은 추후 관계 기관 승인을 거쳐 확정됩니다.
            단지 내 조감도, 투시도, 평면도 등의 이미지는 소비자의 이해를 돕기 위한 CG(컴퓨터그래픽)이며
            실제와 다를 수 있습니다. 옵션 및 유상 서비스는 별도 비용이 발생할 수 있습니다.
          </p>
          <p className="text-[10px] leading-[1.85] text-white/30">
            ※ 입주자 모집 공고문은 모델하우스 및 APT2YOU 청약시스템에서 확인하시기 바랍니다.
            청약 자격 및 조건은 입주자 모집 공고문을 기준으로 합니다.
            금융 및 세금 관련 사항은 별도 전문가 상담을 권장합니다.
          </p>
          <p className="text-[10px] text-white/20 mt-4">
            © 2026 미경 파크 비스타 · 미경개발 주식회사. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
