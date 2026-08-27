import React, { useState, useEffect, useRef } from "react";
import { WORKFORCE_SYSTEM_STAGES } from "../data/evaanamData";
import { CheckCircle2, Shield, UserCheck, Sparkles, FileText, Send, Radio, Award } from "lucide-react";

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far the user has scrolled through this section
      const totalDist = rect.height;
      const currentScroll = windowHeight - rect.top;
      const rawProgress = Math.max(0, Math.min(1, currentScroll / (totalDist + windowHeight * 0.4)));

      setScrollProgress(rawProgress);

      // Dynamically highlight active stage based on progress
      const calculatedStage = Math.min(
        WORKFORCE_SYSTEM_STAGES.length - 1,
        Math.floor(rawProgress * WORKFORCE_SYSTEM_STAGES.length)
      );
      if (calculatedStage >= 0) {
        setActiveStage(calculatedStage);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={sectionRef} className="py-8">
      {/* Desktop Horizontal Interactive Stages */}
      <div className="hidden lg:block">
        {/* SVG Progressive Connecting Line */}
        <div className="relative mb-12">
          {/* Background track line */}
          <div className="absolute top-1/2 left-8 right-8 h-[2px] -translate-y-1/2 bg-chocolate-700/15 z-0" />
          
          {/* Animated active progress line */}
          <div
            className="absolute top-1/2 left-8 h-[2px] -translate-y-1/2 bg-bronze-500 z-0 transition-all duration-300"
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
                  onClick={() => setActiveStage(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none transition-transform"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isActive
                        ? "bg-chocolate-700 border-bronze-500 text-cream-50 scale-110 shadow-md ring-4 ring-bronze-500/20"
                        : isPast
                        ? "bg-bronze-500 border-bronze-500 text-chocolate-950"
                        : "bg-cream-100 border-chocolate-700/20 text-chocolate-500 group-hover:border-bronze-500/60"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[11px] font-semibold text-bronze-600 mt-3">
                    {stage.number}
                  </span>
                  <span
                    className={`text-xs font-serif font-medium mt-1 transition-colors ${
                      isActive
                        ? "text-chocolate-950 font-semibold"
                        : "text-chocolate-600 group-hover:text-chocolate-900"
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
        <div className="bg-cream-100 border border-chocolate-700/10 p-8 lg:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-bronze-500"></div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <div className="flex items-center space-x-3">
                <span className="font-mono text-sm text-bronze-600 font-semibold px-2 py-0.5 bg-bronze-500/10 rounded">
                  Stage {WORKFORCE_SYSTEM_STAGES[activeStage].number}
                </span>
                <span className="text-xs uppercase tracking-[0.2em] font-sans text-chocolate-500">
                  {WORKFORCE_SYSTEM_STAGES[activeStage].summary}
                </span>
              </div>

              <h3 className="font-serif text-3xl text-chocolate-900 font-medium">
                {WORKFORCE_SYSTEM_STAGES[activeStage].name}
              </h3>

              <p className="text-sm text-chocolate-600 leading-relaxed font-light">
                {WORKFORCE_SYSTEM_STAGES[activeStage].desc}
              </p>
            </div>

            <div className="md:col-span-4 bg-cream-50 p-6 border border-chocolate-700/10">
              <span className="micro-label block mb-2 text-bronze-600">
                Operational Deliverable
              </span>
              <p className="text-sm font-serif italic text-chocolate-900">
                "{WORKFORCE_SYSTEM_STAGES[activeStage].deliverable}"
              </p>
              <div className="mt-4 pt-3 border-t border-chocolate-700/10 flex items-center justify-between text-[11px] text-chocolate-500 font-sans">
                <span>Standard SLA</span>
                <span className="font-semibold text-chocolate-700">100% Strict Protocol</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Vertical Timeline */}
      <div className="block lg:hidden space-y-6">
        <div className="relative pl-8 border-l-2 border-bronze-500/30 ml-4 space-y-8">
          {WORKFORCE_SYSTEM_STAGES.map((stage, idx) => {
            const Icon = STAGE_ICONS[idx];
            const isSelected = idx === activeStage;

            return (
              <div
                key={stage.number}
                onClick={() => setActiveStage(idx)}
                className={`relative transition-all cursor-pointer p-5 border rounded-sm ${
                  isSelected
                    ? "bg-cream-100 border-bronze-500 shadow-sm"
                    : "bg-cream-50/70 border-chocolate-700/10"
                }`}
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[45px] top-4 w-9 h-9 rounded-full flex items-center justify-center border-2 text-xs ${
                    isSelected
                      ? "bg-chocolate-700 border-bronze-500 text-cream-50"
                      : "bg-cream-200 border-chocolate-700/20 text-chocolate-600"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>

                <div className="flex items-center justify-between mb-1">
                  <span className="font-mono text-xs font-semibold text-bronze-600">
                    STAGE {stage.number}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-chocolate-400 font-sans">
                    System Protocol
                  </span>
                </div>

                <h4 className="font-serif text-xl text-chocolate-900 mb-1 font-medium">
                  {stage.name}
                </h4>
                <p className="text-xs text-chocolate-500 mb-3 font-medium">
                  {stage.summary}
                </p>
                <p className="text-xs text-chocolate-600 leading-relaxed font-light">
                  {stage.desc}
                </p>

                <div className="mt-4 pt-3 border-t border-chocolate-700/10 text-[11px] text-bronze-700 font-serif italic">
                  Deliverable: {stage.deliverable}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
