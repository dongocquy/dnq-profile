'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiTwitter, FiClock, FiAward, FiUsers, FiGlobe, FiMessageSquare } from 'react-icons/fi';
import ContactForm from './ContactForm';
import { CommentSection } from '@/components/ui/Comment';

export default function ContactPage() {
  // Sample comments data
  const [comments, setComments] = useState([
    {
      id: '1',
      author: 'Nguyễn Văn A',
      avatar: 'N',
      content: 'Trang web rất đẹp và chuyên nghiệp! Tôi rất ấn tượng với thiết kế và hiệu ứng animation.',
      timestamp: '2 giờ trước',
      likes: 5,
      isLiked: false,
      replies: [
        {
          id: '1-1',
          author: 'Đỗ Ngọc Quý',
          avatar: 'Q',
          content: 'Cảm ơn bạn đã ghé thăm! Tôi rất vui khi nhận được phản hồi tích cực.',
          timestamp: '1 giờ trước',
          likes: 3,
          isLiked: true,
        }
      ]
    },
    {
      id: '2',
      author: 'Trần Thị B',
      avatar: 'T',
      content: 'Bạn có thể chia sẻ thêm về các dự án đã làm không? Tôi quan tâm đến việc hợp tác.',
      timestamp: '1 ngày trước',
      likes: 2,
      isLiked: false,
    },
    {
      id: '3',
      author: 'Lê Văn C',
      avatar: 'L',
      content: 'Kỹ năng React và Next.js của bạn thật tuyệt vời! Có thể tư vấn thêm về việc học các công nghệ này không?',
      timestamp: '3 ngày trước',
      likes: 8,
      isLiked: false,
    }
  ]);

  const contactInfo = [
    {
      title: 'Email',
      value: 'dnq@gmail.com',
      icon: <FiMail className="w-6 h-6" />,
      color: 'from-yellow-400 to-purple-500'
    },
    {
      title: 'Phone',
      value: '+84 123 456 789',
      icon: <FiPhone className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Địa chỉ',
      value: 'Hà Nội, Việt Nam',
      icon: <FiMapPin className="w-6 h-6" />,
      color: 'from-pink-500 to-yellow-400'
    },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      icon: <FiGithub className="w-6 h-6" />,
      color: 'from-gray-600 to-gray-800'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <FiLinkedin className="w-6 h-6" />,
      color: 'from-blue-600 to-blue-800'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <FiTwitter className="w-6 h-6" />,
      color: 'from-blue-400 to-blue-600'
    },
  ];

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

  // Comment handlers
  const handleAddComment = (content: string) => {
    const newComment = {
      id: Date.now().toString(),
      author: 'Khách',
      avatar: 'K',
      content,
      timestamp: 'Vừa xong',
      likes: 0,
      isLiked: false,
    };
    setComments(prev => [newComment, ...prev]);
  };

  const handleLikeComment = (id: string) => {
    setComments(prev => 
      prev.map(comment => {
        if (comment.id === id) {
          return {
            ...comment,
            likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
            isLiked: !comment.isLiked,
          };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map(reply => {
              if (reply.id === id) {
                return {
                  ...reply,
                  likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                  isLiked: !reply.isLiked,
                };
              }
              return reply;
            }),
          };
        }
        return comment;
      })
    );
  };

  const handleReplyComment = (id: string) => {
    // In a real app, this would open a reply form
    console.log('Reply to comment:', id);
  };

  const handleEditComment = (id: string, content: string) => {
    setComments(prev => 
      prev.map(comment => {
        if (comment.id === id) {
          return { ...comment, content };
        }
        if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.map(reply => 
              reply.id === id ? { ...reply, content } : reply
            ),
          };
        }
        return comment;
      })
    );
  };

  const handleDeleteComment = (id: string) => {
    setComments(prev => 
      prev.filter(comment => {
        if (comment.id === id) return false;
        if (comment.replies) {
          return {
            ...comment,
            replies: comment.replies.filter(reply => reply.id !== id),
          };
        }
        return true;
      })
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Global Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-pink-900/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(147,51,234,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-800/30 to-gray-900/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-purple-900/10 to-transparent" />
      
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
              <FiMail className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Liên hệ</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Liên hệ với tôi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Hãy liên hệ để trao đổi về dự án hoặc cơ hội hợp tác
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center space-x-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">24/7</div>
                <div className="text-gray-400">Sẵn sàng</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-gray-400">Phản hồi</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">EU</div>
                <div className="text-gray-400">Thị trường</div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              variants={cardVariants}
              className="space-y-8"
            >
              {/* Contact Info Card */}
              <div className="relative bg-gradient-to-br    rounded-2xl p-8 transition-all duration-500  hover:shadow-lg hover:shadow-yellow-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-xl flex items-center justify-center mr-4">
                    <FiUsers className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Thông tin liên hệ</h2>
                </div>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="flex items-center space-x-4 p-4 bg-white/10  rounded-xl   transition-all duration-300"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-gray-900`}>
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-medium text-white">{info.title}</h3>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>

              {/* Social Links Card */}
              <div className="relative bg-gradient-to-br    rounded-2xl p-8 transition-all duration-500  hover:shadow-lg hover:shadow-yellow-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                    <FiGlobe className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Mạng xã hội</h2>
                </div>
                
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-14 h-14 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>

              {/* Working Hours Card */}
              <div className="relative bg-gradient-to-br    rounded-2xl p-8 transition-all duration-500  hover:shadow-lg hover:shadow-yellow-400/10">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-yellow-400 rounded-xl flex items-center justify-center mr-4">
                    <FiClock className="w-6 h-6 text-gray-900" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Thời gian làm việc</h2>
                </div>
                
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between items-center p-3 bg-white/10  rounded-lg">
                    <span>Thứ 2 - Thứ 6</span>
                    <span className="text-yellow-400 font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10  rounded-lg">
                    <span>Thứ 7</span>
                    <span className="text-purple-400 font-medium">9:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/10  rounded-lg">
                    <span>Chủ nhật</span>
                    <span className="text-pink-400 font-medium">Nghỉ</span>
                  </div>
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={cardVariants}
              className="relative"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Comments Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-yellow-400/20 to-purple-500/20 border border-yellow-400/30 rounded-full mb-6">
              <FiMessageSquare className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Bình luận</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Chia sẻ ý kiến của bạn
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Hãy để lại bình luận, góp ý hoặc câu hỏi. Tôi rất mong nhận được phản hồi từ bạn!
            </p>
          </motion.div>

          <CommentSection
            comments={comments}
            onAddComment={handleAddComment}
            onLike={handleLikeComment}
            onReply={handleReplyComment}
            onEdit={handleEditComment}
            onDelete={handleDeleteComment}
          />
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20 relative z-10"
      >
        <div className="relative overflow-hidden bg-gradient-to-r    rounded-3xl p-12 text-center">
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
              Sẵn sàng bắt đầu dự án?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Tôi luôn sẵn sàng lắng nghe ý tưởng của bạn và đưa ra những giải pháp tốt nhất cho dự án.
            </p>
            
            <motion.a
              href="mailto:dnq@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-yellow-400/25"
            >
              <span>Gửi email ngay</span>
              <FiMail className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
