'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="bg-primary text-white shadow-md m-stripe">
      <div className="container-custom py-4 pt-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white">
              <span className="text-accent">M</span>echanic <span className="text-mblue">P</span>ro
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex gap-6">
              <Link href="/" className="hover:text-accent transition-colors">
                {t('home')}
              </Link>
              <Link href="/services" className="hover:text-accent transition-colors">
                {t('services')}
              </Link>
              <Link href="/faq" className="hover:text-accent transition-colors">
                {t('faq')}
              </Link>
              <Link href="/about" className="hover:text-accent transition-colors">
                {t('about')}
              </Link>
              <Link href="/contact" className="hover:text-accent transition-colors">
                {t('contact')}
              </Link>
            </nav>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col gap-4">
            <Link
              href="/"
              className="hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('home')}
            </Link>
            <Link
              href="/services"
              className="hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('services')}
            </Link>
            <Link
              href="/faq"
              className="hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('faq')}
            </Link>
            <Link
              href="/about"
              className="hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('about')}
            </Link>
            <Link
              href="/contact"
              className="hover:text-accent transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}