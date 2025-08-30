import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dự án - DNQ Profile',
  description: 'Các dự án đã thực hiện bởi DNQ',
};

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'fullstack';
}

const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Nền tảng thương mại điện tử hiện đại với đầy đủ tính năng thanh toán, quản lý đơn hàng và admin dashboard.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'fullstack',
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Ứng dụng quản lý công việc với giao diện trực quan và tính năng collaboration.',
    image: '/api/placeholder/400/300',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    githubUrl: 'https://github.com',
    category: 'web',
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Ứng dụng ngân hàng di động với bảo mật cao và giao diện thân thiện.',
    image: '/api/placeholder/400/300',
    technologies: ['React Native', 'Firebase', 'Redux'],
    liveUrl: 'https://example.com',
    category: 'mobile',
  },
  {
    id: '4',
    title: 'Portfolio Website',
    description: 'Website portfolio cá nhân với thiết kế hiện đại và responsive.',
    image: '/api/placeholder/400/300',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
  },
];

export default function ProjectsPage() {
  const categories = [
    { key: 'all', label: 'Tất cả' },
    { key: 'web', label: 'Web' },
    { key: 'mobile', label: 'Mobile' },
    { key: 'fullstack', label: 'Full Stack' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Dự án
          </h1>
          <p className="text-xl text-muted-foreground">
            Các dự án tôi đã thực hiện trong thời gian qua
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-card border border-border/40 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category.key}
                className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-card border border-border/40 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Project Image */}
              <div className="aspect-video bg-muted relative">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">Project Image</span>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                    {project.category === 'web' && 'Web'}
                    {project.category === 'mobile' && 'Mobile'}
                    {project.category === 'fullstack' && 'Full Stack'}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-muted hover:bg-muted/80 text-foreground text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground text-center py-2 px-4 rounded text-sm font-medium transition-colors"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card border border-border/40 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Có dự án muốn hợp tác?
            </h2>
            <p className="text-muted-foreground mb-6">
              Tôi luôn sẵn sàng tham gia các dự án thú vị và đầy thách thức.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Liên hệ ngay
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
