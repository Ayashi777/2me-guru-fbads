import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustBadges from './components/TrustBadges';
import WhyUs from './components/WhyUs';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Pricing from './components/Pricing';
import CostComparison from './components/CostComparison';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import RoiCalculator from './components/RoiCalculator';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
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
      <Footer />
    </div>
  );
};

export default App;
