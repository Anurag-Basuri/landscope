"use client";

import { useState } from "react";
import { FAQItem } from "@/data/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="faq-text">
      {items.map((item, i) => (
        <li
          key={i}
          className={openIndex === i ? "showAnswer" : ""}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div className="question-arrow">
            <span className="question">{item.question}</span>
            <span className="arrow">▼</span>
          </div>
          <p>{item.answer}</p>
          <span className="line"></span>
        </li>
      ))}
    </ul>
  );
}
