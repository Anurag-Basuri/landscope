"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQItem } from "@/data/types";

interface Props {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="space-y-3">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          value={`item-${i}`}
          className="bg-card border border-border/50 rounded-xl px-6 overflow-hidden data-[state=open]:border-primary/30 transition-colors"
        >
          <AccordionTrigger className="text-foreground text-sm font-semibold hover:text-primary py-4 hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
