import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Waddesdon Manor — Beckford's Collections",
  description:
    "Objects formerly in William Beckford's collection now held at Waddesdon Manor, Buckinghamshire.",
};

export default function WaddesdonManorPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">
        <Link href="/collections" className="text-fog hover:text-oxblood no-underline transition-colors">
          Beckford&apos;s Collections
        </Link>
        {" "}/ Waddesdon Manor
      </p>
      <h1 className="heading-display text-4xl mb-4">Waddesdon Manor</h1>
      <p className="text-fog text-sm mb-6">Buckinghamshire</p>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-6">
        Ferdinand de Rothschild&apos;s collection at Waddesdon Manor,
        Buckinghamshire holds objects formerly in William Beckford&apos;s
        collection, including works that passed through the Hamilton Palace
        sale of 1882.
      </p>

      <div className="bg-parchment-dim border-l-4 border-gilt px-6 py-5 mb-10">
        <p className="text-sm text-ink-soft mb-3">
          View Waddesdon&apos;s record of works connected with William Beckford:
        </p>
        <a
          href="https://collection.waddesdon.org.uk/persons/2897/william-beckford-british-b1759-d1844"
          target="_blank"
          rel="noopener noreferrer"
          className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
        >
          Waddesdon — William Beckford ↗
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
