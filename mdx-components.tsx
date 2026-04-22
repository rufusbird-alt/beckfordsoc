import type { MDXComponents } from "mdx/types";

/**
 * Typographic overrides applied to every MDX file rendered through
 * next-mdx-remote (see lib/content.ts) and to any .mdx files compiled
 * by @next/mdx. Adjust here to re-style editorial content site-wide.
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="heading-display text-4xl md:text-5xl mt-0 mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="heading-display text-2xl md:text-3xl mt-14 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="heading-display text-xl md:text-2xl mt-10 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="leading-relaxed text-[1.0625rem] my-5 text-[color:var(--color-ink-soft)]">
        {children}
      </p>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="underline underline-offset-4 decoration-[color:var(--color-gilt)] hover:decoration-[color:var(--color-oxblood)]"
      >
        {children}
      </a>
    ),
    hr: () => <hr className="rule-gilt my-12" />,
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[color:var(--color-gilt)] pl-6 italic my-8 text-[color:var(--color-ink-soft)]">
        {children}
      </blockquote>
    ),
    ul: ({ children }) => (
      <ul className="list-disc pl-6 my-5 space-y-2 marker:text-[color:var(--color-gilt)]">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal pl-6 my-5 space-y-2 marker:text-[color:var(--color-gilt)]">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed text-[1.0625rem] text-[color:var(--color-ink-soft)]">
        {children}
      </li>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-[color:var(--color-ink)]">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    table: ({ children }) => (
      <div className="my-8 overflow-x-auto">
        <table className="w-full text-left text-[0.9375rem] border-collapse">
          {children}
        </table>
      </div>
    ),
    thead: ({ children }) => (
      <thead className="border-b border-[color:var(--color-gilt)]">
        {children}
      </thead>
    ),
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-[color:var(--color-parchment-dim)]">
        {children}
      </tr>
    ),
    th: ({ children }) => (
      <th className="px-3 py-3 font-semibold text-[color:var(--color-ink)] uppercase tracking-wider text-xs">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-3 py-3 align-top text-[color:var(--color-ink-soft)]">
        {children}
      </td>
    ),
    ...components,
  };
}
