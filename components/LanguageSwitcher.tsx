"use client"
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { Noto_Kufi_Arabic } from 'next/font/google';

const notoKufiArabic = Noto_Kufi_Arabic({ 
  weight: ['400', '700'],  // Add specific weights
  subsets: ['arabic'],
  variable: '--font-kufi-arabic',
  display: 'swap',
});

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}
      className={`
        fixed bottom-6 ${language === 'ar' ? 'left-20' : 'right-6'} 
        z-50 px-4 py-2 rounded-full bg-white/80 dark:bg-zinc-800/80 
        backdrop-blur-sm shadow-lg border border-zinc-200 dark:border-zinc-700 
        text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white 
        transition-colors
        ${language === 'en' ? notoKufiArabic.className : ''}
      `}
    >
      {language === 'en' ? 'العربية' : 'English'}
    </motion.button>
  );
} 