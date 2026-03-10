/* ============================================================
   HARBORCOVE HEALTH — Navbar
   Design: Harbor Light — sticky, transparent-to-solid on scroll
   Navy background, Lora logo, Nunito Sans nav links
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
          ? "bg-[#1B5E4B] shadow-lg"
          : "bg-[#1B5E4B]/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src="/assets/logo-shield.png"
              alt="HarborCove Health Logo"
              className="h-10 w-10 object-contain flex-shrink-0 drop-shadow-sm"
            />
            <div className="hidden sm:flex flex-col leading-none">
              <span className="font-['Lora'] font-700 text-white text-lg tracking-tight leading-tight">HarborCove</span>
              <span className="font-['Nunito_Sans'] font-400 text-[#C8E6D4] text-xs tracking-[0.18em] uppercase leading-tight">Health</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
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
              className="ml-3 px-4 py-2 bg-[#2E8B6E] hover:bg-[#267A60] text-white text-sm font-['Nunito_Sans'] font-700 rounded transition-colors duration-150"
            >
              Start Intake
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
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
