import React, { useState } from 'react';
import { trackConversion } from '../utils/analytics';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const SuccessCard: React.FC = () => (
    <div className="text-center py-12">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2 text-white">Дякуємо. Ваш запит отримано.</h3>
        <p className="text-gray-300">Наш менеджер зв'яжеться з вами найближчим часом для узгодження деталей консультації.</p>
    </div>
);

const ContactFormV6: React.FC = () => {
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
        <section id="contact" className="py-20 bg-gray-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold mb-4">Обговоримо ваш проект</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Залиште заявку на приватну консультацію, і ми обговоримо, як ми можемо посилити ваш бренд та залучити клієнтів вашого рівня.</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-900 p-8 rounded-xl border border-gray-700">
                        {formStatus === 'success' ? <SuccessCard /> : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Ваше ім'я" required name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                    <input type="tel" placeholder="Номер телефону" required name="phone" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                </div>
                                <div>
                                    <input type="text" placeholder="Назва компанії / Архітектурного бюро" required name="company" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500" />
                                </div>
                                <textarea placeholder="Стисло опишіть ваш запит (необов'язково)" name="message" rows={3} className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                                
                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'loading'}
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {formStatus === 'loading' ? 'Відправка...' : 'Надіслати запит на консультацію'}
                                </button>
                                {formStatus === 'error' && <p className="text-center mt-4 text-red-400">Сталася помилка. Спробуйте ще раз.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormV6;