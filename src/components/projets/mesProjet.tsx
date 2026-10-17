import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  Code,
  Tag,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../common/ScrollToTopButton";
import { ContactForm } from "../common/ContactForm";
import { ProjectCard } from "../projects/ProjectCard";
import { SITE } from "../../config";
import { downloadCv } from "../../lib/portfolio";
import {
  CATEGORY_LABELS,
  CATEGORY_ORDER,
  PROJECTS,
} from "../../data/projects";
import { SKILLS } from "../../data/skills";
import { EXPERIENCES } from "../../data/experiences";

const yearsOfExperience = Math.max(
  1,
  new Date().getFullYear() - SITE.careerStartYear,
);

export function ProjetPage() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isDiscussion, setIsDiscussion] = useState(false);

  const categories = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const project of PROJECTS) {
      counts[project.category] = (counts[project.category] ?? 0) + 1;
    }
    return [
      { id: "all", name: "Tous", count: PROJECTS.length },
      ...CATEGORY_ORDER.filter((category) => counts[category]).map(
        (category) => ({
          id: category,
          name: CATEGORY_LABELS[category],
          count: counts[category],
        }),
      ),
    ];
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  const stats = [
    {
      icon: Code,
      gradient: "from-blue-500 to-purple-600",
      value: `${PROJECTS.length}`,
      label: "Projets réalisés",
    },
    {
      icon: User,
      gradient: "from-green-500 to-blue-500",
      value: `${EXPERIENCES.length}`,
      label: "Expériences",
    },
    {
      icon: Calendar,
      gradient: "from-purple-500 to-pink-500",
      value: `${yearsOfExperience}+`,
      label: "Années d'expérience",
    },
    {
      icon: Tag,
      gradient: "from-yellow-500 to-orange-500",
      value: `${SKILLS.length}`,
      label: "Technologies maîtrisées",
    },
  ];

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Navbar activeSection="projects" />

      <main>
        <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-6">
              <button
                onClick={() => navigate("/")}
                className="inline-flex items-center gap-2 bg-gray-800/50 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700 hover:border-gray-500 transition-colors"
              >
                <ArrowLeft size={16} />
                <span className="text-sm text-gray-300">
                  Retour à l'accueil
                </span>
              </button>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Mes Projets
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
                Découvrez mes créations et réalisations en développement web,
                mobile et design. Chaque projet reflète ma passion pour
                l'innovation et la qualité.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`group relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                    selectedCategory === category.id
                      ? "text-white shadow-lg scale-105"
                      : "text-gray-400 border border-gray-700 hover:text-white hover:border-gray-500 hover:scale-105"
                  }`}
                  style={
                    selectedCategory === category.id
                      ? {
                          background:
                            "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                          border: "none",
                        }
                      : {}
                  }
                >
                  <span>{category.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.5 rounded-full font-medium ${
                      selectedCategory === category.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-700 text-gray-400"
                    }`}
                  >
                    {category.count}
                  </span>
                  {selectedCategory === category.id && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    detailed
                  />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-400 py-12">
                Aucun projet dans cette catégorie pour le moment.
              </p>
            )}
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                  >
                    <stat.icon size={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1 sm:mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-600/10 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border border-gray-700">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Vous avez un projet en tête ?
              </h2>
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
                Discutons de vos idées et créons ensemble quelque chose
                d'exceptionnel. Je suis toujours ouvert aux nouveaux défis et
                collaborations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform text-sm sm:text-base"
                  onClick={() => setIsDiscussion(true)}
                >
                  Discuter de mon projet
                </button>
                <button
                  className="border border-gray-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
                  onClick={downloadCv}
                >
                  Voir mon CV
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {isDiscussion && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Formulaire de contact"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsDiscussion(false)}
        >
          <div
            className="w-full max-w-2xl bg-gray-900 border border-gray-700 p-6 sm:p-10 rounded-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-bold">
                Parlons de votre projet
              </h3>
              <button
                onClick={() => setIsDiscussion(false)}
                aria-label="Fermer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
            <ContactForm />
          </div>
        </div>
      )}

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
