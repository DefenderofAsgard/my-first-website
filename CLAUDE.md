# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Austin Simpson's personal/portfolio site — a single static HTML page (no framework, no build step, no package manager). Deployed via GitHub Pages from `DefenderofAsgard/my-first-website`; pushes to `main` go live at that Pages URL.

## Running locally

There is no build/dev/test/lint tooling in this repo — it's plain HTML/CSS/JS. To preview:

- Open `index.html` directly in a browser, or
- Serve the folder (`python3 -m http.server`) if you need to test anything that behaves differently over `file://` vs `http://`

Note: the page detects `file:` protocol (`location.protocol === 'file:'`) and adds an `is-local` class to `<html>` — some CSS/behavior may differ when opened directly as a file vs. served.

## Structure

- `index.html` — the entire site: header, About, portfolio, pricing (collapsible `<details>` tiers with an "Expand All" toggle), a gated resume-download form, and a contact form.
- `style.css` — all styling.
- `script.js` — form submission handling (see below) and the pricing "Expand All / Collapse All" toggle.
- `matrix-rain.js` — canvas-based Matrix-style rain background effect, self-contained.
- `STYLE.md` — the source-of-truth style guide (color palette, typography, logo variants, component styles). **Read this before making any visual/design change** — the site's look (neon green on black, monospace/terminal theme) is deliberate and documented there.
- `logo.svg`, `logo-triangle-blank.svg`, `logo-rainbow-circle-backup.svg` — logo and saved variants (see STYLE.md for which is live).
- `resume.pdf` — gated behind the resume-unlock form.

## Forms and data flow

Both forms on the page (`#contact-form`, `#resume-form`) follow the same pattern in `script.js`:

1. POST to a Formspree endpoint (each form has its own endpoint ID — see the constants at the top of `script.js`) for email delivery.
2. On success, also fire-and-forget POST the form data to a Google Apps Script web app URL (`APPS_SCRIPT_URL`) via `logToSheet()`, which logs submissions to a Google Sheet. This call is not awaited and errors are swallowed — it must never block or fail the user-facing submission flow.
3. UI state (button text, success/error message visibility) is handled per-form with disabled/loading states.

If asked to add a new form, follow this same three-step pattern rather than inventing a new one.

## Deployment

Site is served by GitHub Pages directly from the repo — there's no separate build/deploy step. Merging/pushing to the default branch is the deploy.
