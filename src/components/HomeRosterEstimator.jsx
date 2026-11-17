import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Users, Calculator, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { WhatsappIcon } from "./SocialIcons";

export default function HomeRosterEstimator() {
  const [eventType, setEventType] = useState("wedding"); // 'wedding' | 'corporate' | 'expo'
  const [guestCount, setGuestCount] = useState(450);

  // Dynamic roster calculations based on industry standard guest-to-crew ratios
  const calculation = useMemo(() => {
    let stewards = 0;
    let hostesses = 0;
    let shadows = 0;
    let supervisors = 0;
    let runners = 0;

    if (eventType === "wedding") {
      stewards = Math.max(6, Math.round(guestCount / 35));
      hostesses = guestCount < 300 ? 4 : guestCount < 700 ? 6 : 10;
      shadows = guestCount < 500 ? 2 : 4;
      supervisors = Math.max(1, Math.ceil(guestCount / 400));
      runners = Math.max(2, Math.ceil(guestCount / 350));
    } else if (eventType === "corporate") {
      stewards = Math.max(4, Math.round(guestCount / 50));
      hostesses = guestCount < 300 ? 4 : guestCount < 800 ? 8 : 12; // Registration & Ushering
      shadows = guestCount < 500 ? 1 : 2; // Speaker / VIP escort
      supervisors = Math.max(1, Math.ceil(guestCount / 350));
      runners = Math.max(2, Math.ceil(guestCount / 250));
    } else {
      stewards = Math.max(4, Math.round(guestCount / 60));
      hostesses = Math.max(4, Math.round(guestCount / 100)); // Booth & Crowd Leads
      shadows = 1;
      supervisors = Math.max(1, Math.ceil(guestCount / 500));
      runners = Math.max(2, Math.ceil(guestCount / 300));
    }

    const total = stewards + hostesses + shadows + supervisors + runners;

    return {
      stewards,
      hostesses,
      shadows,
      supervisors,
      runners,
      total,
    };
  }, [eventType, guestCount]);

  const whatsappMessage = encodeURIComponent(
    `Hello EVAANAM Operations Team, I am planning a ${
      eventType === "wedding" ? "Luxury Wedding" : eventType === "corporate" ? "Corporate Summit" : "Trade Expo"
    } for approximately ${guestCount} attendees in Delhi NCR. Roster estimate: ${calculation.total} personnel (${calculation.stewards} Stewards, ${calculation.hostesses} Hostesses, ${calculation.shadows} Shadows, ${calculation.supervisors} Supervisors, ${calculation.runners} Runners). Please provide availability and quote.`
  );

  return (
    <div className="w-full relative">
      <div className="backdrop-blur-2xl bg-cream-100/60 dark:bg-night-900/60 border border-chocolate-700/15 dark:border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-chocolate-700/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/15 border border-amber-500/30 rounded-full text-amber-700 dark:text-amber-300 text-xs font-mono font-bold mb-2">
              <Calculator className="w-3.5 h-3.5" />
              <span>LIVE WORKFORCE SIZING</span>
            </div>
            <h3 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50">
              Interactive Crew Roster Estimator
            </h3>
            <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light mt-1">
              Select your event format and attendee scale for instant hospitality ratio recommendations.
            </p>
          </div>

          {/* Event Format Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-cream-200/80 dark:bg-night-800/80 rounded-2xl border border-chocolate-700/10 dark:border-white/10 shrink-0 self-start md:self-auto">
            <button
              type="button"
              onClick={() => setEventType("wedding")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                eventType === "wedding"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-md font-bold"
                  : "text-chocolate-700 dark:text-night-muted hover:text-amber-600"
              }`}
            >
              Wedding
            </button>
            <button
              type="button"
              onClick={() => setEventType("corporate")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                eventType === "corporate"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-md font-bold"
                  : "text-chocolate-700 dark:text-night-muted hover:text-amber-600"
              }`}
            >
              Corporate
            </button>
            <button
              type="button"
              onClick={() => setEventType("expo")}
              className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
                eventType === "expo"
                  ? "bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 shadow-md font-bold"
                  : "text-chocolate-700 dark:text-night-muted hover:text-amber-600"
              }`}
            >
              Expo &amp; Pavilion
            </button>
          </div>
        </div>

        {/* Interactive Slider & Output Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 pt-8 items-center">
          
          {/* Left: Attendee Scale Slider */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-chocolate-700 dark:text-night-muted">
                Expected Guest Count
              </span>
              <span className="font-serif text-3xl font-medium text-amber-700 dark:text-amber-400">
                {guestCount.toLocaleString()} <span className="text-xs font-sans text-chocolate-600 dark:text-night-muted font-normal">Guests</span>
              </span>
            </div>

            {/* Range Slider */}
            <input
              type="range"
              min={100}
              max={2500}
              step={50}
              value={guestCount}
              onChange={(e) => setGuestCount(Number(e.target.value))}
              className="w-full h-2.5 bg-cream-200 dark:bg-night-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
            />

            <div className="flex items-center justify-between text-[11px] font-mono text-chocolate-500 dark:text-night-dim">
              <span>100 Intimate</span>
              <span>800 Grand Ballroom</span>
              <span>2,500+ Mega Convention</span>
            </div>

            {/* Standard Metrics Note */}
            <div className="p-4 rounded-2xl bg-white/40 dark:bg-white/[0.03] border border-chocolate-700/10 dark:border-white/10 space-y-1.5 text-xs">
              <div className="flex items-center space-x-2 text-amber-700 dark:text-amber-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Supervised Operations Standard</span>
              </div>
              <p className="text-chocolate-600 dark:text-night-muted leading-relaxed font-light">
                Recommended staffing includes a dedicated 1:12 supervisor-to-crew ratio, pre-shift muster inspections, and an active reserve backup bench.
              </p>
            </div>
          </div>

          {/* Right: Estimated Personnel Breakdown */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white/60 dark:bg-night-800/80 border border-chocolate-700/10 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-500 dark:text-night-dim block">
                  Stewards
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-chocolate-950 dark:text-cream-50 mt-1 block">
                  {calculation.stewards}
                </span>
                <span className="text-[10px] text-chocolate-500 dark:text-night-muted">F&amp;B / Banquet Service</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 dark:bg-night-800/80 border border-chocolate-700/10 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-500 dark:text-night-dim block">
                  Hostesses
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-chocolate-950 dark:text-cream-50 mt-1 block">
                  {calculation.hostesses}
                </span>
                <span className="text-[10px] text-chocolate-500 dark:text-night-muted">Welcome &amp; Registration</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 dark:bg-night-800/80 border border-chocolate-700/10 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-500 dark:text-night-dim block">
                  VIP Shadows
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-chocolate-950 dark:text-cream-50 mt-1 block">
                  {calculation.shadows}
                </span>
                <span className="text-[10px] text-chocolate-500 dark:text-night-muted">Principals &amp; Dignitaries</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 dark:bg-night-800/80 border border-chocolate-700/10 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-500 dark:text-night-dim block">
                  Runners
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-chocolate-950 dark:text-cream-50 mt-1 block">
                  {calculation.runners}
                </span>
                <span className="text-[10px] text-chocolate-500 dark:text-night-muted">Backstage Logistics</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/60 dark:bg-night-800/80 border border-chocolate-700/10 dark:border-white/10">
                <span className="text-[10px] font-mono uppercase tracking-wider text-chocolate-500 dark:text-night-dim block">
                  Captains
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-medium text-chocolate-950 dark:text-cream-50 mt-1 block">
                  {calculation.supervisors}
                </span>
                <span className="text-[10px] text-chocolate-500 dark:text-night-muted">Floor Management</span>
              </div>

              <div className="p-4 rounded-2xl bg-amber-500/15 dark:bg-amber-400/10 border border-amber-500/30">
                <span className="text-[10px] font-mono uppercase tracking-wider text-amber-800 dark:text-amber-300 font-bold block">
                  Total Crew
                </span>
                <span className="font-serif text-2xl sm:text-3xl font-bold text-amber-800 dark:text-amber-300 mt-1 block">
                  {calculation.total}
                </span>
                <span className="text-[10px] text-amber-800/80 dark:text-amber-300/80 font-medium">On-Duty Deployment</span>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
              <a
                href={`https://wa.me/?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto px-6 py-3.5 flex items-center justify-center space-x-2 text-xs font-bold"
              >
                <WhatsappIcon className="w-4 h-4 text-emerald-400" />
                <span>Send Sizing to Operations Desk</span>
              </a>

              <Link
                to="/services#calculator-section"
                className="w-full sm:w-auto px-6 py-3.5 rounded-full border border-chocolate-700/15 dark:border-white/10 hover:border-amber-400 bg-white/40 dark:bg-white/5 text-chocolate-900 dark:text-cream-100 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all text-center"
              >
                <span>Advanced 27-Role Calculator</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
