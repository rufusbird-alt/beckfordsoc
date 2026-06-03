"use client";

import { useState, FormEvent, ChangeEvent } from "react";

type FormState = {
  title: string;
  forename: string;
  surname: string;
  address: string;
  postcode: string;
  email: string;
  payment: string;
};

export default function MembershipForm() {
  const [form, setForm] = useState<FormState>({
    title: "",
    forename: "",
    surname: "",
    address: "",
    postcode: "",
    email: "",
    payment: "",
  });

  const set =
    (field: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      "BECKFORD SOCIETY MEMBERSHIP APPLICATION",
      "",
      `Title: ${form.title}`,
      `Forename: ${form.forename}`,
      `Surname: ${form.surname}`,
      `Address: ${form.address}`,
      `Post Code / Zip Code: ${form.postcode}`,
      `Email: ${form.email}`,
      `Payment Method: ${form.payment}`,
    ].join("\n");

    window.location.href = `mailto:sidney.blackmore@btinternet.com?subject=${encodeURIComponent(
      "Beckford Society Membership Application"
    )}&body=${encodeURIComponent(body)}`;
  };

  const input =
    "w-full border border-parchment-dim bg-white px-3 py-2 text-sm text-ink focus:outline-none focus:border-gilt";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div className="grid grid-cols-3 gap-3">
        <div>
          <label className="eyebrow text-xs text-fog block mb-1">Title</label>
          <input
            type="text"
            value={form.title}
            onChange={set("title")}
            placeholder="Mr / Mrs…"
            className={input}
          />
        </div>
        <div>
          <label className="eyebrow text-xs text-fog block mb-1">
            Forename
          </label>
          <input
            type="text"
            value={form.forename}
            onChange={set("forename")}
            required
            className={input}
          />
        </div>
        <div>
          <label className="eyebrow text-xs text-fog block mb-1">Surname</label>
          <input
            type="text"
            value={form.surname}
            onChange={set("surname")}
            required
            className={input}
          />
        </div>
      </div>

      <div>
        <label className="eyebrow text-xs text-fog block mb-1">Address</label>
        <textarea
          value={form.address}
          onChange={set("address")}
          rows={3}
          required
          className={input}
        />
      </div>

      <div className="max-w-[220px]">
        <label className="eyebrow text-xs text-fog block mb-1">
          Post Code / Zip Code
        </label>
        <input
          type="text"
          value={form.postcode}
          onChange={set("postcode")}
          required
          className={input}
        />
      </div>

      <div>
        <label className="eyebrow text-xs text-fog block mb-1">Email</label>
        <input
          type="email"
          value={form.email}
          onChange={set("email")}
          required
          className={input}
        />
      </div>

      <div className="max-w-[280px]">
        <label className="eyebrow text-xs text-fog block mb-1">
          Payment Method
        </label>
        <select
          value={form.payment}
          onChange={set("payment")}
          required
          className={input}
        >
          <option value="">Select…</option>
          <option value="Bank Transfer">Bank Transfer</option>
          <option value="Cheque">Cheque</option>
          <option value="PayPal">PayPal</option>
        </select>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="eyebrow bg-oxblood text-parchment px-6 py-3 text-xs hover:bg-oxblood-dark transition-colors"
        >
          Submit Application →
        </button>
        <p className="text-xs text-fog mt-3">
          Clicking Submit will open your email client with your details
          pre-filled, ready to send to the Secretary.
        </p>
      </div>
    </form>
  );
}
