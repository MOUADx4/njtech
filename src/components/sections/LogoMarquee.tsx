"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const partners = [
  { name: "Bouygues Telecom", logo: "/images/BouyguesTelecom.png", w: 160, h: 48 },
  { name: "Free Mobile",      logo: "/images/FreeMobile.png",      w: 130, h: 48 },
  { name: "Orange",           logo: "/images/Orange.png",          w: 120, h: 48 },
  { name: "SFR",              logo: "/images/SFR.png",             w: 80,  h: 48 },
  { name: "Sogetrel",         logo: "/images/Sogetrel.png",        w: 140, h: 48 },
  { name: "Cellnex",          logo: "/images/Cellnex.png",         w: 130, h: 48 },
  { name: "TDF",              logo: "/images/TDF.png",             w: 80,  h: 48 },
];

const all = [...partners, ...partners, ...partners];

export default function LogoMarquee() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-white py-12">
      {/* Transition fade depuis le Hero sombre */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-[#020816]/20 to-transparent" />
      {/* Ligne de séparation basse */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-navy-100/60 to-transparent" />
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-white to-transparent" />

      <Container>
        <p className="mb-8 text-center text-[0.6rem] font-bold uppercase tracking-[0.32em] text-navy-900/22">
          Opérateurs &amp; intégrateurs partenaires
        </p>
      </Container>

      <div
        className="logo-track flex will-change-transform"
        style={{ animation: reduced ? "none" : "logoScroll 42s linear infinite" }}
      >
        {all.map((p, i) => (
          <div
            key={i}
            className="mx-12 flex shrink-0 items-center opacity-65 transition-all duration-500 hover:opacity-100"
          >
            <Image
              src={p.logo}
              alt={p.name}
              width={p.w}
              height={p.h}
              sizes="160px"
              className="h-9 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes logoScroll {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-100% / 3)); }
        }
        .logo-track:hover { animation-play-state: paused; }
      `}</style>
    </section>
  );
}
