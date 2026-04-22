import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";

/**
 * Shape of the YAML frontmatter we expect on every /content/pages/*.mdx file.
 * Add new optional fields here as new pages need them.
 */
export type PageFrontmatter = {
  title: string;
  description?: string;
  status?: "draft" | "published";
  /** Free-text attribution / citation list rendered at page foot. */
  sources?: string[];
};

export type LoadedPage = {
  frontmatter: PageFrontmatter;
  /** Raw MDX body with frontmatter stripped, ready for compileMDX. */
  body: string;
};

const CONTENT_DIR = path.join(process.cwd(), "content", "pages");

/**
 * Reads an MDX file from /content/pages/<slug>.mdx, parses the YAML
 * frontmatter with gray-matter, and returns the data + body.
 *
 * Server-only — uses fs. Call from server components or generateMetadata.
 */
export async function loadPage(slug: string): Promise<LoadedPage> {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  const raw = await fs.readFile(filePath, "utf8");
  const parsed = matter(raw);

  const data = parsed.data as Partial<PageFrontmatter>;
  if (!data.title) {
    throw new Error(
      `content/pages/${slug}.mdx is missing a "title" in its frontmatter`,
    );
  }

  return {
    frontmatter: data as PageFrontmatter,
    body: parsed.content,
  };
}
