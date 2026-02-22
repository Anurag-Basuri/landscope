"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { landforms } from "@/data/landforms";
import { ArrowRight, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Hotspot {
  slug: string;
  cx: number;
  cy: number;
  label: string;
  color: string;
  labelAnchor: "start" | "end";
  labelDx: number;
}

const INDIA_OUTLINE =
  "250,30 235,48 222,65 210,85 198,108 185,132 172,158 160,185 148,212 135,238 " +
  "120,262 105,282 88,302 72,318 60,335 56,355 64,370 82,378 102,376 118,365 " +
  "130,348 138,372 146,398 155,425 165,452 178,478 195,502 215,525 238,548 " +
  "258,568 275,585 282,595 288,600 294,595 300,585 315,558 332,530 348,500 " +
  "365,468 380,438 395,408 408,378 420,348 430,318 440,288 448,260 455,235 " +
  "462,210 468,188 472,168 478,148 485,130 495,115 505,102 515,92 508,82 " +
  "495,78 478,74 462,68 445,60 425,52 405,45 385,40 365,35 345,32 325,28 " +
  "305,26 285,24 265,25";

const hotspots: Hotspot[] = [
  {
    slug: "himalayan-mountains",
    cx: 370,
    cy: 48,
    label: "Himalayas",
    color: "#a78bfa",
    labelAnchor: "start",
    labelDx: 14,
  },
  {
    slug: "northern-plains",
    cx: 300,
    cy: 165,
    label: "Northern Plains",
    color: "#34d399",
    labelAnchor: "start",
    labelDx: 14,
  },
  {
    slug: "thar-desert",
    cx: 135,
    cy: 260,
    label: "Thar Desert",
    color: "#fbbf24",
    labelAnchor: "end",
    labelDx: -14,
  },
  {
    slug: "peninsular-plateau",
    cx: 335,
    cy: 395,
    label: "Deccan Plateau",
    color: "#f97316",
    labelAnchor: "start",
    labelDx: 14,
  },
  {
    slug: "coastal-plains",
    cx: 210,
    cy: 520,
    label: "Coastal Plains",
    color: "#38bdf8",
    labelAnchor: "end",
    labelDx: -14,
  },
  {
    slug: "islands",
    cx: 490,
    cy: 540,
    label: "Islands",
    color: "#2dd4bf",
    labelAnchor: "start",
    labelDx: 14,
  },
];

export default function IndiaMap() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const activeLandform = activeSlug
    ? landforms.find((lf) => lf.slug === activeSlug)
    : null;

  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Map */}
      <div
        className="relative mx-auto w-full max-w-[380px]"
        onMouseLeave={() => setActiveSlug(null)}
      >
        <svg
          viewBox="0 0 560 700"
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="indiaFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0ea5ea" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#0bd1d1" stopOpacity="0.15" />
            </linearGradient>
            <filter id="dotGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* India outline */}
          <polygon
            points={INDIA_OUTLINE}
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1.5"
            strokeOpacity="0.35"
            strokeLinejoin="round"
          />

          {/* Andaman & Nicobar Islands */}
          <ellipse
            cx="485"
            cy="500"
            rx="5"
            ry="12"
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <ellipse
            cx="490"
            cy="530"
            rx="4"
            ry="8"
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <ellipse
            cx="492"
            cy="555"
            rx="3"
            ry="6"
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          {/* Lakshadweep Islands */}
          <circle
            cx="110"
            cy="500"
            r="3"
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <circle
            cx="105"
            cy="515"
            r="2.5"
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <circle
            cx="108"
            cy="530"
            r="2"
            fill="url(#indiaFill)"
            stroke="#0ea5ea"
            strokeWidth="1"
            strokeOpacity="0.3"
          />

          {/* Hotspot markers */}
          {hotspots.map((spot) => {
            const isActive = activeSlug === spot.slug;
            return (
              <g
                key={spot.slug}
                className="cursor-pointer"
                onMouseEnter={() => setActiveSlug(spot.slug)}
              >
                {/* Pulse ring */}
                <circle
                  cx={spot.cx}
                  cy={spot.cy}
                  r="8"
                  fill={spot.color}
                  opacity="0"
                >
                  <animate
                    attributeName="r"
                    values="8;22;8"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="opacity"
                    values="0.35;0;0.35"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>

                {/* Active glow */}
                {isActive && (
                  <circle
                    cx={spot.cx}
                    cy={spot.cy}
                    r="32"
                    fill={spot.color}
                    opacity="0.08"
                  />
                )}

                {/* Dot */}
                <circle
                  cx={spot.cx}
                  cy={spot.cy}
                  r={isActive ? 8 : 6}
                  fill={spot.color}
                  stroke="hsl(222, 47%, 11%)"
                  strokeWidth="2.5"
                  filter={isActive ? "url(#dotGlow)" : undefined}
                />

                {/* Label */}
                <text
                  x={spot.cx + spot.labelDx}
                  y={spot.cy + 4}
                  textAnchor={spot.labelAnchor}
                  fill={isActive ? spot.color : "#94a3b8"}
                  fontSize="12"
                  fontWeight={isActive ? 600 : 400}
                  fontFamily="'Noto Sans', sans-serif"
                >
                  {spot.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info Panel */}
      <div className="min-h-[320px] flex items-center">
        <AnimatePresence mode="wait">
          {activeLandform ? (
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
                <div className="absolute inset-0 bg-linear-to-t from-background/60 to-transparent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                {activeLandform.name}
              </h3>
              <p className="text-muted-foreground leading-relaxed line-clamp-3">
                {activeLandform.tagline}
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
              className="space-y-4"
            >
              <div className="p-3 bg-primary/10 rounded-xl inline-block">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Explore by Region
              </h3>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                Hover over the markers on the map to discover India&apos;s six
                major landforms. Each region hosts unique ecosystems, cultures,
                and wildlife.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {hotspots.map((spot) => (
                  <span
                    key={spot.slug}
                    className="flex items-center gap-2 text-xs text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                    onMouseEnter={() => setActiveSlug(spot.slug)}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: spot.color }}
                    />
                    {spot.label}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
