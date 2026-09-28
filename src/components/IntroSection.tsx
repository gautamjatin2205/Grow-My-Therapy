"use client";

import { Heart, Sun, Feather, CheckCircle } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-20 bg-white border-y border-[#E5DEC3]/60 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Subtle Icon Header */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#EBF2EE] text-[#1E3A34] mx-auto shadow-sm">
          <Feather className="w-6 h-6 text-[#C47455]" />
        </div>

        {/* H2 Heading - Core Empathy Statement */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A34] max-w-4xl mx-auto leading-tight">
          You’re holding onto hope that life can feel calmer, lighter, and more grounded than it is right now.
        </h2>

        {/* Paragraph Narrative */}
        <div className="space-y-5 text-base sm:text-lg text-[#5C6863] leading-relaxed max-w-3xl mx-auto font-normal">
          <p>
            At Dr. Maya Reynolds Psychology Practice in Santa Monica, my mission is to help turn that hope into sustainable reality. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
          </p>
          <p className="font-medium text-[#1E3A34]">
            First and foremost, I believe what you’re going through is real, valid, and worthy of compassionate, specialized support.
          </p>
        </div>

        {/* 3 Grounding Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 text-left">
          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E5DEC3] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A34]/10 flex items-center justify-center text-[#1E3A34]">
              <Heart className="w-5 h-5 text-[#C47455]" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E3A34]">Warm & Collaborative</h3>
            <p className="text-sm text-[#5C6863] leading-relaxed">
              Sessions are structured enough to feel supportive and goal-directed, while preserving space for reflection and depth.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E5DEC3] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A34]/10 flex items-center justify-center text-[#1E3A34]">
              <Sun className="w-5 h-5 text-[#C47455]" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E3A34]">Evidence-Based Methods</h3>
            <p className="text-sm text-[#5C6863] leading-relaxed">
              Integrating Cognitive Behavioral Therapy (CBT), EMDR, somatic regulation, and mindfulness to treat mind and body.
            </p>
          </div>

          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#E5DEC3] space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#1E3A34]/10 flex items-center justify-center text-[#1E3A34]">
              <CheckCircle className="w-5 h-5 text-[#C47455]" />
            </div>
            <h3 className="font-serif font-bold text-xl text-[#1E3A34]">Paced for Safety</h3>
            <p className="text-sm text-[#5C6863] leading-relaxed">
              Trauma work is carefully structured with a strong focus on stabilization, emotional regulation, and safety in daily life.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
