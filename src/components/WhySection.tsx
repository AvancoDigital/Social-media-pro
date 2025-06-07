import React from 'react';
import { benefits, stats } from '../data';
import * as LucideIcons from 'lucide-react';

const WhySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          POR QUE <span className="text-primary">SOCIAL MEDIA PRO</span>?
        </h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-center mb-8">
            Estudos da Forbes comprovam: o mercado de Social Media cresceu 312% em 2024, mas faltam profissionais qualificados. Com o Social Media Pro, você dominará:
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit) => {
              // @ts-ignore - Dynamic import from lucide-react
              const Icon = LucideIcons[benefit.icon];
              
              return (
                <div 
                  key={benefit.id} 
                  className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      {Icon && <Icon className="h-6 w-6 text-primary" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-secondary text-white p-6 rounded-lg text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;