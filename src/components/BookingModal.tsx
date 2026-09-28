"use client";

import React, { useState } from "react";
import { X, Calendar, Clock, MapPin, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [sessionType, setSessionType] = useState<"in-person" | "telehealth">("in-person");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialty: "Anxiety & Panic",
    message: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full border border-[#E5DEC3] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col">
        
        {/* Header Bar */}
        <div className="bg-[#1E3A34] text-[#FAF7F2] p-6 flex items-center justify-between border-b border-[#2C4D44]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C47455] flex items-center justify-center font-serif font-bold text-xl text-white">
              M
            </div>
            <div>
              <h3 className="font-serif text-xl font-semibold">Book a Consultation</h3>
              <p className="text-xs text-[#FAF7F2]/80 font-sans">Dr. Maya Reynolds, PsyD • Santa Monica, CA</p>
            </div>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#FAF7F2] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 font-sans">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EBF2EE] text-[#1E3A34] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10 text-[#C47455]" />
              </div>
              <h4 className="font-serif text-3xl font-semibold text-[#1E3A34]">Request Received!</h4>
              <p className="text-sm text-[#5C6863] max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.name || "Friend"}</strong>. Dr. Maya Reynolds’ practice will reach out within 24 business hours to confirm your complimentary 15-minute consultation.
              </p>
              <div className="pt-4">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-[#1E3A34] hover:bg-[#C47455] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                >
                  Return to Site
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 text-sm text-[#232B28]">
              
              {/* Session Location Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#1E3A34] uppercase tracking-wider mb-2">
                  Session Format Preferred
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSessionType("in-person")}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                      sessionType === "in-person"
                        ? "border-[#C47455] bg-white ring-2 ring-[#C47455]/20 font-semibold text-[#1E3A34]"
                        : "border-[#E5DEC3] bg-[#FAF7F2] text-[#5C6863]"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#C47455]" />
                    <div className="text-xs">
                      <div className="font-semibold">In-Person Office</div>
                      <div className="text-[10px] opacity-80">Santa Monica, CA</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSessionType("telehealth")}
                    className={`p-3 rounded-2xl border text-left flex items-center gap-2.5 transition-all ${
                      sessionType === "telehealth"
                        ? "border-[#C47455] bg-white ring-2 ring-[#C47455]/20 font-semibold text-[#1E3A34]"
                        : "border-[#E5DEC3] bg-[#FAF7F2] text-[#5C6863]"
                    }`}
                  >
                    <Clock className="w-4 h-4 text-[#C47455]" />
                    <div className="text-xs">
                      <div className="font-semibold">Virtual Telehealth</div>
                      <div className="text-[10px] opacity-80">Anywhere in California</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1E3A34] uppercase tracking-wider mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DEC3] bg-white focus:outline-none focus:border-[#C47455] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E3A34] uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(310) 555-0192"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[#E5DEC3] bg-white focus:outline-none focus:border-[#C47455] text-sm"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-[#1E3A34] uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DEC3] bg-white focus:outline-none focus:border-[#C47455] text-sm"
                />
              </div>

              {/* Focus Area Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#1E3A34] uppercase tracking-wider mb-1">
                  Primary Area of Focus
                </label>
                <select
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DEC3] bg-white focus:outline-none focus:border-[#C47455] text-sm text-[#232B28]"
                >
                  <option value="Anxiety & Panic">Anxiety & Panic Relief</option>
                  <option value="Trauma & EMDR">Trauma & EMDR Processing</option>
                  <option value="Burnout & Perfectionism">Burnout & High-Achiever Support</option>
                  <option value="Somatic Therapy">Somatic Body-Oriented Therapy</option>
                  <option value="General Consultation">General Introductory Consultation</option>
                </select>
              </div>

              {/* Optional Note */}
              <div>
                <label className="block text-xs font-semibold text-[#1E3A34] uppercase tracking-wider mb-1">
                  Brief Note / Preferred Time (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share any brief details or best times to reach you..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5DEC3] bg-white focus:outline-none focus:border-[#C47455] text-sm"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#1E3A34] hover:bg-[#C47455] text-[#FAF7F2] font-semibold text-base py-3.5 rounded-full shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5 text-[#FAF7F2]" />
                  <span>Submit Consultation Request</span>
                </button>
                <p className="text-[11px] text-[#5C6863] text-center mt-2 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C47455]" />
                  100% Confidential & Secure HIPAA Standards
                </p>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
}
