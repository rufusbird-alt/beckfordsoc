import Link from "next/link";
import Image from "next/image";

const internalLinks = [
  { label: "William Beckford", href: "/william-beckford" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
  { label: "News", href: "/news" },
  { label: "Membership", href: "/membership" },
];

const externalLinks = [
  { label: "Beckford's Tower", href: "https://beckfordstower.org.uk/" },
  { label: "Beckfordiana", href: "https://beckford.c18.net/" },
  {
    label: "British Society for 18th-Century Studies",
    href: "https://www.bsecs.org.uk/",
  },
  { label: "Enfilade", href: "https://enfilade18thc.com/" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-fog">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Society blurb */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <Image
                src="/images/beckfordsociety-logo-122x113.png"
                alt="The Beckford Society"
                width={56}
                height={52}
                className="opacity-90"
              />
              <p className="font-[family-name:var(--font-display)] text-lg text-parchment font-medium">
                The Beckford Society
              </p>
            </div>
            <p className="text-sm leading-relaxed">
              Founded in 1995. Dedicated to the life, work, and world of
              William Beckford (1760–1844).
            </p>
          </div>

          {/* Site links */}
          <nav>
            <p className="eyebrow text-gilt mb-4">Pages</p>
            <ul className="space-y-2">
              {internalLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-fog hover:text-parchment no-underline transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* External links */}
          <nav>
            <p className="eyebrow text-gilt mb-4">Links</p>
            <ul className="space-y-2">
              {externalLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fog hover:text-parchment no-underline transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <hr className="rule-gilt my-8 opacity-30" />

        <p className="text-xs text-fog/60">
          © {new Date().getFullYear()} The Beckford Society. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
