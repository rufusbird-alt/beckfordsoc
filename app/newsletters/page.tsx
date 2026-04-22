import fs from "fs";
import path from "path";

export const metadata = {
  title: "Newsletters",
  description:
    "Browse and download all issues of the Beckford Society Newsletter.",
};

function getNewsletters() {
  const dir = path.join(process.cwd(), "public/pdfs/newsletters");
  const files = fs.readdirSync(dir).filter((f) => f.endsWith(".pdf"));

  return files
    .map((file) => {
      const match = file.match(/newsletter_(\d+)/i);
      const issue = match ? parseInt(match[1], 10) : null;
      return issue ? { issue, file } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b!.issue - a!.issue) as { issue: number; file: string }[];
}

export default function NewslettersPage() {
  const newsletters = getNewsletters();

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
            href={`/pdfs/newsletters/${file}`}
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
