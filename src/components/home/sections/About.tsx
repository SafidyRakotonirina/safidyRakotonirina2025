import { EXPERIENCES } from "../../../data/experiences";
import { TypingCursor } from "../../common/TypingCursor";

interface AboutProps {
  aboutDisplayed: string;
  currentColor: string;
}

export function About({ aboutDisplayed, currentColor }: AboutProps) {
  return (
    <section
      id="about"
      className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center lg:text-left">
              À PROPOS DE MOI
            </h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-300 text-center lg:text-left">
  <p>
    Développeur{" "}
    <span style={{ color: currentColor }} className="font-semibold">
      {aboutDisplayed}
      <TypingCursor color={currentColor} />
    </span>{" "}
    passionné, je conçois et je maintiens des applications web modernes,
    rapides et responsives. Le développement web et la programmation sont
    pour moi une véritable passion.
  </p>
  <p>
    Aujourd'hui, je souhaite mettre mes compétences en{" "}
    <span className="text-blue-400">React</span>,{" "}
    <span className="text-blue-300">TypeScript</span>,{" "}
    <span className="text-green-400">Node.js</span>,{" "}
    <span className="text-red-400">NestJS</span> et{" "}
    <span className="text-purple-400">PHP</span> au service des
    entreprises, en apportant à la fois ma rigueur et ma créativité
    technique.
  </p>
</div>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">
              EXPÉRIENCES
            </h3>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />

              <div className="space-y-6">
                {EXPERIENCES.map((experience, index) => (
                  <div key={index} className="relative flex gap-6 pl-12">
                    <div
                      className={`absolute left-0 top-1 w-8 h-8 rounded-full ${experience.dot} bg-opacity-20 border-2 ${experience.border} flex items-center justify-center`}
                    >
                      <div
                        className={`w-2.5 h-2.5 rounded-full ${experience.dot}`}
                      />
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-700 w-full hover:border-gray-500 transition-colors duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                        <h4
                          className={`text-base sm:text-lg font-semibold ${experience.color}`}
                        >
                          {experience.company}
                        </h4>
                        <span className="text-xs text-gray-500 shrink-0">
                          {experience.date}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-white mb-1">
                        {experience.role}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400">
                        {experience.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
