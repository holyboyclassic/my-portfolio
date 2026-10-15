# Anuoluwa — Junior Frontend Developer

A responsive, single-page portfolio made with React, JavaScript, and Vite. The workspace-level `folio.jsx` re-exports the portfolio component from this app.

## Run locally

From this `folio` directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite. To check a production build:

```sh
npm run build
npm run preview
```

## Personalise before publishing

- In `src/App.jsx`, replace the empty `email`, `github`, and `linkedin` constants near the top with your real contact details. Email automatically becomes a `mailto:` link when set.
- Replace each project's clearly labelled live-preview and GitHub placeholders only when you have the real URLs. The Oja and CCC project technology stacks are marked “Stack to confirm” because project source files were not provided.
- The profile photo is stored at `src/assets/anuoluwa.jpeg`. Replace it with your preferred portrait while keeping the imported filename or updating the import in `src/App.jsx`.
- The project cards currently use small CSS-built illustrations, not screenshots of completed work. To use your own screenshots, put image files in `src/assets/` and replace the corresponding `<ProjectPreview />` content in `src/App.jsx` with an `<img src={...} alt="..." />`; use meaningful alternative text and keep the preview aspect ratio.

## Project structure

- `../folio.jsx` — workspace-level re-export of the portfolio component.
- `src/App.jsx` — portfolio content and reusable React components: `Header`, `SectionHeading`, `ProjectPreview`, `ProjectCard`, `ContactLink`, and `Footer`.
- `src/main.jsx` — React DOM entry point; mounts the portfolio in `StrictMode` and loads the stylesheet.
- `src/app.css` — dark theme, responsive layouts, typography, project illustrations, interaction states, and reduced-motion support.
- `index.html` — Vite HTML entry point, document title, theme color, and search description.
- `vite.config.js` — Vite configuration with the React plugin.
- `public/favicon.svg` — browser tab icon.
- `package.json` and `package-lock.json` — npm scripts and locked dependencies.

## How it works

The page is composed from reusable React components and data arrays for project cards and skill badges. Navigation uses in-page anchors with smooth scrolling; the mobile menu uses React state and closes when a navigation item is selected. Contact and social details are intentionally placeholders until real URLs are supplied. Responsive CSS adjusts the navigation, hero, project grid, skills, and contact panel for small screens, and respects the visitor's reduced-motion preference.

## Deploy to Vercel

1. Push this project to a Git provider.
2. In Vercel, import the repository and set the **Root Directory** to `folio`.
3. Use `npm run build` as the build command and `dist` as the output directory. Vercel detects Vite automatically.
4. Deploy. No environment variables are required for this static portfolio.

You can also install the Vercel CLI and deploy from this folder with `npx vercel`, then use `npx vercel --prod` for production.
