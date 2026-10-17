export interface Role {
  hero: string;
  about: string;
  color: string;
}

export const ROLES: Role[] = [
  { hero: "FRONT-END", about: "développeur web front-end", color: "#818cf8" },
  { hero: "BACK-END", about: "développeur web back-end", color: "#a78bfa" },
  { hero: "DEV MOBILE", about: "développeur mobile", color: "#f59e0b" },
];
