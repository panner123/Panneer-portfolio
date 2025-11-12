import { motion } from 'framer-motion';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

export default function Button({ children, variant = 'primary', href, ...props }: ButtonProps) {
  const baseClasses = "px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform";
  const variantClasses = variant === 'primary'
    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:shadow-lg hover:shadow-cyan-500/50"
    : "border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-black";

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    props.onClick?.(e);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseClasses} ${variantClasses}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </motion.button>
  );
}
