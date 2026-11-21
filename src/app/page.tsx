'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import BookCard from '@/components/BookCard';
import BlogCard from '@/components/BlogCard';
import { BOOKS, BLOGS, AUTHOR_INFO } from '@/data/portfolioData';
import { Sparkles, ArrowRight, BookOpen, Quote } from 'lucide-react';

function FadeIn({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function HomePage() {
  const recentBlogs = BLOGS.slice(0, 3);

  return (
    <div className="pt-20 overflow-x-hidden">
      {/* ── HERO SECTION ── */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-[#FDF8F4] via-[#FBF2EC] to-[#FDF8F4] overflow-hidden py-16 md:py-24">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-10 right-[-10%] w-96 h-96 bg-[#E8B4B8]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-10%] w-96 h-96 bg-[#C9A96E]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Author Intro & Headline */}
            <div className="lg:col-span-7 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-[#E8B4B8]/40 rounded-full shadow-sm mb-6"
              >
                <Sparkles size={14} className="text-[#C9A96E]" />
                <span
                  className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8]"
                  style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                >
                  {AUTHOR_INFO.name} · {AUTHOR_INFO.penName}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold text-[#2D2D2D] leading-[1.1] mb-6"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Words That Stay{' '}
                <span className="text-[#C9A96E] italic block sm:inline">With You.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-lg md:text-xl text-[#2D2D2D]/75 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                Author & Storyteller exploring corporate boardrooms, modern relationships, and the quiet courage of becoming enough on your own terms.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.45 }}
                className="flex gap-4 flex-wrap justify-center lg:justify-start"
              >
                <Link
                  href="/books"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A96E] hover:bg-[#b8955c] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#C9A96E]/25 text-sm uppercase tracking-wider"
                  style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                >
                  <BookOpen size={16} />
                  Explore The Books
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white border border-[#2D2D2D]/20 hover:border-[#C9A96E] text-[#2D2D2D] hover:text-[#C9A96E] font-semibold rounded-full transition-all text-sm uppercase tracking-wider shadow-sm"
                  style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                >
                  Meet The Author
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Author Photo Card */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="relative w-full max-w-sm sm:max-w-md"
              >
                {/* Decorative background framing */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8B4B8]/40 via-[#FDF8F4] to-[#C9A96E]/30 rounded-3xl transform -rotate-2 -z-10" />
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#FDF8F4]">
                  <Image
                    src={AUTHOR_INFO.image}
                    alt={AUTHOR_INFO.name}
                    fill
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 768px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/40 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg">
                    <p
                      className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E] mb-1"
                      style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                    >
                      Latest Releases
                    </p>
                    <p
                      className="text-sm font-bold text-[#2D2D2D] truncate"
                      style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                    >
                      3 Published Books Now on Amazon
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ABOUT TEASER SECTION ── */}
      <section className="py-20 bg-white border-y border-[#E8B4B8]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FDF8F4] text-[#C9A96E] mb-6 mx-auto border border-[#C9A96E]/30">
              <Quote size={20} />
            </div>
            <blockquote
              className="text-2xl md:text-3xl font-medium text-[#2D2D2D] leading-relaxed mb-8 italic"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              &ldquo;Her writing is marked by wit, metaphor, and emotional candor — finding Radha–Krishna&apos;s eternal truths mirrored in modern-day relationships.&rdquo;
            </blockquote>
            <p
              className="text-base text-[#2D2D2D]/70 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              With a career in people strategy and leadership, Rajani has spent years observing the quiet threads that connect human beings in boardrooms, families, and friendships.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A96E] hover:text-[#b8955c] transition-colors uppercase tracking-wider group"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Read Her Full Story
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED BOOKS SECTION ── */}
      <section className="py-20 md:py-28 bg-[#FDF8F4]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] block mb-2"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                The Bookshelf
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Featured Books
              </h2>
            </div>
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A96E] hover:text-[#b8955c] uppercase tracking-wider group"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              View All 3 Books
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="flex flex-col gap-10">
            {BOOKS.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                description={book.description}
                imageUrl={book.imageUrl}
                amazonUrl={book.amazonUrl}
                genre={book.genre}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT BLOGS SECTION ── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#E8B4B8]/20">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] block mb-2"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                From the Desk
              </span>
              <h2
                className="text-3xl md:text-5xl font-bold text-[#2D2D2D]"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Recent Writings
              </h2>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C9A96E] hover:text-[#b8955c] uppercase tracking-wider group"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Explore All Articles
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentBlogs.map((blog) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                link={blog.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ── */}
      <section className="py-20 bg-gradient-to-r from-[#FDF8F4] via-[#FCECEE] to-[#FDF8F4]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-3 block"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Let&apos;s Connect
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              Have a Thought, Question, or Opportunity?
            </h2>
            <p
              className="text-[#2D2D2D]/70 max-w-xl mx-auto mb-8 text-base md:text-lg leading-relaxed font-light"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Rajani loves hearing from readers and collaborating on meaningful ideas. Drop a note directly through the contact page.
            </p>
            <Link
              href="/connect"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#C9A96E] hover:bg-[#b8955c] text-white font-semibold rounded-full transition-all shadow-lg shadow-[#C9A96E]/30 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Get in Touch with Rajani
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
