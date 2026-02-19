"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Landform } from "@/data/types";

interface Props {
  landform: Landform;
  index?: number;
}

export default function LandformCard({ landform, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        href={`/landforms/${landform.slug}`}
        className="group relative block rounded-2xl overflow-hidden h-[300px]"
      >
        <Image
          src={landform.imageUrl}
          width={600}
          height={400}
          alt={landform.name}
          className="img-cover group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
          <h3 className="text-white text-lg font-bold mb-1 group-hover:text-primary transition-colors">
            {landform.name}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {landform.tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
