"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wildlife } from "@/data/types";

interface Props {
  species: Wildlife;
  index?: number;
}

const statusColors: Record<string, string> = {
  "Critically Endangered": "bg-red-500/90 text-white hover:bg-red-500",
  Endangered: "bg-orange-500/90 text-white hover:bg-orange-500",
  Vulnerable: "bg-yellow-500/90 text-black hover:bg-yellow-500",
  "Near Threatened": "bg-blue-400/90 text-white hover:bg-blue-400",
};

export default function WildlifeCard({ species, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link href={`/wildlife/${species.slug}`}>
        <Card className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5 py-0 gap-0">
          <div className="relative h-[220px] overflow-hidden">
            <Image
              src={species.imageUrl}
              width={400}
              height={300}
              alt={species.name}
              className="img-cover group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              loading="lazy"
            />
            {species.conservationStatus && (
              <Badge
                className={`absolute top-3 right-3 text-xs ${
                  statusColors[species.conservationStatus] ||
                  "bg-muted text-foreground"
                }`}
              >
                {species.conservationStatus}
              </Badge>
            )}
          </div>
          <CardContent className="relative p-4 space-y-1.5 bg-card/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-primary">
                {species.type === "flora" ? "🌿 Flora" : "🐾 Fauna"} ·{" "}
                {species.category}
              </span>
              {species.habitat && (
                <span className="text-[10px] font-medium text-muted-foreground bg-secondary/80 px-2 py-0.5 rounded-full truncate max-w-[100px]">
                  {species.habitat.split(",")[0]}
                </span>
              )}
            </div>
            <h3 className="text-foreground font-bold text-base group-hover:text-primary transition-colors">
              {species.name}
            </h3>
            <p className="text-muted-foreground text-xs italic">
              {species.scientificName}
            </p>
            <p className="text-muted-foreground text-xs line-clamp-2 leading-relaxed pt-0.5">
              {species.description}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
