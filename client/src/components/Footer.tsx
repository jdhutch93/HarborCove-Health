/* ============================================================
   HARBORCOVE HEALTH — Footer
   Design: Harbor Light — sage green background, harbor wave motif
   ============================================================ */
import { Link } from "wouter";
import { Phone, Mail, MapPin, Printer, MessageSquare } from "lucide-react";

const SPRUCE_URL = "https://spruce.care/harborcovehealth";

// Social media SVG icons
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

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
              <p className="text-[#C8E6D4] text-xs font-['Nunito_Sans'] leading-relaxed mb-4">
                Justin Hutchins, AGACNP-BC, FNP-BC
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61585062267898"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HarborCove Health on Facebook"
                  className="text-[#C8E6D4] hover:text-white transition-colors"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.instagram.com/harborcovehealth"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="HarborCove Health on Instagram"
                  className="text-[#C8E6D4] hover:text-white transition-colors"
                >
                  <InstagramIcon />
                </a>
              </div>
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
                  <div>
                    <a href="mailto:jdhutch93@HarborCoveHealth.com" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">jdhutch93@HarborCoveHealth.com</a>
                    <p className="text-[#7EC8A4] text-xs font-['Nunito_Sans'] mt-0.5">HIPAA-Compliant Email</p>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MessageSquare className="w-4 h-4 text-[#7EC8A4] mt-0.5 flex-shrink-0" />
                  <div>
                    <a href={SPRUCE_URL} target="_blank" rel="noopener noreferrer" className="text-[#C8E6D4] hover:text-white text-sm font-['Nunito_Sans'] transition-colors">Secure Message via Spruce</a>
                    <p className="text-[#7EC8A4] text-xs font-['Nunito_Sans'] mt-0.5">HIPAA-Compliant Messaging</p>
                  </div>
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
