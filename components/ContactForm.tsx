import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically handle form submission, e.g., send data to an API
    console.log('Form data submitted:', formData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Дякуємо за вашу заявку!</h2>
          <p className="text-lg text-gray-300">Ми зв'яжемося з вами найближчим часом.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Отримайте партнера, а не просто підрядника</h2>
          <p className="text-lg text-gray-400 mb-8">
            Набридли агенції та ненадійні фрілансери? Давайте обговоримо, як наш 12-річний досвід може принести стабільність вашому бізнесу. Залиште заявку на безкоштовну стратегічну сесію.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-gray-900 p-8 rounded-xl border border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-2">Ваше ім'я</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                required 
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-400 mb-2">Номер телефону</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                required
              />
            </div>
          </div>
           <div className="mb-6">
              <label htmlFor="message" className="block text-gray-400 mb-2">Коротко про ваш бізнес (необов'язково)</label>
              <textarea 
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-800 border border-gray-600 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition"
                placeholder="Наприклад: 'Займаємось ремонтом квартир в Києві'"
              ></textarea>
            </div>
          <button 
            type="submit" 
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30"
          >
            Отримати консультацію
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;