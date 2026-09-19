import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { FAQ_LIST, BUSINESS_CONFIG } from '../data/businessConfig';

interface FaqAccordionProps {
  onOpenEstimate: () => void;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ onOpenEstimate }) => {
  // First item open by default for immediate context
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-3']);

  const toggleFaq = (id: string) => {
    setOpenIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Common Questions About Remodeling
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Find answers to standard questions about our residential remodeling services, estimate requests, and service area in North Carolina.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" role="region" aria-label="FAQ Accordion">
          {FAQ_LIST.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                id={`accordion-item-${faq.id}`}
                className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'border-[#307ab4] bg-[#f8fbfe] shadow-xs'
                    : 'border-[#e2ecf4] bg-white hover:border-[#307ab4]/50'
                }`}
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#307ab4]"
                >
                  <span className="text-base sm:text-lg font-bold text-[#132537] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                    isOpen ? 'bg-[#0d3356] text-white rotate-180' : 'bg-[#eef5fa] text-[#0d3356]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-[#eef4fa]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Help Note */}
        <div className="mt-12 p-6 rounded-2xl bg-[#f8fbfe] border border-[#e2ecf4] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h3 className="text-base font-bold text-[#132537]">Have a question not listed here?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">We are happy to answer any questions about your residential renovation.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-white border border-[#d4e4f2] text-[#132537] hover:text-[#307ab4] text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#307ab4]" />
              <span>Call Us</span>
            </a>
            <button
              type="button"
              onClick={onOpenEstimate}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-[#0d3356] hover:bg-[#154370] text-white text-xs sm:text-sm font-bold transition-all shadow-xs"
            >
              <span>Get Estimate</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
