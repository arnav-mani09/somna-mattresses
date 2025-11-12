
import React from 'react';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-somna-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.975M15 10a4 4 0 11-8 0 4 4 0 018 0z"></path>
      </svg>
    ),
    title: 'Adaptive Nano-Technology',
    description: 'Our revolutionary foam instantly adapts to your body shape and movement for personalized support.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-somna-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12V3H3v9a5 5 0 005 5h8a5 5 0 005-5V3h-2v9a3 3 0 01-3 3H8a3 3 0 01-3-3z"></path>
      </svg>
    ),
    title: 'Cooling Comfort',
    description: 'Sleep cool and comfortable with our breathable materials designed to wick away heat all night long.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-somna-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
      </svg>
    ),
    title: '100-Night Risk-Free Trial',
    description: 'Try Somna in the comfort of your home. If you don’t love it, we’ll pick it up for free.',
  },
  {
    icon: (
      <svg className="w-10 h-10 text-somna-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
      </svg>
    ),
    title: '10-Year Warranty',
    description: 'We stand by our quality. Every Somna mattress is backed by a 10-year limited warranty.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="why-somna" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-somna-grey-dark">The Somna Difference</h2>
          <p className="mt-4 text-lg text-somna-text">Engineered for your best sleep, every single night.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center items-center mb-4 h-16">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-somna-grey-dark mb-2">{feature.title}</h3>
              <p className="text-somna-text">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
