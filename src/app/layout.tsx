import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cà Phê Việt Nam - Chất Lượng Quốc Tế',
  description: 'Chuyên cung cấp cà phê Việt Nam chất lượng cao cho thị trường quốc tế',
  keywords: 'cà phê việt nam, xuất khẩu cà phê, robusta, arabica',
  authors: [{ name: 'website-mới' }],
  creator: 'website-mới',
  publisher: 'website-mới',
  
  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'website-mới',
    title: 'Cà Phê Việt Nam - Chất Lượng Quốc Tế',
    description: 'Chuyên cung cấp cà phê Việt Nam chất lượng cao cho thị trường quốc tế',
    images: [
      {
        url: '/uploads/1769677566889-6nz55b357at.png',
        width: 1200,
        height: 630,
        alt: 'Cà Phê Việt Nam - Chất Lượng Quốc Tế',
      },
    ],
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: 'Cà Phê Việt Nam - Chất Lượng Quốc Tế',
    description: 'Chuyên cung cấp cà phê Việt Nam chất lượng cao cho thị trường quốc tế',
    images: ['/uploads/1769677566889-6nz55b357at.png'],
  },
  
  // Additional
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
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.ENV = {
                NEXT_PUBLIC_API_URL: ${JSON.stringify(process.env.NEXT_PUBLIC_API_URL || '')}
              };
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
