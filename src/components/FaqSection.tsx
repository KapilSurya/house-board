
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection: React.FC = () => {
  const faqs = [
    {
      question: "What makes HiveIn different from other couple apps?",
      answer: "HiveIn doesn't just help you chat. It helps you grow together with shared habits, mood tracking, and emotional nudges—all in one cozy space."
    },
    {
      question: "Is HiveIn good for long-distance couples?",
      answer: "Yes! HiveIn helps couples feel emotionally close even when they're physically apart. Track habits, nudge your partner, and share check-ins with ease."
    },
    {
      question: "Can we personalize the app experience?",
      answer: "Absolutely. Your mood affects your 2D home interface, and every habit journey feels personal to you as a couple."
    }
  ];

  return (
    <section className="py-16 bg-gray-50/5 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
          Questions You Might Have
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-800/30 rounded-lg p-2">
                <AccordionTrigger className="text-lg md:text-xl font-medium text-white px-4 hover:no-underline hover:text-[#43B3AE]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base md:text-lg text-gray-300 px-4 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
