"use client";

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

const featuredWildlife = wildlife
  .filter((w) => w.conservationStatus)
  .slice(0, 6);

export default function Home() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-accent/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-primary/5 rounded-full blur-[200px] -z-10" />

        <div className="max-w-7xl mx-auto px-5 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-3 py-1.5 rounded-full mb-6">
              <Compass className="h-3.5 w-3.5" />
              Explore India&apos;s Geography
            </span>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6">
              Discover India&apos;s{" "}
              <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Diverse Landscapes
              </span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-lg">
              From the towering Himalayas to tropical island paradises — explore
              the six major landforms that shape India&apos;s geography, and the
              incredible flora and fauna they sustain.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-primary to-teal-accent text-white hover:shadow-lg hover:shadow-cyan-primary/25 transition-all"
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
            <div className="relative rounded-3xl overflow-hidden h-[480px]">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200"
                width={700}
                height={520}
                alt="Indian landscape"
                className="img-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── LANDFORMS GRID ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-3">
              The{" "}
              <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                6 Landforms
              </span>{" "}
              of India
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              India&apos;s landmass is divided into six major physiographic
              divisions, each with unique geological features, climates, and
              ecosystems.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {landforms.map((lf, i) => (
              <LandformCard key={lf.slug} landform={lf} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED WILDLIFE ─── */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/[0.03] to-transparent">
        <div className="max-w-7xl mx-auto px-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
                Wildlife
              </span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Iconic species across India&apos;s diverse habitats — many
              threatened, all remarkable.
            </p>
          </motion.div>

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

      {/* ─── STATS ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5">
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
                className="text-center p-8 bg-card border border-border/50 rounded-2xl hover:border-primary/30 transition-all duration-300 group"
              >
                <stat.icon className="h-6 w-6 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <span className="block text-3xl font-extrabold bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
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

      {/* ─── CTA BAND ─── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-primary/10 via-teal-accent/5 to-cyan-primary/10 -z-10" />
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
            <span className="bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
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
              className="bg-gradient-to-r from-cyan-primary to-teal-accent text-white hover:shadow-lg hover:shadow-cyan-primary/25 transition-all"
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
