"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Antenna, Cable, Wrench, ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const services = [
  {
    num: "01",
    slug: "amenagement-sites-radio",
    icon: Building2,
    title: "Aménagement de sites radio",
    text: "Sites neufs ou existants — toits terrasses, pylônes, infrastructures en milieu urbain et rural. Coordination complète des travaux de génie civil et d'installation.",
    image: "/images/rural-tower.png",
  },
  {
    num: "02",
    slug: "deploiement-antennes",
    icon: Antenna,
    title: "Déploiement antennes & faisceaux",
    text: "Installation et calage d'antennes sectorielles, faisceaux hertziens, équipements RAN. Mise en service et optimisation des paramètres RF.",
    image: "/images/technician-climbing.png",
  },
  {
    num: "03",
    slug: "bureau-etude",
    icon: Cable,
    title: "Bureau d'étude",
    text: "Plans DP / DTB / DIM / APS / APD / DOE, photomontages et suivi de conformité. Expertise technique au service de vos projets les plus complexes.",
    image: "/images/bts-cabinet.png",
  },
  {
    num: "04",
    slug: "maintenance-sav",
    icon: Wrench,
    title: "Maintenance & SAV",
    text: "Préparation matériel, interventions correctives, vérification avant remise en service. Réactivité garantie sous 48h sur l'ensemble du territoire.",
    image: "/images/install-5g.png",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="noise relative overflow-hidden bg-navy-950 py-36 text-white"
    >
      <div className="pointer-events-none absolute top-0 left-1/2 -z-0 h-[52rem] w-[72rem] -translate-x-1/2 rounded-full bg-signal-600/[0.065] blur-[130px]" />

      <Container className="relative">

        {/* Header row */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeader
            dark
            label="Nos prestations"
            title={
              <>
                Une expertise complète,<br />
                du <span className="text-gradient-signal">design</span> à la mise en service.
              </>
            }
            description="De l'étude à l'installation, en passant par la maintenance — NJTECH couvre toute la chaîne de valeur télécom."
          />
          <Link
            href="/services"
            className="group shrink-0 inline-flex items-center gap-2 text-[0.78rem] font-semibold text-white/38 hover:text-signal-400 transition-colors"
          >
            Voir toutes les prestations
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.065] bg-white/[0.022] p-9 transition-all duration-500 hover:border-signal-500/22 hover:bg-white/[0.042]"
            >
              {/* Number watermark */}
              <div className="pointer-events-none absolute -right-2 -top-5 select-none font-black text-[6rem] leading-none tracking-tight text-white/[0.035] transition-colors duration-500 group-hover:text-white/[0.055]">
                {s.num}
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-signal-500/0 blur-3xl transition-all duration-700 group-hover:bg-signal-500/[0.09]" />

              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  {/* Icon */}
                  <div className="mb-6 inline-flex size-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.05] text-signal-400">
                    <s.icon className="size-4.5" />
                  </div>

                  {/* Title */}
                  <h3 className="text-[1.2rem] font-semibold leading-tight tracking-tight text-white">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-[0.83rem] leading-[1.75] text-white/50">
                    {s.text}
                  </p>

                  {/* CTA */}
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-7 inline-flex items-center gap-2 text-[0.75rem] font-semibold text-signal-400/70 transition-all duration-300 group-hover:gap-3 group-hover:text-signal-400"
                  >
                    En savoir plus <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>

                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden rounded-xl md:h-40 md:w-36">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 144px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#020816]/80 to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
