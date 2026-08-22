/*
 * POLITIQUE DE COOKIES — MODÈLE À FAIRE RELIRE PAR UN JURISTE
 * Champs à compléter :
 *   - Outils analytics effectivement utilisés (Google Analytics, Plausible, Matomo…)
 *   - Liste exacte des cookies tiers éventuels avec durée réelle
 *   - URL de l'outil de gestion du consentement si CMP externe
 */

import type { Metadata } from "next";
import LegalLayout, { type LegalSection } from "@/components/legal/LegalLayout";

export const metadata: Metadata = {
  title: "Politique de cookies — NJTECH Solution",
  description:
    "Politique d'utilisation des cookies sur le site NJTECH Solution, conformément aux recommandations de la CNIL.",
  robots: { index: true, follow: true },
};

const SECTIONS: LegalSection[] = [
  { id: "definition",    title: "Qu'est-ce qu'un cookie ?"  },
  { id: "utilises",      title: "Cookies utilisés"          },
  { id: "duree",         title: "Durée de vie"              },
  { id: "gestion",       title: "Gérer vos préférences"     },
  { id: "tiers",         title: "Cookies tiers"             },
  { id: "contact",       title: "Contact"                   },
];

export default function PolitiqueCookiesPage() {
  return (
    <LegalLayout
      title="Politique de cookies"
      lastUpdated="31 mai 2026"
      sections={SECTIONS}
    >
      <div className="note">
        Conformément aux recommandations de la CNIL (délibération n° 2020-091 du 17 septembre 2020),
        aucun cookie non essentiel n'est déposé avant que vous ayez donné votre consentement.
      </div>

      <h2 id="definition">Qu'est-ce qu'un cookie ?</h2>
      <p>
        Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette,
        smartphone) lors de la consultation d'un site internet. Il permet au site de mémoriser
        des informations sur votre visite, comme votre langue préférée et d'autres paramètres.
      </p>
      <p>
        Les cookies peuvent être déposés par le site visité (<em>cookies first-party</em>) ou
        par des services tiers (<em>cookies third-party</em>). Certains cookies sont
        <strong> strictement nécessaires</strong> au fonctionnement du site ; d'autres
        nécessitent votre consentement préalable.
      </p>

      <h2 id="utilises">Cookies utilisés sur njtech-solution.fr</h2>

      <h3>Cookies strictement nécessaires (exemptés de consentement)</h3>
      <p>
        Ces cookies sont indispensables au bon fonctionnement du site. Ils ne peuvent pas
        être désactivés.
      </p>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Finalité</th>
            <th>Durée</th>
            <th>Éditeur</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>njtech-cookie-consent</code></td>
            <td>Mémorisation de vos préférences cookies</td>
            <td>13 mois</td>
            <td>NJTECH Solution (first-party)</td>
          </tr>
          <tr>
            <td>Cookies de session Next.js</td>
            <td>Fonctionnement technique du site</td>
            <td>Session</td>
            <td>NJTECH Solution (first-party)</td>
          </tr>
        </tbody>
      </table>

      <h3>Cookies de mesure d'audience (soumis à consentement)</h3>
      <p>
        Ces cookies permettent d'analyser le trafic et l'utilisation du site afin d'en améliorer
        les performances et le contenu. Ils ne sont activés qu'après votre accord explicite.
      </p>
      <table>
        <thead>
          <tr>
            <th>Outil</th>
            <th>Finalité</th>
            <th>Durée</th>
            <th>Transferts</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>[À COMPLÉTER — ex. Plausible Analytics]</td>
            <td>Mesure d'audience anonymisée</td>
            <td>[À COMPLÉTER]</td>
            <td>[À COMPLÉTER — UE/hors UE]</td>
          </tr>
        </tbody>
      </table>
      <div className="note">
        Si aucun outil d'analyse n'est utilisé, supprimez cette section.
      </div>

      <h2 id="duree">Durée de vie des cookies</h2>
      <p>
        Conformément aux recommandations de la CNIL, la durée de vie maximale des cookies
        soumis à consentement est de <strong>13 mois</strong> à compter de leur dépôt.
        À l'issue de ce délai, votre consentement est de nouveau sollicité.
      </p>
      <p>
        Votre choix (accepter ou refuser) est mémorisé pendant <strong>6 mois</strong> via
        le cookie <code>njtech-cookie-consent</code>. Passé ce délai, la bannière réapparaît.
      </p>

      <h2 id="gestion">Gérer vos préférences cookies</h2>
      <p>Vous pouvez à tout moment modifier vos choix de plusieurs façons :</p>
      <ul>
        <li>
          <strong>Via la bannière du site :</strong> cliquez sur « Gérer mes cookies » dans
          le pied de page du site pour rouvrir le panneau de gestion.
        </li>
        <li>
          <strong>Via les paramètres de votre navigateur :</strong> la plupart des navigateurs
          permettent de bloquer ou supprimer les cookies. Cette action peut toutefois altérer
          le fonctionnement du site.
        </li>
      </ul>

      <h3>Liens de paramétrage par navigateur</h3>
      <ul>
        <li>
          <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer">
            Google Chrome
          </a>
        </li>
        <li>
          <a href="https://support.mozilla.org/fr/kb/cookies-informations-sites-enregistrent" target="_blank" rel="noreferrer">
            Mozilla Firefox
          </a>
        </li>
        <li>
          <a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer">
            Safari (macOS)
          </a>
        </li>
        <li>
          <a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noreferrer">
            Microsoft Edge
          </a>
        </li>
      </ul>

      <h2 id="tiers">Cookies et contenus tiers</h2>
      <p>
        Le site njtech-solution.fr n'intègre pas, à ce jour, de contenus embarqués de réseaux sociaux
        (boutons de partage, vidéos YouTube, etc.) susceptibles de déposer des cookies tiers
        sans votre consentement préalable.
      </p>
      <p>
        [À COMPLÉTER — si des widgets tiers sont intégrés, les lister ici avec leur politique
        de cookies respective]
      </p>

      <h2 id="contact">Contact</h2>
      <p>
        Pour toute question relative à notre utilisation des cookies ou pour exercer vos droits,
        contactez-nous à :{" "}
        <a href="mailto:contact@njtech.fr">contact@njtech.fr</a>.
      </p>
      <p>
        Pour en savoir plus sur vos droits, consultez notre{" "}
        <a href="/politique-de-confidentialite">Politique de confidentialité</a> ou le site
        de la CNIL :{" "}
        <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noreferrer">
          cnil.fr
        </a>.
      </p>
    </LegalLayout>
  );
}
