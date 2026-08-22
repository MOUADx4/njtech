/*
 * POLITIQUE DE CONFIDENTIALITÉ — MODÈLE À FAIRE RELIRE PAR UN JURISTE
 * Champs à compléter avant mise en production :
 *   - Identité complète du responsable de traitement (SIREN)
 *   - DPO / contact RGPD dédié si applicable
 *   - Hébergeur et sous-traitants techniques effectifs
 *   - Outils analytics utilisés le cas échéant
 *   - Politique de conservation effective à valider
 */

import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de confidentialité — NJTECH Solution",
  description:
    "Politique de confidentialité et de protection des données personnelles de NJTECH Solution, conformément au RGPD.",
  robots: { index: true, follow: true },
};

const SECTIONS: LegalSection[] = [
  { id: "responsable",    title: "Responsable de traitement"   },
  { id: "donnees",        title: "Données collectées"          },
  { id: "finalites",      title: "Finalités & bases légales"   },
  { id: "conservation",   title: "Durée de conservation"       },
  { id: "destinataires",  title: "Destinataires"               },
  { id: "transferts",     title: "Transferts hors UE"          },
  { id: "droits",         title: "Vos droits"                  },
  { id: "exercice",       title: "Exercer vos droits"          },
  { id: "cookies",        title: "Cookies"                     },
  { id: "modifications",  title: "Modifications"               },
];

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      lastUpdated="31 mai 2026"
      sections={SECTIONS}
    >
      <div className="note">
        Ce document constitue un modèle de conformité. Il doit être relu et validé par un
        professionnel juridique avant toute mise en ligne définitive.
      </div>

      <h2 id="responsable">Responsable de traitement</h2>
      <p>
        Le responsable du traitement des données à caractère personnel collectées via le site
        <strong> njtech-solution.fr</strong> est :
      </p>
      <ul>
        <li><strong>Société :</strong> NJTECH Solution</li>
        <li><strong>Forme juridique :</strong> [À COMPLÉTER]</li>
        <li><strong>SIREN :</strong> [À COMPLÉTER]</li>
        <li><strong>Adresse :</strong> 9 rue de l'Église, 93800 Épinay-sur-Seine</li>
        <li><strong>Téléphone :</strong> 09 88 50 40 15</li>
        <li><strong>Email :</strong> <a href="mailto:contact@njtech.fr">contact@njtech.fr</a></li>
        <li><strong>Contact RGPD / DPO :</strong> [À COMPLÉTER — ex. rgpd@njtech.fr si DPO désigné]</li>
      </ul>

      <h2 id="donnees">Données collectées</h2>
      <p>
        Dans le cadre de l'utilisation du site, NJTECH Solution est susceptible de collecter
        les données suivantes :
      </p>
      <h3>Via le formulaire de contact</h3>
      <ul>
        <li>Nom et prénom</li>
        <li>Nom de l'entreprise / organisme</li>
        <li>Adresse email professionnelle</li>
        <li>Numéro de téléphone</li>
        <li>Type d'intervention souhaitée</li>
        <li>Contenu du message</li>
      </ul>
      <h3>Données de navigation (collectées automatiquement)</h3>
      <ul>
        <li>Adresse IP (anonymisée autant que possible)</li>
        <li>Type et version de navigateur</li>
        <li>Pages consultées et durée de visite</li>
        <li>Données de cookies (voir notre <a href="/politique-cookies">Politique de cookies</a>)</li>
      </ul>
      <p>
        Le site NJTECH Solution n'effectue aucune collecte de données sensibles au sens
        de l'article 9 du RGPD.
      </p>

      <h2 id="finalites">Finalités et bases légales</h2>
      <table>
        <thead>
          <tr>
            <th>Finalité</th>
            <th>Base légale (RGPD art. 6)</th>
            <th>Données concernées</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Répondre aux demandes de contact et devis</td>
            <td>Intérêt légitime / Pré-contractuel</td>
            <td>Nom, email, tél., entreprise, message</td>
          </tr>
          <tr>
            <td>Suivi commercial et relance</td>
            <td>Intérêt légitime</td>
            <td>Nom, email, entreprise</td>
          </tr>
          <tr>
            <td>Mesure d'audience du site (analytics)</td>
            <td>Consentement</td>
            <td>Données de navigation anonymisées</td>
          </tr>
          <tr>
            <td>Sécurité et prévention des abus</td>
            <td>Intérêt légitime</td>
            <td>Adresse IP, logs serveur</td>
          </tr>
          <tr>
            <td>Respect des obligations légales</td>
            <td>Obligation légale</td>
            <td>Selon réglementation applicable</td>
          </tr>
        </tbody>
      </table>

      <h2 id="conservation">Durée de conservation</h2>
      <ul>
        <li>
          <strong>Données de contact et de prospection :</strong> 3 ans à compter du dernier
          contact, conformément aux recommandations de la CNIL.
        </li>
        <li>
          <strong>Données de facturation / contractuelles :</strong> 10 ans (obligation légale
          comptable — article L. 123-22 du Code de commerce).
        </li>
        <li>
          <strong>Logs de sécurité :</strong> 12 mois maximum.
        </li>
        <li>
          <strong>Cookies de mesure d'audience :</strong> 13 mois maximum (recommandation CNIL).
        </li>
      </ul>
      <p>
        À l'issue de ces délais, les données sont supprimées ou anonymisées de manière irréversible.
      </p>

      <h2 id="destinataires">Destinataires des données</h2>
      <p>
        Vos données sont traitées par les personnes habilitées de NJTECH Solution (équipes
        commerciale et technique). Elles peuvent également être transmises aux sous-traitants
        techniques suivants, dans la stricte mesure nécessaire à l'exécution de leurs missions :
      </p>
      <ul>
        <li><strong>Hébergeur du site :</strong> [À COMPLÉTER — ex. Vercel Inc.] — hébergement et infrastructure</li>
        <li><strong>Service de messagerie :</strong> [À COMPLÉTER] — traitement des emails entrants</li>
        <li><strong>Outil analytics :</strong> [À COMPLÉTER si applicable] — mesure d'audience</li>
      </ul>
      <p>
        NJTECH Solution ne vend ni ne loue vos données personnelles à des tiers.
        Vos données ne sont transmises à aucun partenaire commercial sans votre consentement
        explicite, sauf obligation légale.
      </p>

      <h2 id="transferts">Transferts hors Union européenne</h2>
      <p>
        Certains sous-traitants peuvent être établis hors de l'Union européenne (notamment
        aux États-Unis). Dans ce cas, NJTECH Solution s'assure que ces transferts bénéficient
        de garanties appropriées, notamment :
      </p>
      <ul>
        <li>Décision d'adéquation de la Commission européenne (ex. Data Privacy Framework)</li>
        <li>Clauses contractuelles types (CCT) adoptées par la Commission européenne</li>
        <li>Règles d'entreprise contraignantes (Binding Corporate Rules)</li>
      </ul>
      <p>
        [À COMPLÉTER — préciser les sous-traitants concernés et les garanties effectivement mises en place]
      </p>

      <h2 id="droits">Vos droits</h2>
      <p>
        Conformément au RGPD (articles 15 à 22) et à la loi Informatique et Libertés,
        vous disposez des droits suivants sur vos données personnelles :
      </p>
      <ul>
        <li>
          <strong>Droit d'accès (art. 15 RGPD) :</strong> obtenir la confirmation que des données
          vous concernant sont traitées, et en obtenir une copie.
        </li>
        <li>
          <strong>Droit de rectification (art. 16) :</strong> faire corriger des données inexactes
          ou incomplètes.
        </li>
        <li>
          <strong>Droit à l'effacement / « droit à l'oubli » (art. 17) :</strong> demander la
          suppression de vos données, sous réserve des obligations légales.
        </li>
        <li>
          <strong>Droit à la limitation du traitement (art. 18) :</strong> suspendre le traitement
          de vos données dans certains cas.
        </li>
        <li>
          <strong>Droit à la portabilité (art. 20) :</strong> recevoir vos données dans un format
          structuré et lisible par machine (applicable aux traitements fondés sur le consentement
          ou l'exécution d'un contrat).
        </li>
        <li>
          <strong>Droit d'opposition (art. 21) :</strong> vous opposer à tout moment au traitement
          de vos données, notamment à des fins de prospection commerciale.
        </li>
        <li>
          <strong>Droit de ne pas faire l'objet d'une décision automatisée (art. 22) :</strong> ne
          pas être soumis à une décision fondée exclusivement sur un traitement automatisé.
        </li>
      </ul>

      <h2 id="exercice">Exercer vos droits</h2>
      <p>
        Pour exercer l'un de ces droits, adressez votre demande par email à{" "}
        <a href="mailto:contact@njtech.fr">contact@njtech.fr</a> en indiquant votre nom,
        prénom et, si possible, votre email de contact.
      </p>
      <p>
        Nous nous engageons à répondre dans un délai d'<strong>un mois</strong> à compter
        de la réception de votre demande (délai pouvant être prolongé à trois mois en cas de
        demande complexe, avec information préalable).
      </p>
      <p>
        Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une
        réclamation auprès de la <strong>Commission Nationale de l'Informatique et des Libertés
        (CNIL)</strong> :
      </p>
      <ul>
        <li>
          En ligne :{" "}
          <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noreferrer">
            cnil.fr/fr/plaintes
          </a>
        </li>
        <li>Par courrier : CNIL, 3 Place de Fontenoy — TSA 80715, 75334 Paris Cedex 07</li>
      </ul>

      <h2 id="cookies">Cookies</h2>
      <p>
        Le site utilise des cookies. Pour en savoir plus sur les cookies utilisés, leur finalité
        et comment les paramétrer, consultez notre{" "}
        <a href="/politique-cookies">Politique de cookies</a>.
      </p>

      <h2 id="modifications">Modifications de la politique</h2>
      <p>
        NJTECH Solution se réserve le droit de modifier la présente politique à tout moment,
        notamment pour se conformer à l'évolution de la réglementation ou à de nouveaux
        traitements. La date de « dernière mise à jour » en haut de cette page sera actualisée
        en conséquence.
      </p>
      <p>
        Nous vous encourageons à consulter régulièrement cette page.
      </p>
    </LegalLayout>
  );
}
