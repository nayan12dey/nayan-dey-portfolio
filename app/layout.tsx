import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const { name, professionalTitle, location } = PORTFOLIO_DATA.personal;

const pageTitle = `${name} | ${professionalTitle}`;
const pageDescription = `${name} is a ${professionalTitle} based in ${location}, building reliable and user-focused web applications with JavaScript, React.js, Next.js, Node.js, Express.js, and MongoDB.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    name,
    professionalTitle,
    'Full Stack Developer',
    'React.js',
    'Next.js',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JavaScript',
    'Kolkata Developer',
  ],
  authors: [{ name }],
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${jetbrains.variable} scroll-smooth`}>
      <body className="bg-background text-gray-100 antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}


