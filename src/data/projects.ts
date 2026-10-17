export type ProjectCategory = "web" | "mobile" | "design";

export interface Project {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  logo?: string;
  tags: string[];
  category: ProjectCategory;
  date: string;
  link: string;
  github: string;
  features: string[];
}

// Pour ajouter un projet : copie un bloc et remplace les informations.
// - image  : capture d'écran du projet (fond de la carte, format large 16:9).
// - logo   : (optionnel) petit logo/icône affiché à côté du titre.
// Dates "… (à vérifier)": à confirmer avec Safidy.
export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "itad-trano",
    title: "iTad.mg — Application mobile",
    description:
      "Application mobile Android pour rechercher, louer, acheter et vendre des biens immobiliers et fonciers à Madagascar. Plus de 10 000 téléchargements et une note de 4,3/5 sur Google Play.",
    image: "/images/hero-app-itad.webp",
    logo: "/images/icon-itad-trano.webp",
    tags: ["React Native", "Android"],
    category: "mobile",
    date: "2026-09-28",
    link: "https://play.google.com/store/apps/details?id=com.safidyrapex.itadtrano&hl=en",
    github: "",
    features: [
      "Recherche avancée avec filtres",
      "Alertes personnalisées et favoris",
      "Rendez-vous de visite en ligne",
      "Notifications en temps réel",
      "Messagerie et évaluations",
      "Géolocalisation et mode sombre",
    ],
  },
  {
    id: 2,
    slug: "itad-mg",
    title: "ITAD.mg — Plateforme immobilière",
    description:
      "Plateforme de petites annonces qui facilite la location et la vente de maisons, terrains et autres biens partout à Madagascar, avec une application mobile associée.",
    image: "/images/hero-itad.png",
    logo: "/images/logo-itad.png",
    tags: ["React", "Redux", "Vite"],
    category: "web",
    date: "2026-08-01",
    link: "https://groupe-itad.com/",
    github: "",
    features: [
      "Annonces immobilières et foncières",
      "Recherche multicritères",
      "Favoris et recherches sauvegardées",
      "Contact direct avec les propriétaires",
      "Interface responsive",
    ],
  },
  {
    id: 3,
    slug: "devflash",
    title: "DevFlash — Création de sites web",
    description:
      "Site vitrine présentant des services de création de sites web modernes, rapides et professionnels pour entreprises, indépendants et marques à Madagascar.",
    image: "/images/hero-devflash.png",
    logo: "/images/icon-devflash.png",
    tags: ["React", "Vite", "SEO"],
    category: "web",
    date: "2026-05-01",
    link: "https://devflash.site",
    github: "",
    features: [
      "Design moderne et responsive",
      "Optimisation SEO (données structurées)",
      "Google Consent Mode v2",
      "Performance et chargement optimisés",
    ],
  },
  // {
  //   id: 4,
  //   slug: "template-portfolio",
  //   title: "Template Portfolio",
  //   description:
  //     "Un template de portfolio moderne et responsive avec des animations fluides et un design épuré. Parfait pour présenter vos projets et compétences.",
  //   image: "/images/extrait-portfolio.webp",
  //       tags: ["HTML", "CSS", "JavaScript"],
  //   category: "web",
  //   date: "2024-12-15",
  //   link: "https://template-portfolio-dun.vercel.app/",
  //   github: "",
  //   features: [
  //     "Design responsive",
  //     "Animations CSS",
  //     "Formulaire de contact",
  //     "Optimisation SEO",
  //   ],
  // },
  // {
  //   id: 5,
  //   slug: "motorshop",
  //   title: "MotorShop",
  //   description:
  //     "Plateforme e-commerce dédiée à la vente de pièces automobiles avec système de recherche avancé et panier d'achat interactif.",
  //   image: "/images/extrait-motorshop.webp",
  //       tags: ["PHP", "MySQL", "JavaScript"],
  //   category: "web",
  //   date: "2024-11-20",
  //   link: "",
  //   github: "",
  //   features: [
  //     "Catalogue produits",
  //     "Panier d'achat",
  //     "Système de recherche",
  //     "Interface admin",
  //   ],
  // },
];

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  web: "Web Development",
  mobile: "Mobile",
  design: "Design",
};

export const CATEGORY_ORDER: ProjectCategory[] = ["web", "mobile", "design"];

export const TAG_STYLES: Record<string, string> = {
  HTML: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
  CSS: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
  JavaScript: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
  PHP: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
  MySQL: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  Figma: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  React: "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  TypeScript: "bg-blue-600/10 text-blue-300 border border-blue-600/20",
  "React Native": "bg-sky-500/10 text-sky-400 border border-sky-500/20",
  "Node.js": "bg-green-500/10 text-green-400 border border-green-500/20",
  MongoDB: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
  "Chart.js": "bg-rose-500/10 text-rose-400 border border-rose-500/20",
  Flutter: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
  Firebase: "bg-amber-500/10 text-amber-400 border border-amber-500/20",
  Dart: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  Vite: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
  Redux: "bg-purple-600/10 text-purple-300 border border-purple-600/20",
  "React Query": "bg-red-500/10 text-red-400 border border-red-500/20",
  Axios: "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
  Android: "bg-lime-500/10 text-lime-400 border border-lime-500/20",
  SEO: "bg-teal-500/10 text-teal-400 border border-teal-500/20",
  "Schema.org": "bg-teal-600/10 text-teal-300 border border-teal-600/20",
};

export const DEFAULT_TAG_STYLE =
  "bg-gray-700/60 text-gray-300 border border-gray-600/50";
