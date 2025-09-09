import React, { useState } from 'react';
import { trackConversion } from '../utils/analytics';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const ConsultationValue: React.FC = () => (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 h-full">
        <h3 className="text-2xl font-bold mb-6 text-white">Що ви отримаєте на стратегічній сесії:</h3>
        <ul className="space-y-4">
            <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Аналіз вашого B2B-ринку та потенційних партнерів.</span>
            </li>
            <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Карта шляху вашого корпоративного клієнта.</span>
            </li>
            <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Прогноз вартості залучення одного партнера (CPA).</span>
            </li>
             <li className="flex items-start">
                <span className="text-cyan-400 mt-1 mr-3">✓</span>
                <span className="text-gray-300">Конкретні кроки для побудови вашого B2B-пайплайну.</span>
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
        <h3 className="text-2xl font-bold mb-2 text-white">Дякуємо! Ваш запит прийнято.</h3>
        <p className="text-gray-300">Ми зв'яжемося з вами протягом 24 годин для планування стратегічної сесії.</p>
    </div>
);

const ContactFormV4: React.FC = () => {
    const [formStatus, setFormStatus] = useState<FormStatus>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setFormStatus('loading');

        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            if (Math.random() < 0.1) {
                 throw new Error("Network error, please try again.");
            }

            setFormStatus('success');
            trackConversion();
            e.currentTarget.reset();

        } catch (error) {
            setFormStatus('error');
            console.error(error);
            setTimeout(() => setFormStatus('idle'), 5000);
        }
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Готові до масштабування?</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Заповніть форму, щоб отримати безкоштовну стратегічну сесію та дізнатись, як побудувати потік B2B-клієнтів для вашого бізнесу.</p>
                </div>
                <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
                        {formStatus === 'success' ? <SuccessCard /> : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Ваше ім'я" required name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                    <input type="tel" placeholder="Номер телефону" required name="phone" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </div>
                                 <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Назва компанії" required name="company" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                    <input type="url" placeholder="Сайт (необов'язково)" name="website" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </div>
                                <div>
                                    <select defaultValue="" required name="target_audience" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 appearance-none">
                                        <option value="" disabled>Хто ваш цільовий партнер?</option>
                                        <option>Дилери / Дистриб'ютори</option>
                                        <option>Архітектори / Дизайнери</option>
                                        <option>Забудовники / Генпідрядники</option>
                                        <option>Інше</option>
                                    </select>
                                </div>
                               
                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'loading'}
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {formStatus === 'loading' ? 'Відправка...' : 'Отримати стратегію'}
                                </button>
                                {formStatus === 'error' && <p className="text-center mt-4 text-red-400">Помилка відправки. Будь ласка, спробуйте ще раз.</p>}

                                <p className="text-center text-sm text-gray-500 pt-2">
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

export default ContactFormV4;