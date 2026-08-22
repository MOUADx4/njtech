/*
 * CONDITIONS GÉNÉRALES D'UTILISATION — MODÈLE À FAIRE RELIRE PAR UN JURISTE
 * Champs à compléter :
 *   - Forme juridique et capital social
 *   - Numéro SIREN / RCS
 *   - Tribunal compétent en cas de litige
 */

import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation — NJTECH Solution",
  description:
    "Conditions Générales d'Utilisation du site njtech.fr. Règles d'accès, propriété intellectuelle, responsabilité et droit applicable.",
  robots: { index: true, follow: true },
};

const SECTIONS: LegalSection[] = [
  { id: "objet",           title: "Objet"                        },
  { id: "acces",           title: "Accès au site"                },
  { id: "obligations",     title: "Obligations de l'utilisateur" },
  { id: "propriete",       title: "Propriété intellectuelle"     },
  { id: "responsabilite",  title: "Responsabilité"               },
  { id: "liens",           title: "Liens hypertextes"            },
  { id: "donnees",         title: "Données personnelles"         },
  { id: "droit",           title: "Droit applicable"             },
];

export default function CguPage() {
  return (
    <LegalLayout
      title="Conditions Générales d'Utilisation"
      lastUpdated="31 mai 2026"
      sections={SECTIONS}
    >
      <p>
        Les présentes Conditions Générales d'Utilisation (CGU) régissent les conditions
        d'accès et d'utilisation du site internet <strong>njtech-solution.fr</strong> édité par
        NJTECH Solution. L'accès au site vaut acceptation sans réserve des présentes CGU.
      </p>

      <h2 id="objet">Article 1 — Objet</h2>
      <p>
        Le site njtech-solution.fr est un site vitrine à destination professionnelle (B2B) qui présente
        les activités, prestations et réalisations de NJTECH Solution dans le domaine des
        infrastructures télécom 4G et 5G. Il ne constitue pas un site de vente en ligne.
      </p>
      <p>
        Les présentes CGU ont pour objet de définir les modalités et conditions dans lesquelles
        NJTECH Solution met son site à disposition des utilisateurs, ainsi que les droits et
        obligations des parties dans ce cadre.
      </p>

      <h2 id="acces">Article 2 — Accès au site</h2>
      <p>
        Le site est accessible gratuitement, à tout moment et depuis tout endroit disposant
        d'une connexion internet. NJTECH Solution ne peut être tenu responsable des
        interruptions ou indisponibilités du site liées à des opérations de maintenance,
        à des défaillances techniques ou à des événements de force majeure.
      </p>
      <p>
        NJTECH Solution se réserve le droit de modifier, suspendre ou interrompre l'accès
        à tout ou partie du site, sans préavis et sans que cela puisse engager sa responsabilité.
      </p>

      <h2 id="obligations">Article 3 — Obligations de l'utilisateur</h2>
      <p>L'utilisateur s'engage à :</p>
      <ul>
        <li>
          Utiliser le site dans le strict respect de la législation française et du droit
          de l'Union européenne applicable.
        </li>
        <li>
          Ne pas porter atteinte aux droits de tiers, notamment en matière de propriété
          intellectuelle, de vie privée et d'image.
        </li>
        <li>
          Ne pas tenter d'accéder de manière non autorisée aux systèmes informatiques
          liés au site (robots, scraping, attaques par déni de service, etc.).
        </li>
        <li>
          Fournir des informations exactes et sincères lors de toute prise de contact
          via les formulaires du site.
        </li>
        <li>
          Ne pas utiliser le site à des fins illicites, frauduleuses, commerciales non
          autorisées ou contraires aux présentes CGU.
        </li>
      </ul>
      <p>
        Tout manquement aux présentes obligations est susceptible d'engager la responsabilité
        civile et/ou pénale de l'utilisateur.
      </p>

      <h2 id="propriete">Article 4 — Propriété intellectuelle</h2>
      <p>
        L'ensemble des éléments constituant le site njtech-solution.fr (textes, images, photographies,
        graphismes, logos, icônes, sons, logiciels, architecture de la base de données, etc.)
        est protégé par le droit de la propriété intellectuelle, notamment par le Code de
        la propriété intellectuelle.
      </p>
      <p>
        Ces éléments sont la propriété exclusive de NJTECH Solution ou font l'objet d'une
        licence accordée à NJTECH Solution par leurs titulaires respectifs.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication ou adaptation de tout
        ou partie de ces éléments, quel que soit le moyen ou le procédé utilisé, est interdite
        sans l'autorisation écrite préalable de NJTECH Solution, sous peine de poursuites
        judiciaires.
      </p>

      <h2 id="responsabilite">Article 5 — Responsabilité</h2>
      <h3>Contenu du site</h3>
      <p>
        Les informations diffusées sur le site sont fournies à titre indicatif. NJTECH Solution
        s'efforce de les maintenir exactes et à jour, sans pouvoir toutefois garantir
        l'exhaustivité, la précision ou l'actualité de l'ensemble des contenus.
      </p>
      <h3>Disponibilité du site</h3>
      <p>
        NJTECH Solution ne peut être tenu responsable des dommages directs ou indirects
        résultant de l'accès ou de l'impossibilité d'accès au site, de l'utilisation du site
        ou des informations qui y sont publiées.
      </p>
      <h3>Force majeure</h3>
      <p>
        La responsabilité de NJTECH Solution ne peut être engagée en cas de force majeure
        au sens de l'article 1218 du Code civil ou d'événements indépendants de sa volonté.
      </p>

      <h2 id="liens">Article 6 — Liens hypertextes</h2>
      <p>
        Le site njtech-solution.fr peut contenir des liens vers des sites internet tiers. Ces liens
        sont fournis à titre informatif. NJTECH Solution ne contrôle pas ces sites et ne peut
        être tenu responsable de leur contenu, de leur politique de confidentialité ou de
        leurs pratiques.
      </p>
      <p>
        La mise en place d'un lien hypertexte vers le site njtech-solution.fr est soumise à
        l'autorisation préalable et écrite de NJTECH Solution.
      </p>

      <h2 id="donnees">Article 7 — Données personnelles</h2>
      <p>
        La collecte et le traitement des données personnelles des utilisateurs du site sont
        régis par notre{" "}
        <a href="/politique-de-confidentialite">Politique de confidentialité</a>, qui fait
        partie intégrante des présentes CGU.
      </p>

      <h2 id="droit">Article 8 — Droit applicable et juridiction compétente</h2>
      <p>
        Les présentes Conditions Générales d'Utilisation sont soumises au <strong>droit français</strong>.
      </p>
      <p>
        En cas de litige relatif à l'interprétation ou à l'exécution des présentes CGU,
        les parties s'efforceront de le résoudre à l'amiable. À défaut d'accord amiable,
        tout litige sera soumis aux tribunaux compétents de{" "}
        <strong>[À COMPLÉTER — ex. Bobigny]</strong>, nonobstant pluralité de défendeurs
        ou appel en garantie.
      </p>
      <div className="warn">
        ⚠️ Ce document est un modèle. Il doit être relu et adapté par un professionnel
        juridique avant toute mise en production.
      </div>
    </LegalLayout>
  );
}
