'use client';

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { FiCode, FiTrendingUp } from 'react-icons/fi';
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

const NavItemComponent = React.memo<{
  item: NavItem;
  isActive: boolean;
  isMobile: boolean;
  index: number;
  onItemClick?: () => void;
}>(({ item, isActive, isMobile, index, onItemClick }) => {
  const isSpecial = item.isSpecial;
  const [isClicked, setIsClicked] = useState(false);
  
  const handleClick = useCallback(() => {
    if (isSpecial) {
      setIsClicked(true);
      setTimeout(() => setIsClicked(false), 600);
    }
    if (onItemClick) {
      onItemClick();
    }
  }, [onItemClick, isSpecial]);

  const linkClassName = useMemo(() => {
    const baseClasses = 'transition-all duration-300 ease-out relative group overflow-hidden';
    
    if (isMobile) {
      return cn(
        baseClasses,
        'block px-6 py-4 rounded-2xl text-lg font-semibold min-h-[56px] flex items-center justify-between',
        'active:scale-95 active:transition-transform active:duration-100',
        isActive
          ? isSpecial
            ? 'bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-glow-strong scale-105'
            : 'bg-gradient-to-r from-amber-700 to-yellow-600 text-gray-900 shadow-glow-strong scale-105'
          : isSpecial
          ? 'text-white hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 hover:shadow-glow hover:scale-102'
          : 'text-muted-foreground hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-700/20 hover:via-yellow-600/20 hover:to-amber-800/20 hover:shadow-glow hover:scale-102'
      );
    } else {
      return cn(
        baseClasses,
        'text-sm font-medium px-4 py-2 rounded-xl flex items-center space-x-2',
        isActive
          ? isSpecial
            ? 'text-white bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 shadow-glow-strong'
            : 'text-gray-900 bg-gradient-to-r from-amber-700 to-yellow-600 shadow-glow-strong'
          : isSpecial
          ? 'text-white hover:text-white hover:bg-gradient-to-r hover:from-purple-600 hover:via-pink-500 hover:to-orange-500 hover:shadow-glow'
          : 'text-muted-foreground hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-700/20 hover:via-yellow-600/20 hover:to-amber-800/20 hover:shadow-glow'
      );
    }
  }, [isActive, isSpecial, isMobile]);

  return (
    <motion.div
      key={item.href}
      initial={{ 
        opacity: 0, 
        y: isMobile ? 20 : -10,
        scale: isMobile ? 0.95 : 1
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1
      }}
      transition={{ 
        delay: index * 0.08, 
        duration: isMobile ? 0.4 : 0.2,
        type: "spring",
        stiffness: isMobile ? 100 : 200,
        damping: isMobile ? 15 : 20
      }}
      className={isMobile ? "relative" : "relative"}
    >
      <Link
        href={item.href}
        className={linkClassName}
        onClick={handleClick}
        aria-label={item.description || item.label}
        role="menuitem"
      >
        {/* Ripple effect for special items */}
        {isSpecial && isClicked && (
          <div className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-ombre-color-shift opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 animate-ripple-wave opacity-50"></div>
          </div>
        )}
        
        <div className={isMobile ? "flex items-center justify-between relative z-10 w-full" : "flex items-center space-x-2 relative z-10"}>
          <div className="flex items-center space-x-3">
            {item.icon && (
              <span className={isMobile ? "text-xl" : "text-lg"}>
                {item.icon}
              </span>
            )}
            <span className={cn(
              "relative z-10 font-semibold",
              isMobile ? "text-lg tracking-wide" : "text-sm"
            )}>
              {item.label}
            </span>
          </div>
          
          {isSpecial && item.badge && (
            <div className={cn(
              "flex items-center space-x-1 px-3 py-1.5 bg-red-700 text-white font-bold rounded-full shadow-glow",
              isMobile ? "text-sm" : "text-xs"
            )}>
              <FiTrendingUp className={isMobile ? "w-4 h-4" : "w-3 h-3"} />
              <span>{item.badge}</span>
            </div>
          )}
        </div>
        
        {/* Active indicator for mobile */}
        {isActive && isMobile && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full shadow-glow-strong"
          />
        )}
        
        {/* Active underline for desktop */}
        {isActive && !isMobile && (
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-gold-purple rounded-full shadow-glow w-full" />
        )}
        
        {/* Hover underline for desktop */}
        {!isMobile && (
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-gold-purple rounded-full w-0 group-hover:w-full transition-all duration-300" />
        )}
        
        {/* Tooltip for desktop */}
        {!isMobile && item.description && (
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 text-xs text-white bg-gray-900/90 rounded-lg whitespace-nowrap z-50 shadow-glow backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {item.description}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900/90 rotate-45" />
          </span>
        )}
      </Link>
    </motion.div>
  );
});

NavItemComponent.displayName = 'NavItemComponent';

const Navigation: React.FC<NavigationProps> = React.memo(({
  className,
  isMobile = false,
  onItemClick,
}) => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const memoizedNavItems = useMemo(() => navItems, []);

  if (!mounted) {
    return (
      <nav className={cn('flex items-center space-x-8', className)}>
        {memoizedNavItems.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <Link
              href={item.href}
              className="text-sm font-medium text-muted-foreground px-3 py-2 rounded-lg transition-all duration-300 ease-out hover:text-gold"
            >
              {item.label}
            </Link>
          </motion.div>
        ))}
      </nav>
    );
  }

  return (
    <motion.nav 
      initial={{ opacity: 0, y: isMobile ? 20 : -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: isMobile ? 0.6 : 0.5,
        type: "spring",
        stiffness: isMobile ? 80 : 100,
        damping: isMobile ? 20 : 25
      }}
      className={cn(
        isMobile ? 'space-y-3 px-4 py-2' : 'flex items-center space-x-6',
        className
      )}
      role={isMobile ? "menu" : "navigation"}
      aria-label="Main navigation"
    >
      {memoizedNavItems.map((item, index) => (
        <NavItemComponent
          key={item.href}
          item={item}
          isActive={pathname === item.href}
          isMobile={isMobile}
          index={index}
          onItemClick={onItemClick}
        />
      ))}
    </motion.nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;
