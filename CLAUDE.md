# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (runs on :3002 if :3000 is taken)
npm run build    # Production build
npm run start    # Serve production build
```

After changing `next.config.ts` or `globals.css`, delete `.next/` and restart — Turbopack caches aggressively and CSS/config changes may not hot-reload correctly:
```bash
rm -rf .next && npm run dev
```

## Stack

- **Next.js 16** (App Router, Turbopack, TypeScript)
- **Tailwind CSS v4** — config via `app/globals.css` `@theme inline` block, no `tailwind.config.js`
- **Framer Motion** — all section animations and the polaroid gallery
- **tsparticles** (`@tsparticles/slim`) — gold sparkles in Hero and Header logo

## Brand Tokens

Defined in `app/globals.css` `@theme inline`:

| Token | Value |
|---|---|
| `--color-navy` | `#000033` (primary background) |
| `--color-navy-light` | `#000044` (alternate section bg) |
| `--color-gold` | `#CC9933` |
| `--color-gold-light` | `#DDB84D` |

Use `bg-navy`, `bg-navy-light`, `text-gold`, `border-gold/30` etc. in components. Do **not** hardcode hex values in className — update the token instead.

## Architecture

`app/page.tsx` is the single route. It imports all sections in order:

```
Header → Hero → ChoosePath → PolaroidGallery → FeatureMatrix → Process → Packages → Testimonials → Contact → Footer
```

Each section is a standalone component in `components/`. Sections alternate between `bg-navy` and `bg-navy-light` for visual rhythm.

### Key components

**`SparklesCore.tsx`** — wraps `@tsparticles/react`. Uses a **module-level singleton** (`engineReady` / `enginePromise`) so `initParticlesEngine` is only called once across all instances. Always use this pattern — calling it multiple times causes a race condition.

**`PolaroidGallery.tsx`** — contains both the `PolaroidStack` inner component and the gallery section. Cards fan out using **index-based positions** (not random) to guarantee all cards are visible without overlap. Scatter x-spacing is `185px` (wider than the 160px card). The heading uses `style={{ zIndex: 30 }}` and the stacks container uses `style={{ zIndex: 1 }}` — inline styles are required here because Tailwind z-index classes don't resolve the stacking context correctly across Framer Motion animated elements.

**`Header.tsx`** — scroll-spy via `IntersectionObserver` with `rootMargin: '-40% 0px -55% 0px'`. Section IDs watched: `home`, `gallery`, `packages`, `process`, `contact`. When adding a new section to the nav, also add `id="<name>"` to the section element.

### Static assets

All in `public/`:
- `LOGO.png` — brand logo (white + gold text, transparent background). Use on dark backgrounds only.
- `Color_Palete.png` — reference only, not used in code.
- `gallery/Photo1.png` … `Photo9.png` — photobooth strip images, all `160×480px` (1:3 ratio). Display at natural size with no explicit `width`/`height` — forcing other dimensions distorts the strips.

`next.config.ts` whitelists both `/gallery/**` and `/*.png` for `next/image` local patterns. Add new public asset patterns there if using `next/image`.

### `lib/utils.ts`

Exports `cn()` (clsx + tailwind-merge). Use for conditional className merging.
