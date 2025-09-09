import React from 'react';

const principles = [
  {
    title: "Якість, а не кількість",
    description: "Наша мета — не сотні заявок, а декілька, але від клієнтів, з якими ви дійсно хочете працювати."
  },
  {
    title: "Репутація понад усе",
    description: "Ми будуємо ваш цифровий образ так, щоб він відповідав високій якості вашої роботи та зміцнював довіру."
  },
  {
    title: "Цифровий сторітелінг",
    description: "Перетворюємо ваші проекти на захоплюючі історії, які демонструють не лише результат, а й вашу філософію."
  },
  {
    title: "Ексклюзивність та таргет",
    description: "Ми знаходимо вашу аудиторію у 'закритих' цифрових просторах, забезпечуючи точне влучання."
  }
];

const PhilosophyV6: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наша філософія</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Чотири принципи, які дозволяють нам залучати преміум-клієнтів.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((item, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-xl border border-gray-700 transition-transform duration-300 hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-3 text-amber-400">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophyV6;