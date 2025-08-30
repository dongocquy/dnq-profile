'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import Button from '@/components/ui/Button';
import Navigation from './Navigation';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-yellow-500/20 bg-gradient-to-r from-black/95 via-purple-900/30 to-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 animate-fade-in-up shadow-lg shadow-purple-500/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-yellow-400 via-gold to-yellow-600 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-150 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
                <span className="text-black font-bold text-sm relative z-10">DNQ</span>
              </div>
              <span className="font-bold text-xl text-gold group-hover:text-yellow-400 transition-colors duration-150">
                {process.env.NEXT_PUBLIC_APP_NAME || 'DNQ Profile'}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <Navigation />
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/contact">
              <Button 
                variant="primary" 
                size="sm"
                className="bg-gradient-to-r from-yellow-400 via-gold to-yellow-600 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 text-black relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Liên hệ</span>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-black hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-600/20 p-2 rounded-lg text-gold hover:text-purple-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/30"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className={cn(
                "h-6 w-6 transition-all duration-150",
                isMobileMenuOpen ? "rotate-90" : "rotate-0"
              )}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                  className="animate-fade-in-up"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                  className="animate-fade-in-up"
                />
              )}
            </svg>
          </button>
        </div>

                  {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden animate-fade-in-up">
              <div className="px-2 pt-2 pb-3 space-y-1 border-t border-yellow-500/20 bg-gradient-to-b from-black/95 via-purple-900/20 to-black/95 backdrop-blur shadow-lg shadow-purple-500/20">
              <Navigation isMobile onItemClick={() => setIsMobileMenuOpen(false)} />
              <div className="px-3 py-2 space-y-2">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-yellow-400 via-gold to-yellow-600 hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 text-black relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Liên hệ</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
