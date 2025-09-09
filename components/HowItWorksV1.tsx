import React from 'react';

const steps = [
  {
    step: "01",
    title: "Аналіз ніші та конкурентів",
    description: "Знаходимо найприбутковіші сегменти аудиторії та розробляємо унікальну торгову пропозицію для вашого бізнесу."
  },
  {
    step: "02",
    title: "Запуск тестової кампанії",
    description: "Протягом 7 днів ви отримуєте перші цільові ліди для перевірки ефективності розробленої стратегії."
  },
  {
    step: "03",
    title: "Масштабування",
    description: "Збільшуємо кількість заявок, зберігаючи або знижуючи вартість залучення клієнта (CPL), щоб забезпечити стабільний ріст."
  },
  {
    step: "04",
    title: "Автоматизація та аналітика",
    description: "Інтегруємо з CRM, налаштовуємо наскрізну аналітику для повного контролю над ROI та ефективністю інвестицій."
  }
];

const HowItWorksV1: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наш процес: 4 кроки до результату</h2>
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

export default HowItWorksV1;
