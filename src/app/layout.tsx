import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Cà Phê Việt Nam - Chất Lượng Quốc Tế',
  description: 'Chuyên cung cấp cà phê Việt Nam chất lượng cao cho thị trường quốc tế',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
