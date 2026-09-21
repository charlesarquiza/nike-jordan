import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ShoppingBag, ArrowUpRight, Github } from 'lucide-react';

interface NavbarProps {
  currency: 'PHP' | 'USD';
  onToggleCurrency: () => void;
  onOpenReserve: () => void;
  onOpenGitHubGuide: () => void;
  reservedCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currency,
  onToggleCurrency,
  onOpenReserve,
  onOpenGitHubGuide,
  reservedCount
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'THE SILHOUETTE', href: '#silhouette' },
    { label: 'CRAFTSMANSHIP', href: '#craftsmanship' },
    { label: 'ANATOMY', href: '#anatomy' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'SPECIFICATIONS', href: '#specs' },
    { label: 'INQUIRE', href: '#inquire' },
  ];

  return (
    <header
      id="main-navigation-bar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070709]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl shadow-black/80'
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Crest / Logo (Matches Aurelio Rosso crest in Image 2) */}
        <a
          href="#hero"
          className="flex items-center gap-3 group focus:outline-none"
          id="nav-brand-logo"
        >
          <div className="w-10 h-10 rounded-sm border border-[#c91c28]/60 bg-gradient-to-b from-[#1a0f12] to-[#0d0d10] flex items-center justify-center p-1.5 shadow-lg group-hover:border-[#c91c28] transition-colors">
            {/* Stylized Jumpman/Wings Silhouette Vector */}
            <svg
              viewBox="0 0 24 24"
              className="w-full h-full fill-current text-[#c91c28] group-hover:text-white transition-colors"
            >
              <path d="M12 2L14.2 8.3H20.8L15.4 12.2L17.5 18.5L12 14.6L6.5 18.5L8.6 12.2L3.2 8.3H9.8L12 2Z" />
              <circle cx="12" cy="12" r="2" fill="currentColor" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-sm tracking-[0.25em] text-white uppercase font-bold leading-tight group-hover:text-[#c91c28] transition-colors">
              JORDAN RETRO
            </span>
            <span className="text-[9px] tracking-[0.3em] text-neutral-400 uppercase font-mono">
              HIGH OG • DZ5485-201
            </span>
          </div>
        </a>

        {/* Desktop Nav Links (Matches Aurelio Rosso center links) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-xs font-semibold tracking-[0.18em] text-neutral-300 hover:text-white transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#c91c28] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions: Currency Toggle, GitHub Deploy info, and Inquire/Reserve Button */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Currency Switcher */}
          <button
            id="currency-toggle-button"
            onClick={onToggleCurrency}
            className="px-2.5 py-1.5 rounded text-[11px] font-mono tracking-wider text-neutral-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all flex items-center gap-1.5"
            title="Toggle currency display (PHP / USD)"
          >
            <Globe className="w-3 h-3 text-[#c91c28]" />
            <span>{currency === 'PHP' ? '₱ PHP (₱9,895)' : '$ USD ($185)'}</span>
          </button>

          {/* GitHub Pages Deploy Guide Button */}
          <button
            id="github-pages-guide-button"
            onClick={onOpenGitHubGuide}
            className="p-1.5 rounded text-neutral-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 transition-all"
            title="GitHub Pages Deployment Guide & Setup"
          >
            <Github className="w-4 h-4 text-neutral-300" />
          </button>

          {/* Luxury Order / Inquire Button (Matches Image 2 "INQUIRE") */}
          <button
            id="nav-reserve-button"
            onClick={onOpenReserve}
            className="px-5 py-2 text-xs font-semibold tracking-[0.2em] uppercase text-white bg-transparent border border-white/25 hover:border-[#c91c28] hover:bg-[#c91c28]/10 transition-all duration-200 relative group flex items-center gap-2"
          >
            <span>RESERVE</span>
            {reservedCount > 0 && (
              <span className="w-4 h-4 rounded-full bg-[#c91c28] text-white text-[10px] flex items-center justify-center font-mono">
                {reservedCount}
              </span>
            )}
            <ArrowUpRight className="w-3.5 h-3.5 text-[#c91c28] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="mobile-reserve-trigger"
            onClick={onOpenReserve}
            className="px-3 py-1.5 text-[11px] font-bold tracking-wider uppercase text-white bg-[#c91c28] rounded-xs"
          >
            RESERVE
          </button>
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-300 hover:text-white rounded-md bg-white/5 border border-white/10"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#0a0a0d] border-b border-white/10 px-6 py-8 mt-2 space-y-5 animate-in slide-in-from-top-4 duration-200"
        >
          <div className="space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-semibold tracking-[0.2em] text-neutral-200 hover:text-[#c91c28] py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-neutral-400 py-2 border-t border-white/10">
              <span>Display Currency:</span>
              <button
                onClick={onToggleCurrency}
                className="px-3 py-1 rounded bg-white/10 text-white font-mono"
              >
                {currency} ({currency === 'PHP' ? '₱9,895' : '$185'})
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGitHubGuide();
              }}
              className="w-full py-2.5 px-4 rounded border border-white/10 text-xs font-mono text-neutral-300 flex items-center justify-center gap-2 hover:bg-white/5"
            >
              <Github className="w-4 h-4" />
              GitHub Pages Deployment Info
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReserve();
              }}
              className="w-full py-3 bg-[#c91c28] text-white text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#b01822] transition-colors"
            >
              RESERVE YOUR PAIR NOW
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
