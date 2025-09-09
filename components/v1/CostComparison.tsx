// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';

const CheckMark = () => <span className="text-cyan-400 text-2xl">✓</span>;
const CrossMark = () => <span className="text-red-500 text-2xl">✗</span>;

const comparisonData = {
    headers: ["Параметр", "In-house Маркетолог", "Типова Агенція", "2Me Guru"],
    rows: [
        { feature: "Зарплата + податки", values: ["від 40 000 грн/міс", "Оплата за проект", "Фіксована оплата"] },
        { feature: "Досвід у будівництві", values: [<CrossMark />, <CrossMark />, <CheckMark />] },
        { feature: "Команда експертів (копірайтер, дизайнер)", values: [<CrossMark />, <CheckMark />, <CheckMark />] },
        { feature: "Прямий контакт з виконавцем", values: [<CheckMark />, <CrossMark />, <CheckMark />] },
        { feature: "Оплата відпусток та лікарняних", values: [<CheckMark />, <CrossMark />, <CrossMark />] },
        { feature: "Залученість у ваш бізнес", values: [<CheckMark />, <CrossMark />, <CheckMark />] },
        { feature: "Фокус на ROI", values: [<CrossMark />, <CrossMark />, <CheckMark />] },
    ]
};

const CostComparison: React.FC = () => {
    return (
        <section id="cost-comparison" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Що вигідніше для вашого бізнесу?</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Порівняйте вартість та переваги співпраці з нами у порівнянні з іншими популярними рішеннями.</p>
                </div>
                <div className="max-w-5xl mx-auto overflow-x-auto bg-gray-900 rounded-xl border border-gray-700 p-2">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-gray-700">
                                {comparisonData.headers.map((header, i) => (
                                    <th key={i} className={`p-4 text-base ${i > 0 ? 'text-center' : ''} ${i === 3 ? 'text-cyan-400 font-bold' : 'text-white'}`}>
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {comparisonData.rows.map((row, i) => (
                                <tr key={i} className={i < comparisonData.rows.length - 1 ? 'border-b border-gray-800' : ''}>
                                    <td className="p-4 font-semibold text-gray-300">{row.feature}</td>
                                    {row.values.map((value, j) => (
                                        <td key={j} className={`p-4 text-center text-gray-400 ${j === 2 ? 'bg-cyan-900/20' : ''}`}>
                                            {value}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default CostComparison;
