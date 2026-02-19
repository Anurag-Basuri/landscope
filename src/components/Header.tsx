"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Library", href: "/#topics" },
  { label: "Policies", href: "/#featured" },
  { label: "News and Updates", href: "/#recent" },
  { label: "FAQ'S", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header${scrolled ? " active" : ""}`}>
      <div className="container">
        <Link href="/" className="logo">
          <Image
            src="/Landscope.png"
            width={119}
            height={37}
            alt="Landscope logo"
          />
        </Link>

        <nav className={`navbar${navOpen ? " active" : ""}`}>
          <div className="navbar-top">
            <Link href="/" className="logo">
              <Image
                src="/Landscope.png"
                width={119}
                height={37}
                alt="Landscope logo"
              />
            </Link>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={() => setNavOpen(false)}
            >
              ✕
            </button>
          </div>

          <ul className="navbar-list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="navbar-link hover-1"
                  onClick={() => setNavOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href="/contact" className="btn btn-primary">
          Login
        </Link>

        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={() => setNavOpen(true)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}
