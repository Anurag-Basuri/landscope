"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Landform, Wildlife as WildlifeType } from "@/data/types";
import WildlifeCard from "@/components/WildlifeCard";
import FactsSidebar from "@/components/FactsSidebar";
import { Mountain, TreePine, Wheat, PawPrint } from "lucide-react";

interface Props {
  landform: Landform;
  flora: WildlifeType[];
  fauna: WildlifeType[];
}

export default function LandformTabs({ landform, flora, fauna }: Props) {
  const tabsRef = useRef<HTMLDivElement>(null);

  function scrollToTabs() {
    tabsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <Tabs
      defaultValue="overview"
      className="w-full scroll-mt-24"
      ref={tabsRef}
      onValueChange={() => {
        // Small delay to let tab content render before scrolling
        setTimeout(scrollToTabs, 50);
      }}
    >
      <TabsList className="w-full max-w-2xl mx-auto bg-card/60 backdrop-blur-xl border border-white/10 p-1.5 rounded-2xl mb-12 grid grid-cols-4 shadow-xl">
        <TabsTrigger
          value="overview"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-xl text-sm gap-2 py-2.5 transition-all shadow-sm"
        >
          <Mountain className="h-4 w-4" />
          <span className="hidden sm:inline font-semibold">Overview</span>
        </TabsTrigger>
        <TabsTrigger
          value="vegetation"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-xl text-sm gap-2 py-2.5 transition-all shadow-sm"
        >
          <TreePine className="h-4 w-4" />
          <span className="hidden sm:inline font-semibold">Vegetation</span>
        </TabsTrigger>
        <TabsTrigger
          value="agriculture"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-xl text-sm gap-2 py-2.5 transition-all shadow-sm"
        >
          <Wheat className="h-4 w-4" />
          <span className="hidden sm:inline font-semibold">Agriculture</span>
        </TabsTrigger>
        <TabsTrigger
          value="wildlife"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-xl text-sm gap-2 py-2.5 transition-all shadow-sm"
        >
          <PawPrint className="h-4 w-4" />
          <span className="hidden sm:inline font-semibold">Wildlife</span>
        </TabsTrigger>
      </TabsList>

      {/* ─── Overview Tab ─── */}
      <TabsContent value="overview" className="focus-visible:outline-none">
        <div className="grid lg:grid-cols-[1fr_320px] gap-12 items-start">
          <article className="space-y-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {landform.description}
              </p>
            </motion.div>

            {landform.sections.map((section, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                >
                  <div className="flex-1 space-y-4 w-full">
                    <h2 className="text-3xl font-extrabold text-foreground inline-block relative">
                      {section.title}
                      <div className="absolute -bottom-2 left-0 w-12 h-1 bg-cyan-primary rounded-full" />
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-base pt-3">
                      {section.content}
                    </p>
                  </div>

                  {section.imageUrl && (
                    <div className="flex-1 w-full relative group">
                      <div className="absolute -inset-2 bg-cyan-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-50 transition duration-700" />
                      <div className="relative rounded-3xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
                        <Image
                          src={section.imageUrl}
                          width={600}
                          height={450}
                          alt={section.title}
                          className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </article>

          <div className="lg:sticky lg:top-24 mt-10 lg:mt-0 z-30">
            <FactsSidebar facts={landform.facts} />
          </div>
        </div>
      </TabsContent>

      {/* ─── Vegetation Tab ─── */}
      <TabsContent value="vegetation" className="focus-visible:outline-none">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center border border-white/10 group shadow-2xl">
          {landform.vegetation.imageUrl && (
            <>
              <Image
                src={landform.vegetation.imageUrl}
                fill
                alt={`${landform.name} vegetation`}
                className="absolute inset-0 object-cover z-0 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/20 z-10" />
            </>
          )}

          <div className="relative z-20 p-8 md:p-12 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-primary/20 text-cyan-primary mb-6 ring-1 ring-cyan-primary/30 backdrop-blur-md">
                <TreePine className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Flora & Ecology
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {landform.vegetation.title}
              </h2>
              <div className="bg-background/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  {landform.vegetation.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Linked flora */}
        {flora.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-foreground">
                Notable Flora
              </h3>
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-sm font-medium text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                {flora.length} species documented
              </span>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {flora.map((sp, i) => (
                <WildlifeCard key={sp.slug} species={sp} index={i} />
              ))}
            </div>
          </motion.div>
        )}
      </TabsContent>

      {/* ─── Agriculture Tab ─── */}
      <TabsContent value="agriculture" className="focus-visible:outline-none">
        <div className="relative rounded-3xl overflow-hidden min-h-[500px] flex items-center border border-white/10 group shadow-2xl">
          {landform.agriculture.imageUrl && (
            <>
              <Image
                src={landform.agriculture.imageUrl}
                fill
                alt={`${landform.name} agriculture`}
                className="absolute inset-0 object-cover z-0 transition-transform duration-1000 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/20 z-10" />
            </>
          )}

          <div className="relative z-20 p-8 md:p-12 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-accent/20 text-teal-accent mb-6 ring-1 ring-teal-accent/30 backdrop-blur-md">
                <Wheat className="h-4 w-4" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Livelihoods
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                {landform.agriculture.title}
              </h2>
              <div className="bg-background/40 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  {landform.agriculture.content}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </TabsContent>

      {/* ─── Wildlife Tab ─── */}
      <TabsContent value="wildlife" className="focus-visible:outline-none mt-4">
        <div className="space-y-16">
          {/* Species count summary */}
          {(fauna.length > 0 || flora.length > 0) && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground"
            >
              <span className="bg-card/50 backdrop-blur-md border border-border/50 px-4 py-2.5 rounded-xl shadow-sm">
                🐾{" "}
                <strong className="text-foreground ml-1">{fauna.length}</strong>{" "}
                Fauna
              </span>
              <span className="bg-card/50 backdrop-blur-md border border-border/50 px-4 py-2.5 rounded-xl shadow-sm">
                🌿{" "}
                <strong className="text-foreground ml-1">{flora.length}</strong>{" "}
                Flora
              </span>
              <span className="bg-primary/10 border border-primary/20 px-4 py-2.5 rounded-xl text-primary font-medium shadow-sm">
                Total: {fauna.length + flora.length} species
              </span>
            </motion.div>
          )}

          {fauna.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <PawPrint className="h-8 w-8 text-cyan-primary" />
                  Fauna
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fauna.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {flora.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-foreground flex items-center gap-3">
                  <TreePine className="h-8 w-8 text-teal-accent" />
                  Flora
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-border/50 to-transparent" />
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {flora.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </motion.div>
          )}

          {flora.length === 0 && fauna.length === 0 && (
            <div className="text-center py-20 bg-card/20 rounded-3xl border border-dashed border-white/10">
              <PawPrint className="h-12 w-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No wildlife records available for this landform yet.
              </p>
            </div>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
