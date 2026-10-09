import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beckford in other US Collections — Beckford's Collections",
};

type Item = {
  href: string;
  title: string;
  detail?: string;
  /** Path under /public, or omitted where no open-access image is available. */
  thumb?: string;
};

const institutions: { name: string; credit?: string; items: Item[] }[] = [
  {
    name: "The Huntington",
    credit: "Images courtesy of The Huntington. Nessus and Deianira: photography © 2015 Fredrik Nilsen.",
    items: [
      {
        href: "https://www.huntington.org/collections/mus-158",
        title: "Margaret Beckford, later Margaret Orde, and Susan Euphemia Beckford, later Duchess of Hamilton: The Beckford children",
        detail: "George Romney, ca. 1789–91",
        thumb: "/images/collections/us/huntington-158-beckford-children.jpg",
      },
      {
        href: "https://www.huntington.org/collections/mus-16857",
        title: "Nessus and Deianira",
        detail: "Giambologna, ca. 1575",
        thumb: "/images/collections/us/huntington-16857-nessus-and-deianira.jpg",
      },
    ],
  },
  {
    name: "National Gallery of Art, Washington",
    credit: "Images courtesy National Gallery of Art, Washington (open access).",
    items: [
      {
        href: "https://www.nga.gov/artworks/34071-maria-hamilton-beckford-mrs-william-beckford",
        title: "Maria Hamilton Beckford (Mrs. William Beckford)",
        detail: "Benjamin West, 1799",
        thumb: "/images/collections/us/nga-34071-maria-hamilton-beckford.jpg",
      },
      {
        href: "https://www.nga.gov/artworks/34149-elizabeth-countess-effingham",
        title: "Elizabeth, Countess of Effingham",
        detail: "Benjamin West, c. 1797",
        thumb: "/images/collections/us/nga-34149-countess-effingham.jpg",
      },
      {
        href: "https://www.nga.gov/artworks/43722-vincenzo-cappello",
        title: "Vincenzo Cappello",
        detail: "Titian and Workshop, c. 1550/1560",
        thumb: "/images/collections/us/nga-43722-vincenzo-cappello.jpg",
      },
      {
        href: "https://www.nga.gov/artworks/46106-eleonora-di-toledo",
        title: "Eleonora di Toledo",
        detail: "Agnolo Bronzino, c. 1560",
        thumb: "/images/collections/us/nga-46106-eleonora-di-toledo.jpg",
      },
      {
        href: "https://www.nga.gov/artworks/81092-vedute-delle-ville-e-daltri-luoghi-della-toscana",
        title: "Vedute delle Ville, e d'altri Luoghi della Toscana",
        detail: "Giuseppe Zocchi, published 1744",
      },
      {
        href: "https://www.nga.gov/artworks/158747-selection-twenty-most-picturesque-views-paris-and-its-environs",
        title: "A Selection of Twenty of the most Picturesque Views in Paris, and its Environs",
        detail: "Thomas Girtin and Frederick Christian Lewis I, published 1803",
      },
    ],
  },
  {
    name: "J. Paul Getty Museum",
    credit: "Digital images courtesy of the Getty's Open Content Program.",
    items: [
      {
        href: "https://www.getty.edu/art/collection/object/1096GN",
        title: "Leaf from the Hours of Louis XII",
        detail: "Jean Bourdichon · 2004.1",
        thumb: "/images/collections/us/getty-1096gn-hours-of-louis-xii.jpg",
      },
      {
        href: "https://www.getty.edu/art/collection/object/114YMT",
        title: "Leaf from the Hours of Louis XII",
        detail: "Jean Bourdichon · 2024.28",
        thumb: "/images/collections/us/getty-114ymt-hours-of-louis-xii.jpg",
      },
      {
        href: "https://www.getty.edu/art/collection/object/103RVZ",
        title: "Roman de la Rose",
        detail: "Guillaume de Lorris and Jean de Meun · 83.MR.177",
        thumb: "/images/collections/us/getty-103rvz-roman-de-la-rose.jpg",
      },
      {
        href: "https://www.getty.edu/art/collection/object/103RHZ",
        title: "Astronomer by Candlelight",
        detail: "Gerrit Dou · 86.PB.732",
        thumb: "/images/collections/us/getty-103rhz-astronomer-by-candlelight.jpg",
      },
    ],
  },
];

export default function OtherUSCollectionsPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ Other US Collections
      </p>
      <h1 className="heading-display text-4xl mb-4">Beckford in other US Collections</h1>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-6">
        Many US museums own works from Beckford&apos;s collections. Some have
        made their collections available online and a selection are added
        below. This section will grow as more collections are identified and
        their collections made accessible online.
      </p>

      {institutions.map(({ name, credit, items }) => (
        <section key={name} className="bg-parchment-dim border-l-4 border-gilt px-6 py-5 mb-10">
          <h2 className="heading-display text-xl mb-4">{name}</h2>
          <ul className="space-y-4">
            {items.map(({ href, title, detail, thumb }) => (
              <li key={href} className="flex items-center gap-4">
                <div className="w-16 h-16 shrink-0 bg-parchment border border-parchment-dim overflow-hidden">
                  {thumb && (
                    <Image
                      src={thumb}
                      alt={title}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
                  >
                    {title} ↗
                  </a>
                  {detail && <p className="text-xs text-fog mt-0.5">{detail}</p>}
                </div>
              </li>
            ))}
          </ul>
          {credit && <p className="text-xs text-fog italic mt-4">{credit}</p>}
        </section>
      ))}

      <p className="text-sm text-fog italic">
        A detailed record of individual works, with images and commentary, will
        be added to this page in due course.
      </p>

      <div className="mt-10">
        <Link
          href="/collections"
          className="eyebrow text-fog hover:text-oxblood text-xs no-underline transition-colors"
        >
          ← Back to Beckford&apos;s Collections
        </Link>
      </div>
    </div>
  );
}
