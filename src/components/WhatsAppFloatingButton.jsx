import React, { useState } from "react";
import { WhatsappIcon } from "./SocialIcons";

export default function WhatsAppFloatingButton() {
  const [hovered, setHovered] = useState(false);

  const waUrl =
    "https://wa.me/919310039929?text=Hello%20EVAANAM%2C%20I%20would%20like%20to%20inquire%20about%20event%20manpower%20and%20crew%20deployment%20for%20an%20upcoming%20event.";

  return (
    <div className="relative group">
      {/* Expanded Hover Pill Label */}
      <div
        className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-chocolate-950 dark:bg-night-950 text-cream-100 text-xs font-sans font-medium rounded-full border border-emerald-500/40 shadow-xl whitespace-nowrap transition-all duration-300 pointer-events-none flex items-center space-x-2 ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label="Chat directly with EVAANAM Operations Desk on WhatsApp"
        className="w-12 h-12 rounded-full bg-emerald-700 hover:bg-emerald-600 dark:bg-emerald-600 dark:hover:bg-emerald-500 text-cream-50 shadow-2xl border border-emerald-400/40 flex items-center justify-center relative hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 dark:focus:ring-offset-night-900"
      >
        {/* Pulsing Beacon Ring */}
        <span className="absolute inset-0 rounded-full bg-emerald-500 opacity-30 animate-ping pointer-events-none" />

        {/* WhatsApp Icon */}
        <WhatsappIcon className="w-6 h-6 text-cream-50 relative z-10 transition-transform group-hover:rotate-6" />
      </a>
    </div>
  );
}
