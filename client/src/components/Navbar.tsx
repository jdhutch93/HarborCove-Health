/* ============================================================
   HARBORCOVE HEALTH — Navbar
   Design: Harbor Light — sticky, transparent-to-solid on scroll
   Teal/green background, large prestigious logo, Lora + Nunito Sans
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
          : "bg-[#1B5E4B]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between" style={{ height: '76px' }}>

          {/* ── LOGO ── */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            {/* Shield — transparent background, large and commanding */}
            <img
              src="/assets/logo-shield-transparent.png"
              alt="HarborCove Health"
              style={{
                height: '60px',
                width: '60px',
                objectFit: 'contain',
                flexShrink: 0,
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))',
                transition: 'transform 0.3s ease',
              }}
              className="group-hover:scale-105"
            />
            {/* Wordmark — elegant serif + spaced caps */}
            <div className="hidden sm:flex flex-col justify-center" style={{ gap: '1px' }}>
              <span
                style={{
                  fontFamily: "'Lora', Georgia, serif",
                  fontWeight: 700,
                  fontSize: '1.5rem',
                  color: '#ffffff',
                  letterSpacing: '-0.01em',
                  lineHeight: 1,
                  textShadow: '0 1px 4px rgba(0,0,0,0.2)',
                }}
              >
                HarborCove
              </span>
              <span
                style={{
                  fontFamily: "'Nunito Sans', sans-serif",
                  fontWeight: 300,
                  fontSize: '0.6rem',
                  color: '#7EC8A4',
                  letterSpacing: '0.35em',
                  textTransform: 'uppercase',
                  lineHeight: 1,
                  marginTop: '4px',
                  paddingLeft: '2px',
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
                className={`px-3 py-2 text-sm font-['Nunito_Sans'] font-600 rounded transition-colors duration-150 ${
                  location === link.href
                    ? "text-white bg-white/15"
                    : "text-[#C8E6D4] hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/intake-forms"
              className="ml-3 px-4 py-2 bg-[#2E8B6E] hover:bg-[#267A60] text-white text-sm font-['Nunito_Sans'] font-700 rounded transition-colors duration-150 shadow-sm"
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
                className={`px-3 py-2.5 text-sm font-['Nunito_Sans'] font-600 rounded transition-colors ${
                  location === link.href
                    ? "text-white bg-white/15"
                    : "text-[#C8E6D4] hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/intake-forms"
              className="mt-2 px-4 py-3 bg-[#2E8B6E] text-white text-sm font-['Nunito_Sans'] font-700 rounded text-center"
            >
              Start Intake
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
