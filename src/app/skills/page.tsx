import type { Metadata } from 'next';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Timeline } from '@/components/ui/Timeline';

export const metadata: Metadata = {
  title: 'Kỹ năng - DNQ Profile',
  description: 'Kỹ năng và công nghệ mà DNQ thành thạo',
};

interface Skill {
  name: string;
  level: number; // 0-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'mobile';
  icon?: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'React', level: 88, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Vue.js', level: 80, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Sass/SCSS', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 88, category: 'backend' },
  { name: 'Python', level: 80, category: 'backend' },
  { name: 'Django', level: 75, category: 'backend' },
  { name: 'PHP', level: 70, category: 'backend' },
  { name: 'Laravel', level: 72, category: 'backend' },

  // Database
  { name: 'MySQL', level: 85, category: 'database' },
  { name: 'PostgreSQL', level: 80, category: 'database' },
  { name: 'MongoDB', level: 75, category: 'database' },
  { name: 'Redis', level: 70, category: 'database' },

  // DevOps
  { name: 'Docker', level: 75, category: 'devops' },
  { name: 'Git', level: 90, category: 'devops' },
  { name: 'AWS', level: 70, category: 'devops' },
  { name: 'CI/CD', level: 75, category: 'devops' },

  // Mobile
  { name: 'React Native', level: 80, category: 'mobile' },
  { name: 'Flutter', level: 65, category: 'mobile' },
];

const categories = [
  { key: 'frontend', label: 'Frontend', color: 'bg-blue-500' },
  { key: 'backend', label: 'Backend', color: 'bg-green-500' },
  { key: 'database', label: 'Database', color: 'bg-purple-500' },
  { key: 'devops', label: 'DevOps', color: 'bg-orange-500' },
  { key: 'mobile', label: 'Mobile', color: 'bg-pink-500' },
];

export default function SkillsPage() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Kỹ năng
          </h1>
          <p className="text-xl text-muted-foreground">
            Các công nghệ và kỹ năng tôi thành thạo
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => {
            const categorySkills = getSkillsByCategory(category.key);
            
            return (
              <div key={category.key} className="bg-card border border-border/40 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`w-4 h-4 rounded-full ${category.color}`}></div>
                  <h2 className="text-2xl font-semibold text-foreground">
                    {category.label}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {categorySkills.map((skill) => (
                    <div key={skill.name}>
                      <ProgressBar
                        value={skill.level}
                        showLabel={true}
                        label={skill.name}
                        animate={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Experience Timeline */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Kinh nghiệm làm việc
          </h2>
          
          <Timeline
            items={[
              {
                year: '2023 - Hiện tại',
                title: 'Senior Full Stack Developer',
                company: 'Tech Company',
                description: 'Phát triển các ứng dụng web hiện đại, mentoring junior developers và tham gia thiết kế kiến trúc hệ thống.',
              },
              {
                year: '2021 - 2023',
                title: 'Full Stack Developer',
                company: 'Startup',
                description: 'Xây dựng MVP cho các sản phẩm mới, làm việc với team agile và triển khai CI/CD.',
              },
              {
                year: '2019 - 2021',
                title: 'Frontend Developer',
                company: 'Digital Agency',
                description: 'Phát triển giao diện người dùng, tối ưu hóa performance và đảm bảo responsive design.',
              },
            ]}
          />
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-card border border-border/40 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Muốn tìm hiểu thêm?
            </h2>
            <p className="text-muted-foreground mb-6">
              Tôi luôn sẵn sàng chia sẻ kiến thức và kinh nghiệm của mình.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Liên hệ để trao đổi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
