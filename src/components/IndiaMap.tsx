"use client";

import { useState, useCallback, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { landforms } from "@/data/landforms";
import { ArrowRight, MapPin, MousePointerClick } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ─── Region config ─── */
interface Region {
  slug: string;
  label: string;
  color: string;
  bright: string;
  dim: string;
  states: string[];
}

const REGIONS: Region[] = [
  {
    slug: "himalayan-mountains",
    label: "Himalayan Mountains",
    color: "#8b5cf6",
    bright: "#a78bfa",
    dim: "#8b5cf620",
    states: [
      "Jammu & Kashmir",
      "Ladakh",
      "Himachal Pradesh",
      "Uttarakhand",
      "Sikkim",
      "Arunachal Pradesh",
    ],
  },
  {
    slug: "northern-plains",
    label: "Northern Plains",
    color: "#10b981",
    bright: "#34d399",
    dim: "#10b98120",
    states: [
      "Punjab",
      "Haryana",
      "Delhi",
      "Chandigarh",
      "Uttar Pradesh",
      "Bihar",
      "West Bengal",
      "Assam",
      "Meghalaya",
      "Tripura",
      "Manipur",
      "Mizoram",
      "Nagaland",
    ],
  },
  {
    slug: "thar-desert",
    label: "Thar Desert",
    color: "#f59e0b",
    bright: "#fbbf24",
    dim: "#f59e0b20",
    states: ["Rajasthan"],
  },
  {
    slug: "peninsular-plateau",
    label: "Peninsular Plateau",
    color: "#f97316",
    bright: "#fb923c",
    dim: "#f9731620",
    states: [
      "Madhya Pradesh",
      "Chhattisgarh",
      "Jharkhand",
      "Maharashtra",
      "Telangana",
      "Karnataka",
    ],
  },
  {
    slug: "coastal-plains",
    label: "Coastal Plains",
    color: "#0ea5e9",
    bright: "#38bdf8",
    dim: "#0ea5e920",
    states: [
      "Gujarat",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Goa",
      "Kerala",
      "Tamil Nadu",
      "Puducherry",
      "Andhra Pradesh",
      "Odisha",
    ],
  },
  {
    slug: "islands",
    label: "Islands",
    color: "#14b8a6",
    bright: "#2dd4bf",
    dim: "#14b8a620",
    states: ["Andaman & Nicobar Islands", "Andaman & Nicobar", "Lakshadweep"],
  },
];

const GEO_URL = "/india-states.json";

function getRegion(name: string): Region | undefined {
  return REGIONS.find((r) => r.states.includes(name));
}

/* ─── Tooltip state ─── */
interface TooltipInfo {
  x: number;
  y: number;
  regionLabel: string;
  regionColor: string;
}

/* ─── Sub-map renderer ─── */
function RegionGeographies({
  hoveredSlug,
  selectedSlug,
  onHover,
  onLeave,
  onSelect,
  onMouseMove,
}: {
  hoveredSlug: string | null;
  selectedSlug: string | null;
  onHover: (slug: string) => void;
  onLeave: () => void;
  onSelect: (slug: string) => void;
  onMouseMove: (
    e: React.MouseEvent,
    regionLabel: string,
    regionColor: string,
  ) => void;
}) {
  return (
    <Geographies geography={GEO_URL}>
      {({ geographies }) => (
        <g strokeLinejoin="round">
          {geographies.map((geo) => {
            const stateName = geo.properties.ST_NM;
            const region = getRegion(stateName);

            // A region is active if it's currently selected OR (nothing is selected and it's hovered)
            const isHovered = hoveredSlug === region?.slug;
            const isSelected = selectedSlug === region?.slug;

            // Dim others if something is either selected or hovered
            const somethingActive =
              selectedSlug !== null || hoveredSlug !== null;
            const isHighlighted = isSelected || isHovered;

            let fill = "#1e293b";
            if (region) {
              if (isSelected) fill = region.bright;
              else if (isHovered && !selectedSlug) fill = region.bright;
              else if (isHovered && selectedSlug)
                fill = region.color; // Muted hover if something else is selected
              else if (somethingActive) fill = region.dim;
              else fill = region.color;
            }

            // Merge stroke with fill visually to create region blobs
            let stroke = "#0f172a";
            if (region) stroke = fill;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => region && onHover(region.slug)}
                onMouseLeave={onLeave}
                onMouseMove={(e: React.MouseEvent) => {
                  if (region) {
                    onMouseMove(e, region.label, region.color);
                  }
                }}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  if (region) onSelect(region.slug);
                }}
                style={{
                  default: {
                    fill,
                    stroke,
                    strokeWidth: isHighlighted ? 1.4 : 0.8,
                    cursor: region ? "pointer" : "default",
                    transition: "all 350ms ease",
                    outline: "none",
                  },
                  hover: {
                    fill: region ? region.bright : "#1e293b",
                    stroke: region ? region.bright : "#0f172a",
                    strokeWidth: 1.4,
                    cursor: "pointer",
                    transition: "all 150ms ease",
                    outline: "none",
                  },
                  pressed: {
                    fill: region ? region.color : "#1e293b",
                    stroke: region ? region.color : "#0f172a",
                    outline: "none",
                  },
                }}
              />
            );
          })}
        </g>
      )}
    </Geographies>
  );
}

/* ─── Main component ─── */
function IndiaMapInner() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  // We display info for the selected slug if it exists, otherwise fallback to hovered slug
  const activeDisplaySlug = selectedSlug || hoveredSlug;

  const activeLandform = activeDisplaySlug
    ? landforms.find((lf) => lf.slug === activeDisplaySlug)
    : null;
  const activeRegion = activeDisplaySlug
    ? REGIONS.find((r) => r.slug === activeDisplaySlug)
    : null;

  const handleHover = useCallback((slug: string) => setHoveredSlug(slug), []);
  const handleLeave = useCallback(() => {
    setHoveredSlug(null);
    setTooltip(null);
  }, []);

  const handleSelect = useCallback((slug: string) => {
    setSelectedSlug((prev) => (prev === slug ? null : slug));
    setTooltip(null); // Hide tooltip when selecting
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, regionLabel: string, regionColor: string) => {
      // Don't show tooltip for the currently selected region (it's already in the panel)
      if (
        selectedSlug === activeRegion?.slug &&
        regionLabel === activeRegion?.label
      ) {
        setTooltip(null);
        return;
      }

      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        regionLabel,
        regionColor,
      });
    },
    [selectedSlug, activeRegion],
  );

  // Handle clicking outside the map controls to clear selection
  // React-simple-maps intercepts map clicks, so we attach this to the container background
  const handleBackgroundClick = useCallback(() => {
    setSelectedSlug(null);
  }, []);

  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center relative">
      {/* ── Map Side ── */}
      <div
        ref={mapRef}
        className="relative w-full max-w-[600px] mx-auto group"
        onMouseLeave={handleLeave}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-cyan-primary/4 rounded-3xl blur-[80px] -z-10" />

        {/* Floating Deselect Hint */}
        <AnimatePresence>
          {selectedSlug && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={handleBackgroundClick}
              className="absolute top-0 right-4 z-20 text-[10px] font-medium tracking-wide text-muted-foreground bg-background/50 hover:bg-background/80 hover:text-foreground backdrop-blur-md px-3 py-1.5 rounded-full border border-border transition-colors shadow-sm"
            >
              Clear selection ✕
            </motion.button>
          )}
        </AnimatePresence>

        {/* 
          Mainland and Islands mapped together.
          Scale and center properly frame the subcontinent.
        */}
        <div
          className="relative w-full aspect-[1/1.12] transform transition-transform duration-700"
          onClick={handleBackgroundClick}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1250, center: [81.5, 22.5] }}
            width={600}
            height={670}
            className="w-full h-full object-contain"
          >
            <RegionGeographies
              hoveredSlug={hoveredSlug}
              selectedSlug={selectedSlug}
              onHover={handleHover}
              onLeave={() => {}}
              onSelect={handleSelect}
              onMouseMove={handleMouseMove}
            />

            {/* Lakshadweep Highlights */}
            <Marker coordinates={[72.8, 10.5]}>
              <g
                onMouseEnter={() => handleHover("islands")}
                onMouseLeave={handleLeave}
                onMouseMove={(e) => {
                  const region = REGIONS.find((r) => r.slug === "islands");
                  if (region) handleMouseMove(e, region.label, region.color);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect("islands");
                }}
                className="cursor-pointer"
              >
                <circle
                  r={22}
                  fill={REGIONS.find((r) => r.slug === "islands")?.color}
                  opacity={activeDisplaySlug === "islands" ? 0.3 : 0.08}
                  className="transition-all duration-300 pointer-events-none"
                />
                <circle
                  r={8}
                  fill={REGIONS.find((r) => r.slug === "islands")?.color}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    transformOrigin: "center",
                  }}
                />
              </g>
            </Marker>

            {/* Andaman & Nicobar Highlights */}
            <Marker coordinates={[92.9, 11]}>
              <g
                onMouseEnter={() => handleHover("islands")}
                onMouseLeave={handleLeave}
                onMouseMove={(e) => {
                  const region = REGIONS.find((r) => r.slug === "islands");
                  if (region) handleMouseMove(e, region.label, region.color);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect("islands");
                }}
                className="cursor-pointer"
              >
                <circle
                  r={28}
                  fill={REGIONS.find((r) => r.slug === "islands")?.color}
                  opacity={activeDisplaySlug === "islands" ? 0.3 : 0.08}
                  className="transition-all duration-300 pointer-events-none"
                />
                <circle
                  r={10}
                  fill={REGIONS.find((r) => r.slug === "islands")?.color}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    transformOrigin: "center",
                  }}
                />
              </g>
            </Marker>
          </ComposableMap>
        </div>

        {/* ── Cursor tooltip ── */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute pointer-events-none z-20"
              style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}
            >
              <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg px-3 py-2 shadow-xl min-w-[140px]">
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0 shadow-inner"
                    style={{ backgroundColor: tooltip.regionColor }}
                  />
                  <span className="text-foreground text-xs font-bold tracking-wide">
                    {tooltip.regionLabel}
                  </span>
                </div>
                <p className="text-muted-foreground text-[10px] mt-1 ml-4 opacity-80">
                  {selectedSlug ? "Click to switch" : "Click to select"}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Legend ── */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 px-4 bg-background/40 backdrop-blur-sm py-3 rounded-2xl border border-white/5 mx-4 shadow-sm relative z-30">
          {REGIONS.map((region) => {
            const isSelected = selectedSlug === region.slug;
            const isHovered = hoveredSlug === region.slug;
            const isActive = isSelected || (isHovered && !selectedSlug);
            const isDimmed = activeDisplaySlug && !isActive;

            return (
              <button
                key={region.slug}
                className={`flex items-center gap-1.5 text-[11px] transition-all rounded-full px-2.5 py-1 ${
                  isActive
                    ? "text-foreground bg-white/10 ring-1 ring-white/20 shadow-sm"
                    : isDimmed
                      ? "text-muted-foreground/40 grayscale filter"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                }`}
                onMouseEnter={() => handleHover(region.slug)}
                onMouseLeave={handleLeave}
                onClick={() => handleSelect(region.slug)}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0 transition-colors"
                  style={{
                    backgroundColor:
                      isActive || !activeDisplaySlug
                        ? region.color
                        : `${region.color}40`,
                    boxShadow: isActive ? `0 0 8px ${region.color}40` : "none",
                  }}
                />
                {region.label}
              </button>
            );
          })}
        </div>

        {/* Helper text */}
        <p className="text-center text-[10px] text-muted-foreground/60 mt-3 flex items-center justify-center gap-1">
          <MousePointerClick className="h-3 w-3" />
          Click any region on the map or legend to pin selection
        </p>
      </div>

      {/* ── Info Panel ── */}
      <div className="min-h-[440px] flex items-center justify-center relative z-10 w-full max-w-md mx-auto lg:mx-0">
        <AnimatePresence mode="wait">
          {activeLandform && activeRegion ? (
            <motion.div
              key={activeLandform.slug}
              initial={{ opacity: 0, scale: 0.98, x: 10, y: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, x: -5, y: -5 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
              className="w-full relative group/panel"
            >
              <div
                className="absolute -inset-0.5 rounded-[2.5rem] blur-xl opacity-20 transition duration-1000 group-hover/panel:opacity-40"
                style={{ backgroundColor: activeRegion.color }}
              />

              <div className="relative space-y-6 w-full bg-card/60 p-6 sm:p-8 rounded-[2rem] border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Decorative background glow */}
                <div
                  className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[64px] opacity-20 pointer-events-none"
                  style={{ backgroundColor: activeRegion.color }}
                />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <div
                        className="h-1.5 w-8 rounded-full shadow-sm"
                        style={{ backgroundColor: activeRegion.color }}
                      />
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest opacity-80"
                        style={{ color: activeRegion.bright }}
                      >
                        {activeRegion.label}
                      </span>
                    </div>
                    <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-none bg-clip-text text-transparent bg-linear-to-b from-white to-white/70">
                      {activeLandform.name}
                    </h3>
                  </div>

                  {selectedSlug === activeLandform.slug && (
                    <div className="hidden sm:flex shrink-0">
                      <span className="flex h-6 items-center px-2.5 rounded-full bg-white/10 border border-white/10 text-[9px] font-black uppercase tracking-wider text-white">
                        Pinned
                      </span>
                    </div>
                  )}
                </div>

                {/* Image */}
                <div className="rounded-2xl overflow-hidden h-48 w-full relative shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/5 group-hover/panel:border-white/10 transition-colors">
                  <Image
                    src={activeLandform.imageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    alt={activeLandform.name}
                    className="w-full h-full object-cover transform motion-safe:group-hover/panel:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent" />
                </div>

                {/* Body */}
                <div className="space-y-4 relative z-10">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-3">
                    {activeLandform.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {activeLandform.facts.slice(0, 3).map((fact, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-black/20 text-white/80 font-medium text-[10px] sm:text-[11px] px-3 py-1.5 border border-white/5 backdrop-blur-md"
                      >
                        <span className="text-white/40 mr-1.5">
                          {fact.label}
                        </span>
                        {fact.value}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-2 relative z-10">
                  <Link
                    href={`/landforms/${activeLandform.slug}`}
                    className="group/btn flex items-center justify-between w-full font-semibold text-sm transition-all py-3.5 px-5 rounded-xl hover:shadow-lg hover:shadow-primary/20 overflow-hidden relative"
                  >
                    <div className="absolute inset-0 bg-primary/10 transition-colors group-hover/btn:bg-primary/20" />
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-20 transition-opacity duration-500 bg-linear-to-r from-transparent via-white to-transparent -translate-x-full group-hover/btn:translate-x-full" />

                    <span className="text-primary relative z-10">
                      Explore detailed geography
                    </span>
                    <div className="relative z-10 bg-primary/20 text-primary p-1.5 rounded-lg group-hover/btn:bg-primary group-hover/btn:text-primary-foreground transition-colors">
                      <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-6 w-full p-6 text-center"
            >
              <div className="mx-auto p-4 bg-primary/10 rounded-2xl inline-block shadow-inner ring-1 ring-primary/20 relative overflow-hidden group/empty">
                <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover/empty:translate-y-0 transition-transform duration-500 ease-out" />
                <MapPin className="h-8 w-8 text-primary relative z-10 animate-pulse" />
              </div>
              <div>
                <h3 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">
                  Explore by Region
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto text-sm">
                  India&apos;s diverse geography is divided into six major
                  landform zones. Hover to preview or{" "}
                  <strong className="text-foreground">click to select</strong> a
                  landscape.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const IndiaMap = memo(IndiaMapInner);
export default IndiaMap;
