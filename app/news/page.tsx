import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, events, and announcements from the Beckford Society.",
};

export default function NewsPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">News &amp; Announcements</h1>
      <hr className="rule-gilt my-6" />

      <div className="space-y-10">
        <article className="border-l-2 border-[color:var(--color-gilt)] pl-6">
          <p className="eyebrow text-xs text-fog mb-1">
            Annual General Meeting &nbsp;·&nbsp; 4 July 2026
          </p>
          <h2 className="heading-display text-xl text-ink mb-3">
            AGM 2026 — Bath
          </h2>
          <p className="text-ink-soft leading-relaxed mb-4">
            The Annual General Meeting of the Beckford Society will be held on
            Saturday 4 July 2026 at the Holburne Museum, Great Pulteney Street,
            Bath BA2 4DB. Members wishing to submit items for the agenda should
            contact the Secretary.
          </p>
          <div className="bg-parchment-dim px-5 py-4 text-sm text-ink-soft space-y-2 mb-4">
            <p>
              <span className="font-semibold text-ink">Venue:</span> Holburne
              Museum, Great Pulteney Street, Bath BA2 4DB
            </p>
            <p>
              <span className="font-semibold text-ink">Date:</span> Saturday 4
              July 2026
            </p>
          </div>
          <div className="flex flex-wrap gap-6 mt-4">
            <a
              href="/news/AGM2026-agenda.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
            >
              View Agenda (PDF) ↗
            </a>
            <a
              href="/news/BECKFORD-SOCIETY-AGM-2026-form.pdf"
              download
              className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
            >
              Download Notification Form (PDF) ↓
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
