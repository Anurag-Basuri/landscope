import { notFound } from "next/navigation";
import Image from "next/image";
import { landforms, getLandformBySlug } from "@/data/landforms";
import { getFloraByLandform, getFaunaByLandform } from "@/data/wildlife";
import FactsSidebar from "@/components/FactsSidebar";
import WildlifeCard from "@/components/WildlifeCard";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return landforms.map((lf) => ({ slug: lf.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const lf = getLandformBySlug(slug);
  if (!lf) return { title: "Not Found" };
  return {
    title: `${lf.name} — Landscope`,
    description: lf.tagline,
  };
}

export default async function LandformPage({ params }: PageProps) {
  const { slug } = await params;
  const lf = getLandformBySlug(slug);
  if (!lf) notFound();

  const flora = getFloraByLandform(slug);
  const fauna = getFaunaByLandform(slug);

  return (
    <>
      {/* Hero */}
      <section className="landform-hero">
        <figure
          className="landform-hero-banner img-holder"
          style={{ "--width": 1600, "--height": 600 } as React.CSSProperties}
        >
          <Image
            src={lf.imageUrl}
            width={1600}
            height={600}
            alt={lf.name}
            className="img-cover"
            priority
          />
          <div className="landform-hero-overlay" />
        </figure>
        <div className="landform-hero-content container">
          <h1 className="headline headline-1">{lf.name}</h1>
          <p className="landform-hero-tagline">{lf.tagline}</p>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="section">
        <div className="container landform-detail-layout">
          <article className="landform-content">
            <p className="landform-description">{lf.description}</p>

            {lf.sections.map((section) => (
              <div key={section.id} className="content-section">
                <h2 className="headline headline-2">{section.title}</h2>
                <p>{section.content}</p>
                {section.imageUrl && (
                  <figure
                    className="content-section-img img-holder"
                    style={
                      { "--width": 800, "--height": 400 } as React.CSSProperties
                    }
                  >
                    <Image
                      src={section.imageUrl}
                      width={800}
                      height={400}
                      alt={section.title}
                      className="img-cover"
                      loading="lazy"
                    />
                  </figure>
                )}
              </div>
            ))}
          </article>

          <FactsSidebar facts={lf.facts} />
        </div>
      </section>

      {/* Gallery */}
      {lf.galleryImages.length > 0 && (
        <section className="section gallery-section">
          <div className="container">
            <h2 className="headline headline-2 section-title">
              <span className="span">Gallery</span>
            </h2>
            <div className="gallery-grid">
              {lf.galleryImages.map((img, i) => (
                <figure
                  key={i}
                  className="gallery-item img-holder"
                  style={
                    { "--width": 400, "--height": 300 } as React.CSSProperties
                  }
                >
                  <Image
                    src={img}
                    width={400}
                    height={300}
                    alt={`${lf.name} photo ${i + 1}`}
                    className="img-cover"
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Flora */}
      {flora.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="headline headline-2 section-title">
              🌿 <span className="span">Flora</span>
            </h2>
            <div className="wildlife-grid">
              {flora.map((sp) => (
                <WildlifeCard key={sp.slug} species={sp} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fauna */}
      {fauna.length > 0 && (
        <section className="section">
          <div className="container">
            <h2 className="headline headline-2 section-title">
              🐾 <span className="span">Fauna</span>
            </h2>
            <div className="wildlife-grid">
              {fauna.map((sp) => (
                <WildlifeCard key={sp.slug} species={sp} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
