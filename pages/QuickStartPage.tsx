import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V3 Components
import HeroV3 from '../components/HeroV3';
import WorkExamples from '../components/WorkExamples';
import OfferV3 from '../components/OfferV3';
import ContactFormV3 from '../components/ContactFormV3';
import TrustBadgesV3 from '../components/TrustBadgesV3';
import ProfitCalculatorV3 from '../components/ProfitCalculatorV3';
import TeamV3 from '../components/TeamV3';

const navLinks = [
    { href: "#work-examples", label: "Приклади" },
    { href: "#trust-badges", label: "Умови" },
    { href: "#offer", label: "Пропозиція" },
    { href: "#profit-calculator", label: "Калькулятор" },
    { href: "#team", label: "Команда" }
];

const QuickStartPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={navLinks} ctaText="Спробувати тест" />
      <main>
        <HeroV3 />
        <WorkExamples />
        <TrustBadgesV3 />
        <OfferV3 />
        <ProfitCalculatorV3 />
        <TeamV3 />
        <ContactFormV3 />
      </main>
      <Footer footerNavLinks={navLinks} />
    </div>
  );
};

export default QuickStartPage;