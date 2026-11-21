'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/books', label: 'Books' },
  { href: '/blog', label: 'Blog' },
  { href: '/connect', label: 'Connect' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FDF8F4]/95 backdrop-blur-md shadow-sm'
          : 'bg-[#FDF8F4]/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-playfair text-xl font-bold text-[#2D2D2D] tracking-wide hover:text-[#C9A96E] transition-colors"
          style={{ fontFamily: 'var(--font-playfair-display), serif' }}
        >
          Rajani Tewari
          <span className="block text-xs font-normal text-[#C9A96E] tracking-widest uppercase" style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
            Ms. Zen
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`text-sm tracking-wide transition-colors hover:text-[#C9A96E] relative group ${
                  pathname === href ? 'text-[#C9A96E]' : 'text-[#2D2D2D]'
                }`}
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${
                    pathname === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-[#2D2D2D] hover:text-[#C9A96E] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#FDF8F4] border-t border-[#E8B4B8]/30 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`block text-base transition-colors hover:text-[#C9A96E] py-1 ${
                      pathname === href ? 'text-[#C9A96E]' : 'text-[#2D2D2D]'
                    }`}
                    style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
