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

- **Content-driven, component-per-section**: `src/data/content.js` holds every piece of copy (profile, timeline, achievements, publications, case studies, projects, skills, etc.) as plain JS constants/objects. **Edit this file to update site content** — components map over it, nothing is hardcoded in JSX.
  - `src/main.jsx` is just the entry point: `createRoot(...).render(<App />)`.
  - `src/App.jsx` composes all sections in order: `Hero` → `ImpactStrip` → `CaseStudySection` → `ProjectsGrid` → `Publications` → `Timeline` → `Awards` → `Skills` → `BeyondTheLab` → `Contact`.
  - `src/components/` holds one component per CV section; `src/components/casestudy/` holds the case-study feature/modal system (see below); `src/components/projectart/` holds the generated SVG covers for Key Projects; `src/components/layout/` holds cross-cutting UI (`Header`, `MobileNav`, `Footer`, `Section` — the shared scroll-reveal wrapper — and `SectionHeading`).
  - `src/hooks/` has `useActiveSection` (nav scroll-spy), `usePrefersReducedMotion`, `useScrollLock`, `useFocusTrap`.
  - There is **no `education` export** — the degrees live in the `timeline` array, which merges them with the roles held during them. Keeping a second list would let the two drift.
  - `src/lib/mediaUrl.js` — resolves a `public/media/...` path against `import.meta.env.BASE_URL`. **Always route media paths through this** — a bare leading-slash path 404s under the `/ajinkya-portfolio/` base in both dev and preview.
- **Case studies are the featured content**: `src/data/content.js`'s `caseStudies` array (Racing → Rutgers → Aerial thesis, in that priority order) drives `CaseStudySection` — three **full-bleed alternating feature bands** (`CaseStudyFeature`), each with an inline autoplaying clip, all four metrics, and a button opening the full-screen `CaseStudyModal` (portalled to `document.body`, since an ancestor `Section` animates `y` and would otherwise become the containing block for a `position: fixed` overlay). Each case study's `detail` field points at the older flat bullet-list exports (`technicalHighlight`, `researchExperience`, `aerialRoboticsThesis`) rather than duplicating their copy — those exports are still the source of truth for the full CV-parity bullet lists, just no longer rendered as standalone page sections.
  - Three media fields per case study, each with a different job: `poster` (the modal's header image), `featureMedia` (the clip that autoplays inline in the feature band), and `sections[].media` (the deep-dive gallery inside the modal).
  - `CaseStudySection` is deliberately **not** wrapped in `Section` — each band owns its own full-bleed ground and padding so they can alternate, which one shared wrapper can't do.
  - `Key Projects` (`ProjectsGrid`) has no photographs, so each project carries an `art` key naming a generated SVG in `projectart/ProjectArt.jsx`. These are abstract marks evoking the subject — **never** dressed up as real screenshots. They're deterministic (a seeded mulberry32 PRNG, not `Math.random`) so nothing shifts between renders, and carry no animation, so there's nothing to gate on reduced motion.
- **Content prioritization is deliberate, not accidental**: the site is oriented around autonomous-driving work. Racing leads (only item that's simultaneously AV, leadership, and externally validated); Rutgers is second (strongest pure-research credential); Aerial thesis third. Lower-priority CV content (teaching, positions of responsibility, coursework, extracurriculars) lives inside `BeyondTheLab`, a single collapsed-by-default accordion — full CV parity is preserved, just de-emphasized.
- **Interactivity**: `framer-motion` drives scroll-reveal (`Section.jsx`), the hero's staggered entrance, the project filter grid's animated enter/exit, the filter chip's sliding highlight, the mobile nav, and the case-study modal's enter/exit + focus/scroll a11y. **Gotcha**: when animating height on a list wrapper, put `overflow-hidden` on an outer `motion.div`, not directly on a `<ul className="list-disc">` — Tailwind's preflight zeroes list padding, so outside-position bullet markers render just outside the `<ul>`'s own box and get clipped if `overflow-hidden` is on the `<ul>` itself.
- **Autoplaying media**: `AutoplayVideo.jsx` is the shared primitive for every inline clip. It attaches `src` only on first intersection (nothing downloads until scrolled to), plays only while on screen, and never mounts `<video>` at all under `prefers-reduced-motion` — pausing would still fetch the clip. Every instance carries a visible pause control, because WCAG 2.2.2 requires motion over five seconds to be pausable. Any new inline video should go through it rather than a bare `<video autoPlay>`.
- **Never fade the hero in.** `Hero.jsx`'s entrance animates transform only, never opacity. framer-motion writes the `initial` state as an inline style and animates it via rAF, so anything starting at `opacity: 0` stays invisible whenever rAF does not run — a backgrounded tab, a heavily loaded device, a framer-motion failure. That is survivable for a section further down the page (`Section.jsx` still fades, and the reader only reaches it in a focused tab), but a blank hero is the worst failure the site has. Keep above-the-fold content readable without JS having to finish.
- **Styling**: Tailwind utility classes directly in JSX. Palette is `ink`/`line`/`accent`/`gold` (`tailwind.config.cjs`), and the two accents are **semantic, not decorative** — keeping to this is what stops the page reading as a rainbow:
  - `accent` (cyan `#22d3ee`) = quantitative and technical — metric values, tech chips, links, active nav, CTAs.
  - `gold` (amber `#f59e0b`) = recognition — competition placings, awards, the "Incoming" badge, publication venues.
  - Nothing else gets color; everything else is ink/zinc. `zinc-500` is reserved for the quietest meta only — body text is `zinc-400` or lighter, since `zinc-500` on the card surface fails contrast.
  - Section grounds **alternate** via `Section`'s `band` prop (`raised` = full-bleed `ink-900`, default = transparent on `ink-950`). When adding or reordering a section, check the neighbours: two adjacent bands with the same ground merge into one flat block and lose the page's vertical rhythm.
  - `body` carries an explicit `color` (and `background-color`) in `index.css`. The case-study modal is portalled to `<body>`, outside the `#top` wrapper that holds `text-zinc-100` — without a root colour, every element in it that does not set one explicitly renders in the UA default black on a dark panel.
  - Webfonts: **Inter** and **JetBrains Mono**, loaded from Google Fonts in `index.html` with the previous system stacks kept as fallbacks. (This reverses an earlier no-webfont decision — system-default type was a large part of why the page read generic.)
- **Assets**: `src/assets/Ajinkya_Pawar_CV.pdf` is a Vite-hashed import (small, static, referenced from a handful of places). Everything under `public/media/` is *not* imported — it's referenced by plain string path through `mediaUrl()` (see below).

## Media pipeline

Source media (raw photos/videos from the author's machine — Downloads, other project directories) lives **outside this repo** and is transcoded into `public/media/` by a separate, manually-run pipeline:

- `scripts/media.manifest.mjs` — the only place absolute source paths appear. To swap the hero video: edit the `hero` entry's `src`, run `npm run media:hero`. The output filename (`media/hero/hero.mp4`) stays stable, so `content.js` never needs to change.
- The `hero` entry's crop is **optional**: supply `cropWidth`/`cropHeight` (plus `cropX`/`cropY`) only when the source is not already 16:9. A square phone/social export needs a 16:9 band cut out of it; already-edited 16:9 footage must not be cropped or it loses the top and bottom of every frame. `trimStart` picks a window out of a longer film, `trimSeconds` its length. `heroCandidates` in the manifest holds ready-to-swap alternatives.
- Files pulled from the Google Drive `Portfolio` folder go in `C:/Users/ajink/Downloads/Portfolio` (the `PORTFOLIO` root in the manifest). Entries whose source is missing are warned about and skipped, so a partial download degrades gracefully instead of failing the run.
- **Size budget**: `docs/` is committed alongside `public/media/`, so every byte lands in git twice. Keep the hero under ~4 MB and each inline feature clip under ~2 MB.
- `scripts/build-media.mjs` — ffmpeg-based transcoder (GIF→MP4, video→720p MP4 + poster frame, hero crop/trim, image→WebP). Idempotent (skips outputs newer than their source unless `--force`), supports `--only <id>`. **Never wire this into `npm run build`** — it depends on files that only exist on the author's machine; any other clone or CI run would fail.
- Every video gets a poster JPEG (`foo.mp4` → `foo-poster.jpg`) — the case-study video player uses `preload="none"`, so a poster is required or it renders blank until clicked.
- `probeHeight()` in `build-media.mjs` is rotation-aware: some phone-shot sources are coded landscape but tagged with `rotation: -90/-270` (portrait content stored as rotated landscape bytes). ffmpeg auto-rotates during decode before `-vf` filters run, so a naive coded-height check would upscale a video that's actually already at or above the target size. If you add new video sources, check `ffprobe -show_entries stream_side_data=rotation` before assuming coded dimensions are display dimensions.
- Aerial case-study media is intentionally restricted to a verified-clean "safe set" (see git history / the redesign plan for the attribution reasoning around a labmate's overlapping thesis figures) — don't add media from outside that set without re-verifying provenance.

## Deployment (GitHub Pages)

- `vite.config.js` sets `base: '/ajinkya-portfolio/'` to match the GitHub Pages project path.
- `node_modules/` and `dist/` are gitignored. `docs/` (the actual GitHub Pages publish source) **is** committed — GitHub Pages serves it directly from `main`.
- `npm run build` runs `vite build && node scripts/sync-docs.mjs` — the sync script clears `docs/` and copies `dist/` into it automatically (which includes `public/media/`, carried through by Vite's normal static-asset passthrough), so `docs/` can't drift stale relative to `dist/`. Run `npm run sync-docs` standalone if `dist/` was built separately.
