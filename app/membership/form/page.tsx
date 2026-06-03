"use client";

export default function MembershipFormPage() {
  return (
    <div className="container-prose py-12">
      {/* Print button — hidden when printing */}
      <div className="print:hidden mb-8 flex flex-wrap items-center gap-4">
        <button
          onClick={() => window.print()}
          className="eyebrow bg-oxblood text-parchment px-6 py-3 text-xs hover:bg-oxblood-dark transition-colors"
        >
          Print Form
        </button>
        <p className="text-sm text-ink-soft">
          Complete by hand, scan and email to{" "}
          <a
            href="mailto:sidney.blackmore@btinternet.com"
            className="text-oxblood"
          >
            sidney.blackmore@btinternet.com
          </a>
        </p>
      </div>

      {/* Form */}
      <div className="border border-ink p-10 max-w-2xl text-sm print:border-none print:p-0">
        <h1 className="text-center font-bold text-lg tracking-wide mb-1">
          JOIN THE BECKFORD SOCIETY
        </h1>
        <h2 className="text-center font-bold text-base tracking-wide mb-4">
          MEMBERSHIP FORM
        </h2>
        <p className="text-center mb-8 font-medium">
          ANNUAL MEMBERSHIP £30 / $40
        </p>

        <h3 className="font-semibold tracking-wide mb-6 uppercase text-xs">
          Your Details
        </h3>

        <div className="space-y-7">
          {/* Name row */}
          <div className="flex gap-6 items-end">
            <div className="flex items-end gap-2 shrink-0">
              <span>Title</span>
              <span className="border-b border-ink w-14 inline-block pb-0.5" />
            </div>
            <div className="flex items-end gap-2 flex-1">
              <span className="shrink-0">Forename</span>
              <span className="border-b border-ink flex-1 inline-block pb-0.5" />
            </div>
            <div className="flex items-end gap-2 flex-1">
              <span className="shrink-0">Surname</span>
              <span className="border-b border-ink flex-1 inline-block pb-0.5" />
            </div>
          </div>

          {/* Address */}
          <div>
            <p className="mb-5">Address</p>
            <div className="border-b border-ink mb-5" />
            <div className="border-b border-ink mb-5" />
            <div className="flex items-end gap-3">
              <div className="border-b border-ink flex-1" />
              <span className="shrink-0">Post Code / Zip Code</span>
              <div className="border-b border-ink w-28" />
            </div>
          </div>

          {/* Email */}
          <div className="flex items-end gap-2">
            <span className="shrink-0">E-mail:</span>
            <div className="border-b border-ink flex-1" />
          </div>

          {/* Payment method */}
          <div>
            <p className="font-semibold mb-4">Payment Method:</p>
            <div className="space-y-5">
              <div>
                <p className="font-medium mb-1">Bank Transfer:</p>
                <p>
                  I have made a bank transfer to the Society&apos;s account
                  (Sort Code: 30-90-54 &nbsp; Account Number: 01890277).
                  &nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;&nbsp;]
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">Cheque:</p>
                <p>
                  I enclose a cheque made payable to &lsquo;International
                  Beckford Society&rsquo; &nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;&nbsp;]
                </p>
              </div>
              <div>
                <p className="font-medium mb-1">PayPal:</p>
                <p>
                  I have sent payment to the Society at
                  paypal@beckfordsociety.org &nbsp;&nbsp;[&nbsp;&nbsp;&nbsp;&nbsp;]
                </p>
              </div>
            </div>
          </div>

          {/* Send to */}
          <div className="pt-2">
            <p className="mb-3">
              Please send your completed application form to:
            </p>
            <address className="not-italic pl-6 leading-relaxed">
              The Secretary — Sidney Blackmore
              <br />
              The Timber Cottage
              <br />
              Crockerton
              <br />
              Warminster
              <br />
              Wiltshire BA12 8AX &nbsp; UK
            </address>
            <p className="mt-3">Email: sidney.blackmore@btinternet.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
