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
      className={`relative last:mb-0 mb-8 sm:mb-16 md:mb-24 lg:mb-32 ${isEven ? 'text-left' : 'text-right'}`}
    >
      {/* Content Card */}
      <div 
        className={`${isEven ? 'ml-auto' : 'mr-auto'} w-full max-w-[120px] md:max-w-sm lg:max-w-md xl:max-w-lg timeline-card ${isEven ? 'md:ml-auto' : 'md:mr-auto'} ${isEven ? 'ml-auto' : 'ml-4'} md:ml-0 md:mr-0`}
      >
        <div className="relative group">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-pink-500/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-purple-500/10 to-pink-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Main Card */}
          <div className="relative bg-transparent md:bg-transparent bg-red-500/20 backdrop-blur-sm rounded-lg p-1 sm:p-1.5 md:p-2 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-yellow-400/20 md:group-hover:shadow-yellow-400/20 group-hover:shadow-red-400/20 border border-white/20 md:border-white/20 border-2 border-red-500 group-hover:border-yellow-400/30 md:group-hover:border-yellow-400/30 group-hover:border-red-400">
            
            {/* Header */}
            <div className={`flex items-start justify-between mb-1 md:mb-2 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex items-center space-x-4 sm:space-x-6 md:space-x-8 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 relative overflow-hidden mx-1`}>
                  <div className="text-white text-sm relative z-10">
                    {item.icon}
                  </div>
                  {/* Icon glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className={`${isEven ? 'text-right' : 'text-left'} px-3`}>
                  <h3 className="text-sm font-bold text-red-400 group-hover:text-red-300 transition-colors duration-300 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-xs leading-tight">
                    {item.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Time Badge - Centered and positioned beautifully */}
            <div className="flex justify-center mb-1">
              <div className="inline-flex items-center space-x-1 px-2 py-1 bg-gradient-to-r from-red-500/30 to-blue-500/30 border-2 border-red-500 rounded-full shadow-sm">
                <span className="text-red-400 font-medium text-xs">{item.year}</span>
                <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                <span className="text-blue-400 text-xs">{item.duration}</span>
              </div>
            </div>
          
            {/* Description */}
            <p className="text-white leading-relaxed mb-1 text-xs line-clamp-2">
              {item.description}
            </p>
            
            {/* Technologies */}
            {item.technologies && (
              <div className="mb-1">
                <div className={`flex flex-wrap gap-1 md:gap-1.5 ${isEven ? 'justify-end' : 'justify-start'}`}>
                  {item.technologies.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.15 + idx * 0.05 }}
                      className="px-1 py-0.5 bg-gradient-to-r from-red-500/30 to-blue-500/30 border border-red-500 rounded-full text-xs text-red-400 font-medium"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Achievements Grid */}
            <div className="grid grid-cols-1 gap-1 mb-1">
              {item.achievements.map((achievement, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.05 }}
                  className={`flex items-center space-x-1 p-1 bg-red-500/10 backdrop-blur-sm border border-red-500/50 rounded-md transition-all duration-300 group-hover:border-red-400 ${
                    isEven ? 'flex-row-reverse' : 'flex-row'
                  }`}
                >
                  <div className="w-1 h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full flex-shrink-0 animate-pulse" />
                  <span className="text-xs text-white">{achievement}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="pt-1 border-t border-red-500/50">
              <div className={`flex items-center justify-between mb-1 ${isEven ? 'flex-row-reverse' : 'flex-row'}`}>
                <span className="text-xs text-red-400">Kinh nghiệm</span>
                <span className="text-xs text-blue-400 font-medium">100%</span>
              </div>
              <div className="w-full bg-red-500/20 rounded-full h-1 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.2, delay: index * 0.2 }}
                  className="h-1 bg-gradient-to-r from-red-500 to-blue-500 rounded-full relative overflow-hidden"
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
