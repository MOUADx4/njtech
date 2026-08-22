/*
 * MENTIONS LÉGALES — MODÈLE À FAIRE RELIRE PAR UN JURISTE
 * Champs à compléter avant mise en production :
 *   - Forme juridique (SARL, SAS, SASU, EI…)
 *   - Capital social
 *   - Numéro SIREN / SIRET
 *   - Numéro RCS et ville d'immatriculation
 *   - Numéro de TVA intracommunautaire
 *   - Nom du directeur de la publication
 *   - Hébergeur (nom, adresse, téléphone)
 */

import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Mentions légales — NJTECH Solution",
  description:
    "Mentions légales du site NJTECH Solution, spécialiste des infrastructures télécom 4G/5G en France.",
  robots: { index: true, follow: true },
};

const SECTIONS: LegalSection[] = [
  { id: "editeur",             title: "Éditeur du site"          },
  { id: "directeur",           title: "Directeur de publication"  },
  { id: "hebergeur",           title: "Hébergeur"                 },
  { id: "propriete",           title: "Propriété intellectuelle"  },
  { id: "responsabilite",      title: "Limitation de responsabilité" },
  { id: "donnees",             title: "Données personnelles"      },
  { id: "credits",             title: "Crédits"                   },
];

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      lastUpdated="31 mai 2026"
      sections={SECTIONS}
    >
      <h2 id="editeur">Éditeur du site</h2>
      <p>
        Le présent site internet est édité par la société <strong>NJTECH Solution</strong>,
        [À COMPLÉTER : forme juridique — ex. SASU] au capital de [À COMPLÉTER] euros.
      </p>
      <ul>
        <li><strong>Siège social :</strong> 9 rue de l'Église, 93800 Épinay-sur-Seine, France</li>
        <li><strong>SIREN :</strong> [À COMPLÉTER]</li>
        <li><strong>SIRET :</strong> [À COMPLÉTER]</li>
        <li><strong>RCS :</strong> [À COMPLÉTER — ex. RCS Bobigny XXX XXX XXX]</li>
        <li><strong>Numéro de TVA intracommunautaire :</strong> [À COMPLÉTER]</li>
        <li><strong>Téléphone :</strong> 09 88 50 40 15</li>
        <li><strong>Email :</strong> contact@njtech.fr</li>
      </ul>

      <h2 id="directeur">Directeur de la publication</h2>
      <p>
        Le directeur de la publication est <strong>[À COMPLÉTER — nom du représentant légal]</strong>,
        en qualité de [À COMPLÉTER — ex. Président / Gérant] de NJTECH Solution.
      </p>
      <p>
        Pour toute question relative au contenu du site, vous pouvez nous contacter à
        l'adresse suivante : <a href="mailto:contact@njtech.fr">contact@njtech.fr</a>.
      </p>

      <h2 id="hebergeur">Hébergeur</h2>
      <p>
        Ce site est hébergé par :
      </p>
      <ul>
        <li><strong>Société :</strong> [À COMPLÉTER — ex. Vercel Inc. / OVH SAS]</li>
        <li><strong>Adresse :</strong> [À COMPLÉTER]</li>
        <li><strong>Téléphone :</strong> [À COMPLÉTER]</li>
        <li><strong>Site web :</strong> [À COMPLÉTER]</li>
      </ul>
      <div className="note">
        Conformément à l'article 6-III-2 de la loi n° 2004-575 du 21 juin 2004 pour la confiance
        dans l'économie numérique (LCEN), les coordonnées de l'hébergeur doivent être mentionnées.
      </div>

      <h2 id="propriete">Propriété intellectuelle</h2>
      <p>
        L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons,
        logiciels, etc.) est la propriété exclusive de NJTECH Solution ou de ses partenaires,
        et est protégé par les lois françaises et internationales relatives à la propriété
        intellectuelle.
      </p>
      <p>
        Toute reproduction, représentation, modification, publication, adaptation ou exploitation
        de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé,
        est interdite, sauf autorisation écrite préalable de NJTECH Solution.
      </p>
      <p>
        Les marques, logos et dénominations sociales des partenaires et opérateurs mentionnés
        sur ce site (Bouygues Telecom, Free Mobile, Orange, SFR, Sogetrel, Cellnex, TDF, etc.)
        restent la propriété exclusive de leurs titulaires respectifs.
      </p>

      <h2 id="responsabilite">Limitation de responsabilité</h2>
      <p>
        NJTECH Solution s'efforce de maintenir les informations publiées sur ce site aussi
        exactes et à jour que possible. Toutefois, la société ne peut garantir l'exactitude,
        la complétude ou l'actualité des informations diffusées.
      </p>
      <p>
        En conséquence, l'utilisateur reconnaît utiliser ces informations sous sa responsabilité
        exclusive et ne peut tenir NJTECH Solution responsable de tout dommage direct ou indirect
        résultant de l'utilisation du site.
      </p>
      <p>
        NJTECH Solution se réserve le droit de modifier, sans préavis, le contenu du site ainsi
        que les présentes mentions légales.
      </p>

      <h2 id="donnees">Données personnelles</h2>
      <p>
        Conformément au Règlement (UE) 2016/679 (RGPD) et à la loi n° 78-17 du 6 janvier 1978
        relative à l'informatique, aux fichiers et aux libertés, vous disposez de droits sur vos
        données personnelles.
      </p>
      <p>
        Pour toute information sur la collecte et le traitement de vos données, veuillez
        consulter notre{" "}
        <a href="/politique-de-confidentialite">Politique de confidentialité</a>.
      </p>

      <h2 id="credits">Crédits</h2>
      <p>
        <strong>Conception et développement :</strong> NJTECH Solution.
      </p>
      <p>
        <strong>Iconographie :</strong> Lucide Icons (licence MIT).
      </p>
      <p>
        <strong>Typographies :</strong> Space Grotesk et Inter, distribuées via Google Fonts
        sous licence SIL Open Font License 1.1.
      </p>
    </LegalLayout>
  );
}
