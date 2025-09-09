import React from 'react';
import Header from '../components/v1/Header';
import Footer from '../components/v1/Footer';

// V2 Components
import Hero from '../components/v2/Hero';
import TrustBadges from '../components/v2/TrustBadges';
import HowItWorks from '../components/v2/HowItWorks';
import Services from '../components/v2/Services';
import Pricing from '../components/v2/Pricing';
import CaseStudies from '../components/v2/CaseStudies';
import RoiCalculator from '../components/v2/RoiCalculator';
import FAQ from '../components/v2/FAQ';
import ContactForm from '../components/v2/ContactForm';

import WhyUs from '../components/v1/WhyUs';
import CostComparison from '../components/v1/CostComparison';
import Testimonials from '../components/v1/Testimonials';
import Team from '../components/v1/Team';

import { siteConfig } from '../config/site';

const BusinessGrowthPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={siteConfig.navLinks} ctaText="Розрахувати прибуток" />
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
      <Footer footerNavLinks={siteConfig.navLinks} />
    </div>
  );
};

export default BusinessGrowthPage;