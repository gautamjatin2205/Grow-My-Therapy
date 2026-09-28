"use client";

import { Brain, Sparkles, Flame, ShieldAlert, ArrowRight } from "lucide-react";

interface SpecialtiesSectionProps {
  onOpenBooking: () => void;
}

export default function SpecialtiesSection({ onOpenBooking }: SpecialtiesSectionProps) {
  const specialties = [
    {
      icon: Brain,
      title: "Anxiety & Panic Relief",
      description:
        "Overcome chronic worry, racing thoughts, insomnia, and physical panic symptoms using Cognitive Behavioral Therapy (CBT) and body-oriented grounding techniques.",
    },
    {
      icon: Sparkles,
      title: "EMDR Trauma Therapy",
      description:
        "Eye Movement Desensitization and Reprocessing (EMDR) is a proven technique that helps the brain reprocess traumatic or distressing memories so they no longer cause intense reactivity.",
    },
    {
      icon: Flame,
      title: "Burnout & Perfectionism",
      description:
        "Designed for entrepreneurs, creatives, and professionals trapped in high internal pressure. Slow down, dismantle perfectionism, and cultivate sustainable ways of living and working.",
    },
    {
      icon: ShieldAlert,
      title: "Somatic & Nervous System Care",
      description:
        "Integrates body-oriented practices to help you recognize physiological stress signals, release stored muscular tension, and maintain nervous system regulation in high-demand environments.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#E5DEC3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C47455]">
            Targeted Clinical Care
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A34]">
            Our specialties include...
          </h3>
          <p className="text-base sm:text-lg text-[#5C6863]">
            Comprehensive evidence-based therapeutic modalities tailored to your individual needs and goals.
          </p>
        </div>

        {/* 4 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialties.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] p-8 rounded-2xl border border-[#E5DEC3] shadow-sm accent-card flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1E3A34] text-white flex items-center justify-center shadow-sm">
                    <Icon className="w-6 h-6 text-[#C47455]" />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#1E3A34]">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#5C6863] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={onOpenBooking}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E3A34] hover:text-[#C47455] transition-colors group"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
