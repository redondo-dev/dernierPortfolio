import { getRequestConfig } from 'next-intl/server';
import { locales } from './config/locales';
 
export default getRequestConfig(async ({ locale }) => ({
  messages: (await import(`./messages/${locale}.json`)).default
}));

export const defaultLocale = 'fr';
export { locales };
