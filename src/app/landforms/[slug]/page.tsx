import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { landforms, getLandformBySlug } from "@/data/landforms";
import { getRegionGroupByLandform } from "@/data/regions";
import {
  getFloraByLandform,
  getFaunaByLandform,
  getWildlifeBySlug,
} from "@/data/wildlife";
import LandformRegionsSectionClient from "@/components/LandformRegionsSectionClient";
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

  const signatureSpecies = lf.signatureSpeciesSlugs
    .map((speciesSlug) => getWildlifeBySlug(speciesSlug))
    .filter((species): species is NonNullable<typeof species> =>
      Boolean(species),
    );

  const signatureSpeciesMap = regionGroup
    ? Object.fromEntries(
        Array.from(
          new Set(
            regionGroup.subregions.flatMap(
              (subregion) => subregion.signatureSpeciesSlugs,
            ),
          ),
        )
          .map((speciesSlug) => {
            const species = getWildlifeBySlug(speciesSlug);
            return species ? [speciesSlug, species.name] : null;
          })
          .filter((entry): entry is [string, string] => entry !== null),
      )
    : {};

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[520px] pt-24 sm:pt-28">
        <Image
          src={lf.heroImageUrl}
          width={1600}
          height={600}
          alt={lf.name}
          className="w-full h-full object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-linear-to-b from-background/40 via-transparent to-transparent" />
        <div className="absolute bottom-10 left-0 right-0 z-10">
          <div className="atlas-container">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Landscape profile
            </div>
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

            <div className="atlas-panel bg-background/60 p-6 sm:p-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-3">
                {lf.name}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl">
                {lf.tagline}
              </p>
              <p className="text-sm sm:text-base text-muted-foreground max-w-3xl mt-4">
                {lf.summary}
              </p>
              <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
                {lf.stats.slice(0, 6).map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-card/70 border border-white/10 backdrop-blur-md rounded-xl px-4 py-3"
                  >
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
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
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-5 w-5 text-white/40" />
        </div>
      </section>

      {/* Highlights */}
      <section className="atlas-section">
        <div className="atlas-container">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
            <div className="space-y-6">
              <p className="atlas-kicker">At a glance</p>
              <h2 className="atlas-title">What defines this landscape</h2>
              <p className="atlas-subtitle">{lf.summary}</p>
            </div>
            <div className="grid gap-4">
              {lf.highlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-white/10 bg-card/70 backdrop-blur-md p-5 shadow-lg"
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

          {signatureSpecies.length > 0 && (
            <div className="mt-12 atlas-panel bg-card/50 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Signature species
                </h3>
                <span className="text-xs text-muted-foreground">
                  {signatureSpecies.length} featured
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {signatureSpecies.map((species) => (
                  <span
                    key={species.slug}
                    className="text-xs px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground bg-background/40"
                  >
                    {species.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Regions */}
      {regionGroup && (
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-5">
            <LandformRegionsSectionClient
              regionGroup={regionGroup}
              signatureSpeciesMap={signatureSpeciesMap}
            />
          </div>
        </section>
      )}

      {/* Story */}
      <section className="atlas-section">
        <div className="atlas-container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="atlas-kicker">Deep dive</p>
              <h2 className="atlas-title">
                Geography, climate, culture, and more
              </h2>
            </div>
            <span className="text-sm text-muted-foreground">
              {lf.story.length} chapters
            </span>
          </div>
          <div className="space-y-16">
            {lf.story.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={section.id}
                  className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center rounded-3xl border border-white/10 bg-card/30 backdrop-blur-md p-6 sm:p-8`}
                >
                  <div className="flex-1 space-y-4">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Chapter {String(idx + 1).padStart(2, "0")}
                    </div>
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
        </div>
      </section>

      {/* Ecology & Agriculture */}
      <section className="atlas-section bg-card/40">
        <div className="atlas-container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="atlas-kicker">Ecosystems</p>
              <h2 className="atlas-title">Ecology and livelihoods</h2>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
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
                  <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    {section.id === lf.ecology.id
                      ? "Vegetation"
                      : "Agriculture"}
                  </span>
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
        </div>
      </section>

      {/* Wildlife */}
      <section className="atlas-section">
        <div className="atlas-container">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div>
              <p className="atlas-kicker">Biodiversity</p>
              <h2 className="atlas-title">Flora & Fauna</h2>
            </div>
            <span className="text-sm text-muted-foreground">
              {flora.length + fauna.length} species documented
            </span>
          </div>

          {fauna.length > 0 && (
            <div className="space-y-6 mb-12">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">Fauna</h3>
                <span className="text-xs text-muted-foreground">
                  {fauna.length} species
                </span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fauna.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </div>
          )}

          {flora.length > 0 && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground">Flora</h3>
                <span className="text-xs text-muted-foreground">
                  {flora.length} species
                </span>
              </div>
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
        <section className="atlas-section bg-card/50">
          <div className="atlas-container">
            <div className="text-center mb-8">
              <p className="atlas-kicker">Gallery</p>
              <h2 className="text-2xl font-bold text-foreground">
                <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                  Landscapes in focus
                </span>
              </h2>
            </div>
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
