import React, { useEffect } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { BUSINESS_CONFIG } from '../data/businessConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    if (!type) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-zinc-200 overflow-hidden transform transition-all max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-zinc-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {type === 'privacy' ? (
              <Shield className="w-5 h-5 text-[#307ab4]" />
            ) : (
              <FileText className="w-5 h-5 text-[#307ab4]" />
            )}
            <h3 id="legal-modal-title" className="text-xl font-bold text-[#132537]">
              {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto text-sm text-slate-600 space-y-4 leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p>
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <p>
                At <strong>{BUSINESS_CONFIG.companyName}</strong>, we respect your privacy and are committed to protecting any personal information you provide when requesting residential remodeling estimates or submitting project inquiries through this website.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">1. Information We Collect</h4>
              <p>
                When you submit an estimate request or contact form, we collect your name, phone number, email address, city/town in North Carolina, project preferences, and any project photos you choose to provide.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">2. How We Use Your Information</h4>
              <p>
                We use the information you provide solely to communicate with you regarding your home remodeling project, schedule consultations, prepare cost estimates, and provide residential contracting services.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">3. Information Sharing</h4>
              <p>
                We do not sell, rent, or trade your personal information to third-party marketing companies. Information is only accessed by authorized personnel responsible for your estimate and project management.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">4. Contacting Us</h4>
              <p>
                If you have questions regarding this Privacy Policy or wish to request the removal of your contact details, please call us at {BUSINESS_CONFIG.phone}.
              </p>
            </>
          ) : (
            <>
              <p>
                <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              <p>
                Welcome to the website of <strong>{BUSINESS_CONFIG.companyName}</strong>. By accessing or using this website, you agree to comply with and be bound by the following terms and conditions.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">1. Estimates and Scope of Work</h4>
              <p>
                Informational figures and online estimate requests submitted through this website do not constitute a binding construction contract. Binding agreements are executed separately following on-site evaluation, detailed project plans, and written contract mutual execution.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">2. Service Territory</h4>
              <p>
                {BUSINESS_CONFIG.companyName} provides residential contracting and remodeling services to homeowners located in North Carolina and surrounding communities within approximately 60 km of our operational service area.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">3. Intellectual Property & Photos</h4>
              <p>
                All text, graphics, and architectural presentation materials on this website are protected. Reproduction or unauthorized use without written consent is prohibited.
              </p>
              <h4 className="font-bold text-[#132537] pt-2">4. Inquiries</h4>
              <p>
                For questions regarding contracts or services, please contact us at {BUSINESS_CONFIG.phone}.
              </p>
            </>
          )}
        </div>

        <div className="p-4 bg-[#f8fbfe] border-t border-[#e2ecf4] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#0d3356] hover:bg-[#154370] text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
