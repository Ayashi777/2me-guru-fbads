import React from 'react';

const testimonialsData = [
  {
    quote: "Раніше клієнти приходили з 'сарафанного радіо', і це було непередбачувано. З 2Me Guru ми отримали стабільний потік саме тих замовників, яких шукали – на комплексні ремонти. Тепер можемо планувати роботу на місяці вперед.",
    name: "Віктор, власник компанії 'ArtBuild'",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Втомився від дзвінків 'просто запитати ціну'. Хлопці налаштували рекламу так, що звертаються великі дилери, які вже бачили якість нашої продукції. Кількість пустих розмов зменшилась в рази.",
    name: "Олег, комерційний директор 'PlitStone'",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Я працював і з агенціями, де тебе передають від менеджера до менеджера, і з фрілансерами, які зникають. 2Me Guru — це зовсім інший рівень. Прямий контакт, глибоке розуміння мого бізнесу і, головне, стабільний результат. Рекомендую.",
    name: "Андрій, керівник проекту 'Green Hills'",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop"
  },
  {
    quote: "Ми робили якісний продукт, але програвали 'гігантам' у маркетингу. 2Me Guru допомогли нам знайти нашу нішу — архітекторів та дизайнерів. Тепер ми отримуємо менше замовлень, але кожне з них значно прибутковіше. Це змінило нашу економіку.",
    name: "Сергій, засновник 'TerraForma'",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=100&auto=format&fit=crop"
  }
];

const TestimonialCard: React.FC<{ quote: string; name: string; avatar: string; }> = ({ quote, name, avatar }) => (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full flex flex-col transition-transform duration-300 hover:-translate-y-2 break-inside-avoid">
        <p className="text-gray-300 mb-6 flex-grow">"{quote}"</p>
        <div className="flex items-center">
            <img src={avatar} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
            <div>
                <p className="font-bold text-white">{name}</p>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Що кажуть наші клієнти</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Нам довіряють, бо ми приносимо не кліки, а контракти.</p>
        </div>
        <div className="columns-1 md:columns-2 gap-8 space-y-8">
            {testimonialsData.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
