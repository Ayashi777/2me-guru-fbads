import React from 'react';
import Header from '../components/v1/Header';
import Footer from '../components/v1/Footer';

// V1 Components
import Hero from '../components/HeroV1';
import TrustBadges from '../components/TrustBadgesV1';
import HowItWorks from '../components/HowItWorksV1';
import Services from '../components/ServicesV1';
import Pricing from '../components/PricingV1';
import CaseStudies from '../components/CaseStudiesV1';
import RoiCalculator from '../components/RoiCalculatorV1';
import FAQ from '../components/FAQV1';
import ContactForm from '../components/ContactFormV1';
import WhyUs from '../components/v1/WhyUs';
import CostComparison from '../components/v1/CostComparison';
import Testimonials from '../components/v1/Testimonials';
import Team from '../components/v1/Team';

const navLinks = [
    { href: "#services", label: "Послуги" },
    { href: "#how-it-works", label: "Процес" },
    { href: "#case-studies", label: "Кейси" },
    { href: "#pricing", label: "Тарифи" },
    { href: "#roi-calculator", label: "ROI" },
    { href: "#why-us", label: "Переваги" },
];

const MarketingProPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={navLinks} ctaText="Замовити консультацію" />
      <main>
        <Hero />
        <TrustBadges />
        <WhyUs />
        <HowItWorks />
        <Services />
        <Pricing />
        <CostComparison />
        <CaseStudies />
        <Testimonials />
        <Team />
        <RoiCalculator />
        <FAQ />
        <ContactForm />
      </main>
      <Footer footerNavLinks={navLinks} />
    </div>
  );
};

export default MarketingProPage;