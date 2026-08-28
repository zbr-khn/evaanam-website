import React, { useState, useEffect, useRef } from "react";
import { WORKFORCE_SYSTEM_STAGES } from "../data/evaanamData";
import { Shield, UserCheck, Sparkles, FileText, Send, Radio, Award, ArrowRight, ArrowLeft } from "lucide-react";

const STAGE_ICONS = [
  UserCheck,      // 01 Recruitment
  Shield,         // 02 Verification
  Sparkles,       // 03 Grooming & Training
  FileText,       // 04 Crew Profile
  Send,           // 05 Deployment
  Radio,          // 06 Live Supervision
  Award           // 07 Performance Review
];

export default function OperationsTimeline() {
  const [activeStage, setActiveStage] = useState(0);
  const [manualOverride, setManualOverride] = useState(false);
  const sectionRef = useRef(null);
  const cardPanelRef = useRef(null);
  const overrideTimerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (manualOverride) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Start scrolling progress ONLY when the section and its detail card are clearly in the active viewport
      // Trigger zone: from when top of section reaches 35% of viewport down to when bottom reaches 65% of viewport
      const startOffset = windowHeight * 0.35;
      const endOffset = -rect.height * 0.4;
      const effectiveTravel = (windowHeight - startOffset) - endOffset;

      const currentPosition = windowHeight - rect.top - startOffset;

      if (currentPosition <= 0) {
        setActiveStage(0);
        return;
      }

      const rawProgress = Math.max(0, Math.min(1, currentPosition / (rect.height + windowHeight * 0.3)));

      const calculatedStage = Math.min(
        WORKFORCE_SYSTEM_STAGES.length - 1,
        Math.max(0, Math.floor(rawProgress * WORKFORCE_SYSTEM_STAGES.length))
      );

      setActiveStage(calculatedStage);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [manualOverride]);

  const handleSelectStage = (idx) => {
    setActiveStage(idx);
    setManualOverride(true);
    if (overrideTimerRef.current) clearTimeout(overrideTimerRef.current);
    overrideTimerRef.current = setTimeout(() => {
      setManualOverride(false);
    }, 2500);
  };

  const handleNext = () => {
    handleSelectStage(Math.min(WORKFORCE_SYSTEM_STAGES.length - 1, activeStage + 1));
  };

  const handlePrev = () => {
    handleSelectStage(Math.max(0, activeStage - 1));
  };

  return (
    <div ref={sectionRef} className="py-12 space-y-10">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="micro-label font-bold text-amber-700 dark:text-amber-400">
          OPERATIONAL PROTOCOL
        </span>
        <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50">
          The 7-Step Workforce Operations System™
        </h2>
        <p className="text-sm text-chocolate-700 dark:text-night-muted font-light">
          Scroll down to advance through our rigorous recruitment, verification, grooming, and live supervision pipeline.
        </p>
      </div>

      {/* Desktop Horizontal Interactive Stages */}
      <div className="hidden lg:block space-y-8">
        {/* SVG Progressive Connecting Line */}
        <div className="relative pt-4 pb-2">
          {/* Background track line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2.5px] -translate-y-1/2 bg-chocolate-700/15 dark:bg-night-700 z-0" />
          
          {/* Animated active progress line */}
          <div
            className="absolute top-1/2 left-8 h-[2.5px] -translate-y-1/2 bg-gradient-to-r from-brand-green via-amber-500 to-amber-600 dark:from-bronze-500 dark:via-amber-400 dark:to-amber-500 z-0 transition-all duration-500"
            style={{
              width: `calc(${(activeStage / (WORKFORCE_SYSTEM_STAGES.length - 1)) * 100}% - 40px)`
            }}
          />

          {/* 7 Stage Nodes */}
          <div className="relative z-10 grid grid-cols-7 gap-2">
            {WORKFORCE_SYSTEM_STAGES.map((stage, idx) => {
              const Icon = STAGE_ICONS[idx];
              const isActive = idx === activeStage;
              const isPast = idx < activeStage;

              return (
                <button
                  key={stage.number}
                  onClick={() => handleSelectStage(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none transition-transform cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-400 ${
                      isActive
                        ? "bg-brand-green dark:bg-bronze-500 border-amber-400 text-cream-50 dark:text-night-950 scale-110 shadow-xl ring-4 ring-amber-400/30"
                        : isPast
                        ? "bg-amber-600 dark:bg-bronze-500 border-amber-500 text-cream-50 dark:text-night-950 shadow"
                        : "bg-cream-100 dark:bg-night-800 border-chocolate-700/20 dark:border-bronze-500/20 text-chocolate-500 dark:text-night-muted group-hover:border-amber-400 group-hover:scale-105"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[11px] font-extrabold text-amber-700 dark:text-amber-400 mt-3">
                    {stage.number}
                  </span>
                  <span
                    className={`text-xs font-serif font-medium mt-0.5 transition-colors ${
                      isActive
                        ? "text-chocolate-950 dark:text-cream-50 font-bold"
                        : "text-chocolate-600 dark:text-night-muted group-hover:text-chocolate-950 dark:group-hover:text-cream-50"
                    }`}
                  >
                    {stage.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Panel */}
        <div
          ref={cardPanelRef}
          className="bg-cream-100/95 dark:bg-night-850/95 border-2 border-chocolate-700/15 dark:border-bronze-500/30 p-8 lg:p-10 shadow-xl relative overflow-hidden rounded-sm transition-all duration-400 hover:border-amber-500/60"
        >
          <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-brand-green via-amber-500 to-amber-600 dark:from-bronze-500 dark:to-amber-400" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-xs text-amber-900 dark:text-amber-300 font-extrabold px-3 py-1 bg-amber-500/15 dark:bg-bronze-500/20 border border-amber-500/30 rounded-sm">
                  STAGE {WORKFORCE_SYSTEM_STAGES[activeStage].number} OF 07
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-chocolate-600 dark:text-night-muted">
                  {WORKFORCE_SYSTEM_STAGES[activeStage].summary}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                {WORKFORCE_SYSTEM_STAGES[activeStage].name}
              </h3>

              <p className="text-sm text-chocolate-700 dark:text-night-muted leading-relaxed font-light">
                {WORKFORCE_SYSTEM_STAGES[activeStage].desc}
              </p>

              {/* Navigation Arrows */}
              <div className="pt-2 flex items-center space-x-3">
                <button
                  onClick={handlePrev}
                  disabled={activeStage === 0}
                  className="btn-secondary px-3.5 py-2 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <ArrowLeft className="w-3.5 h-3.5 mr-1" />
                  <span>Prev Step</span>
                </button>
                <button
                  onClick={handleNext}
                  disabled={activeStage === WORKFORCE_SYSTEM_STAGES.length - 1}
                  className="btn-primary px-4 py-2 text-xs font-bold disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>

            <div className="md:col-span-4 bg-cream-50 dark:bg-night-800 p-6 border-2 border-chocolate-700/15 dark:border-bronze-500/25 rounded-sm shadow-sm space-y-3">
              <span className="micro-label block text-amber-700 dark:text-amber-400 font-bold">
                OPERATIONAL DELIVERABLE
              </span>
              <p className="text-sm font-serif italic text-chocolate-900 dark:text-cream-100 leading-relaxed">
                "{WORKFORCE_SYSTEM_STAGES[activeStage].deliverable}"
              </p>
              <div className="pt-3 border-t border-chocolate-700/10 dark:border-night-700 flex items-center justify-between text-[11px] text-chocolate-600 dark:text-night-dim font-sans">
                <span>Verification</span>
                <span className="font-bold text-emerald-700 dark:text-emerald-400">100% Quality Pass</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Timeline */}
      <div className="block lg:hidden space-y-6">
        <div className="relative pl-8 border-l-2 border-amber-500/40 ml-4 space-y-6">
          {WORKFORCE_SYSTEM_STAGES.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx];
            const isSelected = idx === activeStage;

            return (
              <div
                key={stage.number}
                onClick={() => handleSelectStage(idx)}
                className={`relative transition-all cursor-pointer p-6 border-2 rounded-sm shadow-sm ${
                  isSelected
                    ? "bg-cream-50 dark:bg-night-800 border-amber-500/80 shadow-lg ring-2 ring-amber-400/20"
                    : "bg-cream-100/80 dark:bg-night-850/80 border-chocolate-700/15 dark:border-bronze-500/20 hover:border-amber-400"
                }`}
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[45px] top-5 w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs shadow-md transition-all ${
                    isSelected
                      ? "bg-brand-green dark:bg-bronze-500 border-amber-400 text-cream-50 dark:text-night-950 scale-110"
                      : "bg-cream-200 dark:bg-night-750 border-chocolate-700/20 dark:border-bronze-500/30 text-chocolate-600 dark:text-night-muted"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-mono text-xs font-extrabold text-amber-700 dark:text-amber-400">
                    STAGE {stage.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-chocolate-500 dark:text-night-dim font-sans font-semibold">
                    Protocol {idx + 1}/7
                  </span>
                </div>

                <h4 className="font-serif text-xl text-chocolate-950 dark:text-cream-50 mb-1 font-medium">
                  {stage.name}
                </h4>
                <p className="text-xs text-amber-800 dark:text-amber-300 mb-2 font-medium">
                  {stage.summary}
                </p>
                <p className="text-xs text-chocolate-600 dark:text-night-muted leading-relaxed font-light">
                  {stage.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-chocolate-700/10 dark:border-night-700 text-[11.5px] text-amber-800 dark:text-amber-300 font-serif italic">
                  Deliverable: "{stage.deliverable}"
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
