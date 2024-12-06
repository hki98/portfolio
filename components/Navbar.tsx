"use client"
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Navbar() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t('nav.about'), href: "#about" },
    { name: t('nav.skills'), href: "#skills" },
    { name: t('nav.languages'), href: "#languages" },
    { name: t('nav.contact'), href: "#contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 50, damping: 20 }}
      className={`
        fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md dark:bg-zinc-900/80
        ${language === 'ar' ? 'font-[family-name:var(--font-kufi-arabic)]' : ''}
      `}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
              {language === 'ar' ? "حيان" : "Haian"}
            </Link>
          </motion.div>
          
          {/* Desktop Menu */}
          <ul className={`hidden md:flex ${language === 'ar' ? 'space-x-reverse' : ''} space-x-8`}>
            {navItems.map((item, index) => (
              <motion.li
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  href={item.href}
                  className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
            ) : (
              <Menu className="w-6 h-6 text-zinc-600 dark:text-zinc-400" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <motion.ul
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05 }
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 }
                  }
                }}
                className="pt-4 pb-2 space-y-2"
              >
                {navItems.map((item) => (
                  <motion.li
                    key={item.name}
                    variants={{
                      open: { x: 0, opacity: 1 },
                      closed: { x: language === 'ar' ? 20 : -20, opacity: 0 }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="block py-2 px-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
} 