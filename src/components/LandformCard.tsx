"use client";

import Image from "next/image";
import Link from "next/link";
import { Landform } from "@/data/types";

interface Props {
  landform: Landform;
}

export default function LandformCard({ landform }: Props) {
  return (
    <Link href={`/landforms/${landform.slug}`} className="landform-card">
      <figure
        className="landform-card-banner img-holder"
        style={{ "--width": 600, "--height": 400 } as React.CSSProperties}
      >
        <Image
          src={landform.imageUrl}
          width={600}
          height={400}
          alt={landform.name}
          className="img-cover"
          loading="lazy"
        />
        <div className="landform-card-overlay" />
      </figure>
      <div className="landform-card-content">
        <h3 className="landform-card-title">{landform.name}</h3>
        <p className="landform-card-tagline">{landform.tagline}</p>
      </div>
    </Link>
  );
}
