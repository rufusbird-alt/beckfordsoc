import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Metropolitan Museum of Art — Beckford's Collections",
  description:
    "Objects formerly in William Beckford's collection now held at the Metropolitan Museum of Art, New York.",
};

export default function MetropolitanMuseumPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ Metropolitan Museum of Art
      </p>
      <h1 className="heading-display text-4xl mb-4">
        Metropolitan Museum of Art
      </h1>
      <p className="text-fog text-sm mb-6">New York</p>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-6">
        The Metropolitan Museum of Art, New York holds paintings, decorative
        arts, and other objects formerly in William Beckford&apos;s collection.
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
