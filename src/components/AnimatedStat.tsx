"use client";

import { useEffect, useRef, useState } from "react";

interface Props {
  value: string;
  label: string;
  detail?: string;
}

/**
 * Extracts a leading number from a stat value string.
 * E.g. "~2,400 km" → 2400, "500+ million" → 500, "Kanchenjunga" → null
 */
function extractNumber(
  str: string,
): { num: number; prefix: string; suffix: string } | null {
  const match = str.match(/^([~><≈]?\s*)([\d,]+(?:\.\d+)?)(\+?\s*.*)$/);
  if (!match) return null;
  const prefix = match[1];
  const num = parseFloat(match[2].replace(/,/g, ""));
  const suffix = match[3];
  if (isNaN(num)) return null;
  return { num, prefix, suffix };
}

function formatNumber(n: number, target: number): string {
  // Maintain comma separators matching the target's format
  if (target >= 1000) {
    return Math.round(n).toLocaleString("en-IN");
  }
  if (Number.isInteger(target)) {
    return Math.round(n).toString();
  }
  return n.toFixed(1);
}

export default function AnimatedStat({ value, label, detail }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [displayValue, setDisplayValue] = useState(value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const parsed = extractNumber(value);
          if (!parsed) {
            setDisplayValue(value);
            return;
          }

          const { num, prefix, suffix } = parsed;
          const duration = 1200; // ms
          const startTime = performance.now();

          function animate(now: number) {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * num;
            setDisplayValue(`${prefix}${formatNumber(current, num)}${suffix}`);
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value); // ensure exact final value
            }
          }
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="bg-card/70 border border-white/10 backdrop-blur-md rounded-xl px-4 py-3 group hover:border-primary/30 hover:bg-card/90 transition-all duration-300"
    >
      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div className="text-sm font-bold text-white mt-1 tabular-nums">
        {displayValue}
      </div>
      {detail && (
        <div className="text-[11px] text-muted-foreground mt-1 leading-snug group-hover:text-muted-foreground/80 transition-colors">
          {detail}
        </div>
      )}
    </div>
  );
}
