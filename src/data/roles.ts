export interface Role {
  hero: string;
  about: string;
  color: string;
}

export const ROLES: Role[] = [
  { hero: "FRONTEND", about: "web frontend", color: "#818cf8" },
  { hero: "BACKEND", about: "web backend", color: "#a78bfa" },
  { hero: "DEV MOBILE", about: "mobile", color: "#f59e0b" },
];
