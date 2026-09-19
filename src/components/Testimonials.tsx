import React from 'react';
import { MessageSquare, Star, Info, PlusCircle } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

export const Testimonials: React.FC = () => {
  // Explicitly labeled placeholder testimonials as strictly requested
  const placeholderCards = [
    {
      id: "placeholder-1",
      badge: "Customer Review Slot",
      projectType: "Kitchen Remodel",
      location: "North Carolina",
      notice: "Real customer reviews will be added here as client feedback is collected.",
    },
    {
      id: "placeholder-2",
      badge: "Customer Review Slot",
      projectType: "Bathroom Renovation",
      location: "North Carolina",
      notice: "Real customer reviews will be added here once verified homeowners submit project ratings.",
    },
    {
      id: "placeholder-3",
      badge: "Customer Review Slot",
      projectType: "Home Addition",
      location: "North Carolina",
      notice: "Real customer reviews will be added here following scheduled renovation completions.",
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-white border-b border-[#e2ecf4] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#eef5fa] border border-[#d4e4f2] text-[#0d3356] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <MessageSquare className="w-3.5 h-3.5 text-[#307ab4]" />
            <span>Client Feedback & Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132537] tracking-tight mb-4">
            Homeowner Experiences
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We value genuine relationships with every North Carolina homeowner we serve. Authenticity matters to us, which is why we only showcase verified feedback.
          </p>

          {/* Explicit Integrity Notice */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#eef5fa] border border-[#d4e4f2] text-[#132537] text-xs">
            <Info className="w-4 h-4 text-[#307ab4] flex-shrink-0" />
            <span>Notice: We do not publish fabricated ratings or reviews. Real customer reviews and Google Business reviews will be published directly in these slots.</span>
          </div>
        </div>

        {/* Placeholder Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {placeholderCards.map((card) => (
            <div
              key={card.id}
              className="p-6 rounded-2xl bg-[#f8fbfe] border-2 border-dashed border-[#d4e4f2] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-[#eef5fa] border border-[#d4e4f2] text-[11px] font-bold uppercase tracking-wider text-[#0d3356]">
                    {card.badge}
                  </span>
                  <div className="flex items-center gap-1 text-slate-300">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" />
                    ))}
                  </div>
                </div>

                <div className="bg-white p-4 rounded-xl border border-[#e2ecf4] mb-4">
                  <p className="text-sm font-medium text-slate-700 italic leading-relaxed">
                    "{card.notice}"
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-[#e2ecf4] flex items-center justify-between text-xs text-slate-500">
                <span className="font-semibold text-[#132537]">{card.projectType}</span>
                <span>{card.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Integration Instructions Card */}
        <div className="mt-12 max-w-2xl mx-auto p-5 rounded-xl bg-[#f8fbfe] border border-[#e2ecf4] text-center">
          <p className="text-xs font-semibold text-slate-600">
            For Site Administrators: Ready to add your live Google Reviews or client feedback? Simply update the review list in <code className="font-mono text-[#0d3356] bg-white px-1.5 py-0.5 rounded border border-[#d4e4f2]">src/data/businessConfig.ts</code>.
          </p>
        </div>

      </div>
    </section>
  );
};
