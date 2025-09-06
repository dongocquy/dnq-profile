'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiUser, FiMail, FiPhone, FiMapPin, FiAward, FiTarget, FiHeart, FiCode, FiBook, FiGlobe } from 'react-icons/fi';

export default function AboutPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Global Background Effects - Extended to cover all sections */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10"
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full mb-8"
            >
              <FiUser className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Giới thiệu</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 holographic-text animate-cyberpunk-glitch"
            >
              Về tôi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Founder & CEO tại RCQ Xuất khẩu Bingo - Chuyên gia AI/ML & Công nghệ Nông nghiệp
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center space-x-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">10+</div>
                <div className="text-gray-400">Năm kinh nghiệm</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">15+</div>
                <div className="text-gray-400">Dự án thành công</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">EU</div>
                <div className="text-gray-400">Thị trường xuất khẩu</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          {/* Personal Info & About Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Personal Info Card */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-1"
            >
              <div className="relative bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-8 h-full transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10">
                {/* Featured Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="flex items-center space-x-0.5 px-2 py-1 bg-gradient-to-r from-yellow-400 to-purple-500 text-gray-900 text-xs font-bold rounded-full">
                    <FiAward className="w-3 h-3" />
                    <span className="text-xs">Founder & CEO</span>
                  </div>
                </div>

                <div className="flex items-center mb-6 mt-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FiUser className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Thông tin cá nhân</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Basic Info Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center">
                      <FiUser className="w-5 h-5 mr-2" />
                      Thông tin cơ bản
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Họ và tên</div>
                        <div className="text-white font-semibold">Đỗ Ngọc Quý</div>
                      </div>
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Ngày sinh</div>
                        <div className="text-white font-semibold">15/03/1995</div>
                      </div>
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Vị trí</div>
                        <div className="text-white font-semibold">Full Stack Developer</div>
                      </div>
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Kinh nghiệm</div>
                        <div className="text-white font-semibold">10+ năm</div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Info Section */}
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-4 flex items-center">
                      <FiMail className="w-5 h-5 mr-2" />
                      Thông tin liên hệ
                    </h3>
                    <div className="space-y-3">
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Email</div>
                        <div className="text-white font-semibold">dnq@gmail.com</div>
                      </div>
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Số điện thoại</div>
                        <div className="text-white font-semibold">+84 123 456 789</div>
                      </div>
                      <div className="bg-transparent backdrop-blur-sm border border-white/10 p-4 rounded-xl backdrop-blur-sm">
                        <div className="text-sm text-gray-400 mb-1">Địa chỉ</div>
                        <div className="text-white font-semibold">Hà Nội, Việt Nam</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>

            {/* About Me Section */}
            <motion.div
              variants={cardVariants}
              className="lg:col-span-2 space-y-8"
            >
              {/* About Me Card */}
              <div className="relative bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FiCode className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Về tôi</h2>
                </div>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="p-4 rounded-xl backdrop-blur-sm">
                    Tôi là Founder & CEO tại Công ty Cổ phần RCQ Xuất khẩu Bingo, với hơn 10 năm kinh nghiệm phát triển phần mềm quản lý doanh nghiệp và chuyên môn về công nghệ nông nghiệp.
                  </p>
                  <p className="p-4 bg-transparent backdrop-blur-sm border border-white/10 rounded-xl backdrop-blur-sm">
                    Tôi kết hợp công nghệ AI/ML với nông nghiệp truyền thống để tạo ra những giải pháp đột phá, giúp doanh nghiệp tối ưu hóa quy trình sản xuất và xuất khẩu.
                  </p>
                  <p className="p-4 bg-transparent backdrop-blur-sm border border-white/10 rounded-xl backdrop-blur-sm">
                    Với kiến thức sâu rộng về cả frontend và backend, tôi có thể xây dựng các giải pháp hoàn chỉnh từ ý tưởng đến triển khai sản phẩm, đặc biệt trong lĩnh vực Enterprise Software.
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>

              {/* Goals Card */}
              <div className="relative bg-transparent backdrop-blur-sm border border-white/20 rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <FiTarget className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Mục tiêu</h2>
                </div>
                
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p className="p-4 bg-transparent backdrop-blur-sm border border-white/10 rounded-xl backdrop-blur-sm">
                    Mục tiêu của tôi là trở thành một chuyên gia hàng đầu trong lĩnh vực AI/ML và công nghệ nông nghiệp, tạo ra những sản phẩm có giá trị cao và đóng góp tích cực cho ngành nông nghiệp Việt Nam.
                  </p>
                  <p className="p-4 bg-transparent backdrop-blur-sm border border-white/10 rounded-xl backdrop-blur-sm">
                    Tôi mong muốn mở rộng thị trường xuất khẩu sang EU và các thị trường khác, đồng thời chia sẻ kinh nghiệm và kiến thức với cộng đồng startup và doanh nghiệp Việt Nam.
                  </p>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>
          </div>

          {/* Interests Section */}
          <motion.div
            variants={cardVariants}
            className="relative bg-transparent backdrop-blur-sm border border-white/20  rounded-2xl p-8 transition-all duration-500  hover:shadow-lg hover:shadow-yellow-400/10"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-xl flex items-center justify-center mr-4">
                <FiHeart className="w-6 h-6 text-gray-900" />
              </div>
              <h2 className="text-2xl font-bold text-white">Sở thích & Đam mê</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <FiCode className="w-8 h-8" />, text: 'Lập trình và phát triển web', color: 'text-yellow-400' },
                { icon: <FiGlobe className="w-8 h-8" />, text: 'Học hỏi công nghệ mới', color: 'text-purple-400' },
                { icon: <FiBook className="w-8 h-8" />, text: 'Đọc sách và nghiên cứu', color: 'text-pink-400' },
                { icon: <FiAward className="w-8 h-8" />, text: 'Khởi nghiệp và kinh doanh', color: 'text-yellow-400' }
              ].map((interest, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="p-6 bg-transparent backdrop-blur-sm border border-white/10  rounded-xl backdrop-blur-sm text-center transition-all duration-300 hover:scale-110  group"
                >
                  <div className={`mb-3 group-hover:animate-bounce ${interest.color}`}>
                    {interest.icon}
                  </div>
                  <p className="text-gray-300 font-medium">{interest.text}</p>
                </motion.div>
              ))}
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </motion.div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm  rounded-3xl p-12 text-center">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(212,175,55,0.1),transparent_50%)]" />
          
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
              Muốn tìm hiểu thêm về tôi?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Hãy xem các dự án của tôi hoặc liên hệ để thảo luận về cơ hội hợp tác.
            </p>
            
            <div className="flex gap-4 justify-center">
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 animate-magnetic-hover hover-glow"
              >
                <span className="animate-neon-glow">Xem dự án</span>
                <FiAward className="w-5 h-5 animate-rotate-scale animate-particle-explosion" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
