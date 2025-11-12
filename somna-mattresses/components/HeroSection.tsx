import React from 'react';
import Button from './Button';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative bg-somna-grey-dark h-[80vh] min-h-[500px] flex items-center text-white">
      <div className="absolute inset-0">
        <img 
          src="https://images.pexels.com/photos/237371/pexels-photo-237371.jpeg?auto=compress&cs=tinysrgb&w=1800" 
          alt="A man sleeping peacefully in a comfortable bed" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">The Future of Sleep is Here.</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Somna is a smart mattress that utilizes revolutionary Nano-Technology that adapts to you, creating a completely unique experience for every body.
        </p>
        <Button onClick={() => document.getElementById('mattresses')?.scrollIntoView({ behavior: 'smooth' })}>
          Shop Mattresses
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
