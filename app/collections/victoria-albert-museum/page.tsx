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

      <div className="bg-parchment-dim border border-dashed border-fog/40 px-6 py-8 text-center">
        <p className="text-fog text-sm italic">
          A record of Beckford objects in this collection is in preparation.
        </p>
      </div>

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
