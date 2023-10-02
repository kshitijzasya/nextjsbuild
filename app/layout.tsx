import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TODO LIST',
  description: 'Sample todo app',
}

interface childElement {
  children: React.ReactNode
};

export default function RootLayout({ children,}: childElement ) {
  return (
    <html lang="en">
      <body className={` ${inter.className} bg-slate-500`}>{children}</body>
    </html>
  )
}
