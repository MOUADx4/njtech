import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  PhoneCall,
  Smartphone,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Shield,
  Clock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import ManageCookiesButton from "@/components/legal/ManageCookiesButton";
import { contact, footerNav, mailtoHref, social } from "@/config/site";

const { company, services, legal } = footerNav;

const partnerLogos = [
  { name: "Bouygues Telecom", logo: "/images/BouyguesTelecom.png", w: 120, h: 36 },
  { name: "Free Mobile", logo: "/images/FreeMobile.png", w: 100, h: 36 },
  { name: "Orange", logo: "/images/Orange.png", w: 88, h: 36 },
  { name: "SFR", logo: "/images/SFR.png", w: 56, h: 36 },
  { name: "Sogetrel", logo: "/images/Sogetrel.png", w: 108, h: 36 },
  { name: "Cellnex", logo: "/images/Cellnex.png", w: 96, h: 36 },
  { name: "TDF", logo: "/images/TDF.png", w: 56, h: 36 },
];

const trustBadges = [
  { icon: Shield, label: "Travaux en hauteur certifiés" },
  { icon: Clock, label: "Réactivité 24 / 7" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 relative overflow-hidden text-white">
      <div className="relative border-b border-white/[0.07]">
        <div className="from-signal-600/[0.08] absolute inset-0 bg-gradient-to-r via-transparent to-transparent" />
        <Container className="relative flex flex-col items-start justify-between gap-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="text-eyebrow text-signal-400/80 mb-2 font-bold tracking-[0.28em] uppercase">
              Démarrez votre projet
            </p>
            <p className="text-h4 font-semibold tracking-tight text-white">
              Un besoin en infrastructure télécom ?<br className="hidden sm:block" /> Notre équipe
              vous répond sous 24h.
            </p>
          </div>
          <Button href="/contact" className="shrink-0">
            Nous contacter <ArrowRight className="size-4" />
          </Button>
        </Container>
      </div>

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          {/* Identité */}
          <div className="lg:col-span-3">
            <Logo dark />
            <p className="md:text-body mt-5 max-w-xs text-base leading-[1.85] text-white/55">
              Spécialiste du déploiement, de l'intégration et de la maintenance des réseaux mobiles
              4G et 5G pour les grands opérateurs nationaux.
            </p>
            <div className="mt-7 space-y-2">
              {trustBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5">
                  <div className="border-signal-500/20 bg-signal-500/[0.1] grid size-5 shrink-0 place-items-center rounded-lg border">
                    <b.icon className="text-signal-400 size-3" />
                  </div>
                  <span className="text-caption font-medium text-white/55">{b.label}</span>
                </div>
              ))}
            </div>

            <a
              href={social.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="NJTECH Solution sur LinkedIn"
              className="tap-target text-caption mt-8 inline-flex items-center gap-2.5 border border-white/[0.11] px-4 py-2.5 font-semibold text-white/55 transition-all duration-200 hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10 hover:text-white/85"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="size-3.5 shrink-0"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              Suivez-nous sur LinkedIn
            </a>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-eyebrow mb-5 font-bold tracking-[0.26em] text-white/55 uppercase">
              Contact
            </h3>
            <div className="space-y-3.5">
              <div className="text-body flex items-start gap-3 leading-snug text-white/55">
                <MapPin className="text-signal-500/60 mt-0.5 size-3.5 shrink-0" />
                {contact.address.street}
                <br />
                {contact.address.postalCode} {contact.address.city}
              </div>
              <Link
                href={`tel:${contact.phone.switchboardE164}`}
                className="tap-target text-body flex items-center gap-3 text-white/55 transition-colors hover:text-white"
              >
                <PhoneCall className="text-signal-500/60 size-3.5 shrink-0" />
                {contact.phone.switchboard}
              </Link>
              <Link
                href={`tel:${contact.phone.directionE164}`}
                className="tap-target text-body flex items-center gap-3 text-white/55 transition-colors hover:text-white"
              >
                <Smartphone className="text-signal-500/60 size-3.5 shrink-0" />
                {contact.phone.direction}
              </Link>
              <Link
                href={mailtoHref}
                className="tap-target text-body flex items-center gap-3 text-white/55 transition-colors hover:text-white"
              >
                <Mail className="text-signal-500/60 size-3.5 shrink-0" />
                {contact.email}
              </Link>
            </div>
          </div>

          {/* Entreprise + Prestations */}
          <div className="lg:col-span-2">
            <h3 className="text-eyebrow mb-5 font-bold tracking-[0.26em] text-white/55 uppercase">
              Entreprise
            </h3>
            <ul className="space-y-3">
              {company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="tap-target group text-body inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-eyebrow mb-5 font-bold tracking-[0.26em] text-white/55 uppercase">
              Prestations
            </h3>
            <ul className="space-y-3">
              {services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="tap-target group text-body inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                    <ArrowUpRight className="size-3 translate-x-0.5 -translate-y-0.5 opacity-0 transition-all duration-200 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Légal */}
          <div className="lg:col-span-2">
            <h3 className="text-eyebrow mb-5 font-bold tracking-[0.26em] text-white/55 uppercase">
              Informations légales
            </h3>
            <ul className="space-y-3">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="tap-target text-body text-white/55 transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <ManageCookiesButton />
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.07] py-8">
          <p className="text-eyebrow mb-6 font-bold tracking-[0.28em] text-white/55 uppercase">
            Opérateurs &amp; intégrateurs partenaires
          </p>
          <div className="flex flex-wrap items-center gap-x-9 gap-y-4">
            {partnerLogos.map((p) => (
              <div key={p.name} className="transition-all duration-300">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={p.w}
                  height={p.h}
                  className="h-6 w-auto object-contain opacity-50 transition-opacity duration-300 hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-white/[0.04]">
        <Container className="text-caption flex flex-col items-start justify-between gap-2 py-5 text-white/55 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} NJTECH Solution. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>Infrastructures télécom</span>
            <span className="text-white/55">·</span>
            <span>France métropolitaine</span>
            <span className="text-white/55">·</span>
            <span>Épinay-sur-Seine, 93</span>
          </div>
        </Container>
      </div>
    </footer>
  );
}
