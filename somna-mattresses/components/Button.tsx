
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '', variant = 'primary' }) => {
  const baseStyles = 'px-8 py-3 font-semibold rounded-full transition-transform duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantStyles = {
    primary: 'bg-somna-purple text-white hover:bg-somna-purple-dark focus:ring-somna-purple',
    secondary: 'bg-white text-somna-purple border border-somna-purple hover:bg-gray-50 focus:ring-somna-purple',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
