import './globals.css'
import { Inter } from 'next/font/google'
import { DM_Sans } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })
const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'], 
  style: ['normal', 'italic']  
})

export const metadata = {
  title: 'Ryan H. Dwight, PhD',
  description: 'Personal website of Ryan H. Dwight, PhD, Ryan Dwight, Dr. Dwight, Graduarte Research Coach, Coastal Water Research Group'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(dmSans.className, "min-h-screen flex flex-col relative bg-[#374051]")}>
        <div className="absolute inset-0 overflow-hidden">
        </div>
        <div className="relative z-10 flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
