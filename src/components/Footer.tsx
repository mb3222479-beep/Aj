import React from 'react';
import { 
  Hammer, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Shield, 
  FileText, 
  HelpCircle, 
  BookOpen 
} from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface FooterProps {
  onOpenEstimate: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
  onOpenGuide: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenEstimate,
  onOpenLegal,
  onOpenGuide,
}) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Service Areas', href: '#service-areas' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const primaryServices = [
    'Kitchen Remodeling',
    'Bathroom Remodeling',
    'Whole Home Remodeling',
    'Home Additions',
    'Flooring',
    'Interior Remodeling',
    'Exterior Remodeling',
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#0a1a2b] text-white pt-16 pb-24 lg:pb-12 border-t border-[#132d48]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#132d48]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex flex-col items-start gap-3">
              <a 
                href="#home" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="bg-white p-2.5 rounded-xl shadow-md inline-block hover:shadow-lg transition-shadow"
                aria-label="A&J Remodeling Contracting Services home"
              >
                <img
                  src={BUSINESS_CONFIG.logoSvgUrl}
                  alt="A&J Remodeling Contracting Services logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <span className="text-base font-bold tracking-tight text-white leading-tight">
                {BUSINESS_CONFIG.companyName}
              </span>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              Residential remodeling and renovation services in North Carolina.
            </p>

            <div className="pt-2 text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#4ea5dc]" />
                <span>North Carolina, USA (Serving ~60 km radius)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#4ea5dc]" />
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="text-white hover:text-[#4ea5dc] font-bold transition-colors"
                >
                  {BUSINESS_CONFIG.phone}
                </a>
              </div>
            </div>

            {/* Social Media Placeholders (No fake URLs) */}
            <div className="pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Profiles (Links will be added):
              </span>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#0d2742] border border-[#1d3e60] text-xs text-slate-300">
                  Facebook Profile
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0d2742] border border-[#1d3e60] text-xs text-slate-300">
                  Instagram
                </span>
                <span className="px-2.5 py-1 rounded bg-[#0d2742] border border-[#1d3e60] text-xs text-slate-300">
                  Google Business
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="hover:text-[#4ea5dc] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Major Remodeling Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              {primaryServices.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick('#services');
                    }}
                    className="hover:text-[#4ea5dc] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Estimate Block */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Get an Estimate
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              Ready to start your North Carolina remodeling project? Contact our team today for a free evaluation.
            </p>
            <button
              type="button"
              id="footer-estimate-cta"
              onClick={onOpenEstimate}
              className="w-full py-3 px-4 rounded-xl bg-[#307ab4] hover:bg-[#256598] text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <span>Get Free Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              id="footer-phone-cta"
              className="w-full py-2.5 px-4 rounded-xl bg-[#0d2742] hover:bg-[#153a60] text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-[#1d3e60]"
            >
              <Phone className="w-3.5 h-3.5 text-[#4ea5dc]" />
              <span>{BUSINESS_CONFIG.phone}</span>
            </a>
          </div>

        </div>

        {/* Bottom Copyright, Legal & Setup Guide links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} {BUSINESS_CONFIG.companyName}. All rights reserved.</p>
            <p className="text-slate-400 mt-0.5">Residential Remodeling & Renovations • North Carolina, USA</p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-[#4ea5dc] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-[#4ea5dc] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <span className="text-slate-700">•</span>
            <button
              type="button"
              onClick={onOpenGuide}
              className="inline-flex items-center gap-1 text-[#4ea5dc] hover:text-[#7ac4f0] font-semibold transition-colors cursor-pointer"
              title="View deployment & address instructions"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Owner Setup Guide</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
