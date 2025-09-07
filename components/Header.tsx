// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#services', text: 'Послуги' },
    { href: '#case-studies', text: 'Кейси' },
    { href: '#how-it-works', text: 'Як працюємо' },
    { href: '#why-us', text: 'Чому ми' },
    { href: '#pricing', text: 'Тарифи' },
    { href: '#faq', text: 'FAQ' },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-white">
          2Me<span className="text-cyan-400">Guru</span>
        </a>
        <nav className="hidden md:flex space-x-6 items-center">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300">
              {link.text}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105">
          Обговорити проект
        </a>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-900">
          <nav className="flex flex-col items-center space-y-4 px-6 pt-2 pb-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2" onClick={() => setIsOpen(false)}>
                {link.text}
              </a>
            ))}
            <a href="#contact" className="w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 mt-4" onClick={() => setIsOpen(false)}>
              Обговорити проект
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
