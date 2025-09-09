// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';
import Header from '../components/Header';
import HeroV4 from '../components/HeroV4';
import TrustBadgesV4 from '../components/TrustBadgesV4';
import ServicesV4 from '../components/ServicesV4';
import HowItWorksV4 from '../components/HowItWorksV4';
import CaseStudies from '../components/CaseStudies';
import ContactFormV4 from '../components/ContactFormV4';
import Footer from '../components/Footer';

const B2BPartnersPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroV4 />
        <TrustBadgesV4 />
        <ServicesV4 />
        <HowItWorksV4 />
        <CaseStudies />
        <ContactFormV4 />
      </main>
      <Footer />
    </div>
  );
};

export default B2BPartnersPage;
