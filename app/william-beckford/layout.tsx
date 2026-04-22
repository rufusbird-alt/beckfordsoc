export default function WilliamBeckfordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="container-prose py-16 md:py-24">{children}</article>;
}
