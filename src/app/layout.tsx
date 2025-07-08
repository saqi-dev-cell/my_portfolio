import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Saqlain Kharal - Full Stack Developer & IoT Enthusiast',
  description: 'Passionate full-stack developer specializing in MERN stack, Next.js, and IoT solutions. Creating innovative web applications and embedded systems.',
  keywords: ['Full Stack Developer', 'MERN Stack', 'Next.js', 'React', 'Node.js', 'IoT', 'Arduino', 'ESP32', 'Web Development'],
  authors: [{ name: 'Saqlain Kharal' }],
  creator: 'Saqlain Kharal',
  publisher: 'Saqlain Kharal',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://saqlain-kharal.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Saqlain Kharal - Full Stack Developer & IoT Enthusiast',
    description: 'Passionate full-stack developer specializing in MERN stack, Next.js, and IoT solutions.',
    url: 'https://saqlain-kharal.vercel.app',
    siteName: 'Saqlain Kharal Portfolio',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'Saqlain Kharal - Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Saqlain Kharal - Full Stack Developer & IoT Enthusiast',
    description: 'Passionate full-stack developer specializing in MERN stack, Next.js, and IoT solutions.',
    images: ['/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.jpeg" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}