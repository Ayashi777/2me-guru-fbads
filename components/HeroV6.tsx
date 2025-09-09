import React from 'react';

const HeroV6: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Залучаємо клієнтів, гідних вашої <span className="text-amber-400">майстерності</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Ми створюємо цифровий простір, де якість вашого портфоліо знаходить свого поціновувача. Залучаємо клієнтів, для яких ціна — не головний критерій.
        </p>
        <a 
          href="#contact" 
          className="bg-gray-800 hover:bg-gray-700 border border-amber-400 text-amber-400 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block animate-fade-in-up animation-delay-400"
        >
          Замовити приватну консультацію
        </a>
      </div>
    </section>
  );
};

export default HeroV6;