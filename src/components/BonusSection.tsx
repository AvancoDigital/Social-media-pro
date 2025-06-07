import React from 'react';
import { TrendingUp, Wrench, Gift } from 'lucide-react';

const BonusSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-secondary">
            Bônus exclusivos para <span className="text-primary">acelerar seus resultados</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Além do e-book principal, você receberá materiais complementares que vão turbinar sua jornada no Social Media.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Bônus 1 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Crescimento Orgânico" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Gift className="h-4 w-4 mr-1" />
                BÔNUS
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">Bônus Especial #1</h3>
                  <p className="text-primary font-semibold">Crescimento Orgânico e Marketing Digital</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Estratégias avançadas para fazer seu perfil crescer naturalmente, sem depender apenas de anúncios pagos. Aprenda técnicas de SEO para redes sociais e como criar conteúdo viral.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Algoritmos das principais plataformas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Hashtags estratégicas para cada nicho</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Timing ideal para postagens</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bônus 2 */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Ferramentas Essenciais" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                <Gift className="h-4 w-4 mr-1" />
                BÔNUS
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Wrench className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-secondary">Bônus Especial #2</h3>
                  <p className="text-primary font-semibold">Ferramentas Essenciais para Social Media</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-4">
                Lista completa das melhores ferramentas gratuitas e pagas para criar, editar, programar e analisar seu conteúdo. Economize tempo e profissionalize seus resultados.
              </p>
              
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Editores de imagem e vídeo</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Agendadores de posts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Analytics e métricas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-primary/20">
            <p className="text-lg font-bold text-secondary mb-2">
              Valor total dos bônus: <span className="text-primary">R$194,00</span>
            </p>
            <p className="text-gray-600">
              Hoje você leva <span className="font-bold text-primary">GRÁTIS</span> junto com o e-book!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;