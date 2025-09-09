import React from 'react';

const projects = [
  {
    title: "Фліпінг 2-кімнатної квартири, ЖК 'Комфорт Таун'",
    beforeImage: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=600&auto=format&fit=crop&grayscale=1",
    afterImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=600&auto=format&fit=crop",
    stats: {
      budget: "450 000 грн",
      timeline: "45 днів",
      profit: "+850 000 грн"
    }
  },
  {
    title: "Підготовка будинку до продажу, Козин",
    beforeImage: "https://images.unsplash.com/photo-1588854337236-6889d631f385?q=80&w=600&auto=format&fit=crop&grayscale=1",
    afterImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
    stats: {
      budget: "800 000 грн",
      timeline: "70 днів",
      profit: "+2.5 млн грн"
    }
  }
];

const BeforeAfterCard: React.FC<typeof projects[0]> = ({ title, beforeImage, afterImage, stats }) => (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
        <h3 className="text-2xl font-bold mb-4 text-center">{title}</h3>
        <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
                <img src={beforeImage} alt="До ремонту" className="w-full h-64 object-cover rounded-lg" />
                <p className="text-center mt-2 text-gray-400 font-semibold">ДО</p>
            </div>
            <div>
                <img src={afterImage} alt="Після ремонту" className="w-full h-64 object-cover rounded-lg" />
                <p className="text-center mt-2 text-cyan-400 font-semibold">ПІСЛЯ</p>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4 text-center bg-gray-900/50 p-4 rounded-lg">
            <div>
                <p className="text-sm text-gray-400">Бюджет</p>
                <p className="text-xl font-bold text-white">{stats.budget}</p>
            </div>
            <div>
                <p className="text-sm text-gray-400">Терміни</p>
                <p className="text-xl font-bold text-white">{stats.timeline}</p>
            </div>
            <div>
                <p className="text-sm text-gray-400">Прибуток інвестора</p>
                <p className="text-xl font-bold text-green-400">{stats.profit}</p>
            </div>
        </div>
    </div>
);

const BeforeAfterV7: React.FC = () => {
  return (
    <section id="before-after" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Трансформації, що приносять прибуток</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Подивіться, як ми перетворюємо втомлені об'єкти на високоліквідні активи.</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
                <BeforeAfterCard key={index} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterV7;