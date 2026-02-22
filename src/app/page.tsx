"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { landforms } from "@/data/landforms";
import { wildlife } from "@/data/wildlife";
import LandformCard from "@/components/LandformCard";
import WildlifeCard from "@/components/WildlifeCard";
import {
  ArrowRight,
  Mountain,
  TreePine,
  Compass,
  MapPin,
  Leaf,
  PawPrint,
  Layers,
} from "lucide-react";

const IndiaMap = dynamic(() => import("@/components/IndiaMap"), {
  ssr: false,
  loading: () => (
    <div className="rounded-3xl border border-border/60 bg-card/40 h-[520px] w-full" />
  ),
});

const featuredWildlife = wildlife
  .filter((w) => w.conservationStatus)
  .slice(0, 6);

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 sm:w-96 sm:h-96 bg-teal-accent/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] bg-cyan-primary/5 rounded-full blur-[200px] -z-10" />

        <div className="atlas-container grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
              <Compass className="h-3.5 w-3.5" />
              Cinematic Atlas of India
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Trace India&apos;s{" "}
              <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                living landscapes
              </span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              An atlas-style journey through mountains, plains, plateaus,
              deserts, coasts, and islands. Each landform is mapped with the
              climate bands, species, and cultural corridors that make it
              distinct.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-linear-to-r from-cyan-primary to-teal-accent text-white hover:shadow-lg hover:shadow-cyan-primary/25 transition-all"
              >
                <Link href="/landforms">
                  <Mountain className="h-4 w-4 mr-2" />
                  Explore Landforms
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-border/50 text-foreground hover:border-primary/50 hover:text-primary"
              >
                <Link href="/wildlife">
                  <TreePine className="h-4 w-4 mr-2" />
                  Discover Wildlife
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="atlas-panel overflow-hidden">
              <div className="relative h-[480px]">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                  width={700}
                  height={520}
                  alt="Indian landscape"
                  className="img-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/70 via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Major landforms", value: "6" },
                      { label: "Climate bands", value: "12+" },
                      { label: "Key corridors", value: "40+" },
                      { label: "Signature species", value: "60+" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-xl border border-white/10 bg-background/60 px-3 py-2"
                      >
                        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="text-lg font-semibold text-white">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:hidden">
            <div className="atlas-panel overflow-hidden">
              <div className="relative h-[240px] sm:h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                  width={900}
                  height={520}
                  alt="Indian landscape"
                  className="img-cover"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-linear-to-t from-background/70 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="atlas-section">
        <div className="atlas-container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
            <div>
              <p className="atlas-kicker">Field notes</p>
              <h2 className="atlas-title">India at a glance</h2>
            </div>
            <p className="atlas-subtitle max-w-md">
              Macro indicators that shape the atlas — terrain, biodiversity, and
              scale.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                number: "6",
                label: "Major Landforms",
                icon: Layers,
              },
              {
                number: "3.3M",
                label: "sq km Total Area",
                icon: MapPin,
              },
              {
                number: "~1,00,000",
                label: "Fauna Species",
                icon: PawPrint,
              },
              {
                number: "~45,000",
                label: "Flora Species",
                icon: Leaf,
              },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-left p-6 sm:p-7 bg-card/80 border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 group backdrop-blur-sm"
              >
                <stat.icon className="h-6 w-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-3xl font-extrabold bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                  {stat.number}
                </span>
                <span className="text-muted-foreground text-sm mt-2 block">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INTERACTIVE MAP ─── */}
      <section className="atlas-section relative overflow-hidden">
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-cyan-primary/5 rounded-full blur-[100px] -z-10" />
        <div className="atlas-container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <p className="atlas-kicker">Atlas grid</p>
              <h2 className="atlas-title">Interactive map</h2>
            </div>
            <p className="atlas-subtitle max-w-md">
              Hover to preview, click to pin, and explore each landform zone in
              detail.
            </p>
          </div>
          <div className="atlas-panel border-white/10 bg-card/30 p-4 sm:p-6">
            <IndiaMap />
          </div>
        </div>
      </section>

      {/* ─── LANDFORMS GRID ─── */}
      <section className="atlas-section">
        <div className="atlas-container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <p className="atlas-kicker">Atlas index</p>
              <h2 className="atlas-title">Six major landforms</h2>
            </div>
            <p className="atlas-subtitle max-w-md">
              A quick index of India&apos;s physiographic divisions and the
              ecosystems they sustain.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {landforms.map((lf, i) => (
              <LandformCard key={lf.slug} landform={lf} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WILDLIFE ─── */}
      <section className="atlas-section bg-linear-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="atlas-container">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
            <div>
              <p className="atlas-kicker">Wildlife highlights</p>
              <h2 className="atlas-title">Signature wildlife</h2>
            </div>
            <p className="atlas-subtitle max-w-md">
              Iconic species across India&apos;s habitats — fragile, rare, and
              unforgettable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWildlife.map((sp, i) => (
              <WildlifeCard key={sp.slug} species={sp} index={i} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              className="border-border/50 hover:border-primary/50 hover:text-primary"
            >
              <Link href="/wildlife">
                View All Wildlife <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-cyan-primary/10 via-teal-accent/5 to-cyan-primary/10 -z-10" />
        <div className="absolute top-0 left-1/3 w-80 h-80 bg-cyan-primary/10 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-teal-accent/10 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-5 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to{" "}
            <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
              Explore?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
            Dive deeper into India&apos;s geography — learn about each
            landform&apos;s unique ecology, culture, and the species that call
            it home.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-cyan-primary to-teal-accent text-white hover:shadow-lg hover:shadow-cyan-primary/25 transition-all"
            >
              <Link href="/landforms">
                <Mountain className="h-4 w-4 mr-2" />
                Browse Landforms
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-border/50 text-foreground hover:border-primary/50 hover:text-primary"
            >
              <Link href="/about">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  );
}
