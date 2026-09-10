"use client";

import { useState, useCallback } from "react";
import { Send, Loader2, ExternalLink, MessageCircle } from "lucide-react";
import FormFeedback from "@/components/ui/FormFeedback";
import { useContactForm } from "@/hooks/useContactForm";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import HeroBackground from "@/components/effects/HeroBackground";
import {
  contact,
  formattedAddress,
  mailtoHref,
  mapsEmbedSrc,
  mapsLinkHref,
  siteConfig,
  whatsappHref,
} from "@/config/site";

const contactInfo = [
  { label: "Siège social", value: formattedAddress, href: mapsLinkHref, external: true },
  {
    label: "Standard",
    value: contact.phone.switchboard,
    href: `tel:${contact.phone.switchboardE164}`,
  },
  {
    label: "Direction",
    value: contact.phone.direction,
    href: `tel:${contact.phone.directionE164}`,
  },
  { label: "Email", value: contact.email, href: mailtoHref },
];

const domains = [
  "Déploiement 4G / 5G",
  "Bureau d'étude & plans",
  "Maintenance & SAV",
  "Faisceaux hertziens",
];

export default function ContactPage() {
  const { status, submit, reset } = useContactForm();

  const [spotlight, setSpotlight] = useState({ x: 50, y: 50, active: false });
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setSpotlight({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
      active: true,
    });
  }, []);
  const onMouseLeave = useCallback(() => setSpotlight((s) => ({ ...s, active: false })), []);

  return (
    <>
      <section
        className="relative overflow-hidden bg-[#020816] pt-44 pb-20 text-white"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <HeroBackground interactive={false} />

        {/* Spotlight curseur */}
        <div
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
          style={{
            opacity: spotlight.active ? 1 : 0,
            background: `radial-gradient(circle 600px at ${spotlight.x}% ${spotlight.y}%, rgba(14,165,233,0.09) 0%, transparent 70%)`,
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />

        <Container className="relative z-10">
          <div className="mb-9 flex items-center gap-3">
            <span className="bg-signal-500 h-px w-8" />
            <span className="text-caption font-semibold tracking-[0.32em] text-white/55 uppercase">
              Contact
            </span>
          </div>
          <h1 className="text-[clamp(2.6rem,5vw,4.6rem)] leading-[1.06] font-bold tracking-[-0.03em]">
            Un projet télécom ?<br />
            <span className="text-signal-400">Parlons-en.</span>
          </h1>
          <p className="text-lead mt-6 max-w-md leading-[1.72] text-white/55">
            Notre équipe vous répond dans les 24h ouvrées.
          </p>
        </Container>
      </section>

      <section className="bg-[#070d18] pt-4 pb-32 text-white">
        <Container>
          {/* Bordure supérieure */}
          <div className="mb-20 h-px bg-white/[0.07]" />

          <div className="grid gap-20 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="divide-y divide-white/[0.07] border-y border-white/[0.07]">
                {contactInfo.map(({ label, value, href, external }) => (
                  <a
                    key={label}
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    className="group flex items-start justify-between gap-4 py-5 transition-colors"
                  >
                    <div>
                      <div className="text-eyebrow font-bold tracking-[0.28em] text-white/55 uppercase">
                        {label}
                      </div>
                      <div className="text-body-lg mt-1.5 font-medium text-white/55 transition-colors group-hover:text-white/95">
                        {value}
                      </div>
                    </div>
                    {external && (
                      <ExternalLink className="mt-1 size-3.5 shrink-0 text-white/55 transition-colors group-hover:text-white/55" />
                    )}
                  </a>
                ))}
              </div>

              <div className="mt-14">
                <div className="text-eyebrow font-bold tracking-[0.28em] text-white/55 uppercase">
                  Domaines d'intervention
                </div>
                <div className="mt-6 space-y-3.5">
                  {domains.map((d) => (
                    <div key={d} className="flex items-center gap-3.5">
                      <span className="bg-signal-500/50 h-px w-5 shrink-0" />
                      <span className="text-body-lg text-white/55">{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="group mt-10 flex items-center gap-4 border border-[#25D366]/20 bg-[#25D366]/[0.05] p-5 transition-all duration-200 hover:border-[#25D366]/40 hover:bg-[#25D366]/[0.09]"
              >
                <div className="grid size-11 shrink-0 place-items-center rounded-full border border-[#25D366]/25 bg-[#25D366]/[0.12]">
                  <MessageCircle className="size-5 text-[#25D366]" />
                </div>
                <div>
                  <div className="text-body-lg font-semibold text-white/85 transition-colors group-hover:text-white">
                    WhatsApp
                  </div>
                  <div className="text-caption mt-0.5 text-white/55">Réponse en 2h</div>
                </div>
              </a>
            </div>

            <div className="lg:col-span-8 lg:border-l lg:border-white/[0.07] lg:pl-20">
              <h2 className="text-h3 font-bold tracking-tight text-white/95">
                Décrivez votre projet
              </h2>

              {status === "success" || status === "error" ? (
                <div className="mt-10">
                  <FormFeedback status={status} onReset={reset} dark />
                </div>
              ) : (
                <form onSubmit={submit} className="mt-10">
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    aria-hidden="true"
                    tabIndex={-1}
                  />

                  <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
                    <Field
                      label="Nom complet"
                      name="name"
                      type="text"
                      placeholder="Jean Dupont"
                      required
                      autoComplete="name"
                    />
                    <Field
                      label="Entreprise"
                      name="company"
                      type="text"
                      placeholder="Opérateur / Intégrateur"
                      autoComplete="organization"
                    />
                    <Field
                      label="Email"
                      name="email"
                      type="email"
                      placeholder="jean@entreprise.fr"
                      required
                      autoComplete="email"
                    />
                    <Field
                      label="Téléphone"
                      name="phone"
                      type="tel"
                      placeholder="06 00 00 00 00"
                      autoComplete="tel"
                    />
                  </div>

                  <div className="mt-8">
                    <label
                      htmlFor="contact-type"
                      className="text-eyebrow font-bold tracking-[0.28em] text-white/55 uppercase"
                    >
                      Type d'intervention
                    </label>
                    <select
                      id="contact-type"
                      name="type"
                      className="md:text-body-lg focus:border-signal-400 mt-4 w-full appearance-none border-b border-white/[0.18] bg-transparent py-3 text-base text-white/55 transition-colors"
                    >
                      <option className="bg-[#070d18]">Déploiement antennes 4G/5G</option>
                      <option className="bg-[#070d18]">Faisceaux hertziens</option>
                      <option className="bg-[#070d18]">Bureau d'étude / Plans</option>
                      <option className="bg-[#070d18]">Maintenance & SAV</option>
                      <option className="bg-[#070d18]">Autre</option>
                    </select>
                  </div>

                  <div className="mt-8">
                    <label
                      htmlFor="contact-message"
                      className="text-eyebrow font-bold tracking-[0.28em] text-white/55 uppercase"
                    >
                      Votre message
                      <span className="text-signal-400 ml-1" aria-hidden="true">
                        *
                      </span>
                      <span className="sr-only">(obligatoire)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      required
                      aria-required="true"
                      placeholder="Décrivez votre besoin — localisation, technologie, délais…"
                      className="md:text-body-lg focus:border-signal-400 mt-4 w-full resize-none border-b border-white/[0.18] bg-transparent py-3 text-base text-white/55 transition-colors placeholder:text-white/55"
                    />
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/[0.07] pt-8">
                    <Button type="submit" disabled={status === "loading"}>
                      {status === "loading" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          Envoi…
                        </>
                      ) : (
                        <>
                          Envoyer
                          <Send className="size-3.5" />
                        </>
                      )}
                    </Button>

                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                      className="text-body inline-flex items-center gap-2 font-medium text-[#25D366]/60 transition-colors hover:text-[#25D366]"
                    >
                      <MessageCircle className="size-3.5" />
                      WhatsApp — Réponse en 2h
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Google Maps */}
          <div className="mt-20 border-t border-white/[0.07] pt-20">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="text-eyebrow mb-2 font-bold tracking-[0.28em] text-white/55 uppercase">
                  Localisation
                </div>
                <p className="text-body-lg text-white/55">
                  {contact.address.street} — {contact.address.postalCode} {contact.address.city}
                </p>
              </div>
              <a
                href={mapsLinkHref}
                target="_blank"
                rel="noreferrer"
                className="tap-target text-body inline-flex items-center gap-1.5 text-white/55 transition-colors hover:text-white/55"
              >
                Voir sur Google Maps
                <ExternalLink className="size-3" />
              </a>
            </div>

            <div className="overflow-hidden border border-white/[0.07]">
              <iframe
                title={`${siteConfig.name} — Siège social ${contact.address.city}`}
                src={mapsEmbedSrc}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
                style={{
                  border: 0,
                  display: "block",
                  filter: "hue-rotate(195deg) saturate(0.45) brightness(0.82)",
                }}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-eyebrow font-bold tracking-[0.28em] text-white/55 uppercase"
      >
        {label}
        {required && (
          <span className="text-signal-400 ml-1" aria-hidden="true">
            *
          </span>
        )}
        {required && <span className="sr-only">(obligatoire)</span>}
      </label>
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        aria-required={required}
        autoComplete={autoComplete}
        className="md:text-body-lg focus:border-signal-400 mt-4 w-full border-b border-white/[0.18] bg-transparent py-3 text-base text-white/55 transition-colors placeholder:text-white/55"
      />
    </div>
  );
}
