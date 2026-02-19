"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { LibraryCategory } from "@/data/types";

interface LibrarySliderProps {
  categories: LibraryCategory[];
}

export default function LibrarySlider({ categories }: LibrarySliderProps) {
  const listRef = useRef<HTMLUListElement>(null);
  const [pos, setPos] = useState(0);

  const slide = useCallback(
    (dir: 1 | -1) => {
      const maxPos = categories.length - 1;
      let next = pos + dir;
      if (next < 0) next = maxPos;
      if (next > maxPos) next = 0;
      setPos(next);

      if (listRef.current) {
        const child = listRef.current.children[next] as HTMLElement;
        if (child) {
          listRef.current.style.transform = `translateX(-${child.offsetLeft}px)`;
        }
      }
    },
    [pos, categories.length],
  );

  return (
    <section className="topics" id="topics" aria-labelledby="topic-label">
      <div className="container">
        <div className="card topic-card">
          <div className="card-content">
            <h2
              className="headline headline-2 section-title card-title"
              id="topic-label"
            >
              Library
            </h2>
            <p className="card-text">
              Dive into our curated collection of resources, spanning from soil
              science to sustainable development, and empower yourself to be a
              steward of the Earth.
            </p>
            <div className="btn-group">
              <button
                className="btn-icon"
                aria-label="previous"
                onClick={() => slide(-1)}
              >
                ←
              </button>
              <button
                className="btn-icon"
                aria-label="next"
                onClick={() => slide(1)}
              >
                →
              </button>
            </div>
          </div>

          <div className="slider">
            <ul className="slider-list" ref={listRef}>
              {categories.map((cat) => (
                <li key={cat.slug} className="slider-item">
                  <Link href={`/library/${cat.slug}`} className="slider-card">
                    <figure
                      className="slider-banner img-holder"
                      style={
                        {
                          "--width": 507,
                          "--height": 618,
                        } as React.CSSProperties
                      }
                    >
                      <Image
                        src={cat.imageUrl}
                        width={507}
                        height={618}
                        alt={cat.title}
                        className="img-cover"
                        loading="lazy"
                      />
                    </figure>
                    <div className="slider-content">
                      <span className="slider-title">{cat.title}</span>
                      <p className="slider-subtitle">
                        {cat.articleCount} Articles
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
