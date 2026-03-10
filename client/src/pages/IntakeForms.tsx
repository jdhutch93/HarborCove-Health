/* ============================================================
   HARBORCOVE HEALTH — Intake Forms Page
   Redesigned: Service-line first layout
   Weight Loss → Ketamine → Referring Providers
   Patient-friendly language, compliant medication naming
   ============================================================ */
import { ArrowRight, Lock, Scale, Brain, Stethoscope, UserPlus, RefreshCw, MessageSquare } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SPRUCE_URL = "https://spruce.care/harborcovehealth";

/* ── SERVICE SECTION DATA ── */
const services = [
  {
    id: "weight-loss",
    icon: Scale,
    iconBg: "#2E8B6E",
    anchorId: "weight-loss",
    navLabel: "Weight Loss Program",
    headline: "Start Your Weight Loss Program",
    subheadline: "Medical weight loss using compounded GLP-1 medications — personalized, supervised, and affordable.",
    disclaimer: "We prescribe compounded GLP-1 receptor agonist medications (semaglutide / tirzepatide). These are not brand-name products. All treatment is supervised by a licensed provider.",
    newCard: {
      label: "New Patient",
      title: "Get Started",
      description: "Ready to begin your weight loss journey? This form starts your medical screening so we can determine if our program is right for you.",
      cta: "Begin New Patient Intake",
      href: "https://intakeq.com/new/d1pshm",
      accentColor: "#2E8B6E",
      accentHover: "#267A60",
    },
    returningCard: {
      label: "Current Patient",
      title: "Reorder / Check In",
      description: "Already enrolled in the program? Use this form to request your next prescription refill or check in with your provider.",
      cta: "Submit Reorder Request",
      href: "https://intakeq.com/new/swsdkp",
      accentColor: "#1B5E4B",
      accentHover: "#174f3e",
    },
  },
  {
    id: "ketamine",
    icon: Brain,
    iconBg: "#1B5E4B",
    anchorId: "ketamine",
    navLabel: "Ketamine Therapy",
    headline: "IV Ketamine Therapy",
    subheadline: "For treatment-resistant depression, anxiety, PTSD, and chronic pain. Evidence-based infusion therapy supervised by Justin Hutchins, AGACNP-BC, FNP-BC.",
    disclaimer: null,
    newCard: {
      label: "New Patient",
      title: "Start My Evaluation",
      description: "New to ketamine therapy? This form begins your clinical screening to determine whether IV ketamine is appropriate for your condition.",
      cta: "Begin Ketamine Intake",
      href: "https://intakeq.com/new/hv6pho",
      accentColor: "#1B5E4B",
      accentHover: "#174f3e",
    },
    returningCard: {
      label: "Current Patient",
      title: "Schedule Maintenance",
      description: "Completed your initial infusion series? Use this form to schedule your next maintenance infusion and keep your treatment on track.",
      cta: "Submit Maintenance Request",
      href: "https://intakeq.com/new/5mgqbf",
      accentColor: "#2E8B6E",
      accentHover: "#267A60",
    },
  },
];

/* ── PATIENT CARD COMPONENT ── */
function PatientCard({
  card,
  badge,
}: {
  card: typeof services[0]["newCard"];
  badge: "new" | "returning";
}) {
  const isNew = badge === "new";
  return (
    <div className="bg-white rounded-2xl border border-[#D4E8DF] shadow-sm flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      {/* Badge */}
      <div
        className="px-5 pt-5 pb-0 flex items-center gap-2"
      >
        <span
          className="inline-flex items-center gap-1.5 text-xs font-['Nunito_Sans'] font-700 tracking-widest uppercase px-3 py-1 rounded-full"
          style={{
            backgroundColor: isNew ? "#E8F5EE" : "#EEF7F4",
            color: card.accentColor,
          }}
        >
          {isNew ? <UserPlus className="w-3 h-3" /> : <RefreshCw className="w-3 h-3" />}
          {card.label}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-xl mb-2">{card.title}</h3>
        <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed flex-1 mb-5">
          {card.description}
        </p>
        <a
          href={card.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 text-white font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
          style={{ backgroundColor: card.accentColor }}
          onMouseOver={e => (e.currentTarget.style.backgroundColor = card.accentHover)}
          onMouseOut={e => (e.currentTarget.style.backgroundColor = card.accentColor)}
        >
          {card.cta} <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ── SERVICE SECTION COMPONENT ── */
function ServiceSection({ service }: { service: typeof services[0] }) {
  const Icon = service.icon;
  return (
    <section id={service.anchorId} className="py-16 border-b border-[#D4E8DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-start gap-4 mb-3">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
            style={{ backgroundColor: service.iconBg }}
          >
            <Icon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl leading-tight mb-1">
              {service.headline}
            </h2>
            <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed max-w-2xl">
              {service.subheadline}
            </p>
          </div>
        </div>

        {/* Compliance disclaimer */}
        {service.disclaimer && (
          <p className="text-[#6B7280] font-['Nunito_Sans'] text-xs leading-relaxed mb-8 ml-15 pl-1 max-w-2xl border-l-2 border-[#D4E8DF] pl-3">
            {service.disclaimer}
          </p>
        )}

        {/* Cards */}
        <div className={`grid sm:grid-cols-2 gap-5 ${service.disclaimer ? "" : "mt-8"}`}>
          <PatientCard card={service.newCard} badge="new" />
          <PatientCard card={service.returningCard} badge="returning" />
        </div>
      </div>
    </section>
  );
}

/* ── MAIN PAGE ── */
export default function IntakeForms() {
  return (
    <div className="min-h-screen bg-[#F8FAF9] font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-28 pb-12 bg-[#1B5E4B]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#7EC8A4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">
            Get Started
          </p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            How Can We Help You?
          </h1>
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-lg max-w-2xl mb-6">
            Select your service below. New patients start with an intake form. Current patients can reorder or schedule directly.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              <Lock className="w-3.5 h-3.5 text-[#7EC8A4]" />
              <span className="text-[#7EC8A4] text-xs font-['Nunito_Sans'] font-700 tracking-wider uppercase">
                HIPAA-Compliant Secure Forms
              </span>
            </div>
            <a
              href={SPRUCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full px-4 py-1.5 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#7EC8A4]" />
              <span className="text-[#7EC8A4] text-xs font-['Nunito_Sans'] font-700 tracking-wider uppercase">
                Have a question? Message us on Spruce
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── STICKY NAV ── */}
      <nav className="bg-white border-b border-[#D4E8DF] sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-2.5">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <span key={s.id} className="flex items-center gap-1">
                  {i > 0 && <span className="text-[#D4E8DF] mx-1">|</span>}
                  <a
                    href={`#${s.anchorId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById(s.anchorId);
                      if (el) {
                        const offset = 80;
                        const top = el.getBoundingClientRect().top + window.scrollY - offset;
                        window.scrollTo({ top, behavior: 'smooth' });
                      }
                    }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-700 text-[#1B5E4B] hover:bg-[#F2F7F5] whitespace-nowrap transition-colors"
                  >
                    <Icon className="w-4 h-4" /> {s.navLabel}
                  </a>
                </span>
              );
            })}
            <span className="text-[#D4E8DF] mx-1">|</span>
            <a
              href="#providers"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('providers');
                if (el) {
                  const offset = 80;
                  const top = el.getBoundingClientRect().top + window.scrollY - offset;
                  window.scrollTo({ top, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-['Nunito_Sans'] font-700 text-[#1B5E4B] hover:bg-[#F2F7F5] whitespace-nowrap transition-colors"
            >
              <Stethoscope className="w-4 h-4" /> Referring Providers
            </a>
          </div>
        </div>
      </nav>

      {/* ── SERVICE SECTIONS ── */}
      <div className="bg-[#F8FAF9]">
        {services.map((service) => (
          <ServiceSection key={service.id} service={service} />
        ))}
      </div>

      {/* ── REFERRING PROVIDERS ── */}
      <section id="providers" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-4 mb-8">
            <div className="w-11 h-11 rounded-xl bg-[#1B5E4B] flex items-center justify-center flex-shrink-0 mt-1">
              <Stethoscope className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl leading-tight mb-1">
                Referring a Patient?
              </h2>
              <p className="text-[#374151] font-['Nunito_Sans'] text-base leading-relaxed max-w-2xl">
                We work closely with psychiatrists, PMHNPs, and pain management specialists. You maintain the therapeutic relationship — we handle the infusion.
              </p>
            </div>
          </div>

          <div className="bg-[#F2F7F5] rounded-2xl border border-[#D4E8DF] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div className="flex-1">
              <p className="text-[#374151] font-['Nunito_Sans'] text-sm leading-relaxed mb-3">
                Use the referral form to submit a patient for IV Ketamine therapy consideration. HarborCove Health handles all pre-infusion screening, IV placement, monitoring, and post-infusion documentation — and keeps you informed throughout.
              </p>
              <p className="text-[#6B7280] font-['Nunito_Sans'] text-xs">
                Appropriate for: Psychiatrists (MD/DO), PMHNPs, and Pain Management Specialists managing treatment-resistant depression, mood disorders, or chronic pain.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-shrink-0 sm:w-56">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeTceK2UP7u4SVgYfk0MeX_uMifMTok0vBOh8kWCX0NaT5xEA/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-[#1B5E4B] hover:bg-[#174f3e] text-white font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
              >
                Submit a Referral <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/provider-referral"
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 bg-white hover:bg-[#F2F7F5] text-[#1B5E4B] border border-[#D4E8DF] font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
              >
                Learn About Our Referral Model <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <p className="text-center text-[#374151] font-['Nunito_Sans'] text-sm mt-8">
            Not sure if your patient is appropriate?{" "}
            <a href="/contact" className="text-[#2E8B6E] font-700 hover:underline">
              Contact us
            </a>{" "}
            to discuss the case before submitting a formal referral.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
