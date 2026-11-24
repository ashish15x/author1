'use client';

import BookCard from '@/components/BookCard';
import FadeIn from '@/components/FadeIn';
import PageHeader from '@/components/PageHeader';
import { BOOKS } from '@/data/portfolioData';

export default function BooksPageClient() {
  return (
    <div>
      <PageHeader
        eyebrow="Published works"
        title="Books by Rajani Tewari"
        description="Stories that dance on the fine line between humor and heart — exploring self-worth, modern relationships, and the quiet courage to be yourself."
      />

      <section className="pb-20 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-6">
          {BOOKS.map((book, i) => (
            <BookCard
              key={book.id}
              title={book.title}
              description={book.description}
              imageUrl={book.imageUrl}
              amazonUrl={book.amazonUrl}
              genre={book.genre}
              index={i}
            />
          ))}
        </div>
      </section>

      <section className="border-t border-blush/20 bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <FadeIn>
            <div className="rounded-[2rem] border border-blush/30 bg-cream p-10 text-center shadow-sm md:p-14">
              <div className="mx-auto mb-6 h-0.5 w-10 bg-gold" />
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-blush">
                First work of fiction
              </p>
              <h2 className="font-display mb-4 text-2xl font-bold md:text-4xl">
                Silent Threads: Unclaimed Yet Eternal
              </h2>
              <p className="font-display mx-auto max-w-xl text-base leading-relaxed text-charcoal/75 italic md:text-lg">
                “A celebration of bonds that defy labels, of care that outlasts love.”
              </p>
              <span className="mt-6 inline-block rounded-full border border-gold/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                In the writer’s room
              </span>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
