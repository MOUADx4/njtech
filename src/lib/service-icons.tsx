import type { ComponentType, SVGProps } from "react";
import type { ServiceData } from "@/lib/services-data";
import { IconAntenne, IconCle, IconPlan, IconPylone } from "@/components/ui/icons/telecom";

/**
 * Associe le nom d'icône stocké dans `services-data.ts` au composant dessiné.
 *
 * Les données restent sérialisables (une simple chaîne) tandis que le rendu
 * résout l'icône ici — une seule table à maintenir pour toutes les pages.
 */
export const SERVICE_ICONS: Record<
  ServiceData["icon"],
  ComponentType<SVGProps<SVGSVGElement> & { strokeWidth?: number | string }>
> = {
  pylone: IconPylone,
  antenne: IconAntenne,
  plan: IconPlan,
  cle: IconCle,
};
