import { createSharedPathnamesNavigation } from 'next-intl/navigation';
import { locales } from './locales';

export const { Link, redirect, usePathname, useRouter } = createSharedPathnamesNavigation({ locales });

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CONTACT: '/contact',
  SKILLS: '/skills',
  SERVICES: '/services'
} as const;
