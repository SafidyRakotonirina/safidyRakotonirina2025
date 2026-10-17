import { ExternalLink } from "lucide-react";
import { PROJECTS } from "../../../data/projects";
import { ProjectCard } from "../../projects/ProjectCard";

interface ProjectsProps {
  onViewAll: () => void;
}

export function Projects({ onViewAll }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-3">
            Mes Projets
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto">
            Quelques réalisations qui illustrent mon parcours et mes
            compétences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <div className="text-center mt-10 sm:mt-14">
          <button
            onClick={onViewAll}
            className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-transform duration-200 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }}
          >
            <span>Voir tous les projets</span>
            <ExternalLink
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
