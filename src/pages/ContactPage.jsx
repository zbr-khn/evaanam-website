import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Calculator, FileText, ArrowUpRight, ArrowDown } from "lucide-react";
import FollowTheFloor from "../components/FollowTheFloor";
import ManpowerCalculator from "../components/ManpowerCalculator";
import ContactFormSection from "../components/ContactFormSection";

export default function ContactPage() {
  const [activeMode, setActiveMode] = useState("form"); // 'form' | 'calculator'
  const contentSectionRef = useRef(null);

  const handleModeSwitch = (mode) => {
    setActiveMode(mode);
    // Smoothly scroll the screen down so the selected tool/form is immediately visible to the user
    setTimeout(() => {
      if (contentSectionRef.current) {
        const topOffset = contentSectionRef.current.getBoundingClientRect().top + window.pageYOffset - 85;
        window.scrollTo({
          top: topOffset,
          behavior: "smooth",
        });
      }
    }, 60);
  };

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

            {/* Mode Switcher Tabs with Auto-Scroll Animation & Signature Design */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleModeSwitch("form")}
                className={`btn-primary group py-3.5 px-6 text-xs font-bold uppercase tracking-[0.18em] flex items-center space-x-2.5 cursor-pointer shadow-md transition-all duration-300 ${
                  activeMode === "form"
                    ? "ring-2 ring-amber-400 border-amber-400"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                <FileText className="w-4 h-4 text-amber-300 dark:text-night-950" />
                <span>Contact &amp; Requisition Form</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-70 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => handleModeSwitch("calculator")}
                className={`btn-secondary group py-3.5 px-6 text-xs font-bold uppercase tracking-[0.18em] flex items-center space-x-2.5 cursor-pointer shadow-md transition-all duration-300 ${
                  activeMode === "calculator"
                    ? "ring-2 ring-amber-400 border-amber-400"
                    : "opacity-90 hover:opacity-100"
                }`}
              >
                <Calculator className="w-4 h-4 text-amber-400" />
                <span>Roster Calculator + WhatsApp</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-70 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB CONTENT CONTAINER WITH REF FOR AUTO-SCROLL FOCUS */}
      <div ref={contentSectionRef} id="contact-content-section">
        {activeMode === "calculator" ? (
          <section className="section-tone-b py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
            <ManpowerCalculator />
          </section>
        ) : (
          <section className="section-tone-b py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/15 dark:border-bronze-500/20">
            <ContactFormSection />
          </section>
        )}
      </div>

      {/* 3. SOCIAL / FOLLOW THE FLOOR (TONE A: Racing Green / Alabaster White) */}
      <section className="section-tone-a border-b border-chocolate-700/15 dark:border-emerald-500/20">
        <FollowTheFloor showHeader={true} />
      </section>
    </div>
  );
}
