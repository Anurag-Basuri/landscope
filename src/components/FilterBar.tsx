"use client";

import { useState } from "react";

interface Props {
  onFilterChange: (filter: { type: string; landform: string }) => void;
  landformOptions: { slug: string; name: string }[];
}

export default function FilterBar({ onFilterChange, landformOptions }: Props) {
  const [activeType, setActiveType] = useState("all");
  const [activeLandform, setActiveLandform] = useState("all");

  function handleTypeChange(type: string) {
    setActiveType(type);
    onFilterChange({ type, landform: activeLandform });
  }

  function handleLandformChange(landform: string) {
    setActiveLandform(landform);
    onFilterChange({ type: activeType, landform });
  }

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <span className="filter-label">Type:</span>
        <div className="filter-buttons">
          {[
            { key: "all", label: "All" },
            { key: "flora", label: "🌿 Flora" },
            { key: "fauna", label: "🐾 Fauna" },
          ].map((btn) => (
            <button
              key={btn.key}
              className={`filter-btn ${activeType === btn.key ? "active" : ""}`}
              onClick={() => handleTypeChange(btn.key)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-group">
        <span className="filter-label">Landform:</span>
        <select
          className="filter-select"
          value={activeLandform}
          onChange={(e) => handleLandformChange(e.target.value)}
        >
          <option value="all">All Landforms</option>
          {landformOptions.map((lf) => (
            <option key={lf.slug} value={lf.slug}>
              {lf.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
