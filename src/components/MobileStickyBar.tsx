import React from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface MobileStickyBarProps {
  onOpenEstimate: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ onOpenEstimate }) => {
  return (
    <div 
      id="mobile-sticky-action-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#e2ecf4] px-4 py-3 shadow-[0_-4px_16px_rgba(13,51,86,0.08)] lg:hidden transition-all duration-300"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        {/* Call Now Button */}
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          id="mobile-sticky-call-btn"
          className="flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-xl bg-[#132537] hover:bg-[#0d3356] text-white font-bold text-sm px-4 shadow-sm active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-[#307ab4]" />
          <span>Call Now</span>
        </a>

        {/* Get Free Estimate Button */}
        <button
          type="button"
          id="mobile-sticky-estimate-btn"
          onClick={onOpenEstimate}
          className="flex-1 min-h-[46px] flex items-center justify-center gap-2 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white font-bold text-sm px-4 shadow-sm active:scale-95 transition-all cursor-pointer"
        >
          <span>Get Free Estimate</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
