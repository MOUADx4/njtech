"use client";

/*
 * Plausible Analytics — RGPD-friendly, sans cookie tiers.
 *
 * Prérequis :
 *   1. Créer un compte sur https://plausible.io (gratuit 30 jours, ~9$/mois)
 *   2. Ajouter le domaine "njtech.fr" dans votre tableau de bord Plausible
 *   3. Remplacer PLAUSIBLE_DOMAIN ci-dessous par votre domaine si différent
 *
 * Le script ne se charge QUE si l'utilisateur a accepté les cookies analytiques
 * via la bannière de consentement déjà en place.
 *
 * Note CNIL : Plausible sans cookie est techniquement exempté de consentement
 * (délibération CNIL 2023). On respecte quand même le choix utilisateur ici.
 */

import Script from "next/script";
import { useConsent } from "@/hooks/useConsent";

const PLAUSIBLE_DOMAIN = "njtech-solution.fr"; /* [À COMPLÉTER si domaine différent] */

export default function PlausibleAnalytics() {
  const { consent, mounted } = useConsent();

  /* Ne rien charger côté serveur ni avant que le consentement soit lu */
  if (!mounted || !consent.analytics) return null;

  return (
    <Script
      src="https://plausible.io/js/script.js"
      data-domain={PLAUSIBLE_DOMAIN}
      strategy="afterInteractive"
    />
  );
}
