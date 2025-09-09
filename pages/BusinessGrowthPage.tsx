// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';
import Header from '../components/Header';
import HeroV2 from '../components/HeroV2';
import TrustBadgesV2 from '../components/TrustBadgesV2';
import HowItWorksV2 from '../components/HowItWorksV2';
import ServicesV2 from '../components/ServicesV2';
import CaseStudiesV2 from '../components/CaseStudiesV2';
import RoiCalculatorV2 from '../components/RoiCalculatorV2';
import PricingV2 from '../components/PricingV2';
import FAQV2 from '../components/FAQV2';
import ContactFormV2 from '../components/ContactFormV2';
import Footer from '../components/Footer';

const BusinessGrowthPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroV2 />
        <TrustBadgesV2 />
        <ServicesV2 />
        <CaseStudiesV2 />
        <HowItWorksV2 />
        <RoiCalculatorV2 />
        <PricingV2 />
        <FAQV2 />
        <ContactFormV2 />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessGrowthPage;
