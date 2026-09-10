"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Antenna, Cable, Wrench, ArrowRight, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { SERVICES, type ServiceData } from "@/lib/services-data";

const ICONS: Record<ServiceData["icon"], LucideIcon> = {
  Building2,
  Antenna,
  Cable,
  Wrench,
};

export default function ServiceSingleDetail({ service }: { service: ServiceData }) {
  const Icon = ICONS[service.icon];
  const related = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* ── Contenu principal ── */}
      <section className="bg-white py-20">
        <Container>
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <Link
              href="/services"
              className="text-body text-navy-500/60 hover:text-navy-900 inline-flex items-center gap-2 font-medium transition-colors"
            >
              <ArrowLeft className="size-3.5" />
              Toutes nos prestations
            </Link>
          </motion.div>

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
            {/* Texte */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-navy-100 text-6xl font-bold select-none">{service.n}</span>
                <div className="bg-navy-950 text-signal-400 grid size-12 place-items-center rounded-2xl">
                  <Icon className="size-5" />
                </div>
              </div>

              <h2 className="text-navy-950 mt-6 text-[2rem] leading-tight font-semibold tracking-tight md:text-[2.6rem]">
                {service.title}
              </h2>

              <p className="text-lead text-navy-700/70 mt-6 leading-[1.82]">{service.text}</p>

              <ul className="mt-10 space-y-3.5">
                {service.points.map((p) => (
                  <li key={p} className="text-body-lg text-navy-800 flex items-center gap-3.5">
                    <span className="bg-signal-500 h-px w-5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Button href="/contact">
                  Demander un devis
                  <ArrowRight className="size-4" />
                </Button>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-950 relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              <div className="from-navy-950/30 absolute inset-0 bg-gradient-to-t to-transparent" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ── Nos autres prestations ── */}
      <section className="bg-navy-50/50 py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="bg-signal-500 h-px w-6" />
              <span className="text-eyebrow text-navy-400/70 font-bold tracking-[0.3em] uppercase">
                Nos autres prestations
              </span>
            </div>
            <h3 className="text-h3 text-navy-950 font-semibold tracking-tight">
              Découvrez l'ensemble de nos expertises.
            </h3>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3">
            {related.map((r, i) => {
              const RelIcon = ICONS[r.icon];
              return (
                <motion.div
                  key={r.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                >
                  <Link
                    href={`/services/${r.slug}`}
                    className="group border-navy-100 hover:border-signal-200 flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:shadow-md"
                  >
                    <div className="bg-navy-950 text-signal-400 grid size-10 place-items-center rounded-2xl">
                      <RelIcon className="size-4.5" />
                    </div>
                    <h4 className="text-lead text-navy-900 mt-4 font-semibold">{r.title}</h4>
                    <p className="md:text-body text-navy-600/65 mt-2 flex-1 text-base leading-relaxed">
                      {r.points[0]} · {r.points[1]}
                    </p>
                    <div className="text-body text-signal-500 mt-5 flex items-center gap-1.5 font-semibold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Voir la prestation <ArrowRight className="size-3.5" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
