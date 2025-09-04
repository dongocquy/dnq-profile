'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft, FiSearch } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-pink-400/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-9xl md:text-[12rem] font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl animate-luxury-glow">
              404
            </span>
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Trang không tồn tại
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg text-gray-300 mb-8 max-w-md mx-auto"
          >
            Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được di chuyển.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 flex items-center space-x-2"
              >
                <FiHome className="w-5 h-5" />
                <span>Về trang chủ</span>
              </motion.button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <FiArrowLeft className="w-5 h-5" />
              <span>Quay lại</span>
            </button>
          </motion.div>

          {/* Search Suggestion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <FiSearch className="w-5 h-5 text-yellow-400" />
              <h3 className="text-lg font-semibold text-white">Tìm kiếm nhanh</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Link href="/about" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                Giới thiệu
              </Link>
              <Link href="/projects" className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                Dự án
              </Link>
              <Link href="/skills" className="text-pink-400 hover:text-pink-300 transition-colors duration-200">
                Kỹ năng
              </Link>
              <Link href="/contact" className="text-yellow-400 hover:text-yellow-300 transition-colors duration-200">
                Liên hệ
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
