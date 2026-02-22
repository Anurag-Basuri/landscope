"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { geoMercator, geoPath, type GeoPermissibleObjects } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Sparkles } from "lucide-react";
import { RegionGroup, RegionSubregion } from "@/data/types";

const GEO_URL = "/india-states.json";
const MAP_WIDTH = 520;
const MAP_HEIGHT = 560;

interface TooltipInfo {
  x: number;
  y: number;
  label: string;
  color: string;
}

interface Props {
  regionGroup: RegionGroup;
}

function buildSubregionMap(subregions: RegionSubregion[]) {
  const map = new Map<string, RegionSubregion>();
  subregions.forEach((subregion) => {
    subregion.states.forEach((state) => map.set(state, subregion));
  });
  return map;
}

export default function LandformRegionsSection({ regionGroup }: Props) {
  const [geographies, setGeographies] = useState<FeatureCollection | null>(
    null,
  );
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const subregionMap = useMemo(
    () => buildSubregionMap(regionGroup.subregions),
    [regionGroup.subregions],
  );

  const activeSubregion = useMemo(() => {
    const id = selectedId ?? hoveredId;
    return regionGroup.subregions.find((sub) => sub.id === id) ?? null;
  }, [hoveredId, selectedId, regionGroup.subregions]);

  const projection = useMemo(
    () =>
      geoMercator()
        .scale(1000)
        .center([80.5, 22.5])
        .translate([MAP_WIDTH / 2, MAP_HEIGHT / 2]),
    [],
  );

  const pathGenerator = useMemo(() => geoPath(projection), [projection]);

  useEffect(() => {
    let cancelled = false;

    async function loadGeographies() {
      try {
        const response = await fetch(GEO_URL);
        const data = await response.json();

        if (cancelled) return;

        if (data?.type === "FeatureCollection") {
          setGeographies(data as FeatureCollection);
          return;
        }

        if (data?.type === "Topology" && data.objects) {
          const objectKey = Object.keys(data.objects)[0];
          if (!objectKey) return;
          const collection = feature(
            data,
            data.objects[objectKey],
          ) as unknown as FeatureCollection;
          setGeographies(collection);
        }
      } catch (error) {
        console.error("Failed to load region map", error);
      }
    }

    loadGeographies();

    return () => {
      cancelled = true;
    };
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<SVGPathElement>, label: string, color: string) => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        label,
        color,
      });
    },
    [],
  );

  return (
    <section className="mt-16">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Regional Breakdown
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            Regions within {regionGroup.label}
          </h2>
        </div>
        <div className="hidden md:flex items-center gap-2 text-xs text-muted-foreground bg-card/60 border border-border/60 px-3 py-2 rounded-full">
          <MapPin className="h-3.5 w-3.5" />
          {regionGroup.subregions.length} subregions
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div className="relative">
          <div
            ref={mapRef}
            className="relative rounded-3xl border border-white/10 bg-card/40 backdrop-blur-md p-4 shadow-2xl"
          >
            <svg
              width={MAP_WIDTH}
              height={MAP_HEIGHT}
              viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
              className="w-full h-full"
              aria-label={`Map of ${regionGroup.label}`}
              role="img"
            >
              <g strokeLinejoin="round">
                {geographies?.features.map((geo, index) => {
                  const props = (geo.properties ?? {}) as { ST_NM?: string };
                  const stateName = props.ST_NM ?? "";
                  const subregion = subregionMap.get(stateName) ?? null;
                  const path = pathGenerator(geo as GeoPermissibleObjects);

                  if (!path) return null;

                  const isHovered = hoveredId === subregion?.id;
                  const isSelected = selectedId === subregion?.id;
                  const isActive = isSelected || (isHovered && !selectedId);

                  const fill = subregion
                    ? isActive
                      ? subregion.color
                      : `${subregion.color}40`
                    : "#1e293b";

                  const stroke = subregion ? fill : "#0f172a";

                  return (
                    <path
                      key={`${stateName}-${index}`}
                      d={path}
                      onMouseEnter={() =>
                        subregion && setHoveredId(subregion.id)
                      }
                      onMouseLeave={() => {
                        setHoveredId(null);
                        setTooltip(null);
                      }}
                      onMouseMove={(e) => {
                        if (subregion) {
                          handleMouseMove(e, subregion.label, subregion.color);
                        }
                      }}
                      onClick={() => {
                        if (!subregion) return;
                        setSelectedId((prev) =>
                          prev === subregion.id ? null : subregion.id,
                        );
                      }}
                      style={{
                        fill,
                        stroke,
                        strokeWidth: isActive ? 1.2 : 0.8,
                        cursor: subregion ? "pointer" : "default",
                        transition: "all 250ms ease",
                      }}
                    />
                  );
                })}
              </g>
            </svg>

            <AnimatePresence>
              {tooltip && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="absolute pointer-events-none z-20"
                  style={{ left: tooltip.x + 12, top: tooltip.y - 8 }}
                >
                  <div className="bg-background/90 backdrop-blur-md border border-white/10 rounded-lg px-3 py-2 shadow-xl text-xs">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full"
                        style={{ backgroundColor: tooltip.color }}
                      />
                      <span className="text-foreground font-semibold">
                        {tooltip.label}
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {selectedId && (
              <button
                type="button"
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-muted-foreground bg-background/70 border border-border/60 rounded-full px-3 py-1.5"
              >
                Clear selection
              </button>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {regionGroup.subregions.map((subregion) => {
              const isActive =
                selectedId === subregion.id ||
                (!selectedId && hoveredId === subregion.id);
              return (
                <button
                  key={subregion.id}
                  type="button"
                  onMouseEnter={() => setHoveredId(subregion.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() =>
                    setSelectedId((prev) =>
                      prev === subregion.id ? null : subregion.id,
                    )
                  }
                  className={`flex items-center gap-2 px-3 py-2 rounded-full text-xs border transition-all ${
                    isActive
                      ? "border-transparent text-white shadow-md"
                      : "border-border/60 text-muted-foreground hover:text-foreground"
                  }`}
                  style={{
                    backgroundColor: isActive ? subregion.color : "transparent",
                  }}
                >
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ backgroundColor: subregion.color }}
                  />
                  {subregion.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md p-6 shadow-xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5" />
              {activeSubregion ? "Subregion focus" : "Regional overview"}
            </div>
            <h3 className="text-2xl font-bold text-foreground mt-3">
              {activeSubregion ? activeSubregion.label : regionGroup.label}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-3">
              {activeSubregion
                ? activeSubregion.description
                : "Select a subregion on the map to reveal local landscapes, key features, and state coverage."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md p-6 shadow-xl">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Highlights
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {(
                activeSubregion?.highlights ?? [
                  "Tap a region to highlight its key traits",
                  "Use the chips to pin a focus area",
                  "Compare how subregions differ in climate and terrain",
                ]
              ).map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-md p-6 shadow-xl">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              States covered
            </h4>
            <div className="flex flex-wrap gap-2">
              {(activeSubregion?.states ?? regionGroup.states).map((state) => (
                <span
                  key={state}
                  className="text-xs px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground bg-background/40"
                >
                  {state}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
