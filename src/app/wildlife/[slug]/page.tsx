import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { wildlife, getWildlifeBySlug } from "@/data/wildlife";
import { getLandformBySlug } from "@/data/landforms";
import { Landform } from "@/data/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import WildlifeCard from "@/components/WildlifeCard";
import { ChevronRight, ArrowLeft } from "lucide-react";

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
    .filter((lf): lf is Landform => lf !== undefined);

  // Related species: share at least one landform, exclude self, take 3
  const related = wildlife
    .filter(
      (w) =>
        w.slug !== sp.slug &&
        w.landformSlugs.some((ls) => sp.landformSlugs.includes(ls)),
    )
    .slice(0, 3);

  const statusColors: Record<string, string> = {
    "Critically Endangered": "bg-red-500/90 text-white hover:bg-red-500",
    Endangered: "bg-orange-500/90 text-white hover:bg-orange-500",
    Vulnerable: "bg-yellow-500/90 text-white hover:bg-yellow-500",
    "Near Threatened": "bg-blue-400/90 text-white hover:bg-blue-400",
  };

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Breadcrumbs & back link */}
        <div className="flex items-center justify-between mb-8">
          <nav className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link
              href="/wildlife"
              className="hover:text-primary transition-colors"
            >
              Wildlife
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-primary font-medium">{sp.name}</span>
          </nav>
          <Link
            href="/wildlife"
            className="hidden sm:flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Wildlife
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src={sp.imageUrl}
              width={600}
              height={450}
              alt={sp.name}
              className="w-full h-auto object-cover"
              priority
            />
            {sp.conservationStatus && (
              <Badge
                className={`absolute top-4 right-4 text-sm ${
                  statusColors[sp.conservationStatus] ||
                  "bg-muted text-foreground"
                }`}
              >
                {sp.conservationStatus}
              </Badge>
            )}
          </div>

          {/* Info */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary mb-3">
              {sp.type === "flora" ? "🌿 Flora" : "🐾 Fauna"} · {sp.category}
            </span>

            <h1 className="text-3xl lg:text-4xl font-extrabold text-foreground mb-2">
              {sp.name}
            </h1>
            <p className="text-muted-foreground italic text-lg mb-6">
              {sp.scientificName}
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              {sp.description}
            </p>

            {/* Fun Fact */}
            {sp.funFact && (
              <Card className="border-primary/30 bg-primary/5 mb-6">
                <CardContent className="p-5">
                  <p className="text-sm font-semibold text-primary mb-1">
                    💡 Did you know?
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sp.funFact}
                  </p>
                </CardContent>
              </Card>
            )}

            <Card className="border-border/50">
              <CardContent className="p-6 space-y-4">
                <div>
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                    Habitat
                  </span>
                  <p className="text-foreground text-sm mt-1">{sp.habitat}</p>
                </div>
                {sp.conservationStatus && (
                  <div>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Conservation Status
                    </span>
                    <p className="text-foreground text-sm mt-1">
                      {sp.conservationStatus}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Found in */}
            {linkedLandforms.length > 0 && (
              <div className="mt-8">
                <h3 className="text-foreground font-semibold mb-3">
                  Found in:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {linkedLandforms.map((lf) => (
                    <Link
                      key={lf.slug}
                      href={`/landforms/${lf.slug}`}
                      className="px-4 py-1.5 text-sm bg-secondary border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                    >
                      {lf.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Gallery Images */}
        {sp.galleryImages && sp.galleryImages.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sp.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden group relative h-[220px]"
                >
                  <Image
                    src={img}
                    width={400}
                    height={300}
                    alt={`${sp.name} photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Species */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Related{" "}
              <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Species
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((r, i) => (
                <WildlifeCard key={r.slug} species={r} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
