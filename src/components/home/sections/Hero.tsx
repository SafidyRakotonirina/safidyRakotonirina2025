import { Code, Download } from "lucide-react";
import { SocialLinks } from "../../common/SocialLinks";
import { TypingCursor } from "../../common/TypingCursor";

interface HeroProps {
  heroDisplayed: string;
  currentColor: string;
  onOpenCv: () => void;
  onViewProjects: () => void;
}

export function Hero({
  heroDisplayed,
  currentColor,
  onOpenCv,
  onViewProjects,
}: HeroProps) {
  return (
    <section
      id="home"
      className="pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight">
                Bonjour, je suis
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                Safidy <span className="text-gray-400">Rakotonirina</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                Je suis un développeur web{" "}
                <span style={{ color: currentColor }} className="font-semibold">
                  {heroDisplayed}
                  <TypingCursor color={currentColor} />
                </span>{" "}
                passionné par la création de sites modernes, performants et
                dynamiques.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={onOpenCv}
                className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 justify-center text-sm sm:text-base"
              >
                <Download size={18} />
                Télécharger CV
              </button>
              <button
                onClick={onViewProjects}
                className="border border-gray-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
              >
                Regarder mes projets
              </button>
            </div>

            <div className="flex justify-center lg:justify-start">
              <SocialLinks />
            </div>
          </div>

          <div className="flex justify-center mt-8 lg:mt-0">
            <div className="relative">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src="/images/pdp.webp"
                    alt="Portrait de Safidy Rakotonirina"
                    width={320}
                    height={320}
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                <Code size={24} className="sm:w-8 sm:h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
