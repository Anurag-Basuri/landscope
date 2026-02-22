"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Landform } from "@/data/types";
import { ArrowRight } from "lucide-react";

interface Props {
  landform: Landform;
  index?: number;
}

export default function LandformCard({ landform, index = 0 }: Props) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/landforms/${landform.slug}`}
        className="group relative block rounded-3xl overflow-hidden h-[320px] sm:h-[340px] lg:h-[360px] border border-white/10 bg-card/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-primary/10"
      >
        <Image
          src={landform.heroImageUrl}
          width={600}
          height={400}
          alt={landform.name}
          className="img-cover group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-background/95 via-background/35 to-transparent group-hover:from-background/98 transition-all duration-500" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-r from-transparent via-white/10 to-transparent" />

        {/* Numbered chip */}
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <span className="text-[10px] sm:text-xs font-bold bg-white/10 backdrop-blur-md text-white/80 px-2.5 py-1 rounded-lg border border-white/10">
            {num}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/60">
            Landform
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 z-10">
          <h3 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {landform.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {landform.tagline}
          </p>

          <div className="mt-3 flex flex-wrap gap-2">
            {landform.stats.slice(0, 2).map((stat) => (
              <span
                key={stat.label}
                className="text-[10px] uppercase tracking-widest text-white/70 border border-white/10 bg-white/5 px-2.5 py-1 rounded-full"
              >
                {stat.value}
              </span>
            ))}
          </div>

          {/* Hover reveal */}
          <span className="flex items-center gap-1.5 text-primary text-sm font-semibold mt-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Open atlas <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
