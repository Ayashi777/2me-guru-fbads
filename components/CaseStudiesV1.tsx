import React, { useState, useEffect, useRef } from 'react';

const caseStudiesData = [
  {
    title: "Компанія 'ArtBuild', ремонт квартир 'під ключ'",
    clientInfo: { website: "artbuild-remont.com.ua" },
    clientDescription: "Київська студія ремонту квартир преміум-класу.",
    timeframe: "Результат за 2 місяці",
    challenge: "Залежність від 'сарафанного радіо'. 80% звернень — нецільові запити 'просто запитати ціну'.",
    solution: "Запустили таргетовану рекламу в Instagram/Facebook на аудиторію з інтересами до новобудов та дизайну. Впровадили квіз-форму для кваліфікації лідів.",
    imageUrl: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "x5", label: "Окупність (ROMI)" },
      { value: "48 000 грн", label: "Бюджет/міс" },
      { value: "164", label: "Ліди" },
      { value: "292 грн", label: "Вартість ліда (CPL)" }
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=400&auto=format&fit=crop",
        caption: "Приклад креативу в Instagram"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
        caption: "Дашборд з аналітикою"
      }
    ],
    testimonial: {
      quote: "Ми буквально 'сиділи' на сарафанному радіо, і це було жахливо непередбачувано. З 2Me Guru ми нарешті отримали систему. Тепер я можу спокійно планувати завантаженість бригад на 2-3 місяці вперед, бо знаю, що заявки будуть.",
      author: "Віктор, власник компанії 'ArtBuild'"
    },
    ltv: {
      description: "За 18 місяців співпраці клієнт замовив ще 2 проекти, довівши загальний дохід до 1.2 млн грн. Це доводить, що ми приводимо лояльних клієнтів."
    }
  },
  {
    title: "Котеджне містечко 'Green Hills'",
    clientInfo: { website: "greenhills.kyiv.ua" },
    clientDescription: "Елітне котеджне містечко під Києвом.",
    timeframe: "Результат за 3 місяці",
    challenge: "Висока вартість ліда з Google Ads (>2000 грн). Низька конверсія через 'холодну' аудиторію.",
    solution: "Створили контентну воронку у Facebook: 'прогрівали' аудиторію корисними статтями про етапи будівництва перед тим, як пропонувати консультацію.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
    metrics: [
      { value: "x8", label: "Окупність (ROMI)" },
      { value: "90 000 грн", label: "Бюджет/міс" },
      { value: "125", label: "Лідів" },
      { label: "Вартість ліда (CPL)", before: ">2000 грн", after: "720 грн" }
    ],
    visuals: [
       {
        url: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=400&auto=format&fit=crop",
        caption: "Реклама для Facebook"
      },
      {
        url: "https://images.unsplash.com/photo-1634733302999-a03a4b009b84?q=80&w=400&auto=format&fit=crop",
        caption: "Скріншот CRM-системи"
      }
    ],
    testimonial: {
        quote: "Працював з агенціями, де тебе передають від менеджера до менеджера. 2Me Guru — це інший підхід. Прямий контакт, глибоке розуміння нашого складного продукту, і головне — вони думають про рентабельність, а не про 'освоєння бюджету'.",
        author: "Андрій, керівник проекту 'Green Hills'"
    },
    ltv: {
      description: "Клієнт порекомендував нас своєму партнеру, що призвело до ще одного контракту на 3 млн грн, подвоївши цінність початкового залучення."
    }
  },
  {
    title: "Виробник плитки 'PlitStone'",
    clientInfo: { website: "plitstone.com.ua" },
    clientDescription: "Національний виробник керамічної плитки.",
    timeframe: "Результат за 4 місяці",
    challenge: "Сезонний попит та велика кількість дрібних, нерентабельних замовлень. Низька впізнаваність бренду.",
    solution: "Запустили відео-кампанію в TikTok та YouTube Shorts, яка демонструвала якість та процес укладання плитки. Це підвищило довіру та залучило великих дилерів.",
    imageUrl: "https://images.unsplash.com/photo-1618221118493-71958c35a64a?q=80&w=800&auto=format&fit=crop",
    metrics: [
        { value: "x6", label: "Окупність (ROMI)" },
        { value: "55 000 грн", label: "Бюджет/міс" },
        { value: "180", label: "Лідів (B2B)" },
        { value: "305 грн", label: "Вартість ліда (CPL)" }
    ],
    visuals: [
      {
        url: "https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=400&auto=format&fit=crop",
        caption: "Приклад відео-креативу для TikTok"
      },
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop",
        caption: "Аналітика рекламної кампанії"
      }
    ],
    testimonial: {
        quote: "Я втомився від дзвінків 'а скільки коштує квадратний метр?'. Хлопці налаштували рекламу так, що тепер до нас звертаються великі дилери, які вже бачили якість продукції. Це зовсім інший рівень розмови та угод.",
        author: "Олег, комерційний директор 'PlitStone'"
    },
    ltv: {
        description: "Після успішного сезону клієнт підписав річний контракт на маркетинговий супровід, ставши постійним партнером."
    }
  },
];

type CaseStudy = typeof caseStudiesData[0];
type Visual = { url: string; caption: string };

const Lightbox: React.FC<{
    visuals: Visual[];
    activeIndex: number;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}> = ({ visuals, activeIndex, onClose, onNext, onPrev }) => {
    const currentVisual = visuals[activeIndex];
    const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[60] animate-fade-in-up" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
        >
            <button 
                onClick={onClose} 
                className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 rounded-full p-2 text-white transition-colors z-20"
                aria-label="Close gallery"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            <button 
                onClick={(e) => { stopPropagation(e); onPrev(); }} 
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors z-10"
                aria-label="Previous image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <div className="relative w-full max-w-5xl h-full flex items-center justify-center p-4 md:p-8" onClick={stopPropagation}>
                <figure className="text-center flex flex-col items-center justify-center">
                    <img 
                        src={currentVisual.url.replace('w=400', 'w=1200')}
                        alt={currentVisual.caption} 
                        className="max-h-[80vh] max-w-[90vw] object-contain rounded-lg shadow-2xl" 
                    />
                    <figcaption className="text-gray-300 mt-4 text-center px-4">{currentVisual.caption}</figcaption>
                </figure>
            </div>
            
            <button 
                onClick={(e) => { stopPropagation(e); onNext(); }} 
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-full text-white transition-colors z-10"
                aria-label="Next image"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    );
};

const CaseStudyModal: React.FC<{ caseStudy: CaseStudy; onClose: () => void }> = ({ caseStudy, onClose }) => {
    const [activeVisualIndex, setActiveVisualIndex] = useState<number | null>(null);

    const openLightbox = (index: number) => setActiveVisualIndex(index);
    const closeLightbox = () => setActiveVisualIndex(null);

    const nextVisual = () => {
        if (caseStudy.visuals && activeVisualIndex !== null) {
            setActiveVisualIndex((prevIndex) => (prevIndex! + 1) % caseStudy.visuals.length);
        }
    };

    const prevVisual = () => {
        if (caseStudy.visuals && activeVisualIndex !== null) {
            setActiveVisualIndex((prevIndex) => (prevIndex! - 1 + caseStudy.visuals.length) % caseStudy.visuals.length);
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (activeVisualIndex !== null) {
                if (event.key === 'Escape') closeLightbox();
                if (event.key === 'ArrowRight') nextVisual();
                if (event.key === 'ArrowLeft') prevVisual();
            } else {
                if (event.key === 'Escape') onClose();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose, activeVisualIndex]);
    
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 animate-fade-in-up" onClick={onClose}>
                <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 max-w-4xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide" onClick={(e) => e.stopPropagation()}>
                    <div className="relative">
                        <img src={caseStudy.imageUrl} alt={caseStudy.title} className="w-full h-64 object-cover" />
                        <button onClick={onClose} className="absolute top-4 right-4 bg-gray-900/50 rounded-full p-2 text-white hover:bg-gray-900 transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div className="p-8 space-y-8">
                        <div className="text-center">
                          <h3 className="text-3xl font-bold text-cyan-400">{caseStudy.title}</h3>
                          <p className="text-gray-400 mt-2 max-w-xl mx-auto">{caseStudy.clientDescription}</p>
                          <p className="text-center text-gray-500 mt-2 text-sm flex items-center justify-center">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                              {caseStudy.clientInfo.website}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 text-left">
                            <div className="bg-gray-900/50 p-6 rounded-lg">
                               <h4 className="font-semibold text-gray-100 text-lg mb-2">🎯 Задача:</h4>
                               <p className="text-gray-300">{caseStudy.challenge}</p>
                            </div>
                            <div className="bg-gray-900/50 p-6 rounded-lg">
                               <h4 className="font-semibold text-gray-100 text-lg mb-2">💡 Рішення:</h4>
                               <p className="text-gray-300">{caseStudy.solution}</p>
                            </div>
                        </div>
                        
                        <div>
                          <h4 className="text-xl font-bold text-center mb-4 text-gray-200">Ключові показники <span className="text-base font-normal text-gray-400">({caseStudy.timeframe})</span></h4>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-b border-gray-700 py-6">
                              {caseStudy.metrics.map(metric => {
                                  if ('before' in metric && 'after' in metric && typeof metric.before === 'string' && typeof metric.after === 'string') {
                                    return (
                                        <div key={metric.label}>
                                            <div className="flex items-center justify-center gap-2">
                                                <span className="text-xl text-gray-500 line-through">{metric.before}</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                                <span className="text-3xl font-extrabold text-green-400">{metric.after}</span>
                                            </div>
                                            <p className="text-sm text-gray-400 mt-1 text-center">{metric.label}</p>
                                        </div>
                                    );
                                  }
                                  if ('value' in metric && typeof metric.value === 'string') {
                                    return (
                                      <div key={metric.label}>
                                          <p className="text-3xl font-extrabold text-white">{metric.value}</p>
                                          <p className="text-sm text-gray-400">{metric.label}</p>
                                      </div>
                                    );
                                  }
                                  return null;
                              })}
                          </div>
                        </div>
                        
                        {caseStudy.visuals && caseStudy.visuals.length > 0 && (
                          <div className="pt-2">
                              <h4 className="text-xl font-bold text-center mb-2 text-gray-200">Як це виглядало в реальності</h4>
                              <p className="text-center text-gray-400 mb-6 max-w-lg mx-auto">Ось приклади рекламних креативів та звітів, які допомогли досягти цих результатів.</p>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                  {caseStudy.visuals.map((visual, index) => (
                                      <div key={index} className="bg-gray-900/50 p-2 rounded-lg text-center group cursor-pointer" onClick={() => openLightbox(index)}>
                                          <div className="relative overflow-hidden rounded-md">
                                              <img src={visual.url} alt={visual.caption} className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"/>
                                              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                  </svg>
                                              </div>
                                          </div>
                                          <p className="text-sm text-gray-400 pt-2">{visual.caption}</p>
                                      </div>
                                  ))}
                              </div>
                          </div>
                        )}

                        {caseStudy.testimonial && (
                          <div className="border-t border-gray-700 pt-8">
                            <h4 className="text-xl font-bold text-center mb-4 text-gray-200">Відгук клієнта</h4>
                              <div className="bg-gray-900/50 p-6 rounded-lg relative">
                                    <svg className="absolute top-4 left-4 h-8 w-8 text-gray-600/70" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true"><path d="M9.33 8.21C9.33 5.48 11.37 2 15.33 2c3.5 0 6.13 2.14 6.13 6.02 0 3.3-2.13 6.02-5.13 6.02-1.07 0-2.14-.36-3.07-1.07l-2.86 2.5c.9 1.07 1.6 2.14 1.6 3.21 0 2.74-2.03 6.02-6 6.02-3.86 0-6.33-2-6.33-5.87 0-4.23 2.86-7.88 7.33-9.52zM22.33 8.21C22.33 5.48 24.37 2 28.33 2c3.5 0 6.13 2.14 6.13 6.02 0 3.3-2.13 6.02-5.13 6.02-1.07 0-2.14-.36-3.07-1.07l-2.86 2.5c.9 1.07 1.6 2.14 1.6 3.21 0 2.74-2.03 6.02-6 6.02-3.86 0-6.33-2-6.33-5.87 0-4.23 2.86-7.88 7.33-9.52z"></path></svg>
                                    <blockquote className="text-gray-300 text-center italic pl-12 pr-4 py-2">
                                        "{caseStudy.testimonial.quote}"
                                    </blockquote>
                                    <cite className="block text-right mt-4 text-gray-400 not-italic">— {caseStudy.testimonial.author}</cite>
                                </div>
                          </div>
                        )}

                        <div className="border-t border-gray-700 pt-6">
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

                        <div className="text-center pt-4">
                            <a href="#contact" onClick={onClose} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                                Дізнатися, скільки лідів можна отримати у моїй ніші
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {activeVisualIndex !== null && caseStudy.visuals && (
                <Lightbox 
                    visuals={caseStudy.visuals}
                    activeIndex={activeVisualIndex}
                    onClose={closeLightbox}
                    onNext={nextVisual}
                    onPrev={prevVisual}
                />
            )}
        </>
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

const CaseStudiesV1: React.FC = () => {
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
        <div className="text-center mt-16">
            <h3 className="text-2xl font-bold mb-4">Хочете такі ж результати?</h3>
            <p className="text-gray-400 max-w-xl mx-auto mb-6">Замовте безкоштовний міні-аудит вашої поточної рекламної стратегії та дізнайтесь точки росту для вашого бізнесу.</p>
            <a href="#contact" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 inline-block">
                Отримати міні-аудит рекламних акаунтів
            </a>
        </div>
      </div>
      {selectedCase && <CaseStudyModal caseStudy={selectedCase} onClose={() => setSelectedCase(null)} />}
    </section>
  );
};

export default CaseStudiesV1;
