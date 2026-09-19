import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, Hammer, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface HeaderProps {
  onOpenEstimate: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimate, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Service Areas', href: '#service-areas', id: 'service-areas' },
    { label: 'Reviews', href: '#reviews', id: 'reviews' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Banner Notice for North Carolina Homeowners - Deep Logo Navy */}
      <div id="top-bar-notice" className="bg-[#081d33] text-slate-300 text-xs py-2 px-4 border-b border-[#0f2d4a]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 font-medium">
            <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-[#307ab4] animate-pulse"></span>
            <span>Residential Remodeling & Renovations Serving North Carolina</span>
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#307ab4]" />
              <span>NC & Surrounding Areas (~60 km radius)</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <a 
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              id="top-bar-phone-link"
              className="hidden md:flex items-center gap-1.5 text-sky-300 hover:text-white transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-[#307ab4]" />
              {BUSINESS_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        id="main-navigation-header"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-[#e2ecf4]'
            : 'bg-white py-4 border-b border-[#eef4fa]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Official Logo / Company Identity */}
            <a
              href="#home"
              id="header-brand-logo"
              className="flex items-center gap-3 group text-left py-0.5 focus:outline-none focus:ring-2 focus:ring-[#0d3356]/20 rounded-lg"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              aria-label="A&J Remodeling Contracting Services home"
            >
              <img
                src={BUSINESS_CONFIG.logoSvgUrl}
                alt="A&J Remodeling Contracting Services logo"
                className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                referrerPolicy="no-referrer"
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`text-sm font-semibold transition-colors py-1 relative ${
                      isActive 
                        ? 'text-[#0d3356] font-bold after:w-full after:h-[2.5px] after:bg-[#307ab4] after:absolute after:bottom-0 after:left-0' 
                        : 'text-slate-700 hover:text-[#0d3356] hover:after:w-full after:w-0 after:h-[2px] after:bg-[#307ab4] after:absolute after:bottom-0 after:left-0 after:transition-all'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop Header Actions */}
            <div className="hidden md:flex items-center gap-4">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                id="header-phone-button"
                className="flex items-center gap-2 text-zinc-800 hover:text-[#0d3356] font-bold text-sm px-3 py-2 rounded-md hover:bg-zinc-100 transition-colors"
                title="Call A&J Remodeling Contracting Services"
              >
                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-[#307ab4] border border-blue-100">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{BUSINESS_CONFIG.phone}</span>
              </a>

              <button
                type="button"
                id="header-primary-estimate-btn"
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 bg-[#0d3356] hover:bg-[#1b4b7a] text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Get Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                id="mobile-phone-quick-icon"
                className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-[#307ab4] border border-blue-200"
                aria-label="Call Phone Number"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                type="button"
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="w-10 h-10 rounded-lg border border-zinc-200 flex items-center justify-center text-zinc-700 hover:bg-zinc-50 focus:outline-none cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Navigation Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden border-t border-zinc-200 bg-white px-4 pt-4 pb-6 mt-3 shadow-xl animate-fadeIn"
          >
            {/* Mobile Header Brand Identity */}
            <div className="flex items-center gap-3 p-3 mb-4 bg-zinc-50 rounded-xl border border-zinc-100">
              <img
                src={BUSINESS_CONFIG.logoSvgUrl}
                alt="A&J Remodeling Contracting Services logo"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xs text-[#0d3356] leading-tight">
                  A&J Remodeling Contracting Services
                </span>
                <span className="text-[11px] text-zinc-500">
                  Residential Contractor • North Carolina
                </span>
              </div>
            </div>

            <div className="space-y-1 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-3 py-2.5 text-base font-semibold text-[#132537] hover:bg-[#eef5fa] hover:text-[#307ab4] rounded-md transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-zinc-100 flex flex-col gap-3">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                id="mobile-drawer-call-btn"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-zinc-100 hover:bg-zinc-200 text-zinc-900 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-[#307ab4]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>

              <button
                type="button"
                id="mobile-drawer-estimate-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimate();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0d3356] hover:bg-[#1b4b7a] text-white font-bold text-sm shadow-sm cursor-pointer"
              >
                <span>Get a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
