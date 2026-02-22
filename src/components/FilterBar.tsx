"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

  const typeOptions = [
    { key: "all", label: "All" },
    { key: "flora", label: "🌿 Flora" },
    { key: "fauna", label: "🐾 Fauna" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-4 p-4 bg-card border border-border/50 rounded-xl mb-8">
      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Type
        </span>
        <div className="flex gap-1.5">
          {typeOptions.map((btn) => (
            <Button
              key={btn.key}
              variant={activeType === btn.key ? "default" : "outline"}
              size="sm"
              onClick={() => handleTypeChange(btn.key)}
              className={
                activeType === btn.key
                  ? "bg-linear-to-r from-cyan-primary to-teal-accent text-white border-none"
                  : "border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50"
              }
            >
              {btn.label}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
          Landform
        </span>
        <Select value={activeLandform} onValueChange={handleLandformChange}>
          <SelectTrigger className="w-[200px] bg-secondary border-border/50 text-foreground">
            <SelectValue placeholder="All Landforms" />
          </SelectTrigger>
          <SelectContent className="bg-card border-border">
            <SelectItem value="all">All Landforms</SelectItem>
            {landformOptions.map((lf) => (
              <SelectItem key={lf.slug} value={lf.slug}>
                {lf.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
