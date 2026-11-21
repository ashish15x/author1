import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog | Rajani Tewari — Ms. Zen',
  description:
    'Read blogs and essays by Rajani Tewari on leadership, mythology, self-discovery, and life.',
};

export default function BlogPage() {
  return <BlogPageClient />;
}
