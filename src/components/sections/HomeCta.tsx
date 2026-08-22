"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import Container from "@/components/ui/Container";

const trustedLogos = [
  { name: "Bouygues Telecom", logo: "/images/BouyguesTelecom.png", w: 120, h: 36 },
  { name: "Free Mobile",      logo: "/images/FreeMobile.png",      w: 100, h: 36 },
  { name: "Orange",           logo: "/images/Orange.png",          w: 84,  h: 36 },
  { name: "SFR",              logo: "/images/SFR.png",             w: 52,  h: 36 },
  { name: "Sogetrel",         logo: "/images/Sogetrel.png",        w: 104, h: 36 },
];

export default function HomeCta() {
  return (
    <section className="noise relative overflow-hidden bg-navy-950 py-36 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-signal-600/[0.11] via-transparent to-navy-800/20" />
      <div className="absolute top-0 left-1/2 h-px w-[36rem] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/18 to-transparent" />

      <Container className="relative text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-label justify-center text-signal-400 mb-8"
        >
          Passons à l'action
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.08 }}
          className="text-[2.8rem] font-semibold leading-[1.05] tracking-[-0.042em] text-white md:text-[4.2rem] lg:text-[5.2rem]"
        >
          Un projet télécom ?<br />
          <span className="text-gradient-signal">Parlons-en.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
          className="mx-auto mt-7 max-w-md text-[1.02rem] leading-[1.75] text-white/45"
        >
          Déploiement, intégration, bureau d'étude, maintenance.
          <br />Notre équipe répond sous 24h.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.28 }}
          className="mt-11 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/contact"
            className="btn-shimmer inline-flex items-center gap-2.5 bg-signal-500 px-8 py-3.5 text-[0.9rem] font-semibold text-white transition-colors hover:bg-signal-600 active:scale-[0.98]"
          >
            Démarrer un projet <ArrowRight className="size-4" />
          </Link>

          <a
            href="tel:+33988504015"
            className="inline-flex items-center gap-2.5 border border-white/[0.18] px-8 py-3.5 text-[0.9rem] font-semibold text-white/70 transition-all hover:border-white/40 hover:text-white active:scale-[0.98]"
          >
            <PhoneCall className="size-4" />
            09 88 50 40 15
          </a>
        </motion.div>

        {/* Trust logos */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="mt-16 flex flex-col items-center gap-6"
        >
          <p className="text-[0.58rem] font-bold uppercase tracking-[0.3em] text-white/18">
            Ils nous font confiance
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {trustedLogos.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.5 + i * 0.07 }}
                className="transition-all duration-300"
              >
                <Image
                  src={t.logo}
                  alt={t.name}
                  width={t.w}
                  height={t.h}
                  className="h-6 w-auto object-contain opacity-65 transition-opacity duration-300 hover:opacity-100"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
