"use client";

import React from "react";
import { Award, BookOpen, HeartHandshake, CheckCircle2, Shield, MapPin, Sparkles } from "lucide-react";

export default function AboutMaya() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FAF7F2] border-b border-[#E5DEC3]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Portrait & Credentials Box */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-2xl bg-white">
              <img
                src="/images/maya-portrait.jpg"
                alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
                className="w-full h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A34]/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                <h3 className="font-serif text-2xl font-semibold">Dr. Maya Reynolds, PsyD</h3>
                <p className="text-xs uppercase tracking-wider text-[#FAF7F2]/90 font-medium mt-1">
                  Licensed Clinical Psychologist • Santa Monica, CA
                </p>
                <div className="mt-3 pt-3 border-t border-white/20 text-xs text-white/80 flex items-center justify-between">
                  <span>PSY #38942 (CA)</span>
                  <span>In-Person & Telehealth</span>
                </div>
              </div>
            </div>

            {/* Accent Floating Badge */}
            <div className="hidden sm:flex absolute -top-4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-[#E5DEC3] items-center gap-3 max-w-[240px]">
              <div className="w-10 h-10 rounded-full bg-[#EBF2EE] text-[#1E3A34] flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-[#C47455]" />
              </div>
              <div>
                <p className="text-xs font-semibold text-[#1E3A34]">Doctor of Psychology</p>
                <p className="text-[11px] text-[#5C6863]">Specialized in EMDR & Anxiety</p>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#EBF2EE] px-3.5 py-1.5 rounded-full text-xs font-semibold text-[#1E3A34]">
              <Sparkles className="w-4 h-4 text-[#C47455]" />
              <span className="uppercase tracking-widest">About Dr. Maya Reynolds</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#1E3A34] leading-tight">
              A warm, collaborative space to <span className="italic font-medium text-[#C47455]">reconnect with yourself.</span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#5C6863] leading-relaxed font-sans">
              <p>
                I’m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.
              </p>
              <p>
                Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge. Sessions with me are structured enough to feel supportive, while still leaving space for reflection and depth.
              </p>
              <p>
                I integrate evidence-based methods such as <strong className="text-[#1E3A34]">Cognitive Behavioral Therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques</strong> to help clients understand both the emotional and physiological sides of what they’re experiencing.
              </p>
            </div>

            {/* Core Values / Approach Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#E5DEC3]">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C47455] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E3A34]">Carefully Paced Trauma Work</h4>
                  <p className="text-xs text-[#5C6863]">Focused on safety, stabilization, and daily regulation.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C47455] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E3A34]">High-Achiever Support</h4>
                  <p className="text-xs text-[#5C6863]">Helping professionals dismantle internal perfectionism.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C47455] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E3A34]">Santa Monica Office</h4>
                  <p className="text-xs text-[#5C6863]">Quiet, private, grounding space with natural light.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#C47455] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-sm text-[#1E3A34]">California Telehealth</h4>
                  <p className="text-xs text-[#5C6863]">Convenient, secure virtual sessions statewide.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
