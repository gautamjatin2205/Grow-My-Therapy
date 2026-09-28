"use client";

import React from "react";
import Image from "next/image";
import { Calendar, ShieldCheck, MapPin, ArrowRight, Sparkles, HeartHandshake } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-[#FAF7F2] via-[#F4EFE6] to-[#FAF7F2] pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden border-b border-[#E5DEC3]/60">
      {/* Soft background ambient blur circles */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#EBF2EE] rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#F2ECE1] rounded-full filter blur-3xl opacity-60 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Location & Practice Tagline Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#EBF2EE] border border-[#2C4D44]/15 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-[#1E3A34]">
              <MapPin className="w-4 h-4 text-[#C47455]" />
              <span className="tracking-wide uppercase text-[11px] font-semibold text-[#1E3A34]">
                Santa Monica, CA & Telehealth Across California
              </span>
            </div>

            {/* Main H1 Headline - SEO Optimized */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-[#1E3A34] tracking-tight leading-[1.15]">
              Rebuild your foundation on solid ground and <span className="italic font-medium text-[#C47455]">finally begin to thrive.</span>
            </h1>

            {/* Subheading / Supporting Paragraph */}
            <p className="text-lg sm:text-xl text-[#5C6863] leading-relaxed max-w-2xl font-sans font-normal">
              Specialized clinical therapy for adults navigating anxiety, panic, complex trauma, and high-achiever burnout. Grounded in evidence-based care (CBT, EMDR, Somatic tools) in a serene Santa Monica setting.
            </p>

            {/* Key Trust Signals */}
            <div className="pt-2 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-[#232B28] font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C47455]" />
                <span>Licensed Clinical Psychologist (PsyD)</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-[#C47455]" />
                <span>In-Person & Telehealth Available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-3 bg-[#1E3A34] hover:bg-[#C47455] text-[#FAF7F2] font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <Calendar className="w-5 h-5 text-[#FAF7F2]" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 text-[#FAF7F2] group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#office"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FAF7F2] text-[#1E3A34] border border-[#2C4D44]/30 font-medium text-base px-7 py-4 rounded-full shadow-sm hover:shadow transition-all duration-200"
              >
                <Sparkles className="w-4 h-4 text-[#C47455]" />
                <span>Explore Santa Monica Office</span>
              </a>
            </div>

            {/* Reassurance Note */}
            <p className="text-xs text-[#5C6863] pt-1">
              *Confidential 15-minute introductory phone consultations are complimentary.
            </p>
          </div>

          {/* Right Column: Imagery Stack */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Main Portrait Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/images/maya-portrait.jpg"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, CA"
                  className="w-full h-[460px] object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#E5DEC3] shadow-md flex items-center justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-[#1E3A34]">
                      Dr. Maya Reynolds, PsyD
                    </h3>
                    <p className="text-xs text-[#5C6863]">
                      Licensed Clinical Psychologist • Santa Monica, CA
                    </p>
                  </div>
                  <span className="w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></span>
                </div>
              </div>

              {/* Floating Office Preview Thumbnail */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-xl border border-[#E5DEC3] items-center gap-3 max-w-[220px]">
                  <img
                    src="/images/office-main.jpg"
                  alt="Santa Monica Therapy Office"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <p className="text-xs font-semibold text-[#1E3A34]">Private Practice</p>
                  <p className="text-[11px] text-[#5C6863]">Quiet, grounding space with natural light</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
