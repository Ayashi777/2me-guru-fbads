import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V1 Components
import HeroV1 from '../components/HeroV1';
import TrustBadgesV1 from '../components/TrustBadgesV1';
import HowItWorksV1 from '../components/HowItWorksV1';
import ServicesV1 from '../components/ServicesV1';
import PricingV1 from '../components/PricingV1';
import CaseStudiesV1 from '../components/CaseStudiesV1';
import RoiCalculatorV1 from '../components/RoiCalculatorV1';
import FAQV1 from '../components/FAQV1';
import ContactFormV1 from '../components/ContactFormV1';
import WhyUs from '../components/WhyUs';
import CostComparison from '../components/CostComparison';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

const MarketingProPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroV1 />
        <TrustBadgesV1 />
        <WhyUs />
        <HowItWorksV1 />
        <ServicesV1 />
        <PricingV1 />
        <CostComparison />
        <CaseStudiesV1 />
        <Testimonials />
        <Team />
        <RoiCalculatorV1 />
        <FAQV1 />
        <ContactFormV1 />
      </main>
      <Footer />
    </div>
  );
};

export default MarketingProPage;
