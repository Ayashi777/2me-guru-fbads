import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './icons/SocialIcons';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="bg-gray-900 text-white relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          Отримуйте стабільний потік клієнтів на <span className="text-cyan-400">будівництво та ремонт</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Більше ніяких простоїв та 'сарафанного радіо'. Ми будуємо систему, що приносить вам клієнтів, готових обговорювати бюджет та терміни.
        </p>
        <a 
          href="#contact" 
          className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block animate-fade-in-up animation-delay-400"
        >
          Безкоштовна консультація
        </a>
        <p className="mt-4 text-sm text-gray-500 animate-fade-in-up animation-delay-600">
          Без довгострокових контрактів. Переконайтесь в ефективності на ділі.
        </p>
        <div className="mt-10 animate-fade-in-up animation-delay-800">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-4">Наші інструменти</p>
          <div className="flex justify-center items-center space-x-8">
            <InstagramIcon className="h-8 w-8 text-gray-400" />
            <FacebookIcon className="h-8 w-8 text-gray-400" />
            <TikTokIcon className="h-8 w-8 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;