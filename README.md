# QA Portfolio — React (Vite) + Tailwind + Framer Motion

Modern one-page portfolio for a Senior QA Engineer. Clean, minimal, senior-level look with soft gradient background and glassmorphism on skills and project cards only.

## Tech stack

- **React 18** (Vite)
- **Tailwind CSS**
- **Framer Motion** (scroll animations: fade-in + slight upward, 0.5–0.8s, no flashy effects)

## Run locally

```bash
cd portfolio-react
npm install
npm run dev
```

Open the URL shown in the terminal (e.g. http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Sections

1. **Hero** — Name, title, subtitle, Download Resume / LinkedIn / GitHub, fade-in on load  
2. **About** — Short professional summary  
3. **Skills** — 4 categories in glassmorphism cards (Testing, Automation, API & Tools, AI Testing)  
4. **Projects** — 2 case-style cards (Insurance Web App, AI Chatbot Testing)  
5. **Automation Framework** — POM, parallel execution, reporting + GitHub placeholder  
6. **Certifications** — ISTQB CTFL, ISTQB CT-GenAI (100%)  
7. **Contact** — Email, LinkedIn, GitHub  

## Customize

- **Resume link:** Update the "Download Resume" `href` in `src/components/Hero.jsx`
- **GitHub framework link:** Update the "View on GitHub" `href` in `src/components/AutomationFramework.jsx`
- **Accent color:** Edit `tailwind.config.js` → `theme.extend.colors.accent`

## Design

- White / soft gradient background (`from-slate-50 to-white`)
- Teal accent (`#0d9488`)
- Glassmorphism only on skills and project cards: `backdrop-blur`, subtle border, soft shadow
- Rounded-xl cards, professional typography (Inter), fully responsive
