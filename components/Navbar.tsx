'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FadeText } from '@/components/ui/fade-text'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Education', href: '/education' },
    { name: 'Career', href: '/career' },
    { name: 'Publications', href: '/publications' },
    { name: 'Talks', href: '/talks' },
    { name: 'Personal', href: '/personal' },
  ]

  return (
    <nav className="bg-white py-.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-14">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-2xl font-semibold text-black tracking-tight underline translate-y-1">
                <FadeText text="Ryan H. Dwight, PhD"
                direction="left" 
                />
              </Link>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex items-end tab-container">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const activeIndex = navItems.findIndex(nav => nav.href === pathname);
              let moveDirection = '';
              
              if (!isActive && activeIndex !== -1) {
                moveDirection = index < activeIndex ? 'move-left' : 'move-right';
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`nav-tab ${isActive ? 'active' : ''} ${moveDirection} inline-flex items-center justify-center min-w-[120px] text-sm font-medium`}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${
                pathname === item.href
                  ? 'bg-indigo-50 border-indigo-500 text-indigo-700'
                  : 'border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
