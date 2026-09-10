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
    <section
      id="methodology"
      className="bg-surface-muted relative scroll-mt-20 overflow-hidden py-32"
    >
      <Container>
        <SectionHeader
          align="center"
          label="Méthodologie"
          title={
            <>
              Organisation <span className="text-gradient-signal">opérationnelle</span>,
              <br />
              pensée pour la performance.
            </>
          }
          description="Chaque chantier suit une méthodologie claire et industrialisée — un gage de qualité, de sécurité et de réactivité."
        />

        <div className="relative mt-24">
          {/* connector */}
          <div className="via-signal-200 absolute top-8 left-1/2 hidden h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent to-transparent lg:block" />

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
                {/* Pastille du numéro d'étape */}
                <div className="absolute -top-1 left-0 lg:left-1/2 lg:-translate-x-1/2">
                  <div className="bg-navy-950 text-signal-400 shadow-navy-900/20 grid size-16 place-items-center rounded-2xl shadow-xl ring-4 ring-white transition-transform duration-300 group-hover:-translate-y-1">
                    <s.icon className="size-6" />
                  </div>
                </div>

                <div className="border-navy-100 shadow-card hover:shadow-card-hover rounded-2xl border bg-white p-7 transition-all duration-300">
                  <div className="text-caption text-signal-500 font-bold tracking-[0.2em] uppercase">
                    {s.n}
                  </div>
                  <h3 className="text-h4 text-navy-900 mt-3 font-semibold">{s.title}</h3>
                  <p className="text-body-lg text-navy-600/75 mt-2 leading-relaxed">{s.text}</p>
                  <div className="from-signal-400 to-signal-600 mt-6 h-0.5 w-10 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-20" />
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
          className="bg-navy-950 mt-16 rounded-2xl p-10 text-white"
        >
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { v: "2", l: "Équipes terrain mobiles" },
              { v: "1", l: "Bureau d'étude dédié" },
              { v: "1", l: "Local logistique en propre" },
            ].map((b) => (
              <div key={b.l} className="flex items-baseline gap-5">
                <div className="text-h1 font-semibold tracking-tight text-white">
                  <AnimatedCounter value={b.v} duration={1400} />
                </div>
                <div className="text-body-lg leading-snug text-white/55">{b.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
