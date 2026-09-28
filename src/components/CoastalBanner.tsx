"use client";

import Image from "next/image";

export default function CoastalBanner() {
  return (
    <section className="relative h-[360px] sm:h-[420px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/images/service-trauma.jpg"
        alt="Santa Monica coastal shoreline sunset background"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Warm Overlay */}
      <div className="absolute inset-0 bg-[#1E3A34]/55 backdrop-blur-[2px]"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight drop-shadow-md">
          Honoring where you’ve been & helping shape where you’re headed.
        </h2>
        <div className="w-16 h-0.5 bg-[#C47455] mx-auto rounded-full"></div>
        <p className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#FAF7F2]/90">
          In-Person Counseling in Santa Monica, CA • Telehealth Statewide
        </p>
      </div>
    </section>
  );
}
