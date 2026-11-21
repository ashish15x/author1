'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description?: string;
  excerpt?: string;
  link: string;
  date?: string;
}

export default function BlogCard({ title, description, excerpt, link, date }: BlogCardProps) {
  const contentText = description || excerpt || '';
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6, boxShadow: '0 16px 36px rgba(201,169,110,0.18)' }}
      className="group flex flex-col justify-between bg-white rounded-3xl border border-[#E8B4B8]/25 p-7 md:p-8 shadow-sm cursor-pointer transition-all duration-300"
    >
      <div>
        {/* Top meta info */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <div className="w-8 h-0.5 bg-[#C9A96E] rounded-full group-hover:w-12 transition-all duration-300" />
          {date && (
            <span
              className="inline-flex items-center gap-1.5 text-xs text-[#2D2D2D]/50 font-medium"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              <Calendar size={12} className="text-[#C9A96E]" />
              {date}
            </span>
          )}
        </div>

        <h3
          className="text-xl font-bold text-[#2D2D2D] mb-3 leading-snug group-hover:text-[#C9A96E] transition-colors"
          style={{ fontFamily: 'var(--font-playfair-display), serif' }}
        >
          {title}
        </h3>

        <p
          className="text-sm text-[#2D2D2D]/70 leading-relaxed mb-6 line-clamp-3"
          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
        >
          {contentText}
        </p>
      </div>

      <div className="pt-4 border-t border-[#E8B4B8]/15 flex items-center justify-between">
        <span
          className="text-xs font-semibold uppercase tracking-wider text-[#C9A96E]"
          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
        >
          Substack Dispatch
        </span>
        <span
          className="text-sm font-semibold text-[#2D2D2D] group-hover:text-[#C9A96E] transition-colors inline-flex items-center gap-1"
          style={{ fontFamily: 'var(--font-lato), sans-serif' }}
        >
          Read Piece
          <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </motion.a>
  );
}
