"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { HardHat, ShieldCheck, FileText, AlertTriangle, ClipboardCheck, Lock, Zap, Award } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const points = [
  { icon: HardHat,        title: "Port obligatoire des EPI" },
  { icon: Lock,           title: "Procédures de consignation" },
  { icon: ClipboardCheck, title: "Vérification avant remise en service" },
  { icon: FileText,       title: "Plans de prévention PGC / HARMO" },
  { icon: ShieldCheck,    title: "Respect strict des normes" },
  { icon: AlertTriangle,  title: "Culture sécurité terrain" },
];

export default function Safety() {
  return (
    <section className="relative overflow-hidden bg-navy-50/40 py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/safety-ppe.png"
                alt="Équipements de protection individuelle"
                width={1100}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-navy-900/10" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-5 -right-5 hidden rounded-2xl bg-navy-950 px-6 py-5 shadow-2xl md:block"
            >
              <div className="text-4xl font-bold text-white">
                <AnimatedCounter value="0" duration={800} />
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.16em] text-white/50">
                Accident grave
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <SectionHeader
              label="Sécurité"
              title={
                <>
                  La sécurité,{" "}
                  <span className="text-gradient-signal">premier réflexe</span>{" "}
                  de chaque intervention.
                </>
              }
              description="Travailler en hauteur sur des infrastructures télécom impose des règles strictes. NJTECH applique une culture sécurité de bout en bout — du briefing au contrôle final."
            />

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {points.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center gap-3 rounded-xl border border-navy-100 bg-white p-4 transition-colors hover:border-signal-200"
                >
                  <div className="grid size-10 shrink-0 place-items-center rounded-lg bg-signal-50 text-signal-600">
                    <p.icon className="size-4" />
                  </div>
                  <span className="text-sm font-medium text-navy-800">{p.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Certification badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 border-t border-navy-100 pt-8"
            >
              <p className="mb-4 text-[0.6rem] font-bold uppercase tracking-[0.26em] text-navy-400/60">
                Habilitations &amp; certifications
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: HardHat,        label: "Travaux en hauteur NF EN 363" },
                  { icon: Zap,            label: "Habilitation électrique B2V"  },
                  { icon: Award,          label: "CACES R487"                   },
                  { icon: ShieldCheck,    label: "Formation SST"                },
                  { icon: ClipboardCheck, label: "PGC / HARMO"                  },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white px-3.5 py-1.5 text-[0.75rem] font-medium text-navy-700 shadow-sm"
                  >
                    <Icon className="size-3.5 shrink-0 text-signal-500" />
                    {label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
