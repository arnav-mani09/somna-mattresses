
import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-somna-grey-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <a href="#home" className="inline-block mb-4">
                <div className="flex items-center space-x-3">
                    <svg viewBox="0 0 100 100" className="h-10 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g>
                        <path d="M10 80 H90 V70 H85 V60 H15 V70 H10 V80 Z" fill="#d9d9d9"/>
                        <path d="M15 60 C 15 50, 85 50, 85 60 V70 H15 V60 Z" fill="#a79dd6"/>
                        <path d="M30 55 Q 50 45, 70 55 L 65 60 H 35 L 30 55 Z" fill="#8e82b8" />
                        <path d="M20 50 C 20 30, 35 20, 50 20 C 65 20, 80 30, 80 50 H20 Z" fill="#a79dd6"/>
                      </g>
                    </svg>
                    <span className="font-serif text-3xl text-white tracking-wider">somna</span>
                </div>
            </a>
            <p className="text-somna-grey-light text-sm">The future of sleep, delivered.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Shop</h4>
            <ul className="space-y-2">
              <li><a href="#mattresses" className="hover:text-somna-purple transition-colors">Mattresses</a></li>
              <li><a href="#" className="hover:text-somna-purple transition-colors">Pillows</a></li>
              <li><a href="#" className="hover:text-somna-purple transition-colors">Bed Frames</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">About</h4>
            <ul className="space-y-2">
              <li><a href="#why-somna" className="hover:text-somna-purple transition-colors">Our Technology</a></li>
              <li><a href="#reviews" className="hover:text-somna-purple transition-colors">Reviews</a></li>
              <li><a href="#" className="hover:text-somna-purple transition-colors">About Us</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 tracking-wide">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-somna-purple transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-somna-purple transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-somna-purple transition-colors">Warranty</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-somna-grey-light">
          <p>&copy; {new Date().getFullYear()} Somna Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
