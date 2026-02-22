"use client";

import dynamic from "next/dynamic";

const LandformRegionsSectionClient = dynamic(
  () => import("@/components/LandformRegionsSection"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-3xl border border-border/60 bg-card/40 h-[640px] w-full" />
    ),
  },
);

export default LandformRegionsSectionClient;
