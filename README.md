<div align="center">

# NJTECH Solution — Site vitrine

**Site web officiel de NJTECH Solution**, spécialiste du déploiement, de l'intégration et de la maintenance des infrastructures télécom mobiles 4G / 5G en France.

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis](https://img.shields.io/badge/Lenis-smooth_scroll-1B1B1B?style=for-the-badge)](https://lenis.darkroom.engineering/)

</div>

---

## Aperçu

![Page d'accueil](./Captures/home.png)

Site vitrine responsive et animé, pensé pour valoriser le savoir-faire terrain de NJTECH Solution auprès des opérateurs et intégrateurs télécom. L'accent est mis sur la lisibilité, la performance et une identité visuelle sobre (navy + bleu signal).

<table>
  <tr>
    <td width="50%"><img src="./Captures/services.png" alt="Prestations" /><p align="center"><sub>Prestations techniques</sub></p></td>
    <td width="50%"><img src="./Captures/realisations.png" alt="Réalisations" /><p align="center"><sub>Réalisations</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="./Captures/a-propos.png" alt="À propos" /><p align="center"><sub>À propos</sub></p></td>
    <td width="50%"><img src="./Captures/contact.png" alt="Contact" /><p align="center"><sub>Contact</sub></p></td>
  </tr>
  <tr>
    <td width="50%"><img src="./Captures/chatbot.png" alt="Assistant" /><p align="center"><sub>Assistant intégré</sub></p></td>
    <td width="50%"><img src="./Captures/cookies.png" alt="Consentement cookies" /><p align="center"><sub>Bandeau de consentement (RGPD)</sub></p></td>
  </tr>
</table>

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Variables d'environnement](#variables-denvironnement)
- [Scripts disponibles](#scripts-disponibles)
- [Arborescence](#arborescence)
- [Pages du site](#pages-du-site)
- [Déploiement](#déploiement)
- [Conformité & SEO](#conformité--seo)
- [Personnalisation](#personnalisation)
- [Crédits](#crédits)

---

## Fonctionnalités

- **Site multi-pages** : accueil, à propos, prestations, réalisations, contact, et pages légales.
- **Animations fluides** au défilement et aux transitions de page (Framer Motion).
- **Smooth scroll** natif géré par Lenis.
- **Formulaire de contact** opérationnel, sans backend, via Web3Forms (réception directe par e-mail).
- **Assistant intégré** (chatbot) pour orienter les visiteurs.
- **Conformité RGPD** : bandeau de consentement cookies + gestion des préférences.
- **Analytics respectueux de la vie privée** via Plausible (chargé uniquement après consentement).
- **SEO avancé** : métadonnées dynamiques, données structurées JSON-LD, `sitemap.xml`, `robots.txt`, image Open Graph générée.
- **Accessibilité** : respect de `prefers-reduced-motion`, contrastes soignés, navigation clavier.
- **100 % responsive**, du mobile au grand écran.

---

## Stack technique

| Domaine | Technologie |
|---|---|
| Framework | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| Langage | [TypeScript 5](https://www.typescriptlang.org/) |
| UI | [React 19](https://react.dev/) |
| Styles | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animations | [Framer Motion](https://www.framer.com/motion/) |
| Smooth scroll | [Lenis](https://lenis.darkroom.engineering/) |
| Icônes | [Lucide React](https://lucide.dev/) |
| Formulaire | [Web3Forms](https://web3forms.com/) |
| Analytics | [Plausible](https://plausible.io/) |
| Utilitaires | `clsx` + `tailwind-merge` |

---

## Prérequis

- **Node.js 18.18+** (ou 20+ recommandé)
- **npm** (fourni avec Node.js)

---

## Installation

```bash
# 1. Cloner le dépôt
git clone <url-du-depot>
cd njtech

# 2. Installer les dépendances
npm install

# 3. Configurer les variables d'environnement (voir section dédiée)
cp .env.example .env.local   # puis renseigner la clé Web3Forms

# 4. Lancer le serveur de développement
npm run dev
```

Le site est alors accessible sur **[http://localhost:3000](http://localhost:3000)**.

---

## Variables d'environnement

Créez un fichier `.env.local` à la racine :

```env
# Clé API Web3Forms — gère l'envoi du formulaire de contact.
# Obtenir une clé gratuite sur https://web3forms.com (2 minutes) :
#   1. Saisir l'e-mail qui recevra les messages
#   2. "Create Access Key" et copier la clé reçue
NEXT_PUBLIC_WEB3FORMS_KEY=votre-cle-ici
```

> La clé porte le préfixe `NEXT_PUBLIC_` car Web3Forms l'utilise côté client — c'est le fonctionnement prévu, elle n'expose aucune donnée sensible.

---

## Scripts disponibles

| Commande | Description |
|---|---|
| `npm run dev` | Démarre le serveur de développement (Turbopack) |
| `npm run build` | Génère la version de production optimisée |
| `npm start` | Sert la version de production (après `build`) |

---

## Arborescence

```
njtech/
├── public/
│   ├── images/              Photos & logos (issus du dossier d'entreprise)
│   └── videos/              Vidéo d'arrière-plan du hero
├── src/
│   ├── app/                 Routes (App Router)
│   │   ├── layout.tsx       Racine : Navbar, Footer, scroll, consentement
│   │   ├── page.tsx         Page d'accueil
│   │   ├── a-propos/        Page « À propos »
│   │   ├── services/        Page « Prestations »
│   │   ├── realisations/    Page « Réalisations »
│   │   ├── contact/         Page « Contact »
│   │   ├── mentions-legales/, cgu/,
│   │   ├── politique-de-confidentialite/, politique-cookies/
│   │   ├── globals.css      Thème (couleurs, animations, utilitaires)
│   │   ├── sitemap.ts       sitemap.xml
│   │   ├── robots.ts        robots.txt
│   │   ├── opengraph-image.tsx  Image de partage social
│   │   └── icon.tsx         Favicon
│   ├── components/
│   │   ├── layout/          Navbar, Footer, transitions de page
│   │   ├── sections/        Blocs de contenu (Hero, About, Services…)
│   │   ├── ui/              Composants réutilisables (boutons, compteurs…)
│   │   ├── effects/         Smooth scroll, arrière-plans animés
│   │   └── legal/           Consentement cookies, analytics
│   ├── hooks/               Hooks personnalisés (formulaire, consentement…)
│   └── lib/                 Utilitaires (fusion de classes)
├── next.config.ts
├── tsconfig.json
└── package.json
```

---

## Pages du site

| Route | Description |
|---|---|
| `/` | Accueil — présentation, prestations clés, réalisations, partenaires |
| `/a-propos` | L'entreprise, son organisation, sa démarche sécurité, sa couverture |
| `/services` | Détail des prestations techniques et de la méthodologie |
| `/realisations` | Galerie de chantiers télécom par typologie |
| `/contact` | Coordonnées + formulaire + zone d'intervention |
| `/mentions-legales` | Mentions légales |
| `/cgu` | Conditions générales d'utilisation |
| `/politique-de-confidentialite` | Politique de confidentialité (RGPD) |
| `/politique-cookies` | Politique de gestion des cookies |

---

## Déploiement

Le projet est optimisé pour un déploiement sur **[Vercel](https://vercel.com/)** (éditeur de Next.js) :

1. Importer le dépôt dans Vercel.
2. Ajouter la variable d'environnement `NEXT_PUBLIC_WEB3FORMS_KEY`.
3. Déployer — Vercel détecte Next.js automatiquement.

Tout hébergeur compatible Node.js fonctionne également via `npm run build` puis `npm start`.

---

## Conformité & SEO

- **RGPD** : aucun cookie de mesure d'audience n'est déposé avant consentement explicite. Les pages légales (mentions, CGU, confidentialité, cookies) sont fournies.
- **SEO** : titres et descriptions par page, données structurées `Organization` / `LocalBusiness` (JSON-LD), `sitemap.xml` et `robots.txt` générés automatiquement.

> ⚠️ **Avant mise en production**, compléter les informations légales obligatoires dans `src/app/mentions-legales/page.tsx` (raison sociale, SIREN/SIRET, RCS, n° de TVA, directeur de la publication, hébergeur).

---

## Personnalisation

- **Couleurs & animations** : `src/app/globals.css` (variables `--color-*`).
- **Contenu** : chaque bloc est un composant isolé dans `src/components/sections/`.
- **Coordonnées** : `Navbar.tsx`, `Footer.tsx` et la page `contact/`.
- **Images** : remplacer les fichiers dans `public/images/`.

---

## Crédits

Projet développé pour **NJTECH Solution** — Épinay-sur-Seine (93).
Visuels fournis par l'entreprise (chantiers, équipes terrain, installations 4G/5G).

</content>
</invoke>
