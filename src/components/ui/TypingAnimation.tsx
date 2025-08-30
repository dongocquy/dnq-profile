'use client'

import { useEffect, useState } from 'react'

// CSS for animations
const animationStyles = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0px) scale(1);
      opacity: 0.3;
    }
    50% {
      transform: translateY(-8px) scale(1.1);
      opacity: 0.6;
    }
  }
  
  @keyframes typing-cursor {
    0%, 50% {
      opacity: 1;
    }
    51%, 100% {
      opacity: 0;
    }
  }
  
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  
  .animate-typing-cursor {
    animation: typing-cursor 1s infinite;
  }
  
  .text-shadow-lg {
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.6);
  }
`

interface TypingAnimationProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  loop?: boolean
}

export default function TypingAnimation({
  text,
  speed = 100,
  delay = 0,
  className = '',
  loop = false
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    if (!isDeleting && currentIndex < text.length) {
      // Đang gõ
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timer)
    } else if (!isDeleting && currentIndex >= text.length) {
      // Bắt đầu xóa
      setTimeout(() => {
        setIsDeleting(true)
      }, 1000) // Dừng 1s trước khi xóa
    } else if (isDeleting && displayText.length > 0) {
      // Đang xóa
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
      }, speed / 2) // Xóa nhanh hơn gõ

      return () => clearTimeout(timer)
    } else if (isDeleting && displayText.length === 0) {
      // Hoàn thành xóa, bắt đầu lại
      if (loop) {
        setCurrentIndex(0)
        setIsDeleting(false)
      }
    }
  }, [currentIndex, text, speed, isTyping, isDeleting, displayText, loop])

  return (
    <span className={`inline-block ${className}`}>
      {displayText}
      <span className="animate-typing-cursor text-yellow-400 font-bold">|</span>
    </span>
  )
}

// Component cho hiệu ứng typing với nhiều dòng
export function MultiLineTypingAnimation({
  lines,
  speed = 100,
  delay = 0,
  className = ''
}: {
  lines: string[]
  speed?: number
  delay?: number
  className?: string
}) {
  const [currentLine, setCurrentLine] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  useEffect(() => {
    if (!isTyping) return

    const currentText = lines[currentLine]

    if (!isDeleting && displayText.length < currentText.length) {
      // Đang gõ
      const timer = setTimeout(() => {
        setDisplayText(prev => prev + currentText[displayText.length])
      }, speed)

      return () => clearTimeout(timer)
    } else if (!isDeleting && displayText.length >= currentText.length) {
      // Bắt đầu xóa
      setTimeout(() => {
        setIsDeleting(true)
      }, 1000) // Dừng 1s trước khi xóa
    } else if (isDeleting && displayText.length > 0) {
      // Đang xóa
      const timer = setTimeout(() => {
        setDisplayText(prev => prev.slice(0, -1))
      }, speed / 2) // Xóa nhanh hơn gõ

      return () => clearTimeout(timer)
    } else if (isDeleting && displayText.length === 0) {
      // Hoàn thành xóa, chuyển sang dòng tiếp theo
      setTimeout(() => {
        setCurrentLine(prev => (prev + 1) % lines.length) // Loop về dòng đầu
        setIsDeleting(false)
      }, 500)
    }
  }, [displayText, lines, currentLine, speed, isTyping, isDeleting])

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: animationStyles }} />
      <div className={`${className} group`}>
        <div className="min-h-[3rem] flex items-center justify-center relative">
          <span className="relative z-20 text-shadow-lg bg-gradient-to-r from-orange-400 via-red-500 via-red-600 to-red-700 bg-clip-text text-transparent">
            {displayText}
            <span className="animate-typing-cursor text-orange-400 font-bold ml-1">|</span>
          </span>
          
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-red-500/5 to-red-600/5 blur-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Minimal floating particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1 left-1/4 w-1 h-1 bg-orange-400/30 rounded-full animate-float" style={{ animationDelay: '0s' }} />
            <div className="absolute top-3 right-1/3 w-0.5 h-0.5 bg-red-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1 left-1/2 w-0.5 h-0.5 bg-red-600/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>
      </div>
    </>
  )
}
