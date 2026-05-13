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
    <div className={`flex flex-col ${alignClass} mb-12 md:mb-16`}>
      {subtitle && (
        <p
          className={`text-[11px] md:text-xs tracking-[0.4em] font-medium uppercase mb-3 ${
            light ? "text-[#e8c97a]" : "text-[#c4943a]"
          }`}
        >
          {subtitle}
        </p>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold mb-4 leading-tight ${
          light ? "text-white" : "text-[#0c1b33]"
        }`}
      >
        {title}
      </h2>
      <div className={`flex items-center gap-3 mb-5 ${align === "left" ? "" : "justify-center"}`}>
        <div className="w-10 h-px bg-[#c4943a]" />
        <div className="w-1.5 h-1.5 rotate-45 bg-[#c4943a]" />
        <div className="w-10 h-px bg-[#c4943a]" />
      </div>
      {description && (
        <p
          className={`text-sm md:text-base leading-[1.9] max-w-2xl ${
            light ? "text-white/65" : "text-gray-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
