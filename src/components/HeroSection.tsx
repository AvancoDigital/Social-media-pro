import React from 'react';
import ContactForm from './shared/ContactForm';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-secondary text-white" id="ebook">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              TORNE-SE UM <span className="text-primary">SOCIAL MEDIA PRO</span> E GANHE <span className="text-primary">R$5.000+/MÊS</span> DOMINANDO AS REDES SOCIAIS!
            </h1>
            
            <p className="text-lg md:text-xl mb-6 text-gray-300">
              O e-book 100% prático que revela as estratégias usadas por profissionais TOP para criar campanhas virais, atrair clientes e faturar alto em 2024 – por apenas <span className="text-primary font-bold">8x de R$4,74!</span>
            </p>
            
            <div className="hidden md:block bg-white/10 backdrop-blur-sm p-4 rounded-lg mb-6 border border-white/20">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Copywrting persuasivo para todas as plataformas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Estratégias avançadas de tráfego pago</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Método comprovado para conseguir clientes</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-8">
            <div className="relative">
              <div className="absolute -top-4 -left-4 bg-primary text-white text-sm font-bold py-1 px-3 rounded-full animate-pulse">
                Oferta Especial
              </div>
              <div className="bg-white p-2 rounded-lg">
                <div className="relative">
                  <img 
                    src="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Social Media Pro E-book" 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute bottom-2 right-2 bg-primary text-white text-lg font-bold py-1 px-3 rounded">
                    8x R$4,74
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;