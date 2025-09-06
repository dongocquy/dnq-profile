import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giới thiệu - Đỗ Ngọc Quý',
  description: 'Tìm hiểu về Đỗ Ngọc Quý - Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML với 10+ năm kinh nghiệm phát triển phần mềm quản lý doanh nghiệp và công nghệ nông nghiệp.',
  keywords: [
    'Đỗ Ngọc Quý giới thiệu',
    'Founder CEO RCQ',
    'AI/ML Specialist',
    'Full Stack Developer',
    'Kinh nghiệm làm việc',
    'Công nghệ nông nghiệp',
    'Xuất khẩu EU',
    'Enterprise Software',
    'Portfolio cá nhân'
  ],
  openGraph: {
    title: 'Giới thiệu - Đỗ Ngọc Quý | Full Stack Developer & AI/ML Specialist',
    description: 'Tìm hiểu về Đỗ Ngọc Quý - Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML với 10+ năm kinh nghiệm.',
    url: '/about',
    images: [
      {
        url: '/images/about-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Đỗ Ngọc Quý - Giới thiệu',
      },
    ],
  },
  twitter: {
    title: 'Giới thiệu - Đỗ Ngọc Quý | Full Stack Developer & AI/ML Specialist',
    description: 'Tìm hiểu về Đỗ Ngọc Quý - Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML với 10+ năm kinh nghiệm.',
    images: ['/images/about-twitter.jpg'],
  },
  alternates: {
    canonical: '/about',
  },
}
