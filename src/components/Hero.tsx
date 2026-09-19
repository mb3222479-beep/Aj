import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Sparkles, CheckCircle2, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface HeroProps {
  onOpenEstimate: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimate }) => {
  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center bg-[#081d33] text-white overflow-hidden">
      {/* Background Remodeling Photography with High-End Dark Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
          alt="Modern renovated open concept kitchen and living space by residential remodeling contractor"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
          decoding="async"
        />
        {/* Multilayered optical overlay using logo's deep dark navy */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#081d33]/98 via-[#081d33]/88 to-[#081d33]/65"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#081d33] via-transparent to-black/30"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
        <div className="max-w-3xl">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#307ab4]/30 text-sky-200 text-xs sm:text-sm font-semibold mb-6">
            <MapPin className="w-4 h-4 text-[#4ea5dc]" />
            <span>Serving North Carolina & Surrounding Areas (~60 km)</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            Transform Your Home With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-[#4ea5dc]">
              Professional Remodeling
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-8 max-w-2xl">
            A&J Remodeling Contracting Services provides quality residential remodeling and renovation services throughout North Carolina and surrounding areas.
          </p>

          {/* Primary & Secondary Call to Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <button
              type="button"
              id="hero-primary-estimate-cta"
              onClick={onOpenEstimate}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#307ab4] hover:bg-[#20669b] text-white text-base font-bold shadow-xl shadow-sky-950/50 hover:shadow-sky-900/70 border border-[#4ea5dc]/40 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              id="hero-secondary-phone-cta"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-base font-bold backdrop-blur-md border border-white/20 transition-all duration-200"
            >
              <Phone className="w-5 h-5 text-sky-300" />
              <span>Call {BUSINESS_CONFIG.phone}</span>
            </a>
          </div>

          {/* Small Trust/Value Row */}
          <div
            id="hero-trust-row"
            className="pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#4ea5dc] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Residential Remodeling</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#4ea5dc] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Quality Craftsmanship</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#4ea5dc] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Free Estimates</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-[#4ea5dc] flex-shrink-0" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide">Serving North Carolina</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
