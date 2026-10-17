import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  ExternalLink,
  Github,
  LayoutGrid,
  Settings,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../common/ScrollToTopButton";
import { Lightbox } from "../common/Lightbox";
import type { LightboxImage } from "../common/Lightbox";
import {
  CATEGORY_LABELS,
  DEFAULT_TAG_STYLE,
  PROJECTS,
  TAG_STYLES,
} from "../../data/projects";
import { PROJECT_DETAILS } from "../../data/projectDetails";

function MetaCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof User;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-4">
      <div className="flex items-center gap-2 text-gray-500 mb-1.5">
        <Icon size={14} />
        <span className="text-xs font-medium">{label}</span>
      </div>
      <p className="text-sm text-white font-medium leading-snug">{value}</p>
    </div>
  );
}

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const index = PROJECTS.findIndex((project) => project.slug === slug);
  const project = index >= 0 ? PROJECTS[index] : undefined;
  const detail = slug ? PROJECT_DETAILS[slug] : undefined;
  const gallery: LightboxImage[] = [
    ...(project
      ? [{ src: project.image, alt: `Aperçu du projet ${project.title}` }]
      : []),
    ...(detail?.sections
      .filter((section) => section.image)
      .map((section) => ({
        src: section.image as string,
        alt: `Capture : ${section.title}`,
      })) ?? []),
  ];
  const hasScreenshots =
    detail?.sections.some((section) => section.image) ?? false;

  if (!project) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        <Navbar activeSection="projects" />
        <main className="max-w-3xl mx-auto px-4 pt-32 pb-24 text-center">
          <h1 className="text-3xl font-bold mb-4">Projet introuvable</h1>
          <p className="text-gray-400 mb-8">
            Ce projet n'existe pas ou a été retiré.
          </p>
          <button
            onClick={() => navigate("/projets")}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-transform"
          >
            <ArrowLeft size={16} /> Retour aux projets
          </button>
        </main>
        <Footer />
      </div>
    );
  }

  const nextProject = PROJECTS[(index + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar activeSection="projects" />

      <main className="pt-16 pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-6">
            <button
              onClick={() => navigate("/projets")}
              className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
            >
              <ArrowLeft size={16} />
              <span className="text-sm text-gray-300">Tous les projets</span>
            </button>
          </div>

          <section className="mt-6">
            <div
              className="relative rounded-3xl overflow-hidden border border-gray-800 cursor-zoom-in"
              onClick={() => setLightboxIndex(0)}
            >
              <img
                src={project.image}
                alt={`Aperçu du projet ${project.title}`}
                className="w-full h-56 sm:h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 flex items-center gap-4">
                {project.logo && (
                  <img
                    src={project.logo}
                    alt={`Logo ${project.title}`}
                    className="h-12 w-12 sm:h-14 sm:w-14 rounded-xl bg-white/10 backdrop-blur border border-white/20 p-1 object-contain shrink-0"
                  />
                )}
                <div className="min-w-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {project.title}
                  </h1>
                  {detail && (
                    <p className="text-blue-300 text-sm sm:text-base mt-1">
                      {detail.tagline}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>

          <section className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-6">
            <MetaCard
              icon={LayoutGrid}
              label="Catégorie"
              value={CATEGORY_LABELS[project.category]}
            />
            {detail && (
              <MetaCard icon={Calendar} label="Année" value={detail.year} />
            )}
            <MetaCard
              icon={Settings}
              label="Stack"
              value={project.tags.join(" · ")}
            />
          </section>

          <section className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="md:col-span-2">
              <h2 className="text-xl sm:text-2xl font-bold mb-4">Présentation</h2>
              <p className="text-gray-300 leading-relaxed">
                {detail?.overview ?? project.description}
              </p>

              {detail && detail.highlights.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mt-8 mb-3">Points clés</h3>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {detail.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <aside className="md:col-span-1">
              <div className="rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-5">
                <p className="text-xs font-medium text-gray-500 mb-3">
                  Technologies
                </p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                        TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2.5 rounded-full font-semibold text-sm hover:scale-[1.02] transition-transform"
                  >
                    <ExternalLink size={15} /> Voir le projet
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full mt-2 border border-gray-600 px-4 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-800 transition-colors"
                  >
                    <Github size={15} /> Code source
                  </a>
                )}
              </div>
            </aside>
          </section>

          {detail && detail.sections.length > 0 && (
            <section className="mt-16">
              <h2 className="text-xl sm:text-2xl font-bold mb-8">
                {detail.sectionsTitle ?? "Pages et fonctionnalités"}
              </h2>
              {hasScreenshots ? (
                <div className="space-y-12">
                  {detail.sections.map((section, i) => (
                    <article
                      key={section.title}
                      className="grid md:grid-cols-2 gap-6 md:gap-8 items-center"
                    >
                      <div className={i % 2 === 1 ? "md:order-2" : ""}>
                        <h3 className="text-lg sm:text-xl font-semibold mt-1 mb-2">
                          {section.title}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                          {section.description}
                        </p>
                      </div>
                      <div className={i % 2 === 1 ? "md:order-1" : ""}>
                        {section.image ? (
                          <img
                            src={section.image}
                            alt={`Capture : ${section.title}`}
                            loading="lazy"
                            decoding="async"
                            onClick={() =>
                              setLightboxIndex(
                                gallery.findIndex(
                                  (item) =>
                                    item.src === section.image &&
                                    item.alt === `Capture : ${section.title}`,
                                ),
                              )
                            }
                            className="w-full max-h-[420px] object-contain rounded-2xl border border-gray-800 shadow-xl bg-gray-900/60 cursor-zoom-in transition-opacity hover:opacity-80"
                          />
                        ) : (
                          <div className="aspect-video w-full rounded-2xl border border-dashed border-gray-700 bg-gray-900/40 flex items-center justify-center text-sm text-gray-500">
                            Capture à venir
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
                  {detail.sections.map((section) => (
                    <article
                      key={section.title}
                      className="rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-5 hover:border-gray-700 transition-colors"
                    >
                      <h3 className="text-base sm:text-lg font-semibold mb-2">
                        {section.title}
                      </h3>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {section.description}
                      </p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          )}

          {nextProject && nextProject.slug !== project.slug && (
            <section className="mt-16">
              <Link
                to={`/projets/${nextProject.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-600 transition-colors p-5"
              >
                <div>
                  <p className="text-xs text-gray-500 mb-1">Projet suivant</p>
                  <p className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <ArrowRight
                  size={20}
                  className="text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                />
              </Link>
            </section>
          )}
        </div>
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          images={gallery}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
