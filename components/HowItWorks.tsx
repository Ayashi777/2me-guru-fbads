import React from 'react';

const steps = [
  {
    step: "01",
    title: "Безкоштовна стратегічна сесія",
    description: "Ми глибоко аналізуємо ваш бізнес, цільову аудиторію та конкурентів, щоб розробити індивідуальну стратегію залучення клієнтів, яка працюватиме саме для вас."
  },
  {
    step: "02",
    title: "Підготовка та запуск кампаній",
    description: "Створюємо переконливі рекламні креативи та тексти. Налаштовуємо точний таргетинг на вашу аудиторію та запускаємо кампанії в Instagram, Facebook та TikTok."
  },
  {
    step: "03",
    title: "Оптимізація та аналітика",
    description: "Щодня відстежуємо показники, тестуємо гіпотези та оптимізуємо кампанії для зниження вартості заявки та підвищення її якості. Ви отримуєте лише цільові звернення."
  },
  {
    step: "04",
    title: "Звітність та масштабування",
    description: "Надаємо прозорі звіти, де ви бачите, скільки коштує кожен потенційний клієнт. Разом з вами плануємо, як масштабувати успіх та завантажити роботою ще більше бригад."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Як ми працюємо: 4 кроки до результату</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Прозорий процес, націлений на отримання якісних замовлень для вашого бізнесу.</p>
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

export default HowItWorks;