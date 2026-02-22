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
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-foreground mb-4">
            <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
              Flora & Fauna
            </span>{" "}
            of India
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the incredible biodiversity across India&apos;s landforms —
            from Himalayan snow leopards to island coral reefs.
          </p>
        </div>

        <FilterBar
          onFilterChange={setFilter}
          landformOptions={landformOptions}
        />

        <p className="text-muted-foreground text-sm mb-6">
          {filtered.length} species found
        </p>

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
