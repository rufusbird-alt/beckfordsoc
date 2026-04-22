/**
 * Primary site navigation. Header + Footer both read from here.
 * Edit to add, remove, reorder, or rename nav items.
 */
export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "/william-beckford", label: "William Beckford" },
  { href: "/about", label: "About the Society" },
  { href: "/journal", label: "The Beckford Journal" },
  { href: "/newsletters", label: "Newsletters" },
  { href: "/publications", label: "Publications" },
  { href: "/gallery", label: "Gallery" },
  { href: "/news", label: "News" },
  { href: "/join", label: "Join" },
];
