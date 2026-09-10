import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import About from "@/components/sections/about/About";
import Methodology from "@/components/sections/about/Methodology";
import Safety from "@/components/sections/about/Safety";
import Clients from "@/components/sections/shared/Clients";
import Coverage from "@/components/sections/about/Coverage";
import HomeCta from "@/components/sections/home/HomeCta";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez NJTECH Solution : 7 ans d'expertise terrain, 2 équipes mobiles, un bureau d'étude dédié. Partenaire de Bouygues Telecom, Free Mobile et Sogetrel.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="À propos"
        title="Un acteur de terrain au service de la connectivité."
        description="Depuis plus de 7 ans, NJTECH accompagne opérateurs et intégrateurs dans le déploiement, l'intégration et la maintenance des infrastructures télécom françaises."
      />
      <About />
      <Methodology />
      <Safety />
      <Clients />
      <Coverage />
      <HomeCta />
    </>
  );
}
