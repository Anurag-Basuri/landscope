"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { landforms } from "@/data/landforms";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "active" : ""}`} data-header>
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/Landscope.png"
            width={119}
            height={37}
            alt="Landscope logo"
            priority
          />
        </Link>

        <nav className={`navbar ${isNavOpen ? "active" : ""}`} data-navbar>
          <ul className="navbar-list">
            <li>
              <Link
                href="/"
                className="navbar-link hover-1"
                onClick={() => setIsNavOpen(false)}
              >
                Home
              </Link>
            </li>

            {/* Landforms dropdown */}
            <li className="nav-dropdown">
              <Link href="/landforms" className="navbar-link hover-1">
                Landforms
              </Link>
              <ul className="dropdown-menu">
                {landforms.map((lf) => (
                  <li key={lf.slug}>
                    <Link
                      href={`/landforms/${lf.slug}`}
                      className="dropdown-link"
                      onClick={() => setIsNavOpen(false)}
                    >
                      {lf.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                href="/wildlife"
                className="navbar-link hover-1"
                onClick={() => setIsNavOpen(false)}
              >
                Wildlife
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="navbar-link hover-1"
                onClick={() => setIsNavOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="navbar-link hover-1"
                onClick={() => setIsNavOpen(false)}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="navbar-link hover-1"
                onClick={() => setIsNavOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <button className="btn btn-primary" style={{ cursor: "pointer" }}>
          Login
        </button>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <span style={{ fontSize: "28px" }}>{isNavOpen ? "✕" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}
