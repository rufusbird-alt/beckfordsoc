"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

const portraits = [
  { file: "portrait-beckford3.jpg", caption: "William Beckford, c.1795" },
  { file: "Romney-beckford2.JPG", caption: "William Beckford, c.1781" },
  { file: "young-beckford1.JPG", caption: "William Beckford as a Child, c.1764" },
  { file: "deathbed-beckford5.jpg", caption: "William Beckford on his Deathbed, 1844" },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(
    () => setCurrent((c) => (c + 1) % portraits.length),
    []
  );
  const prev = () =>
    setCurrent((c) => (c - 1 + portraits.length) % portraits.length);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <div
      className="relative w-64 md:w-80 lg:w-96 shrink-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative aspect-[3/4] overflow-hidden">
        {portraits.map((p, i) => (
          <div
            key={p.file}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={`/images/gallery/${p.file}`}
              alt={p.caption}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
              priority={i === 0}
            />
          </div>
        ))}

        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-ink/50 hover:bg-ink/80 text-parchment w-8 h-8 flex items-center justify-center text-xl transition-colors"
          aria-label="Previous portrait"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-ink/50 hover:bg-ink/80 text-parchment w-8 h-8 flex items-center justify-center text-xl transition-colors"
          aria-label="Next portrait"
        >
          ›
        </button>
      </div>

      <p className="text-fog/60 text-xs italic mt-2 text-center min-h-[1rem] transition-all duration-500">
        {portraits[current].caption}
      </p>

      <div className="flex justify-center gap-2 mt-2">
        {portraits.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-1.5 h-1.5 rounded-full transition-colors ${
              i === current ? "bg-gilt" : "bg-fog/30 hover:bg-fog/60"
            }`}
            aria-label={`Portrait ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
