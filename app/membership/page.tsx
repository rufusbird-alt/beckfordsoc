import type { Metadata } from "next";
import Link from "next/link";
import MembershipForm from "@/components/MembershipForm";

export const metadata: Metadata = {
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

      <p className="text-ink-soft leading-relaxed mb-4">
        We welcome new members who are interested in William Beckford.
      </p>
      <p className="text-ink-soft leading-relaxed mb-10">
        Members receive the annual <em>Beckford Journal</em>, Society
        newsletters and invitations to the annual lecture and other events.
      </p>

      {/* Subscription */}
      <div className="bg-parchment-dim border-l-4 border-gilt px-8 py-6 mb-12">
        <p className="eyebrow mb-2">Annual Subscription</p>
        <p className="heading-display text-4xl text-ink">£30 / $40</p>
        <p className="text-sm text-fog mt-1">per year</p>
      </div>

      {/* Membership Form options */}
      <section className="mb-12">
        <h2 className="heading-display text-2xl mb-4">Membership Form</h2>
        <p className="text-ink-soft text-sm leading-relaxed mb-6">
          Please complete a membership form using one of the options below.
        </p>
        <div className="flex flex-wrap gap-6">
          <a
            href="/pdfs/JOIN THE BECKFORD SOCIETY.pdf"
            download
            className="eyebrow text-oxblood hover:text-oxblood-dark text-xs no-underline transition-colors"
          >
            Download / Print Form (PDF) →
          </a>
        </div>
        <p className="text-xs text-fog mt-2">
          Print, complete by hand, scan and email to{" "}
          <a
            href="mailto:sidney.blackmore@btinternet.com"
            className="text-oxblood"
          >
            sidney.blackmore@btinternet.com
          </a>
        </p>
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Online form */}
      <section className="mb-12">
        <h2 className="heading-display text-2xl mb-2">Apply Online</h2>
        <p className="text-ink-soft text-sm leading-relaxed mb-6">
          Complete the form below and click Submit — your details will open in
          your email client, ready to send to the Secretary.
        </p>
        <MembershipForm />
      </section>

      <hr className="rule-gilt my-10 opacity-40" />

      {/* Payment methods */}
      <section>
        <h2 className="heading-display text-2xl mb-8">Payment Methods</h2>

        <div className="space-y-10">
          {/* Bank Transfer */}
          <div>
            <h3 className="heading-display text-xl mb-2">Bank Transfer</h3>
            <p className="text-ink-soft text-sm leading-relaxed mb-3">
              Preferred payment method for UK members. Please set up a Standing
              Order for annual payments.
            </p>
            <div className="bg-parchment-dim px-6 py-4 text-sm space-y-1 mb-3">
              <p>
                <span className="font-semibold">Sort Code:</span> 30-90-54
              </p>
              <p>
                <span className="font-semibold">Account No:</span> 01890277
              </p>
            </div>
            <p className="text-ink-soft text-sm">
              Please also complete the membership form and email to{" "}
              <a
                href="mailto:sidney.blackmore@btinternet.com"
                className="text-oxblood"
              >
                sidney.blackmore@btinternet.com
              </a>
            </p>
          </div>

          {/* Cheque */}
          <div>
            <h3 className="heading-display text-xl mb-2">Cheque</h3>
            <p className="text-ink-soft text-sm leading-relaxed mb-4">
              Cheques payable to{" "}
              <em>International Beckford Society</em> should be sent to the
              Secretary together with a completed membership form.
            </p>
            <address className="not-italic bg-parchment-dim px-6 py-5 text-sm text-ink-soft leading-relaxed">
              Sidney Blackmore, Secretary
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
          </div>

          {/* PayPal */}
          <div>
            <h3 className="heading-display text-xl mb-2">PayPal</h3>
            <p className="text-ink-soft text-sm leading-relaxed mb-2">
              Send payment to{" "}
              <a
                href="mailto:paypal@beckfordsociety.org"
                className="text-oxblood"
              >
                paypal@beckfordsociety.org
              </a>
            </p>
            <p className="text-ink-soft text-sm">
              Please complete the membership form and email to{" "}
              <a
                href="mailto:sidney.blackmore@btinternet.com"
                className="text-oxblood"
              >
                sidney.blackmore@btinternet.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
