
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import CTAButton from './CTAButton';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <NavLink to="/">
            <Logo />
          </NavLink>
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-gray-300 hover:text-white transition-colors duration-300 relative group ${isActive ? 'text-white' : ''}`
                }
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-300 to-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                 {({ isActive }) => isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-teal-300 to-violet-400"></span>}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:block">
            <CTAButton to="/contact">Get a Free Quote</CTAButton>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-slate-800/90 rounded-lg p-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `block text-center py-2 text-gray-300 hover:text-white transition-colors duration-300 ${isActive ? 'text-white font-semibold' : ''}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <CTAButton to="/contact" fullWidth>Get a Free Quote</CTAButton>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
