import { useEffect, useState } from "react";
import { ROLES } from "../data/roles";

interface RoleTypingResult {
  heroDisplayed: string;
  aboutDisplayed: string;
  currentColor: string;
}

export function useRoleTyping(): RoleTypingResult {
  const [currentRole, setCurrentRole] = useState(0);
  const [heroDisplayed, setHeroDisplayed] = useState("");
  const [aboutDisplayed, setAboutDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = ROLES[currentRole];
    const heroFull = role.hero;
    const aboutFull = role.about;

    const doneWriting =
      heroDisplayed.length === heroFull.length &&
      aboutDisplayed.length === aboutFull.length;
    const doneDeleting =
      heroDisplayed.length === 0 && aboutDisplayed.length === 0;

    const delay = isDeleting
      ? 40 + Math.random() * 20
      : doneWriting
        ? 2000
        : 60 + Math.random() * 40;

    const timeout = window.setTimeout(() => {
      if (!isDeleting) {
        if (doneWriting) {
          setIsDeleting(true);
        } else {
          if (heroDisplayed.length < heroFull.length) {
            setHeroDisplayed(heroFull.slice(0, heroDisplayed.length + 1));
          }
          if (aboutDisplayed.length < aboutFull.length) {
            setAboutDisplayed(aboutFull.slice(0, aboutDisplayed.length + 1));
          }
        }
      } else {
        if (doneDeleting) {
          setIsDeleting(false);
          setCurrentRole((previous) => (previous + 1) % ROLES.length);
        } else {
          if (heroDisplayed.length > 0) {
            setHeroDisplayed(heroFull.slice(0, heroDisplayed.length - 1));
          }
          if (aboutDisplayed.length > 0) {
            setAboutDisplayed(aboutFull.slice(0, aboutDisplayed.length - 1));
          }
        }
      }
    }, delay);

    return () => window.clearTimeout(timeout);
  }, [heroDisplayed, aboutDisplayed, isDeleting, currentRole]);

  return {
    heroDisplayed,
    aboutDisplayed,
    currentColor: ROLES[currentRole].color,
  };
}
