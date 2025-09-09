import React from 'react';

const steps = [
  {
    step: "01",
    title: "Вивчаємо ваш бізнес",
    description: "Аналізуємо, хто ваші найкращі клієнти та що пропонують конкуренти, щоб знайти вашу сильну сторону."
  },
  {
    step: "02",
    title: "Тестуємо рекламу",
    description: "За тиждень ви отримуєте перші звернення від клієнтів, щоб переконатись, що реклама працює."
  },
  {
    step: "03",
    title: "Збільшуємо потік клієнтів",
    description: "Коли ми знаходимо ефективний підхід, ми збільшуємо рекламний бюджет, щоб ви отримували більше звернень."
  },
  {
    step: "04",
    title: "Рахуємо прибуток",
    description: "Налаштовуємо звіти так, щоб ви бачили не просто кліки, а скільки грошей зароблено з кожної вкладеної гривні."
  }
];

const HowItWorksV2: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наш процес: 4 кроки до нових контрактів</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Простий та зрозумілий план роботи, націлений на отримання реальних замовлень.</p>
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

export default HowItWorksV2;
