"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const nav = [
  { label: "William Beckford", href: "/william-beckford" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Membership", href: "/membership" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-oxblood text-parchment">
      <div className="container-wide flex items-center justify-between py-4">
        <Link
          href="/"
          className="flex items-center gap-3 no-underline hover:opacity-90 transition-opacity"
        >
          <Image
            src="/images/william-beckford/beckford-society-logo-800.png"
            alt="The Beckford Society"
            width={64}
            height={65}
            className="shrink-0"
          />
          <span className="font-[family-name:var(--font-display)] text-xl font-medium tracking-wide text-parchment">
            The Beckford Society
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-7">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="eyebrow text-fog hover:text-gilt-soft no-underline transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-parchment"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <>
                <line x1="3" y1="3" x2="19" y2="19" />
                <line x1="19" y1="3" x2="3" y2="19" />
              </>
            ) : (
              <>
                <line x1="2" y1="6" x2="20" y2="6" />
                <line x1="2" y1="11" x2="20" y2="11" />
                <line x1="2" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-oxblood-dark px-6 pb-4 flex flex-col gap-4 pt-4">
          {nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="eyebrow text-fog hover:text-gilt-soft no-underline"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
