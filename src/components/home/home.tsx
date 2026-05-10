import {
  ArrowUp,
  Code,
  Download,
  ExternalLink,
  Github,
  Instagram,
  Linkedin,
  MessageCircle,
  Send,
  Menu,
  X,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Home: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const roles = [
    { hero: "FRONT-END", about: "développeur web front-end", color: "#818cf8" },
    { hero: "BACK-END", about: "développeur web back-end", color: "#a78bfa" },
    { hero: "DEV MOBILE", about: "développeur mobile", color: "#f59e0b" },
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const [heroDisplayed, setHeroDisplayed] = useState("");
  const [aboutDisplayed, setAboutDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const heroFull = role.hero;
    const aboutFull = role.about;
    const speed = isDeleting
      ? 55 + Math.random() * 20
      : 95 + Math.random() * 40;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (
          heroDisplayed.length < heroFull.length ||
          aboutDisplayed.length < aboutFull.length
        ) {
          // Les deux textes avancent en parallèle mais à leur propre rythme
          if (heroDisplayed.length < heroFull.length) {
            setHeroDisplayed(heroFull.slice(0, heroDisplayed.length + 1));
          }
          if (aboutDisplayed.length < aboutFull.length) {
            setAboutDisplayed(aboutFull.slice(0, aboutDisplayed.length + 1));
          }
        } else {
          // Les deux sont complets → pause puis effacement
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (heroDisplayed.length > 0 || aboutDisplayed.length > 0) {
          if (heroDisplayed.length > 0) {
            setHeroDisplayed(heroFull.slice(0, heroDisplayed.length - 1));
          }
          if (aboutDisplayed.length > 0) {
            setAboutDisplayed(aboutFull.slice(0, aboutDisplayed.length - 1));
          }
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [heroDisplayed, aboutDisplayed, isDeleting, currentRole]);

  const currentColor = roles[currentRole].color;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      company: "GASY TECH",
      role: "Formation développement web",
      description:
        "HTML, CSS, JavaScript, PHP — bases solides du développement web.",
      date: "Déc 2024 - Mars 2025",
      color: "text-blue-400",
      border: "border-blue-400",
      dot: "bg-blue-400",
    },
    {
      company: "GRAFIKART",
      role: "Formation Design & JavaScript avancé",
      description: "Figma, approfondissement JavaScript et TypeScript.",
      date: "2025",
      color: "text-purple-400",
      border: "border-purple-400",
      dot: "bg-purple-400",
    },
    {
      company: "RAPEX GROUP",
      role: "Stagiaire → Développeur Fullstack",
      description:
        "Stage en développement web, puis retenu en poste fixe en tant que développeur Fullstack.",
      date: "Juin 2025 - Présent",
      color: "text-emerald-400",
      border: "border-emerald-400",
      dot: "bg-emerald-400",
    },
  ];

  const skills = [
    { name: "HTML", level: 90, cat: "Frontend", color: "#e2623a" },
    { name: "CSS", level: 85, cat: "Frontend", color: "#2965f1" },
    { name: "JavaScript", level: 88, cat: "Frontend", color: "#c9a800" },
    { name: "React / TS", level: 75, cat: "Frontend", color: "#0ea5e9" },
    { name: "PHP", level: 70, cat: "Backend", color: "#7c3aed" },
    { name: "NestJS", level: 70, cat: "Backend", color: "#e0234e" },
    { name: "Figma", level: 78, cat: "Design", color: "#a259ff" },
    { name: "VS Code", level: 95, cat: "Outils", color: "#007acc" },
  ];

  const categories = ["Tous", "Frontend", "Backend", "Design", "Outils"];
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filteredSkills =
    activeFilter === "Tous"
      ? skills
      : skills.filter((s) => s.cat === activeFilter);

  const levelLabel = (l: number) => {
    if (l >= 90) return "Expert";
    if (l >= 80) return "Avancé";
    if (l >= 70) return "Intermédiaire";
    return "Débutant";
  };

  const catStyle: Record<string, { bg: string; text: string }> = {
    Frontend: { bg: "rgba(59,130,246,0.15)", text: "#60a5fa" },
    Backend: { bg: "rgba(124,58,237,0.15)", text: "#a78bfa" },
    Design: { bg: "rgba(162,89,255,0.15)", text: "#c084fc" },
    Outils: { bg: "rgba(16,185,129,0.15)", text: "#34d399" },
  };

  const projects = [
    {
      title: "Template Portfolio",
      description: "Site vitrine personnel avec design moderne",
      image: "/images/extrait portfolio.png",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      link: "https://template-portfolio-dun.vercel.app/",
      github: "#",
    },
    {
      title: "MotorShop",
      description: "Boutique en ligne pour pièces moto",
      image: "/images/extrait.PNG",
      tags: ["Figma", "HTML", "CSS", "JavaScript", "PHP"],
      link: "#",
      github: "#",
    },
    {
      title: "Titre projet",
      description: "Description du projet à compléter",
      image: "/api/placeholder/400/300",
      tags: ["Figma", "JavaScript", "PHP"],
      link: "#",
      github: "#",
    },
  ];

  const tagStyle: Record<string, string> = {
    HTML: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    CSS: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    JavaScript: "bg-yellow-500/10 text-yellow-400 border border-yellow-500/20",
    PHP: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
    Figma: "bg-pink-500/10 text-pink-400 border border-pink-500/20",
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-Rakotonirina SAFIDY Ny Aina.pdf";
    link.download = "cv-Rakotonirina SAFIDY Ny Aina.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFormSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message envoyé avec succès!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-screen xl:px-25 relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
                SR
              </div>
              <span className="text-lg sm:text-xl font-bold">
                Safidy Rakotonirina
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 lg:space-x-8">
              <button
                onClick={() => {
                  setActiveSection("home");
                  navigate("/");
                }}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === "home" ? "text-blue-400" : ""}`}
              >
                Accueil
              </button>
              <button
                onClick={() => {
                  setActiveSection("projet");
                  navigate("/Projet");
                }}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === "projects" ? "text-blue-400" : ""}`}
              >
                Projets
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${activeSection === "contact" ? "text-blue-400" : ""}`}
              >
                Contact
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="text-white hover:text-blue-400 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {
                  setActiveSection("home");
                  closeMobileMenu();
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === "home" ? "text-blue-400" : ""}`}
              >
                Accueil
              </button>
              <button
                onClick={() => {
                  setActiveSection("projet");
                  navigate("/Projet");
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === "projects" ? "text-blue-400" : ""}`}
              >
                Projets
              </button>
              <button
                onClick={() => {
                  setActiveSection("contact");
                  closeMobileMenu();
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${activeSection === "contact" ? "text-blue-400" : ""}`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8">
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
                  <span
                    style={{ color: currentColor }}
                    className="font-semibold"
                  >
                    {heroDisplayed}
                    <span
                      style={{
                        display: "inline-block",
                        width: "3px",
                        height: "1em",
                        background: currentColor,
                        marginLeft: "3px",
                        verticalAlign: "-2px",
                        borderRadius: "2px",
                        animation: "blink 0.75s step-end infinite",
                      }}
                    />
                  </span>{" "}
                  passionné par la création de sites modernes, performants et
                  dynamiques.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 justify-center text-sm sm:text-base"
                  onClick={handleDownload}
                >
                  <Download size={18} />
                  Télécharger CV
                </button>
                <button
                  onClick={() => setActiveSection("projects")}
                  className="border border-gray-600 px-6 sm:px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors text-sm sm:text-base"
                >
                  Regarder mes projets
                </button>
              </div>

              <div className="flex gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform "
                >
                  <MessageCircle
                    size={18}
                    className="sm:w-6 sm:h-6 text-white"
                  />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Send size={18} className="sm:w-6 sm:h-6 text-white " />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                >
                  <Linkedin size={18} className="sm:w-6 sm:h-6 text-white" />
                </a>
              </div>
            </div>

            <div className="flex justify-center mt-8 lg:mt-0">
              <div className="relative">
                <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-gray-200 rounded-full overflow-hidden">
                    <img
                      src="/images/pdp.png"
                      alt="Safidy Rakotonirina"
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

      {/* About Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent text-center lg:text-left">
                À PROPOS DE MOI
              </h2>
              <div className="space-y-4 sm:space-y-6 text-sm sm:text-base lg:text-lg text-gray-300 text-center lg:text-left">
                <p>
                  Bonjour, je m'appelle Safidy et je suis un{" "}
                  <span
                    style={{ color: currentColor }}
                    className="font-semibold"
                  >
                    {aboutDisplayed}
                    <span
                      style={{
                        display: "inline-block",
                        width: "3px",
                        height: "1em",
                        background: currentColor,
                        marginLeft: "3px",
                        verticalAlign: "-2px",
                        borderRadius: "2px",
                        animation: "blink 0.75s step-end infinite",
                      }}
                    />
                  </span>{" "}
                  passionné. Je maîtrise plusieurs langages de programmation,
                  dont <span className="text-yellow-400">HTML</span>,{" "}
                  <span className="text-blue-400">CSS</span>,{" "}
                  <span className="text-yellow-300">JavaScript</span> et{" "}
                  <span className="text-purple-400">PHP</span>.
                </p>
                <p>
                  Toujours curieux et motivé, j'aime découvrir de nouvelles
                  technologies et m'investir pleinement dans le plaisir
                  d'apprendre et de les maîtriser.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-8 text-center">
                EXPÉRIENCES
              </h3>

              <div className="relative">
                {/* Ligne verticale */}
                <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-700" />

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative flex gap-6 pl-12">
                      {/* Dot */}
                      <div
                        className={`absolute left-0 top-1 w-8 h-8 rounded-full ${exp.dot} bg-opacity-20 border-2 ${exp.border} flex items-center justify-center`}
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full ${exp.dot}`}
                        />
                      </div>

                      {/* Contenu */}
                      <div className="bg-gray-800/50 backdrop-blur-sm p-4 sm:p-5 rounded-2xl border border-gray-700 w-full hover:border-gray-500 transition-colors duration-300">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                          <h4
                            className={`text-base sm:text-lg font-semibold ${exp.color}`}
                          >
                            {exp.company}
                          </h4>
                          <span className="text-xs text-gray-500 shrink-0">
                            {exp.date}
                          </span>
                        </div>
                        <p className="text-sm font-medium text-white mb-1">
                          {exp.role}
                        </p>
                        <p className="text-xs sm:text-sm text-gray-400">
                          {exp.description}
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

      {/* Skills Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Skills
          </h2>

          {/* Filtres */}
          <div className="flex flex-wrap gap-2 justify-center mb-8 sm:mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`group relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden
      ${
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
                {/* Glow effect au hover quand inactif */}
                <span
                  className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${activeFilter !== cat ? "bg-white" : ""}`}
                />
                <span>{cat}</span>

                {/* Dot animé si actif */}
                {activeFilter === cat && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-pulse" />
                )}
              </button>
            ))}
          </div>

          {/* Grille */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gray-900/60 backdrop-blur-md p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-all duration-300 flex flex-col gap-3"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Nom + % */}
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-white">
                    {skill.name}
                  </span>
                  <span className="text-sm font-medium text-gray-400">
                    {skill.level}%
                  </span>
                </div>

                {/* Barre */}
                <div className="w-full bg-gray-700/60 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-1.5 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${skill.level}%`,
                      background: skill.color,
                    }}
                  />
                </div>

                {/* Badge + niveau */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                    style={{
                      background: catStyle[skill.cat].bg,
                      color: catStyle[skill.cat].text,
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

      {/* Projects Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
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
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 70}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44 sm:h-48 bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Overlay avec boutons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-3 gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors"
                      title="Voir le projet"
                    >
                      <ExternalLink size={15} className="text-white" />
                    </a>
                    {/* <a
                      href={project.github}
                      target="_blank"
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/25 transition-colors"
                      title="Code source"
                    >
                      <Github size={15} className="text-white" />
                    </a> */}
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-4 sm:p-5 flex flex-col gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${tagStyle[tag] ?? "bg-gray-700 text-gray-300 border border-gray-600"}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton afficher tous */}
          <div className="text-center mt-10 sm:mt-14">
            <button
              onClick={() => navigate("/Projet")}
              className="group relative inline-flex items-center gap-2 px-8 py-3 rounded-full font-semibold text-sm sm:text-base overflow-hidden transition-transform duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              }}
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

      {/* Contact Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8" id="contact">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Send message
          </h2>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Votre nom"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Votre email"
                    className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                  />
                </div>
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Votre numero de telephone"
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors text-sm sm:text-base"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Votre message"
                  rows={5}
                  className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-4 py-3 sm:px-6 sm:py-4 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  onClick={handleFormSubmit}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 sm:px-12 py-3 sm:py-4 rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2 mx-auto text-sm sm:text-base"
                >
                  <Send size={18} />
                  Envoyer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-300 z-50"
          aria-label="Remonter en haut"
        >
          <ArrowUp size={18} className="sm:w-5 sm:h-5" />
        </button>
      )}

      {/* Footer */}
      <footer className="py-6 sm:py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
              © Safidy Rakotonirina
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Instagram size={16} className="sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-green-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <MessageCircle size={16} className="sm:w-5 sm:h-5 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Github size={16} className="sm:w-5 sm:h-5 text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
