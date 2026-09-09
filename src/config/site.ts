/**
 * Source de vérité unique du site NJTECH Solution.
 *
 * Toute donnée d'entreprise (coordonnées, navigation, SEO) est définie ICI
 * et importée ailleurs — ne jamais recopier ces valeurs dans un composant.
 * Modifier une coordonnée = modifier ce fichier uniquement.
 */

export const siteConfig = {
  name: "NJTECH Solution",
  url: "https://njtech-solution.fr",
  description:
    "NJTECH Solution déploie, maintient et sécurise les infrastructures télécom 4G/5G en France. Aménagement de sites radio, antennes, faisceaux hertziens, bureau d'étude et équipes terrain.",
} as const;

/** Coordonnées de l'entreprise. */
export const contact = {
  email: "contact@njtech-solution.fr",

  phone: {
    /** Standard — affichage public. */
    switchboard: "09 88 50 40 15",
    /** Standard — format E.164 pour les liens `tel:`. */
    switchboardE164: "+33988504015",
    direction: "06 59 31 37 51",
    directionE164: "+33659313751",
  },

  address: {
    street: "9 rue de l'Église",
    postalCode: "93800",
    city: "Épinay-sur-Seine",
    country: "FR",
    /** Coordonnées GPS du siège (JSON-LD). */
    geo: { latitude: 48.9566, longitude: 2.3097 },
  },

  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "18:00",
  },
} as const;

/** Adresse postale sur une ligne — `9 rue de l'Église, 93800 Épinay-sur-Seine`. */
export const formattedAddress = `${contact.address.street}, ${contact.address.postalCode} ${contact.address.city}`;

/** Lien `mailto:` prêt à l'emploi. */
export const mailtoHref = `mailto:${contact.email}`;

/** URL Google Maps du siège (lien externe + iframe d'intégration). */
export const mapsQuery = encodeURIComponent(`${formattedAddress} France`);
export const mapsLinkHref = `https://maps.google.com/?q=${mapsQuery}`;
export const mapsEmbedSrc = `https://maps.google.com/maps?q=${mapsQuery}&output=embed&z=17&hl=fr`;

/** Navigation principale (Navbar). */
export const mainNav = [
  { href: "/a-propos", label: "À propos" },
  { href: "/services", label: "Prestations" },
  { href: "/realisations", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
] as const;

/** Liens du pied de page, groupés par colonne. */
export const footerNav = {
  company: [
    { label: "À propos", href: "/a-propos" },
    { label: "Méthodologie", href: "/a-propos#methodology" },
    { label: "Nos réalisations", href: "/realisations" },
    { label: "Zone d'intervention", href: "/a-propos#coverage" },
  ],
  services: [
    { label: "Sites radio 4G / 5G", href: "/services/amenagement-sites-radio" },
    { label: "Antennes & faisceaux", href: "/services/deploiement-antennes" },
    { label: "Bureau d'étude", href: "/services/bureau-etude" },
    { label: "Maintenance & SAV", href: "/services/maintenance-sav" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Politique de confidentialité", href: "/politique-de-confidentialite" },
    { label: "Politique cookies", href: "/politique-cookies" },
    { label: "CGU", href: "/cgu" },
  ],
} as const;
