"use client";

import { useState, useMemo } from "react";
import { wildlife } from "@/data/wildlife";
import { landforms } from "@/data/landforms";
import WildlifeCard from "@/components/WildlifeCard";
import FilterBar from "@/components/FilterBar";

export default function WildlifePage() {
  const [filter, setFilter] = useState({ type: "all", landform: "all" });

  const filtered = useMemo(() => {
    return wildlife.filter((w) => {
      if (filter.type !== "all" && w.type !== filter.type) return false;
      if (
        filter.landform !== "all" &&
        !w.landformSlugs.includes(filter.landform)
      )
        return false;
      return true;
    });
  }, [filter]);

  const landformOptions = landforms.map((lf) => ({
    slug: lf.slug,
    name: lf.name,
  }));

  return (
    <section className="pt-24 md:pt-28 pb-20">
      <div className="atlas-container">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <p className="atlas-kicker">Atlas index</p>
            <h1 className="atlas-title">
              <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Flora & Fauna
              </span>{" "}
              of India
            </h1>
          </div>
          <p className="atlas-subtitle max-w-xl">
            Filter by landform or type to trace biodiversity corridors across
            India&apos;s landscapes.
          </p>
        </div>

        <div className="atlas-panel p-4 sm:p-6 mb-6">
          <FilterBar
            onFilterChange={setFilter}
            landformOptions={landformOptions}
          />
        </div>

        <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
          <p className="text-muted-foreground text-sm">
            {filtered.length} species found
          </p>
          <span className="atlas-chip">Updated 2026</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((sp, i) => (
            <WildlifeCard key={sp.slug} species={sp} index={i} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center py-20 text-muted-foreground text-lg">
            No species match your filters. Try adjusting the criteria.
          </p>
        )}
      </div>
    </section>
  );
}
