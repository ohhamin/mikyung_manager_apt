export default function Footer() {
  return (
    <footer className="bg-[#070f0a] text-white/45 text-xs">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10">
        {/* 상단 */}
        <div className="border-b border-white/8 py-10 md:py-12">
          <div className="mb-5">
            <p className="text-[#901649] text-[9px] tracking-[0.5em] font-bold uppercase mb-1.5">
              Dongwon Development
            </p>
            <p className="text-white text-xl font-black tracking-wide">더파크 비스타 동원</p>
            <p className="text-white/30 text-[11px] mt-1 tracking-wider">THE PARK VISTA DONGWON</p>
          </div>
          <div className="space-y-2">
            <p>📍 부산광역시 사상구 감전동 산 1-9 일원</p>
            <p>
              📞 분양 문의:{" "}
              <a href="tel:1877-2131" className="text-white/65 hover:text-white transition-colors font-bold">
                1877-2131
              </a>
            </p>
          </div>
        </div>

        {/* 사업 주체 */}
        <div className="border-b border-white/8 py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-[11px]">
          {[
            { label: "시행사", value: "동원개발 주식회사" },
            { label: "시공사", value: "동원개발 주식회사" },
            { label: "분양대행사", value: "(주)더파크 분양서비스" },
          ].map((c) => (
            <div key={c.label} className="flex gap-2">
              <span className="text-white/25 shrink-0">{c.label}</span>
              <span className="text-white/55">{c.value}</span>
            </div>
          ))}
        </div>

        {/* 법적 고지 */}
        <div className="py-8 space-y-3">
          <p className="text-[10px] leading-[1.9] text-white/25">
            ※ 본 홈페이지의 내용은 분양 홍보 목적으로 제작되었으며, 사업 진행 과정에서 변경될 수 있습니다.
            설계, 사업 일정, 분양가 등의 세부 내용은 추후 관계 기관 승인을 거쳐 확정됩니다.
            단지 내 조감도, 투시도, 평면도 등의 이미지는 소비자의 이해를 돕기 위한 CG이며 실제와 다를 수 있습니다.
          </p>
          <p className="text-[10px] leading-[1.9] text-white/25">
            ※ 입주자 모집 공고문은 모델하우스 및 APT2YOU 청약시스템에서 확인하시기 바랍니다.
            청약 자격 및 조건은 입주자 모집 공고문을 기준으로 합니다.
          </p>
          <p className="text-[10px] text-white/15 mt-4">
            © 2026 더파크 비스타 동원 · 동원개발 주식회사. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
