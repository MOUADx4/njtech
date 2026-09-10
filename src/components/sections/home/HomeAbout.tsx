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
  {
    year: "2019",
    label: "Fondation",
    desc: "Création à Épinay-sur-Seine — premier chantier télécom livré dans les délais.",
  },
  {
    year: "2021",
    label: "Référencement opérateurs",
    desc: "Partenariat Bouygues Telecom & Sogetrel officialisé.",
  },
  {
    year: "2023",
    label: "Déploiements 5G",
    desc: "Interventions 5G actives sur plusieurs régions simultanément.",
  },
  {
    year: "2024",
    label: "Capacité doublée",
    desc: "Deuxième équipe terrain — deux chantiers en parallèle.",
  },
];

export default function HomeAbout() {
  return (
    <section className="relative overflow-hidden bg-white py-36">
      <div className="to-navy-950/18 pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent" />

      <Container className="relative">
        <div className="grid gap-20 lg:grid-cols-2 lg:gap-28">
          {/* ── Colonne gauche : texte ── */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-label text-signal-600 mb-8">Qui sommes-nous</div>

            <h2 className="text-h2 text-navy-950 md:text-h1 leading-[1.08] font-semibold tracking-[-0.033em]">
              Le partenaire télécom
              <br />
              <span className="text-gradient-signal">de référence</span>
              <br />
              en France.
            </h2>

            <p className="text-lead text-navy-700/70 mt-8 leading-[1.82]">
              Basée à Épinay-sur-Seine, NJTECH Solution accompagne les opérateurs et intégrateurs
              nationaux dans le déploiement, l'intégration et la maintenance des infrastructures
              télécom 4G et 5G.
            </p>

            <ul className="mt-9 space-y-3.5">
              {pillars.map((p) => (
                <li key={p} className="text-body-lg text-navy-700/60 flex items-start gap-3">
                  <CheckCircle2 className="text-signal-500 mt-0.5 size-4 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href="/a-propos"
              className="tap-target text-body-lg text-navy-900 hover:text-signal-600 mt-10 inline-flex items-center gap-2 font-semibold transition-colors"
            >
              En savoir plus sur NJTECH <ArrowRight className="size-4" />
            </Link>
          </motion.div>

          {/* ── Colonne droite : frise chronologique ── */}
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
                {/* Rail : point + trait */}
                <div className="flex w-4 shrink-0 flex-col items-center pt-2.5">
                  <div className="bg-signal-500 group-hover:ring-signal-100 group-hover:shadow-signal-500/20 size-2.5 shrink-0 rounded-full shadow-sm ring-[3px] ring-white transition-all duration-300 group-hover:shadow-md" />
                  {i < milestones.length - 1 && (
                    <div className="from-signal-300/50 to-navy-100/40 group-hover:from-signal-400/60 mt-1.5 w-px flex-1 bg-gradient-to-b transition-colors duration-500" />
                  )}
                </div>

                {/* Contenu */}
                <div className="flex-1 overflow-hidden pb-2">
                  {/* Année en filigrane, repère visuel */}
                  <div className="text-navy-100 group-hover:text-signal-100 text-[2.6rem] leading-[0.85] font-black tracking-[-0.05em] transition-colors duration-300 select-none">
                    {m.year}
                  </div>

                  <div className="text-body-lg text-navy-900 mt-2 leading-snug font-semibold">
                    {m.label}
                  </div>
                  <p className="text-body text-navy-600/80 mt-1 leading-[1.66]">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
