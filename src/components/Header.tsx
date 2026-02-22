"use client";

import { useEffect, useState, type FocusEvent } from "react";
import { usePathname } from "next/navigation";
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
  const [isLandformsOpen, setIsLandformsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 50);
      const total = document.documentElement.scrollHeight - window.innerHeight;
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
      setScrollProgress(progress);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsLandformsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/wildlife", label: "Wildlife" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  function handleLandformsBlur(e: FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsLandformsOpen(false);
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 relative ${
        isScrolled
          ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/40 py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="absolute left-0 top-0 h-0.5 w-full bg-transparent">
        <div
          className="h-full bg-primary transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className={`relative z-10 transition-transform duration-300 ${
            isScrolled ? "scale-90 origin-left" : "scale-100"
          }`}
        >
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
            aria-current={isActive("/") ? "page" : undefined}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
              isActive("/")
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
            }`}
          >
            Home
          </Link>

          {/* Landforms Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsLandformsOpen(true)}
            onMouseLeave={() => setIsLandformsOpen(false)}
            onFocus={() => setIsLandformsOpen(true)}
            onBlur={handleLandformsBlur}
          >
            <Link
              href="/landforms"
              aria-current={isActive("/landforms") ? "page" : undefined}
              className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isActive("/landforms")
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
              aria-haspopup="menu"
              aria-expanded={isLandformsOpen}
              aria-controls="landforms-menu"
              onKeyDown={(e) => {
                if (e.key === "ArrowDown") {
                  e.preventDefault();
                  setIsLandformsOpen(true);
                }
                if (e.key === "Escape") {
                  setIsLandformsOpen(false);
                }
              }}
            >
              Landforms
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-300 ${
                  isLandformsOpen ? "rotate-180" : ""
                }`}
              />
            </Link>
            <div
              id="landforms-menu"
              role="menu"
              aria-label="Landforms"
              className={`absolute top-full left-0 min-w-[260px] bg-card/95 backdrop-blur-xl border border-border/50 rounded-xl p-2 transition-all duration-300 shadow-2xl shadow-black/20 ${
                isLandformsOpen
                  ? "opacity-100 visible translate-y-0 pointer-events-auto"
                  : "opacity-0 invisible translate-y-3 pointer-events-none"
              }`}
            >
              {landforms.map((lf) => (
                <Link
                  key={lf.slug}
                  href={`/landforms/${lf.slug}`}
                  role="menuitem"
                  aria-current={
                    pathname === `/landforms/${lf.slug}` ? "page" : undefined
                  }
                  className={`block px-4 py-2.5 text-sm rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    pathname === `/landforms/${lf.slug}`
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
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
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Open navigation menu"
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
                  aria-current={isActive(link.href) ? "page" : undefined}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                    isActive(link.href)
                      ? "text-primary bg-accent/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }`}
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
                    aria-current={
                      pathname === `/landforms/${lf.slug}` ? "page" : undefined
                    }
                    className={`px-4 py-2 text-xs transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background ${
                      pathname === `/landforms/${lf.slug}`
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
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
