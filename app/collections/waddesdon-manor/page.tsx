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
        Waddesdon Manor, Buckinghamshire holds objects formerly in William
        Beckford&apos;s collection, including works that passed through the
        Hamilton Palace sale of 1882.
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
