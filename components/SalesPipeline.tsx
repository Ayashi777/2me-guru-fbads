// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';

const partnershipPrinciples = [
    {
        title: "Кваліфіковані ліди",
        description: "Замість потоку нецільових звернень ви отримуєте контакти людей, які вже знайомі з вашими послугами, цінами та готові до діалогу.",
        icon: "🎯"
    },
    {
        title: "Скорочення циклу угоди",
        description: "Менеджерам не потрібно 'прогрівати' клієнта з нуля. Вони починають розмову з обговорення деталей проекту, а не з пояснення, хто ви.",
        icon: "⏱️"
    },
    {
        title: "Збільшення конверсії",
        description: "Робота з 'гарячою' аудиторією значно підвищує відсоток закритих угод. Більше контрактів з меншими зусиллями.",
        icon: "📈"
    },
    {
        title: "Прогнозований результат",
        description: "Ви отримуєте керований потік клієнтів, що дозволяє планувати завантаженість бригад та фінансові потоки компанії.",
        icon: "📊"
    },
    {
        title: "Спільне фінансове планування",
        description: "Перед початком роботи ми разом визначаємо цільові показники CAC та ROMI. Рекламний бюджет розглядається як інвестиція з прогнозованою окупністю.",
        icon: "💰"
    }
];

const SalesPipeline: React.FC = () => {
    return (
        <section id="sales-pipeline" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Від ліда до прибутку: Наш спільний процес</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Ми не просто генеруємо ліди. Ми будуємо прозору систему, де кожна інвестована гривня працює на ваш фінансовий результат.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {partnershipPrinciples.map((step, index) => (
                        <div key={index} className={`text-center p-6 ${index === 4 ? 'lg:col-start-2' : ''}`}>
                            <div className="text-5xl mb-4">{step.icon}</div>
                            <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                            <p className="text-gray-400">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SalesPipeline;