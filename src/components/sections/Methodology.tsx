"use client";

import { motion } from "framer-motion";
import { ClipboardList, Hammer, FileCheck2, CheckCircle2 } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const steps = [
  {
    n: "01",
    icon: ClipboardList,
    title: "Étude & dossier",
    text: "Plans DP/DTB/DIM/APS/APD/DOE, photomontages, vérifications administratives.",
  },
  {
    n: "02",
    icon: Hammer,
    title: "Préparation chantier",
    text: "Gestion du matériel, logistique dédiée, plan de prévention PGC / HARMO.",
  },
  {
    n: "03",
    icon: FileCheck2,
    title: "Intervention terrain",
    text: "2 équipes mobiles, coordination bureau d'étude, sécurité maximale.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Conformité & livraison",
    text: "Contrôles, mise en service, DOE, dossier de fin de travaux signé.",
  },
];

export default function Methodology() {
  return (
    <section id="methodology" className="relative overflow-hidden bg-white py-32 scroll-mt-20">
      <Container>
        <SectionHeader
          align="center"
          label="Méthodologie"
          title={
            <>
              Organisation{" "}
              <span className="text-gradient-signal">opérationnelle</span>,
              <br />pensée pour la performance.
            </>
          }
          description="Chaque chantier suit une méthodologie claire et industrialisée — un gage de qualité, de sécurité et de réactivité."
        />

        <div className="relative mt-24">
          {/* connector */}
          <div className="absolute left-1/2 top-8 hidden h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-signal-200 to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative pt-10"
              >
                {/* Step number badge */}
                <div className="absolute -top-1 left-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="grid size-16 place-items-center rounded-2xl bg-navy-950 text-signal-400 shadow-xl shadow-navy-900/20 ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-1">
                    <s.icon className="size-6" />
                  </div>
                </div>

                <div className="rounded-2xl border border-navy-100 bg-white p-7 transition-all duration-300 hover:shadow-xl hover:shadow-navy-900/5">
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-signal-500">
                    {s.n}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-navy-900">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-600/75">
                    {s.text}
                  </p>
                  <div className="mt-6 h-0.5 w-10 rounded-full bg-gradient-to-r from-signal-400 to-signal-600 transition-all duration-500 group-hover:w-20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 rounded-3xl bg-navy-950 p-10 text-white"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { v: "2", l: "Équipes terrain mobiles" },
              { v: "1", l: "Bureau d'étude dédié" },
              { v: "1", l: "Local logistique en propre" },
            ].map((b) => (
              <div key={b.l} className="flex items-baseline gap-5">
                <div className="text-5xl font-semibold tracking-tight text-white">
                  <AnimatedCounter value={b.v} duration={1400} />
                </div>
                <div className="text-sm leading-snug text-white/60">{b.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
