"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <Button
        size="icon"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="h-11 w-11 rounded-full bg-gradient-to-r from-cyan-primary to-teal-accent text-white shadow-lg shadow-cyan-primary/25 hover:shadow-xl hover:shadow-cyan-primary/40 transition-shadow"
        aria-label="Back to top"
      >
        <ArrowUp className="h-4.5 w-4.5" />
      </Button>
    </div>
  );
}
