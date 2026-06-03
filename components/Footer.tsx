import Link from "next/link";
import Image from "next/image";

const internalLinks = [
  { label: "William Beckford", href: "/william-beckford" },
  { label: "About", href: "/about" },
  { label: "Journal", href: "/journal" },
  { label: "Newsletters", href: "/newsletters" },
  { label: "Publications", href: "/publications" },
  { label: "Gallery", href: "/gallery" },
  { label: "Collections", href: "/collections" },
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
  { label: "Fonthill Estate", href: "https://fonthill.co.uk" },
  {
    label: "Bodleian Library: Beckford Archive",
    href: "https://archives.bodleian.ox.ac.uk/repositories/2/resources/3196",
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-fog">
      <div className="container-wide py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Society blurb */}
          <div>
            <p className="font-[family-name:var(--font-display)] text-lg text-parchment font-medium mb-3">
              The Beckford Society
            </p>
            <p className="text-sm leading-relaxed mb-6">
              Founded in 1995. Dedicated to the life, work, and world of
              William Beckford (1760–1844).
            </p>
            <Image
              src="/images/william-beckford/beckford-society-logo-800.png"
              alt="The Beckford Society"
              width={122}
              height={124}
              className="w-full h-auto opacity-80"
            />
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
