import { Building2, Antenna, Cable, Wrench } from "lucide-react";
import type { ServiceData } from "@/lib/services-data";

/**
 * Associe le nom d'icône stocké dans `services-data.ts` au composant Lucide.
 *
 * Les données restent sérialisables (une simple chaîne) tandis que le rendu
 * résout l'icône ici — une seule table à maintenir pour toutes les pages.
 */
export const SERVICE_ICONS: Record<ServiceData["icon"], typeof Building2> = {
  Building2,
  Antenna,
  Cable,
  Wrench,
};
