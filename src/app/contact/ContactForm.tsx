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
  const [focusedField, setFocusedField] = useState<string>('');

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

  const inputVariants = {
    initial: { scale: 1, y: 0 },
    focus: { scale: 1.02, y: -2 },
    hover: { scale: 1.01, y: -1 }
  };

  const labelVariants = {
    initial: { color: '#9CA3AF' },
    focus: { color: '#FBBF24' },
    filled: { color: '#FBBF24' }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-gradient-to-br from-gray-900/80 via-purple-900/60 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10 border border-gray-700/50"
    >
      <div className="flex items-center mb-6">
        <motion.div 
          className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center mr-4"
          whileHover={{ rotate: 5, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FiSend className="w-6 h-6 text-gray-900" />
        </motion.div>
        <h2 className="text-2xl font-bold text-white">Gửi tin nhắn</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial="initial"
          animate={focusedField === 'name' ? 'focus' : formData.name ? 'filled' : 'initial'}
          variants={inputVariants}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.label 
            htmlFor="name" 
            className="block text-sm font-medium mb-3 flex items-center cursor-pointer"
            variants={labelVariants}
          >
            <motion.div
              animate={{ rotate: focusedField === 'name' ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiUser className="w-4 h-4 mr-2 text-yellow-400" />
            </motion.div>
            Họ và tên *
          </motion.label>
          <motion.input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:bg-white/10 border border-gray-600/50 transition-all duration-300 backdrop-blur-sm"
            placeholder="Nhập họ và tên của bạn"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate={focusedField === 'email' ? 'focus' : formData.email ? 'filled' : 'initial'}
          variants={inputVariants}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.label 
            htmlFor="email" 
            className="block text-sm font-medium mb-3 flex items-center cursor-pointer"
            variants={labelVariants}
          >
            <motion.div
              animate={{ rotate: focusedField === 'email' ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiMail className="w-4 h-4 mr-2 text-purple-400" />
            </motion.div>
            Email *
          </motion.label>
          <motion.input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:bg-white/10 border border-gray-600/50 transition-all duration-300 backdrop-blur-sm"
            placeholder="Nhập email của bạn"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate={focusedField === 'subject' ? 'focus' : formData.subject ? 'filled' : 'initial'}
          variants={inputVariants}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.label 
            htmlFor="subject" 
            className="block text-sm font-medium mb-3 flex items-center cursor-pointer"
            variants={labelVariants}
          >
            <motion.div
              animate={{ rotate: focusedField === 'subject' ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiFileText className="w-4 h-4 mr-2 text-pink-400" />
            </motion.div>
            Tiêu đề *
          </motion.label>
          <motion.input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            onFocus={() => setFocusedField('subject')}
            onBlur={() => setFocusedField('')}
            required
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400/50 focus:bg-white/10 border border-gray-600/50 transition-all duration-300 backdrop-blur-sm"
            placeholder="Nhập tiêu đề tin nhắn"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.div
          initial="initial"
          animate={focusedField === 'message' ? 'focus' : formData.message ? 'filled' : 'initial'}
          variants={inputVariants}
          whileHover="hover"
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.label 
            htmlFor="message" 
            className="block text-sm font-medium mb-3 flex items-center cursor-pointer"
            variants={labelVariants}
          >
            <motion.div
              animate={{ rotate: focusedField === 'message' ? 10 : 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FiMessageSquare className="w-4 h-4 mr-2 text-yellow-400" />
            </motion.div>
            Nội dung *
          </motion.label>
          <motion.textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onFocus={() => setFocusedField('message')}
            onBlur={() => setFocusedField('')}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-xl bg-white/5 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:bg-white/10 border border-gray-600/50 transition-all duration-300 backdrop-blur-sm resize-none"
            placeholder="Nhập nội dung tin nhắn"
            whileFocus={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ 
            scale: 1.02,
            boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.3), 0 10px 10px -5px rgba(251, 191, 36, 0.2)"
          }}
          whileTap={{ scale: 0.98 }}
          className="w-full px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 relative overflow-hidden group"
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          {isSubmitting ? (
            <>
              <motion.div 
                className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span>Đang gửi...</span>
            </>
          ) : (
            <>
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FiSend className="w-5 h-5" />
              </motion.div>
              <span>Gửi tin nhắn</span>
            </>
          )}
        </motion.button>
      </form>

      {/* Enhanced Glow Effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
        animate={{ 
          background: [
            "linear-gradient(45deg, rgba(251, 191, 36, 0.05), rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05))",
            "linear-gradient(45deg, rgba(236, 72, 153, 0.05), rgba(251, 191, 36, 0.05), rgba(168, 85, 247, 0.05))",
            "linear-gradient(45deg, rgba(168, 85, 247, 0.05), rgba(236, 72, 153, 0.05), rgba(251, 191, 36, 0.05))"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
