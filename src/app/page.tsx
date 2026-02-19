import Link from "next/link";
import Image from "next/image";
import { landforms } from "@/data/landforms";
import { wildlife } from "@/data/wildlife";
import LandformCard from "@/components/LandformCard";
import WildlifeCard from "@/components/WildlifeCard";

const featuredWildlife = wildlife
  .filter((w) => w.conservationStatus)
  .slice(0, 6);

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="hero" id="home">
        <div className="container">
          <div className="hero-content">
            <h1 className="headline headline-1">
              Discover India&apos;s{" "}
              <span className="span">Diverse Landscapes</span>
            </h1>
            <p className="hero-text">
              From the towering Himalayas to tropical island paradises — explore
              the six major landforms that shape India&apos;s geography, and the
              incredible flora and fauna they sustain.
            </p>
            <div className="hero-actions">
              <Link href="/landforms" className="btn btn-primary">
                Explore Landforms
              </Link>
              <Link href="/wildlife" className="btn btn-outline">
                Discover Wildlife
              </Link>
            </div>
          </div>

          <figure
            className="hero-banner img-holder"
            style={{ "--width": 700, "--height": 520 } as React.CSSProperties}
          >
            <Image
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
              width={700}
              height={520}
              alt="Indian landscape"
              className="img-cover"
              priority
            />
          </figure>
        </div>
      </section>

      {/* ─── LANDFORMS GRID ─── */}
      <section className="section landforms-section" id="landforms">
        <div className="container">
          <h2 className="headline headline-2 section-title">
            The <span className="span">6 Landforms</span> of India
          </h2>
          <p className="section-text">
            India&apos;s landmass is divided into six major physiographic
            divisions, each with unique geological features, climates, and
            ecosystems.
          </p>

          <div className="landforms-grid">
            {landforms.map((lf) => (
              <LandformCard key={lf.slug} landform={lf} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WILDLIFE ─── */}
      <section className="section wildlife-section" id="wildlife">
        <div className="container">
          <h2 className="headline headline-2 section-title">
            Featured <span className="span">Wildlife</span>
          </h2>
          <p className="section-text">
            Iconic species across India&apos;s diverse habitats — many
            threatened, all remarkable.
          </p>

          <div className="wildlife-grid">
            {featuredWildlife.map((sp) => (
              <WildlifeCard key={sp.slug} species={sp} />
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/wildlife" className="btn btn-primary">
              View All Wildlife →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-number">6</span>
              <span className="stat-label">Major Landforms</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">3.3M</span>
              <span className="stat-label">sq km Total Area</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">~1,00,000</span>
              <span className="stat-label">Fauna Species</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">~45,000</span>
              <span className="stat-label">Flora Species</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
