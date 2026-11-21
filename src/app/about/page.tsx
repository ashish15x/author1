import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About | Rajani Tewari — Ms. Zen',
  description:
    'Learn about Rajani Tewari — storyteller, speaker, and corporate leader writing as Ms. Zen.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
