import React from 'react';
import { audience } from '../data';
import * as LucideIcons from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          PARA QUEM É ESTE <span className="text-primary">E-BOOK</span>?
        </h2>
        
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          O Social Media Pro foi desenvolvido para ajudar pessoas de diferentes perfis a dominarem as redes sociais e monetizarem seu conhecimento.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {audience.map((item) => {
            // @ts-ignore - Dynamic import from lucide-react
            const Icon = LucideIcons[item.icon];
            
            return (
              <div 
                key={item.id} 
                className="bg-gray-100 p-8 rounded-lg text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
              >
                <div className="bg-primary text-white p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  {Icon && <Icon className="h-8 w-8" />}
                </div>
                
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                
                <p className="text-gray-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;