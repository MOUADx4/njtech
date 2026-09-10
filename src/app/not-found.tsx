import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page introuvable",
  robots: { index: false },
};

const links = [
  { label: "Accueil",        href: "/",             icon: Home      },
  { label: "Nos prestations",href: "/services",     icon: ArrowRight },
  { label: "Réalisations",   href: "/realisations", icon: ArrowRight },
  { label: "Contact",        href: "/contact",      icon: Phone      },
];

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#020816] text-white">

      {/* Texture de grille */}

      {/* Ambient glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[60rem] rounded-full bg-signal-600/[0.09] blur-[130px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[30rem] w-[40rem] rounded-full bg-signal-500/[0.05] blur-[100px]" />

      <Container className="relative z-10 flex flex-col items-center text-center">

        {/* 404 */}
        <div
          className="select-none font-black leading-none tracking-[-0.06em] text-white/[0.04]"
          style={{ fontSize: "clamp(10rem, 30vw, 22rem)" }}
          aria-hidden
        >
          404
        </div>

        {/* Contenu — superposé au chiffre 404 */}
        <div className="-mt-[clamp(5rem,12vw,10rem)] flex flex-col items-center">

          {/* Intitulé */}
          <div className="section-label justify-center text-signal-400 mb-6">
            Page introuvable
          </div>

          {/* Heading */}
          <h1 className="text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-tight tracking-[-0.033em] text-white">
            Cette page n'existe pas
            <br />
            <span className="text-gradient-signal">ou a été déplacée.</span>
          </h1>

          {/* Sub */}
          <p className="mt-5 max-w-md text-base md:text-lead leading-[1.75] text-white/55">
            Le lien que vous avez suivi est incorrect ou la page a été supprimée.
            Utilisez la navigation ci-dessous pour retrouver votre chemin.
          </p>

          {/* Bouton de retour */}
          <Button href="/" className="mt-10">
            <ArrowLeft className="size-4" />
            Retour à l'accueil
          </Button>

          {/* Accès rapides */}
          <div className="mt-12 border-t border-white/[0.07] pt-10 w-full max-w-lg">
            <p className="mb-6 text-eyebrow font-bold uppercase tracking-[0.28em] text-white/55">
              Pages principales
            </p>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="group flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.07] bg-white/[0.04] px-4 py-3 text-body font-medium text-white/55 transition-all duration-300 hover:border-signal-500/25 hover:bg-white/[0.07] hover:text-white"
                >
                  <l.icon className="size-3.5 shrink-0 text-signal-400/60 transition-colors group-hover:text-signal-400" />
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
