"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const sections = [
  {
    id: "amenagement-sites-radio",
    title: "Aménagement de sites radio",
    description:
      "Sites neufs ou existants — toits terrasses, pylônes, infrastructures en milieu urbain et rural. Coordination complète des travaux de génie civil et d'installation.",
    items: [
      {
        image: "/images/rural-tower.png",
        tag: "Zone rurale",
        title: "Couverture zone blanche",
        subtitle: "Déploiement et mise en service",
        span: "",
      },
      {
        image: "/images/hero-tower-sunset.png",
        tag: "Infrastructure",
        title: "Site finalisé & réceptionné",
        subtitle: "Conformité validée, mise en exploitation",
        span: "",
      },
      {
        image: "/images/team-njtech.png",
        tag: "Équipe terrain",
        title: "Coordination chantier",
        subtitle: "Deux équipes mobiles + supervision",
        span: "",
      },
    ],
  },
  {
    id: "deploiement-antennes",
    title: "Déploiement antennes & faisceaux",
    description:
      "Installation et calage d'antennes sectorielles, faisceaux hertziens, équipements RAN. Mise en service et optimisation des paramètres RF.",
    items: [
      {
        image: "/images/install-5g.png",
        tag: "5G — Urbain",
        title: "Pylône 5G en milieu dense",
        subtitle: "Calage faisceaux + intégration baseband",
        span: "lg:col-span-2",
      },
      {
        image: "/images/technician-climbing.png",
        tag: "Antennes",
        title: "Intervention en hauteur",
        subtitle: "Travaux sur pylône — EPI complets",
        span: "",
      },
    ],
  },
  {
    id: "bureau-etude",
    title: "Bureau d'étude",
    description:
      "Plans DP / DTB / DIM / APS / APD / DOE, photomontages et suivi de conformité. Expertise technique au service de vos projets les plus complexes.",
    items: [
      {
        image: "/images/bts-cabinet.png",
        tag: "BTS",
        title: "Armoire technique & raccordements",
        subtitle: "Chemin de câbles, intégration baie",
        span: "lg:col-span-2",
      },
    ],
  },
  {
    id: "maintenance-sav",
    title: "Maintenance & SAV",
    description:
      "Préparation matériel, interventions correctives, vérification avant remise en service. Réactivité garantie sous 48h sur l'ensemble du territoire.",
    items: [
      {
        image: "/images/install-5g.png",
        tag: "Maintenance",
        title: "Intervention corrective",
        subtitle: "Diagnostic & remise en service",
        span: "",
      },
      {
        image: "/images/team-njtech.png",
        tag: "SAV",
        title: "Préparation matériel",
        subtitle: "Contrôle qualité avant déploiement",
        span: "",
      },
    ],
  },
];

export default function RealisationsGrid() {
  return (
    <section className="bg-white py-20">
      {sections.map((sec, si) => (
        <div
          key={sec.id}
          id={sec.id}
          /* scroll-mt compense la navbar fixe (~80px) */
          className="scroll-mt-28"
        >
          <Container className="py-16">
            {/* En-tête de section */}
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="border-navy-100/70 mb-10 flex flex-col gap-4 border-b pb-8 md:flex-row md:items-end md:justify-between"
            >
              <div>
                <div className="mb-3 flex items-center gap-2.5">
                  <span className="text-eyebrow text-navy-400/60 font-bold tracking-[0.28em] uppercase">
                    0{si + 1}
                  </span>
                  <span className="bg-signal-500/50 h-px w-6" />
                </div>
                <h2 className="text-h3 text-navy-950 font-bold tracking-tight">{sec.title}</h2>
              </div>
              <p className="text-body-lg text-navy-500/70 max-w-md leading-[1.72] md:text-right">
                {sec.description}
              </p>
            </motion.div>

            {/* Cartes */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="grid auto-rows-[300px] gap-3 sm:grid-cols-2 lg:grid-cols-3"
            >
              {sec.items.map((it, i) => (
                <figure
                  key={it.title + i}
                  className={`group bg-navy-950 relative overflow-hidden ${it.span}`}
                >
                  <Image
                    src={it.image}
                    alt={it.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover opacity-70 transition-all duration-500 group-hover:scale-[1.05] group-hover:opacity-85"
                  />
                  <div className="from-navy-950 via-navy-950/10 absolute inset-0 bg-gradient-to-t to-transparent" />

                  <div className="absolute inset-x-0 top-0 p-4">
                    <span className="inline-flex items-center bg-white/[0.11] px-3 py-1 text-[10px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-sm">
                      {it.tag}
                    </span>
                  </div>

                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <div className="text-lead leading-tight font-semibold">{it.title}</div>
                    <div className="mt-2.5 translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <div className="text-body text-white/55">{it.subtitle}</div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </motion.div>
          </Container>

          {/* Séparateur entre sections */}
          {si < sections.length - 1 && (
            <div className="mx-auto max-w-7xl px-6">
              <div className="bg-navy-100/60 h-px" />
            </div>
          )}
        </div>
      ))}
    </section>
  );
}
