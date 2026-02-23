"use client";

import dynamic from "next/dynamic";

const IndiaMap = dynamic(() => import("@/components/IndiaMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-3xl border border-border/60 bg-card/40 h-[520px] w-full animate-pulse" />
  ),
});

export default function IndiaMapWrapper() {
  return <IndiaMap />;
}
