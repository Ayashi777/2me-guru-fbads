import React from 'react';
import Header from '../components/v1/Header';
import Footer from '../components/v1/Footer';

// V5 Components
import Hero from '../components/HeroV5';
import PainPointsV5 from '../components/PainPointsV5';
import OurPromiseV5 from '../components/OurPromiseV5';
import HowItWorksV5 from '../components/HowItWorksV5';
import PricingV5 from '../components/PricingV5';
import ContactFormV5 from '../components/ContactFormV5';
import CaseStudies from '../components/v2/CaseStudies';
import Team from '../components/v1/Team';

const navLinks = [
    { href: "#pain-points", label: "Проблеми" },
    { href: "#our-promise", label: "Наша обіцянка" },
    { href: "#how-it-works", label: "Процес" },
    { href: "#pricing", label: "Пропозиція" },
    { href: "#case-studies", label: "Кейси" },
    { href: "#team", label: "Команда" }
];

const OurPromisePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header navLinks={navLinks} ctaText="Отримати аудит" />
      <main>
        <Hero />
        <PainPointsV5 />
        <OurPromiseV5 />
        <HowItWorksV5 />
        <CaseStudies />
        <PricingV5 />
        <Team />
        <ContactFormV5 />
      </main>
      <Footer footerNavLinks={navLinks} />
    </div>
  );
};

export default OurPromisePage;