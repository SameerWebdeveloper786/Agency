
import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const navLinks = [
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'About', path: '/about' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const socialLinks = [
  { name: 'GitHub', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>, href: '#' },
  { name: 'LinkedIn', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>, href: '#' },
  { name: 'Twitter', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>, href: '#' },
];


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 flex flex-col items-start">
            <Logo />
            <p className="mt-4 text-gray-400 text-sm">
              Crafting premium digital experiences that drive growth and innovation.
            </p>
          </div>
          <div className="md:col-span-3">
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-white font-semibold tracking-wider">Navigate</h3>
                  <ul className="mt-4 space-y-2">
                    {navLinks.map(link => (
                      <li key={link.name}>
                        <NavLink to={link.path} className="text-gray-400 hover:text-teal-300 transition-colors">
                          {link.name}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
                 <div>
                  <h3 className="text-white font-semibold tracking-wider">Legal</h3>
                  <ul className="mt-4 space-y-2">
                    <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-teal-300 transition-colors">Terms of Service</a></li>
                  </ul>
                </div>
                 <div className="col-span-2">
                  <h3 className="text-white font-semibold tracking-wider">Join Our Newsletter</h3>
                   <p className="mt-4 text-gray-400 text-sm">Get the latest on digital trends and agency news.</p>
                  <form className="mt-4 flex flex-col sm:flex-row gap-2">
                    <input type="email" placeholder="Your email address" className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-md focus:ring-2 focus:ring-teal-400 focus:outline-none text-white placeholder-gray-500" />
                    <button type="submit" className="px-6 py-2 bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold rounded-md hover:from-teal-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Subscribe
                    </button>
                  </form>
                </div>
             </div>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Sameer Digital Lab. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {socialLinks.map(link => (
              <a key={link.name} href={link.href} className="text-gray-400 hover:text-white transition-colors">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
