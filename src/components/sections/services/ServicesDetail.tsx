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
      className="border-navy-100 relative scroll-mt-28 overflow-hidden border-b last:border-none"
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
              <span className="text-navy-100 text-6xl font-bold select-none">{s.n}</span>
              <s.icon className="text-signal-600 size-11" strokeWidth={1.5} />
            </div>
            <h2 className="text-h2 text-navy-950 md:text-h2 mt-6 leading-tight font-semibold tracking-tight">
              {s.title}
            </h2>
            <p className="text-navy-700/70 mt-5 text-base leading-relaxed">{s.text}</p>

            <ul className="mt-8 space-y-3">
              {s.points.map((p) => (
                <li key={p} className="text-body-lg text-navy-800 flex items-center gap-3">
                  <span className="bg-signal-500 h-1.5 w-1.5 shrink-0 rounded-full" />
                  {p}
                </li>
              ))}
            </ul>

            <Link
              href={`/services/${s.slug}`}
              className="tap-target text-body text-signal-600 hover:text-signal-500 mt-8 inline-flex items-center gap-2 font-semibold transition-colors"
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
            className="group bg-navy-950 relative aspect-[4/3] overflow-hidden rounded-2xl"
          >
            <Image
              src={s.image}
              alt={s.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={index === 0}
            />
            <div className="from-navy-950/30 absolute inset-0 bg-gradient-to-t to-transparent" />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
