// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';
import Header from '../components/Header';
import HeroV5 from '../components/HeroV5';
import PainPointsV5 from '../components/PainPointsV5';
import OurPromiseV5 from '../components/OurPromiseV5';
import HowItWorksV5 from '../components/HowItWorksV5';
import CaseStudies from '../components/CaseStudies';
import PricingV5 from '../components/PricingV5';
import ContactFormV5 from '../components/ContactFormV5';
import Footer from '../components/Footer';

const OurPromisePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroV5 />
        <PainPointsV5 />
        <OurPromiseV5 />
        <HowItWorksV5 />
        <CaseStudies />
        <PricingV5 />
        <ContactFormV5 />
      </main>
      <Footer />
    </div>
  );
};

export default OurPromisePage;
