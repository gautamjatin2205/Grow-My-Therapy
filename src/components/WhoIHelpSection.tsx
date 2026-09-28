"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface WhoIHelpSectionProps {
  onOpenBooking: () => void;
}

export default function WhoIHelpSection({ onOpenBooking }: WhoIHelpSectionProps) {
  const cards = [
    {
      title: "Anxiety, Panic & Chronic Worry",
      subtitle: "For High-Achieving Adults",
      image: "/images/service-anxiety.jpg",
      description:
        "You appear functional and capable on the outside, but internally feel exhausted by constant worry, body tension, difficulty sleeping, or a persistent feeling that something will go wrong.",
      features: ["Cognitive Behavioral Therapy (CBT)", "Mindfulness & Body Grounding", "Panic & Stress Relief"],
    },
    {
      title: "Trauma & EMDR Recovery",
      subtitle: "Single-Incident & Complex Trauma",
      image: "/images/service-trauma.jpg",
      description:
        "Addressing single-event trauma or complex relational patterns from childhood or chronic stress. Paced with care to build nervous system regulation, safety, and lasting emotional stabilization.",
      features: ["Certified EMDR Therapy", "Trauma Stabilization", "Restoring Internal Safety"],
    },
    {
      title: "Burnout & Perfectionism",
      subtitle: "Professionals & Creatives",
      image: "/images/office-detail.jpg",
      description:
        "For entrepreneurs, executives, and creatives running on empty after years of high internal pressure. Therapy provides a dedicated space to slow down, reconnect, and thrive sustainably.",
      features: ["Stress & Energy Management", "Unpacking High Internal Pressure", "Work-Life Integration"],
    },
  ];

  return (
    <section id="who-i-help" className="py-24 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C47455]">
            Client Focus & Population
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A34]">
            Who I Help
          </h2>
          <p className="text-base sm:text-lg text-[#5C6863]">
            Therapy tailored for thoughtful, high-functioning adults who are ready to transition from internal overwhelm to deep resilience.
          </p>
        </div>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden border border-[#E5DEC3] shadow-sm accent-card flex flex-col justify-between"
            >
              <div>
                {/* Image header */}
                <div className="relative h-60 w-full overflow-hidden bg-[#EBF2EE]">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A34]">
                    {card.subtitle}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 space-y-4">
                  <h3 className="font-serif text-2xl font-bold text-[#1E3A34] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#5C6863] leading-relaxed">
                    {card.description}
                  </p>

                  <ul className="pt-2 space-y-2 border-t border-[#E5DEC3]/60">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="text-xs text-[#1E3A34] font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C47455]"></span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Link Footer */}
              <div className="p-6 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 bg-[#EBF2EE] hover:bg-[#1E3A34] hover:text-white text-[#1E3A34] font-semibold text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Schedule Consultation</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
