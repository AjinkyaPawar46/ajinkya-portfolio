# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio site (Ajinkya Pawar) built with React + Vite + Tailwind CSS, deployed to GitHub Pages.

## Commands

```
npm run dev       # start Vite dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

There is no test suite and no linter configured in this repo.

## Architecture

- **Content-driven, component-per-section**: `src/data/content.js` holds every piece of copy (profile, education, achievements, publications, technical highlight, research experience, projects, skills, etc.) as plain JS constants/objects. **Edit this file to update site content** — components map over it, nothing is hardcoded in JSX.
  - `src/main.jsx` is just the entry point: `createRoot(...).render(<App />)`.
  - `src/App.jsx` composes all sections in priority order (see below).
  - `src/components/` holds one component per CV section (`Hero`, `TechnicalHighlight`, `ProjectsGrid` + `ProjectFilterBar` + `ProjectCard`, `ResearchExperience`, `Publications`, `Education`, `Achievements`, `Skills`, `BeyondTheLab` + its subcomponents, `Contact`); `src/components/layout/` holds cross-cutting UI (`Header`, `Footer`, `Section` — the shared scroll-reveal wrapper, `HUDParticles`, `ArcReactor`).
  - `src/hooks/` has `useActiveSection` (IntersectionObserver scroll-spy driving the nav's active-link highlight) and `usePrefersReducedMotion`.
- **Content prioritization is deliberate, not accidental**: the site is oriented around autonomous-driving work. `TechnicalHighlight` (IITB Racing — NMPC, SLAM, perception) is the featured/spotlight section placed right after the hero, with heavier visual treatment than other sections. Lower-priority CV content (aerial robotics thesis, teaching, positions of responsibility, coursework, extracurriculars) lives inside `BeyondTheLab`, a single collapsed-by-default accordion — full CV parity is preserved, just de-emphasized. Keep new content additions consistent with this hierarchy rather than flattening everything into equal-weight sections.
- **Interactivity**: `framer-motion` drives scroll-reveal (`Section.jsx`), the hero's staggered entrance, the project filter grid's animated enter/exit (`AnimatePresence` + `layout`), the filter chip's sliding highlight (shared `layoutId`), and expandable card animations (`ResearchExperience`, `BeyondTheLab`). **Gotcha**: when animating height on a list wrapper, put `overflow-hidden` on an outer `motion.div`, not directly on a `<ul className="list-disc">` — Tailwind's preflight zeroes list padding, so outside-position bullet markers render just outside the `<ul>`'s own box and get clipped if `overflow-hidden` is on the `<ul>` itself.
- **Styling**: Tailwind utility classes directly in JSX (dark theme: slate/black backgrounds, red/amber "Ironman" accent colors defined as `ironmanRed`/`ironmanGold` in `tailwind.config.cjs`). `src/index.css` holds the Tailwind directives plus custom keyframes used by `HUDParticles`.
- **Assets**: `src/assets/headshot.jpg` and `src/assets/Ajinkya_Pawar_CV.pdf` are imported directly wherever needed (`Header`, `Hero`, `Contact`) so Vite fingerprints them into the build.

## Deployment (GitHub Pages)

- `vite.config.js` sets `base: '/ajinkya-portfolio/'` to match the GitHub Pages project path.
- Both `dist/` (raw Vite build output) and `docs/` (the actual GitHub Pages publish source) are committed to the repo — there is no `.gitignore` excluding build artifacts. `node_modules/` is also committed (pre-existing repo state, not addressed here).
- `npm run build` now runs `vite build && node scripts/sync-docs.mjs` — the sync script (`scripts/sync-docs.mjs`) clears `docs/` and copies `dist/` into it automatically, so `docs/` can no longer drift stale relative to `dist/`. Run `npm run sync-docs` standalone if `dist/` was built separately. GitHub Pages serves from `docs/` on `main`.
