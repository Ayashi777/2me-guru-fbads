import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V2 Components
import HeroV2 from '../components/HeroV2';
import TrustBadgesV2 from '../components/TrustBadgesV2';
import HowItWorksV2 from '../components/HowItWorksV2';
import ServicesV2 from '../components/ServicesV2';
import PricingV2 from '../components/PricingV2';
import CaseStudiesV2 from '../components/CaseStudiesV2';
import RoiCalculatorV2 from '../components/RoiCalculatorV2';
import FAQV2 from '../components/FAQV2';
import ContactFormV2 from '../components/ContactFormV2';
import WhyUs from '../components/WhyUs';
import CostComparison from '../components/CostComparison';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';

const navLinks = [
    { href: "#services", label: "Приклади" },
    { href: "#how-it-works", label: "Процес" },
    { href: "#case-studies", label: "Кейси" },
    { href: "#pricing", label: "Тарифи" },
    { href: "#roi-calculator", label: "Калькулятор" },
    { href: "#why-us", label: "Чому ми" },
];

const BusinessGrowthPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={navLinks} />
      <main>
        <HeroV2 />
        <TrustBadgesV2 />
        <WhyUs />
        <HowItWorksV2 />
        <ServicesV2 />
        <PricingV2 />
        <CostComparison />
        <CaseStudiesV2 />
        <Testimonials />
        <Team />
        <RoiCalculatorV2 />
        <FAQV2 />
        <ContactFormV2 />
      </main>
      <Footer />
    </div>
  );
};

export default BusinessGrowthPage;