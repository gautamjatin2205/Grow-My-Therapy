"use client";

import React, { useState } from "react";
import { Calendar, Phone, Mail, MapPin, CheckCircle, ArrowRight, ShieldCheck, HeartHandshake } from "lucide-react";

interface AppointmentCTAProps {
  onOpenBookingModal?: () => void;
}

export default function AppointmentCTA({ onOpenBookingModal }: AppointmentCTAProps) {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#FAF7F2] border-b border-[#E5DEC3]/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container Card */}
        <div className="bg-[#1E3A34] text-[#FAF7F2] rounded-3xl p-8 sm:p-14 md:p-16 shadow-2xl relative overflow-hidden">
          
          {/* Ambient background glow */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#2C4D44] rounded-full filter blur-3xl opacity-50 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-sans tracking-widest uppercase text-[#C47455] font-semibold">
                SCHEDULE AN APPOINTMENT
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-[#FAF7F2]">
                Find a therapist who is the <span className="italic font-medium text-[#C47455]">right fit for you.</span>
              </h2>

              <p className="text-base sm:text-lg text-[#FAF7F2]/80 font-sans leading-relaxed">
                Taking the first step toward therapy is a courageous decision. Connecting with a psychologist who truly understands the realities of high internal pressure, anxiety, and trauma makes all the difference.
              </p>

              <div className="p-4 bg-white/10 rounded-2xl border border-white/10 text-xs sm:text-sm text-[#FAF7F2]/90 space-y-2 font-sans">
                <p className="font-medium flex items-center gap-2">
                  <HeartHandshake className="w-4 h-4 text-[#C47455]" />
                  Getting started is simple:
                </p>
                <p className="text-xs text-[#FAF7F2]/80 leading-relaxed">
                  You are welcome to come into our Santa Monica office (123th Street 45 W) or schedule secure virtual appointments from anywhere in California.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenBookingModal}
                  className="inline-flex items-center justify-center gap-3 bg-[#C47455] hover:bg-[#AF6143] text-[#FAF7F2] font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Calendar className="w-5 h-5 text-[#FAF7F2]" />
                  <span>Book Free 15-Min Consultation</span>
                  <ArrowRight className="w-4 h-4 text-[#FAF7F2] group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="tel:3105550192"
                  className="inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-[#FAF7F2] border border-white/30 font-medium text-base px-6 py-4 rounded-full transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#C47455]" />
                  <span>(310) 555-0192</span>
                </a>
              </div>

              <p className="text-xs text-[#FAF7F2]/60 pt-1">
                *Strictly confidential. Response guaranteed within 24 business hours.
              </p>
            </div>

            {/* Right Quick Summary Card */}
            <div className="lg:col-span-5 bg-white text-[#232B28] p-8 rounded-3xl border border-[#E5DEC3] shadow-xl space-y-6">
              <div className="flex items-center gap-3 border-b border-[#FAF7F2] pb-4">
                <div className="w-12 h-12 rounded-full bg-[#EBF2EE] text-[#1E3A34] flex items-center justify-center shrink-0 font-serif font-bold text-xl">
                  M
                </div>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-[#1E3A34]">Dr. Maya Reynolds, PsyD</h3>
                  <p className="text-xs text-[#5C6863]">Licensed Clinical Psychologist</p>
                </div>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C47455] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E3A34] block">Santa Monica Office:</strong>
                    <span>123th Street 45 W, Santa Monica, CA 90401</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#C47455] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E3A34] block">Direct Practice Line:</strong>
                    <span>(310) 555-0192</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#C47455] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E3A34] block">Secure Email:</strong>
                    <span>maya@drmayareynolds.com</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#C47455] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#1E3A34] block">State Licensing:</strong>
                    <span>PSY #38942 • California Board of Psychology</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="p-3 bg-[#FAF7F2] rounded-xl text-center text-xs font-semibold text-[#1E3A34] border border-[#E5DEC3]">
                  ✨ Evening & Weekend Telehealth Available
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
