import type { MetadataRoute } from "next";

// AI-training crawlers are kept out entirely; search engines are welcome.
const blockedBots = [
  "GPTBot",
  "ClaudeBot",
  "CCBot",
  "Google-Extended",
  "Applebot-Extended",
  "Bytespider",
  "Amazonbot",
  "meta-externalagent",
  "PerplexityBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: blockedBots, disallow: "/" },
    ],
    sitemap: "https://www.beckfordsociety.org/sitemap.xml",
  };
}
