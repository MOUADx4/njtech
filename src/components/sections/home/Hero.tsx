"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { contact } from "@/config/site";

const cyclingPhrases = [
  "le réseau mobile",
  "l'infrastructure 5G",
  "les tours & antennes",
  "le déploiement terrain",
];

const stats = [
  { value: "7+", label: "Années d'expertise" },
  { value: "4G·5G", label: "Réseaux déployés" },
  { value: "24/7", label: "Disponibilité" },
  { value: "100%", label: "Couverture nationale" },
];

/**
 * Statistique révélée au défilement.
 *
 * La valeur affichée est toujours la valeur réelle : l'animation ne porte que
 * sur l'opacité et le flou. Les compteurs incrémentaux ont été retirés car ils
 * affichaient des états faux et lisibles — « 1/7 » en route vers « 24/7 »,
 * « 4 % » vers « 100 % » — le temps de converger.
 */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [fired, setFired] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFired(true);
          obs.disconnect();
        }
      },
      { threshold: 0.6 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const visible = fired || reduced;

  return (
    <div ref={ref} className="px-6 py-7 md:px-10">
      <motion.div
        className="text-[2rem] leading-none font-black tracking-tight text-white tabular-nums"
        initial={false}
        animate={
          visible
            ? { opacity: 1, filter: "blur(0px)", y: 0 }
            : { opacity: 0, filter: "blur(10px)", y: 8 }
        }
        transition={{ duration: reduced ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
      >
        {value}
      </motion.div>
      <div className="text-eyebrow mt-2 font-semibold tracking-[0.22em] text-white/55 uppercase">
        {label}
      </div>
    </div>
  );
}

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % cyclingPhrases.length), 2800);
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
        <Container className="pt-40 pb-16">
          <div className="max-w-[52rem]">
            {/* Overline */}
            <div className="mb-10 flex items-center gap-3">
              <span className="bg-signal-500 h-px w-8 shrink-0" />
              <span className="text-caption font-semibold tracking-[0.32em] text-white/55 uppercase">
                Infrastructures Télécom &middot; France Métropolitaine
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[clamp(2.8rem,5.6vw,5.6rem)] leading-[1.06] font-bold tracking-[-0.032em]">
              <span className="block text-white/95">Nous bâtissons</span>

              {/* popLayout : la phrase sortante est retirée du flux, entrée et
                  sortie se chevauchent donc — sans le vide que laissait "wait". */}
              <span className="relative block overflow-hidden">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={idx}
                    className="text-signal-400 block italic"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                    initial={{ y: "105%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-105%", opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  >
                    {cyclingPhrases[idx]}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span className="block text-white/95">français.</span>
            </h1>

            {/* Séparateur */}
            <div className="my-9 h-px w-14 bg-white/[0.18]" />

            {/* Description */}
            <p className="text-lead max-w-[50ch] leading-[1.78] text-white/55">
              Déploiement, intégration et maintenance d'infrastructures télécom 4G et 5G pour les
              grands opérateurs nationaux — Bouygues Telecom, Free Mobile, Orange, SFR — partout en
              France.
            </p>

            {/* Boutons d'action */}
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Button href="/services">
                Nos prestations
                <ArrowRight className="size-4" />
              </Button>
              <Button href="/contact" variant="secondary">
                Nous contacter
              </Button>
              <a
                href={`tel:${contact.phone.switchboardE164}`}
                className="text-body hidden items-center gap-2 font-medium text-white/55 transition-colors hover:text-white/70 md:flex"
              >
                <PhoneCall className="size-3.5" />
                {contact.phone.switchboard}
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
