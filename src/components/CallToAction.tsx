import React from 'react';
import { Phone, ArrowRight, Sparkles, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface CallToActionProps {
  onOpenEstimate: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenEstimate }) => {
  return (
    <section id="cta" className="py-20 bg-[#081d33] text-white relative overflow-hidden border-t border-b border-[#0f2d4a]">
      {/* Background ambient lighting derived from logo blues */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#307ab4]/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#4ea5dc]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#307ab4]/30 text-sky-200 text-xs sm:text-sm font-semibold mb-6">
          <Sparkles className="w-4 h-4 text-[#4ea5dc]" />
          <span>Start Your Renovation</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
          Ready to Transform Your Home?
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Tell us about your remodeling project and let's discuss how A&J Remodeling Contracting Services can help.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <button
            type="button"
            id="cta-get-estimate-btn"
            onClick={onOpenEstimate}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#307ab4] hover:bg-[#20669b] text-white text-base font-bold shadow-xl shadow-sky-950/60 hover:shadow-sky-900/80 border border-[#4ea5dc]/40 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Get a Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
            id="cta-call-phone-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-base font-bold backdrop-blur-sm border border-white/20 transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-sky-300" />
            <span>Call {BUSINESS_CONFIG.phone}</span>
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
          <MapPin className="w-3.5 h-3.5 text-[#4ea5dc]" />
          <span>Serving North Carolina & surrounding areas within ~60 km</span>
        </div>
      </div>
    </section>
  );
};
