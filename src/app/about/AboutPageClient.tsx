'use client';

import Image from 'next/image';
import Link from 'next/link';
import { AUTHOR_INFO } from '@/data/portfolioData';
import FadeIn from '@/components/FadeIn';
import PageHeader from '@/components/PageHeader';

const notes = [
  { label: 'Voice', value: 'Humor that lands softly, then stays.' },
  { label: 'World', value: 'Boardrooms, families, friendships, myth.' },
  { label: 'Off the page', value: 'Mentoring leaders, coffee, small dramas.' },
];

export default function AboutPageClient() {
  return (
    <div>
      <PageHeader
        eyebrow="The author"
        title={AUTHOR_INFO.name}
        description={`Writing as ${AUTHOR_INFO.penName} — ${AUTHOR_INFO.tagline}`}
      />

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <FadeIn>
                <div className="relative mx-auto max-w-md">
                  <div className="absolute -inset-4 -z-10 rotate-2 rounded-[2rem] bg-gradient-to-tr from-blush/35 to-gold/25" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border-4 border-white bg-cream shadow-2xl">
                    <Image
                      src={AUTHOR_INFO.image}
                      alt={AUTHOR_INFO.name}
                      fill
                      className="object-cover object-top"
                      priority
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="lg:col-span-7">
              <FadeIn delay={0.1}>
                <p className="chip mb-4">The woman behind the words</p>
                <h2 className="font-display mb-6 text-3xl font-bold leading-tight md:text-4xl">
                  Where humor meets heart
                </h2>
              </FadeIn>
              <FadeIn delay={0.18}>
                <div className="space-y-4 text-base leading-relaxed text-charcoal/80 md:text-lg">
                  {AUTHOR_INFO.bioParagraphs.map((para) => (
                    <p key={para.slice(0, 24)}>{para}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/books" className="btn-gold px-7 py-3 text-sm">
                    Explore her books
                  </Link>
                  <Link href="/connect" className="btn-outline px-7 py-3 text-sm">
                    Get in touch
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {notes.map((note, i) => (
              <FadeIn key={note.label} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-blush/25 bg-white p-6 shadow-sm">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                    {note.label}
                  </p>
                  <p className="font-display text-lg text-charcoal">{note.value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-blush/20 bg-white py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-6">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[2rem] border border-blush/40 bg-gradient-to-br from-warm-white to-[#FDF4F5] p-10 text-center shadow-sm md:p-14">
              <div className="font-display mb-2 select-none text-7xl leading-none text-gold/25" aria-hidden="true">
                “
              </div>
              <blockquote className="font-display text-xl font-medium leading-relaxed text-charcoal italic md:text-2xl">
                {AUTHOR_INFO.quote}
              </blockquote>
              <div className="mx-auto mt-6 h-0.5 w-12 bg-gold" />
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
