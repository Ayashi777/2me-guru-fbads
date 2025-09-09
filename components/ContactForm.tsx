import React, { useState } from 'react';
import { trackConversion } from '../utils/analytics';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ConsultationValue: React.FC = () => (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full">
        <h3 className="text-2xl font-bold mb-6 text-white">Що ви отримаєте на консультації:</h3>
        <ul className="space-y-4">
            <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Аналіз вашої поточної ситуації та конкурентів.</span>
            </li>
            <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Покроковий план залучення клієнтів саме для вашого бізнесу.</span>
            </li>
            <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Прогноз рекламного бюджету та потенційного ROI.</span>
            </li>
             <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Відповіді на всі ваші запитання. Безкоштовно та без зобов'язань.</span>
            </li>
        </ul>
         <div className="mt-8 pt-6 border-t border-gray-700">
            <h4 className="text-lg font-semibold text-white mb-3">Або зв'яжіться з нами напряму:</h4>
             <a href="tel:+380971234567" className="text-gray-300 hover:text-cyan-400 transition-colors block mb-2">
                +380 (97) 123-45-67
            </a>
            <a href="mailto:hello@2meguru.com.ua" className="text-gray-300 hover:text-cyan-400 transition-colors block">
                hello@2meguru.com.ua
            </a>
        </div>
    </div>
);

const SuccessCard: React.FC = () => (
    <div className="bg-gray-800 p-8 rounded-xl border border-green-500 text-center flex flex-col items-center justify-center h-full">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2 text-white">Дякуємо за вашу заявку!</h3>
        <p className="text-gray-300">Ми зв'яжемося з вами протягом 24 годин, щоб обговорити деталі вашого проекту.</p>
    </div>
);

const ContactForm: React.FC = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('loading');

        // Simulate API call
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Simulate a potential error
            if (Math.random() < 0.1) { // 10% chance to fail
                 throw new Error("Network error, please try again.");
            }

            setFormStatus('success');
            trackConversion();
            e.currentTarget.reset();

        } catch (error) {
            setFormStatus('error');
            console.error(error);
             // Revert to idle after a few seconds to allow retry
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Дізнайтесь, скільки клієнтів можна залучити у ваш бізнес</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Заповніть форму, і ми безкоштовно підготуємо для вас прогноз по кількості лідів та вартості їх залучення.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
                        {formStatus === 'success' ? <SuccessCard /> : (
                            <form onSubmit={handleSubmit} className="flex flex-col h-full">
                                <div className="grid md:grid-cols-2 gap-6 mb-6">
                                    <input type="text" placeholder="Ваше ім'я" required name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                    <input type="tel" placeholder="Номер телефону" required name="phone" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </div>
                                <div className="mb-6">
                                    <select defaultValue="" required name="service" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none">
                                        <option value="" disabled>Яка послуга вас цікавить?</option>
                                        <option>Реклама в Instagram/Facebook</option>
                                        <option>Реклама в TikTok</option>
                                        <option>Комплексний маркетинг</option>
                                    </select>
                                </div>
                                <textarea placeholder="Коротко опишіть ваш запит (необов'язково)" name="message" rows={4} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 mb-6 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow"></textarea>
                                
                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'loading'}
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {formStatus === 'loading' ? 'Розрахунок...' : 'Отримати прогноз по лідах'}
                                </button>
                                {formStatus === 'error' && <p className="text-center mt-4 text-red-400">Помилка відправки. Будь ласка, спробуйте ще раз.</p>}

                                <p className="text-center text-sm text-gray-500 mt-6">
                                    Натискаючи кнопку, ви погоджуєтесь з нашою політикою конфіденційності.
                                </p>
                            </form>
                        )}
                    </div>
                    <ConsultationValue />
                </div>
            </div>
        </section>
    );
};

export default ContactForm;