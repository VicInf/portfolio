# Portfolio

Gamified, Persona 3 Reload–inspired personal portfolio built with Angular 22. Single-page, scroll-driven reveals, zero runtime dependencies beyond the framework.

**Live site:** https://vicinf.github.io/portfolio/

## Features

- **Section components** — header, hero, work, about, contact and footer are standalone components with `OnPush` change detection.
- **Data-driven cards** — projects live in `src/app/data/projects.ts`; adding one is a single typed object and the grid renumbers and re-links itself (single link, or dropdown menu for multi-store projects like Sidney).
- **Motion with restraint** — scroll-driven reveals via `animation-timeline: view()` (static fallback for unsupported browsers), `prefers-reduced-motion` respected, static scanlines, no perpetual repaint loops.
- **Tag chip primitive** — the same chip language covers project tags and the skills panel.

- **Trilingual (EN / ES / FR)** — runtime signal-based i18n with a header switcher; choice persisted in `localStorage`, `<html lang>` and page title update on switch. All copy (including project descriptions) lives per-language in `src/app/i18n/i18n.ts` and `src/app/data/projects.ts`.
- **Prerendered + hydrated** — the production build renders the full DOM (SSG), so crawlers and link previews get the content with zero JavaScript; the client then hydrates on top and applies the visitor's language after `whenStable()` — the prerender is always EN, so the first client render matches it exactly.
- **Test-gated CI/CD** — 17 Vitest specs (i18n, data integrity, header a11y, hero funnel) run on every push to `main`; a green run auto-deploys to GitHub Pages, a red one blocks the deploy. PRs get CI checks without deploying.

## CV pipeline

The CV masters are the HTML files in `cv/` — edit those, never the PDFs. `pnpm cv:build` renders each one with headless Chrome straight into `public/cv-vicente-perez-{en,es,fr}.pdf`: the per-language files the site serves and the deploy publishes. The script deletes each target before rendering and fails loudly if Chrome produces no output, so a stale PDF can never silently survive a failed run.

## Development

```bash
pnpm install
pnpm start          # dev server at http://localhost:4200
pnpm build          # production build (prerendered) in dist/portfolio
pnpm test           # Vitest, watch mode
pnpm cv:build       # render cv/*.html masters -> public/ PDFs (needs local Chrome)
```

## Structure

```
src/app/
├── app.ts / app.html / app.scss   # composition root
├── data/projects.ts               # Project model + portfolio data
├── i18n/i18n.ts                   # per-language dictionary + document metadata
└── components/
    ├── header/  ├── hero/  ├── work/  ├── about/  ├── contact/  └── footer/
cv/                                # CV HTML masters (source of truth)
scripts/cv-build.sh                # masters -> public/ PDFs
public/                            # deployed as-is: PDFs, robots.txt, sitemap.xml, og-image
.github/workflows/ci.yml           # test + build on push/PR; deploy to gh-pages on main
```

## Stack

Angular 22 · TypeScript · SCSS · Google Fonts (Press Start 2P, VT323)

---

© 2026 Vicente Pérez
