"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, MapPin, Calendar, Heart } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <>
      {/* Top Emergency / Telehealth Info Bar */}
      <div className="bg-[#1E3A34] text-[#FAF7F2] text-xs py-2 px-4 border-b border-[#2C4D44]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-[#C47455] animate-pulse"></span>
            <span>Now Accepting In-Person Clients in Santa Monica & Telehealth Across California</span>
          </div>
          <div className="flex items-center gap-6 text-xs text-[#FAF7F2]/80">
            <a href="tel:3105550192" className="hover:text-[#FAF7F2] flex items-center gap-1 transition-colors">
              <Phone className="w-3.5 h-3.5 text-[#C47455]" />
              (310) 555-0192
            </a>
            <span className="hidden md:inline flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-[#C47455]" />
              Santa Monica, CA 90401
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF7F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#E5DEC3]"
            : "bg-[#FAF7F2] py-5 border-b border-[#E5DEC3]/60"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Practice Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#1E3A34] flex items-center justify-center text-[#FAF7F2] font-serif font-bold text-xl shadow-sm group-hover:bg-[#C47455] transition-colors">
              M
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-semibold text-[#1E3A34] tracking-tight leading-none group-hover:text-[#C47455] transition-colors">
                Dr. Maya Reynolds
              </span>
              <span className="text-[11px] font-sans tracking-wider uppercase text-[#C47455] font-medium mt-1">
                PsyD • Licensed Clinical Psychologist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#232B28]">
            <Link href="#about" className="hover:text-[#C47455] transition-colors py-2">
              About Maya
            </Link>

            {/* Specialties Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#C47455] transition-colors py-2 focus:outline-none"
                onClick={() => toggleDropdown("specialties")}
              >
                Specialties
                <ChevronDown className="w-4 h-4 text-[#5C6863] group-hover:text-[#C47455] transition-transform group-hover:rotate-180 duration-200" />
              </button>
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-[#E5DEC3] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                <Link
                  href="#specialties"
                  className="block px-4 py-2.5 rounded-lg text-xs font-semibold uppercase text-[#C47455] hover:bg-[#FAF7F2]"
                >
                  All Core Specialties
                </Link>
                <hr className="my-1 border-[#E5DEC3]" />
                <Link
                  href="#specialties"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Anxiety & Panic Therapy
                </Link>
                <Link
                  href="#specialties"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Trauma & EMDR Processing
                </Link>
                <Link
                  href="#specialties"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Burnout & Perfectionism
                </Link>
                <Link
                  href="#specialties"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Somatic Grounding Therapy
                </Link>
              </div>
            </div>

            {/* Methods Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 hover:text-[#C47455] transition-colors py-2 focus:outline-none"
                onClick={() => toggleDropdown("methods")}
              >
                Approach & Methods
                <ChevronDown className="w-4 h-4 text-[#5C6863] group-hover:text-[#C47455] transition-transform group-hover:rotate-180 duration-200" />
              </button>
              <div className="absolute left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-[#E5DEC3] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-2 z-50">
                <Link
                  href="#how-we-work"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  EMDR Therapy
                </Link>
                <Link
                  href="#how-we-work"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Cognitive Behavioral Therapy (CBT)
                </Link>
                <Link
                  href="#how-we-work"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Mindfulness-Based Practices
                </Link>
                <Link
                  href="#how-we-work"
                  className="block px-4 py-2.5 rounded-lg text-sm text-[#232B28] hover:bg-[#FAF7F2] hover:text-[#1E3A34] transition-colors"
                >
                  Body-Oriented Somatic Tools
                </Link>
              </div>
            </div>

            {/* Part 3 Custom Section Link */}
            <Link
              href="#office"
              className="hover:text-[#C47455] transition-colors py-2 flex items-center gap-1 text-[#1E3A34] font-semibold"
            >
              <span className="w-2 h-2 rounded-full bg-[#C47455]"></span>
              Our Office
            </Link>

            <Link href="#faqs" className="hover:text-[#C47455] transition-colors py-2">
              FAQs
            </Link>
            <Link href="#contact" className="hover:text-[#C47455] transition-colors py-2">
              Contact
            </Link>
          </nav>

          {/* Book Appointment CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1E3A34] hover:bg-[#C47455] text-[#FAF7F2] font-medium text-sm px-5 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-200"
            >
              <Calendar className="w-4 h-4 text-[#FAF7F2]" />
              <span>Book Consultation</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-[#1E3A34] hover:bg-[#EBF2EE] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DEC3] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top duration-200">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1E3A34] hover:bg-[#EBF2EE] rounded-lg"
            >
              About Dr. Maya Reynolds
            </Link>
            <Link
              href="#specialties"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1E3A34] hover:bg-[#EBF2EE] rounded-lg"
            >
              Specialties & Areas of Care
            </Link>
            <Link
              href="#how-we-work"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1E3A34] hover:bg-[#EBF2EE] rounded-lg"
            >
              Therapeutic Approach
            </Link>
            <Link
              href="#office"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-[#C47455] bg-[#EBF2EE]/80 rounded-lg flex items-center justify-between"
            >
              <span>Our Santa Monica Office</span>
              <span className="text-xs bg-[#C47455] text-white px-2 py-0.5 rounded-full">New</span>
            </Link>
            <Link
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1E3A34] hover:bg-[#EBF2EE] rounded-lg"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-[#1E3A34] hover:bg-[#EBF2EE] rounded-lg"
            >
              Contact & Location
            </Link>

            <div className="pt-3 border-t border-[#E5DEC3] flex flex-col gap-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center bg-[#1E3A34] hover:bg-[#C47455] text-[#FAF7F2] font-semibold py-3 rounded-full shadow transition-colors flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </a>
              <a
                href="tel:3105550192"
                className="w-full text-center border border-[#1E3A34] text-[#1E3A34] font-medium py-2.5 rounded-full hover:bg-[#1E3A34] hover:text-[#FAF7F2] transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                Call (310) 555-0192
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
