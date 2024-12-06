export const locales = ['fr', 'en', 'ar', 'es', 'it'] as const;
export type Locale = typeof locales[number];

export const defaultLocale: Locale = 'fr';

interface LocaleMetadata {
  name: string;
  nativeName: string;
  direction: 'ltr' | 'rtl';
  dateFormat: string;
  timeFormat: string;
}

export const localeMetadata: Record<Locale, LocaleMetadata> = {
  fr: {
    name: 'French',
    nativeName: 'Français',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  },
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: 'hh:mm A'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  },
  es: {
    name: 'Spanish',
    nativeName: 'Español',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  },
  it: {
    name: 'Italian',
    nativeName: 'Italiano',
    direction: 'ltr',
    dateFormat: 'DD/MM/YYYY',
    timeFormat: 'HH:mm'
  }
};

export const localeNames = Object.fromEntries(
  Object.entries(localeMetadata).map(([key, value]) => [key, value.nativeName])
) as Record<Locale, string>;

export const isRTL = (locale: Locale): boolean => {
  return localeMetadata[locale].direction === 'rtl';
};

export function getDirection(locale: Locale): 'ltr' | 'rtl' {
  return localeMetadata[locale].direction;
}

export function getDateFormat(locale: Locale): string {
  return localeMetadata[locale].dateFormat;
}

export function getTimeFormat(locale: Locale): string {
  return localeMetadata[locale].timeFormat;
}

export function getLocaleName(locale: Locale, inNative: boolean = true): string {
  return inNative ? localeMetadata[locale].nativeName : localeMetadata[locale].name;
}
