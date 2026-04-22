export const metadata = {
  title: "About the Society",
  description:
    "About the Beckford Society — founded in 1995 to promote an interest in the life and works of William Beckford and his circle.",
};

const committee = [
  { role: "President", name: "Sir Malcolm Jack" },
  { role: "Vice-President", name: "Daniele Niedda" },
  { role: "Chairman", name: "Stephen Clarke" },
  { role: "Secretary", name: "Sidney Blackmore" },
  { role: "Treasurer", name: "Jane Wainwright" },
];

const members = [
  "Sidney Blackmore",
  "Stephen Clarke",
  "Mike Fraser",
  "Amy Frost",
  "Kim Sloan",
  "Jane Wainwright",
];

export default function AboutPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">About the Society</h1>
      <hr className="rule-gilt my-6" />

      <div className="space-y-5 text-ink-soft leading-relaxed mb-14">
        <p>
          The Beckford Society was established in 1995 to promote an interest
          in the life and works of William Beckford and his circle.
        </p>
        <p>The Society pursues four main objectives:</p>
        <ul className="list-disc list-outside ml-5 space-y-2">
          <li>Promoting Beckford studies</li>
          <li>
            Encouraging scholarly research through exhibitions and publications,
            including the annual <em>Beckford Journal</em> and newsletters
          </li>
          <li>Hosting annual lectures and symposiums</li>
          <li>
            Supporting the preservation of Beckford's Tower in Bath and related
            historical sites
          </li>
        </ul>
      </div>

      <section className="mb-12">
        <h2 className="heading-display text-2xl mb-6">Officers</h2>
        <div className="divide-y divide-parchment-dim">
          {committee.map(({ role, name }) => (
            <div key={role} className="flex justify-between py-3 text-sm">
              <span className="text-fog uppercase tracking-wide text-xs font-semibold pt-0.5">
                {role}
              </span>
              <span className="text-ink">{name}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="heading-display text-2xl mb-6">Committee</h2>
        <ul className="space-y-1 text-sm text-ink-soft">
          {members.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="heading-display text-2xl mb-4">Contact</h2>
        <address className="not-italic text-sm text-ink-soft leading-relaxed bg-parchment-dim px-6 py-5">
          The Timber Cottage
          <br />
          Crockerton
          <br />
          Warminster
          <br />
          Wiltshire BA12 8AX
          <br />
          United Kingdom
        </address>
      </section>
    </div>
  );
}
