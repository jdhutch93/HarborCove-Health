/* ============================================================
   HARBORCOVE HEALTH — Weight Management Page
   Design: Harbor Light — GLP-1 therapy, medical screening, monitoring
   ============================================================ */
import { CheckCircle, ArrowRight, Stethoscope, ClipboardList, TrendingDown, RefreshCw } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GLP1_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663376008972/RYC7xDN9pCFSivQkK6hRLg/glp1-wellness-section-NfrbAyUyKfKXC4ZSsntAx6.webp";

export default function WeightManagement() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-16 min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={GLP1_IMG} alt="Medical weight management consultation room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B3D6B]/95 via-[#0B3D6B]/80 to-[#0B3D6B]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-[#A9CCE3] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">HarborCove Health</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            GLP-1 Medical Weight Management
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            Prescription-based, medically supervised weight management using GLP-1 receptor agonist therapy — a clinically proven approach to sustainable metabolic health.
          </p>
        </div>
      </section>

      {/* ── WHAT IS GLP-1 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#1A7FA8] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">What Are GLP-1 Receptor Agonists?</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#0B3D6B] text-3xl sm:text-4xl leading-tight mb-6">
                A New Standard in Medical Weight Management
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                GLP-1 (glucagon-like peptide-1) receptor agonists are a class of medications that mimic a naturally occurring hormone involved in blood sugar regulation and appetite control. Originally developed for type 2 diabetes management, these medications have demonstrated significant efficacy for weight loss in clinical trials.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                These medications work by slowing gastric emptying, reducing appetite, and improving insulin sensitivity — creating a metabolic environment that supports meaningful, sustained weight reduction when combined with appropriate lifestyle guidance.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed">
                At HarborCove Health, GLP-1 therapy is prescribed and monitored by Justin Hutchins, AGACNP-BC, FNP-BC. This is not a one-size-fits-all program — every patient receives individualized assessment, prescription, and ongoing monitoring.
              </p>
            </div>
            <div className="bg-[#F4F7FA] rounded-xl p-8 border border-[#E8EEF4]">
              <h3 className="font-['Lora'] font-700 text-[#0B3D6B] text-xl mb-5">Why Choose Medical Weight Management?</h3>
              <ul className="space-y-4">
                {[
                  { title: "Clinically Proven", desc: "GLP-1 medications have demonstrated 10–20% body weight reduction in major clinical trials." },
                  { title: "Medically Supervised", desc: "Regular monitoring ensures safety, appropriate dosing, and management of any side effects." },
                  { title: "Addresses Root Causes", desc: "Targets the hormonal and metabolic factors that make weight loss difficult for many patients." },
                  { title: "Sustainable Results", desc: "Supports long-term metabolic health rather than short-term caloric restriction alone." },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#0B3D6B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">{title}</p>
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR PROGRAM ── */}
      <section className="py-20 bg-[#F4F7FA] dot-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#1A7FA8] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Program</p>
            <h2 className="font-['Lora'] font-700 text-[#0B3D6B] text-3xl sm:text-4xl mb-4">How the GLP-1 Program Works</h2>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base max-w-xl mx-auto">
              Our program is structured around safety, efficacy, and ongoing support. Here is what to expect from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: ClipboardList,
                step: "01",
                title: "Medical Screening",
                description: "A comprehensive intake evaluation reviews your medical history, current medications, weight history, and any contraindications to GLP-1 therapy. This ensures the program is safe and appropriate for you.",
              },
              {
                icon: Stethoscope,
                step: "02",
                title: "Prescription & Initiation",
                description: "If appropriate, a GLP-1 receptor agonist is prescribed at a starting dose. We discuss what to expect, how to administer the medication, and how to manage common initial side effects.",
              },
              {
                icon: TrendingDown,
                step: "03",
                title: "Ongoing Monitoring",
                description: "Regular follow-up appointments track your progress, adjust dosing as needed, and monitor for any adverse effects. Lab work may be ordered as clinically indicated.",
              },
              {
                icon: RefreshCw,
                step: "04",
                title: "Reorder & Continuation",
                description: "Once established on the program, the GLP-1 Reorder Form makes it easy to continue your prescription without unnecessary delays.",
              },
            ].map(({ icon: Icon, step, title, description }) => (
              <div key={step} className="bg-white rounded-xl p-6 shadow-sm border border-[#E8EEF4] flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#0B3D6B] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#1A7FA8] font-['Nunito_Sans'] font-700 text-xs tracking-widest">STEP {step}</span>
                </div>
                <h3 className="font-['Lora'] font-700 text-[#0B3D6B] text-lg mb-3">{title}</h3>
                <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed flex-1">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHO IS A CANDIDATE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#1A7FA8] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3 text-center">Candidacy</p>
            <h2 className="font-['Lora'] font-700 text-[#0B3D6B] text-3xl sm:text-4xl text-center mb-8">Who Is a Good Candidate?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "BMI ≥ 30, or BMI ≥ 27 with a weight-related health condition",
                "History of difficulty losing weight with diet and exercise alone",
                "Type 2 diabetes or prediabetes",
                "Metabolic syndrome or insulin resistance",
                "Motivated to make sustainable lifestyle changes alongside medication",
                "No personal or family history of medullary thyroid carcinoma or MEN2",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 bg-[#F4F7FA] rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#374151] font-['Nunito_Sans'] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#0B3D6B]/5 border-l-4 border-[#1A7FA8] rounded-r-lg p-5 mb-8">
              <p className="text-[#0B3D6B] font-['Nunito_Sans'] font-600 text-sm leading-relaxed">
                The intake form and screening process will determine whether GLP-1 therapy is appropriate for your specific situation. Not all patients will be candidates, and your safety is our first priority.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intakeq.com/new/d1pshm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#0B3D6B] hover:bg-[#0a3460] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
              >
                Start GLP-1 Intake Form <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://intakeq.com/new/swsdkp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white border-2 border-[#0B3D6B] text-[#0B3D6B] hover:bg-[#0B3D6B] hover:text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
              >
                GLP-1 Reorder Form
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
