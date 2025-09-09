import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V5 Components
import HeroV5 from '../components/HeroV5';
import PainPointsV5 from '../components/PainPointsV5';
import OurPromiseV5 from '../components/OurPromiseV5';
import HowItWorksV5 from '../components/HowItWorksV5';
import PricingV5 from '../components/PricingV5';
import ContactFormV5 from '../components/ContactFormV5';
import CaseStudiesV2 from '../components/CaseStudiesV2';
import Team from '../components/Team';

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
        <HeroV5 />
        <PainPointsV5 />
        <OurPromiseV5 />
        <HowItWorksV5 />
        <CaseStudiesV2 />
        <PricingV5 />
        <Team />
        <ContactFormV5 />
      </main>
      <Footer footerNavLinks={navLinks} />
    </div>
  );
};

export default OurPromisePage;