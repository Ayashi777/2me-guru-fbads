import React from 'react';

const CertifiedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const RoiIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
);

const DashboardIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V5.75A2.25 2.25 0 0018 3.5H6A2.25 2.25 0 003.75 5.75v12.25A2.25 2.25 0 006 20.25z" />
    </svg>
);

const SavingsIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
    </svg>
);


const badges = [
    {
        icon: <CertifiedIcon />,
        title: "Фокус на KPI та результат",
        description: "Працюємо не на процес, а на результат. Узгоджуємо з вами ключові показники ефективності (KPI) і фокусуємося на їх досягненні."
    },
    {
        icon: <RoiIcon />,
        title: "Стратегія на окупність (ROI)",
        description: "Будуємо маркетингові воронки з однією метою — забезпечити максимальну окупність ваших інвестицій (ROI) через залучення платоспроможних клієнтів."
    },
    {
        icon: <DashboardIcon />,
        title: "Звітність у реальному часі",
        description: "Ви отримуєте доступ до дашборду, де бачите всі ключові показники: від витрат до вартості контракту."
    },
    {
        icon: <SavingsIcon />,
        title: "Економія бюджету до 25%",
        description: "Постійна оптимізація кампаній дозволяє нам знижувати вартість ліда та економити ваші кошти."
    }
];

const TrustBadgeCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-gray-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TrustBadgesV1: React.FC = () => {
    return (
        <section id="trust-badges" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Наш підхід: фокус на вашому фінансовому результаті</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ми орієнтуємось на конкретні бізнес-показники, а не просто 'налаштування реклами'.</p>
                </div>
                 <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {badges.map((badge, index) => (
                        <TrustBadgeCard key={index} {...badge} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TrustBadgesV1;
