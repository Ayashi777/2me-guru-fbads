import React from 'react';

const steps = [
  {
    step: "01",
    title: "Швидкий прорахунок",
    description: "Надсилайте нам фото/відео або адресу об'єкта — ми надаємо попередній кошторис протягом 24 годин."
  },
  {
    step: "02",
    title: "Фіксовані терміни",
    description: "Після огляду ми фіксуємо в договорі точні терміни виконання робіт. Жодних затримок."
  },
  {
    step: "03",
    title: "Виконання під ключ",
    description: "Беремо на себе всі роботи: від закупівлі матеріалів до прибирання. Ви отримуєте регулярні фото/відео звіти."
  },
  {
    step: "04",
    title: "Здача об'єкта",
    description: "Ви приймаєте повністю готовий до продажу або оренди об'єкт, який відповідає кошторису та термінам."
  }
];

const ProcessV7: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наш процес: 4 кроки до готового об'єкта</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Прозорий та ефективний процес, створений для економії вашого часу.</p>
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

export default ProcessV7;