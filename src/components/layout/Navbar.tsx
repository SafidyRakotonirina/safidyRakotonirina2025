import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { SITE } from "../../config";
import { useScrolled } from "../../hooks/useScrolled";

interface NavItem {
  id: string;
  label: string;
  route?: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets", route: "/projets" },
  { id: "cv", label: "CV", route: "/cv" },
  { id: "contact", label: "Contact" },
];

interface NavbarProps {
  activeSection: string;
}

export function Navbar({ activeSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isScrolled = useScrolled(50);
  const navigate = useNavigate();
  const location = useLocation();

  const goTo = (item: NavItem) => {
    setMobileMenuOpen(false);
    if (item.route) {
      navigate(item.route);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: item.id } });
      return;
    }
    document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
  };

  const goHome = () => {
    setMobileMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={goHome}
            className="flex items-center space-x-2"
            aria-label="Retour à l'accueil"
          >
            <span className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center font-bold text-sm sm:text-base">
              {SITE.initials}
            </span>
            <span className="text-lg sm:text-xl font-bold">{SITE.name}</span>
          </button>

          <div className="hidden md:flex space-x-4 lg:space-x-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item)}
                className={`hover:text-blue-400 transition-colors text-sm lg:text-base ${
                  activeSection === item.id ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileMenuOpen}
              className="text-white hover:text-blue-400 focus:outline-none"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item)}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium hover:text-blue-400 transition-colors ${
                  activeSection === item.id ? "text-blue-400" : ""
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
