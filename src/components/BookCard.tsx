'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, ShoppingBag } from 'lucide-react';

interface BookCardProps {
  title: string;
  description: string;
  imageUrl: string;
  amazonUrl: string;
  genre?: string;
  compact?: boolean;
  index?: number;
}

export default function BookCard({
  title,
  description,
  imageUrl,
  amazonUrl,
  genre = 'Fiction',
  compact = false,
  index = 0,
}: BookCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.65, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-blush/25 bg-white shadow-sm ${
        compact
          ? 'flex flex-col gap-6 p-5 sm:flex-row sm:p-6'
          : 'flex flex-col gap-8 p-5 md:flex-row md:items-center md:gap-12 md:p-8 lg:p-10'
      }`}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-3xl transition-opacity group-hover:opacity-100" />

      <div
        className={`relative mx-auto flex-shrink-0 ${
          compact ? 'w-40 sm:w-44' : 'w-48 sm:w-56 md:mx-0 md:w-64'
        }`}
        style={{ perspective: 1200 }}
      >
        <motion.div
          whileHover={{ rotateY: -10, rotateX: 4, y: -6 }}
          transition={{ type: 'spring', stiffness: 220, damping: 18 }}
          className="book-shine relative aspect-[2/3] overflow-hidden rounded-2xl bg-gradient-to-br from-cream to-rose-light/30 shadow-xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            sizes={compact ? '176px' : '(max-width: 768px) 224px, 256px'}
          />
        </motion.div>
      </div>

      <div className="relative flex flex-1 flex-col justify-between">
        <div>
          <span className="chip mb-4">{genre}</span>
          <h3
            className={`font-display font-bold leading-snug text-charcoal ${
              compact ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl lg:text-[2.1rem]'
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-4 leading-relaxed text-charcoal/70 ${
              compact ? 'mb-6 line-clamp-4 text-sm' : 'mb-8 whitespace-pre-line text-base md:text-lg'
            }`}
          >
            {description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 border-t border-blush/20 pt-5">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-3 text-sm"
          >
            <ShoppingBag size={16} />
            Buy on Amazon
            <ExternalLink size={14} className="opacity-80" />
          </a>
          {compact ? (
            <Link href="/books" className="btn-outline px-6 py-3 text-sm">
              View all books
            </Link>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}
