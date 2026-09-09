import { describe, expect, it } from "vitest";
import { SERVICE_ICONS } from "@/lib/service-icons";
import { SERVICES } from "@/lib/services-data";

describe("table d'icônes des prestations", () => {
  it("associe une icône à chaque prestation du catalogue", () => {
    for (const service of SERVICES) {
      expect(
        SERVICE_ICONS[service.icon],
        `icône manquante pour « ${service.slug} » (${service.icon})`,
      ).toBeDefined();
    }
  });

  it("ne déclare pas d'icône inutilisée", () => {
    const used = new Set(SERVICES.map((s) => s.icon));
    for (const name of Object.keys(SERVICE_ICONS)) {
      expect(used.has(name as (typeof SERVICES)[number]["icon"]), `icône orpheline : ${name}`).toBe(
        true,
      );
    }
  });

  it("n'attribue pas la même icône à deux prestations", () => {
    const icons = SERVICES.map((s) => s.icon);
    expect(new Set(icons).size).toBe(icons.length);
  });
});
