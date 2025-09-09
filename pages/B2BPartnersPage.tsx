import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V4 Components
import HeroV4 from '../components/HeroV4';
import TrustBadgesV4 from '../components/TrustBadgesV4';
import HowItWorksV4 from '../components/HowItWorksV4';
import ServicesV4 from '../components/ServicesV4';
import ContactFormV4 from '../components/ContactFormV4';
import CaseStudiesV1 from '../components/CaseStudiesV1';
import Team from '../components/Team';

const navLinks = [
    { href: "#trust-badges", label: "Підхід" },
    { href: "#how-it-works", label: "Процес" },
    { href: "#services", label: "Для кого" },
    { href: "#case-studies", label: "Кейси" },
    { href: "#team", label: "Команда" }
];

const B2BPartnersPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={navLinks} ctaText="Запланувати сесію" />
      <main>
        <HeroV4 />
        <TrustBadgesV4 />
        <HowItWorksV4 />
        <ServicesV4 />
        <CaseStudiesV1 />
        <Team />
        <ContactFormV4 />
      </main>
      <Footer footerNavLinks={navLinks} />
    </div>
  );
};

export default B2BPartnersPage;