import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ClientLayout from "@/components/ClientLayout";
import { Noto_Kufi_Arabic } from 'next/font/google';
import { ThemeProvider } from "@/contexts/ThemeContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const notoKufiArabic = Noto_Kufi_Arabic({ 
  weight: ['400', '700'],
  subsets: ['arabic'],
  variable: '--font-kufi-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Haian Ibrahim - Fullstack Developer",
  description: "Portfolio of Haian Ibrahim, a passionate Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoKufiArabic.variable} antialiased bg-zinc-50 dark:bg-zinc-900`}>
        <ThemeProvider>
          <ClientLayout>
            <Navbar />
            {children}
            <LanguageSwitcher />
            <ThemeSwitcher />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
