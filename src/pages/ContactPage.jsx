import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle2, ArrowUpRight, Clock, ShieldCheck, Send, Loader2 } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";
import FollowTheFloor from "../components/FollowTheFloor";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    eventDate: "",
    venue: "",
    crewCount: "",
    eventType: "Wedding Hospitality",
    requirementDetails: "",
  });

  const [focusedField, setFocusedField] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormError("Please provide your full name and a contact number.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    // Simulate realistic API dispatch with loading state
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      phone: "",
      eventDate: "",
      venue: "",
      crewCount: "",
      eventType: "Wedding Hospitality",
      requirementDetails: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="animate-fade-in pt-28">
      {/* 1. DEDICATED PAGE INTRODUCTION HERO */}
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 border-b border-chocolate-700/10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">START A CONVERSATION</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950">
              Planning an event? <br />
              <span className="italic text-bronze-600">Let's build your team.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 font-light leading-relaxed">
              Tell us what the floor needs. Share your event dates, venue location, and staffing expectations. Our senior operations desk will structure an optimized deployment roster.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & DIRECT DETAILS SPLIT SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Operations Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="micro-label text-bronze-600">DIRECT ACCESS</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 font-medium">
                  Operations Desk &amp; Registered Office
                </h2>
                <p className="text-xs sm:text-sm text-chocolate-600 font-light leading-relaxed">
                  For immediate floor requirements, urgent replacements, or preliminary planning meetings, connect directly with our central desk.
                </p>
              </div>

              {/* Direct Phone Lines */}
              <div className="card-luxury p-6 sm:p-8 space-y-6">
                <div>
                  <span className="micro-label text-bronze-600">Operations Phone Lines</span>
                  <div className="mt-3 space-y-3">
                    {COMPANY_INFO.phones.map((phone) => (
                      <a
                        key={phone.number}
                        href={`tel:${phone.number}`}
                        className="flex items-center justify-between p-3.5 bg-cream-200 border border-chocolate-700/10 hover:border-bronze-500/50 text-chocolate-900 group transition-all"
                      >
                        <div className="flex items-center space-x-3">
                          <Phone className="w-4 h-4 text-bronze-600 group-hover:scale-110 transition-transform" />
                          <span className="font-mono text-sm font-semibold">{phone.display}</span>
                        </div>
                        <span className="text-[10px] uppercase tracking-wider text-chocolate-500 font-sans">
                          {phone.label}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email */}
                <div className="pt-4 border-t border-chocolate-700/10">
                  <span className="micro-label text-bronze-600">Direct Email</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-2 flex items-center space-x-3 text-sm text-chocolate-900 font-mono hover:text-bronze-600 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-bronze-500" />
                    <span>{COMPANY_INFO.email}</span>
                  </a>
                </div>

                {/* Physical Address */}
                <div className="pt-4 border-t border-chocolate-700/10">
                  <span className="micro-label text-bronze-600">Registered Office</span>
                  <div className="mt-2 flex items-start space-x-3 text-xs text-chocolate-600 font-light leading-relaxed">
                    <MapPin className="w-4 h-4 text-bronze-500 shrink-0 mt-0.5" />
                    <span>{COMPANY_INFO.address.full}</span>
                  </div>
                </div>

                {/* SLA Assurance */}
                <div className="pt-4 border-t border-chocolate-700/10 flex items-center space-x-2 text-[11px] text-chocolate-500">
                  <Clock className="w-3.5 h-3.5 text-bronze-600" />
                  <span>Average Response Time: Under 2 Hours</span>
                </div>
              </div>

              {/* Corporate Credentials Box */}
              <div className="p-6 bg-cream-200 border border-chocolate-700/10 space-y-2 text-xs text-chocolate-600 font-mono">
                <div className="flex justify-between">
                  <span>CIN:</span>
                  <span className="text-chocolate-950 font-semibold">{COMPANY_INFO.cin}</span>
                </div>
                <div className="flex justify-between">
                  <span>GSTIN:</span>
                  <span className="text-chocolate-950 font-semibold">{COMPANY_INFO.gstin}</span>
                </div>
              </div>
            </div>

            {/* Right Column: Premium Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-cream-50 border border-chocolate-700/15 p-8 sm:p-12 shadow-sm relative">
                {/* Subtle top bronze accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-bronze-500"></div>

                {submitted ? (
                  <div className="py-12 text-center space-y-6 animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-bronze-500/15 text-bronze-600 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-2">
                      <span className="micro-label text-bronze-600">Requirement Received</span>
                      <h3 className="font-serif text-3xl text-chocolate-950">
                        Thank You, {formData.fullName}
                      </h3>
                      <p className="text-xs sm:text-sm text-chocolate-600 font-light max-w-md mx-auto leading-relaxed">
                        Our Senior Operations Manager has received your briefing for <strong>{formData.venue || "your event"}</strong> on <strong>{formData.eventDate || "upcoming dates"}</strong> and will reach out shortly.
                      </p>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="btn-secondary text-xs"
                      >
                        Submit Another Requirement
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <span className="micro-label">MANPOWER SPECIFICATION FORM</span>
                      <h3 className="font-serif text-2xl sm:text-3xl text-chocolate-950 font-medium mt-1">
                        Tell Us What The Floor Needs
                      </h3>
                    </div>

                    {formError && (
                      <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs font-sans">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name Field with Floating Label */}
                      <div className="relative">
                        <label
                          htmlFor="fullName"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "fullName" || formData.fullName
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 font-semibold"
                              : "top-4 text-xs text-chocolate-500"
                          }`}
                        >
                          Full Name *
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onFocus={() => setFocusedField("fullName")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "phone" || formData.phone
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 font-semibold"
                              : "top-4 text-xs text-chocolate-500"
                          }`}
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          placeholder=""
                          value={formData.phone}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Event Date Field */}
                      <div className="relative">
                        <label
                          htmlFor="eventDate"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "eventDate" || formData.eventDate
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 font-semibold"
                              : "top-4 text-xs text-chocolate-500"
                          }`}
                        >
                          Event Date(s)
                        </label>
                        <input
                          id="eventDate"
                          type="text"
                          name="eventDate"
                          placeholder="e.g. 15-18 Nov 2026"
                          value={formData.eventDate}
                          onFocus={() => setFocusedField("eventDate")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>

                      {/* Venue Field */}
                      <div className="relative">
                        <label
                          htmlFor="venue"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "venue" || formData.venue
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 font-semibold"
                              : "top-4 text-xs text-chocolate-500"
                          }`}
                        >
                          Venue / City
                        </label>
                        <input
                          id="venue"
                          type="text"
                          name="venue"
                          placeholder="e.g. ITC Maurya / Pragati Maidan"
                          value={formData.venue}
                          onFocus={() => setFocusedField("venue")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Event Type Selector */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-chocolate-600 font-semibold mb-1.5 font-sans">
                          Event Category
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full py-3.5 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                        >
                          <option value="Wedding Hospitality">Wedding Hospitality</option>
                          <option value="Corporate Event / Summit">Corporate Event / Summit</option>
                          <option value="Trade Exhibition / Expo">Trade Exhibition / Expo</option>
                          <option value="Brand Activation">Brand Activation</option>
                          <option value="Government / Diplomatic Summit">Government / Diplomatic Summit</option>
                          <option value="Sports Arena / Marathon">Sports Arena / Marathon</option>
                        </select>
                      </div>

                      {/* Expected Crew Count Field */}
                      <div className="relative">
                        <label
                          htmlFor="crewCount"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "crewCount" || formData.crewCount
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 font-semibold"
                              : "top-4 text-xs text-chocolate-500"
                          }`}
                        >
                          Expected Crew Count
                        </label>
                        <input
                          id="crewCount"
                          type="text"
                          name="crewCount"
                          placeholder="e.g. 15-25 crew members"
                          value={formData.crewCount}
                          onFocus={() => setFocusedField("crewCount")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Requirement Details Textarea */}
                    <div className="relative">
                      <label
                        htmlFor="requirementDetails"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === "requirementDetails" || formData.requirementDetails
                            ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 font-semibold"
                            : "top-4 text-xs text-chocolate-500"
                        }`}
                      >
                        Requirement Details
                      </label>
                      <textarea
                        id="requirementDetails"
                        name="requirementDetails"
                        rows={4}
                        placeholder={focusedField === "requirementDetails" ? "Tell Us What The Floor Needs (roles needed, shift hours, VIP requirements...)" : ""}
                        value={formData.requirementDetails}
                        onFocus={() => setFocusedField("requirementDetails")}
                        onBlur={() => setFocusedField(null)}
                        onChange={handleChange}
                        className="w-full pt-7 pb-3 px-4 bg-cream-100 border border-chocolate-700/20 text-xs font-sans text-chocolate-900 focus:outline-none focus:border-bronze-500 transition-colors"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="btn-primary w-full py-4 text-xs tracking-[0.2em] font-semibold flex items-center justify-center space-x-2"
                      >
                        {submitting ? (
                          <>
                            <Loader2 className="w-4 h-4 animate-spin text-cream-50" />
                            <span>Transmitting Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Manpower</span>
                            <ArrowUpRight className="w-4 h-4 text-bronze-300" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-chocolate-500 font-sans pt-2">
                      <span>• Strict Confidentiality Assured</span>
                      <span>• 2-Hour Response Guarantee</span>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SOCIAL / FOLLOW THE FLOOR */}
      <FollowTheFloor showHeader={true} />
    </div>
  );
}
