/* ============================================================
   HARBORCOVE HEALTH — Navbar
   Large prestigious logo: big shield + exact brand wordmark
   Reference: intakeq.com form header with large shield
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ketamine-therapy", label: "Ketamine Therapy" },
  { href: "/weight-management", label: "Weight Management" },
  { href: "/provider-referral", label: "For Providers" },
  { href: "/intake-forms", label: "Intake Forms" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#1B5E4B] shadow-xl"
          : "bg-[#1B5E4B]/92 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '100px' }}>

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-4 group flex-shrink-0">
            {/* LARGE shield — transparent, no white box, high detail visible */}
            <img
              src="/assets/logo-shield-transparent.png"
              alt="HarborCove Health"
              style={{
                height: '92px',
                width: '92px',
                objectFit: 'contain',
                flexShrink: 0,
                filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.45))',
                transition: 'transform 0.3s ease',
              }}
              className="group-hover:scale-105"
            />

            {/* Wordmark — exact brand typography matching provided logo */}
            <div className="hidden sm:flex flex-col justify-center" style={{ gap: 0 }}>
              {/* "HarborCove" — large elegant serif */}
              <span
                style={{
                  fontFamily: "'Lora', Georgia, 'Times New Roman', serif",
                  fontWeight: 400,
                  fontSize: '2.4rem',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  textShadow: '0 1px 8px rgba(0,0,0,0.3)',
                }}
              >
                HarborCove
              </span>

              {/* Wave swoosh SVG */}
              <svg
                viewBox="0 0 220 16"
                style={{ width: '100%', height: '11px', marginTop: '3px', marginBottom: '2px' }}
                preserveAspectRatio="none"
              >
                <path
                  d="M 8 8 Q 55 1, 110 8 Q 165 15, 212 8"
                  fill="none"
                  stroke="#7EC8A4"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>

              {/* "HEALTH" — spaced lighter teal */}
              <span
                style={{
                  fontFamily: "'Nunito Sans', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 300,
                  fontSize: '0.72rem',
                  color: '#7EC8A4',
                  letterSpacing: '0.42em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  textAlign: 'center',
                }}
              >
                Health
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm rounded transition-colors duration-150 ${
                  location === link.href
                    ? "text-white bg-white/15 font-semibold"
                    : "text-[#C8E6D4] hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: location === link.href ? 600 : 400 }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/intake-forms"
              className="ml-3 px-5 py-2 bg-[#2E8B6E] hover:bg-[#267A60] text-white text-sm rounded transition-colors duration-150 shadow-sm"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
            >
              Start Intake
            </Link>
          </nav>

          {/* ── MOBILE MENU BUTTON ── */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU ── */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#1B5E4B] border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2.5 text-sm rounded transition-colors ${
                  location === link.href
                    ? "text-white bg-white/15 font-semibold"
                    : "text-[#C8E6D4] hover:text-white hover:bg-white/10"
                }`}
                style={{ fontFamily: "'Nunito Sans', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/intake-forms"
              className="mt-2 px-4 py-3 bg-[#2E8B6E] text-white text-sm rounded text-center"
              style={{ fontFamily: "'Nunito Sans', sans-serif", fontWeight: 700 }}
            >
              Start Intake
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
