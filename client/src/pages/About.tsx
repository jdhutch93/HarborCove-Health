/* ============================================================
   HARBORCOVE HEALTH — About Page
   Design: Harbor Light — provider bio, credentials, clinic philosophy
   ============================================================ */
import { Link } from "wouter";
import { ArrowRight, Award, Shield, Users, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const HEADSHOT_IMG = "/assets/provider-headshot.jpeg";
const LIGHTHOUSE_IMG = "/assets/gen_lighthouse_harbor.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-24 pb-12 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            About HarborCove Health
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            A clinic built on the belief that patients deserve access to evidence-based, compassionate, and transparent medical care.
          </p>
        </div>
      </section>

      {/* ── PROVIDER BIO ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Provider photo */}
            <div className="relative">
              <div className="aspect-[3/4] max-w-sm mx-auto lg:mx-0 rounded-xl overflow-hidden shadow-xl">
                <img
                  src={HEADSHOT_IMG}
                  alt="Justin Hutchins, AGACNP-BC, FNP-BC — HarborCove Health"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Credential badges */}
              <div className="mt-6 flex flex-wrap gap-2 max-w-sm mx-auto lg:mx-0">
                {["AGACNP-BC", "FNP-BC", "Emergency Medicine"].map(badge => (
                  <span key={badge} className="inline-flex items-center px-3 py-1 bg-[#F0FAF5] border border-[#C8E6D4] rounded-full text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Meet Your Provider</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-6">
                Justin Hutchins, AGACNP-BC, FNP-BC
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                Justin Hutchins is an advanced practice nurse practitioner with dual board certifications as an Adult-Gerontology Acute Care Nurse Practitioner (AGACNP-BC) and a Family Nurse Practitioner (FNP-BC). His clinical background is rooted in emergency medicine — a discipline that demands precision, rapid assessment, and calm under pressure.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                HarborCove Health was founded on the recognition that patients with treatment-resistant depression and chronic pain often face significant barriers to accessing specialized care — particularly in communities like Yuma, Arizona, where subspecialty services can be limited. Justin established HarborCove Health to bring evidence-based ketamine therapy and GLP-1 weight management to patients who need them, with the clinical rigor and personal attention that complex cases require.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-6">
                His approach to care is grounded in three commitments: staying current with the clinical evidence, operating transparently with patients and referring providers, and never compromising on safety. Every patient who walks through the door receives individualized attention and a clear explanation of their treatment plan.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/intake-forms" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                  Start Your Intake <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white border-2 border-[#1B5E4B] text-[#1B5E4B] hover:bg-[#1B5E4B] hover:text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CLINIC PHILOSOPHY ── */}
      <section className="py-20 bg-[#F4F7FA] dot-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Philosophy</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-4">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: BookOpen,
                title: "Evidence-Based Care",
                description: "Every treatment we offer is supported by peer-reviewed clinical research. We do not offer unproven therapies, and we communicate honestly about what the evidence does and does not show.",
              },
              {
                icon: Shield,
                title: "Patient Safety First",
                description: "Safety is non-negotiable. Every patient undergoes thorough screening before treatment, and every infusion is conducted with continuous monitoring by a board-certified provider.",
              },
              {
                icon: Users,
                title: "Collaborative Practice",
                description: "We believe the best outcomes come from teamwork. We work alongside your existing providers — not in isolation — to ensure your care is coordinated and comprehensive.",
              },
              {
                icon: Award,
                title: "Transparent Communication",
                description: "No hidden fees, no vague promises. We explain our pricing clearly, set realistic expectations about outcomes, and keep you and your providers informed throughout treatment.",
              },
            ].map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-[#E8EEF4]">
                <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#1B5E4B]" />
                </div>
                <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-lg mb-3">{title}</h3>
                <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC PHOTO GALLERY ── */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-8">Inside Our Clinic</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="rounded-xl overflow-hidden aspect-square shadow-md">
              <img src="/assets/clinic-chair.jpeg" alt="HarborCove infusion suite" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square shadow-md">
              <img src="/assets/clinic-treatment-room.jpeg" alt="HarborCove treatment room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square shadow-md">
              <img src="/assets/clinic-waiting-room-1.jpeg" alt="HarborCove waiting room" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-square shadow-md">
              <img src="/assets/clinic-waiting-room-2.jpeg" alt="HarborCove lobby" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE BANNER ── */}
      <section className="relative h-56 overflow-hidden">
        <img src={LIGHTHOUSE_IMG} alt="Cozy harbor with lighthouse at dusk" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/80 via-[#1B5E4B]/50 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-['Lora'] italic text-white text-2xl sm:text-3xl max-w-lg leading-snug">
              "A calm harbor for those who need it most."
            </p>
          </div>
        </div>
      </section>

      {/* ── CLINIC INFO ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">About the Clinic</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-6">Serving Yuma, Arizona</h2>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
              HarborCove Health is an outpatient medical clinic located at 3970 W 24th St Ste 209, Yuma, AZ 85364. We operate as a cash-pay practice, which means we are not contracted with insurance companies. This allows us to focus entirely on delivering the care our patients need without the administrative constraints that often limit treatment options in insurance-based settings.
            </p>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-8">
              We serve patients from throughout the Yuma region and welcome referrals from providers across southwestern Arizona. Our clinic is designed to be a calm, private, and professional environment where patients feel safe and supported throughout their treatment.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
