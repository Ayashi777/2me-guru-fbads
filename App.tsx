import React, { useState } from 'react';
import Header from './components/Header';
import HeroV1 from './components/HeroV1';
import HeroV2 from './components/HeroV2';
import TrustBadgesV1 from './components/TrustBadgesV1';
import TrustBadgesV2 from './components/TrustBadgesV2';
import WhyUs from './components/WhyUs';
import HowItWorksV1 from './components/HowItWorksV1';
import HowItWorksV2 from './components/HowItWorksV2';
import ServicesV1 from './components/ServicesV1';
import ServicesV2 from './components/ServicesV2';
import PricingV1 from './components/PricingV1';
import PricingV2 from './components/PricingV2';
import CostComparison from './components/CostComparison';
import CaseStudiesV1 from './components/CaseStudiesV1';
import CaseStudiesV2 from './components/CaseStudiesV2';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import RoiCalculatorV1 from './components/RoiCalculatorV1';
import RoiCalculatorV2 from './components/RoiCalculatorV2';
import FAQV1 from './components/FAQV1';
import FAQV2 from './components/FAQV2';
import ContactFormV1 from './components/ContactFormV1';
import ContactFormV2 from './components/ContactFormV2';
import Footer from './components/Footer';
import VersionSwitcher from './components/VersionSwitcher';

const App: React.FC = () => {
  const [version, setVersion] = useState<'V1' | 'V2'>('V2');

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Header />
      <main>
        {version === 'V1' ? <HeroV1 /> : <HeroV2 />}
        {version === 'V1' ? <TrustBadgesV1 /> : <TrustBadgesV2 />}
        <WhyUs />
        {version === 'V1' ? <HowItWorksV1 /> : <HowItWorksV2 />}
        {version === 'V1' ? <ServicesV1 /> : <ServicesV2 />}
        {version === 'V1' ? <PricingV1 /> : <PricingV2 />}
        <CostComparison />
        {version === 'V1' ? <CaseStudiesV1 /> : <CaseStudiesV2 />}
        <Testimonials />
        <Team />
        {version === 'V1' ? <RoiCalculatorV1 /> : <RoiCalculatorV2 />}
        {version === 'V1' ? <FAQV1 /> : <FAQV2 />}
        {version === 'V1' ? <ContactFormV1 /> : <ContactFormV2 />}
      </main>
      <Footer />
      <VersionSwitcher activeVersion={version} setVersion={setVersion} />
    </div>
  );
};

export default App;
