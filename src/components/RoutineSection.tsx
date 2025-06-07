import React from 'react';

const RoutineSection: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Aprenda sobre o tema",
      description: "O e-book é estruturado em capítulos específicos e de fácil entendimento"
    },
    {
      number: 2,
      title: "Coloque o aprendizado em prática",
      description: "Exercícios práticos para aplicar no ritmo mais apropriado para você"
    },
    {
      number: 3,
      title: "Acesse recursos complementares",
      description: "Templates, checklists e materiais extras para aprofundar seu conhecimento"
    },
    {
      number: 4,
      title: "Consolide o conhecimento",
      description: "Projetos práticos para consolidar todo o aprendizado adquirido"
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Como é a <span className="text-primary">metodologia</span> do e-book
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                {step.number}
              </div>
              
              <h3 className="text-xl font-bold text-secondary mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoutineSection;