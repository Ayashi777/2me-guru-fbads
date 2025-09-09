import React from 'react';

const projects = [
  {
    title: "Резиденція у стилі мінімалізм, Київ",
    category: "Архітектура",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Лофт-апартаменти, Львів",
    category: "Дизайн інтер'єру",
    imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Фасад з натурального каменю, Одеса",
    category: "Будівництво",
    imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=800&auto=format&fit=crop"
  },
   {
    title: "Панорамний пентхаус, Дніпро",
    category: "Дизайн інтер'єру",
    imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
  }
];

const PortfolioCard: React.FC<typeof projects[0]> = ({ title, category, imageUrl }) => (
    <div className="group relative overflow-hidden rounded-xl">
        <img src={imageUrl} alt={title} className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6">
            <p className="text-sm text-amber-400">{category}</p>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
    </div>
);

const PortfolioV6: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Вибрані проекти</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Портфоліо, яке говорить саме за себе.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </div>
        <div className="text-center mt-12">
            <a href="#contact" className="text-amber-400 border-b border-amber-400/50 hover:border-amber-400 transition-colors">
                Запросити консультацію по вашому проекту
            </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioV6;