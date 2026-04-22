# Publishing the William Beckford page (and the rest of the site)

This is the end-to-end checklist to get the site live on the public web via Vercel. Run from VS Code's terminal inside the `Beckford Society Website` folder.

## 1. Install the new dependencies

I just added two packages for the William Beckford page:

- `next-mdx-remote` — renders MDX content from `/content/pages/*.mdx`
- `remark-gfm` — adds GitHub-flavoured-markdown table support

Install them:

```bash
npm install
```

## 2. Run the site locally to verify

```bash
npm run dev
```

Open <http://localhost:3000> and check:

- Home page loads, portrait renders.
- Top-nav link "William Beckford" works and the page loads at <http://localhost:3000/william-beckford>.
- Chronology renders cleanly; the compensation table has four rows and a clear total.
- A subtle "Draft" notice appears at the top (because `status: draft` is set in the MDX frontmatter). Remove it once the Society has signed the content off — see step 6.

Stop the dev server when done: `Ctrl+C`.

## 3. Commit the changes to Git

If Git isn't initialised yet:

```bash
git init
git add .
git commit -m "Add William Beckford page + sitewide header/footer links"
```

If it is initialised and you've committed before:

```bash
git add .
git commit -m "Add William Beckford page (LBS-sourced chronology + compensation records)"
```

## 4. Push to GitHub

If the remote isn't set yet, create a new (private) repo on GitHub — call it e.g. `beckford-society-website` — and then:

```bash
git remote add origin git@github.com:YOUR-USERNAME/beckford-society-website.git
git branch -M main
git push -u origin main
```

If the remote is already set, just:

```bash
git push
```

## 5. Deploy on Vercel

First time only:

1. Go to <https://vercel.com/new>.
2. Click **Import** next to the `beckford-society-website` repo.
3. Framework preset: Next.js (auto-detected).
4. Environment variables: leave blank for now (Stripe keys come later; WP migration runs only locally).
5. Click **Deploy**.

Within ~90 seconds you'll have a URL like `beckford-society-website.vercel.app`. Every future `git push` to `main` auto-deploys to that URL.

When you're ready to point `beckfordsociety.org` at Vercel, add the domain in the Vercel project's **Settings → Domains** and update the DNS at your registrar following Vercel's instructions. That is the actual "cutover" — the existing WordPress site keeps running until you make the DNS change.

## 6. Remove the "Draft" banner when the page is approved

Open `content/pages/william-beckford.mdx` and change the frontmatter from:

```yaml
status: draft
```

to:

```yaml
status: published
```

Save, commit, push. The banner disappears.

## What I still need from you

- **Society contact email** — for the footer, for Stripe receipts, for the membership form.
- **Domain registrar access** — whoever registered `beckfordsociety.org`. Only needed at cutover.
- **Stripe details** — when you're ready to set up Stripe and decide on membership tiers.
- **Image credits and alt text** — each gallery image should ideally have a caption and credit. I'll scaffold the gallery page once you confirm how you'd like captions stored.
