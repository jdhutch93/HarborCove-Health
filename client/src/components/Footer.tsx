/* ============================================================
   HARBORCOVE HEALTH — Footer
   Design: Harbor Light — sage green background, harbor wave motif
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Printer } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* Harbor wave SVG divider — sits above footer on white bg */}
      <div className="w-full overflow-hidden leading-none bg-white">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-12 block">
          <path
            d="M0,30 C240,60 480,0 720,30 C960,60 1200,0 1440,30 L1440,60 L0,60 Z"
            fill="#1B5E4B"
          />
        </svg>
      </div>

      <footer className="bg-[#1B5E4B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="/assets/logo-shield-transparent.png"
                  alt="HarborCove Health"
                  style={{
                    height: '72px',
                    width: '72px',
                    objectFit: 'contain',
                    flexShrink: 0,
                    filter: 'drop-shadow(0 3px 10px rgba(0,0,0,0.4))',
                  }}
                />
                <div className="flex flex-col justify-center" style={{ gap: 0 }}>
                  <span style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontWeight: 400,
                    fontSize: '1.5rem',
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1,
                  }}>HarborCove</span>
                  <svg viewBox="0 0 180 14" style={{ width: '100%', height: '9px', marginTop: '2px', marginBottom: '2px' }} preserveAspectRatio="none">
                    <path d="M 6 7 Q 45 1, 90 7 Q 135 13, 174 7" fill="none" stroke="#7EC8A4" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                  <span style={{
                    fontFamily: "'Nunito Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: '0.6rem',
                    color: '#7EC8A4',
                    letterSpacing: '0.38em',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    textAlign: 'center',
                  }}>Health</span>
                </div>
              </div>
              <p className="text-[#C8E6D4] text-sm font-['Nunito_Sans'] leading-relaxed mb-4">
                Evidence-based ketamine therapy and GLP-1 weight management in Yuma, Arizona.
              </p>
              <p className="text-[#C8E6D4] text-xs font-['Nunito_Sans'] leading-relaxed">
                Justin Hutchins, AGACNP-BC, FNP-BC
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-['Lora'] font-600 text-white text-sm mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2">
                <li><Link href="/ketamine-therapy" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">IV Ketamine Therapy</Link></li>
                <li><Link href="/weight-management" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">GLP-1 Weight Management</Link></li>
                <li><Link href="/provider-referral" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Provider Referrals</Link></li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Lora'] font-600 text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/intake-forms" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Patient Intake Forms</Link></li>
                <li><Link href="/about" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Lora'] font-600 text-white text-sm mb-4 uppercase tracking-wider">Contact</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#7EC8A4] mt-0.5 flex-shrink-0" />
                  <span className="text-[#C8E6D4] text-sm font-['Nunito_Sans']">3970 W 36th St Ste 209<br />Yuma, AZ 85364</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#7EC8A4] mt-0.5 flex-shrink-0" />
                  <a href="tel:+19286143834" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">(928) 614-3834</a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Printer className="w-4 h-4 text-[#7EC8A4] mt-0.5 flex-shrink-0" />
                  <span className="text-[#C8E6D4] text-sm font-['Nunito_Sans']">Fax: (928) 250-1591</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#7EC8A4] mt-0.5 flex-shrink-0" />
                  <a href="mailto:jdhutch93@HarborCoveHealth.com" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">jdhutch93@HarborCoveHealth.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-[#C8E6D4] text-xs font-['Nunito_Sans']">
              © {new Date().getFullYear()} HarborCove Health. All rights reserved.
            </p>
            <p className="text-[#C8E6D4] text-xs font-['Nunito_Sans'] text-center sm:text-right">
              This website is for informational purposes only and does not constitute medical advice.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
