# MERN Developer Portfolio

Bold, motion-heavy portfolio UI built with React, Vite, Tailwind CSS and Framer Motion,
organized with atomic design.

## Run it

```bash
npm install
npm run dev
```

Open the printed localhost URL. `npm run build` produces a production build in `dist/`.

## Structure (atomic design)

```
src/
  components/
    atoms/        Button, Logo, NavLink, Tag, SectionLabel, MarqueeText, Cursor, GrainOverlay, IconLink
    molecules/     NavBar, ProjectRow, StatBlock, SocialLinks, StackGroup
    organisms/     Header, Hero, WorkSection, StackSection, AboutSection, ContactSection, Footer
    templates/     PortfolioTemplate  (composes every organism into the page layout)
  pages/
    HomePage.jsx   (feeds real data into PortfolioTemplate)
  data/
    content.js     (all placeholder copy — projects, stack, bio, stats, socials)
```

Atoms never import from molecules/organisms. Molecules only import atoms. Organisms only
import atoms + molecules. The template only composes organisms and knows nothing about
where the data comes from — HomePage is the only file that imports `data/content.js`.

## Swap in your real content

Everything you need to change lives in one file: `src/data/content.js`.
Replace the placeholder name, bio, stats, project entries, stack list, socials and email.
Project images currently point to Unsplash placeholders — swap for real screenshots.

## Design notes

- Palette: near-black ink background, bone off-white text, a molten orange-red
  signal color for accents/links, acid lime reserved for hover states.
- Type: Space Grotesk for display headlines, Inter for body copy, JetBrains Mono
  for labels, nav, tags and eyebrows (nods to a developer's terminal/code voice).
- Motion: staggered line-reveal hero, infinite marquee of stack tags, a project list
  where a preview thumbnail follows the cursor on hover, scroll-based header blur.
- A custom two-part cursor (dot + lagging ring) replaces the system cursor on desktop
  and swells on interactive elements; it's automatically disabled on touch devices.
- Respects `prefers-reduced-motion` by disabling animations and marquee scroll.
