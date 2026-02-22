"use client";

import { useState, useCallback, useRef, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
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
    states: ["Andaman & Nicobar", "Lakshadweep"],
  },
];

const ISLAND_STATES = new Set(["Andaman & Nicobar", "Lakshadweep"]);
const GEO_URL = "/india-states.json";

function getRegion(name: string): Region | undefined {
  return REGIONS.find((r) => r.states.includes(name));
}

/* ─── Tooltip state ─── */
interface TooltipInfo {
  x: number;
  y: number;
  stateName: string;
  regionLabel: string;
  regionColor: string;
}

/* ─── Sub-map renderer ─── */
function StateGeographies({
  activeSlug,
  onHover,
  onLeave,
  onMouseMove,
  filterFn,
}: {
  activeSlug: string | null;
  onHover: (slug: string) => void;
  onLeave: () => void;
  onMouseMove: (e: React.MouseEvent, stateName: string) => void;
  filterFn: (stateName: string) => boolean;
}) {
  return (
    <Geographies geography={GEO_URL}>
      {({ geographies }) =>
        geographies
          .filter((geo) => filterFn(geo.properties.ST_NM))
          .map((geo) => {
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

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => region && onHover(region.slug)}
                onMouseLeave={onLeave}
                onMouseMove={(e: React.MouseEvent) => onMouseMove(e, stateName)}
                onClick={() => {
                  if (region)
                    window.location.href = `/landforms/${region.slug}`;
                }}
                style={{
                  default: {
                    fill,
                    stroke: "#0f172a",
                    strokeWidth: 0.5,
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
                  },
                }}
              />
            );
          })
      }
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
    (e: React.MouseEvent, stateName: string) => {
      if (!mapRef.current) return;
      const rect = mapRef.current.getBoundingClientRect();
      const region = getRegion(stateName);
      if (!region) return;
      setTooltip({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        stateName,
        regionLabel: region.label,
        regionColor: region.color,
      });
    },
    [],
  );

  return (
    <div className="grid lg:grid-cols-[1.15fr_1fr] gap-10 items-center">
      {/* ── Map Side ── */}
      <div
        ref={mapRef}
        className="relative w-full max-w-[540px] mx-auto"
        onMouseLeave={handleLeave}
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-cyan-primary/[0.04] rounded-3xl blur-[80px] -z-10" />

        {/* Main mainland map */}
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ scale: 1100, center: [82.5, 23] }}
          width={520}
          height={530}
          className="w-full h-auto"
        >
          <StateGeographies
            activeSlug={activeSlug}
            onHover={handleHover}
            onLeave={() => {}}
            onMouseMove={handleMouseMove}
            filterFn={(name) => !ISLAND_STATES.has(name)}
          />
        </ComposableMap>

        {/* ── Island insets ── */}
        {/* Andaman & Nicobar inset */}
        <div className="absolute bottom-12 right-2 w-[72px] rounded-lg border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden">
          <span className="block text-[7px] text-center text-muted-foreground font-medium py-0.5 bg-card/80 border-b border-border/30">
            A & N Islands
          </span>
          <div
            onMouseEnter={() => handleHover("islands")}
            onMouseLeave={handleLeave}
            className="cursor-pointer"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 2200, center: [93, 10] }}
              width={80}
              height={120}
              className="w-full h-auto"
            >
              <StateGeographies
                activeSlug={activeSlug}
                onHover={handleHover}
                onLeave={() => {}}
                onMouseMove={handleMouseMove}
                filterFn={(name) => name === "Andaman & Nicobar"}
              />
            </ComposableMap>
          </div>
        </div>

        {/* Lakshadweep inset */}
        <div className="absolute bottom-12 left-2 w-[56px] rounded-lg border border-border/40 bg-background/80 backdrop-blur-sm overflow-hidden">
          <span className="block text-[7px] text-center text-muted-foreground font-medium py-0.5 bg-card/80 border-b border-border/30">
            Lakshadweep
          </span>
          <div
            onMouseEnter={() => handleHover("islands")}
            onMouseLeave={handleLeave}
            className="cursor-pointer"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{ scale: 5000, center: [72.8, 10.5] }}
              width={60}
              height={60}
              className="w-full h-auto"
            >
              <StateGeographies
                activeSlug={activeSlug}
                onHover={handleHover}
                onLeave={() => {}}
                onMouseMove={handleMouseMove}
                filterFn={(name) => name === "Lakshadweep"}
              />
            </ComposableMap>
          </div>
        </div>

        {/* ── Cursor tooltip ── */}
        {tooltip && (
          <div
            className="absolute pointer-events-none z-20 transition-all duration-75"
            style={{ left: tooltip.x + 14, top: tooltip.y - 10 }}
          >
            <div className="bg-card/95 backdrop-blur-md border border-border/50 rounded-lg px-3 py-2 shadow-xl min-w-[140px]">
              <p className="text-foreground text-xs font-semibold">
                {tooltip.stateName}
              </p>
              <div className="flex items-center gap-1.5 mt-1">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: tooltip.regionColor }}
                />
                <span className="text-muted-foreground text-[10px]">
                  {tooltip.regionLabel}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── Legend ── */}
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-3 px-4">
          {REGIONS.map((region) => (
            <button
              key={region.slug}
              className={`flex items-center gap-1.5 text-[11px] transition-all rounded-full px-2.5 py-1 ${
                activeSlug === region.slug
                  ? "text-foreground bg-white/5 ring-1 ring-white/10"
                  : activeSlug
                    ? "text-muted-foreground/40"
                    : "text-muted-foreground hover:text-foreground"
              }`}
              onMouseEnter={() => handleHover(region.slug)}
              onMouseLeave={handleLeave}
              onClick={() =>
                (window.location.href = `/landforms/${region.slug}`)
              }
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
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
        <p className="text-center text-[10px] text-muted-foreground/60 mt-2 flex items-center justify-center gap-1">
          <MousePointerClick className="h-3 w-3" />
          Hover or click any state to explore
        </p>
      </div>

      {/* ── Info Panel ── */}
      <div className="min-h-[400px] flex items-center">
        <AnimatePresence mode="wait">
          {activeLandform && activeRegion ? (
            <motion.div
              key={activeLandform.slug}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-5 w-full"
            >
              {/* Region color bar */}
              <div
                className="h-1 w-20 rounded-full"
                style={{ backgroundColor: activeRegion.color }}
              />
              <h3 className="text-2xl font-bold text-foreground">
                {activeLandform.name}
              </h3>

              <div className="rounded-2xl overflow-hidden h-48 relative">
                <Image
                  src={activeLandform.imageUrl}
                  width={600}
                  height={300}
                  alt={activeLandform.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
                <span
                  className="absolute bottom-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded text-white/90"
                  style={{ backgroundColor: `${activeRegion.color}cc` }}
                >
                  {activeRegion.label}
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed text-sm line-clamp-3">
                {activeLandform.description.slice(0, 220)}…
              </p>

              <div className="flex flex-wrap gap-2">
                {activeLandform.facts.slice(0, 3).map((fact, i) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-secondary/60 text-muted-foreground font-normal text-xs"
                  >
                    {fact.label}: {fact.value}
                  </Badge>
                ))}
              </div>

              {/* States list */}
              <div>
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                  States in this region
                </span>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {activeRegion.states.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2 py-0.5 rounded bg-card border border-border/40 text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={`/landforms/${activeLandform.slug}`}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Explore {activeLandform.name}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-5 w-full"
            >
              <div className="p-3 bg-primary/10 rounded-xl inline-block">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Explore by Region
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md text-sm">
                India&apos;s diverse geography is divided into six major
                landform regions. Hover over any state on the map to see which
                region it belongs to, or click to explore it in detail.
              </p>

              <div className="grid grid-cols-2 gap-2.5 pt-1">
                {REGIONS.map((region) => (
                  <button
                    key={region.slug}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground p-3 rounded-xl bg-card/50 border border-border/30 hover:border-white/10 transition-all text-left group"
                    onMouseEnter={() => handleHover(region.slug)}
                    onMouseLeave={handleLeave}
                    onClick={() =>
                      (window.location.href = `/landforms/${region.slug}`)
                    }
                  >
                    <span
                      className="w-3.5 h-3.5 rounded shrink-0 group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: region.color }}
                    />
                    <span className="text-xs font-medium">{region.label}</span>
                  </button>
                ))}
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
