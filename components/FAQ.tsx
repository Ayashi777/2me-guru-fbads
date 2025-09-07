import React, { useState } from 'react';

const faqData = [
  {
    question: "Як швидко я побачу перші результати?",
    answer: "Зазвичай перші цільові заявки починають надходити протягом 3-5 днів після запуску рекламних кампаній. Нам потрібен цей час, щоб алгоритми соцмереж навчилися знаходити вашу аудиторію."
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
    answer: "Ми не можемо гарантувати точну кількість заявок, оскільки це залежить від багатьох факторів (сезон, ринок, ваша пропозиція). Однак, ми гарантуємо, що докладемо весь наш досвід для досягнення поставлених KPI, і ви будете отримувати прозору звітність про ефективність кожного вкладеного долара."
  },
  {
    question: "Чи потрібно мені надавати фото та відео?",
    answer: "Так, ваші реальні фото та відео з об'єктів працюють найкраще. Вони викликають довіру. Якщо у вас немає якісного контенту, ми порадимо, як його створити, або можемо допомогти з організацією зйомки за окрему плату."
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
      <p className="text-gray-400">{answer}</p>
    </div>
  </div>
);


const FAQ: React.FC = () => {
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

export default FAQ;