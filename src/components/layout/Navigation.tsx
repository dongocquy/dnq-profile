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
  
  const handleClick = useCallback(() => {
    if (onItemClick) {
      onItemClick();
    }
  }, [onItemClick]);

  const linkClassName = useMemo(() => {
    const baseClasses = 'transition-all duration-300 ease-out relative group overflow-hidden border backdrop-blur-sm';
    
    if (isMobile) {
      return cn(
        baseClasses,
        'block px-4 py-3 rounded-xl text-base font-medium',
        isActive
          ? isSpecial
            ? 'bg-gradient-to-r from-amber-700 to-yellow-600 text-gray-900 shadow-glow-strong border-amber-700/50'
            : 'bg-gradient-to-r from-amber-700 to-yellow-600 text-gray-900 shadow-glow-strong border-amber-700/50'
          : isSpecial
          ? 'text-white hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-700/20 hover:via-yellow-600/20 hover:to-amber-800/20 border-amber-700/30 hover:border-amber-600/50 hover:shadow-glow'
          : 'text-muted-foreground hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-700/20 hover:via-yellow-600/20 hover:to-amber-800/20 border-gray-600/30 hover:border-amber-600/50 hover:shadow-glow'
      );
    } else {
      return cn(
        baseClasses,
        'text-sm font-medium px-4 py-2 rounded-xl flex items-center space-x-2',
        isActive
          ? isSpecial
            ? 'text-gray-900 bg-gradient-to-r from-amber-700 to-yellow-600 shadow-glow-strong border-amber-700/50'
            : 'text-gray-900 bg-gradient-to-r from-amber-700 to-yellow-600 shadow-glow-strong border-amber-700/50'
          : isSpecial
          ? 'text-white hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-700/20 hover:via-yellow-600/20 hover:to-amber-800/20 border-amber-700/30 hover:border-amber-600/50 hover:shadow-glow'
          : 'text-muted-foreground hover:text-amber-400 hover:bg-gradient-to-r hover:from-amber-700/20 hover:via-yellow-600/20 hover:to-amber-800/20 border-gray-600/30 hover:border-amber-600/50 hover:shadow-glow'
      );
    }
  }, [isActive, isSpecial, isMobile]);

  return (
    <motion.div
      key={item.href}
      initial={{ opacity: 0, y: isMobile ? 0 : -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.2 }}
      className={isMobile ? undefined : "relative"}
    >
      <Link
        href={item.href}
        className={linkClassName}
        onClick={handleClick}
      >
        <div className={isMobile ? "flex items-center justify-between" : "flex items-center space-x-2"}>
          <div className="flex items-center space-x-2">
            {item.icon && (
              <span className="text-lg">
                {item.icon}
              </span>
            )}
            <span className="relative z-10">{item.label}</span>
          </div>
          
          {isSpecial && item.badge && (
            <div className="flex items-center space-x-1 px-2 py-1 bg-red-700 text-white text-xs font-bold rounded-full shadow-glow">
              <FiTrendingUp className="w-3 h-3 text-white" />
              <span>{item.badge}</span>
            </div>
          )}
        </div>
        
        {/* Active indicator for mobile */}
        {isActive && isMobile && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gold rounded-full shadow-glow" />
        )}
        
        {/* Active underline for desktop */}
        {isActive && !isMobile && (
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-gold-purple rounded-full shadow-glow w-full" />
        )}
        
        {/* Hover underline for desktop */}
        {!isMobile && (
          <div className="absolute -bottom-1 left-0 h-0.5 bg-gradient-gold-purple rounded-full w-0 group-hover:w-full transition-all duration-200" />
        )}
        
        {/* Tooltip for desktop */}
        {!isMobile && item.description && (
          <span className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 px-3 py-2 text-xs text-white bg-gray-900/90 rounded-lg whitespace-nowrap z-50 shadow-glow border border-gold/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            {item.description}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-t border-gold/30" />
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
              className="text-sm font-medium text-muted-foreground px-3 py-2 rounded-lg transition-all duration-150 ease-out border border-gray-600/30 hover:border-gold/50 hover:text-gold"
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
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        isMobile ? 'space-y-2' : 'flex items-center space-x-6',
        className
      )}
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
