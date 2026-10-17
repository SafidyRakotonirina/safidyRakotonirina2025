import {
  ArrowLeft,
  Download,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { CvDocument } from "./CvDocument";
import { SITE, SOCIALS } from "../../config";
import {
  CV_EDUCATION,
  CV_EXPERIENCES,
  CV_INTERESTS,
  CV_LANGUAGES,
  CV_PROFILE,
  CV_SKILLS,
  CV_TITLE,
} from "../../data/cv";

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 pb-1.5 border-b-2 border-blue-500/70">
      {children}
    </h2>
  );
}

function ContactLine({
  icon: Icon,
  children,
}: {
  icon: typeof Mail;
  children: ReactNode;
}) {
  return (
    <span className="flex items-center gap-2">
      <Icon size={14} className="text-blue-400 shrink-0" />
      {children}
    </span>
  );
}

export function CvPage() {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadPdf = async () => {
    try {
      setIsDownloading(true);
      const blob = await pdf(<CvDocument />).toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "CV-Safidy-Rakotonirina.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } finally {
      setIsDownloading(false);
    }
  };

  const socials = [
    { key: "github", href: SOCIALS.github.href, icon: Github, label: "GitHub" },
    {
      key: "linkedin",
      href: SOCIALS.linkedin.href,
      icon: Linkedin,
      label: "LinkedIn",
    },
  ].filter((social) => social.href.trim() !== "");

  return (
    <div className="cv-page min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="no-print">
        <Navbar activeSection="cv" />
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-24 pb-12">
        <div className="no-print flex flex-wrap justify-end gap-3 mb-4">
          <button
            onClick={handleDownloadPdf}
            disabled={isDownloading}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
          >
            <Download size={16} />
            {isDownloading ? "Génération…" : "Télécharger le PDF"}
          </button>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-5 py-2.5 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
          >
            <Printer size={16} />
            Imprimer
          </button>
        </div>

        <article className="cv-sheet bg-white text-slate-700 rounded-2xl shadow-2xl overflow-hidden">
          <header className="bg-slate-900 text-white px-8 sm:px-10 py-8">
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Safidy Ny Aina{" "}
              <span className="text-blue-400">Rakotonirina</span>
            </h1>
            <p className="text-blue-300 font-medium mt-1">{CV_TITLE}</p>

            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm text-slate-300">
              <ContactLine icon={Mail}>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </ContactLine>
              <ContactLine icon={Phone}>{SITE.phone}</ContactLine>
              <ContactLine icon={MapPin}>{SITE.location}</ContactLine>
              <ContactLine icon={Globe}>
                <a
                  href={SITE.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </ContactLine>
              {socials.map((social) => (
                <ContactLine key={social.key} icon={social.icon}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.label}
                  </a>
                </ContactLine>
              ))}
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 sm:px-10 py-8">
            <div className="md:col-span-2 space-y-8">
              <section>
                <SectionTitle>Profil</SectionTitle>
                <p className="text-sm leading-relaxed text-slate-600">
                  {CV_PROFILE}
                </p>
              </section>

              <section>
                <SectionTitle>Expérience professionnelle</SectionTitle>
                <div className="space-y-5">
                  {CV_EXPERIENCES.map((experience) => (
                    <div
                      key={`${experience.company}-${experience.period}`}
                      className="relative pl-5 border-l-2 border-slate-200"
                    >
                      <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-blue-500" />
                      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-3">
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {experience.title}{" "}
                          <span className="text-blue-600">
                            — {experience.company}
                          </span>
                        </h3>
                        <span className="text-xs text-slate-400 shrink-0">
                          {experience.period}
                        </span>
                      </div>
                      {experience.location && (
                        <p className="text-xs text-slate-400 mb-1">
                          {experience.location}
                        </p>
                      )}
                      <ul className="mt-1.5 space-y-1">
                        {experience.bullets.map((bullet, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-xs text-slate-600 leading-relaxed"
                          >
                            <span className="text-blue-500 shrink-0">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <SectionTitle>Formation</SectionTitle>
                <div className="space-y-3">
                  {CV_EDUCATION.map((education, index) => (
                    <div
                      key={index}
                      className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-3"
                    >
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {education.degree}
                        </h3>
                        {(education.school || education.location) && (
                          <p className="text-xs text-slate-500">
                            {[education.school, education.location]
                              .filter(Boolean)
                              .join(" — ")}
                          </p>
                        )}
                      </div>
                      <span className="text-xs text-slate-400 shrink-0">
                        {education.period}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="space-y-8">
              <section>
                <SectionTitle>Compétences</SectionTitle>
                <ul className="space-y-2.5">
                  {CV_SKILLS.map((skill) => (
                    <li key={skill.label}>
                      <p className="text-xs font-semibold text-slate-900">
                        {skill.label}
                      </p>
                      <p className="text-xs text-slate-600">{skill.items}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionTitle>Langues</SectionTitle>
                <ul className="flex flex-wrap gap-1.5">
                  {CV_LANGUAGES.map((language) => (
                    <li
                      key={language}
                      className="text-xs bg-blue-50 text-blue-700 border border-blue-100 rounded-full px-2.5 py-0.5"
                    >
                      {language}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <SectionTitle>Centres d'intérêt</SectionTitle>
                <ul className="space-y-1.5">
                  {CV_INTERESTS.map((interest) => (
                    <li
                      key={interest}
                      className="flex gap-2 text-xs text-slate-600"
                    >
                      <span className="text-blue-500 shrink-0">•</span>
                      {interest}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
          </div>
        </article>

        <div className="no-print mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
