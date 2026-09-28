"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ExpertiseTags() {
  const tags = [
    "Anxiety & Panic Attacks",
    "Complex & Relational Trauma",
    "EMDR Processing",
    "High-Achiever Burnout",
    "Perfectionism & Internal Pressure",
    "Chronic Stress & Tension",
    "Body-Oriented Somatic Tools",
    "Cognitive Behavioral Therapy (CBT)",
    "Mindfulness-Based Stabilization",
    "Overthinking & Sleep Issues",
    "Single-Incident Trauma",
    "In-Person Santa Monica Practice",
    "California Telehealth Sessions",
    "...and more",
  ];

  return (
    <section className="py-16 bg-[#FAF7F2] border-b border-[#E5DEC3]/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1E3A34] mb-8">
          Our areas of <span className="italic font-medium text-[#C47455]">expertise</span>
        </h3>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {tags.map((tag, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 bg-white border border-[#E5DEC3] text-[#232B28] px-4 py-2.5 rounded-full text-sm font-medium shadow-sm hover:border-[#C47455] hover:text-[#1E3A34] transition-all cursor-default"
            >
              <CheckCircle2 className="w-4 h-4 text-[#C47455]" />
              <span>{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
