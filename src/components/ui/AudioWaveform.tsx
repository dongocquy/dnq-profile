'use client'

import { useEffect, useRef, useState } from 'react'

interface AudioWaveformProps {
  className?: string
  barCount?: number
  height?: number
  color?: string
  isPlaying?: boolean
}

export default function AudioWaveform({
  className = '',
  barCount = 20,
  height = 60,
  color = '#d4af37',
  isPlaying = true
}: AudioWaveformProps) {
  const [bars, setBars] = useState<number[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    // Khởi tạo các thanh với chiều cao ngẫu nhiên
    const initialBars = Array.from({ length: barCount }, () => 
      Math.random() * 0.8 + 0.2
    )
    setBars(initialBars)

    const animate = () => {
      if (!isPlaying) return

      setBars(prevBars => 
        prevBars.map(() => Math.random() * 0.8 + 0.2)
      )

      animationRef.current = requestAnimationFrame(animate)
    }

    if (isPlaying) {
      animationRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [barCount, isPlaying])

  return (
    <div className={`flex items-end justify-between w-full ${className} group hover:scale-105 transition-transform duration-300`}>
      {bars.map((heightRatio, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-transparent to-current transition-all duration-75 ease-out animate-audio-wave hover:animate-audio-glow"
          style={{
            width: '2px',
            height: `${heightRatio * height}px`,
            backgroundColor: color,
            boxShadow: `0 0 ${heightRatio * 8}px ${color}40`,
            animationDelay: `${index * 50}ms`,
            animationDuration: `${0.5 + Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  )
}

// Component AudioVisualizer với hiệu ứng sóng âm phức tạp hơn
export function AudioVisualizer({ 
  className = '',
  isPlaying = true 
}: { 
  className?: string
  isPlaying?: boolean 
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight + 60 // Thêm 60px để tránh cắt sóng âm

    let time = 0

    const animate = () => {
      if (!isPlaying) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      // Vẽ sóng âm chính
      ctx.beginPath()
      ctx.strokeStyle = '#d4af37'
      ctx.lineWidth = 3
      
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
          Math.sin(x * 0.01 + time) * 24 * Math.sin(time * 0.5) +
          Math.sin(x * 0.02 + time * 1.5) * 12 * Math.sin(time * 0.3) +
          Math.sin(x * 0.04 + time * 2) * 6 * Math.sin(time * 0.7)
        
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      
      // Thêm hiệu ứng glow cho sóng âm chính
      ctx.shadowColor = '#d4af37'
      ctx.shadowBlur = 10
      ctx.stroke()
      ctx.shadowBlur = 0

      // Vẽ sóng âm phụ
      ctx.beginPath()
      ctx.strokeStyle = '#d4af37'
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.4
      
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + 
          Math.sin(x * 0.015 + time * 1.2) * 16 * Math.sin(time * 0.4) +
          Math.sin(x * 0.03 + time * 1.8) * 10 * Math.sin(time * 0.6)
        
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      
      ctx.stroke()
      ctx.globalAlpha = 1

      // Vẽ các điểm sáng
      for (let i = 0; i < 12; i++) {
        const x = (time * 100 + i * 100) % canvas.width
        const y = canvas.height / 2 + 
          Math.sin(x * 0.01 + time) * 24 * Math.sin(time * 0.5)
        
        ctx.beginPath()
        ctx.arc(x, y, 3, 0, Math.PI * 2)
        ctx.fillStyle = '#d4af37'
        ctx.fill()
        
        // Hiệu ứng glow lớn hơn
        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = '#d4af37'
        ctx.globalAlpha = 0.2
        ctx.fill()
        ctx.globalAlpha = 1
        
        // Hiệu ứng glow thứ hai
        ctx.beginPath()
        ctx.arc(x, y, 12, 0, Math.PI * 2)
        ctx.fillStyle = '#d4af37'
        ctx.globalAlpha = 0.1
        ctx.fill()
        ctx.globalAlpha = 1
      }

      time += 0.03
      animationRef.current = requestAnimationFrame(animate)
    }

    if (isPlaying) {
      animate()
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPlaying])

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full ${className}`}
      style={{ 
        borderRadius: '0',
        width: '100%',
        height: '100%',
        display: 'block',
        padding: '30px 0'
      }}
    />
  )
}

