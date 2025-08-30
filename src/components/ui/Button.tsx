import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden group';
  
  const variants = {
    primary: 'bg-gold-gradient text-black hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-600 hover:shadow-lg hover:scale-105 active:scale-95',
    secondary: 'bg-red-gradient text-white hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105 active:scale-95',
    outline: 'border border-yellow-500/50 bg-transparent text-gold hover:bg-luxury-gradient hover:border-yellow-500 hover:shadow-md hover:scale-105 active:scale-95',
    ghost: 'hover:bg-yellow-500/10 hover:text-gold hover:shadow-sm hover:scale-105 active:scale-95',
    danger: 'bg-red-gradient text-white hover:bg-gradient-to-r hover:from-red-700 hover:to-red-800 hover:shadow-lg hover:scale-105 active:scale-95',
  };

  const sizes = {
    sm: 'h-9 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 px-8',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Ripple effect */}
      <div className="absolute inset-0 opacity-0 group-active:opacity-100 transition-opacity duration-100">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-yellow-400/30 rounded-full group-active:animate-ripple" />
      </div>
      
      {/* Hover glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-yellow-600/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
      
      {/* Content */}
      <span className="relative z-10 flex items-center">
        {loading && (
          <svg
            className="mr-2 h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </span>
      
      {/* Floating particles on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0ms' }} />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '100ms' }} />
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-yellow-300 rounded-full animate-ping" style={{ animationDelay: '200ms' }} />
      </div>
    </button>
  );
};

export default Button;
