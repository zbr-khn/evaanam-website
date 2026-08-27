import React from "react";
import { FIVE_STAR_HOTELS, CONVENTION_AND_ARENAS } from "../data/evaanamData";

export default function VenueMarquee({ theme = "light" }) {
  // Combine representative venues for a seamless luxury ticker
  const marqueeItems = [
    ...FIVE_STAR_HOTELS.map((v) => ({ name: v.name, tag: "Five-Star Hospitality" })),
    ...CONVENTION_AND_ARENAS.map((v) => ({ name: v.name, tag: "Convention & Arena" }))
  ];

  return (
    <div
      className={`relative overflow-hidden py-4 border-y ${
        theme === "dark"
          ? "bg-chocolate-950 border-chocolate-800 text-cream-200"
          : "bg-cream-100 border-chocolate-700/10 text-chocolate-700"
      } marquee-container`}
      aria-label="Venue Footprint Ticker"
    >
      {/* Subtle edge fade overlays for luxury presentation */}
      <div
        className={`absolute top-0 bottom-0 left-0 w-24 z-10 pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-to-r from-chocolate-950 to-transparent"
            : "bg-gradient-to-r from-cream-100 to-transparent"
        }`}
      />
      <div
        className={`absolute top-0 bottom-0 right-0 w-24 z-10 pointer-events-none ${
          theme === "dark"
            ? "bg-gradient-to-l from-chocolate-950 to-transparent"
            : "bg-gradient-to-l from-cream-100 to-transparent"
        }`}
      />

      <div className="flex w-max animate-marquee marquee-content select-none items-center">
        {/* Set 1 */}
        {marqueeItems.map((item, index) => (
          <div
            key={`ticker-1-${index}`}
            className="flex items-center space-x-4 mx-6 group cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-500/60 group-hover:bg-bronze-500 transition-colors"></span>
            <span className="font-serif text-base sm:text-lg tracking-wider whitespace-nowrap text-chocolate-800 group-hover:text-bronze-600 transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-chocolate-400 font-medium px-2 py-0.5 border border-chocolate-700/10 rounded-sm">
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
            <span className="font-serif text-base sm:text-lg tracking-wider whitespace-nowrap text-chocolate-800 group-hover:text-bronze-600 transition-colors">
              {item.name}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-chocolate-400 font-medium px-2 py-0.5 border border-chocolate-700/10 rounded-sm">
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
