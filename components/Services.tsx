import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './icons/SocialIcons';

const servicesData = [
  {
    icon: <InstagramIcon className="h-12 w-12 text-cyan-400" />,
    title: 'Реклама в Instagram',
    description: "Візуально демонструємо ваші проекти, залучаючи платоспроможних власників квартир і будинків на комплексні ремонти та будівництво."
  },
  {
    icon: <FacebookIcon className="h-12 w-12 text-cyan-400" />,
    title: 'Реклама в Facebook',
    description: 'Точно націлюємось на специфічні аудиторії: інвесторів, бізнеси, мешканців конкретних ЖК та котеджних містечок.'
  },
  {
    icon: <TikTokIcon className="h-12 w-12 text-cyan-400" />,
    title: 'Реклама в TikTok',
    description: 'Створюємо вірусний відео-контент з оглядами ваших об\'єктів та кейсами, що генерує потік "теплих" та лояльних лідів.'
  }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наш підхід до залучення клієнтів</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ми використовуємо перевірені інструменти для генерації якісних заявок у будівельній ніші.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;