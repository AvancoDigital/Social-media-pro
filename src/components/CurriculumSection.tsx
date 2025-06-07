import React from 'react';
import { User, Target, MessageSquare, BarChart2, PenTool, TrendingUp, LineChart, Award } from 'lucide-react';

const CurriculumSection: React.FC = () => {
  const skills = [
    { icon: Target, text: 'Definição de público-alvo' },
    { icon: MessageSquare, text: 'Identidade digital de marcas' },
    { icon: BarChart2, text: 'Planos de comunicação' },
    { icon: PenTool, text: 'Técnicas de copywriting' },
    { icon: TrendingUp, text: 'Impulsionamento de Perfis' },
    { icon: LineChart, text: 'Inbound Marketing' },
    { icon: BarChart2, text: 'Estratégias de Marketing de influência' },
    { icon: LineChart, text: 'Cálculo ROI e análise de métricas' }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-pink-400 to-blue-400 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seu currículo no futuro
            </h2>
          </div>
          
          <div className="bg-white rounded-lg p-8 shadow-xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-gray-900 font-bold">Seu nome</h3>
                <p className="text-gray-600">Especialista em Social Media Marketing</p>
              </div>
              <div className="ml-auto text-right">
                <div className="text-gray-900 font-bold">R$ 7.119/mês*</div>
                <div className="text-sm text-gray-500">Ref: Glassdoor para São Paulo</div>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-gray-900 font-bold mb-4">Habilidades</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-700">
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-500">
                      <skill.icon size={16} />
                    </div>
                    <span>{skill.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-gray-900 font-bold mb-4">Certificado pela AVANÇO</h4>
              <div className="bg-gray-100 rounded-lg p-4 flex items-center gap-4">
                <Award className="text-primary h-12 w-12" />
                <div>
                  <div className="text-gray-900 font-bold">Certificado Profissional</div>
                  <div className="text-gray-600">Social Media Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;