import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { wildlife, getWildlifeBySlug } from "@/data/wildlife";
import { getLandformBySlug } from "@/data/landforms";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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

  const statusColors: Record<string, string> = {
    "Critically Endangered": "bg-red-500/90 text-white hover:bg-red-500",
    Endangered: "bg-orange-500/90 text-white hover:bg-orange-500",
    Vulnerable: "bg-yellow-500/90 text-black hover:bg-yellow-500",
    "Near Threatened": "bg-blue-400/90 text-white hover:bg-blue-400",
  };

  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-5">
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
                      key={lf!.slug}
                      href={`/landforms/${lf!.slug}`}
                      className="px-4 py-1.5 text-sm bg-secondary border border-border/50 rounded-lg text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
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
