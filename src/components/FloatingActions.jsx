import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import BackToTopButton from "./BackToTopButton";

/**
 * FloatingActions
 * Manages the vertical floating stack in the bottom-right corner:
 * [TOP]       1. Back To Top (displays ONLY after scrolling >= 1 entire page down)
 * [MIDDLE]    2. WhatsApp Button (fixed, always visible)
 * [BOTTOM]    3. Eva AI Assistant Button with "Meet AI Concierge" Cloud Pop
 */
export default function FloatingActions() {
  const [showCloudPop, setShowCloudPop] = useState(true);

  return (
    <div
      aria-label="Quick Floating Actions"
      className="fixed z-40 right-3 sm:right-6 bottom-20 lg:bottom-6 flex flex-col items-end space-y-2.5 sm:space-y-3 select-none pointer-events-none transition-all duration-300"
    >
      {/* 1. TOP: Back To Top Button (Triggered after 1 full page scroll) */}
      <div className="pointer-events-auto">
        <BackToTopButton />
      </div>

      {/* 2. MIDDLE: WhatsApp Fixed Direct Button */}
      <div className="pointer-events-auto">
        <WhatsAppFloatingButton />
      </div>

      {/* 3. CLOUD POP-UP SPEECH BUBBLE FOR EVA */}
      {showCloudPop && (
        <div
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-eva-chat"));
            setShowCloudPop(false);
          }}
          className="pointer-events-auto animate-cloud-float cursor-pointer group mb-0.5"
          role="button"
          tabIndex={0}
          aria-label="Meet AI Concierge"
        >
          <div className="relative flex items-center space-x-2 px-3.5 py-1.5 bg-cream-50/95 dark:bg-night-850/95 border-2 border-bronze-500/60 rounded-full shadow-2xl backdrop-blur-md text-chocolate-950 dark:text-cream-50 hover:border-bronze-500 hover:scale-105 transition-all duration-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            <span className="text-[11px] font-sans font-extrabold tracking-wide uppercase text-chocolate-900 dark:text-cream-100 flex items-center space-x-1">
              <span>Meet AI Concierge</span>
              <Sparkles className="w-3 h-3 text-amber-500 animate-pulse ml-0.5" />
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCloudPop(false);
              }}
              className="text-chocolate-400 dark:text-night-muted hover:text-chocolate-900 dark:hover:text-cream-50 p-0.5 ml-1 transition-colors rounded-full focus:outline-none"
              aria-label="Dismiss AI Concierge prompt"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Cloud Speech Bubble Pointer Tail */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-cream-50 dark:bg-night-850 border-r-2 border-b-2 border-bronze-500/60" />
          </div>
        </div>
      )}

      {/* 4. BOTTOM: Eva AI Assistant Trigger (Bottom-most) */}
      <div className="pointer-events-auto">
        <button
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-eva-chat"));
            setShowCloudPop(false);
          }}
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
