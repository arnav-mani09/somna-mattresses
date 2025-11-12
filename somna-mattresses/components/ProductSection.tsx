import React from 'react';
import ProductCard from './ProductCard';
import type { MattressCategory } from '../types';

const mattressCategories: MattressCategory[] = [
  {
    id: 1,
    name: 'The Foams',
    fromPrice: 599,
    originalPrice: 749,
    imageUrl: 'https://images.pexels.com/photos/2029731/pexels-photo-2029731.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageBadge: 'Best Seller',
    height: 11,
    subMattresses: [
      {
        name: 'The One',
        discount: 20,
        description: 'The mattress that broke the Internet—reimagined.',
        rating: 4.4,
        feel: ['Medium-Firm', 'Responsive'],
        support: 70,
        pressureRelief: 60,
      },
      {
        name: 'Cloud One',
        discount: 20,
        description: 'Our most popular mattress just got an upgrade.',
        rating: 4.5,
        feel: ['Medium-Soft', 'Responsive'],
        support: 60,
        pressureRelief: 80,
      },
    ],
  },
  {
    id: 2,
    name: 'The Hybrids',
    fromPrice: 1045,
    originalPrice: 1495,
    imageUrl: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageBadge: 'Highest Rated',
    height: 12,
    subMattresses: [
      {
        name: 'Dream',
        discount: 30,
        description: 'Premium support and comfort. Less interruptions.',
        rating: 4.5,
        feel: ['Medium', 'Responsive'],
        support: 80,
        pressureRelief: 75,
      },
      {
        name: 'Snow',
        discount: 30,
        description: 'A memory foam bed that actually sleeps cool.',
        rating: 4.4,
        feel: ['Medium', 'Conforming'],
        support: 75,
        pressureRelief: 85,
      },
    ],
  },
  {
    id: 3,
    name: 'The Maxes',
    fromPrice: 1815,
    originalPrice: 2595,
    imageUrl: 'https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=800',
    imageBadge: 'Most Supportive',
    height: 14,
    subMattresses: [
      {
        name: 'Dream Max',
        discount: 30,
        description: 'Maximum support, minimum aches and pains.',
        rating: 4.3,
        feel: ['Medium-Soft', 'Responsive'],
        support: 95,
        pressureRelief: 90,
      },
      {
        name: 'Snow Max',
        discount: 30,
        description: 'Maximum support, and cooling all night.',
        rating: 4.4,
        feel: ['Medium-Soft', 'Conforming'],
        support: 90,
        pressureRelief: 95,
      },
    ],
  },
];


const ProductSection: React.FC = () => {
  return (
    <section id="mattresses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mattressCategories.map(category => (
            <ProductCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
