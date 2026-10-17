import { Calendar, ExternalLink, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { DEFAULT_TAG_STYLE, TAG_STYLES } from "../../data/projects";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  detailed?: boolean;
  index?: number;
}

export function ProjectCard({
  project,
  detailed = false,
  index = 0,
}: ProjectCardProps) {
  return (
    <div
      className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{ animationDelay: `${index * 70}ms` }}
    >
      {project.slug && (
        <Link
          to={`/projets/${project.slug}`}
          className="absolute inset-0 z-10 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          aria-label={`Voir le détail du projet ${project.title}`}
        />
      )}
      <div
        className={`relative overflow-hidden bg-gray-800 ${
          detailed ? "h-48 sm:h-52" : "h-44 sm:h-48"
        }`}
      >
        <img
          src={project.image}
          alt={`Aperçu du projet ${project.title}`}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {detailed && (
          <span className="absolute top-3 right-3 bg-black/55 backdrop-blur-sm text-gray-300 text-xs px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
            <Calendar size={11} />
            {new Date(project.date).toLocaleDateString("fr-FR", {
              month: "short",
              year: "numeric",
            })}
          </span>
        )}

        {project.link && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-20 w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors"
              title="Voir le projet en ligne"
              aria-label={`Voir le projet ${project.title} en ligne`}
            >
              <ExternalLink size={15} className="text-white" />
            </a>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-5 flex flex-col gap-3 flex-1">
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-1">
            {project.logo && (
              <img
                src={project.logo}
                alt={`Logo ${project.title}`}
                loading="lazy"
                decoding="async"
                className="h-7 w-7 rounded-md bg-gray-800/70 border border-gray-700 p-0.5 object-contain shrink-0"
              />
            )}
            <h3
              className={`text-base sm:text-lg font-semibold text-white ${
                detailed ? "group-hover:text-blue-400 transition-colors" : ""
              }`}
            >
              {project.title}
            </h3>
          </div>
          <p
            className={`text-xs sm:text-sm text-gray-400 leading-relaxed ${
              detailed ? "line-clamp-2" : ""
            }`}
          >
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
                TAG_STYLES[tag] ?? DEFAULT_TAG_STYLE
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {detailed && (
          <div className="mt-auto pt-3 border-t border-gray-800">
            <p className="text-xs font-medium text-gray-500 mb-2 flex items-center gap-1">
              <Tag size={11} /> Fonctionnalités
            </p>
            <ul className="space-y-1">
              {project.features.slice(0, 3).map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-xs text-gray-400"
                >
                  <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
