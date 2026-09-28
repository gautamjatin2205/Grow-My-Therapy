"use client";

import Image from "next/image";
import { Award, BookOpen, Heart, Shield, CheckCircle2, Calendar } from "lucide-react";

interface AboutSectionProps {
  onOpenBooking: () => void;
}

export default function AboutSection({ onOpenBooking }: AboutSectionProps) {
  return (
    <section id="about" className="py-24 bg-white relative border-b border-[#E5DEC3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Portrait & Badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF7F2]">
              <div className="relative h-[480px] sm:h-[520px] w-full">
                <Image
                  src="/images/maya-portrait.jpg"
                  alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top"
                />
              </div>

              {/* Experience badge */}
              <div className="absolute top-4 left-4 bg-[#1E3A34] text-white p-3.5 rounded-xl shadow-lg border border-white/20">
                <p className="font-serif font-bold text-xl text-[#FAF7F2]">PsyD</p>
                <p className="text-[10px] uppercase tracking-wider text-[#EBF2EE]">Clinical Psychologist</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C47455]">
              ABOUT THE THERAPIST
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A34] leading-tight">
              Dr. Maya Reynolds, PsyD
            </h2>

            <p className="text-sm font-semibold uppercase tracking-wider text-[#5C6863]">
              Licensed Clinical Psychologist • Santa Monica, CA
            </p>

            <div className="space-y-4 text-base text-[#5C6863] leading-relaxed font-normal">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California, offering specialized therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
              <p>
                My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling "functional" on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they're always bracing for something to go wrong.
              </p>
              <p>
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they’re experiencing.
              </p>
              <p className="font-medium text-[#1E3A34]">
                I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.
              </p>
            </div>

            {/* Specialties & Modalities Checklist */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A34] bg-[#FAF7F2] p-3 rounded-xl border border-[#E5DEC3]">
                <CheckCircle2 className="w-4 h-4 text-[#C47455]" />
                <span>Cognitive Behavioral Therapy (CBT)</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A34] bg-[#FAF7F2] p-3 rounded-xl border border-[#E5DEC3]">
                <CheckCircle2 className="w-4 h-4 text-[#C47455]" />
                <span>Certified EMDR Therapy</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A34] bg-[#FAF7F2] p-3 rounded-xl border border-[#E5DEC3]">
                <CheckCircle2 className="w-4 h-4 text-[#C47455]" />
                <span>Body-Oriented Somatic Tools</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E3A34] bg-[#FAF7F2] p-3 rounded-xl border border-[#E5DEC3]">
                <CheckCircle2 className="w-4 h-4 text-[#C47455]" />
                <span>Mindfulness-Based Practices</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="px-7 py-3.5 bg-[#1E3A34] hover:bg-[#C47455] text-white font-semibold rounded-full transition-all duration-300 shadow-md flex items-center gap-2 text-sm"
              >
                <Calendar className="w-4 h-4 text-[#EBF2EE]" />
                <span>Connect with Dr. Maya</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
