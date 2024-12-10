import { ReactNode } from 'react';

import './globals.css';
import NavBar from '@/components/NavBar';
import { exo2, orbitron } from './fonts';
import { getReviews } from '@/lib/reviews';
import { getDomain } from '@/lib/getDomain';

const CMS_URL = process.env.CMS_URL;

export async function generateMetadata() {
  const {
    reviews: [review],
  } = await getReviews(1);
  const domain = getDomain();
  const imageUrl = new URL(review.image, CMS_URL).href;
  // console.log('[Layout] imageUrl:', imageUrl);

  return {
    title: {
      default: 'Indie Gamer',
      template: '%s | Indie Gamer',
    },
    description: 'Only the best indie games, reviewed for you.',
    generator: 'Next.js',
    authors: [
      {
        name: 'Andrew Lobban',
        url: `${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
      },
      {
        name: 'Andrew G Lobban',
        url: `${process.env.VERCEL_URL}`,
      },
    ],
    creator: 'Andrew Lobban',
    openGraph: {
      title: 'Indie Gamer',
      description: 'Indie Game Reviews',
      keywords: [''],
      url: `${domain}`,
      siteName: 'Indie Gamer',
      images: [
        {
          url: `${imageUrl}`,
          width: 800,
          height: 600,
        },
        {
          url: `${imageUrl}`,
          width: 1280,
          height: 720,
        },
      ],
      locale: 'en-US',
      type: 'website',
    },
  };
}

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${exo2.variable} ${orbitron.variable}`}>
      <body className="bg-orange-50 flex flex-col min-h-screen px-4 py-2">
        <header>
          <NavBar />
        </header>
        <main className="grow py-3">{children}</main>
        <footer className="border-t py-3 text-center text-slate-500 text-xs">
          Game data & images provided by{' '}
          <a
            href="http://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
}
