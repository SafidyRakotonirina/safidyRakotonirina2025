import { ArrowUp } from "lucide-react";
import { useScrolled } from "../../hooks/useScrolled";

export function ScrollToTopButton() {
  const visible = useScrolled(200);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Remonter en haut"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-blue-600 hover:bg-blue-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition duration-300 z-50"
    >
      <ArrowUp size={18} className="sm:w-5 sm:h-5" />
    </button>
  );
}
