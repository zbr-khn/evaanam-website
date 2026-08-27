import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, UserCheck, Sparkles, Zap, UserPlus, Award, ArrowUpRight, CheckCircle2 } from "lucide-react";
import OperationsTimeline from "../components/OperationsTimeline";
import StatCounter from "../components/StatCounter";
import EVAANAMGeometricMark from "../components/EVAANAMGeometricMark";
import { WHY_US_PILLARS } from "../data/evaanamData";

const PILLAR_ICONS = [
  Zap,          // 01 No Ghosting
  ShieldCheck,  // 02 Background Checked
  Sparkles,     // 03 Uniformed & Groomed
  UserPlus,     // 04 Rapid Replacement
  UserCheck,    // 05 Single POC
  Award         // 06 Venue Experience
];

export default function WhyUsPage() {
  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">WHY EVAANAM</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950">
              Manpower is easy to arrange. <br />
              <span className="italic text-bronze-600">Reliable manpower is not.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 font-light leading-relaxed">
              In luxury hospitality and live corporate experiences, a single missing usher or unbriefed steward disrupts the entire guest journey. We engineer reliability into every deployment.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE SIX REFINED PILLARS */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="micro-label">CORE PROMISES</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 mt-2">
              Six Pillars of Operational Credibility
            </h2>
            <p className="text-sm text-chocolate-600 font-light mt-2 max-w-xl">
              Why leading wedding planners, luxury hotels, and event producers in Delhi NCR trust EVAANAM with their highest-stakes floors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_US_PILLARS.map((pillar, idx) => {
              const Icon = PILLAR_ICONS[idx];
              return (
                <div
                  key={pillar.number}
                  className="card-luxury p-8 sm:p-10 flex flex-col justify-between group hover:border-l-4 hover:border-l-bronze-500 hover:border-bronze-500/30 transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-sm font-semibold text-bronze-600">
                        {pillar.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-cream-200 border border-chocolate-700/10 flex items-center justify-center text-chocolate-700 group-hover:bg-bronze-500 group-hover:text-chocolate-950 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="font-serif text-2xl text-chocolate-950 font-medium group-hover:text-bronze-700 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-xs font-serif italic text-bronze-700 font-medium">
                      {pillar.subtitle}
                    </p>

                    <p className="text-xs text-chocolate-600 font-light leading-relaxed pt-2">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-chocolate-700/10 flex items-center space-x-2 text-[11px] font-sans text-chocolate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-bronze-600" />
                    <span>Guaranteed SLA Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE EVAANAM WORKFORCE OPERATIONS SYSTEM™ */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-200 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <EVAANAMGeometricMark size={44} className="mx-auto mb-2" />
            <span className="micro-label">PROPRIETARY METHODOLOGY</span>
            <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-chocolate-950">
              The EVAANAM Workforce Operations System™
            </h2>
            <p className="text-base text-chocolate-600 font-light">
              Seven stages between recruitment and the event floor. A systematic pipeline that eliminates human error and elevates service standards.
            </p>
          </div>

          {/* Interactive SVG Connector Timeline Component */}
          <OperationsTimeline />
        </div>
      </section>

      {/* 4. STATISTICS STRIP */}
      <StatCounter light={true} />

      {/* 5. BOTTOM CONVERSION CTA */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 text-center border-t border-chocolate-700/10">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="micro-label">OPERATIONS CONSULTATION</span>
          <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950">
            Let's discuss manpower requirements for your upcoming event.
          </h3>
          <p className="text-sm text-chocolate-600 font-light">
            Whether you need a dedicated bridal shadow team of 6 or a convention roster of 120, we assign an operations manager to structure your deployment.
          </p>
          <div className="pt-2">
            <Link to="/contact" className="btn-primary px-8 py-4">
              Schedule An Operational Briefing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
