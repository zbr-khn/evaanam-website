import React from "react";
import WhatsAppFloatingButton from "./WhatsAppFloatingButton";
import BackToTopButton from "./BackToTopButton";

export default function FloatingActions() {
  return (
    <div
      aria-label="Quick Actions"
      className="fixed z-40 right-4 sm:right-6 bottom-20 lg:bottom-8 flex flex-col items-center space-y-3.5 select-none"
    >
      {/* WhatsApp Quick Direct Link */}
      <WhatsAppFloatingButton />

      {/* Back To Top Circular Progress Button */}
      <BackToTopButton />
    </div>
  );
}
