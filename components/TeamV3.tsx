import React from 'react';

const teamMembers = [
  {
    name: "Максим Коваленко",
    role: "Маркетолог",
    bio: "Моя задача — зробити так, щоб реклама працювала і приносила вам гроші. Я особисто контролюю кожну гривню бюджету.",
    avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Ірина Шевченко",
    role: "Менеджер проекту",
    bio: "Моя задача — щоб ви вчасно отримували всі контакти потенційних клієнтів і були в курсі, що відбувається.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const TeamMemberCard: React.FC<typeof teamMembers[0]> = ({ name, role, bio, avatar }) => (
    <div className="bg-gray-800 p-8 rounded-xl border border-gray-700 text-center transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500">
        <img src={avatar} alt={name} className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-gray-700" />
        <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
        <p className="text-cyan-400 font-semibold mb-4">{role}</p>
        <p className="text-gray-400">{bio}</p>
    </div>
);


const TeamV3: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4">Хто буде цим займатись?</h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">Ви завжди знаєте, хто відповідає за ваш результат.</p>
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

export default TeamV3;
