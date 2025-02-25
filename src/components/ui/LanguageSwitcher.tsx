'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeLanguage = (newLocale: 'en' | 'pl') => {
    setLocale(newLocale);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button 
        className="flex items-center space-x-1 text-gray-100 hover:text-white transition-colors px-2 py-1 rounded"
        aria-label={t('languageSelect')}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
      >
        <span>{locale === 'en' ? '🇬🇧' : '🇵🇱'}</span>
        <span className="font-medium ml-1">{locale.toUpperCase()}</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`h-4 w-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 9l-7 7-7-7" 
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="fixed mt-10 md:mt-2 w-32 bg-gray-800 rounded-md shadow-lg z-[999] border border-gray-700" style={{ right: '10px', top: '30px' }}>
          <div className="py-1">
            <button
              onClick={() => changeLanguage('en')}
              className={`flex items-center px-4 py-3 text-sm w-full text-left ${
                locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">🇬🇧</span> English
            </button>
            <button
              onClick={() => changeLanguage('pl')}
              className={`flex items-center px-4 py-3 text-sm w-full text-left ${
                locale === 'pl' ? 'bg-blue-600 text-white' : 'text-gray-200 hover:bg-gray-700'
              }`}
            >
              <span className="mr-2">🇵🇱</span> Polski
            </button>
          </div>
        </div>
      )}
    </div>
  );
}