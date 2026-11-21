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
}

export default function BookCard({
  title,
  description,
  imageUrl,
  amazonUrl,
  genre = 'Fiction',
  compact = false,
}: BookCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group flex ${
        compact ? 'flex-col sm:flex-row gap-6 p-6' : 'flex-col md:flex-row gap-8 lg:gap-12 p-6 md:p-8'
      } bg-white rounded-3xl shadow-sm border border-[#E8B4B8]/25 hover:border-[#C9A96E]/50 hover:shadow-lg transition-all duration-300`}
    >
      {/* Book Cover */}
      <div
        className={`relative flex-shrink-0 mx-auto md:mx-0 ${
          compact ? 'w-44 h-64 sm:w-40 sm:h-60' : 'w-56 h-80 sm:w-64 sm:h-96'
        } rounded-2xl overflow-hidden bg-gradient-to-br from-[#FDF8F4] to-[#F5D6D8]/20 flex items-center justify-center p-3 shadow-md group-hover:shadow-xl transition-all duration-300`}
      >
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
            sizes={compact ? '(max-width: 640px) 176px, 160px' : '(max-width: 768px) 224px, 256px'}
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-between flex-1 mt-4 md:mt-0">
        <div>
          <div className="inline-flex items-center gap-2 mb-3">
            <span
              className="text-xs font-semibold uppercase tracking-wider px-3 py-1 bg-[#FDF8F4] text-[#C9A96E] border border-[#C9A96E]/30 rounded-full"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              {genre}
            </span>
          </div>

          <h3
            className={`font-bold text-[#2D2D2D] leading-snug mb-4 ${
              compact ? 'text-xl' : 'text-2xl md:text-3xl'
            }`}
            style={{ fontFamily: 'var(--font-playfair-display), serif' }}
          >
            {title}
          </h3>

          <p
            className={`text-[#2D2D2D]/75 leading-relaxed ${
              compact ? 'text-sm line-clamp-4 mb-6' : 'text-base md:text-lg mb-8'
            }`}
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            {description}
          </p>
        </div>

        <div className="flex items-center gap-4 flex-wrap pt-2 border-t border-[#E8B4B8]/20">
          <a
            href={amazonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#C9A96E] text-white text-sm font-semibold rounded-full hover:bg-[#b8955c] transition-all shadow-md shadow-[#C9A96E]/20 hover:shadow-lg hover:shadow-[#C9A96E]/30"
            style={{ fontFamily: 'var(--font-lato), sans-serif' }}
          >
            <ShoppingBag size={16} />
            Buy on Amazon
            <ExternalLink size={14} className="opacity-70" />
          </a>

          {compact && (
            <Link
              href="/books"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-[#C9A96E] text-[#C9A96E] text-sm font-semibold rounded-full hover:bg-[#C9A96E]/10 transition-colors"
              style={{ fontFamily: 'var(--font-lato), sans-serif' }}
            >
              View Details
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
