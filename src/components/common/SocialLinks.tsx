import { Github, Instagram, Linkedin, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SOCIALS } from "../../config";

const ICONS: Record<string, LucideIcon> = {
  linkedin: Linkedin,
  github: Github,
  instagram: Instagram,
  whatsapp: MessageCircle,
};

const COLORS: Record<string, string> = {
  linkedin: "bg-blue-600",
  github: "bg-gray-700",
  instagram: "bg-gradient-to-r from-pink-500 to-purple-600",
  whatsapp: "bg-green-500",
};

interface SocialLinksProps {
  size?: "sm" | "md";
  className?: string;
}

export function SocialLinks({ size = "md", className = "" }: SocialLinksProps) {
  const entries = Object.entries(SOCIALS).filter(
    ([, social]) => social.href.trim() !== "",
  );

  if (entries.length === 0) return null;

  const box =
    size === "md"
      ? "w-10 h-10 sm:w-12 sm:h-12"
      : "w-8 h-8 sm:w-10 sm:h-10";
  const iconSize = size === "md" ? 18 : 16;

  return (
    <div className={`flex gap-3 sm:gap-4 ${className}`}>
      {entries.map(([key, social]) => {
        const Icon = ICONS[key] ?? MessageCircle;
        return (
          <a
            key={key}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            className={`${box} ${
              COLORS[key] ?? "bg-gray-700"
            } rounded-full flex items-center justify-center hover:scale-110 transition-transform`}
          >
            <Icon size={iconSize} className="text-white" />
          </a>
        );
      })}
    </div>
  );
}
