import React from 'react';

const servicesData = [
  {
    image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=600&auto=format&fit=crop',
    title: 'Реклама ремонту квартир в Instagram',
    description: 'Показали рекламу в Києві влітку 2024 року. Орієнтувались на мешканців нових ЖК.',
    results: [
      { value: '25 000 грн', label: 'Витрачено' },
      { value: '85', label: 'Звернень' },
      { value: '294 грн', label: 'Вартість звернення' },
    ],
    profit: 'Прибуток клієнта: ~450 000 грн з 3-х угод'
  },
  {
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=600&auto=format&fit=crop',
    title: 'Продаж котеджів через Facebook',
    description: 'Запустили рекламу для котеджного містечка під Львовом. Ціль — отримати контакти для консультації.',
    results: [
      { value: '45 000 грн', label: 'Витрачено' },
      { value: '62', label: 'Звернення' },
      { value: '725 грн', label: 'Вартість звернення' },
    ],
    profit: 'Прибуток клієнта: 2 проданих котеджі'
  },
  {
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=600&auto=format&fit=crop',
    title: 'Залучення дилерів через TikTok',
    description: 'Виробник плитки шукав оптових клієнтів. Зняли короткі відео з виробництва.',
     results: [
      { value: '18 000 грн', label: 'Витрачено' },
      { value: '50+', label: 'Запитів від дилерів' },
      { value: '~360 грн', label: 'Вартість запиту' },
    ],
    profit: 'Прибуток клієнта: 5 нових партнерів'
  }
];

const ServiceCard: React.FC<typeof servicesData[0]> = (props) => (
  <div className="bg-gray-800 rounded-xl border border-gray-700 flex flex-col h-full overflow-hidden hover:-translate-y-2 transition-transform duration-300">
    <img src={props.image} alt={props.title} className="w-full h-48 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-xl font-bold mb-2">{props.title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{props.description}</p>
      <div className="grid grid-cols-3 gap-4 text-center mb-4 border-t border-b border-gray-700 py-4">
        {props.results.map(res => (
          <div key={res.label}>
            <p className="text-2xl font-bold text-white">{res.value}</p>
            <p className="text-xs text-gray-500">{res.label}</p>
          </div>
        ))}
      </div>
      <div className="text-center bg-green-900/50 text-green-300 font-bold py-2 px-4 rounded-lg">
        {props.profit}
      </div>
    </div>
  </div>
);

const ServicesV2: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Як ми приводимо клієнтів: реальні приклади</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Замість розмов про "налаштування реклами", ми показуємо, як це виглядає в реальності і скільки грошей приносить.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesV2;
