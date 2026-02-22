"use client";

import { useState, useCallback, useRef, useMemo, useEffect, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import type { FeatureCollection } from "geojson";
import { landforms } from "@/data/landforms";
import { regionGroups } from "@/data/regions";
import type { Landform } from "@/data/types";
import { ArrowRight, MapPin, MousePointerClick } from "lucide-react";
import { getIndiaGeographies } from "@/lib/indiaGeo";

const MAP_WIDTH = 600;
const MAP_HEIGHT = 600;

const landformBySlug = new Map(landforms.map((lf) => [lf.slug, lf]));
const regionById = new Map(regionGroups.map((region) => [region.id, region]));
const regionByState = new Map<string, (typeof regionGroups)[number]>();
regionGroups.forEach((region) => {
  region.states.forEach((state) => regionByState.set(state, region));
});

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
  geographies,
  pathGenerator,
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
  geographies: FeatureCollection;
  pathGenerator: (geo: GeoPermissibleObjects) => string | null;
}) {
  return (
    <g strokeLinejoin="round">
      {geographies.features.map((geo, index) => {
        const props = (geo.properties ?? {}) as { ST_NM?: string };
        const stateName = props.ST_NM ?? "";
        const region = regionByState.get(stateName);
        const path = pathGenerator(geo as GeoPermissibleObjects);

        if (!path) return null;

        // A region is active if it's currently selected OR (nothing is selected and it's hovered)
        const isHovered = hoveredSlug === region?.id;
        const isSelected = selectedSlug === region?.id;

        // Dim others if something is either selected or hovered
        const somethingActive = selectedSlug !== null || hoveredSlug !== null;
        const isHighlighted = isSelected || isHovered;

        let fill = "#1e293b";
        if (region) {
          if (isSelected) fill = region.bright;
          else if (isHovered && !selectedSlug) fill = region.bright;
          else if (isHovered && selectedSlug) fill = region.color;
          else if (somethingActive) fill = region.dim;
          else fill = region.color;
        }

        // Merge stroke with fill visually to create region blobs
        let stroke = "#0f172a";
        if (region) stroke = fill;

        return (
          <path
            key={`${stateName}-${index}`}
            d={path}
            onMouseEnter={() => region && onHover(region.id)}
            onMouseLeave={onLeave}
            onFocus={() => region && onHover(region.id)}
            onBlur={onLeave}
            onMouseMove={(e: React.MouseEvent<SVGPathElement>) => {
              if (region) {
                onMouseMove(e, region.label, region.color);
              }
            }}
            onClick={(e: React.MouseEvent<SVGPathElement>) => {
              e.stopPropagation();
              if (region) onSelect(region.id);
            }}
            onKeyDown={(e: React.KeyboardEvent<SVGPathElement>) => {
              if (!region) return;
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onSelect(region.id);
              }
            }}
            tabIndex={region ? 0 : -1}
            role={region ? "button" : "img"}
            aria-label={region ? `${region.label} region` : undefined}
            style={{
              fill,
              stroke,
              strokeWidth: isHighlighted ? 1.4 : 0.8,
              cursor: region ? "pointer" : "default",
              transition: "all 350ms ease",
              outline: "none",
            }}
          />
        );
      })}
    </g>
  );
}

/* ─── Main component ─── */
function IndiaMapInner() {
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);
  const [geographies, setGeographies] = useState<FeatureCollection | null>(
    null,
  );
  const mapRef = useRef<HTMLDivElement>(null);

  // We display info for the selected slug if it exists, otherwise fallback to hovered slug
  const activeDisplaySlug = selectedSlug || hoveredSlug;

  const activeLandform: Landform | null = activeDisplaySlug
    ? (landformBySlug.get(activeDisplaySlug) ?? null)
    : null;
  const activeRegion = activeDisplaySlug
    ? (regionById.get(activeDisplaySlug) ?? null)
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
        selectedSlug === activeRegion?.id &&
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

  useEffect(() => {
    let cancelled = false;

    async function loadGeographies() {
      try {
        const collection = await getIndiaGeographies();
        if (!cancelled) setGeographies(collection);
      } catch (error) {
        console.error("Failed to load map data", error);
      }
    }

    loadGeographies();

    return () => {
      cancelled = true;
    };
  }, []);

  const projection = useMemo(
    () =>
      geoMercator()
        .scale(1100)
        .center([80.5, 22.5])
        .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]),
    [],
  );

  const pathGenerator = useMemo(() => geoPath(projection), [projection]);
  const lakshadweep = projection([72.8, 10.5]);
  const andaman = projection([92.9, 11]);

  return (
    <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-12 items-start relative">
      {/* ── Map Side ── */}
      <div
        ref={mapRef}
        className="relative w-full max-w-[520px] sm:max-w-[600px] mx-auto lg:mx-0 group"
        onMouseLeave={handleLeave}
        role="region"
        aria-label="Interactive map of India by landform"
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
          <svg
            width={MAP_WIDTH}
            height={MAP_HEIGHT}
            viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
            className="w-full h-full object-contain"
          >
            {geographies && (
              <RegionGeographies
                hoveredSlug={hoveredSlug}
                selectedSlug={selectedSlug}
                onHover={handleHover}
                onLeave={() => {}}
                onSelect={handleSelect}
                onMouseMove={handleMouseMove}
                geographies={geographies}
                pathGenerator={pathGenerator}
              />
            )}

            {lakshadweep && (
              <g
                transform={`translate(${lakshadweep[0]}, ${lakshadweep[1]})`}
                onMouseEnter={() => handleHover("islands")}
                onMouseLeave={handleLeave}
                onMouseMove={(e) => {
                  const region = regionGroups.find((r) => r.id === "islands");
                  if (region) handleMouseMove(e, region.label, region.color);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect("islands");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect("islands");
                  }
                }}
                className="cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label="Islands region"
              >
                <circle
                  r={22}
                  fill={regionGroups.find((r) => r.id === "islands")?.color}
                  opacity={activeDisplaySlug === "islands" ? 0.3 : 0.08}
                  className="transition-all duration-300 pointer-events-none"
                />
                <circle
                  r={8}
                  fill={regionGroups.find((r) => r.id === "islands")?.color}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    transformOrigin: "center",
                  }}
                />
              </g>
            )}

            {andaman && (
              <g
                transform={`translate(${andaman[0]}, ${andaman[1]})`}
                onMouseEnter={() => handleHover("islands")}
                onMouseLeave={handleLeave}
                onMouseMove={(e) => {
                  const region = regionGroups.find((r) => r.id === "islands");
                  if (region) handleMouseMove(e, region.label, region.color);
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelect("islands");
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    handleSelect("islands");
                  }
                }}
                className="cursor-pointer"
                tabIndex={0}
                role="button"
                aria-label="Islands region"
              >
                <circle
                  r={28}
                  fill={regionGroups.find((r) => r.id === "islands")?.color}
                  opacity={activeDisplaySlug === "islands" ? 0.3 : 0.08}
                  className="transition-all duration-300 pointer-events-none"
                />
                <circle
                  r={10}
                  fill={regionGroups.find((r) => r.id === "islands")?.color}
                  stroke="#ffffff"
                  strokeWidth={1.5}
                  className="transition-all duration-300 cursor-pointer"
                  style={{
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                    transformOrigin: "center",
                  }}
                />
              </g>
            )}
          </svg>
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

        {/* ── Legend / Tabs ── */}
        <div className="mt-3 relative z-30 w-full px-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 bg-background/50 backdrop-blur-md p-2 rounded-2xl border border-white/5 shadow-inner">
            {regionGroups.map((region) => {
              const isSelected = selectedSlug === region.id;
              const isHovered = hoveredSlug === region.id;
              const isActive = isSelected || (isHovered && !selectedSlug);
              const landform = landformBySlug.get(region.landformSlug);
              const topStat = landform?.stats[0];

              return (
                <button
                  key={region.id}
                  type="button"
                  aria-pressed={isActive}
                  className={`relative flex flex-col items-start justify-between gap-2 text-left p-3 sm:p-4 min-h-[124px] rounded-xl transition-all duration-300 overflow-hidden group/tab focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 ${
                    isActive
                      ? "bg-white/10 ring-1 ring-white/20 shadow-md"
                      : "hover:bg-white/5 opacity-80 hover:opacity-100"
                  }`}
                  onMouseEnter={() => handleHover(region.id)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleSelect(region.id)}
                >
                  <div
                    className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${isActive ? "opacity-20" : "group-hover/tab:opacity-10"}`}
                    style={{
                      background: `linear-gradient(to bottom right, ${region.color}, transparent)`,
                    }}
                  />

                  <div className="flex items-start justify-between w-full relative z-10 gap-3">
                    <div className="flex items-start gap-2">
                      <span
                        className="mt-1 w-2.5 h-2.5 rounded-full shrink-0 transition-colors"
                        style={{
                          backgroundColor:
                            isActive || !activeDisplaySlug
                              ? region.color
                              : `${region.color}40`,
                          boxShadow: isActive
                            ? `0 0 8px ${region.color}`
                            : "none",
                        }}
                      />
                      <div className="space-y-1">
                        <span
                          className={`text-[11px] sm:text-[12px] font-semibold tracking-wide ${isActive ? "text-white" : "text-muted-foreground"}`}
                        >
                          {region.label}
                        </span>
                        {landform && (
                          <span className="block text-[10px] text-muted-foreground/80 line-clamp-2">
                            {landform.tagline}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[9px] uppercase tracking-widest text-muted-foreground/70">
                      {region.states.length} states
                    </span>
                  </div>

                  {topStat && (
                    <div className="relative z-10 flex flex-wrap items-center gap-2 text-[10px]">
                      <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 text-muted-foreground/80">
                        {topStat.label}
                      </span>
                      <span className="text-foreground/90 font-semibold">
                        {topStat.value}
                      </span>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Helper text */}
        <p className="text-center text-[10px] text-muted-foreground/60 mt-4 flex items-center justify-center gap-1">
          <MousePointerClick className="h-3 w-3 opacity-70" />
          Click any region on the map or tab to pin details
        </p>

        <div className="sr-only">
          <p>Landform regions</p>
          <ul>
            {regionGroups.map((region) => (
              <li key={region.id}>
                <Link href={`/landforms/${region.id}`}>{region.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Info Panel ── */}
      <div className="min-h-[360px] lg:min-h-[440px] flex items-center justify-center relative z-10 w-full max-w-md mx-auto lg:mx-0">
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
                    <p className="text-xs sm:text-sm text-muted-foreground mt-2 max-w-xs">
                      {activeLandform.tagline}
                    </p>
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
                    src={activeLandform.heroImageUrl}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    alt={activeLandform.name}
                    className="w-full h-full object-cover transform motion-safe:group-hover/panel:scale-105 transition-transform duration-1000 ease-out"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent" />
                </div>

                {/* Body */}
                <div className="space-y-5 relative z-10">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80">
                      Overview
                    </p>
                    <p className="text-muted-foreground leading-relaxed text-sm sm:text-base line-clamp-4 mt-2">
                      {activeLandform.summary}
                    </p>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80">
                      Key facts
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      {activeLandform.stats.slice(0, 4).map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                        >
                          <p className="text-[10px] uppercase tracking-widest text-white/50">
                            {stat.label}
                          </p>
                          <p className="text-sm text-white font-semibold mt-1">
                            {stat.value}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground/80">
                      Highlights
                    </p>
                    <ul className="mt-2 space-y-2">
                      {activeLandform.highlights
                        .slice(0, 3)
                        .map((highlight) => (
                          <li
                            key={highlight.title}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span
                              className="mt-1.5 h-1.5 w-1.5 rounded-full"
                              style={{
                                backgroundColor:
                                  highlight.accent ?? activeRegion.color,
                              }}
                            />
                            <span>
                              <span className="text-white/90 font-semibold">
                                {highlight.title}
                              </span>{" "}
                              <span className="text-muted-foreground">
                                {highlight.description}
                              </span>
                            </span>
                          </li>
                        ))}
                    </ul>
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
