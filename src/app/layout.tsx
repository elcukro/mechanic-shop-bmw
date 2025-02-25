import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Auto Service Pro - Specialized Mechanic Shop',
  description: 'Expert automotive repairs specializing in injector regeneration, DPF filter cleaning, turbo repairs, engine work, and general maintenance.',
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
      </body>
    </html>
  );
}