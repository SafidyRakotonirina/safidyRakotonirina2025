export interface CvExperience {
  title: string;
  company: string;
  location?: string;
  period: string;
  bullets: string[];
}

export interface CvEducation {
  degree: string;
  school?: string;
  location?: string;
  period: string;
}

export const CV_TITLE = "Développeur Web Full Stack";

export const CV_PROFILE =
  "Développeur web passionné, organisé et rigoureux, spécialisé dans la conception et le développement d'applications web modernes. Expérience en frontend et backend, avec une forte capacité d'adaptation, de résolution de problèmes et de travail en équipe. Capable de gérer plusieurs projets simultanément tout en garantissant performance, qualité et précision.";

export const CV_SKILLS: { label: string; items: string }[] = [
  { label: "Développement web", items: "HTML, CSS, JavaScript, PHP" },
  { label: "Frontend", items: "React.js, TypeScript, Tailwind CSS" },
  { label: "Backend", items: "Node.js, NestJS, API REST" },
  { label: "Bases de données", items: "MySQL, PostgreSQL, MongoDB" },
  { label: "Outils", items: "Git, GitHub, VS Code, Postman" },
];

export const CV_EXPERIENCES: CvExperience[] = [
  {
    title: "Développeur Web & Applications",
    company: "Rapex Group",
    location: "Antananarivo",
    period: "Oct. 2025 – Aujourd'hui",
    bullets: [
      "Développement et maintenance d'applications web modernes",
      "Conception d'interfaces responsives et optimisées",
      "Intégration et gestion d'API REST sécurisées",
      "Optimisation des performances et correction des anomalies",
      "Gestion des bases de données et des fonctionnalités dynamiques",
      "Déploiement, maintenance et suivi des plateformes web",
      "Collaboration avec les équipes techniques pour l'amélioration continue des solutions",
    ],
  },
  {
    title: "Stagiaire Développeur Web",
    company: "Rapex Group",
    location: "Antananarivo",
    period: "Juin – Sept. 2025",
    bullets: [
      "Développement et maintenance de plateformes web",
      "Conception d'interfaces responsives et modernes",
      "Optimisation des performances et correction des bugs",
    ],
  },
  {
    title: "Responsable back-office",
    company: "INFOSCRIB",
    location: "Antananarivo",
    period: "2016", // À VÉRIFIER
    bullets: [
      "Traitement des incidents et reprise en main des dossiers complexes",
      "Mise à jour et analyse des indicateurs d'activité, reporting à la direction",
      "Coordination avec les équipes internes pour la résolution rapide des problèmes",
    ],
  },
];

export const CV_EDUCATION: CvEducation[] = [
  {
    degree: "Formation Développement Web",
    school: "GASY TECH",
    location: "Antananarivo",
    period: "Déc. 2024 – Mars 2025",
  },
  {
    degree: "Formation Design & JavaScript avancé",
    school: "GRAFIKART",
    period: "2025",
  },
  {
    degree: "DTS en Droit (BACC + 2)",
    school: "ESTIIM'",
    location: "Antananarivo",
    period: "2021 – 2022", // À VÉRIFIER
  },
  {
    degree: "Baccalauréat Malagasy",
    location: "Antananarivo",
    period: "2017 – 2019", // À VÉRIFIER
  },
];

export const CV_LANGUAGES = ["Français", "Anglais", "Malgache"];

export const CV_INTERESTS = [
  "Voyages (Nosy Be, Tuléar, Antsirabe, Fianarantsoa)",
  "Jeux vidéo",
  "Basket-ball",
  "Musique",
  "Lecture",
  "Photographie",
];
