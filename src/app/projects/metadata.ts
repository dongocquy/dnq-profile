import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dự án - Đỗ Ngọc Quý',
  description: 'Khám phá các dự án đã thực hiện của Đỗ Ngọc Quý - E-commerce Platform, AI Task Manager, Mobile Banking Suite, Portfolio Showcase và nhiều dự án khác với công nghệ hiện đại.',
  keywords: [
    'Dự án Đỗ Ngọc Quý',
    'Portfolio projects',
    'E-commerce Platform',
    'AI Task Manager',
    'Mobile Banking Suite',
    'React projects',
    'Next.js projects',
    'TypeScript projects',
    'Full Stack projects',
    'AI/ML projects',
    'Web Development',
    'Mobile Development'
  ],
  openGraph: {
    title: 'Dự án - Đỗ Ngọc Quý | Portfolio Projects',
    description: 'Khám phá các dự án đã thực hiện của Đỗ Ngọc Quý với công nghệ hiện đại như React, Next.js, TypeScript, AI/ML.',
    url: '/projects',
    images: [
      {
        url: '/images/projects-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dự án của Đỗ Ngọc Quý',
      },
    ],
  },
  twitter: {
    title: 'Dự án - Đỗ Ngọc Quý | Portfolio Projects',
    description: 'Khám phá các dự án đã thực hiện của Đỗ Ngọc Quý với công nghệ hiện đại như React, Next.js, TypeScript, AI/ML.',
    images: ['/images/projects-twitter.jpg'],
  },
  alternates: {
    canonical: '/projects',
  },
}
