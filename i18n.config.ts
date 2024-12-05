import { Pathnames } from 'next-intl/navigation';

export const locales = ['fr', 'en', 'ar', 'es', 'it'] as const;
export const defaultLocale = 'fr' as const;

export const pathnames = {
  '/': '/',
  '/about': '/about',
  '/projects': '/projects',
  '/contact': '/contact'
} satisfies Pathnames<typeof locales>;

export type AppPathnames = keyof typeof pathnames;
