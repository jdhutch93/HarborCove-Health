/* ============================================================
   HARBORCOVE HEALTH — Intake Forms Page
   Design: Harbor Light — all 4 patient intake forms with clear descriptions
   ============================================================ */
import { ArrowRight, FileText, RefreshCw, Shield, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const forms = [
  {
    id: "ketamine-intake",
    icon: FileText,
    category: "Ketamine Therapy",
    title: "Ketamine Intake Form",
    description: "For new patients who have not previously received ketamine therapy at HarborCove Health and are interested in starting IV ketamine treatment for depression or chronic pain.",
    whoShouldUse: "Use this form if you are a new patient seeking ketamine therapy for treatment-resistant depression or chronic pain. You will need an established psychiatric provider (or we can coordinate one) before your first infusion for depression treatment.",
    href: "https://intakeq.com/new/hv6pho",
    cta: "Complete Ketamine Intake Form",
    color: "navy",
  },
  {
    id: "ketamine-maintenance",
    icon: RefreshCw,
    category: "Ketamine Therapy",
    title: "Ketamine Maintenance Reorder",
    description: "For established HarborCove Health patients who have completed their initial ketamine series and are scheduling ongoing maintenance infusions.",
    whoShouldUse: "Use this form if you are an existing patient who has already completed your initial ketamine infusion series and need to schedule a maintenance treatment. Do not use this form if you are a new patient.",
    href: "https://intakeq.com/new/5mgqbf",
    cta: "Complete Maintenance Reorder Form",
    color: "teal",
  },
  {
    id: "glp1-intake",
    icon: FileText,
    category: "Weight Management",
    title: "GLP-1 Intake Form",
    description: "For new patients interested in starting the GLP-1 medical weight management program at HarborCove Health.",
    whoShouldUse: "Use this form if you are a new patient interested in GLP-1 receptor agonist therapy for medically supervised weight management. This form initiates your medical screening process to determine appropriateness for the program.",
    href: "https://intakeq.com/new/d1pshm",
    cta: "Complete GLP-1 Intake Form",
    color: "navy",
  },
  {
    id: "glp1-reorder",
    icon: RefreshCw,
    category: "Weight Management",
    title: "GLP-1 Reorder Form",
    description: "For established HarborCove Health patients currently enrolled in the GLP-1 weight management program who need to reorder their prescription.",
    whoShouldUse: "Use this form if you are an existing patient in the GLP-1 program and need to request a prescription refill or reorder. Do not use this form if you are a new patient — please use the GLP-1 Intake Form instead.",
    href: "https://intakeq.com/new/swsdkp",
    cta: "Complete GLP-1 Reorder Form",
    color: "teal",
  },
];

export default function IntakeForms() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-24 pb-12 bg-[#0B3D6B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#A9CCE3] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Patient Portal</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            Patient Intake Forms
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            Select the form that corresponds to your situation. Each form is secure and HIPAA-compliant. If you are unsure which form to use, read the descriptions below or contact us.
          </p>
          {/* HIPAA badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
            <Lock className="w-3.5 h-3.5 text-[#A9CCE3]" />
            <span className="text-[#A9CCE3] text-xs font-['Nunito_Sans'] font-700 tracking-wider uppercase">HIPAA-Compliant Secure Forms</span>
          </div>
        </div>
      </section>

      {/* ── FORMS GRID ── */}
      <section className="py-16 bg-[#F4F7FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ketamine Forms */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#1A7FA8] rounded-full" />
              <h2 className="font-['Lora'] font-700 text-[#0B3D6B] text-2xl">Ketamine Therapy Forms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {forms.filter(f => f.category === "Ketamine Therapy").map((form) => {
                const Icon = form.icon;
                return (
                  <div key={form.id} className="bg-white rounded-xl shadow-sm border border-[#E8EEF4] overflow-hidden flex flex-col">
                    <div className="bg-[#0B3D6B] px-6 py-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-[#A9CCE3] text-xs font-['Nunito_Sans'] font-700 tracking-widest uppercase">{form.category}</p>
                        <h3 className="font-['Lora'] font-700 text-white text-lg leading-tight">{form.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed mb-4">{form.description}</p>
                      <div className="bg-[#F4F7FA] rounded-lg p-4 mb-6 flex-1">
                        <div className="flex items-start gap-2 mb-1.5">
                          <Shield className="w-3.5 h-3.5 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                          <p className="text-[#0B3D6B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide">Who Should Use This Form</p>
                        </div>
                        <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">{form.whoShouldUse}</p>
                      </div>
                      <a
                        href={form.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#0B3D6B] hover:bg-[#0a3460] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors"
                      >
                        {form.cta} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* GLP-1 Forms */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#1A7FA8] rounded-full" />
              <h2 className="font-['Lora'] font-700 text-[#0B3D6B] text-2xl">Weight Management Forms</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {forms.filter(f => f.category === "Weight Management").map((form) => {
                const Icon = form.icon;
                return (
                  <div key={form.id} className="bg-white rounded-xl shadow-sm border border-[#E8EEF4] overflow-hidden flex flex-col">
                    <div className="bg-[#1A7FA8] px-6 py-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white/70 text-xs font-['Nunito_Sans'] font-700 tracking-widest uppercase">{form.category}</p>
                        <h3 className="font-['Lora'] font-700 text-white text-lg leading-tight">{form.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed mb-4">{form.description}</p>
                      <div className="bg-[#F4F7FA] rounded-lg p-4 mb-6 flex-1">
                        <div className="flex items-start gap-2 mb-1.5">
                          <Shield className="w-3.5 h-3.5 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                          <p className="text-[#0B3D6B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide">Who Should Use This Form</p>
                        </div>
                        <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">{form.whoShouldUse}</p>
                      </div>
                      <a
                        href={form.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#1A7FA8] hover:bg-[#157096] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors"
                      >
                        {form.cta} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROVIDER REFERRAL CTA ── */}
      <section className="py-12 bg-white border-t border-[#E8EEF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#374151] font-['Nunito_Sans'] text-base mb-4">
            Are you a healthcare provider looking to refer a patient?
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeTceK2UP7u4SVgYfk0MeX_uMifMTok0vBOh8kWCX0NaT5xEA/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0B3D6B] hover:bg-[#0a3460] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors"
          >
            Submit a Mental Health Provider Referral <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
