import React from 'react';
import { ArrowRight, Home, Sparkles, Check, Phone } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface IntroductionProps {
  onOpenEstimate: () => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ onOpenEstimate }) => {
  return (
    <section id="introduction" className="py-20 bg-white border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Natural, Trustworthy Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider">
              <span>About Our Work</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight leading-tight">
              Thoughtful Home Renovations Crafted for the Way You Live
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every home tells a story, but over time, layouts become outdated, materials wear down, and spaces no longer accommodate the demands of everyday family life. At <strong className="text-[#0d3356] font-bold">{BUSINESS_CONFIG.companyName}</strong>, we help North Carolina homeowners breathe fresh life into their existing spaces through dependable, well-managed remodeling and renovation services.
            </p>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Whether you are planning a modern kitchen reconfiguration, creating a restful master bathroom retreat, adding square footage with a seamless room addition, or renovating an entire residence, our focus is simple: clear communication, careful planning, and craftsmanship you can rely on.
            </p>

            {/* Core commitments list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f4f8fc] border border-[#e2ecf4]">
                <div className="w-5 h-5 rounded-full bg-[#e1edf7] flex items-center justify-center text-[#307ab4] flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#132537]">Personalized Planning</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Custom layout adjustments tailored to your routine and spatial needs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f4f8fc] border border-[#e2ecf4]">
                <div className="w-5 h-5 rounded-full bg-[#e1edf7] flex items-center justify-center text-[#307ab4] flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#132537]">Clean Job Sites</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Respectful home protection, daily cleanup, and considerate scheduling.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f4f8fc] border border-[#e2ecf4]">
                <div className="w-5 h-5 rounded-full bg-[#e1edf7] flex items-center justify-center text-[#307ab4] flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#132537]">Quality Materials</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Guidance on durable surfaces, cabinetry, tiles, and fixtures.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-lg bg-[#f4f8fc] border border-[#e2ecf4]">
                <div className="w-5 h-5 rounded-full bg-[#e1edf7] flex items-center justify-center text-[#307ab4] flex-shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#132537]">Local North Carolina Focus</h3>
                  <p className="text-xs text-slate-600 mt-0.5">Dedicated service throughout North Carolina and communities within ~60 km.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                type="button"
                onClick={onOpenEstimate}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#0d3356] hover:bg-[#154370] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Request a Free Estimate</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#d4e4f2] bg-white text-[#132537] hover:text-[#0d3356] hover:border-[#307ab4] hover:bg-[#f4f8fc] font-semibold text-sm transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#307ab4]" />
                <span>Call {BUSINESS_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-[#d4e4f2] aspect-[4/5] relative">
                <img
                  src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                  alt="High quality kitchen remodeling craftsmanship with modern cabinets and island"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#081d33]/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#e2ecf4] shadow-lg text-[#132537]">
                  <p className="text-xs uppercase font-bold text-[#307ab4] tracking-wider">Residential Transformation</p>
                  <p className="text-sm font-semibold text-[#132537] mt-1">From outdated spaces to modern living environments in North Carolina.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
