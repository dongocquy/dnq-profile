'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiFileText } from 'react-icons/fi';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
    
    // Show success message
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br    rounded-2xl p-8 transition-all duration-500  hover:shadow-lg hover:shadow-yellow-400/10"
    >
      <div className="flex items-center mb-6">
        <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
          <FiSend className="w-6 h-6 text-gray-900" />
        </div>
        <h2 className="text-2xl font-bold text-white">Gửi tin nhắn</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
            <FiUser className="w-4 h-4 mr-2 text-yellow-400" />
            Họ và tên *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3  rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50  transition-all duration-300 "
            placeholder="Nhập họ và tên của bạn"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
            <FiMail className="w-4 h-4 mr-2 text-purple-400" />
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3  rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50  transition-all duration-300 "
            placeholder="Nhập email của bạn"
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
            <FiFileText className="w-4 h-4 mr-2 text-pink-400" />
            Tiêu đề *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3  rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50  transition-all duration-300 "
            placeholder="Nhập tiêu đề tin nhắn"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3 flex items-center">
            <FiMessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
            Nội dung *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3  rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50  transition-all duration-300  resize-none"
            placeholder="Nhập nội dung tin nhắn"
          />
        </div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
              <span>Đang gửi...</span>
            </>
          ) : (
            <>
              <FiSend className="w-5 h-5" />
              <span>Gửi tin nhắn</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  );
}
