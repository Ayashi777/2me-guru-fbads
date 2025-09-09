import React from 'react';

const promises = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Жодних довгострокових контрактів",
    description: "Працюємо помісячно. Якщо ви не бачите результату, ви нічого не втрачаєте. Ми впевнені, що ви захочете залишитись."
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.572a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
        </svg>
    ),
    title: "Система кваліфікації лідів",
    description: "Ми впроваджуємо квізи та детальні форми, щоб відсіяти нецільових клієнтів. Ви спілкуєтесь лише з тими, хто готовий купувати."
  },
  {
    icon: (
         <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.25A2.25 2.25 0 006 20.25z" />
        </svg>
    ),
    title: "Звітність, зрозуміла власнику",
    description: "Ми показуємо 3 цифри: 'Вкладено', 'Отримано звернень', 'Вартість звернення'. Ви завжди знаєте, як працюють ваші гроші."
  },
  {
    icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
    ),
    title: "Прямий контакт зі стратегом",
    description: "З вами працює не менеджер-початківець, а досвідчений маркетолог, який відповідає за результат головою та грошима."
  }
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description:string; }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 bg-gray-800 p-3 rounded-lg">{icon}</div>
        <div>
            <h3 className="text-xl font-bold mb-1">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

const OurPromiseV5: React.FC = () => {
    return (
        <section id="our-promise" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Наша обіцянка: маркетинг, який працює</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Ми побудували наш процес так, щоб уникнути всіх помилок, з якими ви могли стикатися раніше.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-10 max-w-4xl mx-auto">
                    {promises.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPromiseV5;