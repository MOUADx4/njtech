"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";

const items = [
  {
    image:    "/images/install-5g.png",
    tag:      "5G — Urbain",
    title:    "Pylône 5G en milieu dense",
    subtitle: "Calage faisceaux + intégration baseband",
    colSpan:  "sm:col-span-2",
    rowSpan:  "",
  },
  {
    image:    "/images/technician-climbing.png",
    tag:      "Antennes",
    title:    "Intervention en hauteur",
    subtitle: "Travaux sur pylône — EPI complets",
    colSpan:  "",
    rowSpan:  "sm:row-span-2",
  },
  {
    image:    "/images/team-njtech.png",
    tag:      "Équipe terrain",
    title:    "Coordination chantier",
    subtitle: "Deux équipes mobiles + supervision",
    colSpan:  "",
    rowSpan:  "",
  },
  {
    image:    "/images/bts-cabinet.png",
    tag:      "BTS",
    title:    "Armoire technique",
    subtitle: "Chemin de câbles, intégration baie",
    colSpan:  "",
    rowSpan:  "",
  },
  {
    image:    "/images/rural-tower.png",
    tag:      "Zone rurale",
    title:    "Couverture zone blanche",
    subtitle: "Déploiement et mise en service",
    colSpan:  "",
    rowSpan:  "",
  },
  {
    image:    "/images/hero-tower-sunset.png",
    tag:      "Infrastructure",
    title:    "Site finalisé & réceptionné",
    subtitle: "Conformité validée, mise en exploitation",
    colSpan:  "sm:col-span-2",
    rowSpan:  "",
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="relative overflow-hidden bg-white py-32">
      {/* Fade depuis la section Services sombre */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20 bg-gradient-to-b from-navy-950/20 to-transparent" />
      {/* Fade vers la section Clients sombre */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 bg-gradient-to-b from-transparent to-navy-950/18" />
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            label="Réalisations"
            title={
              <>
                Des infrastructures{" "}
                <span className="text-gradient-signal">livrées</span>
                <br />sur tout le territoire.
              </>
            }
            description="Quelques exemples concrets d'interventions sur des sites télécom 4G et 5G — urbains, ruraux et stratégiques."
          />
          <Link
            href="/realisations"
            className="group shrink-0 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-navy-500 hover:text-navy-900 transition-colors"
          >
            Voir toutes les réalisations
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Bento grid — spotlight effect via group/peer CSS */}
        <div className="bento-grid mt-14 grid auto-rows-[260px] gap-3 sm:grid-cols-3">
          {items.map((it, i) => (
            <motion.figure
              key={it.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.85, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className={[
                "bento-card group relative cursor-pointer overflow-hidden rounded-2xl bg-navy-950",
                it.colSpan,
                it.rowSpan,
              ].filter(Boolean).join(" ")}
            >
              {/* Image */}
              <Image
                src={it.image}
                alt={it.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover opacity-75 transition-all duration-700 group-hover:scale-[1.06] group-hover:opacity-95"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />

              {/* Tag */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
                <span className="inline-flex items-center rounded-full bg-white/[0.1] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  {it.tag}
                </span>
              </div>

              {/* Caption — specs slide up on hover */}
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <div className="text-[1.05rem] font-semibold text-white leading-tight">
                  {it.title}
                </div>

                <div className="mt-3 translate-y-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="text-[0.78rem] text-white/60">{it.subtitle}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>

      {/*
        Spotlight: when ANY bento-card is hovered, dim its siblings.
        Pure CSS via :has() — no JS needed, graceful fallback.
      */}
      <style>{`
        @media (hover: hover) {
          .bento-grid:has(.bento-card:hover) .bento-card:not(:hover) {
            opacity: 0.55;
            transform: scale(0.985);
            transition: opacity 0.4s ease, transform 0.4s ease;
          }
          .bento-grid .bento-card {
            transition: opacity 0.4s ease, transform 0.4s ease;
          }
        }
      `}</style>
    </section>
  );
}
