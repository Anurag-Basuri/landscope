"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-card/80 border-t border-border/50 pt-16 pb-8">
      <div className="absolute inset-x-0 -top-10 h-10 bg-linear-to-b from-transparent to-background/40" />
      <div className="atlas-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="/">
              <Image
                src="/Landscope.png"
                width={119}
                height={37}
                alt="Landscope logo"
              />
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">
              A cinematic atlas of India&apos;s landscapes — mapping landforms,
              biodiversity, and the cultural corridors shaped by terrain.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-foreground font-bold text-base mb-5">
              Atlas index
            </h3>
            <ul className="space-y-2.5">
              {[
                {
                  href: "/landforms/himalayan-mountains",
                  label: "Himalayan Mountains",
                },
                {
                  href: "/landforms/northern-plains",
                  label: "Northern Plains",
                },
                {
                  href: "/landforms/peninsular-plateau",
                  label: "Peninsular Plateau",
                },
                { href: "/landforms/thar-desert", label: "Thar Desert" },
                { href: "/landforms/coastal-plains", label: "Coastal Plains" },
                { href: "/landforms/islands", label: "The Islands" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-foreground font-bold text-base mb-5">
              Field notes
            </h3>
            <p className="text-muted-foreground text-sm mb-4">
              Monthly dispatches from the atlas — new regions, species, and
              conservation updates.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input
                type="email"
                placeholder="Your email"
                className="bg-secondary border-border/50 text-foreground placeholder:text-muted-foreground"
              />
              <Button className="bg-linear-to-r from-cyan-primary to-teal-accent text-white shrink-0">
                <Mail className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>

        <Separator className="bg-border/50" />

        <p className="text-center text-muted-foreground text-xs mt-6">
          © 2026 Landscope. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
