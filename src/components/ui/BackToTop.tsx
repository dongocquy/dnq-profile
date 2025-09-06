'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp, FiArrowUp } from 'react-icons/fi';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show button when page is scrolled down and track scroll progress
  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      
      setScrollProgress(scrollPercent);
      
      if (scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20
          }}
          whileHover={{ 
            scale: 1.1,
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(212, 175, 55, 0.3), 0 10px 10px -5px rgba(212, 175, 55, 0.2)"
          }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 hover:from-yellow-500 hover:via-purple-600 hover:to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group overflow-hidden back-to-top-glow"
          aria-label="Quay về đầu trang"
          title="Quay về đầu trang"
        >
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          
          {/* Progress ring */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="2"
              fill="none"
            />
            <motion.circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgba(255, 255, 255, 0.8)"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              initial={{ strokeDasharray: "0 283" }}
              animate={{ strokeDasharray: `${(scrollProgress * 283) / 100} 283` }}
              transition={{ duration: 0.3 }}
            />
          </svg>
          
          {/* Icon container */}
          <div className="relative z-10 flex items-center justify-center">
            <motion.div
              animate={{ 
                y: [0, -2, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FiArrowUp className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          
          {/* Pulse ring */}
          <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping opacity-75" />
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Quay về đầu trang ({Math.round(scrollProgress)}%)
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
