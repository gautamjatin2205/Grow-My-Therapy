"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import StatementBanner from "@/components/StatementBanner";
import WhoWeHelp from "@/components/WhoWeHelp";
import QuoteBanner from "@/components/QuoteBanner";
import ExpertiseTags from "@/components/ExpertiseTags";
import HowWeWork from "@/components/HowWeWork";
import SpecialtiesGrid from "@/components/SpecialtiesGrid";
import OurOffice from "@/components/OurOffice";
import AboutMaya from "@/components/AboutMaya";
import AppointmentCTA from "@/components/AppointmentCTA";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import AssignmentBadge from "@/components/AssignmentBadge";

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#232B28] flex flex-col font-sans selection:bg-[#C47455] selection:text-white">
      {/* Sticky Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Statement Intro Banner */}
      <StatementBanner />

      {/* Who We Help Cards Grid */}
      <WhoWeHelp />

      {/* Central Quote Callout */}
      <QuoteBanner />

      {/* Expertise Tag Cloud */}
      <ExpertiseTags />

      {/* How We Work / Therapeutic Approach */}
      <HowWeWork />

      {/* Specialties 4-Card Grid */}
      <SpecialtiesGrid />

      {/* Part 3 Custom Section: Our Office */}
      <OurOffice />

      {/* About Dr. Maya Reynolds */}
      <AboutMaya />

      {/* Appointment CTA Banner */}
      <AppointmentCTA onOpenBookingModal={() => setIsBookingOpen(true)} />

      {/* FAQ Accordion */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />

      {/* Internship Assignment Completion Checklist Badge */}
      <AssignmentBadge />
    </main>
  );
}
