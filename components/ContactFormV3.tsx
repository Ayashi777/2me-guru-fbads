import React, { useState } from 'react';
import { trackConversion } from '../utils/analytics';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const teamMembers = [
  {
    name: "Максим Коваленко",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop"
  },
  {
    name: "Ірина Шевченко",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
  }
];

const SuccessCard: React.FC = () => (
    <div className="bg-gray-800 p-8 rounded-xl border border-green-500 text-center flex flex-col items-center justify-center h-full">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-2xl font-bold mb-2 text-white">Дякуємо!</h3>
        <p className="text-gray-300">Ми зателефонуємо вам найближчим часом, щоб усе обговорити.</p>
    </div>
);

const ContactFormV3: React.FC = () => {
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
                    <h2 className="text-4xl font-extrabold mb-4">Готові почати?</h2>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto">Залиште номер телефону, і ми за 15 хвилин розрахуємо, скільки грошей може принести реклама саме у вашому випадку. Це безкоштовно.</p>
                </div>
                <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12 items-center bg-gray-800 p-8 rounded-xl border border-gray-700">
                     <div>
                        <h3 className="text-2xl font-bold text-center mb-6">З вами будуть говорити Максим та Ірина:</h3>
                        <div className="flex justify-center items-center space-x-6">
                            {teamMembers.map(member => (
                                <div key={member.name} className="text-center">
                                    <img src={member.avatar} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-700" />
                                    <p className="font-semibold text-white">{member.name}</p>
                                </div>
                            ))}
                        </div>
                     </div>
                     <div className="bg-gray-900 p-8 rounded-xl">
                        {formStatus === 'success' ? <SuccessCard /> : (
                            <form onSubmit={handleSubmit} className="flex flex-col h-full">
                                <div className="space-y-6 mb-6">
                                    <input type="text" placeholder="Ваше ім'я" required name="name" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                    <input type="tel" placeholder="Номер телефону" required name="phone" className="w-full bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500" />
                                </div>
                                <button 
                                    type="submit" 
                                    disabled={formStatus === 'loading'}
                                    className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:scale-100"
                                >
                                    {formStatus === 'loading' ? 'Відправка...' : 'Так, розрахуйте мій прибуток'}
                                </button>
                                {formStatus === 'error' && <p className="text-center mt-4 text-red-400">Сталася помилка. Спробуйте ще раз.</p>}
                                <p className="text-center text-xs text-gray-500 mt-6">
                                    Це вас ні до чого не зобов'язує.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactFormV3;