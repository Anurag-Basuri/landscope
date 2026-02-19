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
    <section className="section">
      <div className="container">
        <h1 className="headline headline-1 section-title">
          <span className="span">Flora & Fauna</span> of India
        </h1>
        <p
          className="section-text"
          style={{ maxWidth: "700px", margin: "0 auto 30px" }}
        >
          Discover the incredible biodiversity across India&apos;s landforms —
          from Himalayan snow leopards to island coral reefs.
        </p>

        <FilterBar
          onFilterChange={setFilter}
          landformOptions={landformOptions}
        />

        <p className="results-count">{filtered.length} species found</p>

        <div className="wildlife-grid">
          {filtered.map((sp) => (
            <WildlifeCard key={sp.slug} species={sp} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="empty-state">
            No species match your filters. Try adjusting the criteria.
          </p>
        )}
      </div>
    </section>
  );
}
