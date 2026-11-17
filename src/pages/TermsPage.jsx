import React from "react";
import { Link } from "react-router-dom";
import { FileText, ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
import { COMPANY_INFO } from "../data/evaanamData";

export default function TermsPage() {
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
            <FileText className="w-3.5 h-3.5" />
            <span>TERMS OF SERVICE &amp; OPERATIONAL AGREEMENT</span>
          </div>
          <h1 className="editorial-heading text-4xl sm:text-5xl md:text-6xl text-chocolate-950 dark:text-cream-50">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs font-mono text-chocolate-500 dark:text-night-dim">
            Effective Date: January 1, 2026 | Last Updated: November 2026
          </p>
          <p className="text-base text-chocolate-700 dark:text-night-muted font-light leading-relaxed">
            These Terms and Conditions govern the engagement, booking, allocation, and deployment of professional event manpower, hostesses, shadows, stewards, and supervisory leads provided by {COMPANY_INFO.name} ("EVAANAM") across venues in Delhi NCR.
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10 text-sm leading-relaxed text-chocolate-700 dark:text-night-muted font-light">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              1. Engagement &amp; Requisition Signoff
            </h2>
            <p>
              1.1. All crew requisitions, whether initiated through our digital calculator, direct agreement, or formal purchase order, become binding upon operational confirmation by EVAANAM's senior desk.
            </p>
            <p>
              1.2. Client specifications including required headcounts, uniform categories, role allocations, and call times must be finalized at least 48 hours prior to single-day deployments and 5 days prior to multi-day conventions or weddings.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              2. Pre-Shift Muster &amp; Punctuality Protocol
            </h2>
            <p>
              2.1. In accordance with EVAANAM operational standards, deployed crews arrive on-site approximately 60 minutes prior to scheduled guest doors for grooming inspection, radio synchronization, and zone allocation.
            </p>
            <p>
              2.2. The client or designated event producer agrees to provide access to service corridors, loading bays, and briefing areas at the agreed call-time to ensure punctual muster.
            </p>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              3. Standby Buffer &amp; Reliability Commitment
            </h2>
            <p>
              3.1. EVAANAM maintains an active standby backup bench for all confirmed assignments to prevent understaffing caused by unforeseen personal emergencies.
            </p>
            <p>
              3.2. Floor supervisors are authorized to reassign crew members dynamically across active zones to maintain service balance during peak event rushes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              4. Working Hours, Breaks &amp; Overtime
            </h2>
            <p>
              4.1. Standard shifts consist of specified hours agreed in the deployment confirmation (typically 8 to 10 hours per shift, including designated meal breaks).
            </p>
            <p>
              4.2. Unscheduled event extensions exceeding the agreed shift duration are billed at our standard hourly overtime rates as specified in the service schedule.
            </p>
            <p>
              4.3. Organizers are responsible for providing basic crew provisions (hygienic drinking water and crew meals) for shifts extending past five continuous hours.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              5. Venue Decorum &amp; Workplace Safety
            </h2>
            <p>
              5.1. EVAANAM personnel maintain strict five-star hospitality etiquette, professional posture, and respectful conduct toward guests, venue staff, and client organizers.
            </p>
            <p>
              5.2. Clients agree to maintain a safe, harassment-free operating environment. Deployed crew members must not be instructed to perform hazardous tasks outside standard event hospitality scopes (such as heavy rig lifting, electrical wiring, or uncertified pyrotechnic handling).
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              6. Cancellation &amp; Rescheduling Terms
            </h2>
            <p>
              6.1. Cancellations made within 48 hours of scheduled call-time are subject to a mobilization fee covering roster commitment and pre-briefed personnel allocations.
            </p>
            <p>
              6.2. Date rescheduling is subject to crew availability on the revised dates and must be communicated to our operations desk in writing.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-chocolate-950 dark:text-cream-50 font-medium">
              7. Governing Law &amp; Jurisdiction
            </h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the competent courts in New Delhi.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
