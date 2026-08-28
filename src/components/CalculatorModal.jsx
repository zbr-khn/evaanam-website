import React, { useEffect } from "react";
import { X } from "lucide-react";
import ManpowerCalculator from "./ManpowerCalculator";

export default function CalculatorModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-night-950/90 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl max-h-[92vh] overflow-y-auto bg-cream-50 dark:bg-night-900 border-2 border-chocolate-700/20 dark:border-bronze-500/30 rounded-sm shadow-2xl p-4 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-cream-200 dark:bg-night-800 hover:bg-brand-green dark:hover:bg-bronze-500 text-chocolate-900 dark:text-cream-100 hover:text-cream-50 dark:hover:text-night-950 transition-all border border-chocolate-700/10 dark:border-bronze-500/20 focus:outline-none z-20 shadow-md"
          aria-label="Close Calculator"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Embedded Calculator */}
        <ManpowerCalculator />
      </div>
    </div>
  );
}
