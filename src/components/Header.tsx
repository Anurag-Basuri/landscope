"use client";

import {
  useEffect,
  useState,
  useCallback,
  useRef,
  type FocusEvent,
} from "react";
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
import {
  Menu,
  ChevronDown,
  Mountain,
  Waves,
  Palmtree,
  Sun,
  TriangleAlert,
  Compass,
  X,
} from "lucide-react";

/* Icon map for each landform slug */
const landformIcons: Record<string, React.ElementType> = {
  "himalayan-mountains": Mountain,
  "northern-plains": Compass,
  "peninsular-plateau": TriangleAlert,
  "thar-desert": Sun,
  "coastal-plains": Waves,
  islands: Palmtree,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 30);
    const total = document.documentElement.scrollHeight - window.innerHeight;
    setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
  }, []);

  useEffect(() => {
    const onScroll = () => handleScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  /* Close mega & mobile on route change */
  if (prevPathname.current !== pathname) {
    prevPathname.current = pathname;
    if (megaOpen) setMegaOpen(false);
    if (mobileOpen) setMobileOpen(false);
  }

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

  function handleMegaBlur(e: FocusEvent<HTMLDivElement>) {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setMegaOpen(false);
    }
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? "header-scrolled py-2" : "bg-transparent py-3.5 sm:py-4"
        }`}
      >
        {/* ── Gradient accent line (top edge) ── */}
        <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-cyan-primary via-teal-accent to-cyan-primary opacity-60" />

        {/* ── Scroll progress ── */}
        <div className="absolute inset-x-0 bottom-0 h-[1.5px]">
          <div
            className="h-full bg-gradient-to-r from-cyan-primary to-teal-accent transition-[width] duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* ── Logo ── */}
          <Link
            href="/"
            className={`relative z-10 flex items-center gap-2 transition-all duration-500 ${
              isScrolled ? "scale-[0.88] origin-left" : "scale-100"
            }`}
          >
            <Image
              src="/Landscope.png"
              width={119}
              height={37}
              alt="Landscope logo"
              priority
              className="drop-shadow-[0_0_12px_rgba(14,165,234,0.25)]"
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-0.5">
            {/* Home link */}
            <Link
              href="/"
              aria-current={isActive("/") ? "page" : undefined}
              className={`nav-link ${isActive("/") ? "nav-link-active" : ""}`}
            >
              Home
            </Link>

            {/* Landforms mega-menu trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              onFocus={() => setMegaOpen(true)}
              onBlur={handleMegaBlur}
            >
              <Link
                href="/landforms"
                aria-current={isActive("/landforms") ? "page" : undefined}
                aria-haspopup="menu"
                aria-expanded={megaOpen}
                aria-controls="mega-menu"
                className={`nav-link group/lf ${
                  isActive("/landforms") ? "nav-link-active" : ""
                }`}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setMegaOpen(true);
                  }
                  if (e.key === "Escape") setMegaOpen(false);
                }}
              >
                Landforms
                <ChevronDown
                  className={`h-3 w-3 ml-0.5 transition-transform duration-300 ${
                    megaOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* ── Mega menu ── */}
              <div
                id="mega-menu"
                role="menu"
                aria-label="Landforms"
                className={`mega-menu ${
                  megaOpen
                    ? "opacity-100 visible translate-y-0 scale-100"
                    : "opacity-0 invisible translate-y-2 scale-[0.97]"
                }`}
              >
                <div className="px-5 pt-4 pb-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-0.5">
                    Explore by landform
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-1.5 px-4 pb-4">
                  {landforms.map((lf) => {
                    const Icon = landformIcons[lf.slug] ?? Mountain;
                    const active = pathname === `/landforms/${lf.slug}`;
                    return (
                      <Link
                        key={lf.slug}
                        href={`/landforms/${lf.slug}`}
                        role="menuitem"
                        aria-current={active ? "page" : undefined}
                        className={`mega-menu-item ${
                          active ? "mega-menu-item-active" : ""
                        }`}
                      >
                        <span className="mega-menu-icon">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span>
                          <span className="block text-sm font-semibold text-foreground transition-colors">
                            {lf.name.replace("The ", "")}
                          </span>
                          <span className="block text-[11px] text-muted-foreground leading-snug line-clamp-1 mt-0.5">
                            {lf.tagline.split("—")[0].trim()}
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                <div className="border-t border-white/5 px-5 py-3">
                  <Link
                    href="/landforms"
                    className="text-xs text-primary hover:text-teal-accent transition-colors font-medium"
                  >
                    View all landforms →
                  </Link>
                </div>
              </div>
            </div>

            {/* Other links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`nav-link ${
                  isActive(link.href) ? "nav-link-active" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Mobile trigger ── */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-foreground hover:bg-white/5"
                aria-label="Open navigation"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="mobile-drawer border-l border-white/10 w-[300px] p-0"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-5 pt-5 pb-4">
                <SheetTitle className="sr-only">Navigation</SheetTitle>
                <Image
                  src="/Landscope.png"
                  width={100}
                  height={31}
                  alt="Landscope logo"
                  className="drop-shadow-[0_0_8px_rgba(14,165,234,0.3)]"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Gradient divider */}
              <div className="h-[1.5px] bg-gradient-to-r from-cyan-primary/60 via-teal-accent/40 to-transparent mx-4" />

              {/* Mobile nav links */}
              <nav className="flex flex-col gap-0.5 px-4 pt-4 pb-6">
                {[
                  { href: "/", label: "Home" },
                  { href: "/landforms", label: "Landforms" },
                  ...navLinks.slice(1),
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`mobile-nav-link ${
                      isActive(link.href) ? "mobile-nav-link-active" : ""
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Mobile landform sub-links */}
              <div className="px-4 pb-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3 px-3">
                  Quick access
                </p>
                <div className="grid gap-1">
                  {landforms.map((lf) => {
                    const Icon = landformIcons[lf.slug] ?? Mountain;
                    const active = pathname === `/landforms/${lf.slug}`;
                    return (
                      <Link
                        key={lf.slug}
                        href={`/landforms/${lf.slug}`}
                        aria-current={active ? "page" : undefined}
                        className={`mobile-landform-link ${
                          active ? "mobile-landform-link-active" : ""
                        }`}
                      >
                        <Icon className="h-3.5 w-3.5 shrink-0" />
                        <span className="text-[13px] font-medium">
                          {lf.name.replace("The ", "")}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* ── Mega menu backdrop ── */}
      {megaOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity"
          onClick={() => setMegaOpen(false)}
        />
      )}
    </>
  );
}
