"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Laptop, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
]

const MotionLink = motion(Link)

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark')
    else if (theme === 'dark') setTheme('system')
    else setTheme('light')
  }

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 30
      }
    }
  }

  const mobileMenuVariants = {
    closed: { 
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const mobileMenuItemVariants = {
    closed: { opacity: 0, x: -50 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <motion.header 
      className="sticky top-0 z-50 w-full bg-white dark:bg-slate-900 shadow-md"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <motion.div variants={childVariants}>
            <Link href="/" className="flex">
              <span className="sr-only">Abdirahman Abdi</span>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">AA</span>
            </Link>
          </motion.div>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <nav className="flex space-x-10">
              {menuItems.map((item) => (
                <motion.div key={item.href} variants={childVariants}>
                  <Link 
                    href={item.href} 
                    className={`text-base font-medium hover:text-sky-500 dark:hover:text-sky-400 ${
                      pathname === item.href ? 'text-sky-500 dark:text-sky-400' : 'text-gray-500 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div variants={childVariants} className="flex items-center justify-center flex-shrink-0 ml-8">
              <Button
                onClick={toggleTheme}
                variant="outline"
                size="sm"
                className="w-36 justify-start text-left font-medium"
              >
                {theme === 'light' && <Sun className="h-4 w-4 mr-2" />}
                {theme === 'dark' && <Moon className="h-4 w-4 mr-2" />}
                {theme === 'system' && <Laptop className="h-4 w-4 mr-2" />}
                {theme === 'light' && 'Light'}
                {theme === 'dark' && 'Dark'}
                {theme === 'system' && 'System'}
              </Button>
            </motion.div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white dark:bg-slate-800 divide-y-2 divide-gray-50 dark:divide-gray-700">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-gray-900 dark:text-white">AA</span>
                  </div>
                  <div className="-mr-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-500 dark:text-gray-300"
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <X size={24} />
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {menuItems.map((item) => (
                      <motion.div key={item.href} variants={mobileMenuItemVariants}>
                        <MotionLink
                          href={item.href}
                          className={`-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-700 ${
                            pathname === item.href ? 'text-sky-500 dark:text-sky-400' : 'text-gray-900 dark:text-gray-100'
                          }`}
                          onClick={() => setIsOpen(false)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <span className="ml-3 text-base font-medium">{item.label}</span>
                        </MotionLink>
                      </motion.div>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <motion.div variants={mobileMenuItemVariants}>
                  <Button
                    onClick={() => {
                      toggleTheme();
                      setIsOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-center font-medium"
                  >
                    {theme === 'light' && <Sun className="h-4 w-4 mr-2" />}
                    {theme === 'dark' && <Moon className="h-4 w-4 mr-2" />}
                    {theme === 'system' && <Laptop className="h-4 w-4 mr-2" />}
                    {theme === 'light' && 'Light Mode'}
                    {theme === 'dark' && 'Dark Mode'}
                    {theme === 'system' && 'System Theme'}
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

