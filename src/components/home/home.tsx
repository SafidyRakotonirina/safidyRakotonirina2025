import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Navbar } from "../layout/Navbar";
import { Footer } from "../layout/Footer";
import { ScrollToTopButton } from "../common/ScrollToTopButton";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { Projects } from "./sections/Projects";
import { Contact } from "./sections/Contact";
import { useRoleTyping } from "../../hooks/useRoleTyping";
import { useScrollSpy } from "../../hooks/useScrollSpy";

const SECTION_IDS = ["home", "about", "skills", "projects", "contact"];

export function Home() {
  const { heroDisplayed, aboutDisplayed, currentColor } = useRoleTyping();
  const activeSection = useScrollSpy(SECTION_IDS);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null;
    const target = state?.scrollTo;
    if (!target) return;

    const timeout = window.setTimeout(() => {
      document
        .getElementById(target)
        ?.scrollIntoView({ behavior: "smooth" });
    }, 50);

    navigate("/", { replace: true });
    return () => window.clearTimeout(timeout);
  }, [location.state, navigate]);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen w-full relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero
          heroDisplayed={heroDisplayed}
          currentColor={currentColor}
          onOpenCv={() => navigate("/cv")}
          onViewProjects={scrollToProjects}
        />
        <About aboutDisplayed={aboutDisplayed} currentColor={currentColor} />
        <Skills />
        <Projects onViewAll={() => navigate("/projets")} />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
