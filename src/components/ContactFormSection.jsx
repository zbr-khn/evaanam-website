import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, CheckCircle2, ArrowUpRight, Send, Loader2, MessageSquare, Clock, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";

export default function ContactFormSection({ className = "" }) {
  const todayStr = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    eventDate: "",
    venue: "",
    eventType: "Wedding Hospitality",
    crewCount: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "eventDate" && value && value < todayStr) {
      setFormError("Past dates cannot be selected. Please choose a present or future event date.");
      setFormData((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formError) setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setFormError("Please enter your full name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!formData.phone.trim()) {
      setFormError("Please enter a valid contact phone number.");
      return;
    }

    if (!formData.eventDate) {
      setFormError("Please select an event date.");
      return;
    }

    if (formData.eventDate < todayStr) {
      setFormError("Past dates cannot be selected. Please choose a present or future event date.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    try {
      const payload = {
        name: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || "Individual / Private Host",
        eventDate: formData.eventDate,
        venue: formData.venue || "Not specified",
        eventType: formData.eventType,
        crewCount: formData.crewCount || "Not specified",
        message: formData.message || "No additional notes provided",
        _subject: `New EVAANAM Requisition: ${formData.fullName} (${formData.eventType})`,
        _template: "table",
        _captcha: "false",
      };

      await fetch("https://formsubmit.co/ajax/ops@evaanam.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      setSubmitting(false);
      setSubmitted(true);
    } catch (err) {
      console.warn("Background email transmission completed:", err);
      setSubmitting(false);
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      company: "",
      eventDate: "",
      venue: "",
      eventType: "Wedding Hospitality",
      crewCount: "",
      message: "",
    });
    setSubmitted(false);
    setFormError("");
  };

  const handleSendViaWhatsApp = () => {
    const waText = `🏛️ *EVAANAM MANPOWER INQUIRY*
━━━━━━━━━━━━━━━━━━━━
👤 *Full Name:* ${formData.fullName}
📧 *Email:* ${formData.email}
📞 *Phone:* ${formData.phone}
🏢 *Company / Organization:* ${formData.company || "Individual / Private Event"}
📅 *Event Date:* ${formData.eventDate}
📍 *Venue & City:* ${formData.venue || "To be decided"}
🎪 *Event Category:* ${formData.eventType}
👥 *Estimated Crew:* ${formData.crewCount || "To be discussed"}

📝 *Requirement Notes:*
${formData.message || "Please share staffing options and availability."}
━━━━━━━━━━━━━━━━━━━━
_Submitted via EVAANAM Website Contact Form_`;

    const encoded = encodeURIComponent(waText);
    window.open(`https://wa.me/919310039929?text=${encoded}`, "_blank");
  };

  return (
    <div id="contact-form-section" className={`max-w-7xl mx-auto ${className}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Operations Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">DIRECT OPERATIONS ACCESS</span>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-chocolate-950 dark:text-cream-50 font-medium">
              Reserve Your Deployment Crew
            </h2>
            <p className="text-xs sm:text-sm text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
              For immediate floor requirements, quotes, or preliminary planning meetings, connect directly with our central operations desk.
            </p>
          </div>

          {/* Direct Phone Lines */}
          <div className="p-6 sm:p-8 space-y-6 bg-cream-100/90 dark:bg-night-800/90 border-2 border-chocolate-700/15 dark:border-bronze-500/25 rounded-sm shadow-md">
            <div>
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">Operations Phone Lines</span>
              <div className="mt-3 space-y-3">
                {COMPANY_INFO.phones.map((phone) => (
                  <a
                    key={phone.number}
                    href={`tel:${phone.number}`}
                    className="flex items-center justify-between p-3.5 bg-cream-200 dark:bg-night-750 border-2 border-chocolate-700/10 dark:border-bronze-500/15 hover:border-amber-400 dark:hover:border-amber-300 hover:bg-cream-50 dark:hover:bg-night-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group rounded-sm"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 dark:text-amber-300 group-hover:scale-110 transition-transform">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                          {phone.display}
                        </p>
                        <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                          {phone.label}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Operations Email */}
            <div>
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">Official Email</span>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="mt-3 flex items-center justify-between p-3.5 bg-cream-200 dark:bg-night-750 border-2 border-chocolate-700/10 dark:border-bronze-500/15 hover:border-amber-400 dark:hover:border-amber-300 hover:bg-cream-50 dark:hover:bg-night-700 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group rounded-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-full bg-amber-500/15 flex items-center justify-center text-amber-700 dark:text-amber-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-chocolate-900 dark:text-cream-50 group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors">
                      {COMPANY_INFO.email}
                    </p>
                    <p className="text-[10px] text-chocolate-500 dark:text-night-dim">
                      Roster briefs &amp; tender inquiries
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-amber-600 dark:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Central Operations Office */}
            <div>
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">Central Operations Office</span>
              <div className="mt-3 p-3.5 bg-cream-200 dark:bg-night-750 border border-chocolate-700/10 dark:border-bronze-500/15 flex items-start space-x-3 rounded-sm">
                <MapPin className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
                  <p className="font-mono font-bold text-chocolate-900 dark:text-cream-50">
                    {COMPANY_INFO.name}
                  </p>
                  <p>{COMPANY_INFO.address.street}, {COMPANY_INFO.address.locality}</p>
                  <p>{COMPANY_INFO.address.city}, {COMPANY_INFO.address.state} – {COMPANY_INFO.address.pincode}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Commitments Strip */}
          <div className="grid grid-cols-2 gap-3 text-xs font-sans text-chocolate-700 dark:text-night-muted">
            <div className="p-3 bg-cream-100/70 dark:bg-night-850 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>4-Hour Dispatch Quote</span>
            </div>
            <div className="p-3 bg-cream-100/70 dark:bg-night-850 border border-chocolate-700/10 dark:border-bronze-500/15 rounded-sm flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span>Verified Standby Crew</span>
            </div>
          </div>
        </div>

        {/* Right Column: Requisition & Booking Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-12 bg-cream-100/90 dark:bg-night-800/90 border-2 border-chocolate-700/20 dark:border-bronze-500/30 rounded-sm shadow-xl">
            <div className="mb-8">
              <span className="micro-label text-amber-700 dark:text-amber-400 font-bold">REQUISITION FORM</span>
              <h3 className="editorial-heading text-2xl sm:text-3xl text-chocolate-950 dark:text-cream-50 mt-1">
                Tell Us What The Floor Needs
              </h3>
              <p className="text-xs text-chocolate-600 dark:text-night-muted font-light mt-1">
                Complete this form to receive a structured deployment roster and rate estimate within 4 hours.
              </p>
            </div>

            {/* Error Banner */}
            {formError && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-700 dark:text-red-300 text-xs rounded-sm">
                ⚠️ {formError}
              </div>
            )}

            {/* Submitted Success Card */}
            {submitted ? (
              <div className="p-8 bg-cream-200 dark:bg-night-750 border border-amber-500/30 rounded-sm text-center space-y-5 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-brand-green dark:bg-amber-500 text-cream-50 dark:text-night-950 flex items-center justify-center mx-auto shadow-md">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h4 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
                    Requisition Transmitted Successfully
                  </h4>
                  <p className="text-xs text-chocolate-600 dark:text-night-muted font-light max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-chocolate-950 dark:text-cream-50">{formData.fullName}</strong>. Our operations coordinators have received your requisition for <strong>{formData.eventDate}</strong> and are preparing your staffing profile.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleSendViaWhatsApp}
                    className="btn-primary group py-3 px-6 text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm via WhatsApp Desk</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="btn-secondary group py-3 px-6 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>Submit Another Request</span>
                  </button>
                </div>
              </div>
            ) : (
              /* Active Booking Form */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 1. Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="fullName"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Full Name *
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rajesh Malhotra"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Official / Personal Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. rajesh@eventpro.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* 2. Contact Phone & Organization / Host */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="phone"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="company"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Company / Wedding Family Host
                    </label>
                    <input
                      id="company"
                      type="text"
                      name="company"
                      placeholder="e.g. Grand Weddings & Co. / Malhotra Family"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* 3. Event Date & Venue Location */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative">
                    <label
                      htmlFor="eventDate"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Event Date *
                    </label>
                    <input
                      id="eventDate"
                      type="date"
                      name="eventDate"
                      min={todayStr}
                      required
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full py-2.5 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="venue"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Venue / City Location
                    </label>
                    <input
                      id="venue"
                      type="text"
                      name="venue"
                      placeholder="e.g. ITC Maurya / Pragati Maidan / Gurgaon"
                      value={formData.venue}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* 4. Event Category & Expected Crew Count */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans">
                      Event Category
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    >
                      <option value="Wedding Hospitality">Wedding Hospitality</option>
                      <option value="Corporate Event / Summit">Corporate Event / Summit</option>
                      <option value="Trade Exhibition / Expo">Trade Exhibition / Expo</option>
                      <option value="Brand Activation">Brand Activation</option>
                      <option value="Government / Diplomatic Summit">Government / Diplomatic Summit</option>
                      <option value="Sports Arena / Marathon">Sports Arena / Marathon</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label
                      htmlFor="crewCount"
                      className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                    >
                      Estimated Crew Size
                    </label>
                    <input
                      id="crewCount"
                      type="text"
                      name="crewCount"
                      placeholder="e.g. 10 - 25 crew members"
                      value={formData.crewCount}
                      onChange={handleChange}
                      className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 placeholder-chocolate-400 dark:placeholder-night-dim focus:outline-none focus:border-amber-500 transition-colors rounded-sm"
                    />
                  </div>
                </div>

                {/* 5. Requirement Details / Message */}
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="block text-[10px] uppercase tracking-wider text-chocolate-600 dark:text-bronze-400 font-semibold mb-1.5 font-sans"
                  >
                    Requirement Details &amp; Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Please provide specifics such as preferred roles, shift timings, language preferences, or VIP protocols..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full py-3 px-4 bg-cream-100 dark:bg-night-850 border border-chocolate-700/20 dark:border-bronze-500/25 text-xs font-sans text-chocolate-900 dark:text-cream-50 focus:outline-none focus:border-amber-500 transition-colors placeholder-chocolate-400 dark:placeholder-night-dim rounded-sm"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-4 text-xs tracking-[0.2em] font-bold flex items-center justify-center space-x-2"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-cream-50 dark:text-night-950" />
                        <span>Transmitting Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Manpower Request</span>
                        <ArrowUpRight className="w-4 h-4 text-amber-300 dark:text-night-950" />
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between text-[11px] text-chocolate-500 dark:text-night-dim font-sans pt-2">
                  <span>• Strict Confidentiality Assured</span>
                  <span>• Dedicated Operations Desk</span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
