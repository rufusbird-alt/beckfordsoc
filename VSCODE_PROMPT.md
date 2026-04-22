# Prompt to paste into VS Code (Claude Code / Copilot Chat / Cursor)

Copy everything between the ruled lines below and paste it into your VS Code AI assistant. Run it from inside the `Beckford Society Website` folder.

If you see the files already (because Cowork has been scaffolding into this same folder), this prompt is idempotent — the assistant will skip files that exist and only fill gaps.

---

You are helping me build a new website for **The Beckford Society** (beckfordsociety.org) to replace an old WordPress site. Decisions are locked; do not deviate or propose alternatives.

## Stack (locked)

- Next.js 15 (App Router) + TypeScript
- Tailwind CSS 4 (CSS-based `@theme` config, no `tailwind.config.ts`)
- MDX for all page content (via `@next/mdx`)
- **No CMS.** Content lives as MDX/JSON files in the repo and is edited in VS Code.
- Hosting: Vercel. Source: GitHub. Payments: Stripe (added later).
- Node 22, npm.

## Content rules (critical)

- **Never invent, embellish, or paraphrase copy.** Every page's text must come from (a) the existing WordPress site at beckfordsociety.org (migrated later), or (b) text I give you directly. Where copy is missing, leave a clearly-marked `<!-- TODO: copy -->` placeholder and stop.
- Preserve British English spelling throughout.

## Design direction

Dramatic, gothic, Fonthill-inspired. Not restrained academic. Palette:
- parchment `#F4EFE6`, parchment-dim `#E8E0D2`
- ink `#1A1612`, ink-soft `#3B342B`
- oxblood `#5C1A1B`, oxblood-dark `#3F1112`
- gilt `#9B7A3A`, gilt-soft `#C6A865`

Typography: **Cormorant Garamond** for display, **Inter** for body. Both via `next/font/google`.

## Folder structure to create (skip any that exist)

```
Beckford Society Website/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    Home (hero carousel + sections)
│   ├── globals.css                 Tailwind 4 + @theme tokens
│   ├── william-beckford/page.tsx
│   ├── about/page.tsx
│   ├── journal/page.tsx
│   ├── newsletters/page.tsx
│   ├── publications/page.tsx
│   ├── gallery/page.tsx
│   ├── news/page.tsx
│   ├── news/[slug]/page.tsx        individual news articles
│   └── join/page.tsx
├── components/
│   ├── Header.tsx                  sticky top nav, mobile hamburger
│   ├── Footer.tsx                  includes Links section from data/links.json
│   ├── Hero.tsx                    home carousel
│   └── MDXContent.tsx              loads content/pages/*.mdx
├── content/
│   ├── pages/
│   │   ├── william-beckford.mdx
│   │   ├── about.mdx
│   │   ├── journal.mdx
│   │   ├── newsletters.mdx
│   │   ├── publications.mdx
│   │   ├── gallery.mdx
│   │   └── join.mdx
│   └── news/                       one .mdx per news article (created by migration)
├── data/
│   ├── links.json                  footer Links section
│   ├── journal.json                list of issues with PDF paths
│   ├── newsletters.json
│   ├── publications.json
│   ├── gallery.json                list of gallery items with image paths + captions
│   └── nav.json                    nav items (used by Header + Footer)
├── lib/
│   ├── content.ts                  helpers to load MDX from content/
│   └── seo.ts                      metadata helpers
├── public/
│   ├── images/
│   │   ├── hero/                   home carousel images
│   │   ├── william-beckford/
│   │   ├── gallery/                Gallery of Pictures
│   │   └── migrated/               (from WP)
│   ├── pdfs/
│   │   ├── journal/                Beckford Journal issues
│   │   ├── newsletters/
│   │   └── publications/
│   └── favicon.ico
├── scripts/
│   └── migrate-wp.mjs              pulls content from beckfordsociety.org via WP REST API
├── mdx-components.tsx              global MDX typographic overrides
├── next.config.mjs                 MDX + remote image domains
├── postcss.config.mjs              Tailwind 4 plugin
├── tsconfig.json
├── package.json
├── .env.example
├── .gitignore
└── README.md
```

## Acceptance criteria

1. `npm install` then `npm run dev` serves the site on http://localhost:3000 with no errors.
2. All nine pages render with placeholder MDX that says "Copy to be migrated from WordPress" — no fabricated Beckford content.
3. Header nav links to all nine pages. Footer renders Links from `data/links.json` (seed with an empty array — I'll fill later).
4. No ESLint / TypeScript errors on build (`npm run build`).
5. Do not commit `node_modules` or `.env.local`.

## After you finish

Print a single-screen summary of:
- files created
- any files skipped because they already existed
- anything I still need to supply (e.g. hero images, Stripe keys, membership tier details)

Then stop and wait for me.

---

## Meanwhile, start loading images

While the assistant scaffolds, you can start dropping files:

- **Home carousel images** → `public/images/hero/` (3–6 dramatic landscape images, long edge ~2400–3000px)
- **Gallery images** → `public/images/gallery/` (any number; add a matching `.txt` file alongside each for caption + credit if you have them)
- **William Beckford portraits / Fonthill imagery** → `public/images/william-beckford/`
- **Journal PDFs** → `public/pdfs/journal/` named `beckford-journal-YYYY-NN.pdf`
- **Newsletter PDFs** → `public/pdfs/newsletters/` named `newsletter-YYYY-MM.pdf`
- **Publication PDFs** → `public/pdfs/publications/`

Filenames: lower-case, hyphens, no spaces, no capitals. Next.js image optimisation handles everything else.
