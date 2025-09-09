import React from 'react';

const ExpectedResultsV3: React.FC = () => {
  return (
    <section id="expected-results" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Що ви отримаєте за тестовий місяць?</h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Ми інвестуємо ваші перші <span className="text-white font-bold">10 000 грн</span> рекламного бюджету + <span className="text-white font-bold">15 000 грн</span> за нашу роботу. Ось що це може принести:
            </p>
            
            <div className="bg-gray-800 p-8 sm:p-12 rounded-xl border border-gray-700 grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Загальні інвестиції</p>
                    <p className="text-5xl font-extrabold text-white mb-8">25 000 грн</p>
                    
                    <div className="space-y-4 text-left">
                        <div className="flex items-center">
                            <span className="text-cyan-400 text-2xl mr-4">✓</span>
                            <span className="text-gray-300">Прогноз звернень: <span className="font-bold text-white">40-60</span></span>
                        </div>
                        <div className="flex items-center">
                            <span className="text-cyan-400 text-2xl mr-4">✓</span>
                            <span className="text-gray-300">Прогноз контрактів: <span className="font-bold text-white">4-6</span></span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-900 p-8 rounded-lg text-center border border-green-500/50">
                    <p className="text-gray-300 mb-2">Ваш потенційний чистий прибуток:</p>
                    <p className="text-5xl sm:text-6xl font-extrabold text-green-400">
                        ~175 000 грн
                    </p>
                    <p className="text-sm text-gray-500 mt-3">
                        *розрахунок при середньому прибутку з одного контракту 50 000 грн
                    </p>
                </div>
            </div>
             <div className="mt-12">
                <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                    Почати заробляти
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedResultsV3;
