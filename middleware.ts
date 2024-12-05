import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './config/locales';

export default createMiddleware({
  defaultLocale,
  locales,
  localePrefix: 'as-needed'
});

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
