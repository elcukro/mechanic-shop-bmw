'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, translations } from './translations';

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: keyof typeof translations.en) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pl');
  const [mounted, setMounted] = useState(false);

  // Mark component as mounted for hydration safety
  useEffect(() => {
    setMounted(true);
  }, []);

  // Load saved language preference from localStorage when available
  // Only run this on the client side after component has mounted
  useEffect(() => {
    if (mounted) {
      try {
        const savedLocale = localStorage.getItem('language') as Locale;
        if (savedLocale && (savedLocale === 'en' || savedLocale === 'pl')) {
          setLocale(savedLocale);
          document.documentElement.lang = savedLocale;
        }
      } catch (error) {
        console.error('Failed to access localStorage:', error);
      }
    }
  }, [mounted]);

  // Save language preference to localStorage
  useEffect(() => {
    if (mounted) {
      try {
        localStorage.setItem('language', locale);
        document.documentElement.lang = locale;
      } catch (error) {
        console.error('Failed to save to localStorage:', error);
      }
    }
  }, [locale, mounted]);

  const t = (key: keyof typeof translations.en): string => {
    return translations[locale][key] || translations.en[key] || String(key);
  };

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}