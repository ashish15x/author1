import type { Metadata } from 'next';
import ConnectPageClient from './ConnectPageClient';

export const metadata: Metadata = {
  title: 'Connect | Rajani Tewari — Ms. Zen',
  description:
    'Get in touch with Rajani Tewari — follow her on social media or reach out via email.',
};

export default function ConnectPage() {
  return <ConnectPageClient />;
}
