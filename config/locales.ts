export const locales = ['fr', 'en', 'ar', 'es', 'it'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'fr';

export const localeNames: Record<Locale, string> = {
  fr: 'Français',
  en: 'English',
  ar: 'العربية',
  es: 'Español',
  it: 'Italiano'
};

export const isRTL = (locale: Locale) => {
  return locale === 'ar';
};

export function getDirection(locale: Locale) {
  return isRTL(locale) ? 'rtl' : 'ltr';
}
