import React from 'react';

const TargetIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3.25" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12h-4m-4-4V4m0 16v-4m-4-4H4" />
    </svg>
);

const CycleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l-3-3m3 3l-3 3m-12-3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l3-3" />
    </svg>
);

const LtvIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
    </svg>
);

const AuthorityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
);


const badges = [
    {
        icon: <TargetIcon />,
        title: "Таргетинг на ЛПР",
        description: "Ми знаходимо не просто компанії, а конкретних людей, які приймають рішення про закупівлю та партнерство."
    },
    {
        icon: <CycleIcon />,
        title: "Розуміння довгого циклу угоди",
        description: "Ми будуємо воронки, які 'прогрівають' B2B-клієнтів місяцями, щоб вони прийшли до вас вже готовими до співпраці."
    },
    {
        icon: <LtvIcon />,
        title: "Фокус на LTV партнера",
        description: "Наша мета — не одна угода, а побудова довгострокових відносин, які принесуть вам прибуток на роки вперед."
    },
    {
        icon: <AuthorityIcon />,
        title: "Побудова авторитету бренду",
        description: "Через контент-маркетинг ми робимо вашу компанію 'вибором №1' для потенційних партнерів у вашій ніші."
    }
];

const TrustBadgeCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-gray-800 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/10">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const TrustBadgesV4: React.FC = () => {
    return (
        <section id="trust-badges" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Наш підхід: Стратегічне партнерство, а не просто ліди</h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ми занурюємось у ваш бізнес, щоб залучати партнерів, а не випадкових клієнтів.</p>
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

export default TrustBadgesV4;