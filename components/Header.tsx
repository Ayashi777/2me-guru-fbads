import React, { useState } from 'react';

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  contactLink?: string;
  navLinks?: NavLink[];
}

const Header: React.FC<HeaderProps> = ({ contactLink = "#contact", navLinks }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side */}
        <div className="flex-1 lg:flex-none lg:w-1/3">
          <a href="/" className="text-2xl font-bold text-white flex-shrink-0">
            2Me<span className="text-cyan-400">Guru</span>
          </a>
        </div>
        
        {/* Centered Navigation */}
        {navLinks && navLinks.length > 0 && (
          <nav className="hidden lg:flex justify-center items-center space-x-6 w-1/3">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {/* Right Side */}
        <div className="flex-1 lg:flex-none lg:w-1/3 flex justify-end items-center">
            <a href={contactLink} className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105">
              Обговорити проект
            </a>

            {navLinks && navLinks.length > 0 ? (
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-white p-2 ml-4" aria-label="Open menu" aria-expanded={isMenuOpen}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
              </button>
            ) : (
                 <div className="md:hidden ml-4">
                    <a href={contactLink} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
                     Обговорити
                    </a>
                </div>
            )}
        </div>
      </div>
      
      {/* Mobile Menu */}
      {navLinks && navLinks.length > 0 && (
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-900 absolute w-full border-t border-gray-800 shadow-lg`}>
          <div className="flex flex-col items-center space-y-4 p-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-lg text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2">
                {link.label}
              </a>
            ))}
             <a href={contactLink} onClick={() => setIsMenuOpen(false)} className="w-full mt-4 text-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300">
                Обговорити проект
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;