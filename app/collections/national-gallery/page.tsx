import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "National Gallery — Beckford's Collections",
  description:
    "Paintings formerly in William Beckford's collection now held at the National Gallery, London.",
};

export default function NationalGalleryPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ National Gallery
      </p>
      <h1 className="heading-display text-4xl mb-4">National Gallery</h1>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-6">
        The National Gallery, London holds a significant number of paintings
        formerly in William Beckford&apos;s collection. The full catalogue of
        works associated with Beckford is maintained on the National
        Gallery&apos;s own website.
      </p>

      <div className="bg-parchment-dim border-l-4 border-gilt px-6 py-5 mb-10">
        <p className="text-sm text-ink-soft mb-3">
          View the National Gallery&apos;s complete record of works connected
          with William Beckford:
        </p>
        <a
          href="https://www.nationalgallery.org.uk/people/william-thomas-beckford"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
        >
          National Gallery — William Thomas Beckford ↗
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
