'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar } from 'lucide-react';

interface BlogCardProps {
  title: string;
  description?: string;
  excerpt?: string;
  link: string;
  date?: string;
  index?: number;
}

export default function BlogCard({
  title,
  description,
  excerpt,
  link,
  date,
  index = 0,
}: BlogCardProps) {
  const contentText = description || excerpt || '';
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[1.75rem] border border-blush/25 bg-white p-7 shadow-sm md:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-blush via-gold to-blush transition-transform duration-500 group-hover:scale-x-100" />
      <div>
        <div className="mb-5 flex items-center justify-between gap-2">
          <span className="h-px w-8 bg-gold transition-all duration-300 group-hover:w-14" />
          {date ? (
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-charcoal/50">
              <Calendar size={12} className="text-gold" />
              {date}
            </span>
          ) : null}
        </div>
        <h3 className="font-display mb-3 text-xl font-bold leading-snug text-charcoal transition-colors group-hover:text-gold">
          {title}
        </h3>
        <p className="mb-6 line-clamp-3 text-sm leading-relaxed text-charcoal/65">{contentText}</p>
      </div>
      <div className="flex items-center justify-between border-t border-blush/15 pt-4">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Substack
        </span>
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-charcoal transition-colors group-hover:text-gold">
          Read
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </motion.a>
  );
}
