import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const segments = [
    { title: "Для Власників Бізнесу", description: "Фокус на прибутку, окупності інвестицій та зрозумілих бізнес-показниках.", path: "/business-growth", emoji: "📈" },
    { title: "Для Маркетологів", description: "Глибока аналітика, KPI, CPL, ROMI та інструменти для досягнення цілей.", path: "/marketing-pro", emoji: "🎯" },
    { title: "Для Прорабів та Бригад", description: "Простий та швидкий старт. Отримайте перші контракти без складних налаштувань.", path: "/quick-start", emoji: "👷" },
    { title: "Для B2B-Партнерів", description: "Знаходимо дилерів, архітекторів та забудовників для вашого бізнесу.", path: "/b2b-partners", emoji: "🤝" },
    { title: "Якщо ви мали поганий досвід", description: "Покажемо прозорий процес з гарантією результату для тих, хто втомився від 'агенцій'.", path: "/our-promise", emoji: "👀" },
    { title: "Для Luxury-сегменту", description: "Залучаємо клієнтів, які цінують якість, а не шукають найнижчу ціну.", path: "/premium-clients", emoji: "💎" },
    { title: "Для Інвесторів", description: "Надійний підрядник для 'фліпінгу' та підготовки об'єктів. Швидкість та якість.", path: "/investment-roi", emoji: "💰" },
];

const SegmentCard: React.FC<typeof segments[0]> = ({ title, description, path, emoji }) => (
    <a href={path} className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-cyan-500 hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col text-left h-full">
        <div className="text-4xl mb-4">{emoji}</div>
        <h3 className="text-2xl font-bold mb-3 text-white">{title}</h3>
        <p className="text-gray-400 flex-grow">{description}</p>
        <div className="mt-6">
            <span className="font-semibold text-cyan-400">Дізнатись більше →</span>
        </div>
    </a>
);


const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-900 text-white font-sans">
            <Header />
            <main>
                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
                            Результативний маркетинг для <span className="text-cyan-400">будівельного бізнесу</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
                           Ми розуміємо вашу нішу. Оберіть, хто ви, щоб побачити пропозицію, створену саме для вас.
                        </p>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto animate-fade-in-up animation-delay-400">
                            {segments.map(segment => <SegmentCard key={segment.path} {...segment} />)}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default HomePage;
