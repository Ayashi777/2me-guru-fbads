import React, { useState } from 'react';
import { trackConversion } from '../utils/analytics';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const SuccessCard: React.FC = () => (
    <div className="bg-gray-800 p-8 rounded-xl border border-green-500 text-center flex flex-col items-center justify-center h-full">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2 text-white">Дякуємо! Ваш запит на аудит прийнято.</h3>
        <p className="text-gray-300">Ми зв'яжемося з вами протягом 24 годин, щоб обговорити деталі.</p>
    </div>
);

const ContactFormV5: React.FC = () => {
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
                    <h2 className="text-4xl font-extrabold mb-4">Давайте знайдемо, де ви втрачаєте гроші</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Заповніть форму, і ми безкоштовно проаналізуємо ваші минулі рекламні кампанії та покажемо точки росту. Це вас ні до чого не зобов'язує.</p>
                </div>
                <div className="max-w-2xl mx-auto">
                    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                        {formStatus === 'success' ? <SuccessCard /> : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Ваше ім'я" required name="name" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                    <input type="tel" placeholder="Номер телефону" required name="phone" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </div>
                                <div>
                                    <input type="url" placeholder="Ваш сайт або сторінка в Instagram" name="website" className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </div>
                                 <div>
                                    <textarea placeholder="Коротко опишіть ваш минулий досвід з рекламою (необов'язково)" name="message" rows={4} className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"></textarea>
                                </div>
                               
                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'loading'}
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {formStatus === 'loading' ? 'Аналізуємо...' : 'Отримати безкоштовний аудит'}
                                </button>
                                {formStatus === 'error' && <p className="text-center text-red-400">Помилка відправки. Будь ласка, спробуйте ще раз.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormV5;