'use client';

import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from 'next-intl';

export function Providers({
  children,
  locale,
  messages
}: {
  children: React.ReactNode;
  locale: string;
  messages: any;
}) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
