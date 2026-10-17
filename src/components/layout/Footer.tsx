import { SITE } from "../../config";
import { SocialLinks } from "../common/SocialLinks";

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm sm:text-base text-center sm:text-left">
            © {new Date().getFullYear()} {SITE.name}
          </p>
          <SocialLinks size="sm" />
        </div>
      </div>
    </footer>
  );
}
