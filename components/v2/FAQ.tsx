import React, { useState } from 'react';
import { faqData } from '../../data/faq';

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
