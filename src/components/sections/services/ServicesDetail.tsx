"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import { SERVICES } from "@/lib/services-data";
import { SERVICE_ICONS } from "@/lib/service-icons";

/**
 * Dérivé de la source unique `SERVICES` : titre, texte, points et image
 * proviennent de `services-data.ts`. Seule l'icône est résolue ici, le
 * fichier de données ne stockant que son nom.
 */
const services = SERVICES.map((s) => ({ ...s, icon: SERVICE_ICONS[s.icon] }));

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
          {/* Texte */}
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
