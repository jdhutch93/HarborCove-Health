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
            HarborCove Health was founded on a simple belief: every patient deserves access to evidence-based, compassionate care — especially when other treatments haven't worked. A specialty clinic in Yuma, Arizona focused on IV ketamine therapy and medically supervised weight management.
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
                Justin Hutchins is a board-certified nurse practitioner with a clinical focus on mental health, pain management, and metabolic health. He founded HarborCove Health to bring cutting-edge treatments to the Yuma community in a welcoming, clinically rigorous environment.
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
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-4">Our Philosophy</h2>
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
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-6">Serving Yuma and Beyond</h2>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
              Our clinic is located in Yuma, AZ at 3970 W 24th St Ste 209, Yuma, AZ 85364. We treat the whole person, not just the diagnosis. Whether you're struggling with depression that hasn't responded to medications, dealing with chronic pain, or looking for lasting weight loss support, we take the time to understand your history and build a plan tailored to you.
            </p>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-8">
              Telehealth services are available to patients across Arizona. We are a cash-pay clinic — no insurance accepted. HSA and FSA cards are welcome.
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
