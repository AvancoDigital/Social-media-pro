import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Eu nunca trabalhei com mídias sociais, vou conseguir acompanhar o e-book?",
      answer: "Sim! O conteúdo foi desenvolvido pensando em iniciantes. Começamos do básico e avançamos gradualmente."
    },
    {
      question: "Posso ler os capítulos fora de ordem?",
      answer: "Recomendamos seguir a ordem sugerida para melhor compreensão, mas você tem liberdade para navegar como preferir."
    },
    {
      question: "Existe alguma comunidade de suporte?",
      answer: "Sim! Você terá acesso ao nosso grupo exclusivo no Telegram para networking e dúvidas."
    },
    {
      question: "Quanto tempo tenho para ler? Consigo conciliar com outras atividades?",
      answer: "O acesso é vitalício! Você pode ler no seu próprio ritmo e revisar quando quiser."
    },
    {
      question: "Quantas horas por semana precisarei dedicar aos estudos?",
      answer: "Recomendamos 1-2 horas por dia, mas você pode adaptar conforme sua disponibilidade."
    },
    {
      question: "Eu posso tirar dúvidas sobre o conteúdo?",
      answer: "Sim! Oferecemos suporte via grupo no Telegram e e-mail."
    },
    {
      question: "Como esse e-book é classificado?",
      answer: "É um guia prático profissionalizante focado em Social Media Marketing."
    },
    {
      question: "Como posso ler o e-book?",
      answer: "Você receberá o PDF por e-mail e poderá ler em qualquer dispositivo."
    },
    {
      question: "Quais programas eu devo baixar?",
      answer: "Apenas um leitor de PDF. Recomendamos Adobe Reader ou similar."
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Perguntas frequentes
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => toggleQuestion(index)}
              >
                <span className="font-semibold text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="p-4 bg-gray-50 rounded-b-lg mt-1">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;