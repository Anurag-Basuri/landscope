import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "About — Landscope",
  description: "Learn about Landscope and India's geographic diversity.",
};

export default function AboutPage() {
  return (
    <section className="pt-24 md:pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="text-4xl font-extrabold text-foreground text-center mb-8">
          About{" "}
          <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
            Landscope
          </span>
        </h1>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            <strong className="text-foreground">Landscope</strong> is a platform
            dedicated to exploring and understanding India&apos;s extraordinary
            geographic diversity. Our mission is to make knowledge about
            India&apos;s landforms, ecosystems, and wildlife accessible,
            engaging, and inspiring.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            Why India&apos;s Geography Matters
          </h2>
          <p>
            India is one of the most geographically diverse countries on Earth.
            Within its 3.3 million square kilometres, you&apos;ll find the
            world&apos;s highest mountain range, one of the largest river
            plains, ancient plateaus rich in minerals, a vibrant desert, over
            7,500 km of coastline, and tropical island archipelagos.
          </p>
          <p>
            This diversity sustains over 45,000 plant species and nearly 100,000
            animal species — making India one of the world&apos;s 17
            mega-diverse countries.
          </p>

          <h2 className="text-2xl font-bold text-foreground pt-4">
            What We Cover
          </h2>
          <ul className="space-y-2 pl-1">
            <li>
              🏔️{" "}
              <strong className="text-foreground">
                The Himalayan Mountains
              </strong>{" "}
              — world&apos;s youngest and highest range
            </li>
            <li>
              🌾{" "}
              <strong className="text-foreground">The Northern Plains</strong> —
              India&apos;s agricultural heartland
            </li>
            <li>
              🏜️{" "}
              <strong className="text-foreground">
                The Peninsular Plateau
              </strong>{" "}
              — ancient bedrock and mineral wealth
            </li>
            <li>
              🐪 <strong className="text-foreground">The Thar Desert</strong> —
              sand, resilience, and culture
            </li>
            <li>
              🌊 <strong className="text-foreground">The Coastal Plains</strong>{" "}
              — 7,500 km of diverse coastline
            </li>
            <li>
              🏝️ <strong className="text-foreground">The Islands</strong> —
              coral atolls and volcanic archipelagos
            </li>
          </ul>

          <div className="text-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-linear-to-r from-cyan-primary to-teal-accent text-white"
            >
              <Link href="/landforms">
                Start Exploring <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
