import {getRequestConfig} from 'next-intl/server';
import {locales} from '@/config/locales';

export default getRequestConfig(async ({locale}) => {
  const baseLocale = locale.split('-')[0];
  
  const messages = await import(`../messages/${locales.includes(baseLocale as any) ? baseLocale : 'en'}.json`)
    .then((module) => module.default)
    .catch(() => import('../messages/en.json').then((module) => module.default));

  return {
    messages,
    timeZone: 'Europe/Paris',
    now: new Date(),
    formats: {
      dateTime: {
        short: {
          day: 'numeric',
          month: 'short',
          year: 'numeric'
        },
        long: {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          weekday: 'long'
        }
      },
      number: {
        decimal: {
          style: 'decimal',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        },
        percent: {
          style: 'percent',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0
        }
      },
      list: {
        enumeration: {
          style: 'long',
          type: 'conjunction'
        }
      }
    },
    defaultTranslationValues: {
      company: 'Portfolio',
      year: new Date().getFullYear().toString()
    },
    onError: (error) => {
      console.error('i18n error:', error);
    }
  };
});
