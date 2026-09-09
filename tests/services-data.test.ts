import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import path from "node:path";
import { SERVICES, getService, type ServiceSlug } from "@/lib/services-data";
import { footerNav } from "@/config/site";

const PUBLIC_DIR = path.resolve(__dirname, "../public");

describe("catalogue des prestations", () => {
  it("contient au moins une prestation", () => {
    expect(SERVICES.length).toBeGreaterThan(0);
  });

  it("n'a pas de slug en double", () => {
    const slugs = SERVICES.map((s) => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("numérote les prestations sans doublon", () => {
    const numbers = SERVICES.map((s) => s.n);
    expect(new Set(numbers).size).toBe(numbers.length);
  });

  it.each(SERVICES.map((s) => [s.slug, s] as const))(
    "%s — renseigne tous les champs textuels",
    (_slug, service) => {
      expect(service.title.trim().length).toBeGreaterThan(0);
      expect(service.text.trim().length).toBeGreaterThan(0);
      expect(service.teaser.trim().length).toBeGreaterThan(0);
      expect(service.hero.label.trim().length).toBeGreaterThan(0);
      expect(service.hero.title.trim().length).toBeGreaterThan(0);
      expect(service.hero.description.trim().length).toBeGreaterThan(0);
    },
  );

  it.each(SERVICES.map((s) => [s.slug, s] as const))(
    "%s — a un slug compatible avec une URL",
    (slug) => {
      expect(slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    },
  );

  it.each(SERVICES.map((s) => [s.slug, s] as const))(
    "%s — propose une accroche plus courte que la description longue",
    (_slug, service) => {
      // Sinon l'un des deux champs a été recopié par erreur.
      expect(service.teaser).not.toBe(service.text);
      expect(service.teaser.length).toBeLessThan(service.text.length);
    },
  );

  it.each(SERVICES.map((s) => [s.slug, s] as const))(
    "%s — liste au moins deux points clés, tous non vides",
    (_slug, service) => {
      expect(service.points.length).toBeGreaterThanOrEqual(2);
      for (const point of service.points) {
        expect(point.trim().length).toBeGreaterThan(0);
      }
    },
  );

  it.each(SERVICES.map((s) => [s.slug, s] as const))(
    "%s — référence une image présente dans public/",
    (_slug, service) => {
      expect(service.image.startsWith("/")).toBe(true);
      const file = path.join(PUBLIC_DIR, service.image);
      expect(existsSync(file), `image absente : ${service.image}`).toBe(true);
    },
  );
});

describe("SEO des prestations", () => {
  it.each(SERVICES.map((s) => [s.slug, s] as const))(
    "%s — a un titre et une description de longueur exploitable",
    (_slug, service) => {
      expect(service.seo.title.length).toBeGreaterThan(20);
      expect(service.seo.description.length).toBeGreaterThan(50);
      expect(service.seo.keywords.length).toBeGreaterThan(0);
    },
  );

  it("n'utilise pas deux fois le même titre SEO", () => {
    const titles = SERVICES.map((s) => s.seo.title);
    expect(new Set(titles).size).toBe(titles.length);
  });
});

describe("getService", () => {
  it("retrouve chaque prestation par son slug", () => {
    for (const service of SERVICES) {
      expect(getService(service.slug)?.slug).toBe(service.slug);
    }
  });

  it("renvoie undefined pour un slug inconnu", () => {
    expect(getService("slug-inexistant" as ServiceSlug)).toBeUndefined();
  });
});

describe("cohérence avec le reste du site", () => {
  it("fait pointer chaque lien « Prestations » du pied de page vers une prestation existante", () => {
    const slugs = new Set<string>(SERVICES.map((s) => s.slug));

    for (const { href } of footerNav.services) {
      const slug = href.replace("/services/", "");
      expect(slugs.has(slug), `slug inconnu dans le pied de page : ${slug}`).toBe(true);
    }
  });

  it("expose chaque prestation dans le pied de page", () => {
    const linked = new Set(footerNav.services.map((l) => l.href.replace("/services/", "")));
    for (const service of SERVICES) {
      expect(linked.has(service.slug), `prestation absente du pied de page : ${service.slug}`).toBe(
        true,
      );
    }
  });
});
