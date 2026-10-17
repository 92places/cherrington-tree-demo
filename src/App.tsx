import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { EstimateCalculator } from './components/EstimateCalculator';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { MobileCallBar } from './components/MobileCallBar';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("Palm Tree Moving");

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const element = document.getElementById("estimate-calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToEstimate = () => {
    const element = document.getElementById("estimate-calculator");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 flex flex-col font-sans">
      {/* Top Navbar following Top Bar Contract */}
      <Navbar onOpenEstimateModal={handleScrollToEstimate} />

      <main className="flex-grow">
        {/* 1. Hero Section with custom palm landscape scenery, exact headline, sub-headline, and CTA 1 */}
        <Hero onOpenEstimateModal={handleScrollToEstimate} />

        {/* 2. Our Services Section with exact 3-grid layout, exact cards & descriptions */}
        <Services onSelectService={handleSelectService} />

        {/* 3. Trust & Testimonials with big "Proudly Rated 5.0 Stars on Google!" badge and 3 reviews */}
        <TrustSection />

        {/* Value Proposition & Arborist Equipment Standards */}
        <WhyChooseUs />

        {/* High-Converting Interactive Estimate Calculator */}
        <EstimateCalculator initialService={selectedService} />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* 4. Footer Section with exact business name, phone, hours, and final big CTA */}
      <Footer />

      {/* Mobile Sticky Quick-Call Bar */}
      <MobileCallBar />
    </div>
  );
}
