import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import ServicesDetail from "@/components/sections/ServicesDetail";
import Methodology from "@/components/sections/Methodology";
import HomeCta from "@/components/sections/HomeCta";

export const metadata: Metadata = {
  title: "Prestations — NJTECH Solution",
  description: "Aménagement de sites radio, déploiement antennes 4G/5G, bureau d'étude, maintenance. NJTECH couvre toute la chaîne de valeur télécom.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Nos prestations"
        title="Une expertise complète, du design à la mise en service."
        description="De l'étude de faisabilité à l'installation finale, en passant par la maintenance — NJTECH couvre toute la chaîne de valeur du déploiement télécom 4G et 5G."
      />
      <ServicesDetail />
      <Methodology />
      <HomeCta />
    </>
  );
}
