import React from "react";
import { Sparkles } from "lucide-react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import BackToTopButton from "./BackToTopButton";

/**
 * FloatingActions
 * Manages the vertical floating stack in the bottom-right corner:
 * [TOP]       1. Back To Top (displays ONLY after scrolling >= 1 entire page down)
 * [MIDDLE]    2. WhatsApp Button (fixed, always visible)
 * [BOTTOM]    3. Eva AI Assistant Button (bottom-most)
 */
export default function FloatingActions() {
  return (
    <div
      aria-label="Quick Floating Actions"
      className="fixed z-40 right-4 sm:right-6 bottom-6 flex flex-col items-end space-y-3 select-none pointer-events-none"
    >
      {/* 1. TOP: Back To Top Button (Triggered after 1 full page scroll) */}
      <div className="pointer-events-auto">
        <BackToTopButton />
      </div>

      {/* 2. MIDDLE: WhatsApp Fixed Direct Button */}
      <div className="pointer-events-auto">
        <WhatsAppFloatingButton />
      </div>

      {/* 3. BOTTOM: Eva AI Assistant Trigger (Bottom-most) */}
      <div className="pointer-events-auto">
        <button
          onClick={() => window.dispatchEvent(new CustomEvent("open-eva-chat"))}
          className="group flex items-center space-x-2.5 bg-brand-green dark:bg-night-800 text-cream-50 dark:text-cream-100 pl-3.5 pr-4 py-2.5 rounded-full border border-bronze-500/40 shadow-xl hover:border-bronze-500 hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none"
          aria-label="Chat with Eva · AI Operations Assistant"
        >
          {/* Animated Avatar Icon */}
          <div className="relative w-8 h-8 rounded-full bg-cream-100/10 border border-bronze-400/50 flex items-center justify-center text-amber-300">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>

          <div className="flex flex-col items-start pr-0.5 text-left">
            <span className="text-[11.5px] font-sans font-bold uppercase tracking-wider text-cream-50 flex items-center space-x-1">
              <span>Meet Eva</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-bronze-500/30 text-amber-300 rounded font-mono">AI</span>
            </span>
            <span className="text-[9px] font-mono text-bronze-300">
              Online 24/7 · WhatsApp
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
