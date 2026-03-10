/* ============================================================
   HARBORCOVE HEALTH — Home Page
   Design: Harbor Light — full-bleed hero, asymmetric sections
   Sections: Hero, About, Services, Collaborative Model, Pricing, CTA
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Shield, Users, Award, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HERO_IMG = "/assets/clinic-treatment-room.jpeg";
const KETAMINE_IMG = "/assets/clinic-chair.jpeg";
const GLP1_IMG = "/assets/clinic-waiting-room-1.jpeg";
const COLLAB_IMG = "/assets/clinic-waiting-room-2.jpeg";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt="HarborCove Health clinic treatment room"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/90 via-[#1B5E4B]/70 to-[#1B5E4B]/20" />
        </div>

        {/* Hero content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="max-w-2xl">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6 animate-fade-up">
              <Shield className="w-3.5 h-3.5 text-[#C8E6D4]" />
              <span className="text-[#C8E6D4] text-xs font-['Nunito_Sans'] font-700 tracking-wider uppercase">Evidence-Based Care · Yuma, Arizona</span>
            </div>

            <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6 animate-fade-up-delay-1">
              A New Path Forward for Depression, Pain & GLP-1 Assisted Weight Loss
            </h1>

            <p className="text-[#D6E8F5] text-lg sm:text-xl font-['Nunito_Sans'] font-400 leading-relaxed mb-8 animate-fade-up-delay-2">
              HarborCove Health provides evidence-based IV ketamine therapy for treatment-resistant depression and chronic pain, and compounded GLP-1 medication programs for medically supervised weight loss — supervised by an advanced practice provider with a background in emergency medicine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up-delay-3">
              <Link
                href="/intake-forms"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-all duration-200 hover:shadow-lg hover:scale-[1.02]"
              >
                Start Your Intake
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/ketamine-therapy"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-['Nunito_Sans'] font-600 text-base rounded transition-all duration-200 backdrop-blur-sm"
              >
                Learn About Ketamine Therapy
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 animate-bounce">
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <section className="bg-[#1B5E4B] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Shield, label: "Evidence-Based", sub: "Clinically proven protocols" },
              { icon: Award, label: "Board Certified", sub: "AGACNP-BC, FNP-BC" },
              { icon: Users, label: "Collaborative Care", sub: "Psychiatric partnership model" },
              { icon: CheckCircle, label: "Transparent Pricing", sub: "No hidden fees" },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex flex-col items-center gap-1.5">
                <Icon className="w-5 h-5 text-[#7EC8A4]" />
                <span className="text-white font-['Nunito_Sans'] font-700 text-sm">{label}</span>
                <span className="text-[#C8E6D4] font-['Nunito_Sans'] text-xs">{sub}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">About HarborCove Health</p>
            <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-6">
              Compassionate Care for Weight Loss & Mental Health
            </h2>
            <p className="text-[#374151] font-['Nunito_Sans'] text-lg leading-relaxed mb-4">
              HarborCove Health is a cash-pay outpatient medical clinic in Yuma, Arizona, founded by Justin Hutchins, AGACNP-BC, FNP-BC — an advanced practice nurse practitioner with extensive experience in emergency medicine.
            </p>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-6">
              We specialize in two areas where patients often struggle to find effective, accessible care: treatment-resistant depression and chronic pain managed through IV ketamine therapy, and medically supervised weight management through compounded GLP-1 receptor agonist therapy. Our approach is grounded in clinical evidence, transparent communication, and a collaborative model that keeps your existing providers in the loop.
            </p>
            <Link href="/about" className="inline-flex items-center gap-1.5 text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm hover:gap-2.5 transition-all">
              Meet Justin Hutchins <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#F4F7FA] dot-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Services</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl">What We Treat</h2>
          </div>

          {/* Ketamine Service */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={KETAMINE_IMG} alt="Ketamine therapy treatment room" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E4B]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 bg-white/95 rounded-lg px-4 py-2 shadow">
                <span className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm">$500 per infusion</span>
              </div>
            </div>
            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-xs tracking-widest uppercase mb-2">Service 01</p>
              <h3 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-2xl sm:text-3xl mb-4">
                IV Ketamine Therapy
              </h3>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                For patients with treatment-resistant depression or chronic pain who have not responded adequately to conventional therapies, IV ketamine offers a rapidly acting, evidence-backed alternative. Administered under close medical supervision, ketamine infusions can produce meaningful relief where other treatments have fallen short.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Treatment-resistant depression (TRD)",
                  "Chronic pain syndromes",
                  "Initial series of 3–4 infusions over 1–2 weeks",
                  "Maintenance treatments based on response",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#374151] font-['Nunito_Sans'] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/ketamine-therapy" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://intakeq.com/new/hv6pho" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                  Ketamine Intake Form
                </a>
              </div>
            </div>
          </div>

          {/* GLP-1 Service */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-xs tracking-widest uppercase mb-2">Service 02</p>
              <h3 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-2xl sm:text-3xl mb-4">
                GLP-1 Assisted Weight Loss Program
              </h3>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                Our GLP-1 program offers compounded GLP-1 medications delivered directly to you, or you may come to the clinic for weekly injections. The program requires regular monthly check-ins with your provider and weight tracking, which can be reported remotely for your convenience.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Compounded GLP-1 medications delivered to your door",
                  "In-clinic weekly injection option available",
                  "Monthly provider check-ins and weight monitoring",
                  "Ongoing dose adjustment and support",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#374151] font-['Nunito_Sans'] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/weight-management" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="https://intakeq.com/new/d1pshm" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                  GLP-1 Intake Form
                </a>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={GLP1_IMG} alt="HarborCove Health waiting room" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E4B]/30 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COLLABORATIVE MODEL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Approach</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-6">
                A Collaborative Psychiatric Care Model
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                When ketamine is used for depression, HarborCove Health operates within a collaborative framework. Your psychiatrist or psychiatric mental health nurse practitioner (PMHNP) remains responsible for your mental health diagnosis and overall treatment plan — we handle the infusion administration and medical monitoring.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-6">
                If you do not currently have a psychiatric provider, we can coordinate a psychiatric evaluation to determine appropriateness for ketamine therapy. This evaluation is available for <strong className="text-[#1B5E4B]">$310</strong> and ensures every patient receives the comprehensive care they deserve.
              </p>
              <div className="bg-[#F0FAF5] border-l-4 border-[#2E8B6E] rounded-r-lg p-4 mb-6">
                <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-600 text-sm">
                  Psychiatric providers: HarborCove Health welcomes referral partnerships. We handle the infusion — you maintain the therapeutic relationship.
                </p>
              </div>
              <Link href="/provider-referral" className="inline-flex items-center gap-1.5 px-6 py-3 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                Refer a Patient <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-xl aspect-[4/3]">
              <img src={COLLAB_IMG} alt="HarborCove Health clinic lobby" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Transparent Pricing</p>
            <h2 className="font-['Lora'] font-700 text-white text-3xl sm:text-4xl mb-4">Clear Costs, No Surprises</h2>
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-base max-w-xl mx-auto">
              HarborCove Health is a cash-pay clinic. We believe in complete pricing transparency so you can make informed decisions about your care. Card and HSA/FSA accepted. No insurance billing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Ketamine Infusion",
                price: "$500",
                unit: "per treatment",
                description: "Each IV ketamine infusion session, administered under direct medical supervision.",
                cta: "Start Ketamine Intake",
                href: "https://intakeq.com/new/hv6pho",
              },
              {
                title: "Psychiatric Evaluation",
                price: "$310",
                unit: "one-time",
                description: "Coordinated psychiatric evaluation to determine appropriateness for ketamine therapy — for patients without an existing psychiatric provider.",
                cta: "Contact Us",
                href: "/contact",
                isInternal: true,
              },
              {
                title: "GLP-1 Program",
                price: "From $260",
                unit: "/ month",
                description: "Semaglutide (all doses) $260/mo. Tirzepatide from $320–$499/mo depending on dose. Private-pay only.",
                cta: "Start GLP-1 Intake",
                href: "https://intakeq.com/new/d1pshm",
              },
            ].map(({ title, price, unit, description, cta, href, isInternal }) => (
              <div key={title} className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl p-6 flex flex-col">
                <h3 className="font-['Lora'] font-600 text-white text-lg mb-1">{title}</h3>
                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-['Lora'] font-700 text-[#C8E6D4] text-3xl">{price}</span>
                  <span className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm">{unit}</span>
                </div>
                <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-sm leading-relaxed mb-6 flex-1">{description}</p>
                {isInternal ? (
                  <Link href={href} className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                    {cta}
                  </Link>
                ) : (
                  <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                    {cta}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-4">Ready to Take the Next Step?</h2>
          <p className="text-[#374151] font-['Nunito_Sans'] text-lg mb-8 max-w-xl mx-auto">
            Whether you are a patient seeking relief or a provider looking to refer, we make the process straightforward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake-forms" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-all hover:shadow-lg">
              View All Intake Forms <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeTceK2UP7u4SVgYfk0MeX_uMifMTok0vBOh8kWCX0NaT5xEA/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-[#1B5E4B] text-[#1B5E4B] hover:bg-[#1B5E4B] hover:text-white font-['Nunito_Sans'] font-700 text-base rounded transition-all">
              Refer a Patient
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
