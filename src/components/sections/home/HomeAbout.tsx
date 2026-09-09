"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";

const pillars = [
  "Rigueur opérationnelle reconnue par les opérateurs",
  "Bureau d'études interne intégré",
  "Certifications travaux en hauteur & électriques",
  "Réactivité terrain — interventions sous 48h",
];

const milestones = [
  { year: "2019", label: "Fondation", desc: "Création à Épinay-sur-Seine — premier chantier télécom livré dans les délais." },
  { year: "2021", label: "Référencement opérateurs", desc: "Partenariat Bouygues Telecom & Sogetrel officialisé." },
  { year: "2023", label: "Déploiements 5G", desc: "Interventions 5G actives sur plusieurs régions simultanément." },
  { year: "2024", label: "Capacité doublée", desc: "Deuxième équipe terrain — deux chantiers en parallèle." },
];

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white py-36">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-navy-950/18" />

      <Container className="relative">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">

          {/* ── Left: text ── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label text-signal-600 mb-8">Qui sommes-nous</div>

            <h2 className="text-[2.3rem] font-semibold leading-[1.08] tracking-[-0.033em] text-navy-950 md:text-[3rem]">
              Le partenaire télécom
              <br />
              <span className="text-gradient-signal">de référence</span>
              <br />
              en France.
            </h2>

            <p className="mt-8 text-[1.02rem] leading-[1.82] text-navy-700/62">
              Basée à Épinay-sur-Seine, NJTECH Solution accompagne les opérateurs
              et intégrateurs nationaux dans le déploiement, l'intégration et la
              maintenance des infrastructures télécom 4G et 5G.
            </p>

            <ul className="mt-9 space-y-3.5">
              {pillars.map((p) => (
                <li key={p} className="flex items-start gap-3 text-[0.85rem] text-navy-700/60">
                  <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-signal-500" />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href="/a-propos"
              className="mt-10 inline-flex items-center gap-2 text-[0.85rem] font-semibold text-navy-900 transition-colors hover:text-signal-600"
            >
              En savoir plus sur NJTECH <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* ── Right: timeline ── */}
          <div className="flex flex-col justify-center">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex gap-5 pb-7 last:pb-0"
              >
                {/* Rail: dot + line */}
                <div className="flex shrink-0 flex-col items-center pt-2.5 w-4">
                  <div className="size-2.5 shrink-0 rounded-full bg-signal-500 ring-[3px] ring-white shadow-sm transition-all duration-300 group-hover:ring-signal-100 group-hover:shadow-signal-500/20 group-hover:shadow-md" />
                  {i < milestones.length - 1 && (
                    <div className="mt-1.5 w-px flex-1 bg-gradient-to-b from-signal-300/50 to-navy-100/40 transition-colors duration-500 group-hover:from-signal-400/60" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-hidden pb-2">
                  {/* Year as prominent watermark anchor */}
                  <div className="select-none text-[2.6rem] font-black leading-[0.85] tracking-[-0.05em] text-navy-100 transition-colors duration-400 group-hover:text-signal-100">
                    {m.year}
                  </div>

                  <div className="mt-2 text-[0.9rem] font-semibold leading-snug text-navy-900">
                    {m.label}
                  </div>
                  <p className="mt-1 text-[0.79rem] leading-[1.66] text-navy-600/80">
                    {m.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
