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
      <div className="atlas-container max-w-4xl">
        <div className="atlas-panel bg-card/50 p-6 sm:p-10 mb-10">
          <p className="atlas-kicker mb-3">Field guide</p>
          <h1 className="atlas-title">
            Frequently Asked{" "}
            <span className="bg-linear-to-r from-cyan-primary to-teal-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h1>
          <p className="atlas-subtitle mt-4 max-w-2xl">
            Everything you need to know about India&apos;s geography, landforms,
            and biodiversity.
          </p>
        </div>

        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
