// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';

const CheckIcon = () => (
    <svg className="w-6 h-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
);

const pricingTiers = [
    {
        name: "Старт — для перевірки ніші",
        price: "20000 грн/міс",
        budget: "+ рекомендований бюджет від 10 000 грн",
        description: "Отримайте перші ліди та зрозумійте, які послуги та канали приносять найбільший прибуток вашому бізнесу.",
        features: [
            "Аналіз цільової аудиторії",
            "Запуск до 2-х рекламних кампаній",
            "Створення базових креативів",
            "Щотижнева звітність"
        ],
        cta: "Отримати перші угоди"
    },
    {
        name: "Зростання — для стабільного потоку",
        price: "40000 грн/міс",
        budget: "+ рекомендований бюджет від 25 000 грн",
        isPopular: true,
        description: "Повноцінна маркетингова система: стабільний потік заявок, інтеграція з CRM, автоматизація та глибока аналітика.",
        features: [
            "Все, що в пакеті 'Старт'",
            "Запуск до 5-ти рекламних кампаній",
            "A/B тестування креативів та аудиторій",
            "Глибока аналітика та оптимізація",
            "Персональний маркетолог"
        ],
        cta: "Розрахувати мій ROI"
    },
    {
        name: "Максимум — для лідерів ринку",
        price: "Індивідуально",
        budget: "Бюджет розраховується індивідуально",
        description: "Індивідуальні рішення для великих проектів та відділів продажів. Домінування в ніші та побудова сильного бренду.",
        features: [
            "Все, що в пакеті 'Оптимальний'",
            "Підключення додаткових каналів",
            "Розробка довгострокової маркетинг-стратегії",
            "Пріоритетна підтримка 24/7"
        ],
        cta: "Спланувати pipeline"
    }
];

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Який бюджет приносить вам 50–200 заявок щомісяця</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Оберіть план, який відповідає вашим цілям. Ми пропонуємо гнучкі рішення для залучення клієнтів на ремонт та будівництво.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {pricingTiers.map((tier, index) => (
                        <div key={index} className={`bg-gray-800 rounded-xl p-8 border ${tier.isPopular ? 'border-cyan-500' : 'border-gray-700'} flex flex-col relative`}>
                            {tier.isPopular && <span className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Найпопулярніший</span>}
                            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                            <p className="text-gray-400 mb-6 flex-grow">{tier.description}</p>
                            <div className="mb-8">
                                <div>
                                    <span className="text-4xl font-extrabold">{tier.price.split(' ')[0]}</span>
                                    <span className="text-gray-400"> {tier.price.split(' ').slice(1).join(' ')}</span>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">{tier.budget}</p>
                            </div>
                            <ul className="space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start">
                                        <CheckIcon />
                                        <span className="ml-3 text-gray-300">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="#contact" className={`mt-auto w-full text-center font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 ${tier.isPopular ? 'bg-cyan-500 hover:bg-cyan-600 text-white' : 'bg-gray-700 hover:bg-gray-600 text-white'}`}>
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold mb-4">Не впевнені, який тариф обрати?</h3>
                    <p className="text-gray-400 max-w-xl mx-auto mb-6">Отримайте безкоштовний розрахунок вартості ліда та прогноз окупності інвестицій саме для вашої ніші.</p>
                    <a href="#contact" className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                        Отримати прогноз CPL для моєї ніші
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Pricing;