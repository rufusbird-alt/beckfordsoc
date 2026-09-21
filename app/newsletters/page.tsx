import { PCLOUD_NEWSLETTER_FOLDER } from "@/lib/pcloudLinks";

export const metadata = {
  title: "Newsletters",
  description:
    "Browse and download all issues of the Beckford Society Newsletter.",
};

const newsletters = [
  "Beckford_newsletter_59.pdf",
  "beckford_newsletter_32.pdf",
  "beckford_newsletter_33.pdf",
  "beckford_newsletter_34.pdf",
  "beckford_newsletter_35.pdf",
  "beckford_newsletter_36.pdf",
  "beckford_newsletter_37.pdf",
  "beckford_newsletter_38.pdf",
  "beckford_newsletter_39.pdf",
  "beckford_newsletter_40.pdf",
  "beckford_newsletter_41.pdf",
  "beckford_newsletter_42.pdf",
  "beckford_newsletter_43.pdf",
  "beckford_newsletter_44.pdf",
  "beckford_newsletter_45.pdf",
  "beckford_newsletter_46.pdf",
  "beckford_newsletter_47.pdf",
  "beckford_newsletter_48.pdf",
  "beckford_newsletter_49.pdf",
  "beckford_newsletter_50.pdf",
  "beckford_newsletter_51.pdf",
  "beckford_newsletter_52.pdf",
  "beckford_newsletter_53.pdf",
  "beckford_newsletter_54.pdf",
  "beckford_newsletter_55.pdf",
  "beckford_newsletter_56.pdf",
  "beckford_newsletter_57.pdf",
  "beckford_newsletter_58.pdf",
  "beckford_newsletter_60.pdf",
  "beckford_newsletter_61.pdf",
  "beckford_newsletter_62.pdf",
  "beckford_newsletter_63.pdf",
  "beckford_newsletter_64.pdf",
].map((file) => {
  const match = file.match(/(\d+)/);
  const issue = match ? parseInt(match[1], 10) : 0;
  return { issue, file };
}).sort((a, b) => b.issue - a.issue);

function newsletterPdfLink() {
  return PCLOUD_NEWSLETTER_FOLDER;
}

export default function NewslettersPage() {

  return (
    <div className="container-wide py-16">
      <div className="max-w-2xl">
        <p className="eyebrow mb-2">The Beckford Society</p>
        <h1 className="heading-display text-4xl mb-4">Newsletters</h1>
        <hr className="rule-gilt my-6" />
        <p className="text-ink-soft leading-relaxed mb-12">
          The Beckford Society Newsletter is distributed to members and carries
          news of events, publications, discoveries, and Society business. All
          available issues are free to download below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {newsletters.map(({ issue, file }) => (
          <a
            key={file}
            href={newsletterPdfLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border border-parchment-dim hover:border-gilt bg-parchment hover:bg-parchment-dim transition-colors px-5 py-4 no-underline"
          >
            <div>
              <p className="font-[family-name:var(--font-display)] text-lg text-ink group-hover:text-oxblood transition-colors">
                Newsletter No. {issue}
              </p>
              <p className="text-xs text-fog mt-0.5 uppercase tracking-wide">
                PDF download
              </p>
            </div>
            <span className="text-gilt group-hover:text-oxblood transition-colors text-lg ml-3">
              ↓
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
