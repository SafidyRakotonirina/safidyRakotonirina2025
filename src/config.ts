// ============================================================
// CONFIGURATION DU PORTFOLIO
// ============================================================

export interface SocialLink {
  label: string;
  href: string;
}

export const SITE = {
  name: "Safidy Rakotonirina",
  initials: "SR",
  title: "Safidy Rakotonirina | Développeur Web Fullstack",
  description:
    "Portfolio de Safidy Rakotonirina, développeur web fullstack (front-end, back-end et mobile). Découvre mes projets, compétences et comment me contacter.",
  url: "https://safidy-rakotonirina.vercel.app",
  email: "safidyrktnr@gmail.com",
  phone: "+261 34 22 661 49",
  location: "Antananarivo, Madagascar",
  careerStartYear: 2024,
  cvUrl: "/cv-Rakotonirina SAFIDY Ny Aina.pdf",
} as const;

export const SOCIALS: Record<string, SocialLink> = {
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/safidy-ny-aina-110295255/" }, 
  github: { label: "GitHub", href: "https://github.com/SafidyRakotonirina" }, 
  instagram: { label: "Instagram", href: "https://www.instagram.com/safidy_rktnr/" }, 
  whatsapp: { label: "WhatsApp", href: "https://wa.me/261342266149" }, 
};
