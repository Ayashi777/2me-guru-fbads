import React from 'react';

const benefits = [
  {
    emoji: "⏱️",
    title: "Швидкий обіг",
    description: "Розуміємо, що час — це гроші. Гарантуємо виконання робіт у чітко визначені терміни, щоб ви могли швидше продати об'єкт."
  },
  {
    emoji: "💰",
    title: "Прозорий бюджет",
    description: "Ви отримуєте детальний кошторис без прихованих платежів. Ми допомагаємо вам точно розрахувати рентабельність проекту."
  },
  {
    emoji: "🤝",
    title: "Надійне партнерство",
    description: "Ми націлені на довгострокову співпрацю. Ви отримуєте не просто підрядника, а партнера для всіх ваших майбутніх об'єктів."
  },
  {
    emoji: "✨",
    title: "Якість, що продає",
    description: "Робимо ремонт, який підвищує ринкову вартість вашої нерухомості та приваблює покупців."
  }
];

const InvestorBenefitsV7: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Створено для інвесторів</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ми говоримо мовою цифр і розуміємо, що для вас найважливіше.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((point, index) => (
            <div key={index} className="bg-gray-900/50 p-6 rounded-xl border border-gray-700 text-center transition-transform duration-300 hover:-translate-y-2">
              <div className="text-5xl mb-4">{point.emoji}</div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-gray-400 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestorBenefitsV7;