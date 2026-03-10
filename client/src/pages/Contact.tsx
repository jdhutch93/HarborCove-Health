/* ============================================================
   HARBORCOVE HEALTH — Contact Page
   Updated: Contact form (Formspree), Spruce secure messaging,
   HIPAA-compliant email labeling, clinic info
   ============================================================ */
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Lock, ArrowRight, ExternalLink, Printer, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SPRUCE_URL = "https://spruce.care/harborcovehealth";
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwvrlyeb";

const REASON_OPTIONS = [
  "General Question",
  "New Patient Inquiry",
  "Current Patient",
  "Provider Referral",
  "Other",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", reason: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-[#D4E8DF] bg-white text-[#374151] font-['Nunito_Sans'] text-sm placeholder-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#2E8B6E] focus:border-transparent transition";

  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-24 pb-12 bg-[#1B5E4B]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">
            Get in Touch
          </p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            Contact HarborCove Health
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            We are here to answer your questions and help you take the next step. All communication options below are HIPAA-compliant.
          </p>
        </div>
      </section>

      {/* ── SECURE MESSAGING BANNER ── */}
      <section className="bg-[#F2F7F5] border-b border-[#D4E8DF] py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-center gap-2 flex-shrink-0">
              <Lock className="w-4 h-4 text-[#2E8B6E]" />
              <span className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm">
                All contact methods on this page are HIPAA-compliant
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={SPRUCE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B5E4B] hover:bg-[#174f3e] text-white font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                Secure Message via Spruce
              </a>
              <a
                href="mailto:jdhutch93@HarborCoveHealth.com"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#E8F5EE] border border-[#D4E8DF] text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
              >
                <Mail className="w-4 h-4" />
                HIPAA-Compliant Email
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* ── LEFT: CONTACT FORM ── */}
            <div className="lg:col-span-3">
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-xs tracking-widest uppercase mb-2">
                General Inquiries
              </p>
              <h2 className="font-['Lora'] font-700 text-[#1B5E4B] text-3xl mb-2">
                Send Us a Message
              </h2>
              <p className="text-[#6B7280] font-['Nunito_Sans'] text-sm mb-1">
                Use this form for general questions, scheduling inquiries, or non-clinical communication.
              </p>
              <div className="flex items-start gap-2 bg-[#FFF8E7] border border-[#F5D87A] rounded-xl px-4 py-3 mb-6">
                <AlertCircle className="w-4 h-4 text-[#B45309] mt-0.5 flex-shrink-0" />
                <p className="text-[#92400E] font-['Nunito_Sans'] text-xs leading-relaxed">
                  <strong>Do not include protected health information (PHI)</strong> in this form. For clinical questions or to start care, please use our{" "}
                  <Link href="/intake-forms" className="underline hover:text-[#B45309]">secure intake forms</Link>{" "}
                  or message us via{" "}
                  <a href={SPRUCE_URL} target="_blank" rel="noopener noreferrer" className="underline hover:text-[#B45309]">Spruce</a>.
                </p>
              </div>

              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-14 h-14 text-[#2E8B6E] mb-4" />
                  <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-2xl mb-2">Message Received</h3>
                  <p className="text-[#374151] font-['Nunito_Sans'] text-sm max-w-sm">
                    Thank you for reaching out. We will respond within one business day. For urgent matters, please call us at (928) 614-3834.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Jane Smith"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="jane@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-1.5">
                        Phone Number <span className="text-[#9CA3AF] font-400 normal-case tracking-normal">(optional)</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="(928) 555-0100"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-1.5">
                        Reason for Contact
                      </label>
                      <select
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select a reason…</option>
                        {REASON_OPTIONS.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-1.5">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="How can we help you? (Do not include medical history or health information)"
                      value={formData.message}
                      onChange={handleChange}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <p className="text-sm font-['Nunito_Sans']">Something went wrong. Please try again or call us directly at (928) 614-3834.</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-[#1B5E4B] hover:bg-[#174f3e] disabled:opacity-60 text-white font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
                  >
                    {status === "submitting" ? "Sending…" : <>Send Message <ArrowRight className="w-4 h-4" /></>}
                  </button>

                  <p className="text-center text-[#9CA3AF] font-['Nunito_Sans'] text-xs">
                    <Lock className="w-3 h-3 inline mr-1" />
                    Submitted via HIPAA-compliant secure form
                  </p>
                </form>
              )}
            </div>

            {/* ── RIGHT: CLINIC INFO + SPRUCE ── */}
            <div className="lg:col-span-2 space-y-6">

              {/* Spruce Card */}
              <div className="bg-[#1B5E4B] rounded-2xl p-6 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-[#7EC8A4] font-['Nunito_Sans'] font-700 text-xs tracking-widest uppercase">Preferred Method</p>
                    <h3 className="font-['Lora'] font-700 text-white text-lg leading-tight">Secure Messaging via Spruce</h3>
                  </div>
                </div>
                <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm leading-relaxed mb-4">
                  Spruce is our HIPAA-compliant secure messaging platform. Send texts, photos, or clinical questions directly to our team — no app download required.
                </p>
                <a
                  href={SPRUCE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-white hover:bg-[#E8F5EE] text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
                >
                  <MessageSquare className="w-4 h-4" /> Message Us on Spruce <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>

              {/* Clinic Info */}
              <div className="bg-[#F2F7F5] rounded-2xl p-6 space-y-4">
                <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-lg mb-1">Clinic Information</h3>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-0.5">Location</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm">3970 W 24th St Ste 209<br />Yuma, AZ 85364</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-0.5">Phone</p>
                    <a href="tel:+19286143834" className="text-[#374151] font-['Nunito_Sans'] text-sm hover:text-[#2E8B6E] transition-colors">(928) 614-3834</a>
                    <p className="text-[#9CA3AF] font-['Nunito_Sans'] text-xs mt-0.5">Please leave a voicemail if unavailable</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Printer className="w-4 h-4 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-0.5">Fax</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm">(928) 250-1591</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-0.5">
                      Email <span className="inline-flex items-center gap-1 ml-1 text-[#2E8B6E] normal-case tracking-normal"><Lock className="w-2.5 h-2.5" />HIPAA-Compliant</span>
                    </p>
                    <a href="mailto:jdhutch93@HarborCoveHealth.com" className="text-[#374151] font-['Nunito_Sans'] text-sm hover:text-[#2E8B6E] transition-colors break-all">
                      jdhutch93@HarborCoveHealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-0.5">Office Hours</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm">Mon – Fri: By appointment</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm">Sat: Selected appointments</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-sm">Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="space-y-2">
                <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-xs uppercase tracking-wide mb-2">Quick Actions</p>
                {[
                  { title: "Start Weight Loss Program", desc: "New patient intake form", href: "https://intakeq.com/new/d1pshm", external: true },
                  { title: "Start Ketamine Therapy", desc: "New patient intake form", href: "https://intakeq.com/new/hv6pho", external: true },
                  { title: "View All Intake Forms", desc: "All forms in one place", href: "/intake-forms", external: false },
                ].map(({ title, desc, href, external }) =>
                  external ? (
                    <a key={title} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between p-3.5 bg-[#F2F7F5] hover:bg-[#D4E8DF] border border-[#D4E8DF] rounded-xl transition-colors group">
                      <div>
                        <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm">{title}</p>
                        <p className="text-[#9CA3AF] font-['Nunito_Sans'] text-xs">{desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2E8B6E] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </a>
                  ) : (
                    <Link key={title} href={href}
                      className="flex items-center justify-between p-3.5 bg-[#F2F7F5] hover:bg-[#D4E8DF] border border-[#D4E8DF] rounded-xl transition-colors group">
                      <div>
                        <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm">{title}</p>
                        <p className="text-[#9CA3AF] font-['Nunito_Sans'] text-xs">{desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2E8B6E] group-hover:translate-x-1 transition-transform flex-shrink-0" />
                    </Link>
                  )
                )}
              </div>
            </div>

          </div>

          {/* ── MAP — full width below both columns ── */}
          <div className="mt-12 pt-10 border-t border-[#D4E8DF]">
            <div className="mb-5">
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-xs tracking-widest uppercase mb-1">Find Us</p>
              <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-2xl">Our Location</h3>
              <p className="text-[#6B7280] font-['Nunito_Sans'] text-sm mt-1">3970 W 24th St, Suite 209 · Yuma, AZ 85364</p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-md border border-[#D4E8DF]" style={{ height: '380px' }}>
              <iframe
                title="HarborCove Health Location"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.5!2d-114.6667825!3d32.6847197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d6f62d2ccb77db%3A0xebb8cc36fc71248d!2s3970%20W%2024th%20St%20STE%20209%2C%20Yuma%2C%20AZ%2085364!5e1!3m2!1sen!2sus!4v1710000000001"
              />
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="https://maps.google.com/?q=3970+W+24th+St+Suite+209+Yuma+AZ+85364"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#1B5E4B] hover:bg-[#174f3e] text-white font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
              >
                <MapPin className="w-4 h-4" /> Open in Google Maps
              </a>
              <a
                href="https://maps.apple.com/?address=3970+W+24th+St,+Suite+209,+Yuma,+AZ+85364"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white hover:bg-[#E8F5EE] border border-[#D4E8DF] text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm rounded-xl transition-colors"
              >
                <MapPin className="w-4 h-4" /> Open in Apple Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="py-8 bg-[#F4F7FA] border-t border-[#E8EEF4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B7280] font-['Nunito_Sans'] text-xs leading-relaxed text-center max-w-3xl mx-auto">
            HarborCove Health does not provide emergency medical services. If you are experiencing a mental health emergency or medical crisis, please call 911 or go to your nearest emergency room. For mental health crises, you may also contact the 988 Suicide and Crisis Lifeline by calling or texting 988.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
