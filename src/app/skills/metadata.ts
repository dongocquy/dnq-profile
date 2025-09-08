import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kỹ năng - Đỗ Ngọc Quý',
  description: 'Khám phá kỹ năng và công nghệ của Đỗ Ngọc Quý - React, Next.js, TypeScript, Python, AI/ML, Node.js, MongoDB, Docker, AWS và nhiều công nghệ khác.',
  keywords: [
    'Kỹ năng Đỗ Ngọc Quý',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'Python Developer',
    'AI/ML Specialist',
    'Full Stack Developer',
    'Node.js Developer',
    'MongoDB Developer',
    'Docker Developer',
    'AWS Developer',
    'Machine Learning',
    'Deep Learning',
    'Frontend Developer',
    'Backend Developer',
    'Mobile Developer'
  ],
  openGraph: {
    title: 'Kỹ năng - Đỗ Ngọc Quý | Full Stack Developer Skills',
    description: 'Khám phá kỹ năng và công nghệ của Đỗ Ngọc Quý - React, Next.js, TypeScript, Python, AI/ML, Node.js, MongoDB, Docker, AWS.',
    url: '/skills',
    images: [
      {
        url: '/images/skills-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Kỹ năng của Đỗ Ngọc Quý',
      },
    ],
  },
  twitter: {
    title: 'Kỹ năng - Đỗ Ngọc Quý | Full Stack Developer Skills',
    description: 'Khám phá kỹ năng và công nghệ của Đỗ Ngọc Quý - React, Next.js, TypeScript, Python, AI/ML, Node.js, MongoDB, Docker, AWS.',
    images: ['/images/skills-twitter.jpg'],
  },
  alternates: {
    canonical: '/skills',
  },
}
