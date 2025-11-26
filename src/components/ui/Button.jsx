import React from 'react';

const Button = ({ children, primary = true, className = "", ...props }) => (
    <button
        className={`
      px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2
      ${primary
                ? 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-amber-500/30'
                : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20'}
      ${className}
    `}
        {...props}
    >
        {children}
    </button>
);

export default Button;
