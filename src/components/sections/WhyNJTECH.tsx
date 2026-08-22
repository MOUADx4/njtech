"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Radio, MapPin, Users,
  Zap, HardHat, BookOpen, Clock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import { AnimatedCounter, AnimatedReveal } from "@/components/ui/AnimatedCounter";

const hero = {
  icon:  ShieldCheck,
  value: "0",
  label: "Accident grave",
  desc:  "Culture sécurité intégrée à chaque intervention — EPI obligatoires, plans de prévention, consignation des installations et formations continues. Aucun compromis sur la sécurité terrain.",
  kpis:  ["EPI certifiés", "Plans de prévention", "Habilitations électriques", "Conduite d'engins"],
};

const featured = [
  {
    icon:  Zap,
    value: "48",
    unit:  "h",
    label: "Réactivité garantie",
    desc:  "Mobilisation sur tout type de site télécom — intervention confirmée sous 48h sur l'ensemble du territoire.",
  },
  {
    icon:  Users,
    value: "7",
    unit:  "",
    label: "Partenaires référencés",
    desc:  "Bouygues Telecom, Free Mobile, Orange, SFR, Sogetrel, Cellnex, TDF — les acteurs majeurs du réseau français.",
  },
  {
    icon:  MapPin,
    value: "13",
    unit:  "",
    label: "Régions d'intervention",
    desc:  "Présence active dans toutes les régions métropolitaines — zones urbaines, rurales et blanches.",
  },
];

const secondary = [
  {
    icon:  Clock,
    value: "7",
    unit:  "+",
    label: "Années d'expérience",
    desc:  "Expertise terrain reconnue par les grands opérateurs depuis 2019.",
  },
  {
    icon:  Radio,
    value: "4G·5G·FH",
    unit:  "",
    label: "Technologies déployées",
    desc:  "Antennes sectorielles, faisceaux hertziens PDH/SDH, équipements RAN.",
  },
  {
    icon:  BookOpen,
    value: "2",
    unit:  "",
    label: "Équipes mobiles",
    desc:  "Deux équipes terrain capables d'opérer en simultané.",
  },
  {
    icon:  HardHat,
    value: "100",
    unit:  "%",
    label: "Travaux certifiés",
    desc:  "Habilitations électriques, travaux en hauteur, conduite d'engins.",
  },
];

export default function WhyNJTECH() {
  return (
    <section className="noise relative overflow-hidden bg-navy-950 py-36 text-white">
      {/* Ligne d'accent en haut */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-500/25 to-transparent" />
      <div className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 size-[40rem] rounded-full bg-signal-600/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-[32rem] rounded-full bg-signal-600/[0.05] blur-[120px]" />

      <Container className="relative">
        <div className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="section-label text-signal-400 mb-7"
            >
              Pourquoi NJTECH
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.07 }}
              className="text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.033em] text-white md:text-[3rem]"
            >
              Ce qui nous distingue<br />
              <span className="text-gradient-signal">sur le terrain.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="max-w-sm text-[0.92rem] leading-[1.75] text-white/42"
          >
            NJTECH combine expertise technique, rigueur opérationnelle et réactivité
            pour devenir le partenaire de référence des opérateurs français.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="group relative overflow-hidden rounded-2xl border border-signal-500/25 bg-signal-500/[0.06] p-8 md:p-10"
        >
          {/* Emerald glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-signal-500/[0.12] blur-[80px] transition-all duration-700 group-hover:bg-signal-500/[0.18]" />
          <div className="pointer-events-none absolute right-0 top-0 h-px w-1/2 bg-gradient-to-l from-transparent via-signal-500/30 to-transparent" />

          <div className="relative grid gap-10 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
            {/* Left — big stat */}
            <div className="flex items-center gap-6 md:flex-col md:items-start md:gap-4">
              <div className="inline-flex size-14 items-center justify-center rounded-2xl border border-signal-500/30 bg-signal-500/[0.12]">
                <hero.icon className="size-7 text-signal-400" />
              </div>
              <div>
                <div className="text-[5rem] font-black leading-none tracking-[-0.05em] text-signal-400 md:text-[7rem]">
                  <AnimatedCounter value={hero.value} duration={1200} />
                </div>
                <div className="mt-1 text-[1rem] font-bold text-signal-300/80">
                  {hero.label}
                </div>
              </div>
            </div>

            {/* Right — description + kpis */}
            <div>
              <p className="text-[0.95rem] leading-[1.82] text-white/60 max-w-2xl">
                {hero.desc}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {hero.kpis.map((k) => (
                  <span
                    key={k}
                    className="rounded-full border border-signal-500/20 bg-signal-500/[0.08] px-3.5 py-1.5 text-[0.72rem] font-semibold text-signal-300/80"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-3 grid gap-3 sm:grid-cols-3">
          {featured.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] p-7 transition-all duration-500 hover:border-signal-500/30 hover:bg-white/[0.06]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-signal-500/0 blur-3xl transition-all duration-700 group-hover:bg-signal-500/[0.1]" />
              <div className="relative">
                <div className="mb-5 inline-flex size-10 items-center justify-center rounded-xl border border-signal-500/20 bg-signal-500/[0.1] text-signal-400">
                  <f.icon className="size-4.5" />
                </div>
                <div className="text-[3.2rem] font-black leading-none tracking-[-0.04em] text-white">
                  <AnimatedCounter value={f.value} duration={1600} />
                  {f.unit && <span className="text-[2rem]">{f.unit}</span>}
                </div>
                <div className="mt-3 text-[0.82rem] font-semibold text-white/85">{f.label}</div>
                <p className="mt-2 text-[0.76rem] leading-[1.65] text-white/42">{f.desc}</p>
                <div className="mt-5 h-px w-0 rounded-full bg-gradient-to-r from-signal-500 to-signal-400/60 transition-all duration-500 group-hover:w-10" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.065] bg-white/[0.022] p-6 transition-all duration-500 hover:border-white/[0.11] hover:bg-white/[0.04]"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-signal-500/0 blur-2xl transition-all duration-700 group-hover:bg-signal-500/[0.07]" />
              <div className="relative">
                <div className="mb-4 inline-flex size-9 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.05] text-signal-400">
                  <s.icon className="size-4" />
                </div>
                <div className="text-[2.4rem] font-black leading-none tracking-[-0.04em] text-white">
                  <AnimatedCounter value={s.value} duration={1600} />
                  {s.unit && <span className="text-[1.5rem]">{s.unit}</span>}
                </div>
                <div className="mt-2.5 text-[0.75rem] font-semibold text-white/75">{s.label}</div>
                <p className="mt-1.5 text-[0.72rem] leading-[1.6] text-white/35">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
