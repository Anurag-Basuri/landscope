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
        className="group relative block rounded-2xl overflow-hidden h-[340px] border border-transparent hover:border-cyan-primary/40 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-primary/10"
      >
        <Image
          src={landform.imageUrl}
          width={600}
          height={400}
          alt={landform.name}
          className="img-cover group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent group-hover:from-background/95 transition-all duration-500" />

        {/* Numbered chip */}
        <span className="absolute top-4 left-4 z-10 text-xs font-bold bg-white/10 backdrop-blur-md text-white/80 px-2.5 py-1 rounded-lg border border-white/10">
          {num}
        </span>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {landform.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {landform.tagline}
          </p>

          {/* Hover reveal */}
          <span className="flex items-center gap-1.5 text-primary text-sm font-semibold mt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            Explore <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
