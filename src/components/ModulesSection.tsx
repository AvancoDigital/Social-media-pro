import React from 'react';
import { modules } from '../data';
import * as LucideIcons from 'lucide-react';
import Button from './shared/Button';
import { KIWIFY_LINK } from '../data';

const ModulesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O QUE VOCÊ VAI <span className="text-primary">APRENDER</span>
        </h2>
        
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Conteúdo completo e 100% prático com estratégias que funcionam e podem ser aplicadas imediatamente.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {modules.map((module, index) => {
            // @ts-ignore - Dynamic import from lucide-react
            const Icon = LucideIcons[module.icon];
            
            return (
              <div 
                key={module.id} 
                className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300 flex"
              >
                <div className="mr-4 mt-1">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center">
                    {index < 3 ? (index + 1) : <Icon className="h-5 w-5" />}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-bold text-xl mb-2">{module.title}</h3>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="max-w-md mx-auto">
          <Button href={KIWIFY_LINK} variant="primary" size="lg" fullWidth withArrow>
            QUERO APRENDER TUDO ISSO POR 8x R$4,74
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;