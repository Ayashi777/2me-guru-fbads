import React, { useState } from 'react';

const faqData = [
  {
    question: "Скільки звернень я отримаю в перший місяць?",
    answer: `Кількість звернень залежить від рекламного бюджету та міста. Ось приблизні цифри:

• Бюджет ~15 000 грн/міс: 30-60 звернень.
• Бюджет ~25 000 грн/міс: 50-120 звернень.
• Бюджет від 40 000 грн/міс: 80-200+ звернень.

Це прогнози. Точні цифри ми зможемо назвати після аналізу вашого бізнесу на безкоштовній консультації.`
  },
  {
    question: "Скільки коштують ваші послуги?",
    answer: "Наша мета — щоб ваші вкладення в рекламу окупилися вже з першого-другого контракту. Вартість наших послуг залежить від обсягу робіт, але ми завжди пропонуємо рішення, які є фінансово виправданими для вашого бізнесу."
  },
    {
    question: "Чи потрібно підписувати довгостроковий контракт?",
    answer: "Ні. Ми працюємо на основі щомісячної оплати. Ви можете припинити співпрацю в кінці будь-якого місяця, попередивши нас за 7 днів. Ми впевнені, що найкращий контракт — це результат, який ми даємо."
  },
  {
    question: "Чи є гарантії?",
    answer: "Ми не можемо гарантувати точну кількість звернень, бо це залежить від ринку. Але ми гарантуємо, що будемо працювати над досягненням чітких цілей, які ми разом узгодимо перед початком роботи (наприклад, 'отримати 50 звернень по ціні не дорожче 500 грн')."
  },
  {
    question: "Що потрібно від мене для початку роботи?",
    answer: "Нам потрібні доступи до ваших бізнес-сторінок у соцмережах, а також фото та відео ваших робіт. Головне — ваша готовність швидко обробляти звернення від клієнтів, адже перші з них почнуть надходити вже за кілька днів."
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


const FAQV2: React.FC = () => {
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

export default FAQV2;
