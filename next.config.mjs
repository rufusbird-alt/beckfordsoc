import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "beckfordsociety.org" },
      { protocol: "https", hostname: "**.beckfordsociety.org" },
    ],
  },
  experimental: {
    mdxRs: true,
  },
  async redirects() {
    return [
      { source: "/journal/", destination: "/journal", permanent: true },
      { source: "/Publications/", destination: "/publications", permanent: true },
      { source: "/membership/", destination: "/membership", permanent: true },
      { source: "/committee/", destination: "/about", permanent: true },
      { source: "/annual-lectures/", destination: "/publications", permanent: true },
      {
        source: "/international-society-of-eighteenth-century-studies/",
        destination: "/news",
        permanent: true,
      },
      {
        source: "/wp-content/uploads/:path*",
        destination: "/publications",
        permanent: true,
      },
    ];
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
