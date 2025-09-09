import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V7 Components
import Hero from '../components/HeroV7';
import InvestorBenefitsV7 from '../components/InvestorBenefitsV7';
import BeforeAfterV7 from '../components/BeforeAfterV7';
import ProcessV7 from '../components/ProcessV7';
import ContactFormV7 from '../components/ContactFormV7';
import Team from '../components/Team';

const navLinks = [
    { href: "#benefits", label: "Переваги" },
    { href: "#before-after", label: "Проекти" },
    { href: "#process", label: "Процес" },
    { href: "#team", label: "Команда" }
];

const InvestmentROIPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={navLinks} ctaText="Отримати пропозицію" />
      <main>
        <Hero />
        <InvestorBenefitsV7 />
        <BeforeAfterV7 />
        <ProcessV7 />
        <Team />
        <ContactFormV7 />
      </main>
      <Footer footerNavLinks={navLinks} />
    </div>
  );
};

export default InvestmentROIPage;