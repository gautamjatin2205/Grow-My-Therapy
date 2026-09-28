"use client";

import React from "react";
import { Quote } from "lucide-react";

export default function QuoteBanner() {
  return (
    <section className="py-20 md:py-28 bg-[#1E3A34] text-[#FAF7F2] relative overflow-hidden">
      {/* Decorative background accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#2C4D44] rounded-full filter blur-3xl opacity-30 pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10 space-y-6">
        <Quote className="w-12 h-12 text-[#C47455] mx-auto opacity-90" />
        
        <blockquote className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight tracking-tight text-[#FAF7F2]">
          “You deserve a place where your story is heard, valued, and understood. <span className="italic text-[#C47455]">Nothing will be too heavy for us to carry together.”</span>
        </blockquote>

        <p className="text-sm uppercase tracking-widest text-[#FAF7F2]/70 font-sans font-medium pt-4">
          — Dr. Maya Reynolds, PsyD
        </p>
      </div>
    </section>
  );
}
