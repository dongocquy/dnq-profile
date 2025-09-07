'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode, FiSmartphone, FiGlobe, FiStar, FiAward } from 'react-icons/fi';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiMongodb, SiFirebase, SiPrisma } from 'react-icons/si';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: { name: string; icon: React.ReactNode; color: string }[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'fullstack' | 'ai';
  featured: boolean;
  year: string;
  status: 'completed' | 'in-progress' | 'planned';
  stats: {
    stars?: number;
    downloads?: number;
    users?: number;
  };
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Luxury Platform',
    description: 'Nền tảng thương mại điện tử cao cấp với AI-powered recommendations',
    longDescription: 'Một nền tảng thương mại điện tử hiện đại tích hợp AI để phân tích hành vi người dùng và đưa ra gợi ý sản phẩm thông minh. Hệ thống bao gồm quản lý đơn hàng, thanh toán bảo mật, và dashboard admin với analytics chi tiết.',
    image: '/api/placeholder/400/300',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
      { name: 'Prisma', icon: <SiPrisma />, color: 'text-blue-800' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'fullstack',
    featured: true,
    year: '2024',
    status: 'completed',
    stats: {
      users: 1500,
      stars: 89,
    },
  },
  {
    id: '2',
    title: 'AI-Powered Task Manager',
    description: 'Ứng dụng quản lý công việc thông minh với AI assistant',
    longDescription: 'Ứng dụng quản lý công việc tiên tiến sử dụng AI để tự động phân loại task, ước tính thời gian hoàn thành, và đưa ra gợi ý tối ưu hóa workflow. Tích hợp với các công cụ phổ biến và hỗ trợ collaboration real-time.',
    image: '/api/placeholder/400/300',
    technologies: [
      { name: 'React', icon: <SiReact />, color: 'text-blue-500' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    ],
    githubUrl: 'https://github.com',
    category: 'ai',
    featured: true,
    year: '2024',
    status: 'in-progress',
    stats: {
      downloads: 2500,
      users: 800,
    },
  },
  {
    id: '3',
    title: 'Mobile Banking Suite',
    description: 'Ứng dụng ngân hàng di động với bảo mật blockchain',
    longDescription: 'Ứng dụng ngân hàng di động thế hệ mới với tích hợp blockchain để bảo mật giao dịch. Bao gồm tính năng chuyển tiền, đầu tư, và quản lý tài chính cá nhân với giao diện thân thiện và bảo mật cao.',
    image: '/api/placeholder/400/300',
    technologies: [
      { name: 'React Native', icon: <SiReact />, color: 'text-blue-500' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'text-orange-500' },
    ],
    liveUrl: 'https://example.com',
    category: 'mobile',
    featured: false,
    year: '2023',
    status: 'completed',
    stats: {
      users: 5000,
      downloads: 12000,
    },
  },
  {
    id: '4',
    title: 'Portfolio Showcase',
    description: 'Website portfolio cá nhân với thiết kế 3D và animations',
    longDescription: 'Website portfolio cá nhân với thiết kế 3D hiện đại, animations mượt mà và trải nghiệm người dùng tối ưu. Tích hợp với CMS để dễ dàng cập nhật nội dung và SEO friendly.',
    image: '/api/placeholder/400/300',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900' },
      { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-500' },
    ],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
    featured: false,
    year: '2024',
    status: 'completed',
    stats: {
      stars: 45,
    },
  },
  {
    id: '5',
    title: 'Real-time Chat Platform',
    description: 'Nền tảng chat real-time với video call và file sharing',
    longDescription: 'Nền tảng chat real-time hiện đại với khả năng video call, chia sẻ file, và collaboration tools. Hỗ trợ end-to-end encryption và tích hợp với các dịch vụ cloud.',
    image: '/api/placeholder/400/300',
    technologies: [
      { name: 'React', icon: <SiReact />, color: 'text-blue-500' },
      { name: 'Node.js', icon: <SiNodedotjs />, color: 'text-green-600' },
      { name: 'MongoDB', icon: <SiMongodb />, color: 'text-green-500' },
    ],
    githubUrl: 'https://github.com',
    category: 'web',
    featured: false,
    year: '2023',
    status: 'completed',
    stats: {
      users: 2000,
      stars: 67,
    },
  },
  {
    id: '6',
    title: 'AI Content Generator',
    description: 'Công cụ tạo nội dung AI với NLP và machine learning',
    longDescription: 'Công cụ tạo nội dung thông minh sử dụng NLP và machine learning để tạo ra nội dung chất lượng cao. Hỗ trợ đa ngôn ngữ và tích hợp với các platform phổ biến.',
    image: '/api/placeholder/400/300',
    technologies: [
      { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-gray-900' },
      { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-600' },
      { name: 'Firebase', icon: <SiFirebase />, color: 'text-orange-500' },
    ],
    githubUrl: 'https://github.com',
    category: 'ai',
    featured: true,
    year: '2024',
    status: 'in-progress',
    stats: {
      users: 300,
    },
  },
];

const categories = [
  { key: 'all', label: 'Tất cả', icon: <FiCode className="w-4 h-4" /> },
  { key: 'web', label: 'Web App', icon: <FiGlobe className="w-4 h-4" /> },
  { key: 'mobile', label: 'Mobile', icon: <FiSmartphone className="w-4 h-4" /> },
  { key: 'fullstack', label: 'Full Stack', icon: <FiCode className="w-4 h-4" /> },
  { key: 'ai', label: 'AI/ML', icon: <FiStar className="w-4 h-4" /> },
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

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
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    hover: { y: -8, scale: 1.02 },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
      {/* Global Background Effects */}
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
              <FiAward className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Portfolio Projects</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6 holographic-text animate-neural-pulse"
            >
              Dự án của tôi
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              Khám phá các dự án đã thực hiện với công nghệ hiện đại và thiết kế sang trọng
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex justify-center space-x-8 mb-12"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400">{projects.length}</div>
                <div className="text-gray-400">Dự án</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {projects.filter(p => p.featured).length}
                </div>
                <div className="text-gray-400">Nổi bật</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">
                  {projects.filter(p => p.status === 'completed').length}
                </div>
                <div className="text-gray-400">Hoàn thành</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Filter Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16 relative z-20"
      >
        <div className="flex justify-center px-2">
          <div className="flex flex-wrap justify-center gap-1 sm:gap-2 bg-transparent backdrop-blur-sm border border-white/10 backdrop-blur-sm rounded-2xl p-1 sm:p-2 relative z-20 w-full max-w-4xl">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category.key)}
                className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 cursor-pointer relative z-10 text-sm sm:text-sm lg:text-base whitespace-nowrap ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-yellow-400 to-purple-500 text-gray-900 shadow-lg shadow-yellow-400/25'
                    : 'text-gray-400 hover:text-white hover:bg-transparent backdrop-blur-sm border border-white/10'
                }`}
              >
                <span className="text-base sm:text-lg">{category.icon}</span>
                <span className="text-sm sm:text-sm lg:text-base">{category.label}</span>
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-12 relative z-10"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                exit="hidden"
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Card */}
                <div className="relative bg-transparent backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10 w-full mx-auto hover-lift animate-parallax-float hover-glow">
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-2 left-2 z-10">
                      <div className="flex items-center space-x-0.5 px-1.5 py-0.5 bg-gradient-to-r from-yellow-400 to-purple-500 text-gray-900 text-xs font-bold rounded-full">
                        <FiStar className="w-2.5 h-2.5" />
                        <span className="text-xs">Featured</span>
                      </div>
                    </div>
                  )}

                  {/* Status Badge */}
                  <div className="absolute top-2 right-2 z-10">
                    <div className={`px-1.5 py-0.5 text-xs font-bold rounded-full ${
                      project.status === 'completed' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : project.status === 'in-progress'
                        ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {project.status === 'completed' ? 'Hoàn thành' : 
                       project.status === 'in-progress' ? 'Đang phát triển' : 'Dự kiến'}
                    </div>
                  </div>

                  {/* Project Image */}
                  <div className="relative h-24 sm:h-28 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-pink-500/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-3xl text-gray-600 group-hover:text-yellow-400 transition-colors duration-300">
                        {project.technologies[0]?.icon}
                      </div>
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className="p-2.5 sm:p-3">
                    {/* Year */}
                    <div className="text-xs text-gray-500 mb-1">{project.year}</div>
                    
                    {/* Title */}
                    <h3 className="text-sm font-bold text-white mb-1.5 group-hover:text-yellow-400 transition-colors duration-300 line-clamp-2">
                      {project.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xs leading-relaxed mb-2 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-2">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 2).map((tech, idx) => (
                          <div
                            key={tech.name}
                            className="flex items-center space-x-0.5 px-1 py-0.5 bg-transparent backdrop-blur-sm border border-white/10 rounded text-xs"
                          >
                            <span className={tech.color}>{tech.icon}</span>
                            <span className="text-gray-300 text-xs">{tech.name}</span>
                          </div>
                        ))}
                        {project.technologies.length > 2 && (
                          <div className="px-1 py-0.5 bg-transparent backdrop-blur-sm border border-white/10 rounded text-xs text-gray-400">
                            +{project.technologies.length - 2}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Stats */}
                    {project.stats && (
                      <div className="flex items-center space-x-2 mb-2 text-xs text-gray-500">
                        {project.stats.stars && (
                          <div className="flex items-center space-x-0.5">
                            <FiStar className="w-2.5 h-2.5" />
                            <span className="text-xs">{project.stats.stars}</span>
                          </div>
                        )}
                        {project.stats.users && (
                          <div className="flex items-center space-x-0.5">
                            <FiGlobe className="w-2.5 h-2.5" />
                            <span className="text-xs">{project.stats.users.toLocaleString()}</span>
                          </div>
                        )}
                        {project.stats.downloads && (
                          <div className="flex items-center space-x-0.5">
                            <FiSmartphone className="w-2.5 h-2.5" />
                            <span className="text-xs">{project.stats.downloads.toLocaleString()}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row space-y-1 sm:space-y-0 sm:space-x-1.5">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-1 px-2 py-1.5 bg-transparent backdrop-blur-sm border border-white/10 hover:bg-gray-700/50 text-gray-300 hover:text-yellow-400 rounded text-xs font-medium transition-all duration-300"
                        >
                          <FiGithub className="w-3 h-3" />
                          <span className="text-xs">GitHub</span>
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-1 px-2 py-1.5 bg-gradient-to-r from-yellow-400 to-purple-500 hover:from-yellow-500 hover:to-purple-600 text-gray-900 font-medium rounded text-xs transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                          <FiExternalLink className="w-3 h-3" />
                          <span className="text-xs">Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-lg font-bold text-white mb-1">Không tìm thấy dự án</h3>
            <p className="text-gray-400 text-sm">Hãy thử chọn danh mục khác hoặc quay lại sau.</p>
          </motion.div>
        )}
      </motion.div>

      {/* Testimonials Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pb-20"
      >
        <div className="relative overflow-hidden bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-3xl p-12">
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
              <FiStar className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-yellow-400 font-medium">Testimonials</span>
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
              Khách hàng nói gì về tôi?
            </h2>
            <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl mx-auto">
              Những phản hồi tích cực từ khách hàng và đối tác đã hợp tác cùng tôi
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Nguyễn Văn An",
                  position: "CEO - TechStart Vietnam",
                  company: "Công ty Cổ phần TechStart",
                  content: "Đỗ Ngọc Quý là một developer xuất sắc với khả năng tư duy logic và giải quyết vấn đề rất tốt. Dự án AI-powered platform mà anh ấy xây dựng cho chúng tôi đã vượt quá mong đợi.",
                  rating: 5,
                  project: "AI-Powered Task Manager"
                },
                {
                  name: "Trần Thị Bình",
                  position: "Product Manager",
                  company: "E-commerce Solutions",
                  content: "Làm việc với Quý rất chuyên nghiệp và hiệu quả. Anh ấy không chỉ code tốt mà còn đưa ra nhiều gợi ý cải tiến sản phẩm rất có giá trị.",
                  rating: 5,
                  project: "E-commerce Luxury Platform"
                },
                {
                  name: "Lê Minh Cường",
                  position: "CTO - Banking Solutions",
                  company: "Digital Banking Corp",
                  content: "Dự án Mobile Banking Suite mà Quý thực hiện cho chúng tôi rất ấn tượng. Anh ấy có kiến thức sâu rộng về bảo mật và blockchain.",
                  rating: 5,
                  project: "Mobile Banking Suite"
                },
                {
                  name: "Phạm Thị Dung",
                  position: "Founder & CEO",
                  company: "ContentAI Startup",
                  content: "Quý đã giúp chúng tôi xây dựng AI Content Generator từ ý tưởng đến sản phẩm hoàn chỉnh. Kết quả vượt quá mong đợi!",
                  rating: 5,
                  project: "AI Content Generator"
                },
                {
                  name: "Hoàng Văn Em",
                  position: "Technical Lead",
                  company: "Communication Tech",
                  content: "Real-time Chat Platform mà Quý phát triển có hiệu suất rất tốt và giao diện người dùng tuyệt vời. Rất hài lòng với sự hợp tác.",
                  rating: 5,
                  project: "Real-time Chat Platform"
                },
                {
                  name: "Vũ Thị Phương",
                  position: "Marketing Director",
                  company: "Creative Agency",
                  content: "Portfolio Showcase mà Quý tạo ra cho chúng tôi rất chuyên nghiệp và hiện đại. Khách hàng rất ấn tượng với thiết kế.",
                  rating: 5,
                  project: "Portfolio Showcase"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-400/10 hover:scale-105"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-yellow-400/30">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                    </svg>
                  </div>

                  {/* Rating Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Project Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 bg-yellow-400/20 border border-yellow-400/30 rounded-full text-xs text-yellow-300">
                      <FiCode className="w-3 h-3 mr-1" />
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-gray-900 font-bold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-gray-400 text-xs">{testimonial.position}</div>
                      <div className="text-yellow-400 text-xs">{testimonial.company}</div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                </motion.div>
              ))}
            </div>

            {/* Bottom Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-12 text-center"
            >
              <div className="inline-flex items-center space-x-8 bg-transparent backdrop-blur-sm border border-white/10 backdrop-blur-sm rounded-2xl px-8 py-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400">100%</div>
                  <div className="text-gray-400 text-sm">Khách hàng hài lòng</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">5.0</div>
                  <div className="text-gray-400 text-sm">Đánh giá trung bình</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-400">50+</div>
                  <div className="text-gray-400 text-sm">Dự án hoàn thành</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
