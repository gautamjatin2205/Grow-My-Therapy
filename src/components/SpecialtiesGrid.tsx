"use client";

import React from "react";
import { ArrowRight, Activity, Brain, Shield, HeartPulse } from "lucide-react";

export default function SpecialtiesGrid() {
  const specialties = [
    {
      title: "Anxiety & Panic Therapy",
      description:
        "Constant worry, racing thoughts, or panic attacks can leave you feeling perpetually on edge. We integrate CBT and mindfulness to calm your nervous system, restore restful sleep, and break the cycle of overthinking.",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      icon: Activity,
    },
    {
      title: "Trauma & EMDR Processing",
      description:
        "EMDR therapy helps process single-incident trauma and complex relational patterns by reworking how painful memories are stored in your brain, restoring a genuine sense of safety, control, and emotional release.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
      icon: Brain,
    },
    {
      title: "Burnout & Perfectionism",
      description:
        "High-achieving professionals, entrepreneurs, and creatives often feel functional outside while quietly exhausted inside. Therapy provides a dedicated space to slow down, dismantle internal pressure, and thrive sustainably.",
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
      icon: Shield,
    },
    {
      title: "Somatic & Body-Based Tools",
      description:
        "Stress and trauma live in the nervous system. We incorporate body-oriented somatic techniques to address physical tension, hypervigilance, and physiological bracing, helping you feel grounded inside and out.",
      image: "/images/office-detail.jpg",
      icon: HeartPulse,
    },
  ];

  return (
    <section id="specialties" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E5DEC3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-sans tracking-widest uppercase text-[#C47455] font-semibold">
            Core Areas of Practice
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E3A34] leading-tight">
            Honoring where you’ve been & <span className="italic font-medium text-[#C47455]">helping shape where you’re headed.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C6863] font-sans pt-2">
            Explore the core evidence-based specialties offered in our Santa Monica practice and via telehealth across California.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E5DEC3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group accent-card"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-[#1E3A34] shadow-sm">
                      <Icon className="w-5 h-5 text-[#C47455]" />
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <h3 className="font-serif text-2xl font-semibold text-[#1E3A34] group-hover:text-[#C47455] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#5C6863] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-[#1E3A34] group-hover:text-[#C47455] transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#C47455]" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
