@AGENTS.md

# V.&J. Fonseca — Project Context for Claude (v2)

## Skills to Use
- For any new component, layout, or UI work: invoke the `frontend-design` skill
- For typography polish: `impeccable:typeset`
- For motion / micro-interactions: `impeccable:animate`
- For final QA: `impeccable:polish`

---

## Business Profile

**Company:** V.&J. Fonseca
**Website:** vj-fonseca.com
**Email:** jf@vjfonseca.com
**Phone:** 263 079 366 · 916 641 573
**Region:** Setúbal / Palmela, Portugal
**Type:** Small family business, B2B
**Target market:** Construction contractors, builders, metalworkers

### What They Do
Specialist supplier of metallic panels and profiles for the construction industry. Products cover roofing (Coberturas), facades (Fachadas), fencing (Vedação), and structural profiles (Perfis Metálicos).

The single source of truth for products, portfolio, differentiators, copy, and contact info is **`src/lib/constants.ts`**. Update there.

---

## Design System (v2 — Dark Editorial)

### Visual Direction
Industrial-cinematic dark: charcoal base, brightened steel-blue accent, large editorial display type (Fraunces). Premium B2B feel — not generic SaaS, not stark brutalist.

### Color Tokens (defined in `src/app/globals.css`)
```css
--color-bg-base:        #0A0B0D   /* page */
--color-bg-surface:     #14161A   /* cards, alt sections */
--color-bg-elevated:    #1C1F24   /* hover */
--color-bg-contrast:    #06070A   /* hero, contact */
--color-border:         #2A2D33
--color-border-strong:  #3A3E45
--color-text-primary:   #F4F4F5
--color-text-muted:     #9BA1A8
--color-text-subtle:    #5C6169
--color-accent:         #5B9BE5   /* steel blue */
--color-accent-hover:   #7AB0EE
--color-accent-soft:    rgba(91,155,229,0.12)
--color-accent-glow:    rgba(91,155,229,0.22)
```

Use Tailwind v4 arbitrary value syntax for tokens: `bg-[--color-bg-surface]`, `text-[--color-accent]`, `border-[--color-border]`.

### Typography
- **Display:** `Fraunces` via `next/font/google` (variable axes opsz/SOFT/WONK). Apply with the `.display` utility class. Weight 400 default. Used in section headlines and product/portfolio titles.
- **UI / body:** `Inter` (default body font).
- **Mono:** `JetBrains Mono` for tiny meta labels (numbering, dates, technical accents).
- **Eyebrow** labels use the `.eyebrow` utility — 11px, uppercase, 0.18em tracking, accent color.

### Motion
- `framer-motion` only. Use the existing `<Reveal>` wrapper (`src/components/ui/Reveal.tsx`) for scroll-triggered fade+slide.
- Default easing: `EASE_OUT` from `src/lib/utils.ts` — `[0.22, 1, 0.36, 1]`.
- Card hover: subtle lift + border brighten via the `.lift` utility.

---

## Architecture

```
src/
├── app/                  # App Router pages, layout, metadata, SEO
├── components/
│   ├── layout/           # Navbar (scroll spy), Footer
│   ├── sections/         # Hero / Products / Portfolio / About / Contact
│   └── ui/               # Button, SectionHeader, Reveal, Logo, *Card, ContactForm
├── hooks/                # useActiveSection
└── lib/                  # constants (content), types, utils
```

### Conventions
- `"use client"` only when needed (anything with hooks, framer-motion, event handlers). Sections that just render server-side should remain RSC.
- All copy and product data must live in `src/lib/constants.ts` — no hardcoded text in components.
- Icons via `lucide-react`, referenced by string name in constants (see `iconName` fields).
- Images via `next/image` with `images.remotePatterns` allowlist for `images.unsplash.com` in `next.config.ts`.

---

## Deployment

Vercel-ready. No env vars. Push to `main` → auto-deploy. Domain target: `vj-fonseca.com`.

## Predecessor

This is the rewrite of [itsjustiago/vjfonseca](https://github.com/itsjustiago/vjfonseca). The v1 was a light-industrial blue-on-white treatment; v2 reframes the brand in dark editorial. Content is the same, components are reimplemented.
