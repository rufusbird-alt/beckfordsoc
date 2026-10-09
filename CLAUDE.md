# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The Beckford Society website (www.beckfordsociety.org), a Next.js 16 App Router site in TypeScript with Tailwind CSS 4. It replaced the Society's old WordPress site. There is no CMS, no database and no backend: all content is in the repo.

## Commands

```bash
npm install      # node_modules is not checked in
npm run dev      # http://localhost:3000
npm run build    # production build; use this to check for type and build errors
npm run lint     # next lint
```

There are no tests. `npm run migrate:wp` is defined in `package.json`, but `scripts/migrate-wp.mjs` does not exist.

## Deployment and workflow

- Vercel deploys automatically on every push to `main` on GitHub (`rufusbird-alt/beckfordsoc`). Pushing to `main` publishes to the live site.
- Commits are sometimes made through the GitHub web UI, so run `git pull` before starting work.
- Show the diff and get approval before committing, and again before pushing.
- `middleware.ts` 301-redirects any `*.vercel.app` host to `www.beckfordsociety.org`. Old WordPress URLs are redirected in `next.config.mjs`.
- `DEPLOY.md` covers the original Vercel setup and domain switch-over. It is partly out of date: it mentions `next-mdx-remote`, which is not installed.

## Where content lives

Most page text is written directly into each page's `app/<route>/page.tsx`, often as arrays at the top of the file:

- `app/journal/page.tsx`: `volumes` (the contents of each volume) and `availableVols` (the volumes that have a PDF). The year shown is calculated as `1994 + vol`.
- `app/newsletters/page.tsx`: a list of newsletter PDF filenames. The issue number is parsed from each filename, and issues are sorted newest first.
- `app/publications/page.tsx`: `lectureVolumes`.
- `app/about/page.tsx`: the Society's objectives, officers and committee.
- `app/news/page.tsx`: news items, one hand-written `<article>` per item. New items go at the **top**. Never delete older items.
- `app/william-beckford/page.tsx`: the chronology, held in an inline array. `content/pages/william-beckford.mdx`, `lib/content.ts` and `components/DraftBanner.tsx` are an earlier MDX version of the same page and are not used by any route.

Other content files:

- **PDFs**: Journal volumes, newsletters, the membership form and *Fonthill Fever* are hosted on pCloud. Their share URLs are in `lib/pcloudLinks.ts`. Each Journal and Newsletter download button links to the pCloud **folder**, not to an individual PDF. Small one-off files, such as news-item PDFs and images, go in `public/news/`.
- **Gallery**: `data/gallery.json` holds `{ file, caption, description, category, creditUrl? }`. `file` is relative to `public/images/gallery/`, and some folder names contain spaces (`fonthill abbey/`). The categories are `portraits`, `fonthill` and `bath`. Gallery captions are edited here.
- **Navigation**: the header and footer each have their own hard-coded link list, in `components/Header.tsx` and `components/Footer.tsx`. `data/nav.ts` and `data/links.json` are not used. When adding a page, update both components and `app/sitemap.ts`.

## Styling

Design tokens are defined in `@theme` in `app/globals.css`. The colours are parchment, ink, oxblood, gilt and fog, plus `-dim`, `-soft` or `-dark` variants. There is no `tailwind.config`. The same file defines shared classes: `container-prose`, `container-wide`, `heading-display`, `eyebrow` and `rule-gilt`.

Pages follow a common opening: an `eyebrow` label reading "The Beckford Society", then an `h1.heading-display`, then `hr.rule-gilt`. The fonts are Cormorant Garamond (display) and Inter (body), loaded with `next/font` in `app/layout.tsx`.

## Content rules

- Never invent, embellish or paraphrase Society copy. Text must come from the Society's existing material or be supplied by the user. If copy is missing, leave a clear TODO rather than writing it.
- Use British English throughout.
