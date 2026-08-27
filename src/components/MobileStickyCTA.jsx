import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";

export default function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 250px, but hide on /contact page
      if (window.scrollY > 250 && location.pathname !== "/contact") {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 lg:hidden p-3 bg-cream-200/95 backdrop-blur-md border-t border-chocolate-700/15 animate-fade-in shadow-lg">
      <div className="flex items-center space-x-2">
        <a
          href={`tel:${COMPANY_INFO.phones[0].number}`}
          className="flex-1 py-3 px-4 bg-cream-100 border border-chocolate-700/20 text-chocolate-800 text-xs font-semibold uppercase tracking-wider flex items-center justify-center space-x-1.5"
          aria-label="Call EVAANAM Operations"
        >
          <Phone className="w-3.5 h-3.5 text-bronze-600" />
          <span>Call Ops</span>
        </a>

        <Link
          to="/contact"
          className="flex-[2] py-3 px-4 bg-chocolate-700 text-cream-50 text-xs font-semibold uppercase tracking-widest flex items-center justify-center space-x-1.5 hover:bg-bronze-500 hover:text-chocolate-950 transition-colors"
        >
          <span>Request Crew</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-bronze-300" />
        </Link>
      </div>
    </div>
  );
}
