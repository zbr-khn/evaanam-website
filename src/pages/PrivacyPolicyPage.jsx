import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";

export default function PrivacyPolicyPage() {
  return (
    <div className="animate-fade-in pt-32 pb-24 px-6 sm:px-8 lg:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Navigation & Breadcrumb */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center text-xs font-mono uppercase tracking-widest text-amber-700 dark:text-amber-400 hover:text-amber-600 dark:hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5 mr-2" />
            <span>Return to Home</span>
          </Link>
        </div>

        {/* Header Lockup */}
        <div className="space-y-4 border-b border-chocolate-700/10 dark:border-white/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 dark:text-amber-300 text-xs font-mono font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>LEGAL &amp; DATA GOVERNANCE</span>
          </div>
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-chocolate-950 dark:text-cream-50">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-chocolate-500 dark:text-night-dim">
            Effective Date: January 1, 2026 | Last Updated: November 2026
          </p>
          <p className="text-base text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
            {COMPANY_INFO.name} ("EVAANAM", "we", "our", or "us") is dedicated to protecting the privacy, confidentiality, and integrity of the personal data entrusted to us by event organizers, host families, corporate clients, and venue partners across Delhi NCR.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-chocolate-700 dark:text-night-muted font-light">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              1. Information We Collect
            </h2>
            <p>
              When you submit a manpower requisition, use our roster calculator, or contact our operations desk, we collect operational information necessary to plan and fulfill event staffing:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Details:</strong> Full name, telephone number, email address, company or organizing entity name.
              </li>
              <li>
                <strong>Event Specifications:</strong> Event dates, shift timings, venue location, required staffing categories, estimated attendee headcounts, and guest protocol requirements.
              </li>
              <li>
                <strong>Operational Notes:</strong> Uniform preferences, language proficiencies, VIP principal details, and special instructions.
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              2. How We Use Collected Information
            </h2>
            <p>
              Information collected through this website and our communication channels is utilized exclusively for genuine operational purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Formulating accurate crew rosters, shift allocations, and logistical planning.</li>
              <li>Transmitting booking confirmations, service agreements, and operational briefing documents.</li>
              <li>Coordinating pre-shift muster inspections, security access credentials, and venue gate passes.</li>
              <li>Ensuring accountability, supervisor oversight, and post-event operational reporting.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              3. Confidentiality on High-Profile Event Floors
            </h2>
            <p>
              We operate across luxury hotel ballrooms, diplomatic enclaves, and private corporate conclaves. Confidentiality is fundamental to our service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All deployed crew leads, stewards, hostesses, and shadows operate under strict non-disclosure obligations.</li>
              <li>Unauthorized photography, filming, social media posting, or disclosure of private guest corridors, ceremonial sanctums, or VIP green rooms is strictly forbidden.</li>
              <li>Client attendee lists, VIP itineraries, and guest registers remain confidential and are purged following post-event reconciliation.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              4. Data Sharing &amp; Third-Party Disclosure
            </h2>
            <p>
              We do not sell, rent, lease, or monetize your contact details or event specifications to third parties. Information is only shared under the following limited conditions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Venue Security &amp; Badging:</strong> Sharing crew name lists and authorized supervisor identification with hotel security or convention center management for contractor passes and loading dock clearance.
              </li>
              <li>
                <strong>Legal &amp; Regulatory Compliance:</strong> Where mandated by applicable Indian law, judicial decree, or law enforcement authorities.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              5. Data Security &amp; Storage
            </h2>
            <p>
              We maintain physical, electronic, and procedural safeguards to protect your personal and operational information against unauthorized access, loss, or alteration. All electronic communications and booking records are stored in access-controlled environments.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              6. Your Data Rights
            </h2>
            <p>
              You maintain the right to review, update, or request the deletion of your personal contact records from our operational dispatch database at any time. To exercise these rights, contact our operations desk in writing.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              7. Contact Operations Desk
            </h2>
            <p>
              For any questions regarding this Privacy Policy or our operational data practices, please reach out to:
            </p>
            <div className="p-6 rounded-2xl glass-card space-y-2 font-mono text-xs text-chocolate-800 dark:text-cream-200">
              <p><strong>Entity:</strong> {COMPANY_INFO.name}</p>
              <p><strong>Operations Hub:</strong> {COMPANY_INFO.address.full}</p>
              <p><strong>Official Email:</strong> {COMPANY_INFO.email}</p>
              <p><strong>Hotlines:</strong> {COMPANY_INFO.phones.map((p) => p.display).join(" / ")}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
