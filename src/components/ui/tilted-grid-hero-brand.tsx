import React from "react";
import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

export const EVAANAM_BRAND_IMAGES = [
  {
    src: "./images/home-highlights/vivo.png",
    alt: "Vivo Tech Experience Pavilion",
  },
  {
    src: "./images/gallery-weddings/IMG-6449-JPG.jpg",
    alt: "Grand Banquet Table & Service Alignment",
  },
  {
    src: "./images/home-highlights/indigo.png",
    alt: "IndiGo Leadership Conclave Registration",
  },
  {
    src: "./images/gallery-weddings/IMG-6650-JPG.jpg",
    alt: "Ceremonial Welcome & Aarti Hostesses",
  },
  {
    src: "./images/home-highlights/boman.png",
    alt: "VIP Keynote Escort: Boman Irani",
  },
  {
    src: "./images/gallery-corporate/IMG-20250419-WA0011-jpg.jpg",
    alt: "Corporate Summit Registration Desks",
  },
  {
    src: "./images/home-highlights/rajpal.png",
    alt: "Celebrity Handling: Rajpal Yadav",
  },
  {
    src: "./images/gallery-weddings/IMG-2923-JPG.jpg",
    alt: "Palace Courtyard Mandap Supervision",
  },
  {
    src: "./images/home-highlights/pronto.png",
    alt: "Brand Showcase & Product Launch: Pronto",
  },
  {
    src: "./images/gallery-corporate/IMG-20250419-WA0007-jpg.jpg",
    alt: "Trade Expo Stall Management",
  },
];

export function TiltedGridHeroBrandDemo() {
  return (
    <TiltedGridHero
      images={EVAANAM_BRAND_IMAGES}
      className="h-[560px] w-full rounded-2xl border border-bronze-500/20 bg-night-950/40 backdrop-blur-sm"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
        <div className="px-6">
          <span className="micro-label text-bronze-400 font-mono tracking-widest uppercase">
            Operations Showcase
          </span>
          <h2 className="editorial-heading text-balance text-3xl sm:text-5xl mt-3 text-cream-100 font-serif">
            Verified Event Deployments
          </h2>
        </div>
        <p className="max-w-lg text-balance px-6 text-xs sm:text-sm text-cream-300/70 font-sans leading-relaxed">
          Celebrity escorts, five-star banquet hospitality, and aviation conclave
          crews on active floors across Delhi NCR.
        </p>
      </div>
    </TiltedGridHero>
  );
}

export default TiltedGridHeroBrandDemo;
