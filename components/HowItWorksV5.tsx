import React from 'react';

const steps = [
  {
    step: "01",
    title: "Безкоштовна діагностика",
    description: "Ми аналізуємо ваші минулі рекламні кампанії та знаходимо причини, чому вони не спрацювали. Ви нічого не платите."
  },
  {
    step: "02",
    title: "Тестовий спринт (7-14 днів)",
    description: "На мінімальному бюджеті ми запускаємо нашу гіпотезу, щоб ви отримали перші якісні звернення і побачили результат."
  },
  {
    step: "03",
    title: "Щотижневий звіт-дзвінок",
    description: "Раз на тиждень ми зідзвонюємось, де за 15 хвилин показуємо, що зроблено, які результати і що плануємо далі."
  },
  {
    step: "04",
    title: "Масштабування або зупинка",
    description: "Якщо результати тестового спринту вас влаштовують — ми масштабуємо кампанію. Якщо ні — ви нічого не втрачаєте."
  }
];

const HowItWorksV5: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наш процес: Максимум прозорості, мінімум ризику</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ми не просимо вас вірити нам на слово. Ми пропонуємо перевірити.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item) => (
            <div key={item.step} className="bg-gray-800 p-8 rounded-xl border border-gray-700 relative transition-transform duration-300 hover:-translate-y-2">
              <span className="absolute top-0 right-8 text-6xl font-black text-gray-700/50 -z-1">{item.step}</span>
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksV5;