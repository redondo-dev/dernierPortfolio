import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/locales';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'as-needed',
  localeDetection: true,
  alternateLinks: true,
  domains: [
    {
      domain: 'localhost:3000',
      defaultLocale,
      locales: ['fr', 'en', 'ar', 'es', 'it']
    }
  ]
});

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\.|favicon.ico).*)',
    '/',
  ]
};
