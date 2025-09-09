import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V7 Components
import HeroV7 from '../components/HeroV7';
import InvestorBenefitsV7 from '../components/InvestorBenefitsV7';
import BeforeAfterV7 from '../components/BeforeAfterV7';
import ProcessV7 from '../components/ProcessV7';
import ContactFormV7 from '../components/ContactFormV7';
import Team from '../components/Team';

const InvestmentROIPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroV7 />
        <InvestorBenefitsV7 />
        <BeforeAfterV7 />
        <ProcessV7 />
        <Team />
        <ContactFormV7 />
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentROIPage;
