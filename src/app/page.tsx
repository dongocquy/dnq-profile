'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiAward, FiMail, FiExternalLink } from 'react-icons/fi';
import { AudioVisualizer } from '@/components/ui/AudioWaveform'
import { MultiLineTypingAnimation } from '@/components/ui/TypingAnimation'
import SocialLinks from '@/components/ui/SocialLinks'
import FlipCard from '@/components/ui/FlipCard'

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hover: { y: -8, scale: 1.02 },
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full opacity-60 animate-floating-particles"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full opacity-50 animate-floating-particles" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-pink-400 rounded-full opacity-70 animate-floating-particles" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-yellow-300 rounded-full opacity-40 animate-floating-particles" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-purple-300 rounded-full opacity-60 animate-floating-particles" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/2 right-1/5 w-3 h-3 bg-pink-300 rounded-full opacity-50 animate-floating-particles" style={{ animationDelay: '5s' }}></div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex min-h-screen flex-col items-center justify-center p-24 relative z-10"
      >
        <div className="text-center mb-16 relative z-10">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-8 flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-2xl animate-glow">
                <Image 
                  src="/images/avatar/1.jpg" 
                  alt="Đỗ Ngọc Quý" 
                  width={192}
                  height={192}
                  className="w-full h-full object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
                <FiAward className="w-5 h-5 text-gray-900" />
              </div>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 whitespace-nowrap"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-luxury-glow animate-luxury-pulse relative">
              Đỗ Ngọc Quý
            </span>
          </motion.h1>
          
          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-8"
          >
            <MultiLineTypingAnimation 
              lines={[
                "Founder & CEO tại RCQ Xuất khẩu Bingo",
                "Chuyên gia AI/ML & Công nghệ Nông nghiệp",
                "10+ năm kinh nghiệm Enterprise Software",
                "Thành công xuất khẩu EU Market"
              ]}
              speed={50}
              delay={500}
              className="text-4xl font-bold bg-gradient-to-r from-red-900 via-red-800 via-yellow-800 to-yellow-700 bg-clip-text text-transparent"
            />
          </motion.div>
          
          {/* Intro Section - New Layout */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mb-12 max-w-6xl mx-auto"
          >
            {/* Main Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-8">
              {/* Left Side - Text */}
              <motion.div
                variants={itemVariants}
                className="text-left"
              >
                <h2 className="font-bold mb-6" style={{ fontSize: '1.35rem' }}>
                  <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Full-Stack Developer & AI/ML Specialist
                  </span>
                </h2>
                <p className="text-lg text-white mb-6 leading-relaxed">
                  Chào mừng đến với portfolio của tôi - Founder & CEO tại Công ty Cổ phần RCQ Xuất khẩu Bingo. 
                  Với hơn 10 năm kinh nghiệm phát triển phần mềm quản lý doanh nghiệp và chuyên môn về công nghệ nông nghiệp.
                  Tôi kết hợp công nghệ AI/ML với nông nghiệp truyền thống để tạo ra những giải pháp đột phá.
                </p>
                
                {/* Favorite Quote */}
                <div className="mb-6 p-4 border-l-4 border-yellow-400 bg-yellow-400/10 rounded-r-lg">
                  <p className="text-xl font-bold text-yellow-300 italic">
                    &ldquo;Nothing Is Impossible&rdquo;
                  </p>
                  <p className="text-sm text-yellow-200 mt-1">
                    — Triết lý sống của tôi
                  </p>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/40 rounded-full text-xs font-medium text-yellow-200">
                    Python & AI/ML
                  </span>
                  <span className="px-3 py-1 bg-purple-400/20 border border-purple-400/40 rounded-full text-xs font-medium text-purple-200">
                    C# & .NET
                  </span>
                  <span className="px-3 py-1 bg-pink-400/20 border border-pink-400/40 rounded-full text-xs font-medium text-pink-200">
                    Go
                  </span>
                  <span className="px-3 py-1 bg-yellow-400/20 border border-yellow-400/40 rounded-full text-xs font-medium text-yellow-200">
                    React & TypeScript
                  </span>
                  <span className="px-3 py-1 bg-purple-400/20 border border-purple-400/40 rounded-full text-xs font-medium text-purple-200">
                    AWS & Docker
                  </span>
                  <span className="px-3 py-1 bg-pink-400/20 border border-pink-400/40 rounded-full text-xs font-medium text-pink-200">
                    Enterprise Software
                  </span>
                </div>
                
                {/* Social Links */}
                <div className="mb-6">
                  <SocialLinks size="sm" variant="minimal" className="justify-start" />
                </div>
              </motion.div>
              
              {/* Right Side - Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-1 gap-4"
              >
                <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-lg p-4 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10">
                  <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">10+</div>
                  <div className="text-white text-xs font-medium">Năm kinh nghiệm</div>
                </div>
                <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-lg p-4 transition-all duration-500 hover:shadow-lg hover:shadow-purple-400/10">
                  <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '0.5s' }}>15+</div>
                  <div className="text-white text-xs font-medium">Dự án nổi bật</div>
                </div>
                <div className="bg-transparent backdrop-blur-sm border border-white/20 rounded-lg p-4 transition-all duration-500 hover:shadow-lg hover:shadow-pink-400/10">
                  <div className="text-2xl font-bold mb-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: '1s' }}>EU</div>
                  <div className="text-white text-xs font-medium">Thị trường xuất khẩu</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Audio Visualizer trong hero section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 w-full -mx-24"
          >
            <div className="w-screen h-52 bg-transparent overflow-visible" style={{ borderRadius: '0' }}>
              <AudioVisualizer />
            </div>
          </motion.div>
        </div>

        {/* Features Grid - Flip Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl w-full mb-20 relative z-10"
        >
          <motion.div variants={cardVariants}>
            <FlipCard
              frontIcon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
              title="AI/ML"
              description="Phát triển hệ thống AI/ML cho công nghệ nông nghiệp và tự động hóa."
            />
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <FlipCard
              frontIcon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Enterprise"
              description="Xây dựng hệ thống ERP và phần mềm quản lý doanh nghiệp quy mô lớn."
            />
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <FlipCard
              frontIcon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
              title="Leadership"
              description="Founder & CEO với kinh nghiệm lãnh đạo và quản lý doanh nghiệp thành công."
            />
          </motion.div>
          
          <motion.div variants={cardVariants}>
            <FlipCard
              frontIcon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              }
              title="Innovation"
              description="Chuyển đổi số ngành nông nghiệp và xuất khẩu thành công sang thị trường EU."
            />
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center relative z-10"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Sẵn sàng <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">hợp tác</span> chưa?
          </h2>
          <p className="text-white mb-8 max-w-2xl mx-auto font-medium">
            Hãy liên hệ ngay để thảo luận về dự án của bạn và tôi sẽ đưa ra những giải pháp tốt nhất.
          </p>
          
          {/* Audio Visualizer trong CTA */}
          <div className="mb-8 w-full -mx-24">
            <div className="w-screen h-48 bg-transparent overflow-visible" style={{ borderRadius: '0' }}>
              <AudioVisualizer />
            </div>
          </div>
          

        </motion.div>
      </motion.div>

    </main>
  )
}
