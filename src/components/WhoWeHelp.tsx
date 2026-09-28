"use client";

import React from "react";
import { UserCheck, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

export default function WhoWeHelp() {
  const cards = [
    {
      title: "High-Achievers & Professionals",
      tagline: "Burnout, Perfectionism & Pressure",
      description:
        "Functional on the outside, but internally exhausted? I support entrepreneurs, creatives, and professionals who feel disconnected after years of high internal pressure, helping them cultivate balance and sustainable living.",
      icon: Sparkles,
      image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=600&auto=format&fit=crop",
      badge: "High-Performance Support",
    },
    {
      title: "Adults Navigating Trauma",
      tagline: "EMDR & Complex Trauma Stabilization",
      description:
        "Navigating earlier life experiences that affect your confidence or relationships? I help adults process single-incident trauma or long-standing childhood/relational patterns with carefully paced EMDR and somatic tools.",
      icon: ShieldAlert,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop",
      badge: "Trauma Informed",
    },
    {
      title: "Anxiety & Panic Relief",
      tagline: "Constant Worry, Tension & Overthinking",
      description:
        "Stuck bracing for something to go wrong? We address panic, sleep disruption, and physical tension using evidence-based CBT and mindfulness practices so you can feel grounded in your daily life.",
      icon: UserCheck,
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=600&auto=format&fit=crop",
      badge: "Anxiety Focus",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E5DEC3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching original layout */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-sans tracking-widest uppercase text-[#C47455] font-semibold">
            Client Focus & Specializations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E3A34]">
            Who I <span className="italic font-medium text-[#C47455]">help</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C6863] font-sans pt-2">
            My clinical practice is dedicated to thoughtful adults ready to break free from survival mode and step into emotional clarity.
          </p>
        </div>

        {/* 3-Column Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden border border-[#E5DEC3] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group accent-card"
              >
                {/* Image header with badge */}
                <div className="relative h-52 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-[#1E3A34] text-xs font-semibold px-3 py-1 rounded-full border border-[#E5DEC3]">
                    {card.badge}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#1E3A34] flex items-center justify-center mb-4 group-hover:bg-[#C47455] group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <h3 className="font-serif text-2xl font-semibold text-[#1E3A34] group-hover:text-[#C47455] transition-colors">
                      {card.title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-[#C47455] uppercase tracking-wider mt-1 mb-3">
                      {card.tagline}
                    </p>

                    <p className="text-sm text-[#5C6863] leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#FAF7F2]">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-[#1E3A34] group-hover:text-[#C47455] transition-colors"
                    >
                      <span>Explore Therapy Options</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
