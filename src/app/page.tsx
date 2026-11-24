'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight, Feather, Heart, Sparkles } from 'lucide-react';
import BookCard from '@/components/BookCard';
import BlogCard from '@/components/BlogCard';
import FadeIn from '@/components/FadeIn';
import { AUTHOR_INFO, BLOGS, BOOKS } from '@/data/portfolioData';

const pillars = [
  {
    icon: Sparkles,
    title: 'Wit with a pulse',
    copy: 'Sharp humor that never punches down — only opens a window into the room we all live in.',
  },
  {
    icon: Heart,
    title: 'Myth in Monday',
    copy: 'Radha–Krishna’s quiet truths, rewritten for boardrooms, marriages, and the 7 a.m. school run.',
  },
  {
    icon: Feather,
    title: 'Enough, on purpose',
    copy: 'Stories for the woman who can rescue any project — and is done shrinking to fit the applause.',
  },
];

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);

  return (
    <>
      <section ref={heroRef} className="relative flex min-h-[100svh] items-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image
            src="https://wellnessatworkindia.com/wp-content/uploads/2025/04/Rati-Khandelwal-Wellness-At-Work-India.webp"
            alt=""
            fill
            className="object-cover object-[center_20%]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/88 to-cream/25" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-cream/40" />
        </motion.div>

        <div className="blob left-[-8%] top-[18%] h-72 w-72 bg-blush/40" />
        <div className="blob bottom-[10%] right-[8%] h-64 w-64 bg-gold/25" style={{ animationDelay: '1.4s' }} />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 px-5 py-28 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:py-32"
        >
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="chip mb-6"
            >
              Rajani Tewari · Ms. Zen
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="font-display max-w-xl text-4xl font-bold leading-[1.08] text-charcoal sm:text-6xl lg:text-7xl"
            >
              Words that stay{' '}
              <span className="italic text-gold">with you</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 max-w-lg text-lg text-charcoal/70 sm:text-xl"
            >
              {AUTHOR_INFO.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link href="/books" className="btn-gold px-7 py-3.5 text-sm">
                Explore the books
                <ArrowRight size={16} />
              </Link>
              <Link href="/about" className="btn-outline px-7 py-3.5 text-sm">
                Meet the author
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="relative mx-auto hidden w-full max-w-sm lg:block"
          >
            <div className="absolute -inset-4 rotate-3 rounded-[2rem] bg-gradient-to-tr from-blush/40 to-gold/30" />
            <div className="floaty relative overflow-hidden rounded-[1.75rem] border-4 border-white shadow-2xl">
              <div className="relative aspect-[4/5]">
                <Image
                  src={AUTHOR_INFO.image}
                  alt={AUTHOR_INFO.name}
                  fill
                  className="object-cover object-top"
                  sizes="380px"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.28em] text-charcoal/40">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="h-10 w-px bg-gradient-to-b from-gold/70 to-transparent"
          />
        </motion.div>
      </section>

      <div className="border-y border-blush/20 bg-white/70 py-4">
        <div className="marquee">
          <div className="marquee-track gap-10 pr-10">
            {[...BOOKS, ...BOOKS].map((book, i) => (
              <span
                key={`${book.id}-${i}`}
                className="font-display whitespace-nowrap text-lg italic text-charcoal/45"
              >
                {book.title.split('-')[0].trim()}
                <span className="mx-5 text-gold">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-6 lg:grid-cols-2">
          <FadeIn>
            <p className="chip mb-5">The author</p>
            <blockquote className="font-display text-2xl font-medium leading-relaxed text-charcoal italic md:text-3xl">
              “Her writing is marked by wit, metaphor, and emotional candor — finding
              Radha–Krishna’s eternal truths mirrored in modern-day relationships.”
            </blockquote>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-gold transition-colors hover:text-[#b8955c]"
            >
              Read her story
              <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.12}>
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {[
                { n: '6', l: 'Books' },
                { n: 'Ms. Zen', l: 'Pen name' },
                { n: '∞', l: 'Quiet courage' },
              ].map((stat) => (
                <div
                  key={stat.l}
                  className="rounded-3xl border border-blush/25 bg-white p-4 text-center shadow-sm sm:p-6"
                >
                  <p className="font-display text-xl font-bold text-gold sm:text-2xl">{stat.n}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-charcoal/50 sm:text-xs">
                    {stat.l}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <FadeIn className="mb-12 text-center">
            <p className="chip mb-4">The thread</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">What her stories hold</h2>
          </FadeIn>
          <div className="grid gap-5 md:grid-cols-3">
            {pillars.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-lift h-full rounded-[1.75rem] border border-blush/25 bg-cream/60 p-7">
                  <item.icon className="mb-5 text-gold" size={28} />
                  <h3 className="font-display mb-3 text-xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-charcoal/65">{item.copy}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <FadeIn className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="chip mb-3">Featured book</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Now available</h2>
            </div>
            <Link
              href="/books"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-gold hover:text-[#b8955c]"
            >
              All titles →
            </Link>
          </FadeIn>
          <BookCard
            title={BOOKS[0].title}
            description={BOOKS[0].description}
            imageUrl={BOOKS[0].imageUrl}
            amazonUrl={BOOKS[0].amazonUrl}
            genre={BOOKS[0].genre}
            compact
          />
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <FadeIn className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="chip mb-3">From the desk</p>
              <h2 className="font-display text-3xl font-bold md:text-4xl">Recent writings</h2>
            </div>
            <Link
              href="/blog"
              className="text-sm font-semibold uppercase tracking-[0.14em] text-gold hover:text-[#b8955c]"
            >
              All posts →
            </Link>
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {BLOGS.slice(0, 3).map((blog, i) => (
              <BlogCard
                key={blog.id}
                title={blog.title}
                description={blog.description}
                date={blog.date}
                link={blog.link}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
