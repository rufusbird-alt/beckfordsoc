import Link from "next/link";

export const metadata = {
  title: "Society Publications",
  description:
    "Books, essays, and special editions published by or in association with the Beckford Society.",
};

const lectureVolumes = [
  {
    years: "1996–1999",
    pages: 80,
    price: "£6",
    isbn: "0-9537836-0-X",
    lectures: [
      {
        author: "John Wilton-Ely",
        title: "Beckford's Fonthill Abbey: A Theatre of the Arts",
      },
      {
        author: "João de Almeida Flor",
        title:
          "Portuguese Tears and Treasures: On Beckford's Literary Fortune",
      },
      {
        author: "William Hauptman",
        title: "William Beckford as Connoisseur and Collector",
      },
      {
        author: "Michel Baridon",
        title: "From Beckford to Mallarmé: The tradition of L'Art pour l'Art",
      },
    ],
  },
  {
    years: "2000–2003",
    pages: 88,
    price: "£6",
    isbn: "0-9537836-2-6",
    lectures: [
      {
        author: "Kevin L. Cope",
        title: "How Beckford Keeps Making Himself Relevant",
      },
      {
        author: "Edward Chaney",
        title:
          "Gibbon, Beckford and the Interpretations of Dreams, Waking Thoughts, and Incidents",
      },
      {
        author: "Kenneth W. Graham",
        title:
          "Between Restriction and Ostracism: William Beckford's Rebellious Episodes of Vathek",
      },
      {
        author: "Mirella Billi",
        title:
          "The Impact of Italy on Beckford's Taste, Aesthetics and Literary Style",
      },
    ],
  },
  {
    years: "2004–2006",
    pages: 72,
    price: "£6",
    isbn: "978-0-9537836-4-9",
    lectures: [
      {
        author: "David Watkin",
        title: "Thomas Hope, Designer, Collector, Patron",
      },
      {
        author: "Kim Sloan",
        title: "'Amusements of solitude' and 'talismans of transport'",
      },
      {
        author: "Rictor Norton",
        title: "Oddities, Obituaries and Obsessions",
      },
    ],
  },
  {
    years: "2007–2010",
    pages: 96,
    price: "£7",
    isbn: "978-0-9537836-5-6",
    lectures: [
      {
        author: "Bet McLeod",
        title:
          "Family Connections: from Fonthill Abbey and Bath to Hamilton Palace",
      },
      {
        author: "Daniele Niedda",
        title:
          "Vathek's footprints; Beckford's Entry into the Italian Literary Canon",
      },
      {
        author: "Perry Gauci",
        title: "William Beckford and the City of London",
      },
      {
        author: "Peter Sabor",
        title: "Modern Novel Writing and Azemia",
      },
    ],
  },
];

export default function PublicationsPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">Society Publications</h1>
      <hr className="rule-gilt my-6" />

      {/* Bibliography */}
      <section className="mb-14">
        <h2 className="heading-display text-2xl mb-4">
          William Beckford: A Bibliography
        </h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          An annotated listing of all known publications of his works, with many
          contemporary reviews. Beckford's novel <em>Vathek</em> has been
          published in some 165 editions in twenty languages since the first
          unauthorised edition of 1786.
        </p>
        <p className="text-ink-soft leading-relaxed mb-4">
          The bibliography encompasses printed works about Beckford's life and
          accomplishments, scholarly research, and his appearances in
          periodicals. It contains some 6,000 references to material published
          before 2006 and serves as a comprehensive reference for
          interdisciplinary Beckford scholarship.
        </p>
        <p className="text-ink-soft leading-relaxed mb-6">
          Compiled by Jon Millington, founding editor of{" "}
          <em>The Beckford Journal</em>, after four decades of research.
          He wrote the guide to Beckford's Tower, participated in the
          1976 William Beckford Exhibition, curated{" "}
          <em>Souvenirs of Fonthill Abbey</em> (1994), and prepared{" "}
          <em>William Beckford and his Circle in the Gentleman's Magazine</em>{" "}
          (2001).
        </p>
        <div className="bg-parchment-dim p-6 text-sm space-y-1">
          <p>
            <span className="font-semibold">Publisher:</span> The Beckford
            Society 2008
          </p>
          <p>
            <span className="font-semibold">ISBN:</span> 978-0-9537836-3-2
          </p>
          <p>
            <span className="font-semibold">Price:</span> £50
          </p>
          <p>
            <span className="font-semibold">US distribution:</span> Oak Knoll
            Press
          </p>
        </div>
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Beckford Lectures */}
      <section className="mb-14">
        <h2 className="heading-display text-2xl mb-3">Beckford Lectures</h2>
        <p className="text-ink-soft leading-relaxed mb-8">
          Four published collections of the Society's annual lectures are
          available. They may be obtained from the Society's Secretary, or by
          ordering in the UK at your usual bookshop. Lectures from 2011 are
          published in <em>The Beckford Journal</em>.
        </p>
        <div className="space-y-8">
          {lectureVolumes.map((vol) => (
            <div key={vol.years} className="border border-parchment-dim bg-parchment">
              <div className="flex items-start justify-between px-6 py-4 border-b border-parchment-dim">
                <div>
                  <p className="font-[family-name:var(--font-display)] text-xl text-ink">
                    Beckford Lectures {vol.years}
                  </p>
                  <p className="text-xs text-fog mt-0.5">
                    {vol.pages} pp &nbsp;·&nbsp; ISBN {vol.isbn}
                  </p>
                </div>
                <span className="eyebrow text-gilt shrink-0 ml-4">{vol.price}</span>
              </div>
              <ul className="px-6 py-4 space-y-2">
                {vol.lectures.map((l) => (
                  <li key={l.title} className="text-sm text-ink-soft leading-snug">
                    <span className="font-medium text-ink">{l.author}</span>
                    {" — "}
                    <em>{l.title}</em>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Conversations with Beckford */}
      <section className="mb-14">
        <h2 className="heading-display text-2xl mb-4">
          Conversations with Beckford
        </h2>
        <p className="text-ink-soft leading-relaxed">
          Shortly after William Beckford's death in May 1844, the{" "}
          <em>New Monthly Magazine</em> published a series of recollections by
          Cyrus Redding and others. This volume is a facsimile of these articles
          with an introduction and index by Jon Millington. ISBN
          978-0-9537836-6-3. £6.
        </p>
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Journal & Newsletters */}
      <section>
        <h2 className="heading-display text-2xl mb-4">
          The Beckford Journal &amp; Newsletters
        </h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          <em>The Beckford Journal</em> has been published since 1995 to fulfil
          the Society's aim of supporting Beckford studies and scholarship.
          Available volumes may be downloaded free of charge.
        </p>
        <div className="flex flex-wrap gap-6 mt-6">
          <Link
            href="/journal"
            className="eyebrow text-oxblood hover:text-oxblood-dark"
          >
            Browse the Journal →
          </Link>
          <Link
            href="/newsletters"
            className="eyebrow text-oxblood hover:text-oxblood-dark"
          >
            Browse Newsletters →
          </Link>
        </div>
      </section>
    </div>
  );
}
