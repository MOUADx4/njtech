"use client";

import { motion } from "framer-motion";
import { MapPin, Radio, Zap, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import FranceCoverageMap from "@/components/sections/FranceCoverageMap";

const features = [
  { icon: MapPin,  title: "Couverture nationale",  text: "Mobilité totale de nos équipes terrain sur toute la métropole." },
  { icon: Radio,   title: "Déploiement 4G & 5G",   text: "Réseaux mobiles intégrés bout en bout, urbain et rural." },
  { icon: Zap,     title: "Zones blanches",         text: "Apporter le signal là où il n'est pas encore arrivé." },
  { icon: Users,   title: "Partenaires nationaux",  text: "Travail collaboratif direct avec opérateurs et intégrateurs." },
];

export default function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-white py-32 scroll-mt-20">

      <Container className="relative">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <SectionHeader
              label="Zone d'intervention"
              title={
                <>
                  Une présence{" "}
                  <span className="text-gradient-signal">partout</span>{" "}
                  en France.
                </>
              }
              description="Basée en Île-de-France, NJTECH intervient sur l'ensemble du territoire — métropole, zones rurales et sites stratégiques."
            />

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl border border-navy-100 bg-white p-5 transition-colors hover:border-signal-200"
                >
                  <div className="grid size-10 place-items-center rounded-lg bg-signal-50 text-signal-600">
                    <f.icon className="size-4" />
                  </div>
                  <div className="mt-4 text-sm font-semibold text-navy-900">{f.title}</div>
                  <div className="mt-1 text-xs leading-relaxed text-navy-600/70">{f.text}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="overflow-hidden rounded-3xl border border-navy-100 bg-navy-50/30 p-5">
              <FranceCoverageMap />
            </div>

            <div className="absolute -bottom-5 -left-4 hidden rounded-2xl border border-navy-100 bg-white px-5 py-4 shadow-2xl md:block">
              <div className="flex items-center gap-3">
                <div className="grid size-10 place-items-center rounded-lg bg-navy-950 text-signal-400">
                  <Radio className="size-4" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy-900">Métropole entière</div>
                  <div className="text-xs text-navy-600/65">Réactivité 48h sur site</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
