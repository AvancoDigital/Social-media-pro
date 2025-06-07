import React from 'react';
import ContactForm from './shared/ContactForm';
import CountdownTimer from './shared/CountdownTimer';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-secondary to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            COMECE A FATURAR COM <span className="text-primary">REDES SOCIAIS</span> HOJE MESMO!
          </h2>
          
          <p className="text-lg text-center mb-8 text-gray-300">
            Não perca mais tempo! Adquira agora o Social Media Pro e comece a transformar sua carreira.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 mb-6">
                <h3 className="text-xl font-bold mb-4">O que você vai receber:</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">1.</span>
                    <div>
                      <span className="font-semibold">E-book Social Media Pro</span>
                      <p className="text-gray-300 text-sm">Guia completo com todas as estratégias e técnicas.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">2.</span>
                    <div>
                      <span className="font-semibold">Checklist "Primeiro Cliente em 48h"</span>
                      <p className="text-gray-300 text-sm">Passo a passo para conquistar seu primeiro cliente rapidamente.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">3.</span>
                    <div>
                      <span className="font-semibold">Templates de Posts Prontos</span>
                      <p className="text-gray-300 text-sm">PDF editável com modelos para diferentes objetivos e plataformas.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <span className="text-gray-400 line-through">De R$97,90</span>
                    <div className="text-xl md:text-2xl font-bold">Por apenas 8x de R$4,74</div>
                    <div className="text-sm text-gray-300">ou R$37,92 à vista</div>
                  </div>
                  <div className="bg-primary text-white text-xs font-bold py-1 px-3 rounded-full">
                    61% OFF
                  </div>
                </div>
              </div>
              
              <CountdownTimer />
            </div>
            
            <div>
              <ContactForm 
                buttonText="COMPRAR E-BOOK POR 8x R$4,74!" 
                withHeading 
                headingText="INSCREVA-SE HOJE E GANHE 3 BÔNUS EXCLUSIVOS!" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;