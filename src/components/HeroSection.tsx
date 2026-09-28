"use client";

import Image from "next/image";
import { ArrowRight, Calendar, ShieldCheck, MapPin, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  return (
    <section id="home" className="relative hero-gradient pt-12 pb-20 lg:pt-16 lg:pb-28 overflow-hidden">
      {/* Delicate background decorative elements */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-[#1E3A34]/5 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#C47455]/5 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EBF2EE] border border-[#1E3A34]/15 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#1E3A34]">
              <Sparkles className="w-4 h-4 text-[#C47455]" />
              <span className="uppercase tracking-wider">
                ONLINE & IN-PERSON COUNSELING IN SANTA MONICA & ACROSS CA
              </span>
            </div>

            {/* H1 Heading - SEO Optimized */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1E3A34] leading-[1.15] tracking-tight">
              Rebuild your foundation on solid ground and <span className="italic text-[#C47455] font-normal">finally begin to thrive</span>.
            </h1>

            {/* Subheading / Paragraph */}
            <p className="text-base sm:text-lg text-[#5C6863] leading-relaxed max-w-2xl font-normal">
              Specialized clinical psychology for adults, professionals, and high-achievers who feel functional on the outside while quietly struggling with constant worry, trauma, perfectionism, or emotional exhaustion.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#1E3A34] hover:bg-[#C47455] text-white text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group"
              >
                <Calendar className="w-5 h-5 text-[#EBF2EE]" />
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#who-i-help"
                className="px-8 py-4 bg-white/80 hover:bg-white text-[#1E3A34] border border-[#E5DEC3] text-base font-medium rounded-full transition-colors text-center shadow-sm"
              >
                Who I Help
              </a>
            </div>

            {/* Trust Micro Features */}
            <div className="pt-6 border-t border-[#E5DEC3]/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-medium text-[#232B28]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C47455]" />
                <span>Licensed Psychologist</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C47455]" />
                <span>Santa Monica Practice</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <Sparkles className="w-4 h-4 text-[#C47455]" />
                <span>EMDR & CBT Specialist</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Stack */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame border */}
              <div className="absolute -inset-3 rounded-3xl bg-[#1E3A34]/10 transform rotate-2"></div>
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative h-[440px] sm:h-[500px] w-full">
                  <Image
                    src="/images/maya-portrait.jpg"
                    alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                    className="object-cover object-top"
                  />
                </div>

                {/* Floating Bio Card Overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-[#E5DEC3] shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-[#1E3A34] text-base">Dr. Maya Reynolds, PsyD</h3>
                    <p className="text-xs text-[#5C6863]">Clinical Psychologist • Santa Monica, CA</p>
                  </div>
                  <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" title="Accepting New Clients"></span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
