
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
      question: "Is HiveIn just another relationship chat app?",
      answer: "Not really. HiveIn isn't just for talking — it's for growing together. We blend chat with shared habits, moods, nudges, and daily rituals that actually bring you closer."
    },
    {
      question: "Do both partners need to download the app?",
      answer: "Yes — that's what makes it special. HiveIn is designed for couples to use together. It's like a synced space for habits, emotions, and little moments that matter."
    },
    {
      question: "Is HiveIn for long-distance couples or couples living together?",
      answer: "Both! Long-distance couples use HiveIn to feel close despite the miles. Live-in couples use it to bring intention back into everyday life. It adapts to your relationship."
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
