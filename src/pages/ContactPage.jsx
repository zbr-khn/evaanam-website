import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Calculator, FileText, ArrowUpRight, ArrowDown, Sparkles } from "lucide-react";
import FollowTheFloor from "../components/FollowTheFloor";
import ManpowerCalculator from "../components/ManpowerCalculator";
import ContactFormSection from "../components/ContactFormSection";

export default function ContactPage() {
  const [activeMode, setActiveMode] = useState("form"); // 'form' | 'calculator'
  const contentSectionRef = useRef(null);

  const handleModeSwitch = (mode) => {
    setActiveMode(mode);
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
      {/* 1. HERO SECTION */}
      <section className="relative py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 dark:bg-amber-400/5 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>START A CONVERSATION · SENIOR DESK DISPATCH</span>
            </div>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl">
              Planning an event? <br />
              <span className="italic text-glow-amber">Let's build your team.</span>
            </h1>
            <p className="text-base sm:text-lg font-light leading-relaxed text-chocolate-700 dark:text-night-muted">
              Tell us what the floor needs. Share your event dates, venue location, and staffing expectations. Our senior operations desk will structure an optimized deployment roster within hours.
            </p>

            {/* Mode Switcher Tabs */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => handleModeSwitch("form")}
                className={`py-3.5 px-6 text-xs font-bold uppercase tracking-[0.16em] flex items-center space-x-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  activeMode === "form"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-lg shadow-amber-500/25 border border-amber-400 scale-105"
                    : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10 backdrop-blur-sm"
                }`}
              >
                <FileText className="w-4 h-4 text-night-950" />
                <span>Contact &amp; Requisition Form</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-80" />
              </button>

              <button
                type="button"
                onClick={() => handleModeSwitch("calculator")}
                className={`py-3.5 px-6 text-xs font-bold uppercase tracking-[0.16em] flex items-center space-x-2.5 cursor-pointer rounded-full transition-all duration-300 ${
                  activeMode === "calculator"
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-night-950 shadow-lg shadow-amber-500/25 border border-amber-400 scale-105"
                    : "bg-white/60 dark:bg-white/5 text-chocolate-700 dark:text-night-muted hover:text-chocolate-950 dark:hover:text-cream-50 border border-chocolate-700/15 dark:border-white/10 backdrop-blur-sm"
                }`}
              >
                <Calculator className="w-4 h-4 text-amber-500 dark:text-amber-400" />
                <span>Roster Sizing + WhatsApp</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TAB CONTENT CONTAINER */}
      <div ref={contentSectionRef} id="contact-content-section">
        {activeMode === "calculator" ? (
          <section className="py-20 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/30 dark:bg-night-950/40 backdrop-blur-sm">
            <ManpowerCalculator />
          </section>
        ) : (
          <section className="py-24 px-6 sm:px-8 lg:px-12 border-b border-chocolate-700/10 dark:border-white/10 bg-cream-100/30 dark:bg-night-950/40 backdrop-blur-sm">
            <ContactFormSection />
          </section>
        )}
      </div>

      {/* 3. SOCIAL / FOLLOW THE FLOOR */}
      <section className="border-b border-chocolate-700/10 dark:border-white/10">
        <FollowTheFloor showHeader={true} />
      </section>
    </div>
  );
}
