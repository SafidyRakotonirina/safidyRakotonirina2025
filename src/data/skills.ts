export type SkillCategory = "Frontend" | "Backend" | "Design" | "Outils";

export interface Skill {
  name: string;
  level: number;
  cat: SkillCategory;
  color: string;
}

export const SKILLS: Skill[] = [
  { name: "HTML", level: 90, cat: "Frontend", color: "#e2623a" },
  { name: "CSS", level: 85, cat: "Frontend", color: "#2965f1" },
  { name: "JavaScript", level: 88, cat: "Frontend", color: "#c9a800" },
  { name: "React / TS", level: 75, cat: "Frontend", color: "#0ea5e9" },
  { name: "PHP", level: 70, cat: "Backend", color: "#7c3aed" },
  { name: "NestJS", level: 70, cat: "Backend", color: "#e0234e" },
  { name: "Figma", level: 78, cat: "Design", color: "#a259ff" },
  { name: "VS Code", level: 95, cat: "Outils", color: "#007acc" },
];

export const SKILL_FILTERS = [
  "Tous",
  "Frontend",
  "Backend",
  "Design",
  "Outils",
] as const;

export type SkillFilter = (typeof SKILL_FILTERS)[number];

export const CATEGORY_STYLES: Record<SkillCategory, { bg: string; text: string }> = {
  Frontend: { bg: "rgba(59,130,246,0.15)", text: "#60a5fa" },
  Backend: { bg: "rgba(124,58,237,0.15)", text: "#a78bfa" },
  Design: { bg: "rgba(162,89,255,0.15)", text: "#c084fc" },
  Outils: { bg: "rgba(16,185,129,0.15)", text: "#34d399" },
};

export const levelLabel = (level: number): string => {
  if (level >= 90) return "Expert";
  if (level >= 80) return "Avancé";
  if (level >= 70) return "Intermédiaire";
  return "Débutant";
};
