import React from 'react';
import { ShieldCheck } from 'lucide-react';
import Button from './shared/Button';
import { KIWIFY_LINK } from '../data';

const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100" id="garantia">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-primary p-8 flex items-center justify-center">
              <ShieldCheck className="h-32 w-32 text-white" />
            </div>
            
            <div className="md:w-2/3 p-8">
              <h2 className="text-3xl font-bold mb-4">
                Garantia de <span className="text-primary">7 Dias</span>
              </h2>
              
              <p className="text-lg mb-6">
                Estamos tão confiantes que o Social Media Pro vai transformar sua carreira que oferecemos uma garantia incondicional de 7 dias.
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <p className="font-bold mb-2">Como funciona:</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Adquira o e-book agora mesmo</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Estude o conteúdo por até 7 dias</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span>Se não estiver satisfeito, solicite reembolso total</span>
                  </li>
                </ul>
              </div>
              
              <p className="italic text-gray-600 mb-6">
                "Se você não amar o conteúdo, devolvemos 100% do seu dinheiro. Sem perguntas, sem burocracia!"
              </p>
              
              <Button href={KIWIFY_LINK} variant="primary" size="lg" withArrow>
                QUERO COMPRAR COM GARANTIA
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;