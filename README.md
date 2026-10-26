# Portfolio

Gamified, Persona 3 Reload–inspired personal portfolio built with Angular 22. Single-page, scroll-driven reveals, zero runtime dependencies beyond the framework.

**Live site:** https://vicinf.github.io/portfolio/

## Features

- **Section components** — header, hero, work, about, contact and footer are standalone components with `OnPush` change detection.
- **Data-driven cards** — projects live in `src/app/data/projects.ts`; adding one is a single typed object and the grid renumbers and re-links itself (single link, or dropdown menu for multi-store projects like Sidney).
- **Motion with restraint** — scroll-driven reveals via `animation-timeline: view()` (static fallback for unsupported browsers), `prefers-reduced-motion` respected, static scanlines, no perpetual repaint loops.
- **Tag chip primitive** — the same chip language covers project tags and the skills panel.

- **Trilingual (EN / ES / FR)** — runtime signal-based i18n with a header switcher; choice persisted in `localStorage`, `<html lang>` and page title update on switch. All copy (including project descriptions) lives per-language in `src/app/i18n/i18n.ts` and `src/app/data/projects.ts`.

## Development

```bash
pnpm install
pnpm start          # dev server at http://localhost:4200
pnpm build          # production build in dist/portfolio
```

## Structure

```
src/app/
├── app.ts / app.html / app.scss   # composition root
├── data/projects.ts               # Project model + portfolio data
└── components/
    ├── header/  ├── hero/  ├── work/  ├── about/  ├── contact/  └── footer/
```

## Stack

Angular 22 · TypeScript · SCSS · Google Fonts (Press Start 2P, VT323)

---

© 2026 Vicente Pérez
