"use client";

import Image from "next/image";
import { Check, Calendar, Compass, Shield, Activity } from "lucide-react";

interface HowIWorkSectionProps {
  onOpenBooking: () => void;
}

export default function HowIWorkSection({ onOpenBooking }: HowIWorkSectionProps) {
  return (
    <section id="approach" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <div className="relative h-[480px] w-full">
                <Image
                  src="/images/office-main.jpg"
                  alt="Therapeutic environment in Dr. Maya Reynolds Santa Monica office"
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                />
              </div>
              {/* Overlay quote */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#1E3A34]/90 backdrop-blur-md text-white p-5 rounded-xl border border-white/20">
                <p className="font-serif italic text-sm sm:text-base leading-relaxed">
                  "Paced carefully with an emphasis on safety, stabilization, and helping you feel more regulated in daily life."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C47455]">
              HOW THERAPY WORKS
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A34] leading-tight">
              A warm, collaborative approach tailored to your pace.
            </h2>

            <p className="text-base sm:text-lg text-[#5C6863] leading-relaxed">
              I take a grounded, compassionate approach to therapy. Sessions are structured enough to feel supportive and focused, while preserving ample room for reflection, depth, and self-discovery.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E5DEC3] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF2EE] flex items-center justify-center text-[#1E3A34] flex-shrink-0 mt-0.5">
                  <Compass className="w-5 h-5 text-[#C47455]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1E3A34]">Integrative & Evidence-Based</h3>
                  <p className="text-sm text-[#5C6863] mt-1 leading-relaxed">
                    Combining Cognitive Behavioral Therapy (CBT), EMDR, mindfulness, and somatic tools to address both emotional thoughts and physical nervous system responses.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E5DEC3] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF2EE] flex items-center justify-center text-[#1E3A34] flex-shrink-0 mt-0.5">
                  <Shield className="w-5 h-5 text-[#C47455]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1E3A34]">Safety & Stabilization First</h3>
                  <p className="text-sm text-[#5C6863] mt-1 leading-relaxed">
                    Trauma reprocessing is never rushed. We prioritize grounding and stabilization so you feel calm and capable in your daily life, not just during therapy sessions.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-[#E5DEC3] shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-[#EBF2EE] flex items-center justify-center text-[#1E3A34] flex-shrink-0 mt-0.5">
                  <Activity className="w-5 h-5 text-[#C47455]" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#1E3A34]">Practical Insight & Relief</h3>
                  <p className="text-sm text-[#5C6863] mt-1 leading-relaxed">
                    My goal is not only short-term symptom relief, but helping you build deep self-understanding, resilience, and a healthier relationship with yourself.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 bg-[#1E3A34] hover:bg-[#C47455] text-white font-semibold rounded-full transition-all duration-300 shadow-md flex items-center gap-2"
              >
                <Calendar className="w-5 h-5 text-[#EBF2EE]" />
                <span>Book Your Initial Session</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
