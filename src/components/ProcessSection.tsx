import React from 'react';
import { PhoneCall, MessageSquareQuote, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { PROCESS_STEPS } from '../data/businessConfig';

interface ProcessSectionProps {
  onOpenEstimate: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenEstimate }) => {
  const stepIcons = [
    <PhoneCall className="w-6 h-6 text-[#307ab4]" />,
    <MessageSquareQuote className="w-6 h-6 text-[#307ab4]" />,
    <FileText className="w-6 h-6 text-[#307ab4]" />,
    <Sparkles className="w-6 h-6 text-[#307ab4]" />,
  ];

  return (
    <section id="process" className="py-20 bg-[#f4f8fc] border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <span>Simple & Organized</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Our 4-Step Remodeling Process
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We follow a straightforward, organized workflow to ensure clear expectations, reliable scheduling, and a smooth renovation from start to finish.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              id={`process-step-${step.step}`}
              className="relative bg-white rounded-2xl p-6 sm:p-7 border border-[#e2ecf4] hover:border-[#307ab4]/60 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#eef5fa] border border-[#d4e4f2] flex items-center justify-center">
                    {stepIcons[idx % stepIcons.length]}
                  </div>
                  <span className="text-2xl font-black text-slate-300 tracking-tighter">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#132537] mb-3 tracking-tight">
                  {step.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#eef4fa] flex items-center gap-2 text-xs font-bold text-[#307ab4]">
                <span>Phase 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA */}
        <div className="mt-14 text-center">
          <button
            type="button"
            id="process-primary-estimate-cta"
            onClick={onOpenEstimate}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0d3356] hover:bg-[#154370] text-white text-base font-bold shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Request a Free Estimate</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};
