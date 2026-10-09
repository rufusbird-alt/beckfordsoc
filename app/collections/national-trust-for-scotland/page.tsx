import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beckford in the collections of the National Trust for Scotland — Beckford's Collections",
};

const stories = [
  {
    href: "https://www.nts.org.uk/stories/william-beckford-1760-1844-part-one",
    title: "William Beckford (1760–1844): part one",
  },
  {
    href: "https://www.nts.org.uk/stories/william-beckford-1760-1844-part-two",
    title: "William Beckford (1760–1844): part two",
  },
  {
    href: "https://www.nts.org.uk/stories/susan-duchess-of-hamilton-1786-1859",
    title: "Susan, Duchess of Hamilton (1786–1859)",
  },
  {
    href: "https://www.nts.org.uk/stories/beyond-beckford-reviewing-and-re-interpreting-the-beckford-collection",
    title: "Beyond Beckford: reviewing and re-interpreting the Beckford collection",
  },
  {
    href: "https://www.nts.org.uk/stories/many-layered-stories-of-a-chinese-porcelain-vessel",
    title: "Many-layered stories of a Chinese porcelain vessel",
  },
  {
    href: "https://www.nts.org.uk/stories/a-mysterious-ivory-item",
    title: "A mysterious ivory item",
  },
];

export default function NationalTrustForScotlandPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ National Trust for Scotland
      </p>
      <h1 className="heading-display text-4xl mb-4">
        Beckford in the collections of the National Trust for Scotland
      </h1>
      <hr className="rule-gilt my-6" />

      {/* TODO: copy — introductory text to be supplied */}

      <div className="bg-parchment-dim border-l-4 border-gilt px-6 py-5 mb-10">
        <p className="text-sm text-ink-soft mb-3">
          Stories from the National Trust for Scotland about William Beckford
          and the Beckford collection:
        </p>
        <ul className="space-y-2 mb-5">
          {stories.map(({ href, title }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
              >
                {title} ↗
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-ink-soft mb-3">
          Search the National Trust for Scotland&apos;s website for William
          Beckford:
        </p>
        <a
          href="https://www.nts.org.uk/search/results?q=william+beckford"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
        >
          National Trust for Scotland — William Beckford ↗
        </a>
      </div>

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
