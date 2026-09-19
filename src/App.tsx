/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChoose } from './components/WhyChoose';
import { ProjectGallery } from './components/ProjectGallery';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { ProcessSection } from './components/ProcessSection';
import { CallToAction } from './components/CallToAction';
import { Testimonials } from './components/Testimonials';
import { ServiceAreas } from './components/ServiceAreas';
import { AboutSection } from './components/AboutSection';
import { EstimateForm } from './components/EstimateForm';
import { FaqAccordion } from './components/FaqAccordion';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';
import { SetupGuideModal } from './components/SetupGuideModal';
import { RemodelingService } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<RemodelingService | null>(null);
  const [estimateModalOpen, setEstimateModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [setupGuideOpen, setSetupGuideOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  React.useEffect(() => {
    const sectionIds = ['home', 'services', 'projects', 'about', 'service-areas', 'reviews', 'faq', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEstimate = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    } else {
      setPrefilledService('');
    }
    setEstimateModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#132537] flex flex-col font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Sticky Header with Navigation & Click-to-call */}
      <Header 
        onOpenEstimate={() => handleOpenEstimate()} 
        activeSection={activeSection} 
      />

      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 2: Introduction */}
        <Introduction onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 3: Our Services (12 Services Grid) */}
        <ServicesGrid 
          onSelectService={(service) => setSelectedService(service)}
          onOpenEstimate={handleOpenEstimate}
        />

        {/* Section 4: Why Choose A&J Remodeling */}
        <WhyChoose onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 5: Project Gallery */}
        <ProjectGallery />

        {/* Section 6: Before & After Comparison Slider */}
        <BeforeAfterSlider />

        {/* Section 7: 4-Step Remodeling Process */}
        <ProcessSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 8: Call to Action */}
        <CallToAction onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 9: Customer Testimonials (Explicitly Labeled Placeholders) */}
        <Testimonials />

        {/* Section 10: Service Areas (North Carolina ~60km Radius) */}
        <ServiceAreas onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 11: About Us */}
        <AboutSection onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 12: Lead Generation Free Estimate Form (Inline Section) */}
        <EstimateForm />

        {/* Section 13: Frequently Asked Questions (Accordion) */}
        <FaqAccordion onOpenEstimate={() => handleOpenEstimate()} />

        {/* Section 14: Contact Information & Inquiry Form */}
        <ContactSection onOpenEstimate={() => handleOpenEstimate()} />
      </main>

      {/* Section 15: Footer */}
      <Footer 
        onOpenEstimate={() => handleOpenEstimate()}
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenGuide={() => setSetupGuideOpen(true)}
      />

      {/* Mobile Sticky CTA Bar: Call Now + Get Free Estimate */}
      <MobileStickyBar onOpenEstimate={() => handleOpenEstimate()} />

      {/* Dedicated Service Detail Modal */}
      <ServiceDetailModal 
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenEstimate={handleOpenEstimate}
      />

      {/* Standalone Estimate Request Modal */}
      {estimateModalOpen && (
        <EstimateForm 
          isModal={true}
          initialService={prefilledService}
          onClose={() => setEstimateModalOpen(false)}
        />
      )}

      {/* Privacy Policy & Terms Modal */}
      <LegalModal 
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      {/* Owner Setup & Handoff Guide Modal */}
      <SetupGuideModal 
        isOpen={setupGuideOpen}
        onClose={() => setSetupGuideOpen(false)}
      />
    </div>
  );
}
