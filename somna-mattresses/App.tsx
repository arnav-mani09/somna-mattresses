
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans text-somna-text">
      <Header />
      <main>
        <HeroSection />
        <ProductSection />
        <FeaturesSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
