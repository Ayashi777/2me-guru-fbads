// FIX: This file was populated with a complete React component to resolve compilation errors and structure the application layout.
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import WhyUs from './components/WhyUs';
import CaseStudies from './components/CaseStudies';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import TrustBadges from './components/TrustBadges';
import SalesPipeline from './components/SalesPipeline';
import CostComparison from './components/CostComparison';
import RoiCalculator from './components/RoiCalculator';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <Services />
        <CaseStudies />
        <HowItWorks />
        <WhyUs />
        <SalesPipeline />
        <Testimonials />
        <Team />
        <CostComparison />
        <Pricing />
        <RoiCalculator />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default App;
