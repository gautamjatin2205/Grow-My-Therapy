"use client";

import React from "react";
import { Heart, Sparkles, Quote } from "lucide-react";

export default function StatementBanner() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2] border-b border-[#E5DEC3]/60 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Decorative Quote Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EBF2EE] text-[#1E3A34] shadow-sm mb-2">
          <Heart className="w-6 h-6 text-[#C47455]" />
        </div>

        {/* Primary Statement Subhead */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1E3A34] leading-relaxed font-normal">
          You’re holding onto hope that life can feel calmer, lighter, and more grounded than it does right now.
        </h2>

        <p className="text-lg text-[#C47455] font-serif italic font-medium">
          In my Santa Monica practice, we work together to turn that hope into lasting reality.
        </p>

        {/* Detailed Copy based on Maya's Profile */}
        <div className="pt-4 text-base sm:text-lg text-[#5C6863] leading-relaxed space-y-4 font-sans max-w-3xl mx-auto">
          <p>
            Whether you’re a high-achiever functional on the outside while quietly struggling with constant worry, an adult navigating the lingering impact of past experiences, or someone feeling disconnected after years of internal pressure—you deserve a space to slow down and catch your breath.
          </p>
          <p>
            First and foremost, I believe what you’re going through is <strong className="text-[#1E3A34] font-semibold">real, valid, and worthy of deep support</strong>. My goal is to offer clients in Santa Monica and across California an environment to discover insight, emotional regulation, and a stronger relationship with themselves.
          </p>
        </div>

        {/* Divider accent */}
        <div className="pt-6 flex items-center justify-center gap-2 text-[#C47455]">
          <span className="w-12 h-[1px] bg-[#E5DEC3]"></span>
          <Sparkles className="w-4 h-4 text-[#C47455]" />
          <span className="w-12 h-[1px] bg-[#E5DEC3]"></span>
        </div>

      </div>
    </section>
  );
}
