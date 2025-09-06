'use client'

import { useState } from 'react'

interface ContactInfo {
  icon: string
  label: string
  value: string
  link?: string
  type: 'email' | 'phone' | 'location' | 'website'
}

const contactInfo: ContactInfo[] = [
  {
    icon: '📧',
    label: 'Email',
    value: 'dongocquy@email.com',
    link: 'mailto:dongocquy@email.com',
    type: 'email'
  },
  {
    icon: '📱',
    label: 'Điện thoại',
    value: '+84 123 456 789',
    link: 'tel:+84123456789',
    type: 'phone'
  },
  {
    icon: '📍',
    label: 'Địa chỉ',
    value: 'Hà Nội, Việt Nam',
    type: 'location'
  },
  {
    icon: '🌐',
    label: 'Website',
    value: 'www.dongocquy.dev',
    link: 'https://www.dongocquy.dev',
    type: 'website'
  }
]

interface ContactCardProps {
  className?: string
  variant?: 'default' | 'minimal' | 'glow'
}

export default function ContactCard({ 
  className = '', 
  variant = 'default' 
}: ContactCardProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const variantClasses = {
    default: 'bg-transparent backdrop-blur-sm border border-red-400/30',
    minimal: 'bg-transparent border border-white/20',
    glow: 'bg-transparent backdrop-blur-sm border border-red-400/30 shadow-lg shadow-red-500/10'
  }

  return (
    <div className={`${variantClasses[variant]} rounded-xl p-6 liquid-shape ${className}`}>
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        <span className="bg-gradient-to-r from-red-300 to-red-500 bg-clip-text text-transparent">
          Thông Tin Liên Hệ
        </span>
      </h3>
      
      <div className="space-y-4">
        {contactInfo.map((contact, index) => (
          <div
            key={contact.type}
            className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-red-500/10 hover:scale-105 cursor-pointer group ${
              hoveredIndex === index ? 'bg-red-500/15' : ''
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            onClick={() => {
              if (contact.link) {
                window.open(contact.link, '_blank')
              }
            }}
          >
            <div className="text-2xl group-hover:scale-110 transition-transform duration-300 animate-glow-pulse hover-scale">
              {contact.icon}
            </div>
            
            <div className="flex-1">
              <div className="text-sm text-red-300 font-medium">
                {contact.label}
              </div>
              <div className="text-white font-semibold group-hover:text-red-200 transition-colors duration-300">
                {contact.value}
              </div>
            </div>
            
            {contact.link && (
              <div className="text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-6 pt-4 border-t border-red-400/30">
        <p className="text-sm text-red-200 text-center">
          Sẵn sàng hợp tác và tạo ra những dự án tuyệt vời!
        </p>
      </div>
    </div>
  )
}
