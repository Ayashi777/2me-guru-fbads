import React from 'react';

const painPoints = [
  {
    emoji: "💸",
    title: "Бюджет 'злито'",
    description: "Ви вклали гроші, але не отримали жодного реального клієнта, лише відмовки та незрозумілі графіки."
  },
  {
    emoji: "🤷‍♂️",
    title: "Нецільові звернення",
    description: "Телефон дзвонить, але 90% запитів — 'просто запитати' від людей, які ніколи нічого не куплять."
  },
  {
    emoji: "📊",
    title: "Незрозумілі звіти",
    description: "Вам показують 'охоплення' та 'кліки', але ніхто не може чітко сказати, скільки грошей принесла реклама."
  },
  {
    emoji: "👻",
    title: "Виконавець зник",
    description: "Після оплати маркетолог відповідає раз на тиждень, а ви не розумієте, що взагалі відбувається."
  }
];

const PainPointsV5: React.FC = () => {
  return (
    <section id="pain-points" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Знайома ситуація?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Чотири причини, чому маркетинг у будівництві часто не працює.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
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

export default PainPointsV5;