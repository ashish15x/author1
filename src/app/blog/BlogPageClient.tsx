'use client';

import { ExternalLink } from 'lucide-react';
import BlogCard from '@/components/BlogCard';
import FadeIn from '@/components/FadeIn';
import PageHeader from '@/components/PageHeader';
import { AUTHOR_INFO, BLOGS } from '@/data/portfolioData';

export default function BlogPageClient() {
  const [featured, ...rest] = BLOGS;

  return (
    <div>
      <PageHeader
        eyebrow="Substack dispatches"
        title="Writings & reflections"
        description="Observations on human connections, the quiet humor in everyday chaos, and finding truth in modern relationships."
      />

      <section className="pb-20 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-6">
          {featured ? (
            <FadeIn className="mb-10">
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid overflow-hidden rounded-[2rem] border border-blush/30 bg-white shadow-sm md:grid-cols-5"
              >
                <div className="flex flex-col justify-center bg-gradient-to-br from-cream to-rose-light/40 p-8 md:col-span-2 md:p-10">
                  <p className="chip mb-4 w-fit">Latest</p>
                  <p className="text-xs font-medium text-charcoal/50">{featured.date}</p>
                </div>
                <div className="p-8 md:col-span-3 md:p-10">
                  <h2 className="font-display text-2xl font-bold leading-snug transition-colors group-hover:text-gold md:text-3xl">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-charcoal/65">{featured.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    Read on Substack
                    <ExternalLink size={14} />
                  </span>
                </div>
              </a>
            </FadeIn>
          ) : null}

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((blog, i) => (
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

          <FadeIn delay={0.1} className="mx-auto mt-16 max-w-3xl">
            <div className="rounded-[2rem] border border-blush/30 bg-white p-10 text-center shadow-sm md:p-12">
              <div className="mx-auto mb-6 h-0.5 w-10 bg-gold" />
              <h2 className="font-display mb-3 text-2xl font-bold md:text-3xl">Read more on Substack</h2>
              <p className="mx-auto mb-6 max-w-lg text-sm text-charcoal/70 md:text-base">
                Subscribe to Rajani’s personal Substack for weekly essays, humorous reflections, and
                new chapter releases.
              </p>
              <a
                href={AUTHOR_INFO.substack}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold px-8 py-3.5 text-sm uppercase tracking-wider"
              >
                Visit Substack
                <ExternalLink size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
