export const metadata = {
  title: "Join the Society",
  description:
    "Become a member of the Beckford Society and receive the annual Journal, newsletters, and invitations to events.",
};

export default function MembershipPage() {
  return (
    <div className="container-prose py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">Join the Society</h1>
      <hr className="rule-gilt my-6" />

      <p className="text-ink-soft leading-relaxed mb-6">
        Membership of the Society is open to anyone interested in William
        Beckford who wishes to further its objectives.
      </p>

      <p className="text-ink-soft leading-relaxed mb-10">
        Members receive the annual <em>Beckford Journal</em>, Society
        newsletters, and invitations to the annual lecture and other events.
      </p>

      {/* Subscription rate */}
      <div className="bg-parchment-dim border-l-4 border-gilt px-8 py-6 mb-12">
        <p className="eyebrow mb-2">Annual Subscription</p>
        <p className="heading-display text-4xl text-ink">£30</p>
        <p className="text-sm text-fog mt-1">per year</p>
      </div>

      {/* Stripe payment — placeholder */}
      <section className="mb-12">
        <h2 className="heading-display text-2xl mb-4">Pay Online</h2>
        <p className="text-ink-soft text-sm leading-relaxed mb-6">
          Secure payment by card via Stripe. You will receive a confirmation
          email on completion.
        </p>
        {/* TODO: replace with live Stripe payment link or embedded Stripe element */}
        <div className="bg-parchment-dim border border-dashed border-fog/50 rounded p-8 text-center text-fog text-sm italic">
          Stripe payment integration to be added here.
        </div>
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Bank transfer */}
      <section className="mb-12">
        <h2 className="heading-display text-2xl mb-4">Pay by Bank Transfer</h2>
        <p className="text-ink-soft text-sm leading-relaxed">
          Payments may be made direct to the Society's bank account. Details are
          available from the Secretary —{" "}
          <a href="mailto:sidney.blackmore@btinternet.com" className="text-oxblood">
            Sidney Blackmore: sidney.blackmore@btinternet.com
          </a>
        </p>
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Postal */}
      <section>
        <h2 className="heading-display text-2xl mb-4">Apply by Post</h2>
        <p className="text-ink-soft leading-relaxed mb-4">
          Applications and cheques (payable to <em>The International Beckford Society</em>)
          may be sent to the Secretary:
        </p>
        <address className="not-italic bg-parchment-dim px-6 py-5 text-sm text-ink-soft leading-relaxed">
          Sidney Blackmore
          <br />
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
