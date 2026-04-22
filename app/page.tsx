import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "William Beckford",
    subtitle: "His Life & Chronology",
    href: "/william-beckford",
    description:
      "Author, traveller, collector, and builder — an introduction to one of the most remarkable figures of Regency England.",
  },
  {
    title: "About the Society",
    subtitle: null,
    href: "/about",
    description:
      "Founded in 1995 to promote research into all aspects of Beckford's life, writings, collections, and world.",
  },
  {
    title: "The Beckford Journal",
    subtitle: null,
    href: "/journal",
    description:
      "The Society's annual peer-reviewed journal, published since 1995. Browse and download all issues in PDF.",
  },
  {
    title: "Newsletters",
    subtitle: null,
    href: "/newsletters",
    description:
      "Society newsletters keeping members informed of events, discoveries, and publications.",
  },
  {
    title: "Society Publications",
    subtitle: null,
    href: "/publications",
    description:
      "Books, essays, and special editions published by or in association with the Beckford Society.",
  },
  {
    title: "Join the Society",
    subtitle: null,
    href: "/membership",
    description:
      "Become a member and receive the Journal, newsletters, and invitations to our annual lecture and events.",
  },
  {
    title: "Gallery of Pictures",
    subtitle: null,
    href: "/gallery",
    description:
      "Portraits of Beckford, views of Fonthill Abbey and Lansdown Tower, maps, and architectural drawings.",
  },
  {
    title: "News",
    subtitle: null,
    href: "/news",
    description:
      "Latest news, events, and announcements from the Beckford Society and the wider world of Beckford scholarship.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero portrait */}
      <section className="bg-ink">
        <div className="container-wide py-12 md:py-20 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* Portrait */}
          <div className="relative w-64 md:w-80 lg:w-96 shrink-0">
            <div className="relative aspect-[3/4]">
              <Image
                src="/images/gallery/website8.jpg"
                alt="William Beckford, c.1795"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                priority
              />
            </div>
            <p className="text-fog/60 text-xs italic mt-2 text-center">
              William Beckford, c.1795
            </p>
          </div>

          {/* Title */}
          <div>
            <p className="eyebrow mb-4 text-gilt">The Beckford Society</p>
            <h1 className="heading-display text-5xl md:text-6xl lg:text-7xl text-parchment leading-none mb-6">
              William
              <br />
              Beckford
              <br />
              <span className="text-fog text-3xl md:text-4xl font-light">
                1760–1844
              </span>
            </h1>
            <hr className="rule-gilt my-6 opacity-40" />
            <p className="text-fog text-base md:text-lg leading-relaxed max-w-lg">
              Author of <em className="text-parchment">Vathek</em>, builder of
              Fonthill Abbey, collector and connoisseur — and one of the most
              extraordinary figures of Regency England.
            </p>
          </div>
        </div>
      </section>

      {/* Eight section boxes */}
      <section className="bg-parchment-dim py-12 md:py-16">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-fog/30">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="group bg-parchment hover:bg-oxblood transition-colors duration-300 p-8 flex flex-col no-underline"
              >
                <h2 className="font-[family-name:var(--font-display)] text-xl font-medium text-ink group-hover:text-parchment transition-colors duration-300 leading-tight mb-1">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <p className="text-gilt text-sm font-semibold tracking-wide mb-3 group-hover:text-gilt-soft transition-colors">
                    {section.subtitle}
                  </p>
                )}
                <p className="text-ink-soft text-sm leading-relaxed mt-2 group-hover:text-parchment/80 transition-colors duration-300 flex-1">
                  {section.description}
                </p>
                <span className="mt-6 eyebrow text-oxblood group-hover:text-gilt-soft transition-colors text-xs">
                  Read more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
