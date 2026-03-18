import type { Metadata } from 'next';
import { Playfair_Display, IBM_Plex_Mono, Instrument_Sans } from 'next/font/google';
import './globals.css';
import Nav from '@components/Nav';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const instrumentSans = Instrument_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ankush Tarafdar | Portfolio',
  description:
    'B.Tech Mathematics & Computing student at IIT Dharwad. Exploring quantum computing, post-quantum cryptography, and cybersecurity.',
  keywords: [
    'Ankush Tarafdar',
    'Portfolio',
    'Quantum Computing',
    'Cryptography',
    'IIT Dharwad',
    'Cybersecurity',
  ],
  authors: [{ name: 'Ankush Tarafdar' }],
  icons: { icon: '/favicon.svg' },
  openGraph: {
    title: 'Ankush Tarafdar | Portfolio',
    description:
      'B.Tech Mathematics & Computing student at IIT Dharwad. Exploring quantum computing, post-quantum cryptography, and cybersecurity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${ibmPlexMono.variable} ${instrumentSans.variable}`}
    >
      <body className="bg-dark text-gray-200 font-body antialiased">
        <Nav />
        {children}
      </body>
    </html>
  );
}
