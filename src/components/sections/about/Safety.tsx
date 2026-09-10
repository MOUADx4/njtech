"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  HardHat,
  ShieldCheck,
  FileText,
  AlertTriangle,
  ClipboardCheck,
  Lock,
  Zap,
  Award,
} from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const points = [
  { icon: HardHat, title: "Port obligatoire des EPI" },
  { icon: Lock, title: "Procédures de consignation" },
  { icon: ClipboardCheck, title: "Vérification avant remise en service" },
  { icon: FileText, title: "Plans de prévention PGC / HARMO" },
  { icon: ShieldCheck, title: "Respect strict des normes" },
  { icon: AlertTriangle, title: "Culture sécurité terrain" },
];

export default function Safety() {
  return (
    <section className="bg-navy-50/40 relative overflow-hidden py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-5"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <Image
                src="/images/safety-ppe.png"
                alt="Équipements de protection individuelle"
                width={1100}
                height={1100}
                className="h-full w-full object-cover"
              />
              <div className="ring-navy-900/10 absolute inset-0 rounded-2xl ring-1 ring-inset" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-950 absolute -right-5 -bottom-5 hidden rounded-2xl px-6 py-5 shadow-2xl md:block"
            >
              <div className="text-h2 font-bold text-white">
                <AnimatedCounter value="0" duration={800} />
              </div>
              <div className="text-caption mt-1 font-medium tracking-[0.16em] text-white/55 uppercase">
                Accident grave
              </div>
            </motion.div>
          </motion.div>

          <div className="lg:col-span-7">
            <SectionHeader
              label="Sécurité"
              title={
                <>
                  La sécurité, <span className="text-gradient-signal">premier réflexe</span> de
                  chaque intervention.
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
                  className="border-navy-100 hover:border-signal-200 flex items-center gap-3 rounded-2xl border bg-white p-4 transition-colors"
                >
                  <div className="bg-signal-50 text-signal-600 grid size-10 shrink-0 place-items-center rounded-lg">
                    <p.icon className="size-4" />
                  </div>
                  <span className="text-body-lg text-navy-800 font-medium">{p.title}</span>
                </motion.div>
              ))}
            </div>

            {/* Certification badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="border-navy-100 mt-8 border-t pt-8"
            >
              <p className="text-eyebrow text-navy-400/60 mb-4 font-bold tracking-[0.26em] uppercase">
                Habilitations &amp; certifications
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { icon: HardHat, label: "Travaux en hauteur NF EN 363" },
                  { icon: Zap, label: "Habilitation électrique B2V" },
                  { icon: Award, label: "CACES R487" },
                  { icon: ShieldCheck, label: "Formation SST" },
                  { icon: ClipboardCheck, label: "PGC / HARMO" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="border-navy-200 text-body text-navy-700 inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-1.5 font-medium shadow-sm"
                  >
                    <Icon className="text-signal-500 size-3.5 shrink-0" />
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
