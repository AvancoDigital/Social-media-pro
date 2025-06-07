import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  withArrow?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  className = '',
  size = 'md',
  variant = 'primary',
  fullWidth = false,
  withArrow = false,
  onClick,
}) => {
  const baseClasses = 'font-semibold transition-all duration-300 inline-flex items-center justify-center rounded-lg';
  
  const sizeClasses = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-btn hover:shadow-lg',
    secondary: 'bg-secondary hover:bg-gray-800 text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  };
  
  const widthClass = fullWidth ? 'w-full' : '';
  
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="ml-2 h-5 w-5" />}
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  
  return (
    <button className={classes} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;