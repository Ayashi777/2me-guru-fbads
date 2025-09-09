import React from 'react';

const steps = [
  {
    step: "01",
    title: "Аналіз ринку партнерів",
    description: "Визначаємо ваш ідеальний профіль партнера (дилер, архітектор, забудовник) та аналізуємо їхні потреби."
  },
  {
    step: "02",
    title: "Розробка B2B-пропозиції",
    description: "Формулюємо вашу ціннісну пропозицію так, щоб вона була максимально привабливою для потенційних партнерів."
  },
  {
    step: "03",
    title: "Генерація контактів",
    description: "Використовуємо LinkedIn, таргетовану рекламу та контент-маркетинг для залучення осіб, що приймають рішення."
  },
  {
    step: "04",
    title: "Кваліфікація та 'прогрів'",
    description: "Передаємо вашому відділу продажів вже 'теплі' контакти, які знайомі з вашою компанією і зацікавлені у співпраці."
  }
];

const HowItWorksV4: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Процес побудови вашого B2B-пайплайну</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">4 кроки до стабільного потоку корпоративних клієнтів та партнерів.</p>
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

export default HowItWorksV4;