import React, { useState } from 'react';
import Button from './Button';
import { KIWIFY_LINK } from '../../data';

interface ContactFormProps {
  buttonText?: string;
  withHeading?: boolean;
  headingText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  buttonText = 'QUERO MEU E-BOOK AGORA!',
  withHeading = false,
  headingText = 'INSCREVA-SE HOJE E GANHE 3 BÔNUS EXCLUSIVOS!'
}) => {
  const [form, setForm] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Kiwify payment link
    window.open(KIWIFY_LINK, '_blank');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 border border-gray-200">
      {withHeading && (
        <h3 className="text-center text-xl font-bold mb-4 text-secondary">
          {headingText}
        </h3>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Nome"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="E-mail"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <Button 
          variant="primary" 
          size="lg" 
          fullWidth 
          withArrow
          href={KIWIFY_LINK}
        >
          {buttonText}
        </Button>
      </form>
      
      <p className="text-xs text-center mt-4 text-gray-500">
        Seus dados estão seguros e nunca serão compartilhados.
      </p>
    </div>
  );
};

export default ContactForm;