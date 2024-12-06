'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { useEffect } from 'react';

interface ProvidersProps {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}

export function Providers({ children, locale, messages }: ProvidersProps) {
  useEffect(() => {
    // Ajout de la classe RTL au document si nécessaire
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;
  }, [locale]);

  const timeZone = 'Europe/Paris';
  const now = new Date();

  return (
    <NextIntlClientProvider 
      locale={locale} 
      messages={messages}
      timeZone={timeZone}
      now={now}
      onError={(error) => {
        console.error('Translation error:', error);
      }}
      formats={{
        dateTime: {
          short: {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }
        }
      }}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="portfolio-theme"
        themes={['light', 'dark']}
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
