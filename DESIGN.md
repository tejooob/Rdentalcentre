# Design

## Theme

Calm clinical premium. A deep harbour-navy carries the brand across dark
"anchor" sections (hero, about, footer) while content breathes on pure white.
Warmth and trust come from the navy + a single restrained gold accent (used for
ratings and small highlights), never from a tinted body background. The mood:
a quiet, well-lit modern dental suite at the start of the day, clean light on
pale surfaces, one warm brass detail.

Color strategy: **Committed** — navy owns roughly a third of the surface
(full-bleed dark sections), white owns the rest, gold is the ≤5% accent.

## Color

All values OKLCH.

- `--bg`            oklch(1 0 0)            Pure white. Primary content surface.
- `--surface`      oklch(0.975 0.004 250)  Faintest cool tint. Alternating bands.
- `--ink`          oklch(0.24 0.024 255)   Near-black, cool. Body + headings on light.
- `--muted`        oklch(0.46 0.022 255)   Secondary text on light. ~5.4:1 on white.
- `--navy`         oklch(0.30 0.062 255)   Brand primary. Dark sections, buttons.
- `--navy-deep`    oklch(0.205 0.05 258)   Deepest navy. Hero/footer base.
- `--navy-soft`    oklch(0.40 0.06 252)    Lifted navy for borders/hover on dark.
- `--on-navy`      oklch(0.97 0.006 255)   Text on navy. ~12:1.
- `--on-navy-muted` oklch(0.78 0.018 255)  Secondary text on navy. ~5:1.
- `--accent`       oklch(0.80 0.115 78)    Warm gold. Stars, hairline highlights.
- `--accent-ink`   oklch(0.46 0.10 75)     Gold dark enough for text on light.
- `--line`         oklch(0.91 0.006 255)   Hairline borders on light.
- `--line-navy`    oklch(1 0 0 / 0.12)     Hairline borders on navy.

Focus ring: `--accent` at 2px offset, plus 3px ring for keyboard.

## Typography

Pairing on a real contrast axis: a warm contemporary serif for headings (trust,
care, premium) against a clean humanist sans for everything else (modern,
clinical, legible). Both avoid the reflex-default families.

- Display / headings: **Spectral** (serif). Weights 400/500/600. Used for h1–h3
  and large statements. `letter-spacing: -0.01em`, `text-wrap: balance`.
- Body / UI: **Hanken Grotesk** (sans). Weights 400/500/600/700. Body, labels,
  buttons, nav, captions.

Scale (fluid, ratio ≥1.25):
- Hero h1: clamp(2.75rem, 6vw, 5rem)
- Section h2: clamp(2rem, 4vw, 3.25rem)
- h3: clamp(1.25rem, 2vw, 1.6rem)
- Body: 1.0625rem / line-height 1.6, max width 68ch
- Label / eyebrow: 0.8125rem, 500, tracking 0.08em, used sparingly (not on
  every section)

## Layout

- Container max-width 1200px, fluid gutters via clamp().
- Section vertical rhythm via clamp(4rem, 9vw, 8rem); varied, not uniform.
- Services: asymmetric image cards with overlaid category tag + title.
- Grid only where 2D; flex + wrap elsewhere. Stat row uses flex.
- Radius scale: 12px (cards small), 20px (image cards/panels), 999px (pills).
- z-index scale tokens: dropdown 100, sticky 200, modal 400, toast 600.

## Components

- Sticky translucent header that solidifies on scroll; pill "Book a Call" CTA.
- Hero: full-bleed clinic photo, navy gradient scrim, headline + service pills,
  floating "featured dentist" rating card.
- Service cards: image, gradient base, category pill, title; hover lifts + zooms.
- About: image with floating "20+ years" badge + team avatars.
- Stats: large animated count-up numbers with labels.
- Testimonials: quote cards with gold star rows and patient avatar/initials.
- Footer: navy, multi-column links + contact + legal.

## Motion

Rich but calm (ease-out-expo, 0.6–0.9s). Orchestrated hero entrance, staggered
scroll reveals per section (not one uniform fade), count-up stats on view, hover
micro-interactions (card lift + image zoom, button sheen). Lenis smooth scroll.
Every effect has a `prefers-reduced-motion: reduce` path (instant/crossfade,
counters snap to final value, no smooth-scroll hijack).
