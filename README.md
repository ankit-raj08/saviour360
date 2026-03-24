# Saviour360 — Landing Page

VR-powered real estate virtual tours landing page built with React + Vite + Tailwind CSS.

---

## Project Structure

```
saviour360/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.jsx              # React entry point
    ├── App.jsx               # Root — mounts Navbar, Home, Footer
    │
    ├── pages/
    │   └── Home.jsx          # Composes all sections in order
    │
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.jsx    # Fixed top nav with scroll behaviour
    │   │   └── Footer.jsx    # Footer with links
    │   │
    │   ├── sections/
    │   │   ├── HeroSection.jsx         # Canvas particle hero
    │   │   ├── StatsBar.jsx            # 4-stat metrics row
    │   │   ├── FeaturesSection.jsx     # 6-card feature grid
    │   │   ├── HowItWorksSection.jsx   # Auto-cycling 4-step process
    │   │   ├── ToursSection.jsx        # 3 tour preview cards
    │   │   ├── TestimonialsSection.jsx # Auto-cycle testimonials
    │   │   ├── PricingSection.jsx      # 3-tier pricing
    │   │   └── CTASection.jsx          # Final call-to-action
    │   │
    │   └── ui/
    │       ├── Button.jsx        # primary / outline variants
    │       ├── Badge.jsx         # pill chip labels
    │       └── SectionHeader.jsx # reusable section heading
    │
    ├── hooks/
    │   └── index.js          # useScrolled, useAutoCycle, useInView
    │
    ├── constants/
    │   └── index.js          # All static data (nav, features, plans…)
    │
    └── styles/
        └── globals.css       # CSS variables, animations, reset
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

- **React 18** — UI
- **Vite 5** — Dev server & bundler
- **Tailwind CSS 3** — Utility classes (extend as needed)
- **Google Fonts** — Cormorant Garamond + DM Sans

---

## Design Tokens

All design tokens live in `src/styles/globals.css` as CSS variables:

| Token | Value |
|---|---|
| `--color-gold` | `#f0a500` |
| `--color-orange` | `#ff6b35` |
| `--color-bg` | `#04040e` |
| `--font-display` | Cormorant Garamond |
| `--font-body` | DM Sans |

---

## Adding a New Section

1. Create `src/components/sections/YourSection.jsx`
2. Add any static data to `src/constants/index.js`
3. Import and render it in `src/pages/Home.jsx`
