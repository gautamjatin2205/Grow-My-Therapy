"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What specialties and modalities does Dr. Maya Reynolds offer?",
      answer:
        "Dr. Maya Reynolds specializes in anxiety, panic attacks, complex trauma, and high-achiever burnout. She integrates evidence-based Cognitive Behavioral Therapy (CBT), EMDR (Eye Movement Desensitization and Reprocessing), mindfulness-based practices, and body-oriented somatic techniques to address both emotional and physiological symptoms.",
    },
    {
      question: "Do you offer in-person sessions or telehealth across California?",
      answer:
        "Both! In-person therapy is provided at Dr. Reynolds' private, quiet Santa Monica office (123th Street 45 W, Santa Monica, CA 90401). Secure, HIPAA-compliant telehealth sessions are also available for clients located anywhere in the state of California.",
    },
    {
      question: "What is your approach to trauma and EMDR therapy?",
      answer:
        "Trauma work is paced carefully with an emphasis on safety, grounding, and stabilization first. EMDR therapy helps process single-incident trauma as well as complex childhood/relational patterns by reworking how painful memories are stored in the brain—allowing you to feel regulated in daily life.",
    },
    {
      question: "What can I expect during our initial consultation?",
      answer:
        "Sessions are warm, collaborative, and structured enough to feel supportive while leaving space for reflection. In the initial session, we explore what brings you to therapy, your current challenges, and your goals to ensure we are a good fit.",
    },
    {
      question: "I feel functional on the outside. Is therapy still right for me?",
      answer:
        "Yes, absolutely. Many of Dr. Reynolds' clients are entrepreneurs, creatives, and high-achieving professionals who look capable on the outside but internally feel exhausted, anxious, or stuck in overthinking. Therapy is a dedicated space to slow down and create sustainable living.",
    },
    {
      question: "How do fees and insurance reimbursement work?",
      answer:
        "Dr. Reynolds is an out-of-network provider. Monthly superbills are provided upon request so you can seek reimbursement directly through your PPO health insurance provider. Complimentary 15-minute consultations are provided prior to booking.",
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E5DEC3]/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 bg-[#EBF2EE] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A34]">
            <HelpCircle className="w-4 h-4 text-[#C47455]" />
            <span className="uppercase tracking-widest">Common Questions</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E3A34]">
            Frequently Asked <span className="italic font-medium text-[#C47455]">Questions</span>
          </h2>
          
          <p className="text-base text-[#5C6863] font-sans">
            Here are answers to some of the questions clients frequently ask about working with Dr. Maya Reynolds.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-[#E5DEC3] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none group"
                >
                  <span className="font-serif text-xl font-semibold text-[#1E3A34] group-hover:text-[#C47455] transition-colors">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? "bg-[#C47455] text-white rotate-180" : "bg-[#EBF2EE] text-[#1E3A34]"
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-base text-[#5C6863] leading-relaxed font-sans border-t border-[#FAF7F2] pt-4 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
