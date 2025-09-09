import React from 'react';

const HeroV4: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Будуємо ваш <span className="text-cyan-400">B2B Sales Pipeline</span> у будівельній сфері
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Знаходимо для вас дилерів, архітекторів та корпоративних клієнтів. Створюємо прогнозований потік B2B-контрактів.
        </p>
        <a 
          href="#contact" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block animate-fade-in-up animation-delay-400"
        >
          Запланувати стратегічну сесію
        </a>
      </div>
    </section>
  );
};

export default HeroV4;