import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News",
  description:
    "Latest news, events, and announcements from the Beckford Society.",
};

const newsItems = [
  {
    date: "3 July 2026",
    category: "Annual General Meeting",
    title: "AGM 2026 — Bath",
    body: "The Annual General Meeting of the Beckford Society will be held on 3 July 2026 in Bath. Further details, including the venue and agenda, will be circulated to members in due course. Members wishing to submit items for the agenda should contact the Secretary.",
  },
];

export default function NewsPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">News &amp; Announcements</h1>
      <hr className="rule-gilt my-6" />

      <div className="space-y-10">
        {newsItems.map((item) => (
          <article
            key={item.title}
            className="border-l-2 border-[color:var(--color-gilt)] pl-6"
          >
            <p className="eyebrow text-xs text-fog mb-1">
              {item.category} &nbsp;·&nbsp; {item.date}
            </p>
            <h2 className="heading-display text-xl text-ink mb-3">
              {item.title}
            </h2>
            <p className="text-ink-soft leading-relaxed">{item.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
