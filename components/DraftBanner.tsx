export function DraftBanner() {
  return (
    <aside
      className="mb-10 rounded border border-[color:var(--color-gilt)] bg-[color:var(--color-parchment-dim)] px-4 py-3 text-sm"
      role="note"
      aria-label="Draft notice"
    >
      <span className="eyebrow mr-2">Draft</span>
      This page is a working draft for Society review and is not yet published
      in its final form.
    </aside>
  );
}
