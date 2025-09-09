import React, { useState, useMemo } from 'react';

const ProfitCalculatorV3: React.FC = () => {
    const [investment, setInvestment] = useState(25000);
    const [profitPerDeal, setProfitPerDeal] = useState(50000);
    const [costPerInquiry, setCostPerInquiry] = useState(500);
    const [conversionRate, setConversionRate] = useState(10);


    const { potentialInquiries, potentialDeals, potentialProfit } = useMemo(() => {
        const inquiries = costPerInquiry > 0 ? Math.floor(investment / costPerInquiry) : 0;
        const deals = Math.floor(inquiries * (conversionRate / 100));
        const profit = (deals * profitPerDeal) - investment;
        
        return {
            potentialInquiries: inquiries,
            potentialDeals: deals,
            potentialProfit: profit
        };
    }, [investment, profitPerDeal, costPerInquiry, conversionRate]);

    return (
        <section id="profit-calculator" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Порахуйте свій прибуток</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                       Пересуньте повзунки, щоб побачити, скільки ви можете заробити з нашою допомогою.
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center bg-gray-800 p-8 rounded-xl border border-gray-700">
                    <div className="grid sm:grid-cols-2 gap-8">
                        <div>
                            <label htmlFor="investment" className="block text-gray-400 mb-2 text-center">Скільки вкласти в рекламу?</label>
                            <input
                                type="range"
                                id="investment"
                                min="10000"
                                max="150000"
                                step="1000"
                                value={investment}
                                onChange={(e) => setInvestment(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-2xl font-bold">{investment.toLocaleString('uk-UA')} грн</div>
                        </div>
                        <div>
                            <label htmlFor="profitPerDeal" className="block text-gray-400 mb-2 text-center">Прибуток з 1 клієнта?</label>
                            <input
                                type="range"
                                id="profitPerDeal"
                                min="10000"
                                max="200000"
                                step="5000"
                                value={profitPerDeal}
                                onChange={(e) => setProfitPerDeal(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-2xl font-bold">{profitPerDeal.toLocaleString('uk-UA')} грн</div>
                        </div>
                         <div>
                            <label htmlFor="costPerInquiry" className="block text-gray-400 mb-2 text-center">Вартість 1 звернення?</label>
                            <input
                                type="range"
                                id="costPerInquiry"
                                min="100"
                                max="1500"
                                step="25"
                                value={costPerInquiry}
                                onChange={(e) => setCostPerInquiry(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-2xl font-bold">{costPerInquiry.toLocaleString('uk-UA')} грн</div>
                        </div>
                        <div>
                            <label htmlFor="conversionRate" className="block text-gray-400 mb-2 text-center">Скільки угод закриваєте?</label>
                            <input
                                type="range"
                                id="conversionRate"
                                min="5"
                                max="50"
                                step="1"
                                value={conversionRate}
                                onChange={(e) => setConversionRate(Number(e.target.value))}
                                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                            />
                            <div className="text-center mt-2 text-2xl font-bold">{conversionRate}%</div>
                        </div>
                    </div>

                    <div className="bg-gray-900 p-8 rounded-lg text-center h-full flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-6 text-gray-300">Ваш потенційний результат:</h3>
                        <div className="grid grid-cols-2 gap-6">
                           <div>
                                <p className="text-gray-400">Прогноз звернень</p>
                                <p className="text-4xl font-extrabold text-cyan-400">{potentialInquiries}</p>
                            </div>
                             <div>
                                <p className="text-gray-400">Прогноз контрактів</p>
                                <p className="text-4xl font-extrabold text-cyan-400">{potentialDeals}</p>
                            </div>
                        </div>
                        <div className="mt-8 pt-6 border-t border-gray-700">
                             <p className="text-gray-400 mb-2">Ваш чистий прибуток (за мінусом реклами):</p>
                             <p className={`text-5xl font-extrabold ${potentialProfit >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                               {potentialProfit.toLocaleString('uk-UA')} грн
                             </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProfitCalculatorV3;