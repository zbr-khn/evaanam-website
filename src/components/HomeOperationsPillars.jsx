import React, { useState } from "react";
import { 
  ShieldCheck, 
  Sparkles, 
  Radio, 
  UserCheck, 
  Award, 
  Clock, 
  CheckCircle2, 
  Zap, 
  ArrowUpRight 
} from "lucide-react";
import { Link } from "react-router-dom";

const STAGES = [
  {
    step: "01",
    icon: ShieldCheck,
    title: "Biometric & Police Audit",
    tag: "100% VERIFIED",
    desc: "Rigorous identity documentation, police verification, and behavioral history check for every crew member before floor induction.",
  },
  {
    step: "02",
    icon: Sparkles,
    title: "5-Star Grooming Standard",
    tag: "IMPECCABLE ATTIRE",
    desc: "Strict adherence to premium black-tie tuxedos, crisp bandhgalas, and traditional sarees with polished deportment and articulate multilingual diction.",
  },
  {
    step: "03",
    icon: Clock,
    title: "60-Min Pre-Call Muster",
    tag: "STATION BRIEFING",
    desc: "All personnel muster 1 hour prior to guest doors. Station assignments, timeline walkthroughs, and venue decorum checks are conducted on-site.",
  },
  {
    step: "04",
    icon: Radio,
    title: "Dedicated Floor Captain",
    tag: "SINGLE POC & RADIOS",
    desc: "A senior coordinator equipped with 2-way radios acts as your single point of contact, directing manpower effortlessly in real-time.",
  },
  {
    step: "05",
    icon: Zap,
    title: "Active Standby Bench",
    tag: "ZERO GHOSTING",
    desc: "Every contract maintains an active reserve bench. If any personal emergency arises, a pre-briefed replacement is already present on the property.",
  },
  {
    step: "06",
    icon: Award,
    title: "Post-Shift Audit & Signoff",
    tag: "ACCOUNTABILITY",
    desc: "Immediate coordinator walkthrough, floor sign-off with your event lead, and performance logs guaranteeing transparent billing.",
  },
];

export default function HomeOperationsPillars() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <div className="w-full space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-700 dark:text-amber-300 text-xs font-mono font-bold">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>OPERATIONAL ASSURANCE STANDARD</span>
          </div>
          <h2 className="editorial-heading text-4xl sm:text-5xl text-chocolate-950 dark:text-cream-50">
            Engineered for Zero Dropouts.
          </h2>
          <p className="text-sm sm:text-base text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
            In five-star hospitality and high-stakes corporate conclaves, a single missing usher or unbriefed steward disrupts the guest experience. Here is how we guarantee flawlessness.
          </p>
        </div>

        <Link
          to="/why-us"
          className="btn-secondary group py-3.5 px-6 text-xs uppercase tracking-wider self-start md:self-auto shrink-0"
        >
          <span>Explore Why Us Protocol</span>
          <ArrowUpRight className="w-4 h-4 ml-1.5 text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>

      {/* 6-Stage Glassmorphic Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {STAGES.map((stage, idx) => {
          const Icon = stage.icon;
          return (
            <div
              key={stage.step}
              onMouseEnter={() => setActiveStage(idx)}
              className={`group relative p-8 rounded-3xl backdrop-blur-xl border transition-all duration-400 flex flex-col justify-between space-y-6 ${
                activeStage === idx
                  ? "bg-white/[0.08] dark:bg-night-850/80 border-amber-500/50 shadow-[0_16px_40px_rgba(212,186,140,0.18)] -translate-y-1.5"
                  : "bg-white/[0.03] dark:bg-night-900/40 border-chocolate-700/10 dark:border-white/10 hover:border-amber-500/30 shadow-md"
              }`}
            >
              <div className="space-y-4">
                {/* Step Pill & Icon */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-extrabold text-amber-700 dark:text-amber-400 tracking-widest px-2.5 py-1 bg-amber-500/10 border border-amber-500/20 rounded-full">
                    STAGE {stage.step}
                  </span>

                  <div className="w-10 h-10 rounded-2xl backdrop-blur-md bg-cream-200/60 dark:bg-white/5 border border-chocolate-700/10 dark:border-white/10 flex items-center justify-center text-amber-700 dark:text-amber-400 group-hover:bg-amber-500 group-hover:text-night-950 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-chocolate-400 dark:text-night-dim font-bold block mb-1">
                    {stage.tag}
                  </span>
                  <h3 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
                    {stage.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
                  {stage.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-chocolate-700/10 dark:border-white/10 flex items-center space-x-2 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Audited Standard</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
