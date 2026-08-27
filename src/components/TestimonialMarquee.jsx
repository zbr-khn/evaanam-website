import React from "react";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { TESTIMONIALS } from "../data/evaanamData";

export default function TestimonialMarquee({ className = "", speed = "normal" }) {
  // Duplicate array for seamless infinite looping ribbon
  const ribbonCards = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <div className={`relative w-full overflow-hidden select-none py-6 ${className}`}>
      {/* Left and Right Luxury Gradient Fades */}
      <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-cream-100 dark:from-night-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-cream-100 dark:from-night-900 to-transparent z-10 pointer-events-none" />

      {/* Infinite Looping Track */}
      <div className="flex w-max animate-marquee space-x-6 hover:[animation-play-state:paused]">
        {ribbonCards.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="w-[320px] sm:w-[380px] p-6 bg-cream-200/90 dark:bg-night-800 border border-chocolate-700/15 dark:border-bronze-500/20 rounded-sm shadow-sm hover:border-bronze-500/50 transition-all duration-300 flex flex-col justify-between space-y-4 group shrink-0"
          >
            {/* Top Bar: 5 Golden Stars & Category Tag */}
            <div className="flex items-center justify-between">
              {/* 5 Stars */}
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3.5 h-3.5 fill-amber-400 text-amber-400 drop-shadow-sm"
                  />
                ))}
                <span className="text-[10px] font-mono font-bold text-amber-600 dark:text-amber-400 ml-1.5">
                  5.0
                </span>
              </div>

              {/* Category Pill */}
              <span className="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 bg-cream-100 dark:bg-night-850 text-chocolate-700 dark:text-bronze-400 border border-chocolate-700/10 dark:border-bronze-500/20 rounded">
                {item.category}
              </span>
            </div>

            {/* Client Quote */}
            <div className="space-y-2">
              <Quote className="w-4 h-4 text-bronze-400 opacity-60" />
              <p className="font-serif text-sm sm:text-base italic text-chocolate-950 dark:text-cream-50 leading-snug line-clamp-3">
                "{item.quote}"
              </p>
            </div>

            {/* Bottom Author & Location */}
            <div className="pt-3 border-t border-chocolate-700/10 dark:border-bronze-500/15 flex items-center justify-between">
              <div>
                <h4 className="text-xs font-semibold text-chocolate-900 dark:text-cream-50 font-sans flex items-center space-x-1.5">
                  <span>{item.author}</span>
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                </h4>
                <p className="text-[10.5px] text-chocolate-500 dark:text-night-dim font-light">
                  {item.role}
                </p>
              </div>

              <span className="text-[10px] font-mono text-bronze-600 dark:text-bronze-400 uppercase tracking-wider">
                {item.location}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
