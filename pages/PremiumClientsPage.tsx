import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// V6 Components
import HeroV6 from '../components/HeroV6';
import PhilosophyV6 from '../components/PhilosophyV6';
import ApproachV6 from '../components/ApproachV6';
import PortfolioV6 from '../components/PortfolioV6';
import ContactFormV6 from '../components/ContactFormV6';
import Team from '../components/Team';

const PremiumClientsPage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <HeroV6 />
        <PhilosophyV6 />
        <ApproachV6 />
        <PortfolioV6 />
        <Team />
        <ContactFormV6 />
      </main>
      <Footer />
    </div>
  );
};

export default PremiumClientsPage;
