
import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-somna-grey-light">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="#home" aria-label="Somna homepage">
          <Logo className="h-12" />
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#mattresses" className="text-somna-text hover:text-somna-purple transition-colors duration-300 font-medium">Mattresses</a>
          <a href="#why-somna" className="text-somna-text hover:text-somna-purple transition-colors duration-300 font-medium">Why Somna</a>
          <a href="#reviews" className="text-somna-text hover:text-somna-purple transition-colors duration-300 font-medium">Reviews</a>
        </nav>
        <button className="md:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-somna-grey-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
