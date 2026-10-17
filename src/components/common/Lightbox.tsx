import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect } from "react";

export interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  index,
  onClose,
  onNavigate,
}: LightboxProps) {
  const total = images.length;
  const current = images[index];

  const go = useCallback(
    (delta: number) => {
      if (total <= 1) return;
      onNavigate((index + delta + total) % total);
    },
    [index, total, onNavigate],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      else if (event.key === "ArrowRight") go(1);
      else if (event.key === "ArrowLeft") go(-1);
    };
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [go, onClose]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
      onKeyDown={(event) => {
        if (event.key === "Escape") onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Aperçu de la capture en plein écran"
    >
      <button
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        aria-label="Fermer"
        className="absolute top-4 right-4 z-10 h-10 w-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
      >
        <X size={20} className="text-white" />
      </button>

      {total > 1 && (
        <>
          <button
            onClick={(event) => {
              event.stopPropagation();
              go(-1);
            }}
            aria-label="Capture précédente"
            className="absolute left-3 sm:left-5 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronLeft size={22} className="text-white" />
          </button>
          <button
            onClick={(event) => {
              event.stopPropagation();
              go(1);
            }}
            aria-label="Capture suivante"
            className="absolute right-3 sm:right-5 z-10 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center transition-colors"
          >
            <ChevronRight size={22} className="text-white" />
          </button>
        </>
      )}

      <img
        src={current.src}
        alt={current.alt}
        onClick={(event) => event.stopPropagation()}
        className="max-h-[85vh] max-w-[92vw] object-contain rounded-lg shadow-2xl select-none"
      />

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-300 bg-black/50 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1">
        {index + 1} / {total}
      </div>
    </div>
  );
}
