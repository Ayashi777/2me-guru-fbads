import React, { useState } from 'react';

const ConsultationValue: React.FC = () => {
    const values = [
        "Аналіз вашої поточної ситуації та точок зростання",
        "Огляд стратегій ваших конкурентів",
        "Покроковий план дій на перші 30 днів",
        "Прогноз рекламного бюджету та окупності (ROMI)"
    ];
    return (
        <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 h-full">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Що ви отримаєте на консультації:</h3>
            <ul className="space-y-4">
                {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                        <svg className="w-6 h-6 text-green-400 mr-3 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-300">{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Дякуємо за вашу заявку!</h2>
          <p className="text-lg text-gray-300">Ми зв'яжемося з вами найближчим часом.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Зробіть наступний крок до стабільного потоку клієнтів</h2>
          <p className="text-lg text-gray-400">
            Залиште заявку на безкоштовну стратегічну сесію, щоб отримати індивідуальний план розвитку вашого бізнесу.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
            <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-xl border border-gray-700">
                <div className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-gray-400 mb-2">Ваше ім'я</label>
                        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" required />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-400 mb-2">Номер телефону</label>
                        <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" required />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-400 mb-2">Коротко про ваш бізнес (необов'язково)</label>
                        <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange} className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" placeholder="Наприклад: 'Займаємось ремонтом квартир в Києві'"></textarea>
                    </div>
                </div>
                <button type="submit" className="mt-6 w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30">
                    Отримати безкоштовний план
                </button>
            </form>
            <ConsultationValue />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
