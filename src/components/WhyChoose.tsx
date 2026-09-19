import React from 'react';
import { 
  Users, 
  Search, 
  MessageSquare, 
  ShieldCheck, 
  ClipboardList, 
  Layers, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  Phone
} from 'lucide-react';
import { WHY_CHOOSE_REASONS, BUSINESS_CONFIG } from '../data/businessConfig';

interface WhyChooseProps {
  onOpenEstimate: () => void;
}

export const WhyChoose: React.FC<WhyChooseProps> = ({ onOpenEstimate }) => {
  const iconMap = [
    <Users className="w-5 h-5 text-[#307ab4]" />,
    <Search className="w-5 h-5 text-[#307ab4]" />,
    <MessageSquare className="w-5 h-5 text-[#307ab4]" />,
    <ShieldCheck className="w-5 h-5 text-[#307ab4]" />,
    <ClipboardList className="w-5 h-5 text-[#307ab4]" />,
    <Layers className="w-5 h-5 text-[#307ab4]" />,
    <MapPin className="w-5 h-5 text-[#307ab4]" />,
  ];

  return (
    <section id="why-choose" className="py-20 bg-white border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Dedicated Remodeling Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Why Homeowners Choose A&J Remodeling
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Remodeling your home is a major decision. We approach every residential renovation with structured planning, honest collaboration, and focused execution.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {WHY_CHOOSE_REASONS.map((reason, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#f8fbfe] border border-[#e2ecf4] hover:border-[#307ab4]/60 hover:bg-white hover:shadow-lg transition-all duration-200 group"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-[#d4e4f2] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform shadow-xs">
                {iconMap[idx % iconMap.length]}
              </div>
              <h3 className="text-lg font-bold text-[#132537] mb-2 group-hover:text-[#0d3356] transition-colors">
                {reason.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}

          {/* Quick Contact Card inside grid */}
          <div className="p-6 rounded-xl bg-[#081d33] border border-[#0f2d4a] text-white flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-[#4ea5dc]">Ready to begin?</span>
              <h3 className="text-lg font-bold text-white mt-1 mb-2">Speak With Our Team</h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                Have questions regarding your space or wish to schedule a consultation in North Carolina?
              </p>
            </div>
            <div className="space-y-2">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors border border-white/10"
              >
                <Phone className="w-3.5 h-3.5 text-[#4ea5dc]" />
                <span>{BUSINESS_CONFIG.phone}</span>
              </a>
              <button
                type="button"
                onClick={onOpenEstimate}
                className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#307ab4] hover:bg-[#20669b] text-white text-xs font-bold transition-colors shadow-xs"
              >
                <span>Free Estimate</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
