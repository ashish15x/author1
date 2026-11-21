import type { Metadata } from 'next';
import BooksPageClient from './BooksPageClient';

export const metadata: Metadata = {
  title: 'Books | Rajani Tewari — Ms. Zen',
  description:
    'Explore books by Rajani Tewari — including "The Audacity of Being Enough", a witty and unflinching journey of self-discovery.',
};

export default function BooksPage() {
  return <BooksPageClient />;
}
