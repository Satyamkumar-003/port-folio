# Satyam Kumar — Portfolio

Personal portfolio for **Satyam Kumar**, Java Backend Developer interning at BigBasket (Tata Group). Built with React, plain CSS (no UI library), and a small content-driven architecture so the site is easy to maintain.

[Live](https://satyamkumar.dev) · [Resume](./public/SatyamKumar_Backend_Resume.pdf)

---

## Stack

- React 18 + React Router 6
- Plain CSS with design tokens (custom properties)
- `@emailjs/browser` for the contact form
- `react-icons` for iconography
- Inter + JetBrains Mono via Google Fonts

## Project structure

```
src/
├── App.js                 # Routes + page composition
├── App.css                # App-level layout
├── index.css              # Design tokens, base styles, typography
├── data/
│   └── profile.js         # Single source of truth for all content
└── components/
    ├── Navbar.js / .css
    ├── Home.js / .css         # Hero
    ├── About.js / .css
    ├── Experience.js / .css   # Work timeline (replaces old Training section)
    ├── Projects.js / .css
    ├── Skills.js / .css
    ├── Education.js / .css
    ├── Certifications.js / .css
    ├── Contact.js / .css
    ├── Footer.js / .css
    └── CertificateViewer.js / .css
```

All copy — bio, role, experience, projects, skills, education, certifications — lives in `src/data/profile.js`. Edit that file to update the site; components are presentation-only.

## Getting started

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production bundle in /build
```

> The repo currently builds with Node ≥ 16 recommended. If you're on an older Node, run `DISABLE_ESLINT_PLUGIN=true npm run build`.

## Configuration

The contact form uses [EmailJS](https://www.emailjs.com/). Create a `.env.local` (never commit it) with:

```
REACT_APP_EMAILJS_SERVICE_ID=...
REACT_APP_EMAILJS_TEMPLATE_ID=...
REACT_APP_EMAILJS_PUBLIC_KEY=...
```

If these aren't set, the form shows a friendly message asking visitors to email directly.

## Design system

All visual constants live in `src/index.css` under `:root` — colors, spacing, typography, radius, shadows, container width. Change them once and the whole site updates.

| Token            | Value                          |
| ---------------- | ------------------------------ |
| `--bg-0`         | `#07080d`                      |
| `--accent`       | `#6ea8ff`                      |
| `--accent-2`     | `#8b7dff`                      |
| `--text-100`     | `#f5f7fa`                      |
| `--font-sans`    | Inter                          |
| `--font-mono`    | JetBrains Mono                 |
| `--container`    | `1180px`                       |

## Accessibility & performance

- Semantic landmarks (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Skip-to-content via in-page anchors and visible focus ring
- `prefers-reduced-motion` respected
- Lazy fonts via `preconnect`; only two font families
- No JS-heavy animation libs in the critical path
- Production gzipped JS ≈ 66 kB, CSS ≈ 5.4 kB

## Deployment

Drop the `build/` folder on Netlify, Vercel, GitHub Pages, or any static host. No server required.

---

Made by Satyam Kumar.
