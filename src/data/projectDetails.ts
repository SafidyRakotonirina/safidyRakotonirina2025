import type { Project } from "./projects";

export interface ProjectSection {
  title: string;
  description: string;
  // Capture d'écran de la page / fonctionnalité.
  // Dépose l'image dans public/images/projects/<slug>/ puis renseigne ici
  // le chemin complet, ex: "/images/projects/itad-trano/recherche.webp".
  // Si `image` est absent, un encart "Capture à venir" s'affiche.
  image?: string;
}

export interface ProjectDetail {
  slug: Project["slug"];
  tagline: string;
  overview: string;
  role: string;
  year: string;
  highlights: string[];
  sectionsTitle?: string;
  sections: ProjectSection[];
}

// Contenu détaillé de chaque projet, affiché sur /projets/<slug>.
// Les descriptions sont à ajuster/compléter une fois les captures fournies.
export const PROJECT_DETAILS: Record<string, ProjectDetail> = {
  "itad-trano": {
    slug: "itad-trano",
    tagline:
      "Rechercher, louer, acheter et vendre des biens immobiliers à Madagascar",
    overview:
      "iTad.mg est une application mobile Android qui met en relation propriétaires, agences et particuliers à Madagascar. Elle permet de trouver rapidement une maison, un terrain, un local ou un bureau, de publier des annonces et de contacter directement les annonceurs. L'application totalise plus de 10 000 téléchargements et une note de 4,3/5 sur Google Play.",
    role: "Développeur mobile (React Native)",
    year: "2026",
    highlights: [
      "Recherche avancée avec filtres (prix, localisation, type de bien, pièces)",
      "Alertes personnalisées et favoris",
      "Prise de rendez-vous de visite en ligne",
      "Notifications en temps réel",
      "Messagerie et évaluations",
      "Géolocalisation et mode sombre",
    ],
    sections: [
      {
        title: "Écran d'accueil et recherche",
        description:
          "L'utilisateur arrive sur un fil d'annonces récentes avec une barre de recherche. Il peut filtrer par type de bien (maison, terrain, local…), localisation, budget et nombre de pièces pour affiner rapidement les résultats.",
      },
      {
        title: "Détail d'un bien",
        description:
          "Chaque annonce présente un carrousel de photos, le prix, la surface, la localisation sur carte et la description complète. L'utilisateur peut ajouter le bien aux favoris, le partager ou demander une visite.",
      },
      {
        title: "Favoris et alertes",
        description:
          "Les biens sauvegardés sont regroupés dans l'onglet Favoris. Des recherches enregistrées permettent d'être notifié dès qu'une nouvelle annonce correspond aux critères définis.",
      },
      {
        title: "Prise de rendez-vous",
        description:
          "Depuis une annonce, l'utilisateur propose une date de visite. L'annonceur reçoit la demande et peut la confirmer ou la reporter depuis son espace.",
      },
      {
        title: "Messagerie et évaluations",
        description:
          "Une messagerie intégrée permet d'échanger directement avec les annonceurs. Après une visite, l'utilisateur peut laisser une évaluation et consulter les avis des autres membres.",
      },
      {
        title: "Géolocalisation et mode sombre",
        description:
          "Les annonces s'affichent sur une carte pour visualiser les biens autour de soi, avec des suggestions intelligentes. L'application propose également un mode sombre confortable.",
      },
    ],
  },
  "itad-mg": {
    slug: "itad-mg",
    tagline: "Plateforme de petites annonces immobilières à Madagascar",
    overview:
      "ITAD.mg est la plateforme web du réseau iTad.mg : un site de petites annonces immobilières qui facilite la location et la vente de maisons, terrains et autres biens partout à Madagascar. Développée avec React, Redux et Vite, elle propose une interface moderne et responsive : recherche multicritères, carte interactive, alertes personnalisées, fiches détaillées et un espace annonceur (propriétaire ou agent) avec portefeuille intégré.",
    role: "Développeur front-end (React)",
    year: "2026",
    highlights: [
      "Recherche multicritères et filtres avancés",
      "Carte interactive des biens avec affichage des prix",
      "Sélection par quartier / fokontany (autocomplétion)",
      "Alertes personnalisées et annonces favorites",
      "Fiches détaillées avec galerie photos et contact agent",
      "Espace annonceur : portefeuille et retraits Mobile Money",
    ],
    sections: [
      {
        title: "Recherche et navigation",
        description:
          "Un en-tête toujours accessible regroupe la recherche libre, les onglets (Tany, Carte, Plus récents, Proprio, Tous, Agent), le bouton de connexion et l'accès à l'application mobile. Le nombre de biens disponibles s'affiche en direct, avec des raccourcis vers les quartiers et les informations pratiques.",
        image: "/images/projects/itad-mg/01-recherche-navigation.webp",
      },
      {
        title: "Carte interactive",
        description:
          "Tous les biens sont affichés sur une carte (Leaflet) avec des bulles indiquant le prix, filtrables par type (Tany, Annonce) et par légende : maison à louer, maison à vendre et terrain à vendre. La carte indique le nombre de biens et permet d'ouvrir directement l'annonce depuis un marqueur.",
        image: "/images/projects/itad-mg/02-carte-interactive.webp",
      },
      {
        title: "Filtres avancés",
        description:
          "Un panneau de filtres permet d'affiner la recherche : sous-type (à louer ou à vendre), localisation, budget minimum et maximum (avec options « sans commission » et « sans caution »), nombre de pièces minimum et équipements (accès voiture, balcon, terrasse, WC et cuisine intérieurs, cours, garage, piscine…). Un bouton Réinitialiser permet de repartir de zéro et un raccourci crée une alerte à partir des mêmes critères.",
        image: "/images/projects/itad-mg/03-filtres-avances.webp",
      },
      {
        title: "Recherche par quartier / fokontany",
        description:
          "En complément des filtres classiques, la recherche peut se faire par quartier (fokontany). Un champ dédié propose une autocomplétion avec un compteur de quartiers disponibles et une liste de suggestions, ce qui facilite la navigation dans le découpage géographique local.",
        image: "/images/projects/itad-mg/04-recherche-quartier.webp",
      },
      {
        title: "Fiche détaillée d'une annonce",
        description:
          "Chaque annonce présente le bien (titre, description, adresse, caractéristiques comme les chambres, l'accès véhicule ou le droit de visite), le prix et les frais éventuels (commission de l'agent). La fiche indique le contact de l'agent, les services disponibles (électricité, eau Jirama…) et propose une galerie photos.",
        image: "/images/projects/itad-mg/05-fiche-annonce.webp",
      },
      {
        title: "Alertes personnalisées",
        description:
          "L'utilisateur peut créer une alerte pour être prévenu dès qu'une nouvelle annonce correspond à ses critères. Il choisit le type de bien (maison à louer, maison à vendre, terrain à vendre) puis valide en quelques étapes.",
        image: "/images/projects/itad-mg/06-alerte-bien.webp",
      },
      {
        title: "Espace annonceur et portefeuille",
        description:
          "Les propriétaires et agents disposent d'un espace dédié avec un portefeuille : solde disponible, montants en attente, avis reçus et historique des retraits. Les demandes de retrait se font directement via Mobile Money (MVola), ce qui simplifie la gestion des annonces et de leurs revenus.",
        image: "/images/projects/itad-mg/07-portefeuille-agent.webp",
      },
    ],
  },
  devflash: {
    slug: "devflash",
    tagline: "Landing page pour un studio de création de sites web",
    overview:
      "DevFlash est une landing page (site d'une seule page) présentant une offre de création de sites web modernes, rapides et professionnels pour entreprises, indépendants et marques à Madagascar. Construite avec React et Vite, la page cherche à convaincre un visiteur en quelques secondes puis à l'amener à prendre contact : proposition de valeur claire, services, réalisations et appels à l'action. Une attention particulière a été portée au référencement naturel (SEO) et à la performance.",
    role: "Développeur front-end (React)",
    year: "2026",
    highlights: [
      "Site d'une seule page, orienté conversion",
      "Design moderne et responsive",
      "Optimisation SEO (données structurées schema.org)",
      "Google Consent Mode v2 (gestion des cookies)",
      "Chargement rapide et animations au défilement",
    ],
    sectionsTitle: "Structure de la page",
    sections: [
      {
        title: "Hero et proposition de valeur",
        description:
          "En haut de page, un hero accrocheur résume l'offre en une phrase et met en avant un appel à l'action principal, avec une navigation par ancres vers les sections suivantes.",
      },
      {
        title: "Services",
        description:
          "Une section présentant les prestations proposées : création de sites vitrines, optimisation SEO, performance et maintenance, avec une description claire de chaque offre.",
      },
      {
        title: "Réalisations",
        description:
          "Un aperçu des projets réalisés, qui joue le rôle de portfolio pour rassurer les prospects sur la qualité et la variété du travail.",
      },
      {
        title: "Contact et appel à l'action",
        description:
          "Un formulaire de contact et les coordonnées (email, téléphone) pour démarrer un projet, répétés en fin de parcours pour maximiser les conversions.",
      },
      {
        title: "SEO, performance et consentement",
        description:
          "La page est optimisée pour le référencement naturel (balises, données structurées schema.org) et charge rapidement ; la gestion des cookies est conforme au Google Consent Mode v2.",
      },
    ],
  },
};
