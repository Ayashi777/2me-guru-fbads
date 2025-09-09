import React from 'react';

const DealerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.25a.75.75 0 01-.75-.75v-7.5a.75.75 0 01.75-.75h1.5m16.5 0h.75a.75.75 0 00.75-.75V8.25a.75.75 0 00-.75-.75h-9a.75.75 0 00-.75.75v11.25a.75.75 0 00.75.75h2.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75h4.5v4.5h-4.5z" />
    </svg>
);

const ArchitectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
    </svg>
);

const ContractorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 21.75l-3.75-1.563a3 3 0 01-1.5-2.625V12.75l5.25-2.25 5.25 2.25v4.813a3 3 0 01-1.5 2.625L12 21.75z" />
        <path d="M12 21.75V12.75M12 12.75L6.75 10.5M17.25 10.5L12 12.75" />
        <path d="M6.75 10.5L12 8.25l5.25 2.25" />
        <path d="M3 13.5l4.5 1.875M21 13.5l-4.5 1.875" />
    </svg>
);


const servicesData = [
  {
    icon: <DealerIcon />,
    title: 'Залучення дилерів та дистриб\'юторів',
    description: "Будуємо дилерську мережу для виробників будматеріалів, забезпечуючи стабільний канал збуту продукції."
  },
  {
    icon: <ArchitectIcon />,
    title: 'Співпраця з архітекторами та дизайнерами',
    description: 'Інтегруємо ваші матеріали та рішення в проекти на ранніх стадіях, створюючи попит ще до початку будівництва.'
  },
  {
    icon: <ContractorIcon />,
    title: 'Робота з генпідрядниками та забудовниками',
    description: 'Виводимо ваш бізнес на великі об\'єкти, забезпечуючи участь у тендерах та отримання великих корпоративних замовлень.'
  }
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
    <div className="mb-4">{icon}</div>
    <h3 className="text-2xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);


const ServicesV4: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">На кого ми націлюємо вашу рекламу</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Ми знаходимо ключових гравців ринку, які стануть вашими довгостроковими партнерами.</p>
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

export default ServicesV4;