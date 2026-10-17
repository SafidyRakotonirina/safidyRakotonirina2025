import { useState } from "react";
import {
  CATEGORY_STYLES,
  levelLabel,
  SKILL_FILTERS,
  SKILLS,
} from "../../../data/skills";
import type { SkillFilter } from "../../../data/skills";

export function Skills() {
  const [activeFilter, setActiveFilter] = useState<SkillFilter>("Tous");

  const filteredSkills =
    activeFilter === "Tous"
      ? SKILLS
      : SKILLS.filter((skill) => skill.cat === activeFilter);

  return (
    <section
      id="skills"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
          Compétences
        </h2>

        <div className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-10">
          {SKILL_FILTERS.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`group relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden ${
                activeFilter === cat
                  ? "text-white shadow-lg scale-105"
                  : "text-gray-400 border border-gray-700 hover:text-white hover:border-gray-500 hover:scale-105"
              }`}
              style={
                activeFilter === cat
                  ? {
                      background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
                      border: "none",
                    }
                  : {}
              }
            >
              <span
                className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  activeFilter !== cat ? "bg-white" : ""
                }`}
              />
              <span>{cat}</span>
              {activeFilter === cat && (
                <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-900/60 backdrop-blur-md p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 flex flex-col gap-3"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-400">
                  {skill.level}%
                </span>
              </div>

              <div className="w-full bg-gray-700/60 rounded-full h-1.5 overflow-hidden">
                <div
                  className="h-1.5 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%`, background: skill.color }}
                />
              </div>

              <div className="flex items-center justify-between">
                <span
                  className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                  style={{
                    background: CATEGORY_STYLES[skill.cat].bg,
                    color: CATEGORY_STYLES[skill.cat].text,
                  }}
                >
                  {skill.cat}
                </span>
                <span className="text-xs text-gray-500">
                  {levelLabel(skill.level)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
