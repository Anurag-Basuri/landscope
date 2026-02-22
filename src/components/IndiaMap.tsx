"use client";

import { useState, memo } from "react";
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
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ─── Region definitions ─── */
interface Region {
  slug: string;
  label: string;
  color: string;
  hoverColor: string;
  states: string[];
  markerCoords: [number, number]; // [longitude, latitude]
}

const REGIONS: Region[] = [
  {
    slug: "himalayan-mountains",
    label: "Himalayas",
    color: "#7c3aed",
    hoverColor: "#a78bfa",
    states: [
      "Jammu & Kashmir",
      "Ladakh",
      "Himachal Pradesh",
      "Uttarakhand",
      "Sikkim",
      "Arunachal Pradesh",
    ],
    markerCoords: [79.0, 31.5],
  },
  {
    slug: "northern-plains",
    label: "Northern Plains",
    color: "#059669",
    hoverColor: "#34d399",
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
    markerCoords: [80.5, 27.0],
  },
  {
    slug: "thar-desert",
    label: "Thar Desert",
    color: "#d97706",
    hoverColor: "#fbbf24",
    states: ["Rajasthan"],
    markerCoords: [71.5, 26.5],
  },
  {
    slug: "peninsular-plateau",
    label: "Deccan Plateau",
    color: "#ea580c",
    hoverColor: "#f97316",
    states: [
      "Madhya Pradesh",
      "Chhattisgarh",
      "Jharkhand",
      "Maharashtra",
      "Telangana",
      "Karnataka",
    ],
    markerCoords: [78.0, 20.0],
  },
  {
    slug: "coastal-plains",
    label: "Coastal Plains",
    color: "#0284c7",
    hoverColor: "#38bdf8",
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
    markerCoords: [76.5, 12.0],
  },
  {
    slug: "islands",
    label: "Islands",
    color: "#0d9488",
    hoverColor: "#2dd4bf",
    states: ["Andaman and Nicobar", "Lakshadweep"],
    markerCoords: [92.5, 11.5],
  },
];

const GEO_URL = "/india-states.json";

function getRegionForState(stateName: string): Region | undefined {
  return REGIONS.find((r) => r.states.includes(stateName));
}

function IndiaMapInner() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeLandform = activeSlug
    ? landforms.find((lf) => lf.slug === activeSlug)
    : null;
  const activeRegion = activeSlug
    ? REGIONS.find((r) => r.slug === activeSlug)
    : null;

  return (
    <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 items-center">
      {/* Map */}
      <div
        className="relative w-full max-w-[520px] mx-auto"
        onMouseLeave={() => setActiveSlug(null)}
      >
        {/* Subtle background glow behind map */}
        <div className="absolute inset-0 bg-cyan-primary/5 rounded-3xl blur-[60px] -z-10" />

        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1000,
            center: [82, 22],
          }}
          width={500}
          height={550}
          className="w-full h-auto"
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const stateName = geo.properties.ST_NM;
                const region = getRegionForState(stateName);
                const isActive = activeSlug === region?.slug;
                const isOtherActive =
                  activeSlug !== null && activeSlug !== region?.slug;

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => {
                      if (region) setActiveSlug(region.slug);
                    }}
                    onClick={() => {
                      if (region) {
                        window.location.href = `/landforms/${region.slug}`;
                      }
                    }}
                    style={{
                      default: {
                        fill: region
                          ? isActive
                            ? region.hoverColor
                            : isOtherActive
                              ? `${region.color}40`
                              : `${region.color}90`
                          : "#1e293b",
                        stroke: "#0f172a",
                        strokeWidth: 0.6,
                        cursor: region ? "pointer" : "default",
                        transition: "all 300ms ease",
                      },
                      hover: {
                        fill: region ? region.hoverColor : "#1e293b",
                        stroke: "#0ea5ea",
                        strokeWidth: 1.2,
                        cursor: "pointer",
                        transition: "all 200ms ease",
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

          {/* Region markers with labels */}
          {REGIONS.map((region) => {
            const isActive = activeSlug === region.slug;
            return (
              <Marker
                key={region.slug}
                coordinates={region.markerCoords}
                onMouseEnter={() => setActiveSlug(region.slug)}
              >
                {/* Pulse ring */}
                <circle r={isActive ? 8 : 4} fill={region.color} opacity={0.3}>
                  <animate
                    attributeName="r"
                    values={isActive ? "6;14;6" : "3;8;3"}
                    dur="2s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.4;0;0.4"
                    dur="2s"
                    repeatCount="indefinite"
                  />
                </circle>
                {/* Dot */}
                <circle
                  r={isActive ? 5 : 3}
                  fill={isActive ? region.hoverColor : region.color}
                  stroke="#0f172a"
                  strokeWidth={1.5}
                  style={{ transition: "all 200ms ease" }}
                />
                {/* Label */}
                <text
                  textAnchor="middle"
                  y={isActive ? -12 : -8}
                  fill={isActive ? region.hoverColor : "#94a3b8"}
                  fontSize={isActive ? 10 : 8}
                  fontWeight={isActive ? 700 : 500}
                  fontFamily="'Noto Sans', sans-serif"
                  style={{ transition: "all 200ms ease" }}
                >
                  {region.label}
                </text>
              </Marker>
            );
          })}
        </ComposableMap>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-3 mt-4">
          {REGIONS.map((region) => (
            <button
              key={region.slug}
              className={`flex items-center gap-2 text-xs transition-all px-2.5 py-1 rounded-full border ${
                activeSlug === region.slug
                  ? "border-white/20 text-foreground bg-white/5"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
              onMouseEnter={() => setActiveSlug(region.slug)}
              onMouseLeave={() => setActiveSlug(null)}
              onClick={() =>
                (window.location.href = `/landforms/${region.slug}`)
              }
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ backgroundColor: region.color }}
              />
              {region.label}
            </button>
          ))}
        </div>
      </div>

      {/* Info Panel */}
      <div className="min-h-[380px] flex items-center">
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
              <div className="rounded-2xl overflow-hidden h-52 relative">
                <Image
                  src={activeLandform.imageUrl}
                  width={600}
                  height={300}
                  alt={activeLandform.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-lg text-white"
                  style={{ backgroundColor: activeRegion.color }}
                >
                  {activeRegion.label}
                </span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {activeLandform.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {activeLandform.description.slice(0, 200)}...
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
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
                <Link
                  href={`/landforms/${activeLandform.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
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
              className="space-y-5"
            >
              <div className="p-3 bg-primary/10 rounded-xl inline-block">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Explore by Region
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Hover over any state on the map to discover which landform
                region it belongs to. Click to explore the region in detail.
              </p>
              <div className="grid grid-cols-2 gap-3 pt-2">
                {REGIONS.map((region) => (
                  <button
                    key={region.slug}
                    className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground p-3 rounded-xl bg-card/50 border border-border/30 hover:border-white/10 transition-all text-left"
                    onMouseEnter={() => setActiveSlug(region.slug)}
                    onMouseLeave={() => setActiveSlug(null)}
                    onClick={() =>
                      (window.location.href = `/landforms/${region.slug}`)
                    }
                  >
                    <span
                      className="w-3 h-3 rounded-full shrink-0"
                      style={{ backgroundColor: region.color }}
                    />
                    {region.label}
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
