"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

function parseValue(value: string): {
  prefix: string;
  num: number | null;
  suffix: string;
  separator?: { pos: number; sep: string };
} {
  // "100%" → prefix:"", num:100, suffix:"%"
  // "5+"   → prefix:"", num:5,   suffix:"+"
  // "24/7" → prefix:"", num:24,  suffix:"/7"
  // "4G·5G" → treat as non-numeric text

  const m = value.match(/^([A-Za-z]*)(\d+)([^0-9]*)$/);
  if (!m) return { prefix: "", num: null, suffix: value };

  return {
    prefix: m[1],
    num: parseInt(m[2]),
    suffix: m[3],
  };
}

export function AnimatedCounter({
  value,
  duration = 1800,
  className,
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState<string>(() => {
    const parsed = parseValue(value);
    return parsed.num !== null ? `${parsed.prefix}0${parsed.suffix}` : value;
  });

  const parsedRef = useRef(parseValue(value));

  useEffect(() => {
    if (!inView) return;
    const { prefix, num, suffix } = parsedRef.current;
    if (num === null) {
      setDisplay(value);
      return;
    }

    const startTime = performance.now();

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutExpo(progress);
      const current = Math.round(eased * num!);
      setDisplay(`${prefix}${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  }, [inView, value, duration]);

  return <span ref={ref} className={className}>{display}</span>;
}

/** For non-numeric values like "4G·5G" — character reveal */
export function AnimatedReveal({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setShown(i);
      if (i >= value.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  }, [inView, value.length]);

  return (
    <span ref={ref} className={className}>
      {value.slice(0, shown)}
      {shown < value.length && (
        <span className="animate-pulse text-signal-400/60">_</span>
      )}
    </span>
  );
}
