'use client';

import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { BLOGS, AUTHOR_INFO } from '@/data/portfolioData';
import { ExternalLink } from 'lucide-react';

export default function BlogPageClient() {
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
            Substack Dispatches
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-[#2D2D2D] mb-4"
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            Writings & Reflections
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-base md:text-lg text-[#2D2D2D]/70 max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            Observations on human connections, the quiet humor in everyday chaos, and finding truth in modern relationships.
          </motion.p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-[#FDF8F4]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOGS.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <BlogCard
                  title={blog.title}
                  description={blog.description}
                  date={blog.date}
                  link={blog.link}
                />
              </motion.div>
            ))}
          </div>

          {/* Substack Newsletter Callout */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-16 bg-white rounded-3xl border border-[#E8B4B8]/30 p-10 md:p-12 text-center max-w-3xl mx-auto shadow-sm"
          >
            <div className="w-10 h-0.5 bg-[#C9A96E] mx-auto mb-6" />
            <h2
              className="text-2xl md:text-3xl font-bold text-[#2D2D2D] mb-3"
              style={{ fontFamily: 'var(--font-playfair-display), serif' }}
            >
              Read More on Substack
            </h2>
            <p
              className="text-[#2D2D2D]/70 mb-6 text-sm md:text-base max-w-lg mx-auto"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Subscribe to Rajani&apos;s personal Substack publication for weekly essays, humorous reflections, and new chapter releases.
            </p>
            <a
              href={AUTHOR_INFO.substack}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#C9A96E] hover:bg-[#b8955c] text-white font-semibold rounded-full transition-all shadow-md shadow-[#C9A96E]/20 text-sm uppercase tracking-wider"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              Visit Substack Profile
              <ExternalLink size={16} />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
