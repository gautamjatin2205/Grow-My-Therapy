"use client";

import React from "react";
import { Sparkles, Shield, Heart, Compass, CheckCircle } from "lucide-react";

export default function HowWeWork() {
  return (
    <section id="how-we-work" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E5DEC3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-xl bg-white">
              <img
                src="/images/office-waiting.jpg"
                alt="Dr Maya Reynolds therapy office consultation nook"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A34]/70 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-[#FAF7F2] p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <p className="font-serif text-xl italic font-medium">
                  “Structured enough to feel supportive, while leaving space for deep reflection.”
                </p>
                <p className="text-xs uppercase tracking-wider text-[#FAF7F2]/80 mt-2 font-semibold">
                  — Therapeutic Philosophy
                </p>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-sans tracking-widest uppercase text-[#C47455] font-semibold">
              HOW WE WORK
            </span>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E3A34] leading-tight">
              A warm, collaborative, and <span className="italic font-medium text-[#C47455]">grounded approach to healing.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5C6863] leading-relaxed font-sans">
              <p>
                The people I work with are balancing so many responsibilities, high expectations, and internal pressure that putting themselves first can feel foreign. In our sessions, your well-being and pace are always the top priority.
              </p>
              <p>
                I take an intentional, personalized approach—you won’t find any “one-size-fits-all” templates here. We integrate evidence-based methods such as <strong className="text-[#1E3A34]">Cognitive Behavioral Therapy (CBT), EMDR, mindfulness practices, and body-oriented somatic techniques</strong> to address both the emotional and physiological sides of your experience.
              </p>
              <p>
                Trauma work is paced carefully, with an emphasis on safety, stabilization, and helping you feel regulated in your daily life—not just during our sessions. Therapy becomes a quiet space to slow down, reconnect, and develop practical tools for long-term resilience.
              </p>
            </div>

            {/* Feature Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#E5DEC3] shadow-sm">
                <Shield className="w-5 h-5 text-[#C47455] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E3A34]">Safety & Stabilization First</h4>
                  <p className="text-xs text-[#5C6863]">Paced carefully so you never feel overwhelmed.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white rounded-2xl border border-[#E5DEC3] shadow-sm">
                <Compass className="w-5 h-5 text-[#C47455] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E3A34]">Practical & Depth-Oriented</h4>
                  <p className="text-xs text-[#5C6863]">Combining concrete coping tools with root insight.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#about"
                className="inline-flex items-center gap-2 bg-[#1E3A34] hover:bg-[#C47455] text-[#FAF7F2] font-semibold text-sm px-6 py-3 rounded-full transition-colors shadow-sm"
              >
                <span>Learn More About Dr. Maya Reynolds</span>
                <Sparkles className="w-4 h-4 text-[#FAF7F2]" />
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
