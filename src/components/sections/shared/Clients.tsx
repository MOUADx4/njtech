"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const partners = [
  {
    name:  "Sogetrel",
    logo:  "/images/Sogetrel.png",
    logoW: 110,
    logoH: 36,
    role:  "Intégrateur national",
    desc:  "Déploiement et intégration d'infrastructures télécom sur tout le territoire pour le compte des grands opérateurs mobiles.",
    geo:   "Île-de-France · Grand Est · Normandie",
    tag:   "Partenaire stratégique",
  },
  {
    name:  "Bouygues Telecom",
    logo:  "/images/BouyguesTelecom.png",
    logoW: 130,
    logoH: 36,
    role:  "Opérateur mobile",
    desc:  "Installation, calage et mise en service d'antennes 4G / 5G sur sites neufs et existants, en zones urbaines et péri-urbaines.",
    geo:   "Paris · IDF · Hauts-de-France",
    tag:   "Sites 4G / 5G",
  },
  {
    name:  "Free Mobile",
    logo:  "/images/FreeMobile.png",
    logoW: 110,
    logoH: 36,
    role:  "Opérateur mobile",
    desc:  "Aménagement de sites radio, maintenance préventive et corrective sur pylônes et toits terrasses en région Sud et Ouest.",
    geo:   "PACA · Occitanie · Auvergne-Rhône-Alpes",
    tag:   "Maintenance & déploiement",
  },
];

const secondary = [
  { name: "Orange",  logo: "/images/Orange.png",  w: 90,  h: 32 },
  { name: "SFR",     logo: "/images/SFR.png",     w: 58,  h: 32 },
  { name: "Cellnex", logo: "/images/Cellnex.png", w: 100, h: 32 },
  { name: "TDF",     logo: "/images/TDF.png",     w: 62,  h: 32 },
];

export default function Clients() {
  return (
    <section id="clients" className="relative overflow-hidden bg-navy-950 py-36 text-white">
      {/* Ligne d'accent en haut */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-500/22 to-transparent" />
      <div className="pointer-events-none absolute -top-40 right-0 size-[50rem] rounded-full bg-signal-600/[0.07] blur-[140px]" />

      <Container className="relative">
        <SectionHeader
          dark
          align="center"
          label="Références clients"
          title={
            <>
              La confiance des{" "}
              <span className="text-gradient-signal">grands acteurs</span>
              <br className="hidden md:block" />
              {" "}du secteur télécom.
            </>
          }
          description="NJTECH Solution intervient sur des projets stratégiques auprès d'opérateurs et d'intégrateurs de premier plan."
        />

        {/* Main partner cards */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {partners.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.065] bg-white/[0.022] p-8 transition-all duration-500 hover:border-signal-500/20 hover:bg-white/[0.042]"
            >
              <div className="pointer-events-none absolute -bottom-16 -right-16 size-44 rounded-full bg-signal-500/0 blur-3xl transition-all duration-700 group-hover:bg-signal-500/[0.11]" />

              <div className="relative">
                {/* Logo + tag row */}
                <div className="flex items-start justify-between gap-3 mb-6">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={p.logoW}
                    height={p.logoH}
                    className="h-8 w-auto object-contain opacity-85 transition-all duration-300 group-hover:opacity-100"
                  />
                  <div className="shrink-0 rounded-md border border-white/[0.08] px-2.5 py-1 text-[0.58rem] font-semibold text-white/25">
                    {p.tag}
                  </div>
                </div>

                {/* Role */}
                <div className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-signal-400 mb-2">
                  {p.role}
                </div>

                {/* Name */}
                <div className="text-[1.2rem] font-semibold leading-tight tracking-tight text-white">
                  {p.name}
                </div>

                <div className="mt-5 h-px bg-white/[0.08]" />

                {/* Description */}
                <p className="mt-5 text-[0.8rem] leading-[1.75] text-white/48">{p.desc}</p>

                {/* Geography */}
                <div className="mt-5 flex items-center gap-2">
                  <div className="size-1.5 rounded-full bg-signal-500/55" />
                  <span className="text-[0.65rem] font-medium text-white/28">{p.geo}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary partners — logo strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 border-t border-white/[0.065] pt-10"
        >
          <div className="mb-8 text-center text-[0.6rem] font-bold uppercase tracking-[0.3em] text-white/18">
            Également partenaires de
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
            {secondary.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="transition-all duration-400"
              >
                <Image
                  src={s.logo}
                  alt={s.name}
                  width={s.w}
                  height={s.h}
                  className="h-7 w-auto object-contain opacity-60 transition-opacity duration-300 hover:opacity-100"
                />
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.36 }}
            >
              <span className="text-[0.78rem] font-bold tracking-[0.2em] text-white/28 transition-colors duration-300 hover:text-white/65">
                HIVORY
              </span>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
