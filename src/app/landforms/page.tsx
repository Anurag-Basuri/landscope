import { landforms } from "@/data/landforms";
import LandformCard from "@/components/LandformCard";

export const metadata = {
  title: "Landforms of India — Landscope",
  description:
    "Explore the six major landforms that define India's diverse geography.",
};

export default function LandformsPage() {
  return (
    <section className="pt-24 md:pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">
            <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
              Landforms
            </span>{" "}
            of India
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            India&apos;s terrain is divided into six distinct physiographic
            divisions — from the highest mountains on Earth to sun-kissed
            tropical islands. Each supports unique ecosystems, cultures, and
            communities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {landforms.map((lf, i) => (
            <LandformCard key={lf.slug} landform={lf} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
