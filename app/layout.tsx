import type { Metadata } from 'next';
import { Space_Mono, Inter } from 'next/font/google';
import '@/styles/globals.css';
import CursorGlow from '@/components/CursorGlow';
import ScrollProgress from '@/components/ScrollProgress';
import IntroScreen from '@/components/IntroScreen';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Amulya Penikalapati | AI Graduate Student',
  description:
    'MS in Artificial Intelligence at Northeastern University. Building intelligent systems at the intersection of computer vision, NLP, and agentic AI.',
  keywords: [
    'Amulya Penikalapati', 'AI', 'Machine Learning',
    'Computer Vision', 'NLP', 'Northeastern University', 'Portfolio',
  ],
  authors: [{ name: 'Amulya Penikalapati' }],
  openGraph: {
    title: 'Amulya Penikalapati | AI Graduate Student',
    description:
      'MS in Artificial Intelligence at Northeastern University. Building intelligent systems at the intersection of computer vision, NLP, and agentic AI.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amulya Penikalapati | AI Graduate Student',
    description: 'MS in Artificial Intelligence at Northeastern University.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceMono.variable} ${inter.variable}`}>
      <body className="bg-bg text-text antialiased">
        <IntroScreen />
        <ScrollProgress />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
