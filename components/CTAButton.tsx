
import React from 'react';
import { Link } from 'react-router-dom';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ to, children, variant = 'primary', fullWidth = false }) => {
  const baseClasses = `
    px-8 py-3 font-semibold rounded-lg transition-all duration-300 transform 
    focus:outline-none focus:ring-4 relative overflow-hidden group
    ${fullWidth ? 'w-full text-center block' : 'inline-block'}
  `;

  const primaryClasses = `
    bg-gradient-to-r from-teal-400 to-violet-500 text-white
    hover:from-teal-500 hover:to-violet-600 focus:ring-teal-300/50
    shadow-lg shadow-teal-500/20 hover:shadow-xl hover:shadow-teal-500/30
    hover:-translate-y-1
  `;
  
  const secondaryClasses = `
    bg-transparent border-2 border-teal-400 text-teal-300
    hover:bg-teal-400/10 hover:text-white focus:ring-teal-300/50
    hover:shadow-lg hover:shadow-teal-500/20
    hover:-translate-y-1
  `;

  const classes = `${baseClasses} ${variant === 'primary' ? primaryClasses : secondaryClasses}`;

  return (
    <Link to={to} className={classes}>
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150 group-hover:scale-100 rounded-full"></span>
      )}
    </Link>
  );
};

export default CTAButton;
