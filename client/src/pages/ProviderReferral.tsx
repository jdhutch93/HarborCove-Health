/* ============================================================
   HARBORCOVE HEALTH — Provider Referral Page
   Design: Harbor Light — for psychiatrists, PMHNPs, pain management providers
   ============================================================ */
import { ArrowRight, Users, Shield, CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const COLLAB_IMG = "/assets/clinic-waiting-room-2.jpeg";

export default function ProviderReferral() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-16 min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={COLLAB_IMG} alt="HarborCove Health clinic lobby" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/95 via-[#1B5E4B]/80 to-[#1B5E4B]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">For Healthcare Providers</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            Refer a Patient to HarborCove Health
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            We partner with psychiatrists, PMHNPs, and pain management providers to deliver IV ketamine therapy as part of a comprehensive, collaborative treatment plan.
          </p>
        </div>
      </section>

      {/* ── COLLABORATIVE MODEL DETAIL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Collaborative Model</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-6">
                You Stay in Charge of the Mental Health Treatment Plan
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                HarborCove Health operates as a specialized infusion service — not a psychiatric practice. When you refer a patient for ketamine therapy, you retain full responsibility for their psychiatric diagnosis, medication management, and overall mental health treatment plan.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                We handle the clinical aspects of ketamine administration: patient screening for infusion safety, IV placement, medication preparation and delivery, vital sign monitoring throughout the session, and post-infusion assessment. We communicate with you about the patient's response and any clinical observations relevant to their care.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-6">
                This model allows your patients to access a specialized intervention without disrupting the therapeutic relationship they have built with you.
              </p>
              <div className="bg-[#F0FAF5] border-l-4 border-[#2E8B6E] rounded-r-lg p-4">
                <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-600 text-sm">
                  HarborCove Health is located in Yuma, Arizona and serves patients throughout the Yuma region. We welcome referrals from providers across southwestern Arizona and neighboring areas.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-2">What We Handle</h3>
              {[
                { title: "Pre-infusion Safety Screening", desc: "Medical history review, contraindication assessment, and informed consent for the infusion procedure." },
                { title: "IV Ketamine Administration", desc: "Precise dosing, IV placement, medication preparation, and delivery by a board-certified advanced practice provider." },
                { title: "Continuous Monitoring", desc: "Vital signs, oxygen saturation, and patient comfort throughout each 45–60 minute session." },
                { title: "Post-Infusion Assessment", desc: "Recovery monitoring and communication of clinical observations to the referring provider." },
                { title: "Maintenance Scheduling", desc: "Ongoing coordination of maintenance infusions based on the patient's response and your clinical guidance." },
              ].map(({ title, desc }) => (
                <div key={title} className="flex items-start gap-3 p-4 bg-[#F0FAF5] rounded-lg border border-[#C8E6D4]">
                  <CheckCircle className="w-5 h-5 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">{title}</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO CAN REFER ── */}
      <section className="py-16 bg-[#F4F7FA] dot-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Who Can Refer</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl">Appropriate Referring Providers</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {[
              { icon: Users, title: "Psychiatrists", desc: "MD or DO psychiatrists managing patients with treatment-resistant depression or mood disorders." },
              { icon: Shield, title: "PMHNPs", desc: "Psychiatric mental health nurse practitioners providing ongoing psychiatric management." },
              { icon: Shield, title: "Pain Management Specialists", desc: "Providers managing patients with chronic pain conditions that may benefit from ketamine." },
              { icon: Phone, title: "Questions?", desc: "Not sure if your patient is appropriate? Contact us to discuss the case before submitting a formal referral." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl p-5 shadow-sm border border-[#E8EEF4]">
                <div className="w-9 h-9 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center mb-3">
                  <Icon className="w-4 h-4 text-[#1B5E4B]" />
                </div>
                <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-base mb-1.5">{title}</h3>
                <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REFERRAL CTA ── */}
      <section className="py-20 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Submit a Referral</p>
            <h2 className="font-['Lora'] font-700 text-white text-3xl sm:text-4xl mb-4">
              Ready to Refer a Patient?
            </h2>
            <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-base leading-relaxed mb-8">
              Use the referral form below to submit patient information securely. Our team will review the referral and contact the patient to initiate the intake process. You will be notified once the patient has been scheduled.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTceK2UP7u4SVgYfk0MeX_uMifMTok0vBOh8kWCX0NaT5xEA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-all hover:shadow-lg"
              >
                Refer a Patient <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
              >
                Contact Us Directly
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
