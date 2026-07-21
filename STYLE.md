# Style Guide — Austin Simpson Web Dev

## Logo
`logo.svg` — a bold white capital "A" set in Courier New (monospace, code-themed), centered inside six concentric neon rainbow rings (violet `#bc13fe` / blue `#1f51ff` / green `#39ff14` / yellow `#ffff33` / orange `#ff5f1f` / red `#ff073a`, outer to inner; widths 4/2/1/0.5/0.25/0.125, each half the last; radii chosen so the visible black gap between each ring's edges is a constant 2px, compensating for the varying stroke widths) on a black circle. Used as the site favicon and in the header. Scales cleanly since it's SVG — no separate sizes needed.

## Color Palette

| Name | Hex | Use |
|---|---|---|
| Background | `#000000` | Page background |
| Panel | `rgba(0, 0, 0, 0.55)` | Header / section / footer translucent panels |
| Primary (Royal Blue) | `#4169e1` | Headings, links, logo, hover accents |
| Button Blue | `#2b6cb0` | Buttons |
| Button Blue (hover) | `#235a92` | Button hover state |
| Text | `#f0f0f0` | Body text |
| Muted Text | `#cccccc` | Footer text, secondary links |
| Border | `#444444` / `#555555` | Dividers, input borders |
| Caution Yellow | `#f5c518` | Under-construction banner stripes |
| Error Red | `#ff8080` | Form error messages |

## Typography
- Font: Arial / system sans-serif (no custom font loaded — keeps the site fast)
- Headings: bold, primary blue (`#4169e1`)
- Body: regular weight, light gray (`#f0f0f0`) on black

## Components
- **Buttons**: 5px border-radius, `#2b6cb0` fill, `#235a92` on hover, gray + `not-allowed` cursor when disabled
- **Panels** (header/section/footer): 10px border-radius, translucent black background (`rgba(0,0,0,0.55)`)
- **Form inputs**: `#3a3a3a` fill, 5px border-radius, 1px `#555` border
- **Links**: royal blue, lighten to `#7b93ea` on hover
