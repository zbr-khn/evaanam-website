import React from "react";
import { FIVE_STAR_HOTELS, CONVENTION_AND_ARENAS } from "../data/evaanamData";

export default function VenueMarquee({ theme }) {
  // Combine representative venues for a seamless luxury ticker
  const marqueeItems = [
    ...FIVE_STAR_HOTELS.map((v) => ({ name: v.name, tag: "Five-Star Hospitality" })),
    ...CONVENTION_AND_ARENAS.map((v) => ({ name: v.name, tag: "Convention & Arena" }))
  ];

  return (
    <div
      className="relative overflow-hidden py-4 border-y bg-cream-100 dark:bg-night-850 border-chocolate-700/10 dark:border-bronze-500/15 text-chocolate-700 dark:text-cream-100 marquee-container transition-colors duration-400"
      aria-label="Venue Footprint Ticker"
    >
      {/* Subtle edge fade overlays for luxury presentation */}
      <div
        className="absolute top-0 bottom-0 left-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-cream-100 dark:from-night-850 to-transparent"
      />
      <div
        className="absolute top-0 bottom-0 right-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-cream-100 dark:from-night-850 to-transparent"
      />

      <div className="flex w-max animate-marquee marquee-content select-none items-center">
        {/* Set 1 */}
        {marqueeItems.map((item, index) => (
          <div
            key={`ticker-1-${index}`}
            className="flex items-center space-x-4 mx-6 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-500/60 group-hover:bg-bronze-500 transition-colors"></span>
            <span className="font-serif text-base sm:text-lg tracking-wider whitespace-nowrap text-chocolate-800 dark:text-cream-100 group-hover:text-bronze-600 dark:group-hover:text-bronze-350 transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-chocolate-400 dark:text-night-dim font-medium px-2 py-0.5 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
              {item.tag}
            </span>
          </div>
        ))}

        {/* Set 2 (Duplicate for smooth infinite loop) */}
        {marqueeItems.map((item, index) => (
          <div
            key={`ticker-2-${index}`}
            className="flex items-center space-x-4 mx-6 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-500/60 group-hover:bg-bronze-500 transition-colors"></span>
            <span className="font-serif text-base sm:text-lg tracking-wider whitespace-nowrap text-chocolate-800 dark:text-cream-100 group-hover:text-bronze-600 dark:group-hover:text-bronze-350 transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-chocolate-400 dark:text-night-dim font-medium px-2 py-0.5 border border-chocolate-700/10 dark:border-bronze-500/20 rounded-sm">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
