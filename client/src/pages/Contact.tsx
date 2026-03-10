/* ============================================================
   HARBORCOVE HEALTH — Contact Page
   Design: Harbor Light — clinic info, secure messaging, social links
   ============================================================ */
import { MapPin, Phone, Mail, Clock, Lock, ArrowRight, ExternalLink, Printer } from "lucide-react";
import { Link } from "wouter";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-['Nunito_Sans']">
      <Navbar />

      {/* ── PAGE HEADER ── */}
      <section className="pt-24 pb-12 bg-[#1B5E4B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#C8E6D4] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h1 className="font-['Lora'] font-700 text-white text-4xl sm:text-5xl leading-tight mb-4">
            Contact HarborCove Health
          </h1>
          <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-lg max-w-2xl">
            We are here to answer your questions and help you take the next step. Reach out by phone, email, or use one of our secure intake forms.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO + MESSAGING ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Contact Details */}
            <div>
              <p className="text-[#2E8B6E] font-['Nunito_Sans'] font-700 text-sm tracking-widest uppercase mb-3">Clinic Information</p>
              <h2 className="section-heading font-['Lora'] font-700 text-[#1B5E4B] text-3xl sm:text-4xl leading-tight mb-8">
                Reach Us Directly
              </h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">Location</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-base">3970 W 36th St Ste 209</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-base">Yuma, AZ 85364</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">Phone</p>
                    <a href="tel:+19286143834" className="text-[#374151] font-['Nunito_Sans'] text-base hover:text-[#2E8B6E] transition-colors">
                      (928) 614-3834
                    </a>
                    <p className="text-[#6B7280] font-['Nunito_Sans'] text-sm mt-0.5">Please leave a voicemail if we are unavailable</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Printer className="w-5 h-5 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">Fax</p>
                    <p className="text-[#374151] font-['Nunito_Sans'] text-base">(928) 250-1591</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-0.5">Email</p>
                    <a href="mailto:jdhutch93@HarborCoveHealth.com" className="text-[#374151] font-['Nunito_Sans'] text-base hover:text-[#2E8B6E] transition-colors">
                      jdhutch93@HarborCoveHealth.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1B5E4B]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#1B5E4B]" />
                  </div>
                  <div>
                    <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-1">Office Hours</p>
                    <div className="space-y-1">
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm">Monday – Friday: By appointment</p>
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm">Saturday: Selected appointments available</p>
                      <p className="text-[#374151] font-['Nunito_Sans'] text-sm">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#F0FAF5] hover:bg-[#C8E6D4] border border-[#C8E6D4] rounded-lg text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Facebook
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-[#F0FAF5] hover:bg-[#C8E6D4] border border-[#C8E6D4] rounded-lg text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Secure Messaging + Quick Actions */}
            <div className="space-y-6">
              {/* HIPAA Notice */}
              <div className="bg-[#1B5E4B] rounded-xl p-6 text-white">
                <div className="flex items-start gap-3 mb-4">
                  <Lock className="w-5 h-5 text-[#C8E6D4] flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-['Lora'] font-700 text-white text-lg mb-2">HIPAA-Compliant Communication</h3>
                    <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-sm leading-relaxed">
                      For the security of your protected health information, please do not send sensitive medical details via standard email or social media. All patient intake forms are transmitted through our HIPAA-compliant intake platform.
                    </p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <p className="text-[#C8E6D4] font-['Nunito_Sans'] text-sm font-700 mb-1">For medical inquiries:</p>
                  <p className="text-[#D6E8F5] font-['Nunito_Sans'] text-sm">Please use the secure intake forms linked below, or call our office directly at (928) 614-3834. We respond to all inquiries within one business day.</p>
                </div>
              </div>

              {/* Quick Action Cards */}
              <div className="space-y-3">
                <h3 className="font-['Lora'] font-700 text-[#1B5E4B] text-lg">Quick Actions</h3>
                {[
                  {
                    title: "Ketamine Intake Form",
                    desc: "New patients starting ketamine therapy",
                    href: "https://intakeq.com/new/hv6pho",
                    external: true,
                  },
                  {
                    title: "GLP-1 Intake Form",
                    desc: "New patients starting weight management",
                    href: "https://intakeq.com/new/d1pshm",
                    external: true,
                  },
                  {
                    title: "Provider Referral Form",
                    desc: "For healthcare providers referring patients",
                    href: "https://docs.google.com/forms/d/e/1FAIpQLSeTceK2UP7u4SVgYfk0MeX_uMifMTok0vBOh8kWCX0NaT5xEA/viewform?usp=header",
                    external: true,
                  },
                  {
                    title: "View All Intake Forms",
                    desc: "See all available forms in one place",
                    href: "/intake-forms",
                    external: false,
                  },
                ].map(({ title, desc, href, external }) => (
                  external ? (
                    <a
                      key={title}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between p-4 bg-[#F0FAF5] hover:bg-[#C8E6D4] border border-[#C8E6D4] rounded-lg transition-colors group"
                    >
                      <div>
                        <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm">{title}</p>
                        <p className="text-[#6B7280] font-['Nunito_Sans'] text-xs mt-0.5">{desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2E8B6E] group-hover:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      key={title}
                      href={href}
                      className="flex items-center justify-between p-4 bg-[#F0FAF5] hover:bg-[#C8E6D4] border border-[#C8E6D4] rounded-lg transition-colors group"
                    >
                      <div>
                        <p className="text-[#1B5E4B] font-['Nunito_Sans'] font-700 text-sm">{title}</p>
                        <p className="text-[#6B7280] font-['Nunito_Sans'] text-xs mt-0.5">{desc}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-[#2E8B6E] group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section className="py-10 bg-[#F4F7FA] border-t border-[#E8EEF4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#6B7280] font-['Nunito_Sans'] text-xs leading-relaxed text-center max-w-3xl mx-auto">
            HarborCove Health does not provide emergency medical services. If you are experiencing a mental health emergency or medical crisis, please call 911 or go to your nearest emergency room. For mental health crises, you may also contact the 988 Suicide and Crisis Lifeline by calling or texting 988.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
