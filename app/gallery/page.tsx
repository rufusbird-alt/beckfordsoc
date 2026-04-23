import gallery from "@/data/gallery.json";
import GalleryClient from "@/components/GalleryClient";

export const metadata = {
  title: "Gallery of Pictures",
  description:
    "Portraits of William Beckford, views of Fonthill Abbey and Lansdown Tower, maps, and architectural drawings.",
};

export default function GalleryPage() {
  return (
    <div className="container-wide py-16">
      <p className="eyebrow mb-2">The Beckford Society</p>
      <h1 className="heading-display text-4xl mb-4">Gallery of Pictures</h1>
      <hr className="rule-gilt my-6" />
      <p className="text-ink-soft leading-relaxed mb-14 max-w-2xl">
        Portraits of William Beckford, views of Fonthill Abbey and Lansdown
        Tower, architectural drawings, maps, and images of Beckford&apos;s
        world. Click any image to enlarge.
      </p>
      <GalleryClient items={gallery} />
    </div>
  );
}
