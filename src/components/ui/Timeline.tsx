'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/utils/cn';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

export function Timeline({ items, className }: TimelineProps) {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const timelineItems = timelineRef.current?.querySelectorAll('[data-index]');
    timelineItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const timeline = timelineRef.current;
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Tính toán progress dựa trên vị trí timeline trong viewport
      const timelineTop = rect.top;
      const timelineHeight = rect.height;
      
      let progress = 0;
      
      if (timelineTop < windowHeight && timelineTop + timelineHeight > 0) {
        // Timeline đang trong viewport
        const visibleHeight = Math.min(windowHeight, timelineTop + timelineHeight) - Math.max(0, timelineTop);
        const totalVisibleHeight = Math.min(timelineHeight, windowHeight);
        progress = visibleHeight / totalVisibleHeight;
      } else if (timelineTop + timelineHeight <= 0) {
        // Timeline đã scroll qua hoàn toàn
        progress = 1;
      }
      
      // Throttle để tối ưu performance
      requestAnimationFrame(() => {
        setScrollProgress(progress);
      });
    };

    // Throttle scroll event
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    handleScroll(); // Gọi lần đầu để set giá trị ban đầu

    return () => window.removeEventListener('scroll', throttledScroll);
  }, []);

  return (
    <div className={cn('relative', className)} ref={timelineRef}>
      {/* Timeline Line with scroll-based shine effect */}
      <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border relative overflow-hidden">
        {/* Background line */}
        <div className="absolute inset-0 bg-border"></div>
        
        {/* Progress line that fills based on scroll */}
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-secondary to-primary transition-all duration-300 ease-out"
          style={{ height: `${scrollProgress * 100}%` }}
        >
          {/* Shine effect that moves with scroll */}
          <div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-shine"
            style={{ 
              transform: `translateY(${scrollProgress * 100}%)`,
              transition: 'transform 0.3s ease-out'
            }}
          ></div>
        </div>
      </div>
      
      <div className="space-y-8">
        {items.map((item, index) => (
          <div 
            key={index} 
            className="relative"
            data-index={index}
          >
            {/* Timeline Dot with scroll-based glow effect */}
            <div className={cn(
              "absolute left-2 md:left-1/2 transform md:-translate-x-1/2 top-4 w-4 h-4 bg-primary rounded-full border-4 border-background transition-all duration-500 relative",
              visibleItems.has(index) ? "scale-110" : "opacity-50"
            )}>
              {/* Glow effect based on scroll progress */}
              <div 
                className={cn(
                  "absolute inset-0 rounded-full transition-all duration-300",
                  scrollProgress > (index / items.length) ? "animate-glow" : ""
                )}
                style={{
                  boxShadow: scrollProgress > (index / items.length) 
                    ? '0 0 20px rgba(212, 175, 55, 0.8), 0 0 30px rgba(255, 215, 0, 0.6)' 
                    : 'none'
                }}
              ></div>
              
              {/* Inner shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine rounded-full"></div>
              
              {/* Pulse effect when item becomes visible */}
              {visibleItems.has(index) && (
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-pulse"></div>
              )}
              
              {/* Running light effect */}
              <div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
                style={{
                  transform: `translateX(${scrollProgress > (index / items.length) ? '100%' : '-100%'})`,
                  transition: 'transform 0.5s ease-out'
                }}
              ></div>
            </div>
            
            {/* Content */}
            <div className={cn(
              `ml-8 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'} md:w-1/2 transition-all duration-700`,
              visibleItems.has(index) 
                ? "opacity-100 transform translate-y-0" 
                : "opacity-0 transform translate-y-4"
            )}>
              <div className="bg-card border border-border/40 rounded-lg p-6 hover:border-primary/50 transition-all duration-300 group">
                <div className="text-sm text-primary font-medium mb-2 group-hover:text-accent transition-colors">
                  {item.year}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <div className="text-muted-foreground mb-3 group-hover:text-accent transition-colors">
                  {item.company}
                </div>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors">
                  {item.description}
                </p>
                
                {/* Hover shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
