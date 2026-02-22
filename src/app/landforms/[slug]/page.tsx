import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { landforms, getLandformBySlug } from "@/data/landforms";
import { getRegionGroupByLandform } from "@/data/regions";
import { getFloraByLandform, getFaunaByLandform } from "@/data/wildlife";
import LandformRegionsSection from "@/components/LandformRegionsSection";
import WildlifeCard from "@/components/WildlifeCard";
import { ChevronRight, ChevronDown, Sparkles } from "lucide-react";

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
    openGraph: {
      title: `${lf.name} — Landscope`,
      description: lf.tagline,
      type: "article",
      images: [lf.heroImageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${lf.name} — Landscope`,
      description: lf.tagline,
      images: [lf.heroImageUrl],
    },
    alternates: {
      canonical: `/landforms/${lf.slug}`,
    },
  };
}

export default async function LandformPage({ params }: PageProps) {
  const { slug } = await params;
  const lf = getLandformBySlug(slug);
  if (!lf) notFound();

  const regionGroup = getRegionGroupByLandform(slug);

  const flora = getFloraByLandform(slug);
  const fauna = getFaunaByLandform(slug);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px]">
        <Image
          src={lf.heroImageUrl}
          width={1600}
          height={600}
          alt={lf.name}
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />
        <div className="absolute bottom-12 left-0 right-0 z-10">
          <div className="max-w-7xl mx-auto px-5">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link
                href="/landforms"
                className="hover:text-primary transition-colors"
              >
                Landforms
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-primary font-medium">{lf.name}</span>
            </nav>

            <h1 className="text-4xl lg:text-6xl font-extrabold text-white mb-3">
              {lf.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {lf.tagline}
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mt-4">
              {lf.summary}
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3 max-w-3xl">
              {lf.stats.slice(0, 6).map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card/50 border border-white/10 backdrop-blur-md rounded-xl px-4 py-3"
                >
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm font-semibold text-white mt-1">
                    {stat.value}
                  </div>
                  {stat.detail && (
                    <div className="text-[11px] text-muted-foreground mt-1">
                      {stat.detail}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-5 w-5 text-white/40" />
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5" />
                At a glance
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
                What defines this landscape
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed">
                {lf.summary}
              </p>
            </div>
            <div className="grid gap-4">
              {lf.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-card/60 backdrop-blur-md p-5"
                >
                  <div
                    className="h-1 w-12 rounded-full"
                    style={{ backgroundColor: highlight.accent ?? "#38bdf8" }}
                  />
                  <h3 className="text-lg font-semibold text-foreground mt-3">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Regions */}
      {regionGroup && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-5">
            <LandformRegionsSection regionGroup={regionGroup} />
          </div>
        </section>
      )}

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5 space-y-20">
          {lf.story.map((section, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={section.id}
                className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl font-extrabold text-foreground">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </div>
                {section.imageUrl && (
                  <div className="flex-1 w-full">
                    <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                      <Image
                        src={section.imageUrl}
                        width={640}
                        height={480}
                        alt={section.title}
                        className="w-full aspect-[4/3] object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Ecology & Agriculture */}
      <section className="py-16 bg-card/40">
        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-8">
          {[lf.ecology, lf.agriculture].map((section) => (
            <div
              key={section.id}
              className="rounded-3xl overflow-hidden border border-white/10 bg-card/70 backdrop-blur-md shadow-2xl"
            >
              {section.imageUrl && (
                <div className="relative h-56">
                  <Image
                    src={section.imageUrl}
                    fill
                    alt={section.title}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent" />
                </div>
              )}
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-bold text-foreground">
                  {section.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wildlife */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <h2 className="text-3xl font-extrabold text-foreground">
              Flora & Fauna
            </h2>
            <span className="text-sm text-muted-foreground">
              {flora.length + fauna.length} species documented
            </span>
          </div>

          {fauna.length > 0 && (
            <div className="space-y-6 mb-12">
              <h3 className="text-xl font-semibold text-foreground">Fauna</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fauna.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </div>
          )}

          {flora.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Flora</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {flora.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Gallery — Masonry style */}
      {lf.galleryImages.length > 0 && (
        <section className="py-16 bg-card/50">
          <div className="max-w-7xl mx-auto px-5">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Gallery
              </span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] gallery-masonry">
              {lf.galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden group relative"
                >
                  <Image
                    src={img}
                    width={600}
                    height={400}
                    alt={`${lf.name} photo ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
