"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const cyclingPhrases = [
  "le réseau mobile",
  "l'infrastructure 5G",
  "les tours & antennes",
  "le déploiement terrain",
];

const stats = [
  { value: "7+",    label: "Années d'expertise"  },
  { value: "4G·5G", label: "Réseaux déployés"    },
  { value: "24/7",  label: "Disponibilité"        },
  { value: "100%",  label: "Couverture nationale" },
];


const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789·/%+";

function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref        = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState<string>(value);
  const [fired,   setFired]   = useState(false);
  const raf        = useRef<number>(0);
  const reduced    = useReducedMotion();

  const runNumeric = useCallback((target: number, suffix: string) => {
    const duration = 1600;
    const start    = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * target) + suffix);
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  const runScramble = useCallback((target: string) => {
    const totalFrames = 28;
    let frame = 0;
    const tick = () => {
      frame++;
      const progress = frame / totalFrames;
      const revealed = Math.floor(progress * target.length);
      const scrambled = target
        .split("")
        .map((ch, i) => {
          if (i < revealed) return ch;
          if (ch === " " || ch === "/" || ch === "·") return ch;
          return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)];
        })
        .join("");
      setDisplay(scrambled);
      if (frame < totalFrames) raf.current = requestAnimationFrame(tick);
      else setDisplay(target);
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setFired(true); obs.disconnect(); } },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!fired) return;
    if (reduced) { setDisplay(value); return; }
    cancelAnimationFrame(raf.current);
    const numMatch = value.match(/^(\d+)(.*)$/);
    if (numMatch) {
      runNumeric(parseInt(numMatch[1]), numMatch[2]);
    } else {
      runScramble(value);
    }
    return () => cancelAnimationFrame(raf.current);
  }, [fired, value, reduced, runNumeric, runScramble]);

  return (
    <div ref={ref} className="px-6 py-7 md:px-10">
      <div className="text-[2rem] font-black tabular-nums leading-none tracking-tight text-white">
        {display}
      </div>
      <div className="mt-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-white/45">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [idx,       setIdx]       = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % cyclingPhrases.length), 2800);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    setShowVideo(window.innerWidth >= 640);
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#070d18] text-white">

      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
          aria-hidden="true"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-[#070d18]/70 via-[#070d18]/30 to-[#070d18]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070d18]/80 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-1 items-center">
        <Container className="pb-16 pt-40">
          <div className="max-w-[52rem]">

            {/* Overline */}
            <div className="mb-10 flex items-center gap-3">
              <span className="h-px w-8 shrink-0 bg-signal-500" />
              <span className="text-[0.68rem] font-semibold uppercase tracking-[0.32em] text-white/40">
                Infrastructures Télécom &middot; France Métropolitaine
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.8rem,5.6vw,5.6rem)] font-bold leading-[1.06] tracking-[-0.032em]">
              <span className="block text-white/95">Nous bâtissons</span>

              {/* Animated ticker — Cormorant Garamond italic */}
              <span className="block overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={idx}
                    className="block italic text-signal-400"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    initial={{ y: "105%",  opacity: 0 }}
                    animate={{ y: "0%",    opacity: 1 }}
                    exit={{    y: "-105%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {cyclingPhrases[idx]}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="block text-white/95">français.</span>
            </h1>

            {/* Divider */}
            <div className="my-9 h-px w-14 bg-white/[0.14]" />

            {/* Description */}
            <p className="max-w-[50ch] text-[1.05rem] leading-[1.78] text-white/48">
              Déploiement, intégration et maintenance d'infrastructures
              télécom 4G et 5G pour les grands opérateurs nationaux —
              Bouygues Telecom, Free Mobile, Orange, SFR — partout en France.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/services"
                className="btn-shimmer inline-flex items-center gap-2.5 bg-signal-500 px-7 py-3.5 text-[0.875rem] font-semibold text-white transition-colors duration-200 hover:bg-signal-600 active:scale-[0.98]"
              >
                Nos prestations
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 border border-white/[0.18] px-7 py-3.5 text-[0.875rem] font-semibold text-white/70 transition-all duration-200 hover:border-white/40 hover:text-white active:scale-[0.98]"
              >
                Nous contacter
              </Link>
              <a
                href="tel:+33988504015"
                className="hidden items-center gap-2 text-[0.8rem] font-medium text-white/45 transition-colors hover:text-white/75 md:flex"
              >
                <PhoneCall className="size-3.5" />
                09 88 50 40 15
              </a>
            </div>

          </div>
        </Container>
      </div>

      <div className="relative z-10 border-t border-white/[0.07]">
        <Container>
          <div className="grid grid-cols-2 divide-x divide-white/[0.07] md:grid-cols-4">
            {stats.map((s) => (
              <AnimatedStat key={s.label} value={s.value} label={s.label} />
            ))}
          </div>
        </Container>
      </div>
    </section>
  );
}
