'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiAward, FiCode, FiUsers, FiMonitor, FiTrendingUp, FiTarget } from 'react-icons/fi'
import ExperienceCard from './ExperienceCard'

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

interface ExperienceTimelineProps {
  experiences?: ExperienceItem[]
}

const defaultExperiences: ExperienceItem[] = [
  {
    year: '2023 - Hiện tại',
    title: 'Founder & CEO',
    company: 'RCQ Xuất khẩu Bingo',
    description: 'Lãnh đạo công ty xuất khẩu nông sản, phát triển hệ thống AI/ML cho nông nghiệp và mở rộng thị trường EU.',
    icon: <FiAward className="w-6 h-6" />,
    color: 'from-yellow-400 to-purple-500',
    achievements: [
      'Phát triển AI/ML cho nông nghiệp',
      'Mở rộng thị trường EU',
      'Lãnh đạo team 20+ người',
      'Tăng doanh thu 300% trong 2 năm'
    ],
    duration: '2 năm',
    technologies: ['AI/ML', 'Python', 'React', 'Node.js', 'PostgreSQL']
  },
  {
    year: '2021 - 2023',
    title: 'Senior Full Stack Developer',
    company: 'Tech Company',
    description: 'Phát triển các ứng dụng web hiện đại, mentoring junior developers và tham gia thiết kế kiến trúc hệ thống.',
    icon: <FiCode className="w-6 h-6" />,
    color: 'from-purple-500 to-pink-500',
    achievements: [
      'Mentoring 5+ junior developers',
      'Thiết kế kiến trúc hệ thống',
      'Phát triển 10+ ứng dụng web',
      'Tối ưu hóa performance 50%'
    ],
    duration: '2 năm',
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'MongoDB']
  },
  {
    year: '2019 - 2021',
    title: 'Full Stack Developer',
    company: 'Startup',
    description: 'Xây dựng MVP cho các sản phẩm mới, làm việc với team agile và triển khai CI/CD.',
    icon: <FiUsers className="w-6 h-6" />,
    color: 'from-pink-500 to-yellow-400',
    achievements: [
      'Xây dựng 5+ MVP',
      'Triển khai CI/CD',
      'Làm việc Agile/Scrum',
      'Tăng tốc độ phát triển 40%'
    ],
    duration: '2 năm',
    technologies: ['React', 'Express.js', 'MongoDB', 'Docker', 'AWS']
  },
  {
    year: '2017 - 2019',
    title: 'Frontend Developer',
    company: 'Digital Agency',
    description: 'Chuyên phát triển giao diện người dùng, tối ưu hóa hiệu suất và đảm bảo trải nghiệm người dùng tốt nhất.',
    icon: <FiMonitor className="w-6 h-6" />,
    color: 'from-blue-500 to-cyan-500',
    achievements: [
      'Phát triển 20+ website',
      'Tối ưu hóa performance',
      'Responsive design',
      'Cải thiện UX 60%'
    ],
    duration: '2 năm',
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
  },
  {
    year: '2015 - 2017',
    title: 'Junior Developer',
    company: 'Software House',
    description: 'Bắt đầu sự nghiệp với việc học hỏi và phát triển các ứng dụng web cơ bản.',
    icon: <FiTrendingUp className="w-6 h-6" />,
    color: 'from-green-500 to-blue-500',
    achievements: [
      'Học hỏi công nghệ mới',
      'Phát triển 3+ dự án',
      'Làm việc team',
      'Tham gia code review'
    ],
    duration: '2 năm',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
  }
]

export default function ExperienceTimeline({ experiences = defaultExperiences }: ExperienceTimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  return (
    <div className="relative">
      {/* Timeline Center Line */}
      <div className="timeline-line">
        {/* Timeline nodes */}
        {experiences.map((_, index) => (
          <div key={index} className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full -translate-x-1/2 animate-ping" 
               style={{ top: `${(index / (experiences.length - 1)) * 100}%`, animationDelay: `${index * 0.3}s` }} />
        ))}
        {experiences.map((_, index) => (
          <div key={`static-${index}`} className="absolute w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full -translate-x-1/2" 
               style={{ top: `${(index / (experiences.length - 1)) * 100}%` }} />
        ))}
      </div>

      {/* Timeline Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8"
      >
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            item={experience}
            index={index}
            total={experiences.length}
          />
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {experiences.map((_, index) => (
          <motion.div
            key={`float-${index}`}
            animate={{ 
              y: [-15, 15, -15],
              x: [-8, 8, -8],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 5 + index, 
              repeat: Infinity,
              delay: index * 0.3
            }}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full opacity-50"
            style={{ 
              top: `${(index / (experiences.length - 1)) * 100}%`,
              left: index % 2 === 0 ? '15%' : '85%'
            }}
          />
        ))}
        
        {experiences.map((_, index) => (
          <motion.div
            key={`float2-${index}`}
            animate={{ 
              y: [15, -15, 15],
              x: [8, -8, 8],
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              duration: 6 + index, 
              repeat: Infinity,
              delay: index * 0.4
            }}
            className="absolute w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-40"
            style={{ 
              top: `${(index / (experiences.length - 1)) * 100}%`,
              left: index % 2 === 0 ? '85%' : '15%'
            }}
          />
        ))}
      </div>
    </div>
  )
}
