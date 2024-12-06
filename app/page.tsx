/**
 * Home page component for the portfolio website.
 * Features:
 * - Animated hero section with profile photo
 * - About section with professional background
 * - Skills showcase with interactive cards
 * - Language proficiency indicators
 * - Contact form with Formspree integration
 * 
 * @component
 */
"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Download, Mail, Send } from "lucide-react";
import { useForm, ValidationError } from '@formspree/react';
import AnimatedBackground from "@/components/AnimatedBackground";
import { fadeInUp, staggerContainer, cardHover } from "@/lib/animations";
import { useLanguage } from "@/contexts/LanguageContext";

/**
 * Main Home component
 * Handles the presentation of all portfolio sections
 * Includes bilingual support and theme-aware styling
 */
export default function Home() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string);
  const { t, language } = useLanguage();

  const skillsData = [
    {
      title: t('skills.frontend'),
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS"]
    },
    {
      title: t('skills.backend'),
      items: ["PHP", "Laravel", "Node.js", "Express", "Python", "SQL", "MongoDB"]
    },
    {
      title: t('skills.mobile'),
      items: ["Android Development", "Java", "Kotlin"]
    },
    {
      title: t('skills.tools'),
      items: ["Git", "Docker", "AWS", "CI/CD", "Agile"]
    }
  ];

  const languagesData = [
    {
      language: t('languages.arabic'),
      level: t('languages.native'),
      proficiency: 100
    },
    {
      language: t('languages.english'),
      level: t('languages.professional'),
      proficiency: 90
    },
    {
      language: t('languages.german'),
      level: t('languages.a1'),
      proficiency: 30
    }
  ];

  return (
    <>
      <AnimatedBackground />
      <div className={`
        font-[family-name:var(--font-geist-sans)]
        ${language === 'ar' ? 'font-[family-name:var(--font-kufi-arabic)]' : ''}
        ${language === 'ar' ? 'text-right' : 'text-left'}
      `}>
        {/* Hero Section */}
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="min-h-screen flex items-center justify-center pt-20"
        >
          <div className="container mx-auto px-6">
            <motion.div className="flex flex-col items-center text-center space-y-8">
              <div className="relative group">
                {/* Spinning circle */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15, // Slower rotation
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  whileHover={{ scale: 1.1 }}
                  className="absolute -inset-4 rounded-full border-4 border-dashed border-purple-500/50 dark:border-purple-400/50"
                />
                
                {/* Interactive glow effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 45, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 90,
                    transition: { duration: 0.3 }
                  }}
                  className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-md"
                />
                
                {/* Photo container with hover effect */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="relative w-32 h-32 rounded-full overflow-hidden"
                >
                  <Image
                    src="/assets/photo.jpg"
                    alt="Haian Ibrahim"
                    fill
                    className="object-cover transform transition-transform group-hover:scale-110 duration-300"
                    priority
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeInUp}>
                <h1 className={`
                  text-4xl md:text-6xl font-bold 
                  bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text
                  ${language === 'ar' ? 'leading-relaxed tracking-normal' : ''}
                `}>
                  {language === 'ar' ? "حيان ابراهيم" : "Haian Ibrahim"}
                </h1>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <h2 className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400">
                  {t('hero.title')}
                </h2>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="max-w-2xl text-zinc-600 dark:text-zinc-400">
                  {t('hero.subtitle')}
                </p>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full hover:opacity-90 transition-all hover:shadow-lg hover:shadow-purple-500/25"
                  >
                    {t('hero.contactMe')}
                  </motion.a>
                  <motion.a
                    href="/assets/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      px-6 py-3 border border-zinc-300 dark:border-zinc-700 
                      rounded-full bg-white dark:bg-transparent
                      hover:bg-zinc-100 dark:hover:bg-zinc-800 
                      text-zinc-800 dark:text-zinc-200
                      transition-all hover:shadow-lg flex items-center gap-2
                    "
                  >
                    <Download size={18} />
                    {t('hero.downloadResume')}
                  </motion.a>
                </div>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <div className="flex items-center gap-4">
                  <motion.a
                    href={process.env.NEXT_PUBLIC_LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-500 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={24} />
                  </motion.a>
                  <motion.a
                    href={process.env.NEXT_PUBLIC_GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={24} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>

        {/* About Section */}
        <section id="about" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
            >
              {t('about.title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto text-zinc-600 dark:text-zinc-400"
            >
              <p className="mb-6">{t('about.paragraph1')}</p>
              <p>{t('about.paragraph2')}</p>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-zinc-200 dark:border-zinc-800">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
            >
              {t('skills.title')}
            </motion.h2>
            <motion.div
              variants={staggerContainer}
              initial="rest"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {skillsData.map((category, index) => (
                <motion.div
                  key={category.title}
                  variants={cardHover}
                  initial="rest"
                  whileHover="hover"
                  className={`p-6 rounded-xl bg-white/80 dark:bg-zinc-800/50 shadow-xl backdrop-blur-sm ${
                    index === skillsData.length - 1 ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                  }`}
                >
                  <h3 className="
                    text-xl font-semibold mb-4 
                    bg-gradient-to-r from-purple-600 to-blue-600 
                    text-transparent bg-clip-text
                  ">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.items.map((skill) => (
                      <motion.li
                        key={skill}
                        whileHover={{ x: language === 'ar' ? -5 : 5 }}
                        className="text-zinc-600 dark:text-zinc-400"
                      >
                        {skill}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Spacer */}
        <div className="py-20 bg-transparent"></div>

        {/* Languages Section */}
        <section id="languages" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/50">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
            >
              {t('languages.title')}
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-8">
              {languagesData.map((lang) => (
                <motion.div
                  key={lang.language}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{lang.language}</h3>
                    <span className="text-sm text-zinc-600 dark:text-zinc-400">
                      {lang.level}
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
            >
              {t('contact.title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <motion.form
                onSubmit={handleSubmit}
                className="space-y-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </motion.div>

                <motion.div whileHover={{ scale: 1.01 }}>
                  <label htmlFor="message" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </motion.div>

                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(124, 58, 237, 0.3)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  {state.submitting ? (
                    t('contact.sending')
                  ) : (
                    <>
                      <motion.div
                        whileHover={{ rotate: 15 }}
                      >
                        <Send size={18} />
                      </motion.div>
                      {t('contact.send')}
                    </>
                  )}
                </motion.button>
                
                {state.succeeded && (
                  <p className="text-green-600 dark:text-green-400 text-center">
                    {t('contact.success')}
                  </p>
                )}
              </motion.form>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
