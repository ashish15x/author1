'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import BookCard from '@/components/BookCard';
import BlogCard from '@/components/BlogCard';

const blogs = [
  {
    title: 'Finding Yourself in the Boardroom',
    excerpt:
      'The modern workplace is a strange mirror. It reflects not just your professional skills but your deepest insecurities and your most surprising strengths...',
    link: 'https://medium.com/@rajanitewari',
  },
  {
    title: 'When Mythology Meets Monday Morning',
    excerpt:
      'Radha waited. Not out of weakness, but out of a love so certain it needed no proof. What if we brought that certainty to our everyday relationships?',
    link: 'https://medium.com/@rajanitewari',
  },
  {
    title: 'The Art of Becoming Enough',
    excerpt:
      'We spend years chasing a version of ourselves that the world approves of, only to discover that the most revolutionary act is simply being who we already are...',
    link: 'https://medium.com/@rajanitewari',
  },
];

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
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ── HERO ── */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden pt-20"
      >
        {/* Parallax background image */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="https://wellnessatworkindia.com/wp-content/uploads/2025/04/Rati-Khandelwal-Wellness-At-Work-India.webp"
            alt="Rajani Tewari"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FDF8F4]/95 via-[#FDF8F4]/75 to-[#FDF8F4]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FDF8F4]/60 via-transparent to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-6xl mx-auto px-6 py-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-4"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Rajani Tewari · Ms. Zen
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-[#2D2D2D] leading-[1.1] mb-6 max-w-2xl"
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            Words That Stay{' '}
            <span className="text-[#C9A96E] italic">With You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg md:text-xl text-[#2D2D2D]/70 mb-8 tracking-wide"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Storyteller. Speaker. Corporate Leader.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Link
              href="/books"
              className="inline-flex items-center px-8 py-3.5 bg-[#C9A96E] text-white font-semibold rounded-full hover:bg-[#b8955c] transition-colors shadow-lg shadow-[#C9A96E]/30 text-sm"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Explore My Books
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-8 py-3.5 border-2 border-[#2D2D2D]/30 text-[#2D2D2D] font-semibold rounded-full hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors text-sm"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span
            className="text-xs tracking-widest text-[#2D2D2D]/40 uppercase"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-px h-10 bg-gradient-to-b from-[#C9A96E]/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* ── ABOUT TEASER ── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <div className="inline-block mb-6">
              <span
                className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8]"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                The Author
              </span>
            </div>
            <blockquote
              className="text-2xl md:text-3xl font-medium text-[#2D2D2D] leading-relaxed mb-8 italic"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              &ldquo;Her writing is marked by wit, metaphor, and emotional candor —
              finding Radha–Krishna&apos;s eternal truths mirrored in modern-day
              relationships.&rdquo;
            </blockquote>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A96E] hover:text-[#b8955c] transition-colors uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Read Her Story →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── FEATURED BOOK ── */}
      <section className="py-20 bg-[#FDF8F4]">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-10">
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8]"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Featured Book
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mt-2"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              Now Available
            </h2>
          </FadeIn>

          <BookCard
            title="THE AUDACITY OF BEING ENOUGH"
            description="What happens when you finally get everything you thought you wanted, only to realise you're losing yourself? Meet Jovi Mehta: corporate high-flier, accidental rebel, and reluctant role model. In this witty and unflinchingly honest journey, you might just learn that the bravest thing you can do is stay, but stop shrinking."
            imageUrl="https://m.media-amazon.com/images/I/715ORG797bL._SL1500_.jpg"
            amazonUrl="https://www.amazon.in/AUDACITY-BEING-ENOUGH-Rajani-Tewari/dp/8199368489/"
            compact
          />
        </div>
      </section>

      {/* ── BLOG PREVIEWS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span
                className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8]"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                From the Desk
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mt-2"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                Recent Writings
              </h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold text-[#C9A96E] hover:text-[#b8955c] transition-colors uppercase tracking-wider whitespace-nowrap"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              All Posts →
            </Link>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <BlogCard key={blog.title} {...blog} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
