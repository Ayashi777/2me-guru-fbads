import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-white">
          2Me<span className="text-cyan-400">Guru</span>
        </a>
        <a href="#contact" className="hidden md:inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-lg transition-all duration-300 hover:scale-105">
          Обговорити проект
        </a>
        <div className="md:hidden">
            <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded-lg transition-all duration-300 text-sm">
             Обговорити
            </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
