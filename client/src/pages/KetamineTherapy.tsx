/* ============================================================
   HARBORCOVE HEALTH — Ketamine Therapy Page
   Design: Harbor Light — clinical content, protocol steps, pricing
   ============================================================ */
import { Link } from "wouter";
import { CheckCircle, ArrowRight, Clock, DollarSign, Users, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const KETAMINE_IMG = "/assets/clinic-chair.jpeg";
const HERO_IMG = "/assets/gen_person_hammock.jpg";
const CALM_IMG = "/assets/gen_calm_lake_morning.jpg";
const CLINIC_IMG = "/assets/clinic-chair.jpeg";

export default function KetamineTherapy() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-16 min-h-[50vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_IMG} alt="HarborCove Health treatment room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/95 via-[#1B5E4B]/80 to-[#1B5E4B]/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">HarborCove Health</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            IV Ketamine Therapy
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl mb-8">
            Evidence-based IV ketamine therapy for treatment-resistant depression and chronic pain — administered under direct medical supervision in Yuma, Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://intakeq.com/new/hv6pho"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-all hover:shadow-lg"
            >
              Start Ketamine Intake <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* ── WHAT IS KETAMINE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">What Is Ketamine Therapy?</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-6">
                A Rapid-Acting Treatment for Difficult-to-Treat Conditions
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                Ketamine is an FDA-approved anesthetic that has been studied extensively for its antidepressant and analgesic properties when administered at sub-anesthetic doses. Unlike traditional antidepressants that can take weeks to produce effects, IV ketamine often produces noticeable improvement within hours to days of the first infusion.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                The mechanism is distinct from conventional antidepressants: ketamine works primarily on NMDA glutamate receptors, promoting rapid synaptogenesis — the formation of new neural connections — in areas of the brain affected by depression and chronic pain.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed">
                At HarborCove Health, every infusion is performed by Justin Hutchins, AGACNP-BC, FNP-BC, with continuous monitoring of vital signs, oxygen saturation, and patient comfort throughout the session.
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                <img src={KETAMINE_IMG} alt="Calm ketamine therapy treatment room" className="w-full h-full object-cover" />
              </div>
              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Clock, label: "Session Duration", value: "45–60 min" },
                  { icon: DollarSign, label: "Per Infusion", value: "$500" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="bg-[#F0FAF5] rounded-lg p-4 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#2E8B6E]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#2E8B6E]" />
                    </div>
                    <div>
                      <p className="text-[#374151] font-['Nunito_Sans'] text-xs">{label}</p>
                      <p className="text-[#1B5E4B] font-['Lora'] font-700 text-base">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS TREATED ── */}
      <section className="py-20 bg-[#F4F7FA] dot-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Conditions We Treat</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl">Who Can Benefit from Ketamine Therapy?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E8EEF4]">
              <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center mb-4">
                <span className="text-[#1B5E4B] font-['Lora'] font-700 text-sm">01</span>
              </div>
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-3">Treatment-Resistant Depression</h3>
              <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed mb-4">
                Defined as depression that has not responded adequately to at least two different antidepressant medications at adequate doses and duration. Ketamine has demonstrated significant efficacy in this population, with response rates often exceeding those of traditional approaches.
              </p>
              <ul className="space-y-2">
                {[
                  "Major depressive disorder (MDD) — treatment-resistant",
                  "Bipolar depression (with psychiatric oversight)",
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#374151] font-['Nunito_Sans'] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E8EEF4]">
              <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center mb-4">
                <span className="text-[#1B5E4B] font-['Lora'] font-700 text-sm">02</span>
              </div>
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-3">Chronic Pain Syndromes</h3>
              <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed mb-4">
                Ketamine's NMDA receptor antagonism can interrupt central sensitization — the process by which the nervous system amplifies pain signals. This makes it a valuable option for patients with chronic pain conditions that have not responded to conventional pain management.
              </p>
              <ul className="space-y-2">
                {["Complex regional pain syndrome (CRPS)", "Fibromyalgia", "Neuropathic pain", "Refractory chronic pain"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                    <span className="text-[#374151] font-['Nunito_Sans'] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TREATMENT PROTOCOL ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Treatment Protocol</p>
              <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-4">What to Expect</h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base">
                Our protocol follows evidence-based guidelines for IV ketamine therapy. Every patient's treatment plan is individualized based on their diagnosis, response, and clinical needs.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "Initial Consultation & Intake",
                  description: "Complete the ketamine intake form. Our team will review your medical history, current medications, and treatment history to confirm appropriateness. Patients being treated for depression must have an established psychiatric provider or arrange a coordinated evaluation.",
                },
                {
                  step: "02",
                  title: "Initial Infusion Series",
                  description: "The standard initial series consists of 3–4 infusions administered over 1–2 weeks. Each session lasts approximately 45–60 minutes. You will need a driver — you may not operate a vehicle after a ketamine infusion.",
                },
                {
                  step: "03",
                  title: "Response Assessment",
                  description: "After the initial series, we evaluate your response. Many patients experience significant improvement in mood or pain levels. Your response guides the frequency and duration of ongoing treatment.",
                },
                {
                  step: "04",
                  title: "Maintenance Treatments",
                  description: "Based on your response, maintenance infusions are scheduled at intervals that sustain your improvement — typically every 4–8 weeks. The Ketamine Maintenance Reorder Form makes scheduling straightforward.",
                },
              ].map(({ step, title, description }) => (
                <div key={step} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#1B5E4B] flex items-center justify-center">
                    <span className="text-white font-['Lora'] font-700 text-xs">{step}</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-[#E8EEF4] last:border-0">
                    <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-lg mb-2">{title}</h3>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE PHOTO BANNER ── */}
      <section className="relative h-64 overflow-hidden">
        <img src={CALM_IMG} alt="Calm lake at dawn" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/80 via-[#1B5E4B]/50 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-['Lora'] italic text-white text-2xl sm:text-3xl max-w-lg leading-snug">
              "Relief that arrives not in weeks, but in hours."
            </p>
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm mt-2">IV Ketamine — evidence-based, supervised, and personalized.</p>
          </div>
        </div>
      </section>

      {/* ── COLLABORATIVE MODEL ── */}
      <section className="py-16 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-start gap-3 mb-4">
                <Users className="w-6 h-6 text-[#C8E6D4] flex-shrink-0 mt-0.5" />
                <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase">Collaborative Psychiatric Model</p>
              </div>
              <h2 className="font-['Lora'] font-700 text-white text-2xl sm:text-3xl mb-4">
                Depression Treatment Requires a Psychiatric Provider
              </h2>
              <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                Patients receiving ketamine for depression must be under the active care of a psychiatrist or psychiatric mental health nurse practitioner (PMHNP). This provider manages your mental health diagnosis and treatment plan while HarborCove Health performs the infusion administration and monitoring.
              </p>
              <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-base leading-relaxed mb-6">
                If you do not currently have a psychiatric provider, we can coordinate a psychiatric evaluation for <strong className="text-white">$310</strong> to assess your appropriateness for ketamine therapy and establish the collaborative care relationship required for treatment.
              </p>
              <div className="flex items-start gap-3 bg-white/10 rounded-lg p-4">
                <AlertCircle className="w-5 h-5 text-[#C8E6D4] flex-shrink-0 mt-0.5" />
                <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-sm">
                  Ketamine for chronic pain does not require a psychiatric provider. Patients seeking pain management may proceed directly through the standard intake process.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a
                href="https://intakeq.com/new/hv6pho"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors group"
              >
                <div>
                  <p className="text-white font-['Lora'] font-600 text-base mb-0.5">Ketamine Intake Form</p>
                  <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm">For new patients starting ketamine therapy</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C8E6D4] group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://intakeq.com/new/5mgqbf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl transition-colors group"
              >
                <div>
                  <p className="text-white font-['Lora'] font-600 text-base mb-0.5">Maintenance Reorder Form</p>
                  <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm">For established patients scheduling maintenance infusions</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C8E6D4] group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="/provider-referral"
                className="flex items-center justify-between p-5 bg-[#2E8B6E]/40 hover:bg-[#2E8B6E]/60 border border-[#2E8B6E]/50 rounded-xl transition-colors group"
              >
                <div>
                  <p className="text-white font-['Lora'] font-600 text-base mb-0.5">Provider Referral</p>
                  <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm">For psychiatrists and pain management providers</p>
                </div>
                <ArrowRight className="w-5 h-5 text-[#C8E6D4] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
