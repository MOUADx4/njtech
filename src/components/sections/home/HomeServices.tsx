"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import { SERVICES } from "@/lib/services-data";
import { SERVICE_ICONS } from "@/lib/service-icons";

/**
 * Dérivé de la source unique `SERVICES`. La carte d'accueil affiche
 * l'accroche courte (`teaser`) plutôt que la description longue.
 */
const services = SERVICES.map((s) => ({
  ...s,
  num: s.n,
  text: s.teaser,
  icon: SERVICE_ICONS[s.icon],
}));

export default function Services() {
  return (
    <section
      id="services"
      className="noise bg-navy-950 relative overflow-hidden border-t border-white/[0.07] py-36 text-white"
    >
      <div className="bg-signal-600/[0.065] pointer-events-none absolute top-0 left-1/2 -z-0 h-[52rem] w-[72rem] -translate-x-1/2 rounded-full blur-[130px]" />

      <Container className="relative">
        {/* Ligne d'en-tête */}
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <SectionHeader
            dark
            label="Nos prestations"
            title={
              <>
                Une expertise complète,
                <br />
                du <span className="text-gradient-signal">design</span> à la mise en service.
              </>
            }
            description="De l'étude à l'installation, en passant par la maintenance — NJTECH couvre toute la chaîne de valeur télécom."
          />
          <Link
            href="/services"
            className="tap-target group text-body hover:text-signal-400 inline-flex shrink-0 items-center gap-2 font-semibold text-white/55 transition-colors"
          >
            Voir toutes les prestations
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Grille de cartes */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="group hover:border-signal-500/22 relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] p-9 transition-all duration-500 hover:bg-white/[0.04]"
            >
              {/* Number watermark */}
              <div className="pointer-events-none absolute -top-5 -right-2 text-[6rem] leading-none font-black tracking-tight text-white/[0.035] transition-colors duration-500 select-none group-hover:text-white/[0.055]">
                {s.num}
              </div>

              {/* Halo au survol */}
              <div className="bg-signal-500/0 group-hover:bg-signal-500/[0.09] pointer-events-none absolute -top-20 -right-20 size-56 rounded-full blur-3xl transition-all duration-500" />

              <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  {/* Icône */}
                  <s.icon className="text-signal-400 mb-6 size-11" strokeWidth={1.5} />

                  {/* Titre */}
                  <h3 className="text-h4 leading-tight font-semibold tracking-tight text-white">
                    {s.title}
                  </h3>

                  {/* Description */}
                  <p className="md:text-body mt-3.5 text-base leading-[1.75] text-white/55">
                    {s.text}
                  </p>

                  {/* Bouton d'action */}
                  <Link
                    href={`/services/${s.slug}`}
                    className="tap-target text-body text-signal-400/70 group-hover:text-signal-400 mt-7 inline-flex items-center gap-2 font-semibold transition-all duration-300 group-hover:gap-3"
                  >
                    En savoir plus <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>

                {/* Image */}
                <div className="relative h-32 w-full overflow-hidden rounded-2xl md:h-40 md:w-36">
                  <Image
                    src={s.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 144px, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
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
