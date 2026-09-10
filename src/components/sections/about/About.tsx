"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Radio, Target, ShieldCheck } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const pillars = [
  {
    icon: Award,
    title: "Plus de 5 ans terrain",
    text: "Une expertise éprouvée sur les chantiers télécom les plus exigeants.",
  },
  {
    icon: Radio,
    title: "Spécialiste 4G / 5G",
    text: "Du déploiement initial à la mise en service complète des réseaux mobiles.",
  },
  {
    icon: Target,
    title: "Qualité sans compromis",
    text: "Suivi de conformité, contrôle terrain et reporting rigoureux à chaque étape.",
  },
  {
    icon: ShieldCheck,
    title: "Partenaires de référence",
    text: "Intervention directe pour les grands opérateurs et intégrateurs nationaux.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-surface-muted relative overflow-hidden py-32">
      <Container className="relative">
        <div className="grid gap-20 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <SectionHeader
              label="À propos"
              title={
                <>
                  Un acteur de terrain
                  <br />
                  au service de la <span className="text-gradient-signal">connectivité</span>.
                </>
              }
              description="NJTECH accompagne opérateurs et intégrateurs dans le déploiement, l'intégration et la maintenance des infrastructures télécom. Notre mission : garantir un signal fiable, partout."
            />

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative mt-12 overflow-hidden rounded-2xl"
            >
              <Image
                src="/images/team-njtech.webp"
                alt="Équipe NJTECH sur site"
                width={1200}
                height={900}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-full w-full object-cover"
              />
              <div className="from-navy-950/85 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-7">
                <div className="text-caption text-signal-400 font-semibold tracking-[0.22em] uppercase">
                  Équipes terrain
                </div>
                <div className="mt-1 text-base font-semibold text-white">
                  Techniciens certifiés, déployés sur chantier
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group border-navy-100 hover:border-signal-200 shadow-card hover:shadow-card-hover relative overflow-hidden rounded-2xl border bg-white p-7 transition-all hover:-translate-y-1.5"
                >
                  <div className="bg-signal-50 absolute -top-14 -right-14 size-28 rounded-full opacity-0 transition-all duration-500 group-hover:scale-110 group-hover:opacity-100" />
                  <div className="relative">
                    <p.icon className="text-signal-600 size-11" strokeWidth={1.5} />
                    <h3 className="text-navy-900 mt-5 text-base font-semibold">{p.title}</h3>
                    <p className="text-body-lg text-navy-600/80 mt-2 leading-relaxed">{p.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-950 mt-5 rounded-2xl p-8 text-white"
            >
              <div className="bg-signal-500 mb-4 h-px w-10" />
              <p className="text-h4 leading-relaxed text-white/85">
                « Apporter aux opérateurs un partenaire fiable, agile et technique — capable de
                livrer dans les délais des infrastructures conformes, sécurisées et durables. »
              </p>
            </motion.blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
