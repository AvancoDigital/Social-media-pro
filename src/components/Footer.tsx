import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-400 text-sm">
          <p>© 2025 Social Media Pro. Todos os direitos reservados.</p>
          <p className="mt-2">Este site não é afiliado a Meta, TikTok ou qualquer outra plataforma mencionada.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;