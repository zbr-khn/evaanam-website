import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import BackToTopButton from "./BackToTopButton";

/**
 * FloatingActions
 * Manages the vertical floating stack in the bottom-right corner:
 * [TOP]       1. Back To Top (displays ONLY after scrolling >= 1 entire page down)
 * [MIDDLE]    2. WhatsApp Button (fixed, always visible)
 * [BOTTOM]    3. Eva AI Assistant Button with Inverse Theme Palette
 *                - Light Mode: Renders with Dark Theme Palette (#081F18 deep green & gold)
 *                - Dark Mode: Renders with Light Theme Palette (#FCFAF6 alabaster white & chocolate)
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

      {/* 3. CLOUD POP-UP SPEECH BUBBLE FOR EVA (INVERSE THEME STYLED) */}
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
          <div className="relative flex items-center space-x-2 px-3.5 py-1.5 bg-[#081F18] dark:bg-[#FCFAF6] border-2 border-bronze-400 dark:border-bronze-500 rounded-full shadow-2xl backdrop-blur-md text-cream-50 dark:text-chocolate-950 hover:border-bronze-300 dark:hover:border-bronze-600 hover:scale-105 transition-all duration-300">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            <span className="text-[11px] font-sans font-extrabold tracking-wide uppercase text-cream-50 dark:text-chocolate-950 flex items-center space-x-1">
              <span>Meet AI Concierge</span>
              <Sparkles className="w-3 h-3 text-amber-300 dark:text-bronze-600 animate-pulse ml-0.5" />
            </span>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowCloudPop(false);
              }}
              className="text-cream-300/80 dark:text-chocolate-500 hover:text-cream-50 dark:hover:text-chocolate-950 p-0.5 ml-1 transition-colors rounded-full focus:outline-none"
              aria-label="Dismiss AI Concierge prompt"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Cloud Speech Bubble Pointer Tail */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 rotate-45 bg-[#081F18] dark:bg-[#FCFAF6] border-r-2 border-b-2 border-bronze-400 dark:border-bronze-500" />
          </div>
        </div>
      )}

      {/* 4. BOTTOM: Eva AI Assistant Trigger (INVERSE THEME STYLED) */}
      <div className="pointer-events-auto">
        <button
          onClick={() => {
            window.dispatchEvent(new CustomEvent("open-eva-chat"));
            setShowCloudPop(false);
          }}
          className="group flex items-center space-x-2.5 bg-[#081F18] dark:bg-[#FCFAF6] text-cream-50 dark:text-chocolate-950 pl-3.5 pr-4 py-2.5 rounded-full border-2 border-bronze-400 dark:border-bronze-500 shadow-xl hover:border-bronze-300 dark:hover:border-bronze-600 hover:shadow-2xl hover:scale-105 transition-all duration-300 focus:outline-none"
          aria-label="Chat with Eva · AI Operations Assistant"
        >
          {/* Animated Avatar Icon */}
          <div className="relative w-8 h-8 rounded-full bg-cream-100/15 dark:bg-chocolate-900/10 border border-bronze-400/60 dark:border-bronze-500/50 flex items-center justify-center text-amber-300 dark:text-bronze-600">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-emerald-500 rounded-full" />
          </div>

          <div className="flex flex-col items-start pr-0.5 text-left">
            <span className="text-[11.5px] font-sans font-extrabold uppercase tracking-wider text-cream-50 dark:text-chocolate-950 flex items-center space-x-1">
              <span>Meet Eva</span>
              <span className="text-[9px] px-1.5 py-0.2 bg-bronze-500/40 dark:bg-brand-green dark:text-cream-50 text-amber-200 rounded font-mono font-bold">AI</span>
            </span>
            <span className="text-[9px] font-mono text-bronze-300 dark:text-chocolate-600 font-medium">
              Online 24/7 · WhatsApp
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
