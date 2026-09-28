"use client";

import React from "react";
import Link from "next/link";
import { Heart, MapPin, Phone, Mail, ShieldCheck, Calendar } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1E3A34] text-[#FAF7F2] pt-16 pb-12 border-t border-[#2C4D44]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#2C4D44]">
          
          {/* Column 1: Practice Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C47455] flex items-center justify-center font-serif font-bold text-xl text-white">
                M
              </div>
              <div>
                <h3 className="font-serif text-2xl font-semibold text-white">Dr. Maya Reynolds, PsyD</h3>
                <p className="text-xs uppercase tracking-wider text-[#FAF7F2]/70 font-semibold">
                  Licensed Clinical Psychologist
                </p>
              </div>
            </div>

            <p className="text-sm text-[#FAF7F2]/80 leading-relaxed font-sans pr-4">
              Providing grounded, compassionate clinical psychology for high-achieving adults, trauma survivors, and individuals navigating anxiety or burnout. In-person in Santa Monica & telehealth across California.
            </p>

            <div className="text-xs text-[#FAF7F2]/60 pt-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C47455]" />
              <span>CA License #PSY38942 • Doctorate in Clinical Psychology</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-[#2C4D44] pb-2">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80 font-sans">
              <li>
                <Link href="/" className="hover:text-[#C47455] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-[#C47455] transition-colors">
                  About Maya
                </Link>
              </li>
              <li>
                <Link href="#specialties" className="hover:text-[#C47455] transition-colors">
                  Specialties
                </Link>
              </li>
              <li>
                <Link href="#office" className="hover:text-[#C47455] transition-colors font-medium text-[#C47455]">
                  Our Santa Monica Office
                </Link>
              </li>
              <li>
                <Link href="#faqs" className="hover:text-[#C47455] transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#C47455] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialties & Modalities (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-[#2C4D44] pb-2">
              Core Specialties
            </h4>
            <ul className="space-y-2 text-sm text-[#FAF7F2]/80 font-sans">
              <li>Anxiety & Panic Therapy</li>
              <li>EMDR & Trauma Processing</li>
              <li>Burnout & Perfectionism</li>
              <li>Cognitive Behavioral Therapy (CBT)</li>
              <li>Body-Oriented Somatic Tools</li>
              <li>California Telehealth Care</li>
            </ul>
          </div>

          {/* Column 4: Location & Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white border-b border-[#2C4D44] pb-2">
              Office & Contact
            </h4>
            
            <div className="space-y-3 text-sm text-[#FAF7F2]/80 font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C47455] shrink-0 mt-1" />
                <span>
                  123th Street 45 W<br />
                  Santa Monica, CA 90401
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C47455] shrink-0" />
                <a href="tel:3105550192" className="hover:text-white transition-colors">
                  (310) 555-0192
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C47455] shrink-0" />
                <a href="mailto:maya@drmayareynolds.com" className="hover:text-white transition-colors">
                  maya@drmayareynolds.com
                </a>
              </div>

              <p className="text-xs text-[#FAF7F2]/60 pt-2 leading-tight">
                Serving Santa Monica, Pacific Palisades, Venice, Brentwood, Westwood, Beverly Hills, & Telehealth Statewide.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#FAF7F2]/60 font-sans">
          <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
          
          <div className="flex flex-wrap items-center gap-4">
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-[#FAF7F2] transition-colors">HIPAA Disclosure</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
