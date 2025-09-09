import React from 'react';

const steps = [
  {
    step: "01",
    title: "Занурення у бренд",
    description: "Вивчаємо вашу філософію, цінності та унікальний стиль, щоб транслювати їх у цифровому просторі."
  },
  {
    step: "02",
    title: "Створення наративу",
    description: "Розробляємо візуальну та текстову стратегію, яка розповідає історію вашого бренду та проектів."
  },
  {
    step: "03",
    title: "Цільовий 'посів'",
    description: "Акуратно і точно 'висіваємо' ваш контент у середовищах, де перебуває ваша цільова аудиторія."
  },
  {
    step: "04",
    title: "White-Glove супровід",
    description: "Кожен запит проходить попередню кваліфікацію. Ви отримуєте лише контакти клієнтів, готових до діалогу."
  }
];

const ApproachV6: React.FC = () => {
  return (
    <section id="approach" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наш підхід</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Процес, створений для залучення вимогливих клієнтів.</p>
        </div>
        <div className="max-w-4xl mx-auto border-t border-gray-700">
          {steps.map((item, index) => (
            <div key={index} className="grid md:grid-cols-3 gap-8 py-8 border-b border-gray-700 items-center">
              <div className="md:col-span-1">
                <span className="text-2xl font-bold text-amber-400">{item.step}</span>
                <h3 className="text-3xl font-bold mt-1">{item.title}</h3>
              </div>
              <div className="md:col-span-2">
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApproachV6;