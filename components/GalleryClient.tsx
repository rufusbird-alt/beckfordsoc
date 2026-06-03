"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

type GalleryItem = {
  file: string;
  caption: string;
  description: string;
  category: string;
};

const categories = [
  { key: "portraits", label: "Portraits" },
  { key: "fonthill", label: "Fonthill Abbey" },
  { key: "bath", label: "Bath" },
];

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (!lightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightbox]);

  return (
    <>
      {categories.map((cat) => {
        const catItems = items.filter((g) => g.category === cat.key);
        return (
          <section key={cat.key} className="mb-16">
            <h2 className="heading-display text-2xl mb-6 pb-2 border-b border-parchment-dim">
              {cat.label}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {catItems.map((item) => (
                <figure
                  key={item.file}
                  className="group cursor-zoom-in"
                  onClick={() => setLightbox(item)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-parchment-dim">
                    <Image
                      src={`/images/gallery/${item.file}`}
                      alt={item.caption}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
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

      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-parchment/60 hover:text-parchment text-4xl leading-none transition-colors"
              aria-label="Close"
            >
              ×
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/gallery/${lightbox.file}`}
              alt={lightbox.caption}
              className="max-h-[75vh] max-w-full object-contain block"
            />
            <div className="mt-5 text-center max-w-xl">
              <p className="text-parchment font-[family-name:var(--font-display)] text-lg">
                {lightbox.caption}
              </p>
              <p className="text-fog/80 text-sm mt-1 leading-relaxed">
                {lightbox.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
