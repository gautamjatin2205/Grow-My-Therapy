"use client";

import Image from "next/image";
import { MapPin, Sun, Shield, Lock, Coffee, CheckCircle2 } from "lucide-react";

export default function OurOfficeSection() {
  const officeFeatures = [
    {
      icon: MapPin,
      title: "Prime Santa Monica Location",
      desc: "Conveniently situated at 123th Street 45 W in Santa Monica, CA with easy access and discreet private parking.",
    },
    {
      icon: Sun,
      title: "Abundant Natural Sunlight",
      desc: "Designed with oversized windows, soft organic textures, potted greenery, and an uncluttered minimal layout.",
    },
    {
      icon: Shield,
      title: "Private & Confidential Sanctuary",
      desc: "A quiet, soundproof environment ensuring complete privacy, safety, and peace of mind during every session.",
    },
    {
      icon: Lock,
      title: "In-Person & Telehealth Access",
      desc: "Choose warm in-office visits in Santa Monica or secure HIPAA-compliant telehealth sessions anywhere in California.",
    },
  ];

  return (
    <section id="our-office" className="py-24 bg-[#FAF7F2] relative border-b border-[#E5DEC3]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EBF2EE] border border-[#1E3A34]/15 rounded-full text-xs font-bold uppercase tracking-wider text-[#1E3A34]">
            <MapPin className="w-3.5 h-3.5 text-[#C47455]" />
            <span>Santa Monica Practice Space</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E3A34]">
            Our Office: A Calm Space for Healing
          </h2>
          <p className="text-base sm:text-lg text-[#5C6863] leading-relaxed">
            I offer a quiet, private sanctuary in Santa Monica intentionally created to feel grounding, comfortable, and uncluttered. Clients frequently share that the space itself helps them feel at ease the moment they arrive.
          </p>
        </div>

        {/* 3 Image Gallery Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-16">
          
          {/* Main Large Office Image */}
          <div className="md:col-span-7 relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-[360px] md:h-[460px] group">
            <Image
              src="/images/office-main.jpg"
              alt="Main therapy room in Dr. Maya Reynolds Santa Monica counseling practice"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-xs font-semibold text-[#1E3A34] shadow-md">
              🛋️ Counseling Room • Warm Linen Seating & Soft Natural Light
            </div>
          </div>

          {/* Side Stack of 2 Gallery Images */}
          <div className="md:col-span-5 grid grid-cols-1 gap-6">
            
            <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white h-[210px] group">
              <Image
                src="/images/office-waiting.jpg"
                alt="Quiet waiting room and lounge area at Santa Monica office"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1E3A34]">
                🌿 Reception Lounge • Tranquil & Peaceful Arrival
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white h-[210px] group">
              <Image
                src="/images/office-detail.jpg"
                alt="Cozy armchair corner with throw blanket and warm tea in Santa Monica counseling office"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1E3A34]">
                ☕ Comfort Details • Warm Tea & Cozy Corner
              </div>
            </div>

          </div>

        </div>

        {/* Supporting Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {officeFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-[#E5DEC3] shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#EBF2EE] text-[#1E3A34] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#C47455]" />
                </div>
                <h3 className="font-serif font-bold text-lg text-[#1E3A34]">
                  {feat.title}
                </h3>
                <p className="text-xs text-[#5C6863] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Address & Availability Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1E3A34] text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C47455] text-white flex items-center justify-center flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-xl text-[#FAF7F2]">Visit In-Person in Santa Monica</h4>
              <p className="text-xs sm:text-sm text-[#EBF2EE]/90">
                123th Street 45 W, Santa Monica, CA 90401 • Serving Santa Monica, West LA, Venice & Palisades
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider bg-white/10 px-4 py-2.5 rounded-full border border-white/20 whitespace-nowrap">
            <CheckCircle2 className="w-4 h-4 text-[#C47455]" />
            <span>Hybrid & Telehealth Available</span>
          </div>
        </div>

      </div>
    </section>
  );
}
