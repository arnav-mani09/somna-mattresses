import React from 'react';
import type { MattressCategory, SubMattress } from '../types';
import Button from './Button';

interface ProductCardProps {
  category: MattressCategory;
}

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
);

const SubMattressCard: React.FC<{ mattress: SubMattress }> = ({ mattress }) => {
  return (
    <div>
      <div className="flex items-start justify-between">
        <h4 className="text-lg font-bold text-somna-grey-dark">{mattress.name}</h4>
        <span className="bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full whitespace-nowrap">{mattress.discount}% OFF</span>
      </div>
      <div className="flex items-center mt-1 text-sm text-somna-text">
        <StarIcon className="w-4 h-4 text-yellow-400" />
        <span className="ml-1 font-bold">{mattress.rating}</span>
      </div>
      <p className="text-sm mt-2 text-somna-text h-12">{mattress.description}</p>
      
      <div className="mt-4">
        <p className="text-xs font-semibold text-somna-text mb-1">Feel:</p>
        <div className="flex flex-wrap gap-2">
          {mattress.feel.map(f => (
            <span key={f} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-md">{f}</span>
          ))}
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div>
          <p className="text-xs font-semibold text-somna-text mb-1">Support:</p>
          <div className="w-full bg-somna-grey-light rounded-full h-1.5">
            <div className="bg-somna-purple-dark h-1.5 rounded-full" style={{ width: `${mattress.support}%` }}></div>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold text-somna-text mb-1">Pressure Relief:</p>
          <div className="w-full bg-somna-grey-light rounded-full h-1.5">
            <div className="bg-somna-purple-dark h-1.5 rounded-full" style={{ width: `${mattress.pressureRelief}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ category }) => {
  return (
    <div className="bg-white rounded-lg border border-somna-grey-light shadow-sm overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-somna-grey-dark text-center">{category.name}</h3>
        <p className="text-center text-somna-text text-sm">
          From: <span className="text-somna-purple font-semibold">${category.fromPrice}</span> <span className="line-through text-gray-400">${category.originalPrice}</span>
        </p>
      </div>

      <div className="relative">
        <img src={category.imageUrl} alt={category.name} className="w-full h-56 object-cover" />
        <span className="absolute top-2 left-2 bg-white/90 backdrop-blur-sm text-somna-grey-dark text-xs font-semibold px-2.5 py-1 rounded-full border border-white/50">{category.imageBadge}</span>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center bg-white/90 backdrop-blur-sm pl-2 pr-1 py-4 rounded-l-lg border-y border-l border-white/50">
          <span className="font-bold text-xl text-somna-grey-dark">{category.height}"</span>
          <div className="h-12 w-px bg-somna-grey-light mx-2"></div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          {category.subMattresses.map(mattress => (
            <SubMattressCard key={mattress.name} mattress={mattress} />
          ))}
        </div>
      </div>
      
      <div className="p-6 mt-auto bg-gray-50/50">
        <Button className="w-full">Shop {category.name}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
