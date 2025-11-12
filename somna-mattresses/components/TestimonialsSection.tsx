
import React from 'react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jessica M.',
    location: 'New York, NY',
    quote: 'I have never slept better. The Somna Nova is the perfect balance of soft and supportive. It feels like it was made just for me!',
    rating: 5,
  },
  {
    id: 2,
    name: 'David L.',
    location: 'Austin, TX',
    quote: 'My back pain is gone. I was skeptical about the "nano-technology", but it\'s a game-changer. Worth every penny.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Sarah K.',
    location: 'Chicago, IL',
    quote: 'My partner and I are finally sleeping through the night. I don\'t feel any movement when he tosses and turns. Incredible!',
    rating: 5,
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-somna-grey-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-somna-grey-dark">Loved by Sleepers Everywhere</h2>
          <p className="mt-4 text-lg text-somna-text">Don't just take our word for it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
