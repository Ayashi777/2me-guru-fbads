import React, { useState, useEffect, useRef } from 'react';

const caseStudiesData = [
  {
    title: "Компанія 'ArtBuild', ремонт квартир 'під ключ'",
    clientInfo: { website: "artbuild-remont.com.ua" },
    challenge: "Нерегулярний потік клієнтів, залежність від 'сарафанного радіо'. Висока частка нецільових звернень.",
    solution: "Запустили таргетовану рекламу в Instagram та Facebook, орієнтовану на аудиторію, що цікавиться покупкою новобудов та дизайном інтер'єру. Впровадили кваліфікаційні форми.",
    imageUrl: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "x5", label: "Окупність (ROMI)" },
      { value: "250 000 грн", label: "Середній чек" },
      { value: "25 000 грн", label: "Вартість угоди (CAC)" },
      { value: "12 днів", label: "Цикл угоди" }
    ],
    ltv: {
      description: "За 18 місяців співпраці клієнт замовив ще 2 проекти, довівши загальний дохід до 1.2 млн грн. Це доводить, що ми приводимо лояльних клієнтів."
    }
  },
  {
    title: "Котеджне містечко 'Green Hills'",
    clientInfo: { website: "greenhills.kyiv.ua" },
    challenge: "Висока вартість залучення клієнта через Google Ads, низька якість лідів та довгий цикл прийняття рішення.",
    solution: "Створили воронку продажів через контент-маркетинг у Facebook, 'прогріваючи' аудиторію корисними статтями та відео про етапи будівництва.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "x8", label: "Окупність (ROMI)" },
      { value: "2 500 000 грн", label: "Середній чек" },
      { value: "150 000 грн", label: "Вартість угоди (CAC)" },
      { value: "45 днів", label: "Цикл угоди" }
    ],
    ltv: {
      description: "Клієнт порекомендував нас своєму партнеру, що призвело до ще одного контракту на 3 млн грн, подвоївши цінність початкового залучення."
    }
  },
  {
    title: "Виробник плитки 'PlitStone'",
    clientInfo: { website: "plitstone.com.ua" },
    challenge: "Сезонний попит, низька впізнаваність бренду за межами регіону, велика кількість дрібних, нерентабельних замовлень.",
    solution: "Розробили та запустили відео-кампанію в TikTok та YouTube Shorts, яка демонструвала якість та процес укладання плитки. Це підвищило довіру та залучило великих дилерів.",
    imageUrl: "https://images.unsplash.com/photo-1618221118493-71958c35a64a?q=80&w=800&auto=format&fit=crop",
    metrics: [
        { value: "x6", label: "Окупність (ROMI)" },
        { value: "450 000 грн", label: "Середній чек" },
        { value: "40 000 грн", label: "Вартість угоди (CAC)" },
        { value: "21 день", label: "Цикл угоди" }
    ],
    ltv: {
        description: "Після успішного сезону клієнт підписав річний контракт на маркетинговий супровід, ставши постійним партнером."
    }
  },
  {
    title: "Виробник тротуарної плитки 'TerraForma'",
    clientInfo: { website: "terra-forma.ua" },
    challenge: "Висока конкуренція, низька маржинальність при роботі з роздрібними клієнтами. Необхідно було вийти на B2B-сегмент: ландшафтних дизайнерів та забудовників.",
    solution: "Створили візуально привабливу кампанію в Instagram та Pinterest, націлену на архітекторів та дизайнерів. Розробили B2B-пропозицію та лід-форми для отримання каталогів.",
    imageUrl: "https://images.unsplash.com/photo-1590399435343-16a7db534127?q=80&w=800&auto=format&fit=crop",
    metrics: [
        { value: "x7", label: "Окупність (ROMI)" },
        { value: "350 000 грн", label: "Середній чек" },
        { value: "50 000 грн", label: "Вартість угоди (CAC)" },
        { value: "25 днів", label: "Цикл угоди" }
    ],
    ltv: {
        description: "Ключовий ландшафтний дизайнер став постійним клієнтом, розмістивши замовлення для 5 нових проектів протягом року."
    }
  }
];

type CaseStudy = typeof caseStudiesData[0];

const CaseStudyModal: React.FC<{ caseStudy: CaseStudy; onClose: () => void }> = ({ caseStudy, onClose }) => {
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleEsc);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in-up animation-delay-0" onClick={onClose}>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="relative">
                    <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-64 object-cover" />
                    <button onClick={onClose} className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 text-white hover:bg-gray-900 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-8">
                    <h3 className="text-3xl font-bold text-center text-cyan-400">{caseStudy.title}</h3>
                    <p className="text-center text-gray-500 mb-6 text-sm flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                        {caseStudy.clientInfo.website}
                    </p>

                    <div className="space-y-4 mb-8">
                        <p className="text-gray-300"><span className="font-semibold text-gray-100">🎯 Задача:</span> {caseStudy.challenge}</p>
                        <p className="text-gray-300"><span className="font-semibold text-gray-100">💡 Рішення:</span> {caseStudy.solution}</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-gray-700 pt-6 mb-8">
                        {caseStudy.metrics.map(metric => (
                            <div key={metric.label}>
                                <p className="text-3xl font-extrabold text-white">{metric.value}</p>
                                <p className="text-sm text-gray-400">{metric.label}</p>
                            </div>
                        ))}
                    </div>

                    <div className="border-t border-gray-700 pt-6 mb-8">
                        <h4 className="text-xl font-bold text-center mb-4 text-gray-200 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                            </svg>
                            Довгострокова цінність (LTV)
                        </h4>
                        <div className="bg-gray-900/50 p-4 rounded-lg text-center">
                            <p className="text-gray-300">{caseStudy.ltv.description}</p>
                        </div>
                    </div>

                    <div className="text-center">
                        <a href="#contact" onClick={onClose} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                            Обговорити мій проект
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy; onOpen: () => void }> = ({ caseStudy, onOpen }) => (
    <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 group cursor-pointer h-full" onClick={onOpen}>
        <div className="relative">
            <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-black bg-opacity-50 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center p-4">
                <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                    <span className="text-cyan-400 font-semibold border border-cyan-400 rounded-full px-4 py-1 text-sm">
                        Дивитись детальніше
                    </span>
                </div>
            </div>
        </div>
    </div>
);

const CaseStudies: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.offsetWidth * 0.9;
        current.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Наші кейси: від лідів до реальних контрактів</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Ми не обіцяємо, ми робимо. Подивіться на результати, яких досягли наші клієнти мовою бізнесу.</p>
          <p className="text-sm text-gray-500 max-w-2xl mx-auto mt-4">
            *Результати залежать від багатьох факторів, включаючи ринок, сезонність та вашу унікальну пропозицію. Ці кейси демонструють потенціал нашого підходу при тісній співпраці.
          </p>
        </div>
        <div className="relative">
            <div ref={scrollContainerRef} className="flex overflow-x-auto space-x-8 pb-4 -mx-6 px-6 scrollbar-hide">
              {caseStudiesData.map((study, index) => (
                 <div key={index} className="flex-shrink-0 w-11/12 sm:w-1/2 md:w-1/3">
                    <CaseStudyCard caseStudy={study} onOpen={() => setSelectedCase(study)} />
                 </div>
              ))}
            </div>
             <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 w-[calc(100%+2rem)] -left-4 justify-between">
                <button onClick={() => scroll('left')} className="bg-gray-800/50 hover:bg-gray-800 rounded-full p-3 text-white transition-colors duration-300 shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                   </svg>
                </button>
                <button onClick={() => scroll('right')} className="bg-gray-800/50 hover:bg-gray-800 rounded-full p-3 text-white transition-colors duration-300 shadow-lg">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                   </svg>
                </button>
            </div>
        </div>
      </div>
      {selectedCase && <CaseStudyModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />}
    </section>
  );
};

export default CaseStudies;