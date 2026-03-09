/* ============================================================
   HARBORCOVE HEALTH — Footer
   Design: Harbor Light — deep navy background, harbor wave motif
   ============================================================ */
import { Link } from "wouter";
import { Anchor, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Harbor wave SVG divider — sits above footer on white bg */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 block">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#0B3D6B"
          />
        </svg>
      </div>

      <footer className="bg-[#0B3D6B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-full bg-[#1A7FA8] flex items-center justify-center flex-shrink-0">
                  <Anchor className="w-4 h-4 text-white" />
                </div>
                <span className="font-['Lora'] font-700 text-white text-lg">HarborCove Health</span>
              </div>
              <p className="text-[#A9CCE3] text-sm font-['Nunito_Sans'] leading-relaxed mb-4">
                Evidence-based infusion therapy and metabolic health services in Yuma, Arizona.
              </p>
              <p className="text-[#A9CCE3] text-xs font-['Nunito_Sans'] leading-relaxed">
                Justin Hutchins, AGACNP-BC, FNP-BC
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-['Lora'] font-600 text-white text-sm mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/ketamine-therapy" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">IV Ketamine Therapy</Link></li>
                <li><Link href="/weight-management" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">GLP-1 Weight Management</Link></li>
                <li><Link href="/provider-referral" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Provider Referrals</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Lora'] font-600 text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/intake-forms" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Patient Intake Forms</Link></li>
                <li><Link href="/about" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Lora'] font-600 text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                  <span className="text-[#A9CCE3] text-sm font-['Nunito_Sans']">Yuma, Arizona</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                  <a href="tel:+19285551234" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">(928) 555-1234</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#1A7FA8] mt-0.5 flex-shrink-0" />
                  <a href="mailto:info@harborcovehealth.com" className="text-[#A9CCE3] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">info@harborcovehealth.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#A9CCE3] text-xs font-['Nunito_Sans']">
              © {new Date().getFullYear()} HarborCove Health. All rights reserved.
            </p>
            <p className="text-[#A9CCE3] text-xs font-['Nunito_Sans'] text-center sm:text-right">
              This website is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
