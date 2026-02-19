import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { wildlife, getWildlifeBySlug } from "@/data/wildlife";
import { getLandformBySlug } from "@/data/landforms";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return wildlife.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const sp = getWildlifeBySlug(slug);
  if (!sp) return { title: "Not Found" };
  return {
    title: `${sp.name} — Landscope Wildlife`,
    description: sp.description.slice(0, 160),
  };
}

export default async function WildlifeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const sp = getWildlifeBySlug(slug);
  if (!sp) notFound();

  const linkedLandforms = sp.landformSlugs
    .map(getLandformBySlug)
    .filter(Boolean);

  return (
    <section className="section">
      <div className="container">
        <div className="wildlife-detail-layout">
          {/* Image */}
          <figure
            className="wildlife-detail-image img-holder"
            style={{ "--width": 600, "--height": 450 } as React.CSSProperties}
          >
            <Image
              src={sp.imageUrl}
              width={600}
              height={450}
              alt={sp.name}
              className="img-cover"
              priority
            />
            {sp.conservationStatus && (
              <span
                className={`conservation-badge badge-${sp.conservationStatus.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {sp.conservationStatus}
              </span>
            )}
          </figure>

          {/* Info */}
          <div className="wildlife-detail-info">
            <span
              className="wildlife-type-badge"
              style={{ marginBottom: "12px", display: "inline-block" }}
            >
              {sp.type === "flora" ? "🌿 Flora" : "🐾 Fauna"} · {sp.category}
            </span>
            <h1 className="headline headline-1">{sp.name}</h1>
            <p className="wildlife-scientific-name">{sp.scientificName}</p>

            <div className="wildlife-detail-body">
              <p>{sp.description}</p>

              <div className="wildlife-meta">
                <div className="meta-item">
                  <span className="meta-label">Habitat</span>
                  <span className="meta-value">{sp.habitat}</span>
                </div>
                {sp.conservationStatus && (
                  <div className="meta-item">
                    <span className="meta-label">Conservation Status</span>
                    <span className="meta-value">{sp.conservationStatus}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Found in */}
            {linkedLandforms.length > 0 && (
              <div className="found-in">
                <h3 className="found-in-title">Found in:</h3>
                <div className="found-in-links">
                  {linkedLandforms.map((lf) => (
                    <Link
                      key={lf!.slug}
                      href={`/landforms/${lf!.slug}`}
                      className="found-in-chip"
                    >
                      {lf!.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
