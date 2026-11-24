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
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className={`relative z-[60] mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 sm:px-6 ${
          scrolled || isOpen
            ? 'glass-nav border-blush/30 shadow-lg shadow-charcoal/5'
            : 'border-white/40 bg-white/35 backdrop-blur-md'
        }`}
      >
        <Link href="/" className="group min-w-0 py-0.5">
          <span className="font-display block truncate text-lg font-semibold tracking-wide text-charcoal transition-colors group-hover:text-gold sm:text-xl">
            Rajani Tewari
          </span>
          <span className="block text-[10px] font-semibold uppercase tracking-[0.28em] text-gold">
            Ms. Zen
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative rounded-full px-4 py-2 text-sm tracking-wide transition-colors ${
                    active ? 'text-gold' : 'text-charcoal/80 hover:text-gold'
                  }`}
                >
                  {label}
                  {active ? (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-gold/10"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </Link>
              </li>
            );
          })}
          <li className="ml-2">
            <Link href="/connect" className="btn-gold px-5 py-2 text-sm">
              Connect
            </Link>
          </li>
        </ul>

        <button
          className="rounded-full p-2 text-charcoal transition-colors hover:bg-gold/10 hover:text-gold md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </motion.nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-cream/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col justify-center px-8">
              {navLinks.concat({ href: '/connect', label: 'Connect' }).map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  transition={{ delay: 0.05 * i, duration: 0.35 }}
                >
                  <Link
                    href={href}
                    className={`font-display block border-b border-blush/25 py-4 text-3xl ${
                      pathname === href ? 'text-gold' : 'text-charcoal'
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
