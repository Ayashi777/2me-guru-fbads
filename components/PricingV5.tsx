import React from 'react';

const PricingV5: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-extrabold mb-4">Одна пропозиція. Жодного ризику.</h2>
            <p className="text-lg text-gray-400 mb-8">
                Замість складних тарифів ми пропонуємо простий і зрозумілий перший крок. Переконайтесь, що ми можемо дати результат, перш ніж говорити про довгострокову співпрацю.
            </p>
            <div className="bg-gray-800 p-8 rounded-xl border border-cyan-500 text-left">
                <h3 className="text-2xl font-bold text-center text-cyan-400 mb-2">Аудит + Тестовий запуск</h3>
                <p className="text-center text-gray-400 mb-6">Вартість: <span className="font-bold text-white">15 000 грн</span> (+ мінімальний рекламний бюджет)</p>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-white mb-2">Що входить в аудит:</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span>Аналіз ваших минулих кампаній.</li>
                            <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span>Аналіз конкурентів та їх воронок.</li>
                            <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span>План робіт на 1-й місяць з прогнозом KPI.</li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold text-white mb-2">Що входить в тестовий запуск:</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span>Запуск 1-2 рекламних кампаній.</li>
                            <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span>Отримання перших 10-20 лідів.</li>
                            <li className="flex items-start"><span className="text-cyan-400 mr-2 mt-1">✓</span>Звіт з реальними, а не прогнозними цифрами.</li>
                        </ul>
                    </div>
                </div>
            </div>
             <div className="mt-12">
                <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                    Почати з тестового запуску
                </a>
             </div>
        </div>
      </div>
    </section>
  );
};

export default PricingV5;