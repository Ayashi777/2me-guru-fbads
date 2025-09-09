import React from 'react';

const OfferV3: React.FC = () => {
  return (
    <section id="offer" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Наша пропозиція: Тестовий запуск за 15 000 грн</h2>
            <p className="text-lg text-gray-400 mb-8">
                Без довгострокових контрактів. Спробуйте і переконайтесь, що це працює, перш ніж вкладати великі бюджети.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 text-left bg-gray-900 p-8 rounded-xl border border-gray-700">
                <div className="flex items-start">
                    <div className="text-cyan-400 font-bold text-2xl mr-4">1.</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Запускаємо рекламу</h3>
                        <p className="text-gray-400 text-sm">Ми все налаштовуємо та створюємо прості, але ефективні оголошення.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-cyan-400 font-bold text-2xl mr-4">2.</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Отримуєте звернення</h3>
                        <p className="text-gray-400 text-sm">Перші потенційні клієнти з'являться вже протягом 7 днів.</p>
                    </div>
                </div>
                <div className="flex items-start">
                    <div className="text-cyan-400 font-bold text-2xl mr-4">3.</div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">Приймаєте рішення</h3>
                        <p className="text-gray-400 text-sm">Якщо результат вас влаштовує — продовжуємо співпрацю.</p>
                    </div>
                </div>
            </div>
             <div className="mt-12">
                <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                    Спробувати тестовий запуск
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default OfferV3;
