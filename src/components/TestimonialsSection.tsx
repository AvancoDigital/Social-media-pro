import React, { useState } from 'react';
import { testimonials } from '../data';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 bg-white" id="depoimentos">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          O QUE DIZEM NOSSOS <span className="text-primary">LEITORES</span>
        </h2>
        
        <p className="text-lg text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Veja como o Social Media Pro está transformando a carreira de milhares de profissionais.
        </p>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="bg-gray-100 rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                <div className="relative">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name} 
                    className="w-32 h-32 rounded-full object-cover border-4 border-primary"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary text-white p-1 rounded-full">
                    <Star className="h-5 w-5 fill-white" />
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 md:pl-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500 mr-1" />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl italic mb-6">
                  "{testimonials[currentIndex].content}"
                </blockquote>
                
                <div className="font-bold text-lg">{testimonials[currentIndex].name}</div>
                {testimonials[currentIndex].age && (
                  <div className="text-gray-600">{testimonials[currentIndex].age}</div>
                )}
                {testimonials[currentIndex].role && (
                  <div className="text-gray-600">{testimonials[currentIndex].role}</div>
                )}
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 transition-colors duration-200"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="bg-primary hover:bg-primary-dark text-white rounded-full p-2 transition-colors duration-200"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;