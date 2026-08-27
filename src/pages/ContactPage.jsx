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
      <section className="py-20 px-6 sm:px-8 lg:px-12 bg-cream-200 dark:bg-night-900 border-b border-chocolate-700/10 dark:border-bronze-500/15">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-6">
            <span className="micro-label">START A CONVERSATION</span>
            <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-chocolate-950 dark:text-cream-50">
              Planning an event? <br />
              <span className="italic text-bronze-600 dark:text-bronze-400">Let's build your team.</span>
            </h1>
            <p className="text-base sm:text-lg text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
              Tell us what the floor needs. Share your event dates, venue location, and staffing expectations. Our senior operations desk will structure an optimized deployment roster.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MAIN FORM & DIRECT DETAILS SPLIT SECTION */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 bg-cream-100 dark:bg-night-850">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Direct Operations Information */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="micro-label text-bronze-600 dark:text-bronze-400">DIRECT ACCESS</span>
                <h2 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                  Operations Desk &amp; Registered Office
                </h2>
                <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light leading-relaxed">
                  For immediate floor requirements, urgent replacements, or preliminary planning meetings, connect directly with our central desk.
                </p>
              </div>

              {/* Direct Phone Lines */}
              <div className="card-luxury p-6 sm:p-8 space-y-6 dark:bg-night-800 dark:border-bronze-500/20">
                <div>
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">Operations Phone Lines</span>
                  <div className="mt-3 space-y-3">
                    {COMPANY_INFO.phones.map((phone) => (
                      <a
                        key={phone.number}
                        href={`tel:${phone.number}`}
                        className="flex items-center justify-between p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 hover:border-bronze-500/40 transition-all group"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-cream-100 dark:bg-night-850 flex items-center justify-center text-bronze-600 dark:text-bronze-400 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="block font-serif text-lg text-chocolate-950 dark:text-cream-50 font-medium">
                              {phone.display}
                            </span>
                            <span className="text-[10px] uppercase font-mono text-chocolate-500 dark:text-night-dim">
                              {phone.label}
                            </span>
                          </div>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-bronze-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Email Direct */}
                <div className="pt-2">
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">Email Dossier Desk</span>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="mt-2 flex items-center space-x-3 p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 hover:border-bronze-500/40 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-full bg-cream-100 dark:bg-night-850 flex items-center justify-center text-bronze-600 dark:text-bronze-400 group-hover:bg-brand-green dark:group-hover:bg-bronze-500 group-hover:text-cream-50 dark:group-hover:text-night-950 transition-colors">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="block font-mono text-xs font-semibold text-chocolate-950 dark:text-cream-50">
                        {COMPANY_INFO.email}
                      </span>
                      <span className="text-[10px] text-chocolate-500 dark:text-night-dim">
                        RFPs &amp; Manpower Inquiries
                      </span>
                    </div>
                  </a>
                </div>

                {/* Physical Location */}
                <div className="pt-2">
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">Registered Office</span>
                  <div className="mt-2 flex items-start space-x-3 p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15">
                    <MapPin className="w-4 h-4 text-bronze-500 shrink-0 mt-0.5" />
                    <p className="text-xs text-chocolate-600 dark:text-night-muted leading-relaxed font-light">
                      {COMPANY_INFO.address.full}
                    </p>
                  </div>
                </div>

                {/* Operations Guarantees */}
                <div className="pt-4 border-t border-chocolate-700/10 dark:border-night-700 space-y-2">
                  <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                    <Clock className="w-4 h-4 text-bronze-500 shrink-0" />
                    <span>2-Hour Rapid Response Window</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-chocolate-700 dark:text-cream-200">
                    <ShieldCheck className="w-4 h-4 text-bronze-500 shrink-0" />
                    <span>Strict Client &amp; Event Confidentiality</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Structured Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="card-luxury p-8 sm:p-12 shadow-sm border border-chocolate-700/15 dark:border-bronze-500/20 dark:bg-night-800">
                <div className="space-y-2 mb-8">
                  <span className="micro-label text-bronze-600 dark:text-bronze-400">MANPOWER REQUISITION FORM</span>
                  <h3 className="font-serif text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
                    Tell Us What The Floor Needs
                  </h3>
                  <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light">
                    Complete the requisition below. Our operations team will prepare tailored crew profiles and deployment schedules.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 bg-cream-200 dark:bg-night-750 border border-bronze-500/40 text-center space-y-4 animate-fade-in">
                    <div className="w-14 h-14 rounded-full bg-brand-green dark:bg-bronze-500 text-cream-50 dark:text-night-950 flex items-center justify-center mx-auto shadow-md">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
                      Manpower Request Dispatched
                    </h4>
                    <p className="text-xs sm:text-sm text-chocolate-600 dark:text-night-muted font-light max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-chocolate-900 dark:text-cream-100">{formData.fullName}</strong>. Our senior duty supervisor will review your requirements and reach out at <strong className="text-chocolate-900 dark:text-cream-100">{formData.phone}</strong> within 2 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="btn-secondary text-xs"
                      >
                        Submit Another Requisition
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {formError && (
                      <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs font-sans">
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
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-semibold"
                              : "top-4 text-xs text-chocolate-500 dark:text-night-muted"
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
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>

                      {/* Phone Number Field */}
                      <div className="relative">
                        <label
                          htmlFor="phone"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "phone" || formData.phone
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-semibold"
                              : "top-4 text-xs text-chocolate-500 dark:text-night-muted"
                          }`}
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          onChange={handleChange}
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors"
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
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-semibold"
                              : "top-4 text-xs text-chocolate-500 dark:text-night-muted"
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
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>

                      {/* Venue Field */}
                      <div className="relative">
                        <label
                          htmlFor="venue"
                          className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                            focusedField === "venue" || formData.venue
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-semibold"
                              : "top-4 text-xs text-chocolate-500 dark:text-night-muted"
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
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Event Type Selector */}
                      <div>
                        <label className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-night-muted font-semibold mb-1.5 font-sans">
                          Event Category
                        </label>
                        <select
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                          className="w-full py-3.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors"
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
                              ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-semibold"
                              : "top-4 text-xs text-chocolate-500 dark:text-night-muted"
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
                          className="w-full pt-6 pb-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-bronze-500 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Requirement Details Textarea */}
                    <div className="relative">
                      <label
                        htmlFor="requirementDetails"
                        className={`absolute left-4 transition-all duration-200 pointer-events-none ${
                          focusedField === "requirementDetails" || formData.requirementDetails
                            ? "top-2 text-[10px] uppercase tracking-wider text-bronze-600 dark:text-bronze-400 font-semibold"
                            : "top-4 text-xs text-chocolate-500 dark:text-night-muted"
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
                        className="w-full pt-7 pb-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-bronze-500 transition-colors"
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
                            <Loader2 className="w-4 h-4 animate-spin text-cream-50 dark:text-night-950" />
                            <span>Transmitting Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Manpower</span>
                            <ArrowUpRight className="w-4 h-4 text-bronze-300 dark:text-night-950" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-[11px] text-chocolate-500 dark:text-night-dim font-sans pt-2">
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
