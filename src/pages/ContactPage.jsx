import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, FileText, ArrowUpRight } from "lucide-react";
import FollowTheFloor from "../components/FollowTheFloor";
import ManpowerCalculator from "../components/ManpowerCalculator";
import ContactFormSection from "../components/ContactFormSection";

export default function ContactPage() {
  const [activeMode, setActiveMode] = useState("form"); // 'form' | 'calculator'

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO (TONE A: Green / Alabaster White) */}
      <section className="section-tone-a py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label font-bold">START A CONVERSATION</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              Planning an event? <br />
              <span className="italic text-emerald-700 dark:text-emerald-400">Let's build your team.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed">
              Tell us what the floor needs. Share your event dates, venue location, and staffing expectations. Our senior operations desk will structure an optimized deployment roster.
            </p>

            {/* Mode Switcher Tabs with Rich Hover Animations & Bold Enclosed Design */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setActiveMode("form")}
                className={`px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-all flex items-center space-x-2.5 rounded-sm border-2 cursor-pointer shadow-sm hover:scale-105 active:scale-95 duration-300 ${
                  activeMode === "form"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-amber-400 shadow-lg ring-2 ring-amber-400/30"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-800 dark:text-cream-100 border-chocolate-700/20 dark:border-bronze-500/30 hover:border-amber-400 hover:bg-cream-50 dark:hover:bg-night-750"
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Contact &amp; Requisition Form</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("calculator")}
                className={`px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] transition-all flex items-center space-x-2.5 rounded-sm border-2 cursor-pointer shadow-sm hover:scale-105 active:scale-95 duration-300 ${
                  activeMode === "calculator"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 border-amber-400 shadow-lg ring-2 ring-amber-400/30"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-800 dark:text-cream-100 border-chocolate-700/20 dark:border-bronze-500/30 hover:border-amber-400 hover:bg-cream-50 dark:hover:bg-night-750"
                }`}
              >
                <Calculator className="w-4 h-4 text-amber-500 dark:text-amber-300" />
                <span>Roster Calculator + WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB CONTENT: EITHER FORM OR CALCULATOR (TONE B: Espresso Brown / Sandstone) */}
      {activeMode === "calculator" ? (
        <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
          <ManpowerCalculator />
        </section>
      ) : (
        <section className="section-tone-b py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
          <ContactFormSection />
        </section>
      )}

      {/* 3. SOCIAL / FOLLOW THE FLOOR (TONE A: Racing Green / Alabaster White) */}
      <section className="section-tone-a border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <FollowTheFloor showHeader={true} />
      </section>
    </div>
  );
}
