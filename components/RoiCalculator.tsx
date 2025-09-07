// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React, { useState, useMemo } from 'react';

const RoiCalculator: React.FC = () => {
    const [avgDeal, setAvgDeal] = useState(150000);
    const [conversionRate, setConversionRate] = useState(20);
    const [marketingCost, setMarketingCost] = useState(60000); // Services + Ad Budget

    const potentialProfit = useMemo(() => {
        return avgDeal - marketingCost;
    }, [avgDeal, marketingCost]);

    const roi = useMemo(() => {
        if (marketingCost === 0) return 0;
        return ((avgDeal - marketingCost) / marketingCost) * 100;
    }, [avgDeal, marketingCost]);

    const leadsToCloseOneDeal = useMemo(() => {
        if (conversionRate === 0) return Infinity;
        return (100 / conversionRate).toFixed(1);
    }, [conversionRate]);


    return (
        <section id="roi-calculator" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Розрахуйте ваш потенційний ROI</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                        Використовуйте цей простий калькулятор, щоб побачити, як інвестиції в маркетинг можуть окупитися вже з першої угоди.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gray-900 p-8 rounded-xl border border-gray-700">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="avgDeal" className="block text-gray-400 mb-2">Ваш середній чек (грн)</label>
                            <input
                                type="range"
                                id="avgDeal"
                                min="10000"
                                max="1000000"
                                step="10000"
                                value={avgDeal}
                                onChange={(e) => setAvgDeal(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-xl font-bold">{avgDeal.toLocaleString('uk-UA')} грн</div>
                        </div>
                         <div>
                            <label htmlFor="conversionRate" className="block text-gray-400 mb-2">Ваша конверсія з ліда в угоду (%)</label>
                            <input
                                type="range"
                                id="conversionRate"
                                min="1"
                                max="100"
                                value={conversionRate}
                                onChange={(e) => setConversionRate(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-xl font-bold">{conversionRate}%</div>
                        </div>
                        <div>
                            <label htmlFor="marketingCost" className="block text-gray-400 mb-2">Приблизні витрати на маркетинг (послуги + бюджет, грн/міс)</label>
                             <input
                                type="range"
                                id="marketingCost"
                                min="15000"
                                max="200000"
                                step="5000"
                                value={marketingCost}
                                onChange={(e) => setMarketingCost(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-xl font-bold">{marketingCost.toLocaleString('uk-UA')} грн</div>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
                        <h3 className="text-xl font-bold mb-4 text-gray-300">Потенційний результат за місяць</h3>
                        <p className="text-gray-400 mb-2">Щоб закрити 1 угоду, вам потрібно:</p>
                        <p className="text-4xl font-extrabold text-cyan-400 mb-6">{leadsToCloseOneDeal} <span className="text-2xl text-gray-400">ліда</span></p>

                        <p className="text-gray-400 mb-2">Ваш чистий прибуток (з 1 угоди):</p>
                        <p className={`text-4xl font-extrabold mb-6 ${potentialProfit > 0 ? 'text-green-400' : 'text-red-400'}`}>
                            {potentialProfit.toLocaleString('uk-UA')} <span className="text-2xl text-gray-400">грн</span>
                        </p>

                        <p className="text-gray-400 mb-2">Повернення інвестицій (ROI):</p>
                        <p className={`text-4xl font-extrabold ${roi > 0 ? 'text-green-400' : 'text-red-400'}`}>
                           {roi.toFixed(0)}%
                        </p>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-8 max-w-3xl mx-auto">
                    *Примітка: Розрахунки є орієнтовними. Зазвичай, вихід на стабільні показники ROI займає 2-3 місяці, необхідних для оптимізації рекламних кампаній.
                </p>
            </div>
        </section>
    );
};

export default RoiCalculator;