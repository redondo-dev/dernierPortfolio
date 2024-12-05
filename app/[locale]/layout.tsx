import { useMessages } from 'next-intl';
import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
import { ThemeToggle } from "@/components/theme-toggle";
import LanguageSwitcher from '@/components/language-switcher';
import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const dynamic = 'force-dynamic';

export function generateStaticParams() {
  return [{ locale: 'fr' }, { locale: 'en' }, { locale: 'ar' }, { locale: 'es' }, { locale: 'it' }];
}

export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale} dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <body className={inter.className}>
        <Providers locale={locale} messages={messages}>
          <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
              <LanguageSwitcher />
              <ThemeToggle />
            </nav>
          </header>
          <main className="pt-16">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
