import React from 'react';

const teamMembers = [
  {
    name: "Максим Коваленко",
    role: "Провідний маркетинг-стратег",
    bio: "Розробляю воронки, які приводять попередньо кваліфікованих клієнтів, економлячи час вашого відділу продажів. Фокус на скороченні циклу угоди та збільшенні середнього чеку.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ірина Шевченко",
    role: "Керівник проектів",
    bio: "Забезпечую безшовну передачу 'гарячих' лідів вашим менеджерам з усією необхідною інформацією для швидкого закриття угоди. Контролюю якість ліда на кожному етапі.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const TeamMemberCard: React.FC<typeof teamMembers[0]> = ({ name, role, bio, avatar }) => (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl hover:shadow-cyan-500/10">
        <img src={avatar} alt={name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700" />
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-cyan-400 font-semibold mb-4">{role}</p>
        <p className="text-gray-400">{bio}</p>
    </div>
);


const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Ваша персональна команда</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Познайомтеся з експертами, які будуть працювати над вашим проектом. Ми не ховаємося за менеджерами – ви завжди знаєте, хто відповідає за ваш результат.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} {...member} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;