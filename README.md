# Minimal Portfolio (React + Tailwind + Framer Motion)

A sleek personal portfolio inspired by Apple-style minimalism: calm typography, generous whitespace, subtle motion, and clean information hierarchy.

## Highlights

- React functional components and hooks
- Tailwind CSS styling with reusable design utility classes
- Framer Motion micro-interactions and section reveal animations
- Dark/light theme with local storage persistence
- Smooth scrolling navigation and accessibility-first focus states
- Responsive, mobile-first layout

## Project Structure

```text
Portfolio/
  src/
    components/
      Footer.jsx
      LoadingScreen.jsx
      Navbar.jsx
    hooks/
      useTheme.js
    motion/
      variants.js
    sections/
      About.jsx
      Contact.jsx
      Experience.jsx
      Hero.jsx
      Projects.jsx
      Skills.jsx
    App.jsx
    index.css
    main.jsx
  tailwind.config.js
  package.json
```

## Setup

```bash
npm install
```

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Lint

```bash
npm run lint
```

## Docker

Build image:

```bash
docker build -t portfolio-app .
```

Run container on `http://localhost:8080`:

```bash
docker run --rm -p 8080:80 portfolio-app
```

## Design Notes

- Palette: neutral black/white/grayscale with restrained contrast changes
- Typography: large, bold headlines + quiet supporting text
- Motion: soft fade-up transitions and low-amplitude loading animation
- Components: reusable button/input/section primitives in `src/index.css`

## Accessibility

- Skip link for keyboard navigation
- `:focus-visible` ring treatment for interactive controls
- Semantic sectioning and descriptive labels on icon-only actions
- Motion respects system preference via `useReducedMotion`

## Typography Pairing Suggestions

1. SF Pro Display + SF Pro Text (best Apple-like feel on Apple devices)
2. Inter + Source Sans 3 (cross-platform neutral and readable)
3. Manrope + Inter (clean geometric headline + practical body)

## Apple-Style Improvement Ideas

1. Replace placeholder project links with polished case studies and real metrics.
2. Add high-quality monochrome imagery with strict aspect-ratio consistency.
3. Introduce a tiny custom cursor/focus effect while preserving accessibility.
4. Add a lightweight CMS or JSON content layer for easier future updates.
5. Integrate real form submission (EmailJS or backend endpoint).
