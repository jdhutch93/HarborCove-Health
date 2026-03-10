/* ============================================================
   HARBORCOVE HEALTH — Intake Forms Page
   Design: Harbor Light — brand teal/green colors throughout
   Restructured: Three patient/provider pathways
   ============================================================ */
import { ArrowRight, FileText, RefreshCw, Shield, Lock, UserPlus, Users, Stethoscope } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── NEW PATIENT FORMS ── */
const newPatientForms = [
  {
    id: "ketamine-intake",
    icon: FileText,
    category: "Ketamine Therapy",
    title: "Ketamine Intake Form",
    description: "For new patients who have not previously received ketamine therapy at HarborCove Health and are interested in starting IV ketamine treatment for depression or chronic pain.",
    whoShouldUse: "Use this form if you are a new patient seeking ketamine therapy for treatment-resistant depression or chronic pain. You will need an established psychiatric provider (or we can coordinate one) before your first infusion for depression treatment.",
    href: "https://intakeq.com/new/hv6pho",
    cta: "Complete Ketamine Intake Form",
    accentColor: "#1B5E4B",
    accentHover: "#174f3e",
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
    accentColor: "#2E8B6E",
    accentHover: "#267A60",
  },
];

/* ── CURRENT PATIENT FORMS ── */
const currentPatientForms = [
  {
    id: "ketamine-maintenance",
    icon: RefreshCw,
    category: "Ketamine Therapy",
    title: "Ketamine Maintenance Reorder",
    description: "For established HarborCove Health patients who have completed their initial ketamine series and are scheduling ongoing maintenance infusions.",
    whoShouldUse: "Use this form if you are an existing patient who has already completed your initial ketamine infusion series and need to schedule a maintenance treatment. Do not use this form if you are a new patient.",
    href: "https://intakeq.com/new/5mgqbf",
    cta: "Complete Maintenance Reorder Form",
    accentColor: "#1B5E4B",
    accentHover: "#174f3e",
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
    accentColor: "#2E8B6E",
    accentHover: "#267A60",
  },
];

/* ── FORM CARD COMPONENT ── */
function FormCard({ form }: { form: typeof newPatientForms[0] }) {
  const Icon = form.icon;
  return (
    <div className="bg-white rounded-xl shadow-sm border border-[#D4E8DF] overflow-hidden flex flex-col">
      <div className="px-6 py-4 flex items-center gap-3" style={{ backgroundColor: form.accentColor }}>
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
        <div className="bg-[#F2F7F5] rounded-lg p-4 mb-6 flex-1">
          <div className="flex items-start gap-2 mb-1.5">
            <Shield className="w-3.5 h-3.5 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
            <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide">Who Should Use This Form</p>
          </div>
          <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">{form.whoShouldUse}</p>
        </div>
        <a
          href={form.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors"
          style={{ backgroundColor: form.accentColor }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = form.accentHover)}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = form.accentColor)}
        >
          {form.cta} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ── SECTION HEADER COMPONENT ── */
function SectionHeader({
  icon: Icon,
  label,
  title,
  description,
  iconBg,
}: {
  icon: React.ElementType;
  label: string;
  title: string;
  description: string;
  iconBg: string;
}) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
        style={{ backgroundColor: iconBg }}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-xs tracking-widest uppercase mb-1">{label}</p>
        <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-2xl mb-2">{title}</h2>
        <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed max-w-2xl">{description}</p>
      </div>
    </div>
  );
}

export default function IntakeForms() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-28 pb-12 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#7EC8A4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Patient Portal</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            Intake Forms
          </h1>
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-lg max-w-2xl">
            Select the section that best describes you — new patient, current patient, or referring provider. Each form is secure and HIPAA-compliant.
          </p>
          {/* HIPAA badge */}
          <div className="inline-flex items-center gap-2 mt-6 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
            <Lock className="w-3.5 h-3.5 text-[#7EC8A4]" />
            <span className="text-[#7EC8A4] text-xs font-['Nunito_Sans'] font-700 tracking-wider uppercase">HIPAA-Compliant Secure Forms</span>
          </div>
        </div>
      </section>

      {/* ── QUICK NAVIGATION ANCHORS ── */}
      <section className="bg-white border-b border-[#D4E8DF] sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            <a
              href="#new-patients"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-700 text-[#1B5E4B] hover:bg-[#F2F7F5] whitespace-nowrap transition-colors"
            >
              <UserPlus className="w-4 h-4" /> New Patients
            </a>
            <span className="text-[#D4E8DF]">|</span>
            <a
              href="#current-patients"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-700 text-[#1B5E4B] hover:bg-[#F2F7F5] whitespace-nowrap transition-colors"
            >
              <Users className="w-4 h-4" /> Current Patients
            </a>
            <span className="text-[#D4E8DF]">|</span>
            <a
              href="#referring-providers"
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-700 text-[#1B5E4B] hover:bg-[#F2F7F5] whitespace-nowrap transition-colors"
            >
              <Stethoscope className="w-4 h-4" /> Referring Providers
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 1: NEW PATIENTS ── */}
      <section id="new-patients" className="py-16 bg-[#F2F7F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={UserPlus}
            iconBg="#1B5E4B"
            label="Section 1"
            title="New Patients"
            description="Starting care at HarborCove Health for the first time? Select the intake form for the service you are interested in. These forms initiate your medical screening so we can determine if our programs are clinically appropriate for you."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {newPatientForms.map((form) => (
              <FormCard key={form.id} form={form} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 2: CURRENT PATIENTS ── */}
      <section id="current-patients" className="py-16 bg-white border-t border-[#D4E8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Users}
            iconBg="#2E8B6E"
            label="Section 2"
            title="Current Patients"
            description="Already an established patient at HarborCove Health? Use these forms to schedule your next maintenance infusion or reorder your GLP-1 prescription without needing to restart the intake process."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {currentPatientForms.map((form) => (
              <FormCard key={form.id} form={form} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REFERRING PROVIDERS ── */}
      <section id="referring-providers" className="py-16 bg-[#F2F7F5] border-t border-[#D4E8DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            icon={Stethoscope}
            iconBg="#1B5E4B"
            label="Section 3"
            title="Referring Providers"
            description="Are you a psychiatrist, PMHNP, or pain management specialist looking to refer a patient for IV Ketamine therapy? HarborCove Health operates as a specialized infusion service — you maintain the therapeutic relationship and overall treatment plan while we handle the infusion administration and monitoring."
          />

          <div className="bg-white rounded-xl shadow-sm border border-[#D4E8DF] overflow-hidden">
            <div className="bg-[#1B5E4B] px-6 py-4 flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center flex-shrink-0">
                <Stethoscope className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-[#7EC8A4] text-xs font-['Nunito_Sans'] font-700 tracking-widest uppercase">Provider Referral</p>
                <h3 className="font-['Lora'] font-700 text-white text-lg leading-tight">Mental Health Provider Referral Form</h3>
              </div>
            </div>
            <div className="p-6 md:flex md:items-start md:gap-8">
              <div className="flex-1 mb-6 md:mb-0">
                <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed mb-4">
                  Use this form to refer a patient for IV ketamine therapy. HarborCove Health will handle all aspects of infusion administration — pre-infusion safety screening, IV placement, medication delivery, continuous monitoring, and post-infusion assessment — while you retain full responsibility for the psychiatric diagnosis and overall mental health treatment plan.
                </p>
                <div className="bg-[#F2F7F5] rounded-lg p-4">
                  <div className="flex items-start gap-2 mb-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#2E8B6E] mt-0.5 flex-shrink-0" />
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide">Who Should Use This Form</p>
                  </div>
                  <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed">
                    Psychiatrists (MD/DO), Psychiatric Mental Health Nurse Practitioners (PMHNPs), and Pain Management Specialists managing patients with treatment-resistant depression, mood disorders, or chronic pain who may benefit from IV ketamine therapy.
                  </p>
                </div>
              </div>
              <div className="md:flex-shrink-0 md:w-64">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeTceK2UP7u4SVgYfk0MeX_uMifMTok0vBOh8kWCX0NaT5xEA/viewform?usp=header"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#1B5E4B] hover:bg-[#174f3e] text-white font-['Nunito_Sans'] font-700 text-sm rounded transition-colors mb-3"
                >
                  Submit a Patient Referral <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/provider-referral"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-white hover:bg-[#F2F7F5] text-[#1B5E4B] border border-[#D4E8DF] font-['Nunito_Sans'] font-700 text-sm rounded transition-colors"
                >
                  Learn About Our Referral Model <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-[#374151] font-['Nunito_Sans'] text-sm mt-8">
            Not sure if your patient is appropriate? <a href="/contact" className="text-[#2E8B6E] font-700 hover:underline">Contact us</a> to discuss the case before submitting a formal referral.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
