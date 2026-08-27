import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import MobileStickyCTA from "./components/MobileStickyCTA";
import FloatingActions from "./components/FloatingActions";
import SignaturePreloader from "./components/SignaturePreloader";
import CustomCursor from "./components/CustomCursor";
import GeometricMarginFrame from "./components/GeometricMarginFrame";
import DynamicScrollGradient from "./components/DynamicScrollGradient";
import useScrollBackground from "./hooks/useScrollBackground";

import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import VenuesPage from "./pages/VenuesPage";
import WhyUsPage from "./pages/WhyUsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import LocationPage from "./pages/LocationPage";

function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center pt-32 pb-20 px-6 text-center bg-transparent">
      <div className="max-w-md space-y-6">
        <span className="micro-label text-bronze-600 dark:text-bronze-400">PAGE NOT FOUND</span>
        <h1 className="editorial-heading text-5xl text-chocolate-950 dark:text-cream-50">
          The requested floor does not exist.
        </h1>
        <p className="text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
          The page you are looking for may have been moved or is undergoing operational reorganization.
        </p>
        <div className="pt-4 flex items-center justify-center space-x-4">
          <Link to="/" className="btn-primary">
            Return to Homepage
          </Link>
          <Link to="/services" className="btn-secondary">
            View Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [showPreloader, setShowPreloader] = useState(true);
  
  // Register global scroll background color shifts
  useScrollBackground();

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-chocolate-700 dark:text-cream-200 font-sans selection:bg-bronze-500 selection:text-chocolate-950 transition-colors duration-400 relative">
      {/* Dynamic Scroll-Driven Ambient Atmospheric Gradient */}
      <DynamicScrollGradient />

      {/* Luxury Custom Dynamic Cursor (Desktop) */}
      <CustomCursor />

      {/* Architectural Geometric Margin Frame & Lines */}
      <GeometricMarginFrame />

      <ScrollToTop />
      
      {/* Signature Preloader component */}
      {showPreloader && (
        <SignaturePreloader onComplete={() => setShowPreloader(false)} />
      )}

      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/venues" element={<VenuesPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Floating Actions: Live Progress Back-To-Top + Dedicated WhatsApp Button */}
      <FloatingActions />

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
