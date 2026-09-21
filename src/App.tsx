import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SpecsBar } from './components/SpecsBar';
import { SilhouetteSection } from './components/SilhouetteSection';
import { CraftsmanshipSection } from './components/CraftsmanshipSection';
import { AnatomySection } from './components/AnatomySection';
import { LifestyleGallery } from './components/LifestyleGallery';
import { TestimonialQuote } from './components/TestimonialQuote';
import { InquiryForm } from './components/InquiryForm';
import { Footer } from './components/Footer';
import { QuickReserveModal } from './components/QuickReserveModal';
import { GitHubPagesModal } from './components/GitHubPagesModal';

export default function App() {
  const [currency, setCurrency] = useState<'PHP' | 'USD'>('PHP');
  const [reserveModalOpen, setReserveModalOpen] = useState(false);
  const [gitHubGuideOpen, setGitHubGuideOpen] = useState(false);
  const [reservedCount, setReservedCount] = useState(0);

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === 'PHP' ? 'USD' : 'PHP'));
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleReservationSuccess = () => {
    setReservedCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-[#070709] text-[#ededed] selection:bg-[#c91c28] selection:text-white relative">
      
      {/* Top Luxury Navigation */}
      <Navbar
        currency={currency}
        onToggleCurrency={toggleCurrency}
        onOpenReserve={() => setReserveModalOpen(true)}
        onOpenGitHubGuide={() => setGitHubGuideOpen(true)}
        reservedCount={reservedCount}
      />

      <main>
        {/* Hero Section: Features Image 1 (Exploded Sneaker Breakdown) and Image 2 Editorial Layout */}
        <Hero
          currency={currency}
          onReserveClick={() => scrollToSection('inquire')}
          onExploreAnatomy={() => scrollToSection('anatomy')}
        />

        {/* 5-Column Metric Bar (Matches Image 2) */}
        <SpecsBar />

        {/* The Flagship Silhouette Showcase (Matches Image 2 V10 side profile showcase) */}
        <SilhouetteSection onExploreMore={() => scrollToSection('craftsmanship')} />

        {/* Craftsmanship & Leather Materials (Matches Image 2 "Obsession In Every Detail" + Brass Plaque) */}
        <CraftsmanshipSection />

        {/* Anatomy & Deconstructed Layers ("Athlete Focused" interactive layer stepper) */}
        <AnatomySection />

        {/* Lifestyle Gallery (Matches Image 2 "A Lifestyle Beyond Drive" 3-photo triptych) */}
        <LifestyleGallery />

        {/* Heritage Quote with Red Taillight Ambience (Matches Image 2 Quote) */}
        <TestimonialQuote />

        {/* Size Reservation Inquiry Form (Matches Image 2 "Begin Your Journey / Inquire") */}
        <InquiryForm
          currency={currency}
          onReservationSuccess={handleReservationSuccess}
        />
      </main>

      {/* Luxury Footer (Matches Image 2 footer) */}
      <Footer
        onOpenGitHubGuide={() => setGitHubGuideOpen(true)}
        onOpenReserve={() => setReserveModalOpen(true)}
      />

      {/* Quick Size Reservation Drawer/Modal */}
      <QuickReserveModal
        isOpen={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
        currency={currency}
        onConfirmed={handleReservationSuccess}
      />

      {/* GitHub Pages 1-Click Deployment Guide Modal */}
      <GitHubPagesModal
        isOpen={gitHubGuideOpen}
        onClose={() => setGitHubGuideOpen(false)}
      />
    </div>
  );
}
