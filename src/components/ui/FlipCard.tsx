'use client'

import { useState, useCallback } from 'react'

interface FlipCardProps {
  frontIcon: React.ReactNode
  title: string
  description: string
  className?: string
}

export default function FlipCard({ frontIcon, title, description, className = '' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = useCallback(() => {
    setIsFlipped(prev => !prev)
  }, [])

  // Prevent rapid clicking
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick()
    }
  }, [handleClick])

  return (
    <div 
      className={`flip-card group cursor-pointer perspective-1000 relative ${className}`}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-label={`${title} - Click để ${isFlipped ? 'quay lại' : 'xem chi tiết'}`}
    >
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/20 group-hover:border-yellow-300/50 transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      <div 
        className={`flip-card-inner relative w-full h-80 transform-style-preserve-3d ${isFlipped ? 'flipped' : ''}`}
        style={{
          transform: isFlipped ? 'rotateY(180deg) translateZ(0)' : 'rotateY(0deg) translateZ(0)',
          transformStyle: 'preserve-3d',
          WebkitTransformStyle: 'preserve-3d'
        }}
      >
        {/* Front Side - Icon Only */}
        <div 
          className="flip-card-front absolute w-full h-full backface-hidden flex items-center justify-center rounded-2xl transition-colors duration-300 border-2 border-yellow-400/30 group-hover:border-yellow-300/60"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(0deg) translateZ(0)',
            WebkitTransform: 'rotateY(0deg) translateZ(0)'
          }}
        >
          <div className="w-24 h-24 bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:animate-glow transition-all duration-300 relative group/icon border-2 border-yellow-400/40 group-hover:border-yellow-300/60">
            <div className="w-12 h-12 text-white drop-shadow-lg transition-transform duration-300 group-hover/icon:scale-110">
              {frontIcon}
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/30 to-transparent rounded-2xl opacity-0 group-hover/icon:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Click hint */}
          <div className="absolute bottom-4 text-white/60 text-sm font-medium animate-pulse">
            Click để xem chi tiết
          </div>
        </div>
        
        {/* Back Side - Content */}
        <div 
          className="flip-card-back absolute w-full h-full backface-hidden flex flex-col justify-center items-center text-center rounded-2xl transition-colors duration-300 border-2 border-yellow-400/30 group-hover:border-yellow-300/60"
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg) translateZ(0)',
            WebkitTransform: 'rotateY(180deg) translateZ(0)'
          }}
        >
          <h3 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-purple-400 bg-clip-text text-transparent mb-4 group-hover:animate-luxury-glow">
            {title}
          </h3>
          <p className="text-white/90 text-base leading-relaxed font-medium mb-4 px-4">
            {description}
          </p>
          
          {/* Back to front hint */}
          <div className="text-white/60 text-sm font-medium animate-pulse">
            Click để quay lại
          </div>
        </div>
      </div>
    </div>
  )
}
