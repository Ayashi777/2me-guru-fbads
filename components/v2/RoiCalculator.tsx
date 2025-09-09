import React, { useState, useMemo } from 'react';

const RoiCalculatorV2: React.FC = () => {
    const [marketingBudget, setMarketingBudget] = useState(60000);
    const [avgDeal, setAvgDeal] = useState(150000);
    const [conversionRate, setConversionRate] = useState(10);
    const [avgCPL, setAvgCPL] = useState(500);

    const numberOfLeads = useMemo(() => {
        if (avgCPL === 0) return 0;
        return Math.floor(marketingBudget / avgCPL);
    }, [marketingBudget, avgCPL]);

    const numberOfDeals = useMemo(() => {
        return (numberOfLeads * (conversionRate / 100)).toFixed(1);
    }, [numberOfLeads, conversionRate]);

    const totalRevenue = useMemo(() => {
        return parseFloat(numberOfDeals) * avgDeal;
    }, [numberOfDeals, avgDeal]);

    const netProfit = useMemo(() => {
        return totalRevenue - marketingBudget;
    }, [totalRevenue, marketingBudget]);

    const roi = useMemo(() => {
        if (marketingBudget === 0) return 0;
        return (netProfit / marketingBudget) * 100;
    }, [netProfit, marketingBudget]);

    return (
        <section id="roi-calculator" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Калькулятор прибутку</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                       Порахуйте, скільки ви можете заробити, вклавши гроші в рекламу.
                    </p>
                </div>
                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gray-900 p-8 rounded-xl border border-gray-700">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="marketingBudget" className="block text-gray-400 mb-2">Бюджет на рекламу на місяць (грн)</label>
                            <input
                                type="range"
                                id="marketingBudget"
                                min="15000"
                                max="200000"
                                step="5000"
                                value={marketingBudget}
                                onChange={(e) => setMarketingBudget(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-xl font-bold">{marketingBudget.toLocaleString('uk-UA')} грн</div>
                        </div>
                        <div>
                            <label htmlFor="avgDeal" className="block text-gray-400 mb-2">Середня вартість вашого контракту (грн)</label>
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
                            <label htmlFor="avgCPL" className="block text-gray-400 mb-2">Прогнозована вартість 1 звернення (грн)</label>
                             <input
                                type="range"
                                id="avgCPL"
                                min="100"
                                max="2000"
                                step="50"
                                value={avgCPL}
                                onChange={(e) => setAvgCPL(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-xl font-bold">{avgCPL.toLocaleString('uk-UA')} грн</div>
                        </div>
                         <div>
                            <label htmlFor="conversionRate" className="block text-gray-400 mb-2">Скільки звернень стають угодами (%)</label>
                            <input
                                type="range"
                                id="conversionRate"
                                min="1"
                                max="50"
                                value={conversionRate}
                                onChange={(e) => setConversionRate(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-xl font-bold">{conversionRate}%</div>
                        </div>
                    </div>
                    <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700 h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-6 text-gray-300">Ваш потенційний результат за місяць:</h3>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                            <div>
                                <p className="text-gray-400 text-sm">Кількість звернень</p>
                                <p className="text-3xl font-extrabold text-cyan-400">{numberOfLeads}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Кількість контрактів</p>
                                <p className="text-3xl font-extrabold text-cyan-400">{numberOfDeals}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Загальний дохід</p>
                                <p className="text-xl font-extrabold text-white">{totalRevenue.toLocaleString('uk-UA')} грн</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm">Чистий прибуток</p>
                                <p className={`text-xl font-extrabold ${netProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                                    {netProfit.toLocaleString('uk-UA')} грн
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700">
                             <p className="text-gray-400 mb-2">Окупність вкладень:</p>
                             <p className={`text-5xl font-extrabold ${roi >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                               {roi.toFixed(0)}%
                             </p>
                        </div>
                    </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-8 max-w-3xl mx-auto">
                    *Примітка: Розрахунки є орієнтовними. Наша головна задача — знижувати вартість звернення та збільшувати кількість угод, щоб максимізувати ваш прибуток.
                </p>
            </div>
        </section>
    );
};

export default RoiCalculatorV2;
