import { useState } from "react";
import FAQItem from "./FAQItem";
import type { FAQType } from "../types/FAQs";

interface FAQSectionProps {
  FrequentlyAskedQuestions: FAQType[];
}

const FAQSection = ({ FrequentlyAskedQuestions }: FAQSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white p-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-2">
        {FrequentlyAskedQuestions.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
