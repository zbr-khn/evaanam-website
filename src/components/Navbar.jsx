import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import EVAANAMGeometricMark from "./EVAANAMGeometricMark";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Venues", path: "/venues" },
  { name: "Why Us", path: "/why-us" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-cream-200/95 backdrop-blur-md border-b border-chocolate-700/10 py-4 shadow-sm"
            : "bg-cream-200/80 backdrop-blur-sm border-b border-chocolate-700/5 py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Logo / Wordmark */}
          <Link
            to="/"
            className="group flex items-center space-x-3 focus:outline-none"
            aria-label="EVAANAM Home"
          >
            <EVAANAMGeometricMark size={34} className="shrink-0 group-hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-1.5">
                <span className="font-serif text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-chocolate-700 uppercase group-hover:text-bronze-500 transition-colors duration-300">
                  EVAANAM
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-500 inline-block mb-1"></span>
              </div>
              <span className="text-[8.5px] uppercase tracking-[0.26em] font-sans font-semibold text-bronze-600 -mt-1 hidden sm:block">
                Hospitality &amp; Operations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 font-sans ${
                    isActive
                      ? "text-chocolate-950 font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-bronze-500"
                      : "text-chocolate-600 hover:text-chocolate-950"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              <span>Request Manpower</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-2 text-bronze-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <Link
              to="/contact"
              className="px-3.5 py-2 bg-chocolate-700 text-cream-50 text-[11px] font-sans font-semibold uppercase tracking-[0.15em]"
            >
              Request
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-chocolate-700 hover:text-bronze-500 focus:outline-none transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream-200 lg:hidden transition-all duration-500 ease-in-out flex flex-col justify-between pt-24 pb-8 px-6 sm:px-10 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="flex flex-col space-y-6 pt-4">
          <div className="micro-label">Navigation</div>
          <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-2xl sm:text-3xl font-serif font-light transition-all flex items-center justify-between py-2 border-b border-chocolate-700/10 ${
                    isActive
                      ? "text-chocolate-950 font-normal pl-2 border-bronze-500"
                      : "text-chocolate-600 hover:text-chocolate-900"
                  }`
                }
              >
                <span>{link.name}</span>
                <span className="text-xs font-sans font-normal text-bronze-600 tracking-widest">
                  0{index + 1}
                </span>
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="pt-8 border-t border-chocolate-700/15 space-y-6">
          <Link
            to="/contact"
            className="w-full btn-primary py-4 text-center justify-center text-sm"
          >
            Request Manpower On Floor
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans text-chocolate-600">
            <div>
              <p className="micro-label mb-1">Direct Operations</p>
              <div className="space-y-1">
                <a
                  href={`tel:${COMPANY_INFO.phones[0].number}`}
                  className="flex items-center space-x-2 hover:text-bronze-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-bronze-500" />
                  <span>{COMPANY_INFO.phones[0].display}</span>
                </a>
                <a
                  href={`tel:${COMPANY_INFO.phones[1].number}`}
                  className="flex items-center space-x-2 hover:text-bronze-600 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-bronze-500" />
                  <span>{COMPANY_INFO.phones[1].display}</span>
                </a>
              </div>
            </div>
            <div>
              <p className="micro-label mb-1">HQ &amp; Registered Desk</p>
              <p className="text-chocolate-500 text-[11px] leading-relaxed">
                New Friends Colony, New Delhi – 110025
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
