import React from 'react';

const examplesData = [
  {
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=600&auto=format&fit=crop',
    title: 'Ремонт квартир в Instagram',
    description: 'Реклама для бригади, яка робить комплексні ремонти в новобудовах Києва.',
    invested: '25 000 грн',
    received: '85 звернень',
    earned: '~450 000 грн'
  },
  {
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop',
    title: 'Продаж котеджів через Facebook',
    description: 'Реклама для забудовника котеджного містечка під Львовом.',
    invested: '45 000 грн',
    received: '62 звернення',
    earned: '2 продажі'
  },
  {
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600&auto=format&fit=crop',
    title: 'Пошук дилерів для виробника',
    description: 'Виробник плитки шукав оптових клієнтів. Зняли короткі відео з виробництва.',
    invested: '18 000 грн',
    received: '50+ запитів',
    earned: '5 нових дилерів'
  }
];

const ExampleCard: React.FC<typeof examplesData[0]> = (props) => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 flex flex-col h-full overflow-hidden hover:-translate-y-2 transition-transform duration-300">
    <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{props.description}</p>
      
      <div className="grid grid-cols-3 gap-4 text-center mb-4 border-t border-b border-gray-700 py-4">
        <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Вклали</p>
            <p className="text-2xl font-bold text-white">{props.invested}</p>
        </div>
        <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Отримали</p>
            <p className="text-2xl font-bold text-white">{props.received}</p>
        </div>
        <div>
            <p className="text-gray-400 text-xs uppercase tracking-wider">Заробили</p>
            <p className="text-2xl font-bold text-green-400">{props.earned}</p>
        </div>
      </div>
    </div>
  </div>
);

const WorkExamples: React.FC = () => {
  return (
    <section id="work-examples" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Приклади робіт</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Ось як це працює: ми запускаємо рекламу, ви отримуєте прибуток.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examplesData.map((example, index) => (
            <ExampleCard key={index} {...example} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExamples;
