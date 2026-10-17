export interface Experience {
  company: string;
  role: string;
  description: string;
  date: string;
  color: string;
  border: string;
  dot: string;
}

export const EXPERIENCES: Experience[] = [
  {
    company: "GASY TECH",
    role: "Formation développement web",
    description:
      "HTML, CSS, JavaScript, PHP — bases solides du développement web.",
    date: "Déc 2024 - Mars 2025",
    color: "text-blue-400",
    border: "border-blue-400",
    dot: "bg-blue-400",
  },
  {
    company: "GRAFIKART",
    role: "Formation Design & JavaScript avancé",
    description: "Figma, approfondissement JavaScript et TypeScript.",
    date: "2025",
    color: "text-purple-400",
    border: "border-purple-400",
    dot: "bg-purple-400",
  },
  {
    company: "RAPEX GROUP",
    role: "Stagiaire → Développeur Fullstack",
    description:
      "Stage en développement web, puis retenu en poste fixe en tant que développeur Fullstack.",
    date: "Juin 2025 - Présent",
    color: "text-emerald-400",
    border: "border-emerald-400",
    dot: "bg-emerald-400",
  },
];
