"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { Building2, Antenna, Cable, Wrench, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";

const services = [
  {
    n: "01",
    slug: "amenagement-sites-radio",
    icon: Building2,
    title: "Aménagement de sites radio",
    text: "Nous prenons en charge l'aménagement complet de sites neufs ou existants — toits terrasses, pylônes et infrastructures en milieu urbain et rural. De la préparation du génie civil à l'installation des équipements actifs, nos équipes garantissent un site opérationnel dans les délais.",
    points: [
      "Génie civil et fondations",
      "Toits terrasses & sites monopole",
      "Préparation des ancrages et supports",
      "Mise en conformité des sites existants",
    ],
    image: "/images/rural-tower.png",
  },
  {
    n: "02",
    slug: "deploiement-antennes",
    icon: Antenna,
    title: "Déploiement antennes & faisceaux",
    text: "Installation et calage précis d'antennes sectorielles, faisceaux hertziens et équipements RAN. Nos techniciens certifiés interviennent en hauteur avec tous les équipements de sécurité pour une mise en service parfaite.",
    points: [
      "Antennes sectorielles 4G / 5G",
      "Faisceaux hertziens PDH / SDH",
      "Équipements RAN (Nokia, Ericsson, Huawei)",
      "Calage azimutal et électrique",
    ],
    image: "/images/technician-climbing.png",
  },
  {
    n: "03",
    slug: "bureau-etude",
    icon: Cable,
    title: "Bureau d'étude",
    text: "Notre bureau d'étude interne réalise l'ensemble des dossiers techniques nécessaires à chaque projet télécom — depuis les études de faisabilité jusqu'au dossier de fin de travaux, en passant par les photomontages et les plans d'exécution.",
    points: [
      "Plans DP / DTB / DIM / APS / APD / DOE",
      "Photomontages et simulations visuelles",
      "Études de propagation et couverture",
      "Suivi de conformité et dossiers réglementaires",
    ],
    image: "/images/bts-cabinet.png",
  },
  {
    n: "04",
    slug: "maintenance-sav",
    icon: Wrench,
    title: "Maintenance & SAV",
    text: "Nous assurons la maintenance préventive et corrective des infrastructures télécom. Nos équipes interviennent rapidement sur tout le territoire pour diagnostiquer et résoudre les pannes, garantissant une disponibilité réseau maximale.",
    points: [
      "Maintenance préventive programmée",
      "Interventions correctives 24h / 48h",
      "Préparation et gestion du matériel",
      "Vérification avant remise en service",
    ],
    image: "/images/install-5g.png",
  },
];

export default function ServicesDetail() {
  return (
    <section className="relative bg-white py-20">
      {services.map((s, i) => (
        <ServiceBlock key={s.n} service={s} index={i} />
      ))}
    </section>
  );
}

function ServiceBlock({
  service: s,
  index,
}: {
  service: (typeof services)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isEven = index % 2 === 0;

  return (
    <div
      id={s.slug}
      ref={ref}
      className="relative scroll-mt-28 overflow-hidden border-b border-navy-100 last:border-none"
    >
      <Container className="py-24">
        <div
          className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
            isEven ? "" : "lg:[&>:first-child]:order-2"
          }`}
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-baseline gap-4">
              <span className="text-6xl font-bold text-navy-100 select-none">{s.n}</span>
              <div className="grid size-11 place-items-center rounded-xl bg-navy-950 text-signal-400">
                <s.icon className="size-5" />
              </div>
            </div>
            <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-navy-950 md:text-4xl">
              {s.title}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-navy-700/70">{s.text}</p>

            <ul className="mt-8 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-sm text-navy-800">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500" />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${s.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-[0.82rem] font-semibold text-signal-600 transition-colors hover:text-signal-500"
            >
              En savoir plus <ArrowRight className="size-3.5" />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-950"
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
