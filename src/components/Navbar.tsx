"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Calendar, MapPin } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Dr. Maya", href: "#about" },
    { name: "Who I Help", href: "#who-i-help" },
    { name: "Specialties", href: "#specialties" },
    { name: "Our Office", href: "#our-office" },
    { name: "Approach", href: "#approach" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top Banner */}
      <div className="bg-[#1E3A34] text-white text-xs font-medium py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <MapPin className="w-3.5 h-3.5 text-[#C47455] hidden sm:inline" />
        <span>In-Person Therapy in Santa Monica, CA & Secure Telehealth Across California</span>
      </div>

      {/* Main Nav Bar */}
      <nav className="glass-nav border-b border-[#E5DEC3]/80 transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#1E3A34] text-white flex items-center justify-center font-serif text-lg font-bold shadow-sm group-hover:bg-[#C47455] transition-colors">
                MR
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1E3A34] leading-tight">
                  Dr. Maya Reynolds, <span className="text-[#C47455]">PsyD</span>
                </span>
                <span className="text-[11px] font-sans text-[#5C6863] tracking-wider uppercase font-medium">
                  Licensed Clinical Psychologist
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-7">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#232B28] hover:text-[#C47455] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C47455] hover:after:w-full after:transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-[#1E3A34] hover:bg-[#C47455] text-white text-sm font-semibold rounded-full transition-all duration-200 shadow-sm hover:shadow flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Consultation</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="sm:hidden px-3.5 py-1.5 bg-[#1E3A34] text-white text-xs font-semibold rounded-full"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1E3A34] hover:text-[#C47455] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#FAF7F2] border-b border-[#E5DEC3] px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 text-base font-medium text-[#232B28] hover:text-[#C47455] hover:bg-[#EBF2EE] rounded-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#C47455] text-white font-semibold text-center rounded-xl shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                Book an Appointment
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
