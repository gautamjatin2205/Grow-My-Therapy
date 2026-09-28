"use client";

import { Sparkles } from "lucide-react";

export default function ExpertisePills() {
  const specialties = [
    "Anxiety & Panic Relief",
    "EMDR Trauma Therapy",
    "Complex & Relational Trauma",
    "Professional Burnout",
    "Perfectionism & Overthinking",
    "High Internal Pressure",
    "Cognitive Behavioral Therapy (CBT)",
    "Mindfulness & Somatic Tools",
    "Nervous System Regulation",
    "Single-Incident Trauma",
    "Santa Monica In-Person Therapy",
    "California Telehealth Sessions",
  ];

  return (
    <section id="specialties" className="py-20 bg-white border-b border-[#E5DEC3]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        <div className="space-y-3 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C47455]">
            Comprehensive Clinical Practice
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#1E3A34]">
            My Areas of Expertise
          </h3>
          <p className="text-sm sm:text-base text-[#5C6863]">
            Targeted evidence-based care addressing the emotional and physiological impacts of stress, anxiety, and past experiences.
          </p>
        </div>

        {/* Pill badges */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-4xl mx-auto">
          {specialties.map((item, idx) => (
            <div
              key={idx}
              className="px-5 py-3 rounded-full bg-[#FAF7F2] border border-[#E5DEC3] text-sm font-medium text-[#1E3A34] shadow-sm hover:border-[#C47455] hover:bg-[#EBF2EE] hover:text-[#1E3A34] transition-all cursor-default flex items-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C47455]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
