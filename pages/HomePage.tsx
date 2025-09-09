// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import CaseStudies from '../components/CaseStudies';
import HowItWorks from '../components/HowItWorks';
import Pricing from '../components/Pricing';
import TrustBadges from '../components/TrustBadges';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <CaseStudies />
        <HowItWorks />
        <TrustBadges />
        <Pricing />
        <Team />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
