'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiCode, FiUsers, FiMonitor, FiTrendingUp } from 'react-icons/fi'

interface ExperienceItem {
  year: string
  title: string
  company: string
  description: string
  icon: React.ReactNode
  color: string
  achievements: string[]
  duration: string
  technologies?: string[]
}

interface ExperienceCardProps {
  item: ExperienceItem
  index: number
  total: number
}

export default function ExperienceCard({ item, index, total }: ExperienceCardProps) {
  const isEven = index % 2 === 0

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      x: isEven ? -50 : 50,
      y: 30
    },
    visible: { 
      opacity: 1, 
      x: 0,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.15
      }
    },
    hover: {
      y: -8,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`relative last:mb-0 ${isEven ? 'text-left' : 'text-right'}`}
      style={{ marginBottom: '270px' }}
    >
      {/* Content Card */}
      <div 
        className={`${isEven ? 'ml-auto' : 'mr-auto'} w-full max-w-sm lg:max-w-md timeline-card`}
        style={{
          marginLeft: isEven ? 'auto' : '2rem',
          marginRight: isEven ? '2rem' : 'auto'
        }}
      >
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-transparent backdrop-blur-sm rounded-xl p-4 md:p-5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/20 border border-white/20 group-hover:border-yellow-400/30">
            
            {/* Header */}
            <div className={`flex items-start justify-between mb-4 md:mb-5 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex items-center space-x-6 md:space-x-8 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-9 h-9 md:w-11 md:h-11 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden mx-2`}>
                  <div className="text-gray-900 text-sm md:text-lg relative z-10">
                    {item.icon}
                  </div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className={`${isEven ? 'text-right' : 'text-left'} px-3`}>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-yellow-400 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-purple-400 font-semibold text-xs md:text-sm leading-tight">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Badge - Centered and positioned beautifully */}
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center space-x-1.5 md:space-x-2 px-3 md:px-4 py-2 md:py-2.5 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full shadow-sm">
                <span className="text-yellow-400 font-medium text-xs md:text-sm">{item.year}</span>
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                <span className="text-gray-400 text-xs md:text-sm">{item.duration}</span>
              </div>
            </div>
          
            {/* Description */}
            <p className="text-gray-300 leading-relaxed mb-3 md:mb-4 text-xs md:text-sm line-clamp-2">
              {item.description}
            </p>
            
            {/* Technologies */}
            {item.technologies && (
              <div className="mb-3 md:mb-4">
                <div className={`flex flex-wrap gap-1 md:gap-1.5 ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {item.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                      className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full text-xs text-yellow-400 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-1 gap-2 md:gap-2.5 mb-4 md:mb-5">
              {item.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.05 }}
                  className={`flex items-center space-x-2 md:space-x-2.5 p-2 md:p-2.5 bg-transparent backdrop-blur-sm border border-white/10 rounded-lg transition-all duration-300 group-hover:border-yellow-400/20 ${
                    isEven ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex-shrink-0 animate-pulse" />
                  <span className="text-xs md:text-sm text-gray-300">{achievement}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="pt-3 md:pt-4 border-t border-white/10">
              <div className={`flex items-center justify-between mb-2 md:mb-2.5 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-xs md:text-sm text-gray-400">Kinh nghiệm</span>
                <span className="text-xs md:text-sm text-yellow-400 font-medium">100%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-1.5 md:h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="h-1.5 md:h-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                </motion.div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  )
}
