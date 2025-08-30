import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Giới thiệu - DNQ Profile',
  description: 'Thông tin chi tiết về DNQ - Chuyên gia phát triển web',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Giới thiệu
          </h1>
          <p className="text-xl text-muted-foreground">
            Chuyên gia phát triển web với kinh nghiệm trong việc xây dựng các ứng dụng hiện đại
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Personal Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Thông tin cá nhân
              </h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-muted-foreground">Tên:</span>
                  <span className="font-medium">DNQ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-muted-foreground">Vị trí:</span>
                  <span className="font-medium">Full Stack Developer</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-muted-foreground">Kinh nghiệm:</span>
                  <span className="font-medium">5+ năm</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-muted-foreground">Địa chỉ:</span>
                  <span className="font-medium">Việt Nam</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Sở thích
              </h2>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Lập trình và phát triển web</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Học hỏi công nghệ mới</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Đọc sách và nghiên cứu</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Du lịch và khám phá</span>
                </li>
              </ul>
            </div>
          </div>

          {/* About Me */}
          <div className="space-y-6">
            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Về tôi
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Tôi là một lập trình viên Full Stack với hơn 5 năm kinh nghiệm trong việc phát triển web.
                  Tôi đam mê tạo ra những ứng dụng web hiện đại, hiệu quả và có trải nghiệm người dùng tốt.
                </p>
                <p>
                  Với kiến thức sâu rộng về cả frontend và backend, tôi có thể xây dựng các giải pháp hoàn chỉnh
                  từ ý tưởng đến triển khai sản phẩm.
                </p>
                <p>
                  Tôi luôn cập nhật những công nghệ mới nhất và áp dụng các best practices trong phát triển phần mềm
                  để đảm bảo chất lượng và hiệu suất của sản phẩm.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border/40 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                Mục tiêu
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Mục tiêu của tôi là trở thành một chuyên gia phát triển web hàng đầu, tạo ra những sản phẩm
                  có giá trị cao và đóng góp tích cực cho cộng đồng lập trình viên Việt Nam.
                </p>
                <p>
                  Tôi mong muốn được làm việc trong môi trường năng động, sáng tạo và có cơ hội học hỏi
                  từ những đồng nghiệp tài năng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
