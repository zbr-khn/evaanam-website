import React from "react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import BackToTopButton from "./BackToTopButton";

/**
 * FloatingActions
 * Clean floating action stack:
 * 1. Back To Top (displays after scrolling)
 * 2. Dedicated WhatsApp Operations Dispatch
 */
export default function FloatingActions() {
  return (
    <div
      aria-label="Quick Floating Actions"
      className="fixed z-40 right-3 sm:right-6 bottom-20 lg:bottom-6 flex flex-col items-end space-y-2.5 sm:space-y-3 select-none pointer-events-none transition-all duration-300"
    >
      {/* 1. Back To Top Button */}
      <div className="pointer-events-auto">
        <BackToTopButton />
      </div>

      {/* 2. Direct WhatsApp Operations Button */}
      <div className="pointer-events-auto">
        <WhatsAppFloatingButton />
      </div>
    </div>
  );
}
