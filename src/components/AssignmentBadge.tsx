"use client";

import React, { useState } from "react";
import { CheckCircle, Award, Video, FileText, X, ChevronRight } from "lucide-react";

export default function AssignmentBadge() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* Floating Bottom Left Badge */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setModalOpen(true)}
          className="bg-[#1E3A34] hover:bg-[#C47455] text-white px-4 py-2.5 rounded-full shadow-2xl border-2 border-[#FAF7F2] text-xs font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <Award className="w-4 h-4 text-[#C47455]" />
          <span>Assignment Breakdown Checklist</span>
          <span className="bg-[#C47455] text-white text-[10px] px-2 py-0.5 rounded-full font-bold">100%</span>
        </button>
      </div>

      {/* Modal Breakdown */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full border border-[#E5DEC3] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col font-sans">
            
            <div className="bg-[#1E3A34] text-white p-6 flex items-center justify-between border-b border-[#2C4D44]">
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#C47455]" />
                <div>
                  <h3 className="font-serif text-xl font-semibold">Internship Assignment Completion</h3>
                  <p className="text-xs text-[#FAF7F2]/80">Cloning & Creative Redesign • Dr. Maya Reynolds, PsyD</p>
                </div>
              </div>
              
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-[#232B28]">
              
              {/* Part 1 */}
              <div className="p-4 bg-white rounded-2xl border border-[#E5DEC3] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-semibold text-[#1E3A34] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Part 1: Homepage Clone & Architecture
                  </h4>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-xs text-[#5C6863]">
                  Exact layout, spacing, hierarchy, grid systems, navigation header, hero, statement banner, who we help cards, expertise tags, specialties, schedule CTA, FAQs, and multi-column footer replicated.
                </p>
              </div>

              {/* Part 2 */}
              <div className="p-4 bg-white rounded-2xl border border-[#E5DEC3] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-semibold text-[#1E3A34] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Part 2: Dr. Maya Reynolds Profile Redesign
                  </h4>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-xs text-[#5C6863]">
                  • <strong>Theme & Palette:</strong> Grounded Sage Teal (#1E3A34), Terracotta Accent (#C47455), Linen Surface (#FAF7F2).<br />
                  • <strong>Copywriting:</strong> SEO-optimized for Santa Monica & CA (H1, 3 key focus groups, CBT/EMDR/Somatic specialties, about bio).<br />
                  • <strong>Images:</strong> Intentional portrait & therapy space imagery.
                </p>
              </div>

              {/* Part 3 */}
              <div className="p-4 bg-white rounded-2xl border border-[#E5DEC3] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-semibold text-[#1E3A34] flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    Part 3: Custom Section — "Our Office"
                  </h4>
                  <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                    Completed
                  </span>
                </div>
                <p className="text-xs text-[#5C6863]">
                  New "Our Office: A Calm Space for Healing in Santa Monica" section highlighting 123th Street 45 W address, photo gallery, natural light, acoustic privacy, and hybrid session options.
                </p>
              </div>

              {/* Part 4 */}
              <div className="p-4 bg-white rounded-2xl border border-[#E5DEC3] space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-lg font-semibold text-[#1E3A34] flex items-center gap-2">
                    <Video className="w-5 h-5 text-[#C47455]" />
                    Part 4: Video Walkthrough Script & Demo
                  </h4>
                  <span className="text-xs font-semibold text-[#C47455] bg-[#EBF2EE] px-2.5 py-0.5 rounded-full">
                    Presentation Ready
                  </span>
                </div>
                <p className="text-xs text-[#5C6863]">
                  A complete, professional 5-minute Loom presentation transcript and walkthrough guide has been saved in the project artifacts for your video demo to client Dr. Maya Reynolds.
                </p>
              </div>

            </div>

            <div className="p-4 bg-[#EBF2EE] border-t border-[#E5DEC3] flex justify-end">
              <button
                onClick={() => setModalOpen(false)}
                className="bg-[#1E3A34] hover:bg-[#C47455] text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                Close Checklist
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
