import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Liên hệ - Đỗ Ngọc Quý',
  description: 'Liên hệ với Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist. Gửi tin nhắn, email hoặc để lại bình luận để thảo luận về dự án và cơ hội hợp tác.',
  keywords: [
    'Liên hệ Đỗ Ngọc Quý',
    'Contact DNQ',
    'Hire Full Stack Developer',
    'AI/ML Consultant',
    'Web Development Services',
    'Mobile Development Services',
    'Enterprise Software Development',
    'Nông nghiệp công nghệ',
    'Xuất khẩu EU',
    'Freelance Developer',
    'Portfolio Contact',
    'Business Inquiry'
  ],
  openGraph: {
    title: 'Liên hệ - Đỗ Ngọc Quý | Contact Full Stack Developer',
    description: 'Liên hệ với Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist để thảo luận về dự án và cơ hội hợp tác.',
    url: '/contact',
    images: [
      {
        url: '/images/contact-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Liên hệ với Đỗ Ngọc Quý',
      },
    ],
  },
  twitter: {
    title: 'Liên hệ - Đỗ Ngọc Quý | Contact Full Stack Developer',
    description: 'Liên hệ với Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist để thảo luận về dự án và cơ hội hợp tác.',
    images: ['/images/contact-twitter.jpg'],
  },
  alternates: {
    canonical: '/contact',
  },
}
