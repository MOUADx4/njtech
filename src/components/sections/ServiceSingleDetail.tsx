"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Building2, Antenna, Cable, Wrench, ArrowRight, ArrowLeft } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "@/components/ui/Container";
import { SERVICES, type ServiceData } from "@/lib/services-data";

const ICONS: Record<ServiceData["icon"], LucideIcon> = {
  Building2,
  Antenna,
  Cable,
  Wrench,
};

export default function ServiceSingleDetail({ service }: { service: ServiceData }) {
  const Icon    = ICONS[service.icon];
  const related = SERVICES.filter(s => s.slug !== service.slug);

  return (
    <>
      {/* ── Main content ── */}
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
              className="inline-flex items-center gap-2 text-[0.78rem] font-medium text-navy-500/60 transition-colors hover:text-navy-900"
            >
              <ArrowLeft className="size-3.5" />
              Toutes nos prestations
            </Link>
          </motion.div>

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-baseline gap-4">
                <span className="text-6xl font-bold text-navy-100 select-none">{service.n}</span>
                <div className="grid size-12 place-items-center rounded-xl bg-navy-950 text-signal-400">
                  <Icon className="size-5" />
                </div>
              </div>

              <h2 className="mt-6 text-[2rem] font-semibold leading-tight tracking-tight text-navy-950 md:text-[2.6rem]">
                {service.title}
              </h2>

              <p className="mt-6 text-[1.02rem] leading-[1.82] text-navy-700/70">
                {service.text}
              </p>

              <ul className="mt-10 space-y-3.5">
                {service.points.map((p) => (
                  <li key={p} className="flex items-center gap-3.5 text-[0.9rem] text-navy-800">
                    <span className="h-px w-5 shrink-0 bg-signal-500" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-signal-500 px-7 py-3.5 text-[0.875rem] font-semibold text-white transition-colors hover:bg-signal-600 active:scale-[0.98]"
                >
                  Demander un devis
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-950"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/30 to-transparent" />
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
              <span className="h-px w-6 bg-signal-500" />
              <span className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-navy-400/70">
                Nos autres prestations
              </span>
            </div>
            <h3 className="text-[1.6rem] font-semibold tracking-tight text-navy-950">
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
                    className="group flex h-full flex-col rounded-2xl border border-navy-100 bg-white p-6 transition-all duration-300 hover:border-signal-200 hover:shadow-md"
                  >
                    <div className="grid size-10 place-items-center rounded-xl bg-navy-950 text-signal-400">
                      <RelIcon className="size-4.5" />
                    </div>
                    <h4 className="mt-4 text-[0.95rem] font-semibold text-navy-900">{r.title}</h4>
                    <p className="mt-2 flex-1 text-[0.8rem] leading-relaxed text-navy-600/65">
                      {r.points[0]} · {r.points[1]}
                    </p>
                    <div className="mt-5 flex items-center gap-1.5 text-[0.75rem] font-semibold text-signal-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
