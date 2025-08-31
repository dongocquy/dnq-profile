'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiCode, FiStar, FiAward, FiTrendingUp } from 'react-icons/fi';
import { cn } from '@/utils/cn';

interface NavigationProps {
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

interface NavItem {
  label: string;
  href: string;
  description?: string;
  icon?: React.ReactNode;
  isSpecial?: boolean;
  badge?: string;
}

const navItems: NavItem[] = [
  {
    label: 'Trang chủ',
    href: '/',
    description: 'Trang chủ của website',
  },
  {
    label: 'Giới thiệu',
    href: '/about',
    description: 'Thông tin về tôi',
  },
  {
    label: 'Dự án',
    href: '/projects',
    description: 'Các dự án đã thực hiện',
    icon: <FiCode className="w-4 h-4" />,
    isSpecial: true,
    badge: 'Hot',
  },
  {
    label: 'Kỹ năng',
    href: '/skills',
    description: 'Kỹ năng và công nghệ',
  },
  {
    label: 'Liên hệ',
    href: '/contact',
    description: 'Thông tin liên hệ và bình luận',
  },
];

const Navigation: React.FC<NavigationProps> = ({
  className,
  isMobile = false,
  onItemClick,
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleItemClick = () => {
    if (onItemClick) {
      onItemClick();
    }
  };

  // Render loading state until mounted
  if (!mounted) {
    return (
      <nav className={cn('flex items-center space-x-8', className)}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm font-medium text-muted-foreground px-3 py-2 rounded-lg transition-all duration-150 ease-out"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  if (isMobile) {
    return (
      <nav className={cn('space-y-2', className)}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href;
          const isSpecial = item.isSpecial;
          
          return (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={item.href}
                className={cn(
                  'block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ease-out relative overflow-hidden group',
                  isActive
                    ? isSpecial
                      ? 'bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 text-gray-900 shadow-lg shadow-purple-500/30 transform scale-105'
                      : 'bg-gradient-to-r from-yellow-400 via-gold to-yellow-600 text-gray-900 shadow-lg shadow-purple-500/30 transform scale-105 animate-glow'
                    : isSpecial
                    ? 'text-white hover:text-yellow-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-600/20 hover:transform hover:scale-105 hover:shadow-md hover:shadow-purple-500/20 hover:border '
                    : 'text-muted-foreground hover:text-gold hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-600/20 hover:transform hover:scale-105 hover:shadow-md hover:shadow-purple-500/20 hover:border '
                )}
                onClick={handleItemClick}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    {item.icon && <span className="text-lg">{item.icon}</span>}
                    <span className="relative z-10">{item.label}</span>
                  </div>
                  
                  {/* Special Badge */}
                  {isSpecial && item.badge && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full"
                    >
                      <FiTrendingUp className="w-3 h-3" />
                      <span>{item.badge}</span>
                    </motion.div>
                  )}
                </div>
                
                {/* Active glow effect */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/10 to-yellow-600/20 rounded-xl animate-pulse" />
                )}
                
                {/* Hover ripple effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rounded-full" />
                )}
                
                {/* Special floating particles for projects */}
                {isSpecial && (
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/4 left-1/4 w-1 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
                      transition={{ duration: 2.5, repeat: Infinity }}
                      className="absolute top-3/4 right-1/4 w-1 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [-3, 3, -3], x: [2, -2, 2] }}
                      transition={{ duration: 1.8, repeat: Infinity }}
                      className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                    />
                  </div>
                )}
                
                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-100 transition-opacity duration-100">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-yellow-400/30 rounded-full group-active:animate-ripple" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className={cn('flex items-center space-x-6', className)}>
      {navItems.map((item, index) => {
        const isActive = pathname === item.href;
        const isSpecial = item.isSpecial;
        
        return (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <Link
              href={item.href}
              className={cn(
                'text-sm font-medium transition-all duration-300 ease-out relative group px-4 py-2 rounded-xl overflow-hidden flex items-center space-x-2',
                isActive
                  ? isSpecial
                    ? 'text-gray-900 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 shadow-lg shadow-purple-500/30 transform scale-105'
                    : 'text-gray-900 bg-gradient-to-r from-yellow-400 via-gold to-yellow-600 shadow-lg shadow-purple-500/30 transform scale-105 animate-glow'
                  : isSpecial
                  ? 'text-white hover:text-yellow-400 hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-600/20 hover:transform hover:scale-105 hover:shadow-md hover:shadow-purple-500/20 hover:border '
                  : 'text-muted-foreground hover:text-gold hover:bg-gradient-to-r hover:from-purple-500/20 hover:via-pink-500/20 hover:to-purple-600/20 hover:transform hover:scale-105 hover:shadow-md hover:shadow-purple-500/20 hover:border '
              )}
            >
              {item.icon && <span className="text-lg">{item.icon}</span>}
              <span className="relative z-10">{item.label}</span>
              
              {/* Special Badge */}
              {isSpecial && item.badge && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold rounded-full"
                >
                  <FiTrendingUp className="w-3 h-3" />
                  <span>{item.badge}</span>
                </motion.div>
              )}
              
              {/* Active glow effect */}
              {isActive && (
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/10 to-yellow-600/20 rounded-xl animate-pulse" />
              )}
              
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Active underline */}
              {isActive && (
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 rounded-full" />
              )}
              
              {/* Hover underline */}
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 via-purple-500 to-pink-500 rounded-full group-hover:w-full transition-all duration-300 ease-out" />
              
              {/* Special floating particles for projects */}
              {isSpecial && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.div
                    animate={{ y: [-5, 5, -5], x: [-3, 3, -3] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-1 h-1 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [5, -5, 5], x: [3, -3, 3] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute top-3/4 right-1/4 w-1 h-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"
                  />
                  <motion.div
                    animate={{ y: [-3, 3, -3], x: [2, -2, 2] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  />
                </div>
              )}
              
              {/* Tooltip */}
              {item.description && (
                <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 text-xs text-white bg-gray-900/90  rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-150 whitespace-nowrap z-50 shadow-xl border border-yellow-500/30">
                  {item.description}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-t border-yellow-500/30" />
                </span>
              )}
              
              {/* Ripple effect on click */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-active:opacity-100 transition-opacity duration-100">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-yellow-400/30 rounded-full group-active:animate-ripple" />
              </div>
            </Link>
          </motion.div>
        );
      })}
    </nav>
  );
};

export default Navigation;
