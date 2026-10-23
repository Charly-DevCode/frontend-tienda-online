import React from 'react';
import '@/shared/styles/ui/Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export const Button = ({ variant = 'secondary', children, className = '', ...props }: ButtonProps) => {
  return (
    <button 
      className={`btn btn--${variant} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};