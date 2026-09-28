"use client";

import React, { useState } from "react";
import { MapPin, Sun, Shield, Coffee, Check, Clock, Sparkles } from "lucide-react";

export default function OurOffice() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const officeImages = [
    {
      url: "/images/office-main.jpg",
      title: "Consultation Seating Area",
      caption: "Cozy beige armchairs, warm linen textures, and natural sunlight designed for maximum comfort.",
    },
    {
      url: "/images/office-waiting.jpg",
      title: "Private Therapy Nook",
      caption: "A quiet, sound-insulated environment providing total confidentiality and peace of mind.",
    },
    {
      url: "/images/office-detail.jpg",
      title: "Welcome Lounge & Entryway",
      caption: "Uncluttered, calming decor with organic greenery to help ease tension the moment you step inside.",
    },
  ];

  return (
    <section id="office" className="py-24 md:py-32 bg-[#EBF2EE] text-[#1E3A34] relative overflow-hidden border-b border-[#E5DEC3]/80">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/40 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/80 border border-[#2C4D44]/20 px-4 py-1.5 rounded-full text-xs font-semibold text-[#1E3A34] shadow-sm">
            <Sparkles className="w-4 h-4 text-[#C47455]" />
            <span className="uppercase tracking-widest text-[11px]">Part 3 Custom Section • Physical Practice Space</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E3A34] leading-tight">
            Our Office: <span className="italic font-medium text-[#C47455]">A Calm Space for Healing</span>
          </h2>
          
          <p className="text-base sm:text-lg text-[#5C6863] font-sans leading-relaxed">
            Located in the heart of Santa Monica, California, our office is intentionally designed to feel private, quiet, and deeply grounding—a safe sanctuary where you can catch your breath.
          </p>
        </div>

        {/* Layout Grid: Gallery Showcase & Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Gallery Showcase Column */}
          <div className="lg:col-span-7 space-y-4">
            {/* Active Large Display Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src={officeImages[activeImageIndex].url}
                alt={officeImages[activeImageIndex].title}
                className="w-full h-[420px] sm:h-[480px] object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20">
                <h3 className="font-serif text-xl font-semibold">{officeImages[activeImageIndex].title}</h3>
                <p className="text-xs text-white/90 mt-1 font-sans">{officeImages[activeImageIndex].caption}</p>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-3 gap-4">
              {officeImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`relative rounded-2xl overflow-hidden border-2 transition-all h-24 ${
                    activeImageIndex === index
                      ? "border-[#C47455] ring-2 ring-[#C47455]/30 shadow-md scale-[1.02]"
                      : "border-white opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={img.url} alt={img.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/20"></div>
                </button>
              ))}
            </div>
          </div>

          {/* Details & Copy Column */}
          <div className="lg:col-span-5 space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#E5DEC3] shadow-lg">
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#EBF2EE] text-[#1E3A34] flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-[#C47455]" />
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-[#1E3A34]">Santa Monica Practice</h3>
                <p className="text-xs font-semibold text-[#C47455] uppercase tracking-wider">
                  In-Person & Hybrid Telehealth
                </p>
              </div>
            </div>

            <p className="text-sm text-[#5C6863] leading-relaxed">
              Clients often share that the space itself helps them feel at ease the moment they arrive. Featuring soft natural light, plush neutral furnishings, and an uncluttered atmosphere, every detail has been chosen to foster relaxation and emotional regulation.
            </p>

            {/* Practice Features List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#1E3A34] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#EBF2EE] flex items-center justify-center shrink-0">
                  <Sun className="w-3.5 h-3.5 text-[#C47455]" />
                </div>
                <span>Abundant natural light & calming coastal breeze</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#1E3A34] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#EBF2EE] flex items-center justify-center shrink-0">
                  <Shield className="w-3.5 h-3.5 text-[#C47455]" />
                </div>
                <span>Private, acoustic-insulated suite for maximum privacy</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-[#1E3A34] font-medium">
                <div className="w-6 h-6 rounded-full bg-[#EBF2EE] flex items-center justify-center shrink-0">
                  <Coffee className="w-3.5 h-3.5 text-[#C47455]" />
                </div>
                <span>Comfortable waiting nook with tea & calming ambient music</span>
              </div>
            </div>

            {/* Location & Address Box */}
            <div className="p-4 bg-[#FAF7F2] rounded-2xl border border-[#E5DEC3] text-xs text-[#232B28] space-y-1.5">
              <p className="font-semibold text-[#1E3A34] text-sm flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C47455]" />
                Physical Address:
              </p>
              <p className="pl-6 font-medium">123th Street 45 W, Santa Monica, CA 90401</p>
              <p className="pl-6 text-[#5C6863]">Conveniently accessible with ample street & garage parking.</p>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#1E3A34] hover:bg-[#C47455] text-[#FAF7F2] font-semibold text-sm py-3.5 px-6 rounded-full transition-colors shadow-md"
              >
                <span>Schedule In-Person Visit</span>
                <Clock className="w-4 h-4 text-[#FAF7F2]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
