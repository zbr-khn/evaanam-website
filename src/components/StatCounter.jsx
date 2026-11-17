import React from "react";

const OPERATIONAL_STANDARDS = [
  {
    metric: "1:12",
    suffix: " Ratio",
    label: "Floor Supervisory Model",
    desc: "One dedicated captain assigned per 12 crew members for proactive oversight.",
  },
  {
    metric: "60",
    suffix: " Min",
    label: "Pre-Call Muster Briefing",
    desc: "Crews arrive on-site early for grooming check, station assignments, and radio sync.",
  },
  {
    metric: "100%",
    suffix: "",
    label: "Verified Identity Screening",
    desc: "Full biometric checks and identity audits before deployment to five-star venues.",
  },
  {
    metric: "Standby",
    suffix: " Bench",
    label: "Active Backup Buffer",
    desc: "Pre-briefed reserve personnel on call to guarantee zero floor understaffing.",
  },
];

export default function StatCounter({ className = "" }) {
  return (
    <section
      aria-label="EVAANAM Operational Standards"
      className={`py-12 border-y border-chocolate-700/10 dark:border-white/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-chocolate-700/10 dark:divide-white/10">
          {OPERATIONAL_STANDARDS.map((item) => (
            <div
              key={item.label}
              className="py-4 px-4 sm:px-6 flex flex-col justify-between first:pl-0 last:pr-0"
            >
              <div>
                <div className="flex items-baseline space-x-1 mb-2">
                  <span className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-chocolate-950 dark:text-cream-50 tracking-tight">
                    {item.metric}
                  </span>
                  {item.suffix && (
                    <span className="font-serif text-xl sm:text-2xl text-bronze-600 dark:text-bronze-400 font-light">
                      {item.suffix}
                    </span>
                  )}
                </div>
                <p className="text-xs uppercase tracking-[0.16em] font-bold text-chocolate-800 dark:text-cream-200 font-sans mb-1">
                  {item.label}
                </p>
              </div>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light leading-relaxed mt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
