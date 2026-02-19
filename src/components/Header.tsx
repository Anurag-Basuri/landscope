"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { landforms } from "@/data/landforms";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/wildlife", label: "Wildlife" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <Image
            src="/Landscope.png"
            width={119}
            height={37}
            alt="Landscope logo"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            Home
          </Link>

          {/* Landforms Dropdown */}
          <div className="relative group">
            <Link
              href="/landforms"
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Landforms
              <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
            </Link>
            <div className="absolute top-full left-0 min-w-[260px] bg-card border border-border rounded-xl p-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-xl translate-y-2 group-hover:translate-y-0">
              {landforms.map((lf) => (
                <Link
                  key={lf.slug}
                  href={`/landforms/${lf.slug}`}
                  className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {lf.name}
                </Link>
              ))}
            </div>
          </div>

          {navLinks.slice(1).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button className="hidden md:inline-flex bg-gradient-to-r from-cyan-primary to-teal-accent text-white hover:shadow-lg hover:shadow-cyan-primary/25 transition-all">
          Login
        </Button>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-card border-border w-72">
            <SheetTitle className="text-foreground font-bold text-lg mb-6">
              Navigation
            </SheetTitle>
            <nav className="flex flex-col gap-1">
              {[
                { href: "/", label: "Home" },
                { href: "/landforms", label: "Landforms" },
                ...navLinks.slice(1),
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              {/* Landform sub-links */}
              <div className="ml-4 mt-1 mb-2 flex flex-col gap-0.5">
                {landforms.map((lf) => (
                  <Link
                    key={lf.slug}
                    href={`/landforms/${lf.slug}`}
                    className="px-4 py-2 text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {lf.name}
                  </Link>
                ))}
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
