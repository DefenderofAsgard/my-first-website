# Style Guide — Austin Simpson Web Dev

## Logo
`logo.svg` — a bold white capital "A" set in Courier New (monospace, code-themed), centered inside six concentric neon green rings (`#39ff14`, matching the Matrix-rain background effect's character color; widths 4/2/1/0.5/0.25/0.125, each half the last; radii chosen so the visible black gap between each ring's edges is a constant 2px, compensating for the varying stroke widths) on a black circle. Used as the site favicon and in the header. Scales cleanly since it's SVG — no separate sizes needed.

### Logo Variants
- `logo.svg` — current logo (circle), used as the live favicon/header logo.
- `logo-triangle-blank.svg` — alternate triangle version, same neon ring treatment, rings only, no letter added yet. Saved for future use.

## Color Palette

| Name | Hex | Use |
|---|---|---|
| Background | `#000000` | Page background |
| Panel | `rgba(0, 0, 0, 0.55)` | Header / section / footer translucent panels |
| Primary (Neon Green) | `#39ff14` | Headings, links, logo, hover accents (matches Matrix-rain effect) |
| Primary Hover (Light Green) | `#8cff6b` | Lightened hover state for primary-colored text |
| Button Blue (faint) | `rgba(43, 108, 176, 0.5)` | Buttons ("Send", "Unlock Resume") |
| Button Blue (hover) | `rgba(35, 90, 146, 0.5)` | Button hover state |
| Text | `#f0f0f0` | Body text |
| Muted Text | `#cccccc` | Footer text, secondary links |
| Border | `#444444` / `#555555` | Dividers, input borders |
| Caution Yellow | `#f5c518` | Under-construction banner stripes |
| Error Red | `#ff8080` | Form error messages |

## Typography
- Font: Arial / system sans-serif (no custom font loaded — keeps the site fast)
- Headings: bold, primary neon green (`#39ff14`)
- Body: regular weight, light gray (`#f0f0f0`) on black

## Components
- **Buttons**: 5px border-radius, `rgba(43, 108, 176, 0.5)` fill, `rgba(35, 90, 146, 0.5)` on hover, gray + `not-allowed` cursor when disabled
- **Panels** (header/section/footer): 10px border-radius, translucent black background (`rgba(0,0,0,0.55)`)
- **Form inputs**: `#3a3a3a` fill, 5px border-radius, 1px `#555` border
- **Links**: neon green, lighten to `#8cff6b` on hover
