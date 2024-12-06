/**
 * Client-side layout wrapper component.
 * Provides language context to client components.
 * 
 * @author Haian Ibrahim <contact@haian.me>
 * @copyright 2024 Haian Ibrahim
 * 
 * @component
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components to be wrapped
 * 
 * @example
 * ```tsx
 * <ClientLayout>
 *   <Component />
 * </ClientLayout>
 * ```
 */
"use client"
import { LanguageProvider } from "@/contexts/LanguageContext";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  );
} 