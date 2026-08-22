"use client";

import { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function BackToTop() {
  const [visible, setVisible]   = useState(false);
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const total    = document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrolled > 400);
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduced ? "instant" : "smooth" });
  }, [reduced]);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Retour en haut"
      className={[
        "fixed bottom-6 left-6 z-50",
        "grid size-11 cursor-pointer place-items-center rounded-lg",
        "bg-navy-950/90 text-white/60 shadow-lg shadow-black/30 backdrop-blur-md",
        "transition-all duration-300 hover:bg-navy-900 hover:text-white hover:-translate-y-0.5",
        "active:scale-95",
        visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none",
      ].join(" ")}
    >
      {/* Progress arc — rounded-rect outline, pathLength="1" normalises dash math */}
      <svg
        className="pointer-events-none absolute -inset-[3px]"
        width={50}
        height={50}
        viewBox="0 0 50 50"
        fill="none"
        aria-hidden="true"
      >
        {/* Static track */}
        <path
          d="M 40.5 1.5 H 9.5 Q 1.5 1.5 1.5 9.5 V 40.5 Q 1.5 48.5 9.5 48.5 H 40.5 Q 48.5 48.5 48.5 40.5 V 9.5 Q 48.5 1.5 40.5 1.5 Z"
          stroke="currentColor"
          strokeWidth={2}
          className="text-white/[0.07]"
        />
        {/* Animated fill */}
        <path
          d="M 40.5 1.5 H 9.5 Q 1.5 1.5 1.5 9.5 V 40.5 Q 1.5 48.5 9.5 48.5 H 40.5 Q 48.5 48.5 48.5 40.5 V 9.5 Q 48.5 1.5 40.5 1.5 Z"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="text-signal-500 transition-[stroke-dashoffset] duration-150"
          pathLength="1"
          strokeDasharray="1"
          strokeDashoffset={1 - progress}
        />
      </svg>
      <ArrowUp className="relative size-4" />
    </button>
  );
}
