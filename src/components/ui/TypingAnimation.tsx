'use client'

import { useEffect, useState } from 'react'

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
      <span className="animate-pulse text-yellow-400 font-bold">|</span>
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
    <div className={`${className} group`}>
      <div className="min-h-[3rem] flex items-center justify-center relative">
        <span className="relative z-20 bg-gradient-to-r from-red-900 via-red-800 via-yellow-800 to-yellow-700 bg-clip-text text-transparent">
          {displayText}
          <span className="animate-pulse text-red-900 font-bold ml-1">|</span>
        </span>
        
      </div>
    </div>
  )
}
