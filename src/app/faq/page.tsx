import Image from "next/image";
import FAQAccordion from "@/components/FAQAccordion";
import { faqItems } from "@/data/faq";

export const metadata = {
  title: "FAQ — Landscope",
  description:
    "Frequently asked questions about land resources and conservation.",
};

export default function FAQPage() {
  return (
    <section className="faq-mainContainer">
      <div className="accordion">
        <div className="image-box">
          <Image
            src="/faq.png"
            width={300}
            height={360}
            alt="FAQ illustration"
            style={{ objectFit: "contain", width: "100%", height: "100%" }}
          />
        </div>

        <div className="accordion-text">
          <span className="title">FAQ</span>
          <FAQAccordion items={faqItems} />
        </div>
      </div>
    </section>
  );
}
