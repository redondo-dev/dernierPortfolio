import { redirect } from 'next/navigation';
import { defaultLocale } from '@/config/locales';

export const dynamic = 'force-dynamic';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
