import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Fact } from "@/data/types";

interface Props {
  facts: Fact[];
}

export default function FactsSidebar({ facts }: Props) {
  return (
    <Card className="sticky top-24 border-border/50">
      <CardHeader>
        <CardTitle className="text-lg bg-gradient-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
          Quick Facts
        </CardTitle>
      </CardHeader>
      <Separator className="bg-border/50" />
      <CardContent className="space-y-4 pt-4">
        {facts.map((fact, i) => (
          <div key={i} className="space-y-0.5">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">
              {fact.label}
            </span>
            <p className="text-foreground text-sm">{fact.value}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
