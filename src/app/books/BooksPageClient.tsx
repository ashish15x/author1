'use client';

import { motion } from 'framer-motion';
import BookCard from '@/components/BookCard';
import { BOOKS, AUTHOR_INFO } from '@/data/portfolioData';

export default function BooksPageClient() {
  return (
    <div className="pt-20">
      {/* Page Header - light colored theme */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF8F4] via-[#FBF2EC] to-[#FDF8F4] border-b border-[#E8B4B8]/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-3 inline-block px-4 py-1.5 bg-white rounded-full border border-[#E8B4B8]/30 shadow-sm"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Published Works
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            Books by Rajani Tewari
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Stories that dance on the fine line between humor and heart — exploring self-worth, modern relationships, and the quiet courage to be yourself.
          </motion.p>
        </div>
      </section>

      {/* Books List */}
      <section className="py-20 bg-[#FDF8F4]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col gap-12">
          {BOOKS.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
              amazonUrl={book.amazonUrl}
              genre={book.genre}
            />
          ))}
        </div>
      </section>

      {/* Upcoming Work / Quote Section */}
      <section className="py-20 bg-white border-t border-[#E8B4B8]/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-[#FDF8F4] rounded-3xl border border-[#E8B4B8]/30 p-10 md:p-14 shadow-sm"
          >
            <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto mb-6" />
            <span
              className="text-xs font-semibold uppercase tracking-widest text-[#E8B4B8] mb-2 block"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              First Work of Fiction
            </span>
            <h2
              className="text-2xl md:text-4xl font-bold text-[#2D2D2D] mb-4"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              Silent Threads: Unclaimed Yet Eternal
            </h2>
            <p
              className="text-[#2D2D2D]/75 leading-relaxed max-w-xl mx-auto text-base md:text-lg italic"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              &ldquo;A celebration of bonds that defy labels, of care that outlasts love.&rdquo;
            </p>
            <div className="mt-6">
              <span
                className="text-xs font-semibold text-[#C9A96E] uppercase tracking-wider px-4 py-1.5 bg-white border border-[#C9A96E]/30 rounded-full inline-block"
                style={{ fontFamily: 'var(--font-lato), sans-serif' }}
              >
                In the Writer&apos;s Room
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
