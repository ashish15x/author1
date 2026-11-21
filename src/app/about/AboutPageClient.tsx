'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { AUTHOR_INFO } from '@/data/portfolioData';

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

export default function AboutPageClient() {
  return (
    <div className="pt-20">
      {/* Hero Banner - light colored theme */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FDF8F4] via-[#FBF2EC] to-[#FDF8F4] border-b border-[#E8B4B8]/20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-3 inline-block px-4 py-1.5 bg-white rounded-full border border-[#E8B4B8]/30 shadow-sm"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            The Author
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-3"
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            {AUTHOR_INFO.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#C9A96E] text-xl italic"
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            Writing as {AUTHOR_INFO.penName}
          </motion.p>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-[#FDF8F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Author Portrait with elegant framing */}
            <div className="md:col-span-5">
              <FadeIn delay={0.1}>
                <div className="relative mx-auto max-w-md">
                  {/* Decorative soft backdrop cards */}
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#E8B4B8]/30 to-[#C9A96E]/20 rounded-3xl transform rotate-2 -z-10" />
                  <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#FDF8F4]">
                    <Image
                      src={AUTHOR_INFO.image}
                      alt={AUTHOR_INFO.name}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2D2D2D]/20 via-transparent to-transparent" />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Bio Content */}
            <div className="md:col-span-7">
              <FadeIn delay={0.2}>
                <span
                  className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-3 block"
                  style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                >
                  The Woman Behind the Words
                </span>
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#2D2D2D] mb-6 leading-tight"
                  style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                >
                  Where Humor Meets Heart
                </h2>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="space-y-4 text-base md:text-lg text-[#2D2D2D]/80 leading-relaxed font-normal">
                  {AUTHOR_INFO.bioParagraphs.map((para, idx) => (
                    <p key={idx} style={{ fontFamily: 'var(--font-lato), sans-serif' }}>
                      {para}
                    </p>
                  ))}
                </div>

                <div className="mt-8 flex gap-4 flex-wrap">
                  <Link
                    href="/books"
                    className="inline-flex items-center px-7 py-3 bg-[#C9A96E] hover:bg-[#b8955c] text-white text-sm font-semibold rounded-full transition-all shadow-md shadow-[#C9A96E]/20"
                    style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                  >
                    Explore Her Books
                  </Link>
                  <Link
                    href="/connect"
                    className="inline-flex items-center px-7 py-3 border border-[#2D2D2D]/30 hover:border-[#C9A96E] text-[#2D2D2D] hover:text-[#C9A96E] text-sm font-semibold rounded-full transition-colors"
                    style={{ fontFamily: 'var(--font-lato), sans-serif' }}
                  >
                    Get in Touch
                  </Link>
                </div>
              </FadeIn>
            </div>

          </div>
        </div>
      </section>

      {/* Inspirational Quote Card */}
      <section className="py-20 bg-white border-t border-[#E8B4B8]/20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="relative bg-gradient-to-br from-[#FFFDFB] to-[#FDF4F5] rounded-3xl p-10 md:p-14 border border-[#E8B4B8]/40 shadow-sm text-center">
              <div
                className="text-7xl text-[#C9A96E]/25 font-bold leading-none mb-2 select-none"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
                aria-hidden="true"
              >
                “
              </div>
              <blockquote
                className="text-xl md:text-2xl font-medium text-[#2D2D2D] leading-relaxed mb-6 italic"
                style={{ fontFamily: 'var(--font-playfair-display), serif' }}
              >
                {AUTHOR_INFO.quote}
              </blockquote>
              <div className="w-12 h-0.5 bg-[#C9A96E] mx-auto" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
