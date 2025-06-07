import React, { useState, useEffect } from 'react';
import { Book, Menu, X } from 'lucide-react';
import Button from './shared/Button';
import { KIWIFY_LINK } from '../data';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Book className="h-8 w-8 text-primary mr-2" />
            <span className="font-bold text-xl text-secondary">Social Media Pro</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#ebook" className="text-secondary hover:text-primary font-medium">E-book</a>
            <a href="#depoimentos" className="text-secondary hover:text-primary font-medium">Depoimentos</a>
            <a href="#garantia" className="text-secondary hover:text-primary font-medium">Garantia</a>
            <Button href={KIWIFY_LINK} size="sm">COMPRAR AGORA</Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-secondary" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden bg-white ${isMenuOpen ? 'block' : 'hidden'} shadow-lg`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a href="#ebook" className="text-secondary hover:text-primary font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>E-book</a>
          <a href="#depoimentos" className="text-secondary hover:text-primary font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Depoimentos</a>
          <a href="#garantia" className="text-secondary hover:text-primary font-medium py-2 border-b border-gray-100" onClick={toggleMenu}>Garantia</a>
          <Button href={KIWIFY_LINK} fullWidth>COMPRAR AGORA</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;