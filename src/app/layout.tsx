import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || 'DNQ Profile',
  description: 'Personal profile and portfolio website',
  keywords: ['profile', 'portfolio', 'developer', 'nextjs'],
  authors: [{ name: 'DNQ' }],
  creator: 'DNQ',
  openGraph: {
    title: process.env.NEXT_PUBLIC_APP_NAME || 'DNQ Profile',
    description: 'Personal profile and portfolio website',
    type: 'website',
    locale: 'vi_VN',
  },
  twitter: {
    card: 'summary_large_image',
    title: process.env.NEXT_PUBLIC_APP_NAME || 'DNQ Profile',
    description: 'Personal profile and portfolio website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
