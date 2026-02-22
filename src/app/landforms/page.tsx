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
      <div className="atlas-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="atlas-kicker">Atlas index</p>
            <h1 className="atlas-title">
              <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Landforms
              </span>{" "}
              of India
            </h1>
          </div>
          <p className="atlas-subtitle max-w-2xl">
            Six physiographic divisions organize the atlas. Each holds its own
            climate bands, rivers, biodiversity corridors, and cultural hubs.
          </p>
        </div>

        <div className="atlas-panel p-4 sm:p-6 mb-10">
          <div className="grid sm:grid-cols-3 gap-4 text-sm text-muted-foreground">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Coverage
              </p>
              <p className="mt-2">
                6 landforms, 28+ states, and hundreds of distinct ecosystems.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Best use
              </p>
              <p className="mt-2">
                Use this index to jump into each landscape and explore its
                story, ecology, and signature species.
              </p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Atlas tip
              </p>
              <p className="mt-2">
                Hover over a card to reveal key stats and jump directly to the
                detailed atlas page.
              </p>
            </div>
          </div>
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
