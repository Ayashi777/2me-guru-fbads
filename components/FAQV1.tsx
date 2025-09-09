import React, { useState } from 'react';

const faqData = [
  {
    question: "Скільки заявок я отримаю в перший місяць?",
    answer: `Кількість заявок напряму залежить від рекламного бюджету та розміру міста. Ось орієнтовні показники, на які можна спиратися:

• Мале місто (до 200 тис. населення), бюджет ~15 000 грн/міс: 30-60 лідів.
• Середнє місто (200-800 тис.), бюджет ~25 000 грн/міс: 50-120 лідів.
• Місто-мільйонник (Київ, Львів), бюджет від 40 000 грн/міс: 80-200+ лідів.

Важливо: це прогнози. Точні цифри ми зможемо надати після аналізу вашої ніші та конкурентів на безкоштовній консультації.`
  },
  {
    question: "Скільки коштують ваші послуги?",
    answer: "Вартість залежить від обсягу робіт, конкуренції у вашому регіоні та рекламного бюджету. Ми пропонуємо індивідуальні пакети після безкоштовної консультації, де визначаємо ваші цілі. Наша мета - щоб ваші інвестиції окупилися вже з першого-другого контракту."
  },
    {
    question: "Які умови контракту та виходу зі співпраці?",
    answer: "Ми працюємо на основі щомісячної оплати. Ви можете припинити або призупинити співпрацю в кінці будь-якого оплаченого місяця, попередивши нас за 7 днів. Жодних штрафів чи прихованих умов. Ми вважаємо, що єдине, що має утримувати клієнта — це результат."
  },
  {
    question: "Чи гарантуєте ви певну кількість заявок?",
    answer: "Ми не можемо гарантувати точну кількість заявок, адже вона залежить від багатьох ринкових факторів. Проте, ми фіксуємо у договорі прогнозовані KPI (кількість та вартість ліда), які є для нас орієнтиром ефективності. Ми постійно працюємо над оптимізацією, щоб досягати та перевищувати ці показники."
  },
  {
    question: "Що потрібно від мене для початку роботи?",
    answer: "На старті нам потрібні доступи до ваших рекламних кабінетів та бізнес-сторінок, а також фото/відео ваших проектів. Головне — це ваша готовність оперативно обробляти заявки, адже перші ліди почнуть надходити вже за кілька днів. Ми проведемо детальну вступну зустріч (бриф), щоб глибоко зрозуміти ваш бізнес, і далі візьмемо всю технічну роботу на себе."
  },
];

const FaqItem: React.FC<{ question: string; answer: string; isOpen: boolean; onClick: () => void }> = ({ question, answer, isOpen, onClick }) => (
  <div className="border-b border-gray-700 py-6">
    <button onClick={onClick} className="w-full flex justify-between items-center text-left">
      <h3 className="text-xl font-semibold text-white">{question}</h3>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </span>
    </button>
    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
      <p className="text-gray-400 whitespace-pre-line">{answer}</p>
    </div>
  </div>
);


const FAQV1: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Часті запитання</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Відповіді на те, що вас може цікавити перед початком роботи.</p>
        </div>
        <div className="max-w-3xl mx-auto">
            {faqData.map((faq, index) => (
                <FaqItem 
                    key={index} 
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQV1;
