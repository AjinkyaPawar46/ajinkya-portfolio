# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio site (Ajinkya Pawar) built with React + Vite + Tailwind CSS, deployed to GitHub Pages. Visual identity is "refined technical/lab" — dark, restrained, single cyan accent, real project media doing the visual work rather than decorative theming.

## Commands

```
npm run dev         # start Vite dev server
npm run build       # production build -> dist/, then syncs dist/ -> docs/
npm run preview     # preview the production build locally
npm run media       # transcode source media into public/media/ (see below)
npm run media:hero  # transcode just the hero video
```

There is no test suite and no linter configured in this repo.

## Architecture

- **Content-driven, component-per-section**: `src/data/content.js` holds every piece of copy (profile, education, achievements, publications, case studies, projects, skills, etc.) as plain JS constants/objects. **Edit this file to update site content** — components map over it, nothing is hardcoded in JSX.
  - `src/main.jsx` is just the entry point: `createRoot(...).render(<App />)`.
  - `src/App.jsx` composes all sections in order: `Hero` → `CaseStudySection` → `ProjectsGrid` → `Publications` → `Education` (includes Achievements) → `Skills` → `BeyondTheLab` → `Contact`.
  - `src/components/` holds one component per CV section; `src/components/casestudy/` holds the case-study card/modal system (see below); `src/components/layout/` holds cross-cutting UI (`Header`, `Footer`, `Section` — the shared scroll-reveal wrapper).
  - `src/hooks/` has `useActiveSection` (nav scroll-spy), `usePrefersReducedMotion`, `useScrollLock`, `useFocusTrap`.
  - `src/lib/mediaUrl.js` — resolves a `public/media/...` path against `import.meta.env.BASE_URL`. **Always route media paths through this** — a bare leading-slash path 404s under the `/ajinkya-portfolio/` base in both dev and preview.
- **Case studies are the featured content**: `src/data/content.js`'s `caseStudies` array (Racing → Rutgers → Aerial thesis, in that priority order) drives `CaseStudySection` — three cards that open into a full-screen `CaseStudyModal` (portalled to `document.body`, since an ancestor `Section` animates `y` and would otherwise become the containing block for a `position: fixed` overlay). Each case study's `detail` field points at the older flat bullet-list exports (`technicalHighlight`, `researchExperience`, `aerialRoboticsThesis`) rather than duplicating their copy — those exports are still the source of truth for the full CV-parity bullet lists, just no longer rendered as standalone page sections. `Key Projects` (`ProjectsGrid`) stays deliberately text-only/no-media — that's what keeps the thin/nonexistent media on StarTrack/Ping-Pong/Bokeh from being a visible gap.
- **Content prioritization is deliberate, not accidental**: the site is oriented around autonomous-driving work. Racing leads (only item that's simultaneously AV, leadership, and externally validated); Rutgers is second (strongest pure-research credential); Aerial thesis third. Lower-priority CV content (teaching, positions of responsibility, coursework, extracurriculars) lives inside `BeyondTheLab`, a single collapsed-by-default accordion — full CV parity is preserved, just de-emphasized.
- **Interactivity**: `framer-motion` drives scroll-reveal (`Section.jsx`), the hero's staggered entrance, the project filter grid's animated enter/exit, the filter chip's sliding highlight, and the case-study modal's enter/exit + focus/scroll a11y. **Gotcha**: when animating height on a list wrapper, put `overflow-hidden` on an outer `motion.div`, not directly on a `<ul className="list-disc">` — Tailwind's preflight zeroes list padding, so outside-position bullet markers render just outside the `<ul>`'s own box and get clipped if `overflow-hidden` is on the `<ul>` itself.
- **Styling**: Tailwind utility classes directly in JSX. Palette is `ink`/`line`/`accent` (`tailwind.config.cjs`) — `accent` (`#22d3ee`) is restricted to interactive states and metric values; everything else is ink/zinc. No webfont — system font stack plus `ui-monospace` for technical labels/metrics.
- **Assets**: `src/assets/Ajinkya_Pawar_CV.pdf` is a Vite-hashed import (small, static, referenced from a handful of places). Everything under `public/media/` is *not* imported — it's referenced by plain string path through `mediaUrl()` (see below).

## Media pipeline

Source media (raw photos/videos from the author's machine — Downloads, other project directories) lives **outside this repo** and is transcoded into `public/media/` by a separate, manually-run pipeline:

- `scripts/media.manifest.mjs` — the only place absolute source paths appear. To swap the hero video: edit the `hero` entry's `src`, run `npm run media:hero`. The output filename (`media/hero/hero.mp4`) stays stable, so `content.js` never needs to change.
- `scripts/build-media.mjs` — ffmpeg-based transcoder (GIF→MP4, video→720p MP4 + poster frame, hero crop/trim, image→WebP). Idempotent (skips outputs newer than their source unless `--force`), supports `--only <id>`. **Never wire this into `npm run build`** — it depends on files that only exist on the author's machine; any other clone or CI run would fail.
- Every video gets a poster JPEG (`foo.mp4` → `foo-poster.jpg`) — the case-study video player uses `preload="none"`, so a poster is required or it renders blank until clicked.
- `probeHeight()` in `build-media.mjs` is rotation-aware: some phone-shot sources are coded landscape but tagged with `rotation: -90/-270` (portrait content stored as rotated landscape bytes). ffmpeg auto-rotates during decode before `-vf` filters run, so a naive coded-height check would upscale a video that's actually already at or above the target size. If you add new video sources, check `ffprobe -show_entries stream_side_data=rotation` before assuming coded dimensions are display dimensions.
- Aerial case-study media is intentionally restricted to a verified-clean "safe set" (see git history / the redesign plan for the attribution reasoning around a labmate's overlapping thesis figures) — don't add media from outside that set without re-verifying provenance.

## Deployment (GitHub Pages)

- `vite.config.js` sets `base: '/ajinkya-portfolio/'` to match the GitHub Pages project path.
- `node_modules/` and `dist/` are gitignored. `docs/` (the actual GitHub Pages publish source) **is** committed — GitHub Pages serves it directly from `main`.
- `npm run build` runs `vite build && node scripts/sync-docs.mjs` — the sync script clears `docs/` and copies `dist/` into it automatically (which includes `public/media/`, carried through by Vite's normal static-asset passthrough), so `docs/` can't drift stale relative to `dist/`. Run `npm run sync-docs` standalone if `dist/` was built separately.
