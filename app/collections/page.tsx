import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beckford's Collections",
  description:
    "A record of works of art, books, paintings and objects formerly in William Beckford's collection, now held in major institutions across the world.",
};

const institutions = [
  {
    name: "National Gallery",
    location: "London",
    href: "/collections/national-gallery",
    status: "available",
  },
  {
    name: "Victoria & Albert Museum",
    location: "London",
    href: "/collections/victoria-albert-museum",
    status: "forthcoming",
  },
  {
    name: "British Museum",
    location: "London",
    href: "/collections/british-museum",
    status: "forthcoming",
  },
  {
    name: "Metropolitan Museum of Art",
    location: "New York",
    href: "/collections/metropolitan-museum",
    status: "forthcoming",
  },
  {
    name: "Waddesdon Manor",
    location: "Buckinghamshire",
    href: "/collections/waddesdon-manor",
    status: "forthcoming",
  },
  {
    name: "Brodick Castle",
    location: "Isle of Arran",
    href: "/collections/brodick-castle",
    status: "forthcoming",
  },
];

export default function CollectionsPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">Beckford&apos;s Collections</h1>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-14 max-w-2xl">
        Numerous works of art, books, paintings and other objects associated
        with William Beckford are to be found in most of the major art
        collections across the world. This page is planned as a record of some
        of the major works to be found in these collections.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {institutions.map((inst) => (
          <Link
            key={inst.href}
            href={inst.href}
            className="group block border border-parchment-dim bg-parchment hover:border-gilt transition-colors no-underline px-6 py-5"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-[family-name:var(--font-display)] text-lg text-ink group-hover:text-oxblood transition-colors">
                  {inst.name}
                </p>
                <p className="text-xs text-fog mt-0.5">{inst.location}</p>
              </div>
              {inst.status === "forthcoming" && (
                <span className="eyebrow text-fog text-xs shrink-0 ml-4 mt-0.5">
                  In preparation
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 pt-6 border-t border-parchment-dim">
        <p className="text-ink-soft text-sm leading-relaxed">
          For a bibliographical account of the Fonthill sales and their catalogues and ephemera, see{" "}
          <Link
            href="/publications#fonthill-fever"
            className="underline underline-offset-4 decoration-gilt hover:decoration-oxblood"
          >
            <em>Fonthill Fever: The Fonthill Sales 1822 &amp; 1823</em>
          </Link>{" "}
          in Society Publications.
        </p>
      </div>
    </div>
  );
}
