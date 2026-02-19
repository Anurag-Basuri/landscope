"use client";

import Image from "next/image";
import Link from "next/link";
import { Wildlife } from "@/data/types";

interface Props {
  species: Wildlife;
}

export default function WildlifeCard({ species }: Props) {
  return (
    <Link href={`/wildlife/${species.slug}`} className="wildlife-card">
      <figure
        className="wildlife-card-banner img-holder"
        style={{ "--width": 400, "--height": 300 } as React.CSSProperties}
      >
        <Image
          src={species.imageUrl}
          width={400}
          height={300}
          alt={species.name}
          className="img-cover"
          loading="lazy"
        />
        {species.conservationStatus && (
          <span
            className={`conservation-badge badge-${species.conservationStatus.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {species.conservationStatus}
          </span>
        )}
      </figure>
      <div className="wildlife-card-content">
        <span className="wildlife-type-badge">
          {species.type === "flora" ? "🌿 Flora" : "🐾 Fauna"}
        </span>
        <h3 className="wildlife-card-title">{species.name}</h3>
        <p className="wildlife-card-scientific">{species.scientificName}</p>
        <span className="wildlife-card-category">{species.category}</span>
      </div>
    </Link>
  );
}
