import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { landforms, getLandformBySlug } from "@/data/landforms";
import { getFloraByLandform, getFaunaByLandform } from "@/data/wildlife";
import LandformTabs from "@/components/LandformTabs";
import { ChevronRight, ChevronDown } from "lucide-react";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return landforms.map((lf) => ({ slug: lf.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = params;
  const lf = getLandformBySlug(slug);
  if (!lf) return { title: "Not Found" };
  return {
    title: `${lf.name} — Landscope`,
    description: lf.tagline,
    openGraph: {
      title: `${lf.name} — Landscope`,
      description: lf.tagline,
      type: "article",
      images: [lf.imageUrl],
    },
    twitter: {
      card: "summary_large_image",
      title: `${lf.name} — Landscope`,
      description: lf.tagline,
      images: [lf.imageUrl],
    },
    alternates: {
      canonical: `/landforms/${lf.slug}`,
    },
  };
}

export default async function LandformPage({ params }: PageProps) {
  const { slug } = params;
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

            <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
              {lf.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {lf.tagline}
            </p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <ChevronDown className="h-5 w-5 text-white/40" />
        </div>
      </section>

      {/* Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-5">
          <LandformTabs landform={lf} flora={flora} fauna={fauna} />
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
