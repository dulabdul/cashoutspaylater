import { BRAND_CONFIG } from '@/constants/content';
import React, { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'white' | 'outline';
  className?: string;
  href?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
}) => {
  const baseStyle =
    'inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: `${BRAND_CONFIG.colors.primary} text-white hover:bg-orange-700 focus:ring-orange-500`,
    white: `bg-white ${BRAND_CONFIG.colors.text} hover:bg-gray-100 focus:ring-white`,
    outline: `bg-transparent border-2 border-white text-white hover:bg-white hover:${BRAND_CONFIG.colors.text}`,
  };

  if (href) {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        className={`${baseStyle} ${variants[variant]} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
