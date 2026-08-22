import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/effects/SmoothScroll";
import CookieConsent from "@/components/legal/CookieConsent";
import PlausibleAnalytics from "@/components/legal/PlausibleAnalytics";
import PageTransition from "@/components/layout/PageTransition";
import BackToTop from "@/components/ui/BackToTop";
import ChatBot from "@/components/ui/ChatBot";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://njtech-solution.fr"),
  title: {
    default:  "NJTECH Solution",
    template: "%s — NJTECH Solution",
  },
  description:
    "NJTECH Solution déploie, maintient et sécurise les infrastructures télécom 4G/5G en France. Aménagement de sites radio, antennes, faisceaux hertziens, bureau d'étude et équipes terrain.",
  keywords: [
    "NJTECH",
    "Infrastructures télécom",
    "Déploiement 5G",
    "Antennes",
    "Faisceaux hertziens",
    "Sites radio",
    "Bouygues Telecom",
    "Free Mobile",
    "Sogetrel",
    "Épinay-sur-Seine",
  ],
  authors: [{ name: "NJTECH Solution" }],
  openGraph: {
    title: "NJTECH Solution — Infrastructures Télécom 4G / 5G",
    description:
      "Spécialiste des réseaux mobiles. Déploiement, intégration et maintenance d'infrastructures télécom 4G/5G.",
    type: "website",
    locale: "fr_FR",
    url: "https://njtech-solution.fr",
    siteName: "NJTECH Solution",
    images: [
      {
        url:    "https://njtech-solution.fr/opengraph-image",
        width:  1200,
        height: 630,
        alt:    "NJTECH Solution — Infrastructures Télécom 4G / 5G",
      },
    ],
  },
  twitter: {
    card:        "summary_large_image",
    title:       "NJTECH Solution — Infrastructures Télécom 4G / 5G",
    description: "Spécialiste des réseaux mobiles. Déploiement, intégration et maintenance d'infrastructures télécom 4G/5G.",
    images:      ["https://njtech-solution.fr/opengraph-image"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type":       "Organization",
      "@id":         "https://njtech-solution.fr/#organization",
      "name":        "NJTECH Solution",
      "url":         "https://njtech-solution.fr",
      "logo":        "https://njtech-solution.fr/images/logo.png",
      "description": "Spécialiste du déploiement, de l'intégration et de la maintenance des infrastructures télécom 4G et 5G pour les grands opérateurs nationaux.",
      "foundingDate": "2019",
      "areaServed":  "FR",
      "contactPoint": {
        "@type":            "ContactPoint",
        "telephone":        "+33-9-88-50-40-15",
        "contactType":      "customer service",
        "availableLanguage": "French",
      },
      // TODO: remplacer par l'URL LinkedIn réelle avant mise en prod
      "sameAs": ["https://www.linkedin.com/company/njtech-solution"],
    },
    {
      "@type":            ["LocalBusiness", "ProfessionalService"],
      "@id":              "https://njtech-solution.fr/#localbusiness",
      "name":             "NJTECH Solution",
      "url":              "https://njtech-solution.fr",
      "image":            "https://njtech-solution.fr/images/logo.png",
      "description":      "Déploiement et maintenance d'infrastructures télécom 4G et 5G — pylônes, antennes, faisceaux hertziens, bureau d'étude.",
      "priceRange":       "Sur devis",
      "currenciesAccepted": "EUR",
      "paymentAccepted":  "Virement bancaire, Chèque",
      "telephone":        "+33-9-88-50-40-15",
      "email":            "contact@njtech-solution.fr",
      "address": {
        "@type":           "PostalAddress",
        "streetAddress":   "9 rue de l'Église",
        "addressLocality": "Épinay-sur-Seine",
        "postalCode":      "93800",
        "addressCountry":  "FR",
      },
      "geo": {
        "@type":     "GeoCoordinates",
        "latitude":  48.9566,
        "longitude": 2.3097,
      },
      "openingHoursSpecification": {
        "@type":    "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
        "opens":    "08:00",
        "closes":   "18:00",
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name":  "Prestations télécom",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aménagement de sites radio 4G / 5G" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Déploiement antennes & faisceaux hertziens" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bureau d'étude — plans DP / DIM / DOE" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Maintenance & SAV réseaux mobiles" } },
        ],
      },
      "parentOrganization": { "@id": "https://njtech-solution.fr/#organization" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden"
        suppressHydrationWarning
      >
        {/* Structured data JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll />
        <Navbar />
        <PageTransition>
          <main className="flex-1">{children}</main>
        </PageTransition>
        <Footer />
        <CookieConsent />
        <BackToTop />
        <ChatBot />
        <PlausibleAnalytics />
      </body>
    </html>
  );
}
