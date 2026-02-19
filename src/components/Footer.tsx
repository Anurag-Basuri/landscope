"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-brand">
          <Link href="/">
            <Image
              src="/Landscope.png"
              width={119}
              height={37}
              alt="Landscope logo"
            />
          </Link>
          <p>
            Exploring India&apos;s diverse landscapes — from the towering
            Himalayas to tropical island paradises. Your guide to understanding
            India&apos;s geography and wildlife.
          </p>
        </div>

        <div>
          <h3 className="footer-title">Explore</h3>
          <ul className="footer-list">
            <li>
              <Link
                href="/landforms/himalayan-mountains"
                className="footer-link"
              >
                Himalayan Mountains
              </Link>
            </li>
            <li>
              <Link href="/landforms/northern-plains" className="footer-link">
                Northern Plains
              </Link>
            </li>
            <li>
              <Link
                href="/landforms/peninsular-plateau"
                className="footer-link"
              >
                Peninsular Plateau
              </Link>
            </li>
            <li>
              <Link href="/landforms/thar-desert" className="footer-link">
                Thar Desert
              </Link>
            </li>
            <li>
              <Link href="/landforms/coastal-plains" className="footer-link">
                Coastal Plains
              </Link>
            </li>
            <li>
              <Link href="/landforms/islands" className="footer-link">
                The Islands
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-title">Newsletter</h3>
          <p
            style={{
              color: "var(--text-wild-blue-yonder)",
              fontSize: "var(--fontSize-7)",
              marginBottom: "12px",
            }}
          >
            Stay updated on India&apos;s geography, wildlife, and conservation.
          </p>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email"
              className="newsletter-input"
            />
            <button
              type="submit"
              className="btn btn-primary"
              style={{ padding: "10px 20px" }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <p className="footer-bottom">© 2026 Landscope. All rights reserved.</p>
    </footer>
  );
}
