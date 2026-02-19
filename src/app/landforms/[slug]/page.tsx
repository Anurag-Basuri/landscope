import { notFound } from "next/navigation";
import Image from "next/image";
import { landforms, getLandformBySlug } from "@/data/landforms";
import { getFloraByLandform, getFaunaByLandform } from "@/data/wildlife";
import FactsSidebar from "@/components/FactsSidebar";
import WildlifeCard from "@/components/WildlifeCard";
import { Separator } from "@/components/ui/separator";

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
  return { title: `${lf.name} — Landscope`, description: lf.tagline };
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
      <section className="relative h-[450px] md:h-[500px]">
        <Image
          src={lf.imageUrl}
          width={1600}
          height={600}
          alt={lf.name}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-5">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
              {lf.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {lf.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <article className="space-y-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {lf.description}
            </p>

            {lf.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
                {section.imageUrl && (
                  <div className="rounded-xl overflow-hidden mt-4">
                    <Image
                      src={section.imageUrl}
                      width={800}
                      height={400}
                      alt={section.title}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            ))}
          </article>

          <FactsSidebar facts={lf.facts} />
        </div>
      </section>

      {/* Gallery */}
      {lf.galleryImages.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {lf.galleryImages.map((img, i) => (
                <div key={i} className="rounded-xl overflow-hidden group">
                  <Image
                    src={img}
                    width={400}
                    height={300}
                    alt={`${lf.name} photo ${i + 1}`}
                    className="img-cover group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Separator className="bg-border/30 max-w-7xl mx-auto" />

      {/* Flora */}
      {flora.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              🌿{" "}
              <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Flora
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {flora.map((sp, i) => (
                <WildlifeCard key={sp.slug} species={sp} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fauna */}
      {fauna.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-foreground mb-8">
              🐾{" "}
              <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Fauna
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {fauna.map((sp, i) => (
                <WildlifeCard key={sp.slug} species={sp} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
