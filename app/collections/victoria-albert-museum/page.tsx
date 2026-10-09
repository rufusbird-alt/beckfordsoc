import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Victoria & Albert Museum — Beckford's Collections",
  description:
    "Objects formerly in William Beckford's collection now held at the Victoria & Albert Museum, London.",
};

export default function VictoriaAlbertPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ Victoria &amp; Albert Museum
      </p>
      <h1 className="heading-display text-4xl mb-4">
        Victoria &amp; Albert Museum
      </h1>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-6">
        The Victoria &amp; Albert Museum, London holds decorative arts, furniture,
        and other objects formerly in William Beckford&apos;s collection.
      </p>

      <div className="bg-parchment-dim border-l-4 border-gilt px-6 py-5 mb-10">
        <p className="text-sm text-ink-soft mb-3">
          Search the V&amp;A&apos;s collection for works connected with William Beckford:
        </p>
        <a
          href="https://collections.vam.ac.uk/search/?q=william%20beckford"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
        >
          V&amp;A — William Beckford ↗
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
