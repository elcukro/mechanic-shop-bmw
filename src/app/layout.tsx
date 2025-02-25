import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mechanic Pro - BMW M Performance Specialists',
  description: 'Expert automotive repairs specializing in BMW M Performance, injector regeneration, DPF filter cleaning, turbo repairs, engine work, and performance tuning.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen pb-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}