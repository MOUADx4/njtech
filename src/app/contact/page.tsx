import type { Metadata } from "next";
import ContactPage from "@/components/sections/ContactPage";
import Coverage from "@/components/sections/Coverage";

export const metadata: Metadata = {
  title: "Contact — NJTECH Solution",
  description: "Contactez NJTECH Solution pour votre projet télécom. Déploiement 4G/5G, bureau d'étude, maintenance. Réponse sous 24h.",
};

export default function Contact() {
  return (
    <>
      <ContactPage />
      <Coverage />
    </>
  );
}
