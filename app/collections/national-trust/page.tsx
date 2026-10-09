import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beckford in the collections of the National Trust — Beckford's Collections",
};

export default function NationalTrustPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ National Trust
      </p>
      <h1 className="heading-display text-4xl mb-4">Beckford in the collections of the National Trust</h1>
      <hr className="rule-gilt my-6" />

      {/* TODO: copy — introductory text to be supplied */}

      <div className="bg-parchment-dim border-l-4 border-gilt px-6 py-5 mb-10">
        <p className="text-sm text-ink-soft mb-3">
          Search National Trust Collections for works connected with William Beckford:
        </p>
        <a
          href="https://www.nationaltrustcollections.org.uk/results?SearchTerms=%22william+beckford%22&Sort=collection"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
        >
          National Trust Collections — William Beckford ↗
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
