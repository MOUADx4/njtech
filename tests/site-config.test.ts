import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import {
  contact,
  footerNav,
  formattedAddress,
  mailtoHref,
  mainNav,
  mapsEmbedSrc,
  mapsLinkHref,
  siteConfig,
} from "@/config/site";

const APP_DIR = path.resolve(__dirname, "../src/app");

/**
 * Résout un lien interne vers le fichier de route correspondant.
 * Gère les ancres (`/a-propos#coverage`) et les routes dynamiques
 * (`/services/<slug>` est servi par `services/[slug]/page.tsx`).
 */
function routeExists(href: string): boolean {
  const pathname = href.split("#")[0];
  if (pathname === "/") return existsSync(path.join(APP_DIR, "page.tsx"));

  const segments = pathname.replace(/^\//, "").split("/");
  if (existsSync(path.join(APP_DIR, ...segments, "page.tsx"))) return true;

  // Repli sur une route dynamique : le dernier segment est un paramètre.
  const parent = segments.slice(0, -1);
  return existsSync(path.join(APP_DIR, ...parent, "[slug]", "page.tsx"));
}

describe("siteConfig", () => {
  it("expose une URL canonique absolue en HTTPS, sans slash final", () => {
    expect(siteConfig.url).toMatch(/^https:\/\//);
    expect(siteConfig.url).not.toMatch(/\/$/);
    expect(() => new URL(siteConfig.url)).not.toThrow();
  });

  it("a un nom et une description non vides", () => {
    expect(siteConfig.name.trim().length).toBeGreaterThan(0);
    expect(siteConfig.description.trim().length).toBeGreaterThan(50);
  });
});

describe("coordonnées", () => {
  it("utilise une adresse e-mail valide sur le domaine du site", () => {
    expect(contact.email).toMatch(/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i);
    expect(contact.email.split("@")[1]).toBe(new URL(siteConfig.url).hostname);
  });

  it("expose les téléphones au format E.164 pour les liens tel:", () => {
    for (const e164 of [contact.phone.switchboardE164, contact.phone.directionE164]) {
      expect(e164).toMatch(/^\+33\d{9}$/);
    }
  });

  it("fait correspondre chaque numéro affiché à son format E.164", () => {
    const pairs = [
      [contact.phone.switchboard, contact.phone.switchboardE164],
      [contact.phone.direction, contact.phone.directionE164],
    ] as const;

    for (const [display, e164] of pairs) {
      // « 09 88 50 40 15 » -> « +33988504015 » : on retire le 0 initial.
      expect(`+33${display.replace(/\s/g, "").slice(1)}`).toBe(e164);
    }
  });

  it("a un code postal français à 5 chiffres et des coordonnées GPS en France", () => {
    expect(contact.address.postalCode).toMatch(/^\d{5}$/);
    expect(contact.address.geo.latitude).toBeGreaterThan(41);
    expect(contact.address.geo.latitude).toBeLessThan(52);
    expect(contact.address.geo.longitude).toBeGreaterThan(-5);
    expect(contact.address.geo.longitude).toBeLessThan(10);
  });

  it("construit l'adresse formatée à partir de ses composants", () => {
    expect(formattedAddress).toContain(contact.address.street);
    expect(formattedAddress).toContain(contact.address.postalCode);
    expect(formattedAddress).toContain(contact.address.city);
  });

  it("dérive le lien mailto de l'e-mail", () => {
    expect(mailtoHref).toBe(`mailto:${contact.email}`);
  });
});

describe("liens Google Maps", () => {
  it("produit des URL valides pointant vers Google Maps", () => {
    for (const url of [mapsLinkHref, mapsEmbedSrc]) {
      expect(() => new URL(url)).not.toThrow();
      expect(new URL(url).hostname).toBe("maps.google.com");
    }
  });

  it("intègre la carte en mode embed et encode l'adresse du siège", () => {
    expect(mapsEmbedSrc).toContain("output=embed");
    // L'adresse est encodée : on vérifie via le paramètre décodé.
    const q = new URL(mapsEmbedSrc).searchParams.get("q") ?? "";
    expect(q).toContain(contact.address.postalCode);
    expect(q).toContain(contact.address.city);
  });
});

describe("navigation", () => {
  it("n'a ni libellé ni lien vide dans le menu principal", () => {
    for (const { href, label } of mainNav) {
      expect(label.trim().length).toBeGreaterThan(0);
      expect(href.startsWith("/")).toBe(true);
    }
  });

  it("ne contient pas de lien en double dans le menu principal", () => {
    const hrefs = mainNav.map((l) => l.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("fait pointer chaque lien du menu vers une route existante", () => {
    for (const { href } of mainNav) {
      expect(routeExists(href), `route manquante pour ${href}`).toBe(true);
    }
  });

  it("fait pointer chaque lien du pied de page vers une route existante", () => {
    const all = [...footerNav.company, ...footerNav.services, ...footerNav.legal];
    for (const { href } of all) {
      expect(routeExists(href), `route manquante pour ${href}`).toBe(true);
    }
  });

  it("couvre les quatre pages légales obligatoires", () => {
    const hrefs = footerNav.legal.map((l) => l.href);
    expect(hrefs).toContain("/mentions-legales");
    expect(hrefs).toContain("/politique-de-confidentialite");
    expect(hrefs).toContain("/politique-cookies");
    expect(hrefs).toContain("/cgu");
  });
});
