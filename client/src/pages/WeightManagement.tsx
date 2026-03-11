/* ============================================================
   HARBORCOVE HEALTH — Weight Management Page
   Design: Harbor Light — GLP-1 therapy, medical screening, monitoring
   ============================================================ */
import { CheckCircle, ArrowRight, Stethoscope, ClipboardList, TrendingDown, RefreshCw, Package, Building2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const GLP1_IMG = "/assets/gen_wm_hero.jpg";
const FLOWERS_IMG = "/assets/gen_glp_relax.jpg";

export default function WeightManagement() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HERO ── */}
      <section className="relative pt-16 min-h-[45vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={GLP1_IMG} alt="HarborCove Health clinic waiting room" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/95 via-[#1B5E4B]/80 to-[#1B5E4B]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">HarborCove Health</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            GLP-1 Assisted Weight Loss Program
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            Compounded GLP-1 medications delivered directly to you, or come to the clinic for weekly injections — with ongoing provider support and weight monitoring.
          </p>
        </div>
      </section>

      {/* ── WHAT IS GLP-1 ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">What Are Compounded GLP-1 Medications?</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-6">
                A New Standard in Medically Supervised Weight Loss
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                GLP-1 (glucagon-like peptide-1) receptor agonists are a class of medications that mimic a naturally occurring hormone involved in blood sugar regulation and appetite control. Our program uses compounded GLP-1 medications — sent directly from a licensed pharmacy to your door — so you can begin treatment conveniently and affordably.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed mb-4">
                These medications work by slowing gastric emptying, reducing appetite, and improving insulin sensitivity — creating a metabolic environment that supports meaningful, sustained weight reduction when combined with appropriate lifestyle guidance.
              </p>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed">
                At HarborCove Health, GLP-1 therapy is prescribed and monitored by Justin Hutchins, AGACNP-BC, FNP-BC. This is not a one-size-fits-all program — every patient receives individualized assessment, prescription, and ongoing monitoring.
              </p>
            </div>
            <div className="bg-[#F0FAF5] rounded-xl p-8 border border-[#C8E6D4]">
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-5">Why Choose Our GLP-1 Program?</h3>
              <ul className="space-y-4">
                {[
                  { title: "Delivered to Your Door", desc: "Compounded medications sent directly from a licensed pharmacy — no pharmacy trips required." },
                  { title: "In-Clinic Option Available", desc: "Prefer weekly injections at the clinic? We offer in-clinic administration for patients who prefer it." },
                  { title: "Monthly Provider Check-Ins", desc: "Regular check-ins with your provider and weight monitoring keep your progress on track." },
                  { title: "Transparent Pricing", desc: "Private-pay only. Card and HSA/FSA accepted. No insurance billing required." },
                ].map(({ title, desc }) => (
                  <li key={title} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">{title}</p>
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm">{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERY OPTIONS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Flexible Options</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl">How You Receive Your Medication</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-[#F0FAF5] rounded-xl p-8 border border-[#C8E6D4] flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#2E8B6E]/15 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-[#2E8B6E]" />
              </div>
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-3">Home Delivery</h3>
              <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">
                Your compounded GLP-1 medication is shipped directly from a licensed compounding pharmacy to your home. You self-administer weekly injections with full guidance from our team on technique and dosing.
              </p>
            </div>
            <div className="bg-[#F0FAF5] rounded-xl p-8 border border-[#C8E6D4] flex flex-col items-start">
              <div className="w-12 h-12 rounded-full bg-[#2E8B6E]/15 flex items-center justify-center mb-4">
                <Building2 className="w-6 h-6 text-[#2E8B6E]" />
              </div>
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-3">In-Clinic Weekly Injections</h3>
              <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">
                If you are uncomfortable with self-administration, you are welcome to come to the clinic each week for your injection. Our team will administer your dose in a comfortable, professional setting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── ATMOSPHERE PHOTO BANNER ── */}
      <section className="relative h-64 overflow-hidden">
        <img src={FLOWERS_IMG} alt="Person relaxing outdoors" className="w-full h-full object-cover object-[center_30%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1B5E4B]/80 via-[#1B5E4B]/50 to-transparent flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="font-['Lora'] italic text-white text-2xl sm:text-3xl max-w-lg leading-snug">
              "A healthier you — supported every step of the way."
            </p>
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm mt-2">Compounded GLP-1 therapy — supervised, transparent, and delivered to your door.</p>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">GLP-1 Medication Pricing</p>
            <h2 className="font-['Lora'] font-700 text-white text-3xl sm:text-4xl mb-3">Transparent Monthly Pricing</h2>
            <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-base max-w-xl mx-auto">
              Private-Pay · Card and HSA/FSA Accepted · No Insurance Billing
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-10">
            {/* Semaglutide */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col">
              <h3 className="font-['Lora'] font-700 text-white text-2xl mb-1">Semaglutide</h3>
              <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm mb-6">All doses — monthly supply</p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-['Lora'] font-700 text-[#7EC8A4] text-5xl">$260</span>
                <span className="text-[#C8E6D4] font-['Nunito_Sans'] text-base">/ month</span>
              </div>
              <ul className="space-y-2 mb-6 flex-1">
                {["All dose levels included at same price", "Compounded medication delivered to you", "Monthly provider check-in included"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#7EC8A4] mt-0.5 flex-shrink-0" />
                    <span className="text-[#D6E8F5] font-['Nunito_Sans'] text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tirzepatide */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 flex flex-col">
              <h3 className="font-['Lora'] font-700 text-white text-2xl mb-1">Tirzepatide</h3>
              <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm mb-4">Priced by dose — monthly supply</p>
              <div className="space-y-2 mb-6 flex-1">
                {[
                  { dose: "T 2.125 mg", price: "$320" },
                  { dose: "T 4.25 mg", price: "$345" },
                  { dose: "T 6.375 mg", price: "$370" },
                  { dose: "T 8.5 mg", price: "$430" },
                  { dose: "T 11 mg", price: "$440" },
                  { dose: "T 13.5 mg", price: "$470" },
                  { dose: "T 15 mg", price: "$499" },
                ].map(({ dose, price }) => (
                  <div key={dose} className="flex items-center justify-between py-1.5 border-b border-white/10 last:border-0">
                    <span className="text-[#D6E8F5] font-['Nunito_Sans'] text-sm">{dose}</span>
                    <span className="text-[#7EC8A4] font-['Lora'] font-700 text-lg">{price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://intakeq.com/new/d1pshm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
            >
              Start GLP-1 Intake <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://intakeq.com/new/d1pshm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
            >
              GLP-1 Reorder <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── OUR PROGRAM ── */}
      <section className="py-20 bg-[#F4F7FA] dot-grid-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Our Program</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl mb-4">How the GLP-1 Program Works</h2>
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
                description: "If appropriate, a compounded GLP-1 medication is prescribed. Your medication is shipped directly from a licensed pharmacy to your home, or you may come in for weekly clinic injections.",
              },
              {
                icon: TrendingDown,
                step: "03",
                title: "Monthly Monitoring",
                description: "Monthly check-ins with your provider track your weight trend and progress. Weight checks can be reported remotely for your convenience. Dose adjustments are made as needed.",
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
                  <div className="w-10 h-10 rounded-full bg-[#1B5E4B] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-xs tracking-widest">STEP {step}</span>
                </div>
                <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-lg mb-3">{title}</h3>
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
            <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3 text-center">Candidacy</p>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl text-center mb-8">Who Is a Good Candidate?</h2>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {[
                "BMI ≥ 30, or BMI ≥ 27 with a weight-related health condition",
                "History of difficulty losing weight with diet and exercise alone",
                "Type 2 diabetes or prediabetes",
                "Metabolic syndrome or insulin resistance",
                "Motivated to make sustainable lifestyle changes alongside medication",
                "No personal or family history of medullary thyroid carcinoma or MEN2",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2.5 p-3 bg-[#F0FAF5] rounded-lg">
                  <CheckCircle className="w-4 h-4 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                  <span className="text-[#374151] font-['Nunito_Sans'] text-sm">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#1B5E4B]/5 border-l-4 border-[#2E8B6E] rounded-r-lg p-5 mb-8">
              <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-600 text-sm leading-relaxed">
                The intake form and screening process will determine whether GLP-1 therapy is appropriate for your specific situation. Not all patients will be candidates, and your safety is our first priority.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://intakeq.com/new/d1pshm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#1B5E4B] hover:bg-[#164d3c] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
              >
                Start GLP-1 Intake Form <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://intakeq.com/new/d1pshm"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-[#2E8B6E] hover:bg-[#267A60] text-white font-['Nunito_Sans'] font-700 text-base rounded transition-colors"
              >
                GLP-1 Reorder Form <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
