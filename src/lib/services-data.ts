export type ServiceSlug =
  | "amenagement-sites-radio"
  | "deploiement-antennes"
  | "bureau-etude"
  | "maintenance-sav";

export type ServiceData = {
  n:      string;
  slug:   ServiceSlug;
  icon:   "Building2" | "Antenna" | "Cable" | "Wrench";
  title:  string;
  hero: {
    label:       string;
    title:       string;
    description: string;
  };
  seo: {
    title:       string;
    description: string;
    keywords:    string[];
  };
  text:   string;
  points: string[];
  image:  string;
};

export const SERVICES: ServiceData[] = [
  {
    n:    "01",
    slug: "amenagement-sites-radio",
    icon: "Building2",
    title: "Aménagement de sites radio",
    hero: {
      label:       "Aménagement de sites radio",
      title:       "Du génie civil à la mise en service.",
      description: "Sites neufs ou existants — pylônes, toits terrasses, milieu urbain et rural. NJTECH coordonne l'ensemble du chantier jusqu'à la réception.",
    },
    seo: {
      title:       "Aménagement de sites radio 4G / 5G — NJTECH Solution",
      description: "NJTECH aménage vos sites radio 4G et 5G en France — pylônes, toits terrasses, génie civil télécom. Coordination complète, mise en conformité. Partenaire Bouygues Telecom, Free Mobile, Orange, SFR.",
      keywords:    ["aménagement sites radio", "génie civil télécom", "pylône 5G", "toit terrasse antenne", "déploiement 4G France"],
    },
    text:   "Nous prenons en charge l'aménagement complet de sites neufs ou existants — toits terrasses, pylônes et infrastructures en milieu urbain et rural. De la préparation du génie civil à l'installation des équipements actifs, nos équipes garantissent un site opérationnel dans les délais.",
    points: [
      "Génie civil et fondations",
      "Toits terrasses & sites monopole",
      "Préparation des ancrages et supports",
      "Mise en conformité des sites existants",
    ],
    image: "/images/rural-tower.png",
  },
  {
    n:    "02",
    slug: "deploiement-antennes",
    icon: "Antenna",
    title: "Déploiement antennes & faisceaux",
    hero: {
      label:       "Déploiement antennes & faisceaux",
      title:       "Précision et certification sur chaque installation.",
      description: "Antennes sectorielles 4G / 5G, faisceaux hertziens, équipements RAN. Nos techniciens certifiés interviennent en hauteur avec tous les EPI.",
    },
    seo: {
      title:       "Déploiement antennes & faisceaux hertziens 4G / 5G — NJTECH Solution",
      description: "Installation et calage d'antennes sectorielles 4G/5G, faisceaux hertziens PDH/SDH, équipements RAN Nokia, Ericsson, Huawei. Techniciens certifiés travaux en hauteur. Intervention sur toute la France.",
      keywords:    ["déploiement antennes 5G", "faisceaux hertziens", "RAN Nokia Ericsson Huawei", "calage azimutal", "travaux en hauteur télécom"],
    },
    text:   "Installation et calage précis d'antennes sectorielles, faisceaux hertziens et équipements RAN. Nos techniciens certifiés interviennent en hauteur avec tous les équipements de sécurité pour une mise en service parfaite.",
    points: [
      "Antennes sectorielles 4G / 5G",
      "Faisceaux hertziens PDH / SDH",
      "Équipements RAN (Nokia, Ericsson, Huawei)",
      "Calage azimutal et électrique",
    ],
    image: "/images/technician-climbing.png",
  },
  {
    n:    "03",
    slug: "bureau-etude",
    icon: "Cable",
    title: "Bureau d'étude",
    hero: {
      label:       "Bureau d'étude",
      title:       "Dossiers techniques complets, de l'APS au DOE.",
      description: "Plans DP, DTB, DIM, APS, APD, DOE — photomontages et suivi de conformité réglementaire. Notre bureau d'étude interne couvre l'intégralité des livrables.",
    },
    seo: {
      title:       "Bureau d'étude télécom — Plans DP, DIM, DOE — NJTECH Solution",
      description: "Bureau d'étude télécom NJTECH : plans DP, DTB, DIM, APS, APD, DOE, photomontages, études de propagation. Dossiers complets pour déploiements 4G et 5G. Conformité réglementaire garantie.",
      keywords:    ["bureau d'étude télécom", "plans DP DIM DOE", "photomontages télécom", "dossier technique antenne", "conformité réglementaire 5G"],
    },
    text:   "Notre bureau d'étude interne réalise l'ensemble des dossiers techniques nécessaires à chaque projet télécom — depuis les études de faisabilité jusqu'au dossier de fin de travaux, en passant par les photomontages et les plans d'exécution.",
    points: [
      "Plans DP / DTB / DIM / APS / APD / DOE",
      "Photomontages et simulations visuelles",
      "Études de propagation et couverture",
      "Suivi de conformité et dossiers réglementaires",
    ],
    image: "/images/bts-cabinet.png",
  },
  {
    n:    "04",
    slug: "maintenance-sav",
    icon: "Wrench",
    title: "Maintenance & SAV",
    hero: {
      label:       "Maintenance & SAV",
      title:       "Réactivité 48h, partout en France.",
      description: "Maintenance préventive et corrective des infrastructures télécom. Diagnostic, remise en service — nos équipes interviennent rapidement sur tout le territoire.",
    },
    seo: {
      title:       "Maintenance & SAV infrastructures télécom 4G / 5G — NJTECH Solution",
      description: "Maintenance préventive et corrective des infrastructures télécom. Réactivité 48h sur tout le territoire français. Diagnostic, remise en service, gestion matériel. Partenaire des opérateurs nationaux.",
      keywords:    ["maintenance télécom", "SAV antennes 4G 5G", "maintenance préventive corrective", "intervention télécom 48h", "remise en service réseau mobile"],
    },
    text:   "Nous assurons la maintenance préventive et corrective des infrastructures télécom. Nos équipes interviennent rapidement sur tout le territoire pour diagnostiquer et résoudre les pannes, garantissant une disponibilité réseau maximale.",
    points: [
      "Maintenance préventive programmée",
      "Interventions correctives 24h / 48h",
      "Préparation et gestion du matériel",
      "Vérification avant remise en service",
    ],
    image: "/images/install-5g.png",
  },
];

export function getService(slug: string): ServiceData | undefined {
  return SERVICES.find(s => s.slug === slug);
}
