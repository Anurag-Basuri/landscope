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
  activeSlug,
  onHover,
  onLeave,
  onMouseMove,
}: {
  activeSlug: string | null;
  onHover: (slug: string) => void;
  onLeave: () => void;
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
            const isActive = activeSlug === region?.slug;
            const somethingActive = activeSlug !== null;

            let fill = "#1e293b";
            if (region) {
              if (isActive) fill = region.bright;
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
                onClick={() => {
                  if (region)
                    window.location.href = `/landforms/${region.slug}`;
                }}
                style={{
                  default: {
                    fill,
                    stroke,
                    strokeWidth: 0.8,
                    cursor: region ? "pointer" : "default",
                    transition: "all 350ms ease",
                  },
                  hover: {
                    fill: region ? region.bright : "#1e293b",
                    stroke: region ? region.bright : "#0f172a",
                    strokeWidth: 1.4,
                    cursor: "pointer",
                    transition: "all 150ms ease",
                  },
                  pressed: {
                    fill: region ? region.color : "#1e293b",
                    stroke: region ? region.color : "#0f172a",
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
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<TooltipInfo | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const activeLandform = activeSlug
    ? landforms.find((lf) => lf.slug === activeSlug)
    : null;
  const activeRegion = activeSlug
    ? REGIONS.find((r) => r.slug === activeSlug)
    : null;

  const handleHover = useCallback((slug: string) => setActiveSlug(slug), []);
  const handleLeave = useCallback(() => {
    setActiveSlug(null);
    setTooltip(null);
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent, regionLabel: string, regionColor: string) => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        regionLabel,
        regionColor,
      });
    },
    [],
  );

  return (
    <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
      {/* ── Map Side ── */}
      <div
        ref={mapRef}
        className="relative w-full max-w-[600px] mx-auto group"
        onMouseLeave={handleLeave}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-cyan-primary/4 rounded-3xl blur-[80px] -z-10" />

        {/* 
          Mainland and Islands mapped together.
          Scale and center properly frame the subcontinent.
        */}
        <div className="relative w-full aspect-[1/1.12] transform transition-transform duration-700">
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 1250, center: [81.5, 22.5] }}
            width={600}
            height={670}
            className="w-full h-full object-contain"
          >
            <RegionGeographies
              activeSlug={activeSlug}
              onHover={handleHover}
              onLeave={() => {}}
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
                onClick={() => (window.location.href = `/landforms/islands`)}
                className="cursor-pointer"
              >
                <circle
                  r={22}
                  fill={REGIONS.find((r) => r.slug === "islands")?.color}
                  opacity={activeSlug === "islands" ? 0.3 : 0.08}
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
                onClick={() => (window.location.href = `/landforms/islands`)}
                className="cursor-pointer"
              >
                <circle
                  r={28}
                  fill={REGIONS.find((r) => r.slug === "islands")?.color}
                  opacity={activeSlug === "islands" ? 0.3 : 0.08}
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
        {tooltip && (
          <div
            className="absolute pointer-events-none z-20 transition-all duration-75"
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
                Click to explore
              </p>
            </div>
          </div>
        )}

        {/* ── Legend ── */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 px-4 bg-background/40 backdrop-blur-xs py-3 rounded-2xl border border-white/5 mx-4 shadow-sm">
          {REGIONS.map((region) => (
            <button
              key={region.slug}
              className={`flex items-center gap-1.5 text-[11px] transition-all rounded-full px-2.5 py-1 ${
                activeSlug === region.slug
                  ? "text-foreground bg-white/10 ring-1 ring-white/20 shadow-sm"
                  : activeSlug
                    ? "text-muted-foreground/30 grayscale filter"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              }`}
              onMouseEnter={() => handleHover(region.slug)}
              onMouseLeave={handleLeave}
              onClick={() =>
                (window.location.href = `/landforms/${region.slug}`)
              }
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{
                  backgroundColor:
                    activeSlug === region.slug || !activeSlug
                      ? region.color
                      : `${region.color}40`,
                }}
              />
              {region.label}
            </button>
          ))}
        </div>

        {/* Helper text */}
        <p className="text-center text-[10px] text-muted-foreground/60 mt-3 flex items-center justify-center gap-1">
          <MousePointerClick className="h-3 w-3" />
          Hover or click any region to explore its landscapes
        </p>
      </div>

      {/* ── Info Panel ── */}
      <div className="min-h-[440px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          {activeLandform && activeRegion ? (
            <motion.div
              key={activeLandform.slug}
              initial={{ opacity: 0, scale: 0.98, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.98, x: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="space-y-6 w-full bg-card/30 p-6 rounded-[2rem] border border-border/50 shadow-xl backdrop-blur-sm"
            >
              {/* Region color bar */}
              <div
                className="h-1.5 w-24 rounded-full shadow-sm"
                style={{ backgroundColor: activeRegion.color }}
              />
              <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                {activeLandform.name}
              </h3>

              <div className="rounded-2xl overflow-hidden h-52 relative shadow-lg ring-1 ring-white/10">
                <Image
                  src={activeLandform.imageUrl}
                  width={600}
                  height={300}
                  alt={activeLandform.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent" />
                <span
                  className="absolute bottom-4 left-4 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-md text-white/95"
                  style={{
                    backgroundColor: `${activeRegion.color}e6`,
                    backdropFilter: "blur(4px)",
                  }}
                >
                  {activeRegion.label}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                {activeLandform.description.slice(0, 220)}…
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                {activeLandform.facts.slice(0, 3).map((fact, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary/40 text-foreground/80 font-medium text-[11px] px-2.5 py-1"
                  >
                    <span className="text-muted-foreground mr-1">
                      {fact.label}:
                    </span>{" "}
                    {fact.value}
                  </Badge>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={`/landforms/${activeLandform.slug}`}
                  className="inline-flex items-center justify-center w-full gap-2 bg-primary/10 text-primary font-semibold text-sm hover:bg-primary/20 transition-all py-3 rounded-xl hover:gap-3"
                >
                  Explore {activeLandform.name}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6 w-full p-6 text-center"
            >
              <div className="mx-auto p-4 bg-primary/10 rounded-2xl inline-block shadow-inner ring-1 ring-primary/20">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-extrabold text-foreground tracking-tight">
                Explore by Region
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto text-sm">
                India&apos;s diverse geography is divided into six major
                landform zones. Interact with the map to discover the unique
                characteristics of each landscape.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

const IndiaMap = memo(IndiaMapInner);
export default IndiaMap;
