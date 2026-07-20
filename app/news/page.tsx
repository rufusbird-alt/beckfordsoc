import type { Metadata } from "next";
import Image from "next/image";

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
            New Publications &nbsp;·&nbsp; 2026
          </p>
          <h2 className="heading-display text-xl text-ink mb-4">
            Some New Beckford Publications
          </h2>

          <div className="space-y-8">
            <div>
              <p className="text-sm text-ink leading-snug mb-3">
                <span className="font-semibold">William Beckford,</span>{" "}
                <em>Sogni, visioni e accadimenti in una serie di lettere da varie parti d&apos;Europa</em>{" "}
                translated and edited by Daniele Niedda.
              </p>
              <p className="text-ink-soft leading-relaxed mb-3 text-sm">
                When William Beckford returned from his first Grand Tour he wrote to his tutor
                John Lettice: &lsquo;I am extremely impatient to look over my Italian Journey
                and will do my best to make it worth looking at … You know I have set my heart
                on the success of my book and shall not at all relish its being only praised as
                a lively, picturesque excursion&rsquo;. The volume was finished in the winter
                of 1782–3 after his second tour, printed as <em>Dreams, Waking Thoughts and
                Incidents</em> in March 1783 and suppressed on publication, with only a handful
                of copies surviving. Over fifty years later, Beckford published a revised
                edition in <em>Italy; with Sketches of Spain and Portugal</em> (1834).
              </p>
              <p className="text-ink-soft leading-relaxed mb-3 text-sm">
                Modern editions of <em>Dreams</em> were published by Robert J. Gemmett (1971
                and 2006), with translations in French by Roger Khan (1988–9) and Dutch by
                Gerlof Janzen (1991). Now, Daniele Niedda has translated Beckford&apos;s
                travels into Italian, together with an introduction and 42 illustrations from
                the watercolours and drawings of John Robert Cozens, the artist who accompanied
                Beckford on his second tour.
              </p>
              <p className="text-ink-soft leading-relaxed mb-3 text-sm">
                Daniele Niedda is Vice-President of the Beckford Society. He teaches at the
                Università degli Studi Internazionali, Rome, and has published extensively on
                travel literature and eighteenth-century English aesthetics.
              </p>
              <div className="bg-parchment-dim px-5 py-3 text-xs text-ink-soft space-y-1">
                <p><span className="font-semibold text-ink">Publisher:</span> Mucchi editore, Modena</p>
                <p><span className="font-semibold text-ink">ISBN:</span> 9791281716674</p>
                <p><span className="font-semibold text-ink">271 pp. &nbsp;€30</span></p>
              </div>
            </div>

            <hr className="border-parchment-dim" />

            <div>
              <p className="text-sm text-ink leading-snug mb-3">
                <span className="font-semibold">Dianne Barre,</span>{" "}
                <em>The Social Life of a Georgian Novelist: Elizabeth Hervey and her Journals.</em>
              </p>
              <p className="text-ink-soft leading-relaxed mb-3 text-sm">
                William Beckford&apos;s half-sister was twelve years older than her brother.
                She read stories to him and introduced him to foreign literature. Theirs became
                a competitive relationship when Elizabeth became a novelist, and after a quarrel
                in 1798 they never met again.
              </p>
              <p className="text-ink-soft leading-relaxed mb-3 text-sm">
                Her journals were stored away for 200 years. Now, Dianne Barre vividly reveals
                the life and times of Elizabeth Hervey, whose journals give a revealing account
                of Beckford and a fascinating view of numerous personalities of late Georgian
                and Regency society.
              </p>
              <div className="bg-parchment-dim px-5 py-3 text-xs text-ink-soft space-y-1">
                <p><span className="font-semibold text-ink">Publisher:</span> Fonthill</p>
                <p><span className="font-semibold text-ink">ISBN:</span> 978-1-03615-635-0</p>
                <p><span className="font-semibold text-ink">Hardback. 240 pp. &nbsp;£25</span></p>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="/news/new books.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
            >
              Download notices (PDF) ↗
            </a>
          </div>
        </article>

        <article className="border-l-2 border-[color:var(--color-gilt)] pl-6">
          <p className="eyebrow text-xs text-fog mb-1">
            Annual General Meeting &nbsp;·&nbsp; 4 July 2026
          </p>
          <h2 className="heading-display text-xl text-ink mb-3">
            AGM 2026 — Bath
          </h2>

          <figure className="mb-6">
            <Image
              src="/news/nautilus1.jpg"
              alt="Silver-gilt-mounted nautilus shell-cup, Holburne Museum"
              width={600}
              height={450}
              className="w-full h-auto"
            />
            <figcaption className="text-xs text-fog italic mt-2">
              Silver-gilt-mounted nautilus shell-cup, the shell incised with Chinese processional scene, c. 1580–90. Schroder collection, Holburne Museum, Bath.
            </figcaption>
          </figure>

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
              href="/news/agm2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
            >
              View Agenda (PDF) ↗
            </a>
            <a
              href="/news/BECKFORD-SOCIETY-agm-attendance.pdf"
              download
              className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
            >
              Download Attendance Form (PDF) ↓
            </a>
          </div>
        </article>
      </div>
    </div>
  );
}
