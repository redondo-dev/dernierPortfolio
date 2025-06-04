import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { Providers } from '@/components/providers';
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from '@/components/language-switcher';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ar' }, { locale: 'es' }, { locale: 'it' }];
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  // Déterminer la direction en fonction de la langue
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={cn(
      inter.className,
      locale === 'ar' ? 'font-sans-ar' : '',
      'h-full',
      'antialiased'
    )}>
      <body className={cn(
        'min-h-screen bg-background',
        locale === 'ar' ? 'text-right' : 'text-left',
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider locale={locale} messages={messages}>
            <Providers locale={locale} messages={messages}>
              <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
                <nav className={`container mx-auto px-4 py-4 flex items-center ${locale === 'ar' ? 'flex-row-reverse justify-start gap-4' : 'justify-between'}`}>
                  <LanguageSwitcher />
                  <ThemeToggle />
                </nav>
              </header>
              <main className="pt-16">
                {children}
              </main>
            </Providers>
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
