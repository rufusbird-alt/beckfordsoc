import Image from "next/image";
import gallery from "@/data/gallery.json";

export const metadata = {
  title: "Gallery of Pictures",
  description:
    "Portraits of William Beckford, views of Fonthill Abbey and Lansdown Tower, maps, and architectural drawings.",
};

const categories = [
  { key: "portraits", label: "Portraits" },
  { key: "fonthill", label: "Fonthill Abbey" },
  { key: "architecture", label: "Architecture" },
];

export default function GalleryPage() {
  return (
    <div className="container-wide py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">Gallery of Pictures</h1>
      <hr className="rule-gilt my-6" />
      <p className="text-ink-soft leading-relaxed mb-14 max-w-2xl">
        Portraits of William Beckford, views of Fonthill Abbey and Lansdown
        Tower, architectural drawings, maps, and images of Beckford's world.
      </p>

      {categories.map((cat) => {
        const items = gallery.filter((g) => g.category === cat.key);
        return (
          <section key={cat.key} className="mb-16">
            <h2 className="heading-display text-2xl mb-6 pb-2 border-b border-parchment-dim">
              {cat.label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {items.map((item) => (
                <figure key={item.file} className="group">
                  <div className="relative aspect-[4/3] overflow-hidden bg-parchment-dim">
                    <Image
                      src={`/images/gallery/${item.file}`}
                      alt={item.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <figcaption className="mt-2">
                    <p className="text-sm font-medium text-ink leading-snug">
                      {item.caption}
                    </p>
                    <p className="text-xs text-fog mt-0.5 leading-snug">
                      {item.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
