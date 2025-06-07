import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhySection from './components/WhySection';
import AudienceSection from './components/AudienceSection';
import ModulesSection from './components/ModulesSection';
import TestimonialsSection from './components/TestimonialsSection';
import RoutineSection from './components/RoutineSection';
import CurriculumSection from './components/CurriculumSection';
import BonusSection from './components/BonusSection';
import GuaranteeSection from './components/GuaranteeSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <WhySection />
      <AudienceSection />
      <ModulesSection />
      <TestimonialsSection />
      <RoutineSection />
      <CurriculumSection />
      <BonusSection />
      <GuaranteeSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;