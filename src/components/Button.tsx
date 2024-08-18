import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type = 'submit', onClick, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
