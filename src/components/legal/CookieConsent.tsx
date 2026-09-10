"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { X, ChevronDown, ChevronUp } from "lucide-react";
import { useConsent } from "@/hooks/useConsent";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function CookieConsent() {
  const { consent, mounted, accept, refuse, customize } = useConsent();
  const reduced = useReducedMotion();

  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [leaving, setLeaving] = useState(false);

  /* Affiche le bandeau tant qu'aucun choix n'a été fait */
  useEffect(() => {
    if (mounted && consent.status === null) {
      const timer = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, [mounted, consent.status]);

  /* Réouverture depuis « Gérer mes cookies » : resynchronise l'interrupteur analytics */
  useEffect(() => {
    const handler = () => {
      setAnalytics(consent.analytics);
      setExpanded(false);
      setLeaving(false);
      setVisible(true);
    };
    window.addEventListener("njtech:open-cookies", handler);
    return () => window.removeEventListener("njtech:open-cookies", handler);
  }, [consent.analytics]);

  const dismiss = (action: () => void) => {
    if (!reduced) {
      setLeaving(true);
      setTimeout(() => {
        action();
        setVisible(false);
        setLeaving(false);
      }, 300);
    } else {
      action();
      setVisible(false);
    }
  };

  const handleCustomize = () => {
    dismiss(() => customize(analytics));
  };

  if (!mounted || !visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label="Gestion des cookies"
      className={[
        "fixed right-0 bottom-0 left-0 z-[9999] px-4 pb-4 sm:right-4 sm:bottom-4 sm:left-auto sm:w-[420px]",
        !reduced && "transition-all duration-300",
        !reduced && leaving && "translate-y-4 opacity-0",
        !reduced && !leaving && "translate-y-0 opacity-100",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1526] shadow-[0_8px_40px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        {/* En-tête */}
        <div className="flex items-start justify-between gap-3 p-5 pb-4">
          <div className="flex items-center gap-2.5">
            <Image
              src="/njtech-logo.png"
              alt="NJTECH Solution"
              width={72}
              height={48}
              className="h-7 w-auto object-contain brightness-0 invert"
            />
            <span className="text-body font-semibold text-white">Gestion des cookies</span>
          </div>
          <button
            onClick={() => dismiss(refuse)}
            className="rounded-lg p-1 text-white/55 transition-colors hover:text-white/70"
            aria-label="Refuser et fermer"
          >
            <X className="size-4" />
          </button>
        </div>

        {/* Corps */}
        <div className="px-5 pb-4">
          <p className="text-body leading-[1.7] text-white/55">
            Nous utilisons des cookies pour améliorer votre expérience. Les cookies nécessaires
            assurent le bon fonctionnement du site. Les autres nécessitent votre accord.{" "}
            <Link
              href="/politique-cookies"
              className="text-signal-400 hover:text-signal-300 underline underline-offset-2"
            >
              En savoir plus
            </Link>
          </p>

          {/* Panneau de préférences dépliable */}
          <button
            onClick={() => setExpanded((v) => !v)}
            className="text-caption mt-3 flex items-center gap-1.5 font-medium text-white/55 transition-colors hover:text-white/70"
          >
            Personnaliser
            {expanded ? <ChevronUp className="size-3.5" /> : <ChevronDown className="size-3.5" />}
          </button>

          {expanded && (
            <div className="mt-3 space-y-2.5 rounded-lg border border-white/[0.07] bg-white/[0.04] p-4">
              {/* Cookies nécessaires — toujours actifs */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body font-semibold text-white/85">Nécessaires</p>
                  <p className="text-caption text-white/55">Fonctionnement du site</p>
                </div>
                <div className="bg-signal-500/60 flex h-5 w-9 items-center justify-end rounded-full px-1">
                  <div className="size-3.5 rounded-full bg-white" />
                </div>
              </div>
              {/* Analytics — toggleable */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-body font-semibold text-white/85">Analytiques</p>
                  <p className="text-caption text-white/55">Mesure d'audience anonymisée</p>
                </div>
                <button
                  role="switch"
                  aria-checked={analytics}
                  onClick={() => setAnalytics((v) => !v)}
                  className={[
                    "flex h-5 w-9 items-center rounded-full px-1 transition-colors duration-200",
                    analytics ? "bg-signal-500 justify-end" : "justify-start bg-white/15",
                  ].join(" ")}
                >
                  <div className="size-3.5 rounded-full bg-white shadow-sm" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-2 border-t border-white/[0.07] px-5 py-4">
          <button
            onClick={() => dismiss(refuse)}
            className="text-body flex-1 rounded-lg border border-white/[0.11] bg-white/[0.04] py-2.5 font-semibold text-white/70 transition-all hover:bg-white/[0.11] hover:text-white active:scale-[0.98]"
          >
            Tout refuser
          </button>
          {expanded ? (
            <button
              onClick={handleCustomize}
              className="bg-signal-600 text-body hover:bg-signal-500 flex-1 rounded-lg py-2.5 font-semibold text-white transition-all active:scale-[0.98]"
            >
              Enregistrer
            </button>
          ) : (
            <button
              onClick={() => dismiss(accept)}
              className="bg-signal-500 text-body hover:bg-signal-600 flex-1 rounded-lg py-2.5 font-semibold text-white transition-all active:scale-[0.98]"
            >
              Tout accepter
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
