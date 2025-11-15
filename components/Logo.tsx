
import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = '', showText = true }) => {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5EEAD4"/>
            <stop offset="100%" stopColor="#A78BFA"/>
          </linearGradient>
        </defs>
        <path d="M40 10 L60 10 L60 30 L80 30 L80 50 L100 50 L100 70 L80 70 L80 90 L60 90 L60 110 L40 110 L40 90 L20 90 L20 70 L0 70 L0 50 L20 50 L20 30 L40 30 L40 10Z" fill="url(#logo-gradient)"/>
        <path d="M60 40 L60 60 L40 60 L40 80 L60 80 L60 60" fill="#050816"/>
        <path d="M60 40 L80 40 L80 60 L60 60 L60 40" fill="#050816"/>
      </svg>
      {showText && (
        <span className="text-xl font-bold tracking-wider text-white">
          Sameer<span className="gradient-text"> Digital Lab</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
