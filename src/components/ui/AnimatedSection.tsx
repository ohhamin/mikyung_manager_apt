"use client";
import { CSSProperties } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export type AosAnimation = "fade-up" | "fade-left" | "fade-right" | "zoom-in" | "fade-in";

interface Props {
  children: React.ReactNode;
  animation?: AosAnimation;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const HIDDEN: Record<AosAnimation, CSSProperties> = {
  "fade-up":    { opacity: 0, transform: "translateY(52px)" },
  "fade-left":  { opacity: 0, transform: "translateX(-52px)" },
  "fade-right": { opacity: 0, transform: "translateX(52px)" },
  "zoom-in":    { opacity: 0, transform: "scale(0.88)" },
  "fade-in":    { opacity: 0 },
};

const VISIBLE: CSSProperties = { opacity: 1, transform: "none" };

export default function AnimatedSection({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 800,
  className = "",
  threshold = 0.1,
}: Props) {
  const { ref, isVisible } = useScrollAnimation(threshold);

  const style: CSSProperties = {
    transition: `opacity ${duration}ms cubic-bezier(0.4,0,0.2,1), transform ${duration}ms cubic-bezier(0.4,0,0.2,1)`,
    transitionDelay: `${delay}ms`,
    ...(isVisible ? VISIBLE : HIDDEN[animation]),
  };

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  );
}
