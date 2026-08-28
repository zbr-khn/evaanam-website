import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calculator, FileText } from "lucide-react";
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

            {/* Mode Switcher Tabs */}
            <div className="pt-2 flex items-center space-x-3">
              <button
                type="button"
                onClick={() => setActiveMode("form")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 rounded-sm ${
                  activeMode === "form"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/15 dark:border-bronze-500/20 hover:border-bronze-500/40"
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Contact &amp; Requisition Form</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("calculator")}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all flex items-center space-x-2 rounded-sm ${
                  activeMode === "calculator"
                    ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-sm font-bold"
                    : "bg-cream-100 dark:bg-night-800 text-chocolate-700 dark:text-cream-200 border border-chocolate-700/15 dark:border-bronze-500/20 hover:border-bronze-500/40"
                }`}
              >
                <Calculator className="w-3.5 h-3.5 text-amber-400" />
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
