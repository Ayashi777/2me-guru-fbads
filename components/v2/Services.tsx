import React from 'react';
import { servicesData } from '../../data/services';

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
