export type ProjectCategory = "web" | "mobile" | "design";

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: ProjectCategory;
  date: string;
  link: string;
  github: string;
  features: string[];
}

// Pour ajouter un projet : copie un bloc et remplace les informations.
// Les projets sans image doivent pointer vers "/images/..." (voir dossier public/images).
export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Template Portfolio",
    description:
      "Un template de portfolio moderne et responsive avec des animations fluides et un design épuré. Parfait pour présenter vos projets et compétences.",
    image: "/images/extrait-portfolio.webp",
    tags: ["HTML", "CSS", "JavaScript", "PHP"],
    category: "web",
    date: "2024-12-15",
    link: "https://template-portfolio-dun.vercel.app/",
    github: "",
    features: [
      "Design responsive",
      "Animations CSS",
      "Formulaire de contact",
      "Optimisation SEO",
    ],
  },
  {
    id: 2,
    title: "MotorShop",
    description:
      "Plateforme e-commerce dédiée à la vente de pièces automobiles avec système de recherche avancé et panier d'achat interactif.",
    image: "/images/extrait-motorshop.webp",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    category: "web",
    date: "2024-11-20",
    link: "",
    github: "",
    features: [
      "Catalogue produits",
      "Panier d'achat",
      "Système de recherche",
      "Interface admin",
    ],
  },
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
};

export const DEFAULT_TAG_STYLE =
  "bg-gray-700/60 text-gray-300 border border-gray-600/50";
