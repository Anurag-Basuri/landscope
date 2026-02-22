import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";

export const metadata = {
  title: "FAQ — Landscope",
  description:
    "Frequently asked questions about India's landforms and wildlife.",
};

export default function FAQPage() {
  return (
    <section className="pt-24 md:pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-5">
        <h1 className="text-4xl font-extrabold text-foreground text-center mb-4">
          Frequently Asked{" "}
          <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
            Questions
          </span>
        </h1>
        <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto">
          Everything you need to know about India&apos;s geography, landforms,
          and biodiversity.
        </p>

        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
