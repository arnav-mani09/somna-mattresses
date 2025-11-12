
import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = 'h-16' }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg viewBox="0 0 100 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          {/* Bed Frame */}
          <path d="M10 80 H90 V70 H85 V60 H15 V70 H10 V80 Z" fill="#6D6D6D"/>
          {/* Mattress */}
          <path d="M15 60 C 15 50, 85 50, 85 60 V70 H15 V60 Z" fill="#a79dd6"/>
          {/* Pillow */}
          <path d="M30 55 Q 50 45, 70 55 L 65 60 H 35 L 30 55 Z" fill="#8e82b8" />
          {/* Headboard */}
          <path d="M20 50 C 20 30, 35 20, 50 20 C 65 20, 80 30, 80 50 H20 Z" fill="#a79dd6"/>
        </g>
      </svg>
      <span className="font-serif text-4xl text-somna-grey-dark tracking-wider">somna</span>
    </div>
  );
};

export default Logo;
