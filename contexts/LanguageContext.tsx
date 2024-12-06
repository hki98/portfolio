/**
 * Language context for managing bilingual support (English/Arabic).
 * Provides language state and translation functions to the application.
 * 
 * @author Haian Ibrahim <contact@haian.me>
 * @copyright 2024 Haian Ibrahim
 */
"use client"
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { translations } from '@/lib/translations';

/** Available language options */
type Language = 'en' | 'ar';

/** Translation key type based on the translations object structure */
type TranslationKey = keyof typeof translations.en;

/** Language context interface */
interface LanguageContextType {
  /** Current active language */
  language: Language;
  /** Function to change the current language */
  setLanguage: (lang: Language) => void;
  /** Translation function */
  t: (key: string) => string;
}

// Create the context with undefined default value
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language Provider Component
 * Manages language state and provides translation functionality
 * 
 * @component
 * @param {Object} props - Component props
 * @param {ReactNode} props.children - Child components
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  /**
   * Translation function
   * @param {string} key - Dot notation path to the translation
   * @returns {string} Translated text
   */
  const t = (key: string): string => {
    try {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        value = value[k];
      }
      
      return value?.toString() || key;
    } catch (error) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

/**
 * Custom hook to use the language context
 * @returns {LanguageContextType} Language context value
 * @throws {Error} If used outside of LanguageProvider
 */
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 