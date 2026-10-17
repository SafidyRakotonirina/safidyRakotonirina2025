# Portfolio — Safidy Rakotonirina

Portfolio personnel de **Safidy Rakotonirina**, développeur web fullstack.

## Stack technique

- **React 19** + **TypeScript**
- **Vite 7**
- **Tailwind CSS 4** (`@tailwindcss/vite`)
- **React Router 7**
- **lucide-react** (icônes)

## Démarrage

```bash
npm install
npm run dev
```

Le site est disponible sur `http://localhost:5173`.

## Scripts

| Commande          | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Serveur de développement (HMR)           |
| `npm run build`   | Type-check + build de production         |
| `npm run preview` | Prévisualise le build de production      |
| `npm run lint`    | Analyse ESLint                           |

## Structure

```
src/
  config.ts              Configuration du site (email, réseaux, CV)
  data/                  Contenu (projets, compétences, expériences)
  hooks/                 Hooks réutilisables (scroll, machine à écrire)
  lib/                   Utilitaires (téléchargement CV, mailto)
  components/
    layout/              Navbar, Footer
    common/              ContactForm, SocialLinks, ScrollToTop, TypingCursor
    home/                Page d'accueil + sections
    projects/            ProjectCard
    projets/             Page « Mes projets »
```

## Personnalisation

Tout le contenu modifiable est centralisé dans :

- `src/config.ts` — email, téléphone, URL du site, réseaux sociaux, CV.
  Les liens sociaux laissés vides sont automatiquement masqués.
- `src/data/projects.ts` — liste des projets.
- `src/data/skills.ts` — compétences.
- `src/data/experiences.ts` — expériences professionnelles.

Les images sont dans `public/images` (format WebP recommandé).
