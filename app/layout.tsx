import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { DotPattern } from '../components/ui/dot-pattern'
import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={cn(inter.className, "min-h-screen flex flex-col relative bg-gray-50/50")}>
        <div className="absolute inset-0 overflow-hidden">
          <DotPattern
            width={30}
            height={30}
            cx={10}
            cy={10}
            cr={1.5}
            className={cn(
              "absolute inset-0 opacity-100",
              "[mask-image:linear-gradient(to_right,transparent,white,white,transparent)]"
            )}
          />
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
