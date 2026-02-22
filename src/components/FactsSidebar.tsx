import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Fact } from "@/data/types";
import {
  Ruler,
  Mountain,
  Calendar,
  Map,
  Thermometer,
  CloudRain,
  Waves,
  Info,
  MapPin,
  Users,
  Activity,
  TreePine,
  Droplets,
  Globe2,
  TentTree,
  Bird,
  Leaf,
} from "lucide-react";

interface Props {
  facts: Fact[];
}

function getIconForLabel(label: string) {
  const l = label.toLowerCase();
  if (l.includes("area") || l.includes("size"))
    return <Map className="h-4 w-4" />;
  if (
    l.includes("length") ||
    l.includes("width") ||
    l.includes("distance") ||
    l.includes("coastline")
  )
    return <Ruler className="h-4 w-4" />;
  if (
    l.includes("highest") ||
    l.includes("peak") ||
    l.includes("mountain") ||
    l.includes("volcano")
  )
    return <Mountain className="h-4 w-4" />;
  if (l.includes("age") || l.includes("year") || l.includes("time"))
    return <Calendar className="h-4 w-4" />;
  if (
    l.includes("river") ||
    l.includes("water") ||
    l.includes("lake") ||
    l.includes("delta")
  )
    return <Waves className="h-4 w-4" />;
  if (l.includes("climate") || l.includes("temp"))
    return <Thermometer className="h-4 w-4" />;
  if (l.includes("rain") || l.includes("precipitation"))
    return <CloudRain className="h-4 w-4" />;
  if (
    l.includes("state") ||
    l.includes("location") ||
    l.includes("site") ||
    l.includes("hotspot")
  )
    return <MapPin className="h-4 w-4" />;
  if (
    l.includes("pop") ||
    l.includes("people") ||
    l.includes("tribe") ||
    l.includes("sentinelese")
  )
    return <Users className="h-4 w-4" />;
  if (l.includes("tectonic") || l.includes("activity"))
    return <Activity className="h-4 w-4" />;
  if (
    l.includes("tree") ||
    l.includes("forest") ||
    l.includes("flora") ||
    l.includes("mangrove")
  )
    return <TreePine className="h-4 w-4" />;
  if (
    l.includes("animal") ||
    l.includes("fauna") ||
    l.includes("bird") ||
    l.includes("species") ||
    l.includes("bustard") ||
    l.includes("dugong")
  )
    return <Bird className="h-4 w-4" />;
  if (l.includes("glacier") || l.includes("ice"))
    return <Droplets className="h-4 w-4" />;
  if (l.includes("crop") || l.includes("agri"))
    return <Leaf className="h-4 w-4" />;
  if (l.includes("mineral") || l.includes("soil"))
    return <TentTree className="h-4 w-4" />;
  return <Info className="h-4 w-4" />;
}

export default function FactsSidebar({ facts }: Props) {
  return (
    <Card className="sticky top-28 border-white/10 bg-card/60 backdrop-blur-xl shadow-2xl overflow-hidden group">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-primary/5 to-teal-accent/5 opacity-50 -z-10" />
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-primary/20 rounded-full blur-[64px] pointer-events-none group-hover:bg-cyan-primary/30 transition-colors duration-1000" />

      <CardHeader className="pb-4 relative z-10">
        <CardTitle className="text-xl font-bold bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent flex items-center gap-2">
          <Globe2 className="h-5 w-5 text-cyan-primary" />
          Quick Facts
        </CardTitle>
      </CardHeader>

      <Separator className="bg-white/10" />

      <CardContent className="space-y-5 pt-6 relative z-10">
        {facts.map((fact, i) => (
          <div key={i} className="flex gap-3 items-start group/fact">
            <div className="p-2 bg-primary/10 rounded-lg text-primary shrink-0 transition-colors group-hover/fact:bg-primary/20 group-hover/fact:text-teal-accent ring-1 ring-primary/20 shadow-inner">
              {getIconForLabel(fact.label)}
            </div>
            <div className="space-y-1 mt-0.5">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest block">
                {fact.label}
              </span>
              <p className="text-foreground text-sm font-medium leading-snug">
                {fact.value}
              </p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
