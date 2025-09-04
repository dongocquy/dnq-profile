'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiServer, FiSmartphone, FiCloud, FiAward, FiTarget, FiTrendingUp, FiUsers, FiGlobe, FiMonitor } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiDjango, SiMongodb, SiDocker, SiGit, SiFlutter } from 'react-icons/si';
import ExperienceTimeline from '@/components/ui/ExperienceTimeline';

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile' | 'ai';
  icon?: React.ReactNode;
  color: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 95, category: 'frontend', icon: <SiReact />, color: 'text-blue-500' },
  { name: 'Next.js', level: 90, category: 'frontend', icon: <SiNextdotjs />, color: 'text-gray-900' },
  { name: 'TypeScript', level: 88, category: 'frontend', icon: <SiTypescript />, color: 'text-blue-600' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend', icon: <SiTailwindcss />, color: 'text-cyan-500' },
  { name: 'HTML/CSS', level: 95, category: 'frontend', icon: <FiCode />, color: 'text-orange-500' },
  { name: 'JavaScript', level: 90, category: 'frontend', icon: <FiCode />, color: 'text-yellow-400' },

  // Backend
  { name: 'Node.js', level: 88, category: 'backend', icon: <SiNodedotjs />, color: 'text-green-600' },
  { name: 'Python', level: 85, category: 'backend', icon: <SiPython />, color: 'text-blue-500' },
  { name: 'Django', level: 80, category: 'backend', icon: <SiDjango />, color: 'text-green-700' },
  { name: 'Express.js', level: 85, category: 'backend', icon: <FiServer />, color: 'text-gray-400' },

  // Database
  { name: 'MongoDB', level: 85, category: 'database', icon: <SiMongodb />, color: 'text-green-500' },
  { name: 'PostgreSQL', level: 80, category: 'database', icon: <FiDatabase />, color: 'text-blue-600' },
  { name: 'MySQL', level: 82, category: 'database', icon: <FiDatabase />, color: 'text-orange-500' },
  { name: 'Redis', level: 75, category: 'database', icon: <FiDatabase />, color: 'text-red-500' },

  // DevOps
  { name: 'Docker', level: 80, category: 'devops', icon: <SiDocker />, color: 'text-blue-500' },
  { name: 'AWS', level: 75, category: 'devops', icon: <FiCloud />, color: 'text-orange-500' },
  { name: 'Git', level: 90, category: 'devops', icon: <SiGit />, color: 'text-orange-600' },
  { name: 'CI/CD', level: 78, category: 'devops', icon: <FiCloud />, color: 'text-purple-500' },

  // Mobile
  { name: 'React Native', level: 85, category: 'mobile', icon: <SiReact />, color: 'text-blue-500' },
  { name: 'Flutter', level: 70, category: 'mobile', icon: <SiFlutter />, color: 'text-blue-600' },

  // AI/ML
  { name: 'Machine Learning', level: 85, category: 'ai', icon: <FiTrendingUp />, color: 'text-purple-500' },
  { name: 'Deep Learning', level: 80, category: 'ai', icon: <FiTarget />, color: 'text-pink-500' },
  { name: 'Computer Vision', level: 75, category: 'ai', icon: <FiGlobe />, color: 'text-green-500' },
];

const categories = [
  { key: 'frontend', label: 'Frontend', icon: <FiCode />, color: 'from-blue-500 to-cyan-500' },
  { key: 'backend', label: 'Backend', icon: <FiServer />, color: 'from-green-500 to-emerald-500' },
  { key: 'database', label: 'Database', icon: <FiDatabase />, color: 'from-purple-500 to-violet-500' },
  { key: 'devops', label: 'DevOps', icon: <FiCloud />, color: 'from-orange-500 to-red-500' },
  { key: 'mobile', label: 'Mobile', icon: <FiSmartphone />, color: 'from-pink-500 to-rose-500' },
  { key: 'ai', label: 'AI/ML', icon: <FiTrendingUp />, color: 'from-purple-500 to-pink-500' },
];



// Component cho hiệu ứng phát sáng nâng cao
const GlowEffect = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Hiệu ứng phát sáng nền */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Hiệu ứng phát sáng viền */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-sm" />
      
      {/* Nội dung */}
      <div className="relative z-10">
        {children}
      </div>
      
      {/* Hiệu ứng phát sáng góc với animation */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm animate-corner-glow" />
      <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm animate-corner-glow" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm animate-corner-glow" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-sm animate-corner-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Hiệu ứng phát sáng bổ sung */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-lg animate-skill-card-glow" />
    </div>
  );
};

export default function SkillsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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

  const getSkillsByCategory = (category: string) => {
    if (category === 'all') return skills;
    return skills.filter(skill => skill.category === category);
  };

  const filteredSkills = getSkillsByCategory(selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Global Background Effects - Extended to cover all sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1),transparent_50%)]" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        >
          <div className="text-center max-w-5xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full mb-12"
            >
              <FiCode className="w-6 h-6 text-yellow-400 mr-3" />
              <span className="text-yellow-400 font-semibold text-sm md:text-base">Kỹ năng & Công nghệ</span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight"
            >
              Kỹ năng của tôi
            </motion.h1>
            
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-3xl mx-auto mb-16"
            >
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed mb-6">
              Chuyên môn sâu rộng trong phát triển web, AI/ML và công nghệ nông nghiệp
              </p>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                Với hơn 10 năm kinh nghiệm, tôi đã phát triển các giải pháp công nghệ tiên tiến 
                cho nhiều lĩnh vực khác nhau, từ ứng dụng web hiện đại đến hệ thống AI/ML phức tạp.
              </p>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16"
            >
              <div className="text-center p-8 bg-gradient-to-br from-yellow-400/10 to-purple-500/10 border border-yellow-400/20 rounded-xl ">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-yellow-400 mb-1">{skills.length}</div>
                <div className="text-gray-300 font-medium text-xs md:text-sm">Công nghệ</div>
                <div className="text-gray-500 text-xs mt-1">Đã thành thạo</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 rounded-xl ">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-purple-400 mb-1">{categories.length}</div>
                <div className="text-gray-300 font-medium text-xs md:text-sm">Lĩnh vực</div>
                <div className="text-gray-500 text-xs mt-1">Chuyên môn</div>
              </div>
              <div className="text-center p-8 bg-gradient-to-br from-pink-500/10 to-yellow-400/10 border border-pink-400/20 rounded-xl ">
                <div className="text-lg md:text-xl lg:text-2xl font-bold text-pink-400 mb-1">10+</div>
                <div className="text-gray-300 font-medium text-xs md:text-sm">Năm kinh nghiệm</div>
                <div className="text-gray-500 text-xs mt-1">Thực tế</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero to Content Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        className="relative py-16 z-10"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-yellow-400/30"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-12">
            <div className="w-28 h-28 bg-gradient-to-r from-yellow-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
              <FiTarget className="w-14 h-14 text-white relative z-10" />
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
              <div className="absolute inset-2 border-4 border-transparent border-t-purple-500 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>
              <div className="absolute inset-4 border-4 border-transparent border-t-pink-500 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
            </div>
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-400 rounded-full opacity-80"
          />
          <motion.div
            animate={{ 
              y: [20, -20, 20],
              x: [10, -10, 10],
              rotate: [360, 180, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-80"
          />
          <motion.div
            animate={{ 
              y: [-15, 15, -15],
              x: [5, -5, 5],
              scale: [1, 1.5, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-400 rounded-full opacity-80"
          />
          <motion.div
            animate={{ 
              y: [15, -15, 15],
              x: [-5, 5, -5],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute top-1/2 right-1/3 w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full opacity-60"
          />
        </div>
      </motion.div>



      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-20"
      >
        <div className="max-w-4xl mx-auto">
          {/* Filter Buttons */}
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-3 bg-gray-800/50 backdrop-blur-sm rounded-3xl p-3 relative z-20">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer relative z-10 ${
                  selectedCategory === 'all'
                    ? 'bg-gradient-to-r from-yellow-400 to-purple-500 text-gray-900 shadow-lg shadow-yellow-400/25 scale-105'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:scale-105'
                }`}
              >
                <FiAward className="w-5 h-5" />
                <span>Tất cả ({skills.length})</span>
              </button>
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key)}
                  className={`flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 cursor-pointer relative z-10 ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-yellow-400 to-purple-500 text-gray-900 shadow-lg shadow-yellow-400/25 scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50 hover:scale-105'
                  }`}
                >
                  {category.icon}
                  <span>{category.label} ({skills.filter(s => s.category === category.key).length})</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        {/* Grid Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
            {selectedCategory === 'all' ? 'Tất cả kỹ năng' : `${categories.find(c => c.key === selectedCategory)?.label} Skills`}
          </h2>
          <p className="text-gray-400 text-sm md:text-base">
            Hiển thị {filteredSkills.length} kỹ năng {selectedCategory !== 'all' ? `trong lĩnh vực ${categories.find(c => c.key === selectedCategory)?.label}` : ''}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thanh kết nối giữa các card */}
              
              
              {/* Skill Card với hiệu ứng phát sáng nâng cao */}
              <GlowEffect>
                <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80   rounded-lg overflow-hidden transition-all duration-500  hover:shadow-lg hover:shadow-yellow-400/10">
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className={`px-2 py-1 text-xs font-bold rounded-full bg-gradient-to-r ${categories.find(c => c.key === skill.category)?.color} text-gray-900`}>
                      {categories.find(c => c.key === skill.category)?.label}
                    </div>
                  </div>

                  {/* Skill Content */}
                  <div className="p-6">
                    {/* Skill Header */}
                    <div className="flex items-center space-x-3 mb-4 mt-2">
                      <div className={`text-xl md:text-2xl ${skill.color}`}>
                        {skill.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                        {skill.name}
                      </h3>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-800 rounded-full h-3 mb-4">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        className="h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full relative overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                      </motion.div>
                    </div>
                    
                    {/* Skill Level and Percentage */}
                    <div className="flex justify-between items-center text-xs md:text-sm">
                      <div className="text-gray-400">
                        <span>Beginner</span>
                      </div>
                      <div className="text-lg md:text-2xl font-bold text-yellow-400">
                        {skill.level}%
                      </div>
                      <div className="text-gray-400">
                        <span>Expert</span>
                      </div>
                    </div>
                  </div>

                  {/* Hiệu ứng phát sáng bổ sung */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                  
                  {/* Hiệu ứng phát sáng viền với animation */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-yellow-400/30 rounded-lg transition-all duration-500 animate-border-glow" />
                </div>
              </GlowEffect>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-3xl md:text-4xl mb-2">🔍</div>
            <h3 className="text-base md:text-lg font-bold text-white mb-1">Không tìm thấy kỹ năng</h3>
            <p className="text-gray-400 text-xs md:text-sm">Hãy thử chọn danh mục khác hoặc quay lại sau.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Section Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="relative py-12 z-10"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
              <FiAward className="w-10 h-10 text-white relative z-10" />
              {/* Rotating ring */}
              <div className="absolute inset-0 border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
            </div>
          </div>
        </div>
        {/* Animated waves */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 w-4 h-4 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.6, 0.3, 0.6]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute top-1/2 right-1/4 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full"
          />
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl p-8 lg:p-12">
            
            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full mb-6"
              >
                <FiAward className="w-5 h-5 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-medium">Kinh nghiệm</span>
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
                Kinh nghiệm làm việc
              </h2>
              
              <div className="relative">
                {/* Timeline Center Line */}
                <div className="timeline-line">
                  {/* Timeline nodes */}
                  <div className="absolute top-0 w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full -translate-x-1/2 animate-ping" />
                  <div className="absolute top-0 w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full -translate-x-1/2" />
                  
                  <div className="absolute top-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -translate-x-1/2 animate-ping" style={{ animationDelay: '0.3s' }} />
                  <div className="absolute top-1/4 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full -translate-x-1/2" />
                  
                  <div className="absolute top-1/2 w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full -translate-x-1/2 animate-ping" style={{ animationDelay: '0.6s' }} />
                  <div className="absolute top-1/2 w-3 h-3 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full -translate-x-1/2" />
                  
                  <div className="absolute top-3/4 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -translate-x-1/2 animate-ping" style={{ animationDelay: '0.9s' }} />
                  <div className="absolute top-3/4 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full -translate-x-1/2" />
                  
                  <div className="absolute bottom-0 w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full -translate-x-1/2 animate-ping" style={{ animationDelay: '1.2s' }} />
                  <div className="absolute bottom-0 w-3 h-3 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full -translate-x-1/2" />
                </div>
                
                {/* Timeline Container with proper spacing */}
                <div className="relative max-w-6xl mx-auto">
                  {[
                    {
                      year: '2023 - Hiện tại',
                      title: 'Founder & CEO',
                      company: 'RCQ Xuất khẩu Bingo',
                      description: 'Lãnh đạo công ty xuất khẩu nông sản, phát triển hệ thống AI/ML cho nông nghiệp và mở rộng thị trường EU.',
                      icon: <FiAward className="w-6 h-6" />,
                      color: 'from-yellow-400 to-purple-500',
                      achievements: ['Phát triển AI/ML cho nông nghiệp', 'Mở rộng thị trường EU', 'Lãnh đạo team 20+ người'],
                      duration: '2 năm'
                    },
                    {
                      year: '2021 - 2023',
                      title: 'Senior Full Stack Developer',
                      company: 'Tech Company',
                      description: 'Phát triển các ứng dụng web hiện đại, mentoring junior developers và tham gia thiết kế kiến trúc hệ thống.',
                      icon: <FiCode className="w-6 h-6" />,
                      color: 'from-purple-500 to-pink-500',
                      achievements: ['Mentoring 5+ junior developers', 'Thiết kế kiến trúc hệ thống', 'Phát triển 10+ ứng dụng web'],
                      duration: '2 năm'
                    },
                    {
                      year: '2019 - 2021',
                      title: 'Full Stack Developer',
                      company: 'Startup',
                      description: 'Xây dựng MVP cho các sản phẩm mới, làm việc với team agile và triển khai CI/CD.',
                      icon: <FiUsers className="w-6 h-6" />,
                      color: 'from-pink-500 to-yellow-400',
                      achievements: ['Xây dựng 5+ MVP', 'Triển khai CI/CD', 'Làm việc Agile/Scrum'],
                      duration: '2 năm'
                    },
                    {
                      year: '2017 - 2019',
                      title: 'Frontend Developer',
                      company: 'Digital Agency',
                      description: 'Chuyên phát triển giao diện người dùng, tối ưu hóa hiệu suất và đảm bảo trải nghiệm người dùng tốt nhất.',
                      icon: <FiMonitor className="w-6 h-6" />,
                      color: 'from-blue-500 to-cyan-500',
                      achievements: ['Phát triển 20+ website', 'Tối ưu hóa performance', 'Responsive design'],
                      duration: '2 năm'
                    }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className={`relative mb-8 md:mb-12 last:mb-0 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                    >
                      {/* Content Card */}
                      <div 
                        className={`${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} w-full max-w-sm lg:max-w-md timeline-card`}
                        style={{ 
                          marginLeft: index % 2 === 0 ? 'auto' : '2rem',
                          marginRight: index % 2 === 0 ? '2rem' : 'auto'
                        }}
                      >
                        <GlowEffect>
                          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-4 md:p-5 transition-all duration-500 group">
                            {/* Header */}
                            <div className={`flex items-start justify-between mb-4 md:mb-5 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                              <div className={`flex items-center space-x-6 md:space-x-8 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-9 h-9 md:w-11 md:h-11 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 mx-2`}>
                                  <div className="text-gray-900 text-sm md:text-lg">
                                    {item.icon}
                                  </div>
                                </div>
                                <div className={`${index % 2 === 0 ? 'text-right' : 'text-left'} px-3`}>
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
                            
                            {/* Achievements Grid */}
                            <div className="grid grid-cols-1 gap-2 md:gap-2.5 mb-4 md:mb-5">
                              {item.achievements.map((achievement, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.4, delay: index * 0.15 + idx * 0.05 }}
                                  className="flex items-center space-x-2 md:space-x-2.5 p-2 md:p-2.5 bg-white/10 rounded-lg transition-all duration-300"
                                >
                                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex-shrink-0"></div>
                                  <span className="text-xs md:text-sm text-gray-300">{achievement}</span>
                                </motion.div>
                              ))}
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="pt-3 md:pt-4 border-t border-white/10">
                              <div className="flex items-center justify-between mb-2 md:mb-2.5">
                                <span className="text-xs md:text-sm text-gray-400">Kinh nghiệm</span>
                                <span className="text-xs md:text-sm text-yellow-400 font-medium">100%</span>
                              </div>
                              <div className="w-full bg-white/20 rounded-full h-1.5 md:h-2">
                                <motion.div
                                  initial={{ width: 0 }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: 1.2, delay: index * 0.2 }}
                                  className="h-1.5 md:h-2 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full"
                                />
                              </div>
                            </div>
                          </div>
                        </GlowEffect>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Section Divider */}
      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative py-12 z-10"
      >
        <div className="absolute inset-0 flex items-center">
          <div className="w-full"></div>
        </div>
        <div className="relative flex justify-center">
          <div className="px-8">
            <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
              <FiUsers className="w-12 h-12 text-white relative z-10" />
              {/* Pulsing effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-full animate-ping opacity-20"></div>
            </div>
          </div>
        </div>
        {/* Geometric shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-1/4 left-1/4 w-6 h-6 border-2 border-yellow-400 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: [360, 0],
              scale: [1.1, 1, 1.1]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-3/4 right-1/4 w-4 h-4 border-2 border-purple-400 transform rotate-45"
          />
          <motion.div
            animate={{ 
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-1/4 left-1/2 w-5 h-5 border-2 border-pink-400 transform rotate-45"
          />
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-800/80 to-gray-900/80   rounded-3xl p-12 text-center">
          
          <div className="relative z-10">
                          <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full mb-6"
              >
              <FiAward className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Hợp tác</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Muốn tìm hiểu thêm về kỹ năng của tôi?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tôi luôn sẵn sàng chia sẻ kiến thức và kinh nghiệm của mình. Hãy liên hệ để thảo luận về dự án của bạn.
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25"
            >
              <span>Liên hệ ngay</span>
              <FiAward className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
