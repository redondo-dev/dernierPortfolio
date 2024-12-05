'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/config/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { locales, Locale } from '@/config/locales';

const languages: Array<{ code: Locale; label: string; flag: string }> = [
  { code: 'fr', label: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
  { code: 'en', label: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'ar', label: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'es', label: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'it', label: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' }
];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-accent">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.label}
            width={20}
            height={15}
            className="rounded"
          />
          <span className="hidden md:inline text-sm font-medium">{currentLanguage.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48 dark:bg-gray-800">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLocaleChange(lang.code)}
            className={`flex items-center gap-2 ${
              locale === lang.code ? "bg-accent/10" : ""
            } dark:hover:bg-gray-700`}
          >
            <Image
              src={lang.flag}
              alt={lang.label}
              width={20}
              height={15}
              className="rounded"
            />
            <span className="text-sm">{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
