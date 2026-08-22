import type { Metadata } from "next";
import { preload } from "react-dom";
import PageHero from "@/components/layout/PageHero";
import RealisationsGrid from "@/components/sections/RealisationsGrid";
import HomeCta from "@/components/sections/HomeCta";

export const metadata: Metadata = {
  title: "Réalisations — NJTECH Solution",
  description: "Découvrez les réalisations NJTECH : pylônes 5G, interventions en hauteur, armoires BTS, déploiements en zones rurales.",
};

export default function RealisationsPage() {
  preload("/images/hero-bg.jpg", { as: "image", fetchPriority: "high" });
  return (
    <>
      <PageHero
        label="Réalisations"
        title="Des infrastructures livrées sur tout le territoire."
        description="Interventions sur des sites télécom 4G et 5G — urbains, ruraux et stratégiques. Chaque chantier livré dans les délais, conforme et sécurisé."
      />
      <RealisationsGrid />
      <HomeCta />
    </>
  );
}
