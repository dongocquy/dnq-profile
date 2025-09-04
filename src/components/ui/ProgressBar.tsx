'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
  barClassName?: string;
  showLabel?: boolean;
  label?: string;
  animate?: boolean;
}

export function ProgressBar({
  value,
  className,
  barClassName,
  showLabel = false,
  label,
  animate = true,
}: ProgressBarProps) {
  const [progressWidth, setProgressWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (animate) {
            // Animate progress bar
            setTimeout(() => {
              setProgressWidth(value);
            }, 100);
          } else {
            setProgressWidth(value);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, [value, animate]);

  const getProgressColor = (level: number) => {
    if (level >= 90) return 'bg-green-500';
    if (level >= 80) return 'bg-blue-500';
    if (level >= 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className={cn('space-y-2', className)} ref={progressRef}>
      {showLabel && (
        <div className="flex justify-between items-center">
          <span className="font-medium text-foreground">{label}</span>
          <span className="text-sm text-muted-foreground">{value}%</span>
        </div>
      )}
      <div className="w-full bg-muted rounded-full h-2 relative overflow-hidden">
        <div
          className={cn(
            'h-2 rounded-full transition-all duration-1000 ease-out relative overflow-hidden',
            getProgressColor(value),
            barClassName
          )}
          style={{ width: `${progressWidth}%` }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
        </div>
      </div>
    </div>
  );
}
