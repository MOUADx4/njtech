"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import HeroBackground from "@/components/effects/HeroBackground";

export default function PageHero({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  }, []);

  const onMouseLeave = useCallback(() =>
    setSpotlight((s) => ({ ...s, active: false })), []);

  return (
    <section
      className="relative overflow-hidden bg-[#020816] pb-24 pt-44 text-white"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <HeroBackground interactive={false} />

      {/* Spotlight */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: spotlight.active ? 1 : 0,
          background: `radial-gradient(circle 600px at ${spotlight.x}% ${spotlight.y}%, rgba(14,165,233,0.09) 0%, transparent 70%)`,
        }}
      />

      {/* Bottom separator */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

      <Container className="relative z-10">
        <motion.p
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-label text-signal-400 mb-8"
        >
          {label}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl text-balance font-semibold tracking-[-0.038em] text-white"
          style={{ fontSize: "clamp(2.6rem, 6vw, 5rem)", lineHeight: 1.05 }}
        >
          {title}
        </motion.h1>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-2xl text-[1.05rem] leading-[1.78] text-white/52"
          >
            {description}
          </motion.p>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: "left" }}
          className="mt-16 h-px bg-gradient-to-r from-signal-500/45 via-signal-500/10 to-transparent"
        />
      </Container>
    </section>
  );
}
