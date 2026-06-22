interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
}

export default function SectionTitle({
  subtitle,
  title,
  description,
  light = false,
  align = "center",
}: Props) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col ${alignClass} mb-14 md:mb-18`}>
      {subtitle && (
        <p
          className={`text-[11px] md:text-xs tracking-[0.45em] font-bold uppercase mb-3 ${
            light ? "text-white" : "text-[#901649]"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-black mb-5 leading-tight tracking-tight ${
          light ? "text-white" : "text-[#901649]"
        }`}
      >
        {title}
      </h2>
      <div className={`flex items-center gap-3 mb-5 ${align === "left" ? "" : "justify-center"}`}>
        <div className={`w-12 h-px ${light ? "bg-white" : "bg-[#901649]"}`} />
        <div className={`w-2 h-2 rotate-45 ${light ? "bg-white" : "bg-[#901649]"}`} />
        <div className={`w-12 h-px ${light ? "bg-white" : "bg-[#901649]"}`} />
      </div>
      {description && (
        <p
          className={`text-sm md:text-base leading-[2.0] max-w-2xl ${
            light ? "text-white/60" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
