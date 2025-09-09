import React from 'react';

const HeroV5: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Втомились платити маркетологам за 'процес',<br /> а не за <span className="text-cyan-400">реальні контракти</span>?
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Ми знаємо цей біль. Тому ми працюємо інакше. Жодних незрозумілих звітів та "злитих" бюджетів. Тільки прозорість, KPI та орієнтація на ваш прибуток.
        </p>
        <a 
          href="#contact" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block animate-fade-in-up animation-delay-400"
        >
          Отримати прозорий план робіт
        </a>
      </div>
    </section>
  );
};

export default HeroV5;