import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
  
  return {
    title: {
      default: 'Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist',
      template: '%s | Đỗ Ngọc Quý - Portfolio'
    },
    description: 'Portfolio của Đỗ Ngọc Quý - Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML, Full Stack Developer với 10+ năm kinh nghiệm phát triển phần mềm quản lý doanh nghiệp và công nghệ nông nghiệp.',
    keywords: [
      'Đỗ Ngọc Quý',
      'Full Stack Developer',
      'AI/ML Specialist',
      'React Developer',
      'Next.js Developer',
      'TypeScript',
      'Python Developer',
      'Machine Learning',
      'Deep Learning',
      'Portfolio',
      'RCQ Xuất khẩu Bingo',
      'Founder CEO',
      'Enterprise Software',
      'Nông nghiệp công nghệ',
      'Xuất khẩu EU',
      'Web Development',
      'Mobile Development',
      'Node.js',
      'MongoDB',
      'Docker',
      'AWS'
    ],
    authors: [{ name: 'Đỗ Ngọc Quý', url: baseUrl }],
    creator: 'Đỗ Ngọc Quý',
    publisher: 'Đỗ Ngọc Quý',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: '/',
      languages: {
        'vi-VN': '/',
      },
    },
    openGraph: {
      type: 'website',
      locale: 'vi_VN',
      url: baseUrl,
      siteName: 'Đỗ Ngọc Quý - Portfolio',
      title: 'Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist',
      description: 'Portfolio của Đỗ Ngọc Quý - Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML, Full Stack Developer với 10+ năm kinh nghiệm.',
      images: [
        {
          url: '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@dnq_profile',
      creator: '@dnq_profile',
      title: 'Đỗ Ngọc Quý - Full Stack Developer & AI/ML Specialist',
      description: 'Portfolio của Đỗ Ngọc Quý - Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML, Full Stack Developer.',
      images: ['/images/twitter-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    category: 'technology',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Đỗ Ngọc Quý",
    "alternateName": "DNQ",
    "jobTitle": "Full Stack Developer & AI/ML Specialist",
    "description": "Founder & CEO tại RCQ Xuất khẩu Bingo. Chuyên gia AI/ML, Full Stack Developer với 10+ năm kinh nghiệm phát triển phần mềm quản lý doanh nghiệp và công nghệ nông nghiệp.",
    "url": "https://dnq-profile.vercel.app",
    "image": "https://dnq-profile.vercel.app/images/avatar/1.jpg",
    "sameAs": [
      "https://github.com/dnq",
      "https://linkedin.com/in/dnq",
      "https://twitter.com/dnq_profile"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "Machine Learning",
      "Deep Learning",
      "Node.js",
      "MongoDB",
      "Docker",
      "AWS"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "RCQ Xuất khẩu Bingo",
      "url": "https://rcq-bingo.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hà Nội",
      "addressCountry": "VN"
    },
    "email": "dnq@gmail.com",
    "telephone": "+84-123-456-789",
    "birthDate": "1995-03-15",
    "nationality": "Vietnamese",
    "alumniOf": "Đại học Công nghệ",
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Software Developer",
      "occupationLocation": {
        "@type": "City",
        "name": "Hà Nội"
      }
    }
  };

  return (
    <html lang="vi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <link rel="canonical" href="https://dnq-profile.vercel.app" />
        <meta name="theme-color" content="#d4af37" />
        <meta name="msapplication-TileColor" content="#d4af37" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  )
}
