import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname, state } = useLocation();
  const stateRef = useRef(state);
  stateRef.current = state;

  useEffect(() => {
    const target = (stateRef.current as { scrollTo?: string } | null)?.scrollTo;
    if (target) return;

    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    html.style.scrollBehavior = previous;
  }, [pathname]);

  return null;
}
