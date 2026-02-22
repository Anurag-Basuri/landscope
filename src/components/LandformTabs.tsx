"use client";

import { useRef } from "react";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
      <TabsList className="w-full max-w-2xl mx-auto bg-card border border-border/50 p-1 rounded-xl mb-10 grid grid-cols-4">
        <TabsTrigger
          value="overview"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-lg text-sm gap-1.5"
        >
          <Mountain className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Overview</span>
        </TabsTrigger>
        <TabsTrigger
          value="vegetation"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-lg text-sm gap-1.5"
        >
          <TreePine className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Vegetation</span>
        </TabsTrigger>
        <TabsTrigger
          value="agriculture"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-lg text-sm gap-1.5"
        >
          <Wheat className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Agriculture</span>
        </TabsTrigger>
        <TabsTrigger
          value="wildlife"
          className="data-[state=active]:bg-linear-to-r data-[state=active]:from-cyan-primary data-[state=active]:to-teal-accent data-[state=active]:text-white rounded-lg text-sm gap-1.5"
        >
          <PawPrint className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Wildlife</span>
        </TabsTrigger>
      </TabsList>

      {/* ─── Overview Tab ─── */}
      <TabsContent value="overview">
        <div className="grid lg:grid-cols-[1fr_300px] gap-10 items-start">
          <article className="space-y-10">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {landform.description}
            </p>
            {landform.sections.map((section) => (
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
          <FactsSidebar facts={landform.facts} />
        </div>
      </TabsContent>

      {/* ─── Vegetation Tab ─── */}
      <TabsContent value="vegetation">
        <Card className="border-border/50">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <TreePine className="h-6 w-6 text-primary" />
              {landform.vegetation.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {landform.vegetation.content}
            </p>
            {landform.vegetation.imageUrl && (
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={landform.vegetation.imageUrl}
                  width={900}
                  height={450}
                  alt={`${landform.name} vegetation`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}

            {/* Linked flora */}
            {flora.length > 0 && (
              <>
                <Separator className="bg-border/30" />
                <h3 className="text-lg font-semibold text-foreground">
                  🌿 Native Flora
                  <span className="text-sm font-normal text-muted-foreground ml-2">
                    ({flora.length} species)
                  </span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {flora.map((sp, i) => (
                    <WildlifeCard key={sp.slug} species={sp} index={i} />
                  ))}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* ─── Agriculture Tab ─── */}
      <TabsContent value="agriculture">
        <Card className="border-border/50">
          <CardContent className="p-8 space-y-6">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
              <Wheat className="h-6 w-6 text-primary" />
              {landform.agriculture.title}
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base">
              {landform.agriculture.content}
            </p>
            {landform.agriculture.imageUrl && (
              <div className="rounded-xl overflow-hidden">
                <Image
                  src={landform.agriculture.imageUrl}
                  width={900}
                  height={450}
                  alt={`${landform.name} agriculture`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </CardContent>
        </Card>
      </TabsContent>

      {/* ─── Wildlife Tab ─── */}
      <TabsContent value="wildlife">
        <div className="space-y-12">
          {/* Species count summary */}
          {(fauna.length > 0 || flora.length > 0) && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="bg-card border border-border/50 px-4 py-2 rounded-lg">
                🐾 <strong className="text-foreground">{fauna.length}</strong>{" "}
                Fauna
              </span>
              <span className="bg-card border border-border/50 px-4 py-2 rounded-lg">
                🌿 <strong className="text-foreground">{flora.length}</strong>{" "}
                Flora
              </span>
              <span className="bg-card border border-border/50 px-4 py-2 rounded-lg">
                Total:{" "}
                <strong className="text-foreground">
                  {fauna.length + flora.length}
                </strong>{" "}
                species
              </span>
            </div>
          )}

          {fauna.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <PawPrint className="h-6 w-6 text-primary" />
                Fauna
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fauna.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </div>
          )}

          {flora.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                <TreePine className="h-6 w-6 text-primary" />
                Flora
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {flora.map((sp, i) => (
                  <WildlifeCard key={sp.slug} species={sp} index={i} />
                ))}
              </div>
            </div>
          )}

          {flora.length === 0 && fauna.length === 0 && (
            <p className="text-center text-muted-foreground py-16 text-lg">
              No wildlife data available for this landform yet.
            </p>
          )}
        </div>
      </TabsContent>
    </Tabs>
  );
}
