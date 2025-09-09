// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React, { useState } from 'react';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-gray-900/80 backdrop-blur-sm sticky top-0 z-40 border-b border-gray-800">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="/" className="text-2xl font-bold text-white">
                    2Me<span className="text-cyan-400">Guru</span>
                </a>
                <nav className="hidden md:flex items-center space-x-6">
                    <a href="/#services" className="text-gray-300 hover:text-cyan-400 transition-colors">Послуги</a>
                    <a href="/#case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors">Кейси</a>
                    <a href="/#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">Ціни</a>
                    <a href="/#faq" className="text-gray-300 hover:text-cyan-400 transition-colors">FAQ</a>
                    <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                        Обговорити проект
                    </a>
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none" aria-label="Toggle menu">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                        </svg>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-gray-900">
                    <nav className="px-6 pt-2 pb-4 space-y-2 flex flex-col items-center">
                         <a href="/#services" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">Послуги</a>
                         <a href="/#case-studies" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">Кейси</a>
                         <a href="/#pricing" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">Ціни</a>
                         <a href="/#faq" onClick={() => setIsMenuOpen(false)} className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors">FAQ</a>
                         <a href="#contact" onClick={() => setIsMenuOpen(false)} className="mt-4 w-full text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                            Обговорити проект
                         </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
