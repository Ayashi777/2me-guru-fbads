import React, { useState } from 'react';
import Header from './components/Header';

// V1 Components (Marketers)
import HeroV1 from './components/HeroV1';
import TrustBadgesV1 from './components/TrustBadgesV1';
import HowItWorksV1 from './components/HowItWorksV1';
import ServicesV1 from './components/ServicesV1';
import PricingV1 from './components/PricingV1';
import CaseStudiesV1 from './components/CaseStudiesV1';
import RoiCalculatorV1 from './components/RoiCalculatorV1';
import FAQV1 from './components/FAQV1';
import ContactFormV1 from './components/ContactFormV1';

// V2 Components (Business Owners - Detailed)
import HeroV2 from './components/HeroV2';
import TrustBadgesV2 from './components/TrustBadgesV2';
import HowItWorksV2 from './components/HowItWorksV2';
import ServicesV2 from './components/ServicesV2';
import PricingV2 from './components/PricingV2';
import CaseStudiesV2 from './components/CaseStudiesV2';
import RoiCalculatorV2 from './components/RoiCalculatorV2';
import FAQV2 from './components/FAQV2';
import ContactFormV2 from './components/ContactFormV2';

// V3 Components (Foremen/Owners - Simple & Direct)
import HeroV3 from './components/HeroV3';
import WorkExamples from './components/WorkExamples';
import OfferV3 from './components/OfferV3';
import ExpectedResultsV3 from './components/ExpectedResultsV3';
import ContactFormV3 from './components/ContactFormV3';


// Shared Components
import WhyUs from './components/WhyUs';
import CostComparison from './components/CostComparison';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import Footer from './components/Footer';
import VersionSwitcher from './components/VersionSwitcher';


const App: React.FC = () => {
  const [version, setVersion] = useState<'V1' | 'V2' | 'V3'>('V3');

  const renderV1 = () => (
    <>
      <HeroV1 />
      <TrustBadgesV1 />
      <WhyUs />
      <HowItWorksV1 />
      <ServicesV1 />
      <PricingV1 />
      <CostComparison />
      <CaseStudiesV1 />
      <Testimonials />
      <Team />
      <RoiCalculatorV1 />
      <FAQV1 />
      <ContactFormV1 />
    </>
  );

  const renderV2 = () => (
    <>
      <HeroV2 />
      <TrustBadgesV2 />
      <WhyUs />
      <HowItWorksV2 />
      <ServicesV2 />
      <PricingV2 />
      <CostComparison />
      <CaseStudiesV2 />
      <Testimonials />
      <Team />
      <RoiCalculatorV2 />
      <FAQV2 />
      <ContactFormV2 />
    </>
  );

  const renderV3 = () => (
    <>
      <HeroV3 />
      <WorkExamples />
      <OfferV3 />
      <ExpectedResultsV3 />
      <ContactFormV3 />
    </>
  );

  const renderContent = () => {
    switch (version) {
      case 'V1': return renderV1();
      case 'V2': return renderV2();
      case 'V3': return renderV3();
      default: return renderV3();
    }
  }

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        {renderContent()}
      </main>
      <Footer />
      <VersionSwitcher activeVersion={version} setVersion={setVersion} />
    </div>
  );
};

export default App;