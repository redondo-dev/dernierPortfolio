'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/config/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { locales, Locale, getLocaleName, isRTL } from '@/config/locales';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const languages: Array<{ 
  code: Locale; 
  label: string; 
  nativeLabel: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}> = [
  { code: 'fr', label: 'French', nativeLabel: 'Français', flag: 'https://flagcdn.com/w40/fr.png', direction: 'ltr' },
  { code: 'en', label: 'English', nativeLabel: 'English', flag: 'https://flagcdn.com/w40/gb.png', direction: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: 'https://flagcdn.com/w40/dz.png', direction: 'rtl' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: 'https://flagcdn.com/w40/es.png', direction: 'ltr' },
  { code: 'it', label: 'Italian', nativeLabel: 'Italiano', flag: 'https://flagcdn.com/w40/it.png', direction: 'ltr' }
];

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = async (newLocale: Locale) => {
    // Animation de transition
    document.documentElement.classList.add('switching-locale');
    
    try {
      await router.replace(pathname, { locale: newLocale });
      document.documentElement.dir = isRTL(newLocale) ? 'rtl' : 'ltr';
    } finally {
      document.documentElement.classList.remove('switching-locale');
    }
  };

  const currentLanguage = languages.find(lang => lang.code === locale) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="sm" 
          className="flex items-center gap-2 hover:bg-accent transition-colors duration-200"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2"
          >
            <Image
              src={currentLanguage.flag}
              alt={currentLanguage.label}
              width={20}
              height={15}
              className="rounded shadow-sm"
            />
            <span className="hidden md:inline text-sm font-medium">
              {currentLanguage.nativeLabel}
            </span>
          </motion.div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-56 dark:bg-gray-800/95 backdrop-blur-sm"
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground">
          Select Language / Choisir la langue
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLocaleChange(lang.code)}
            className={`flex items-center gap-2 ${
              locale === lang.code ? 'bg-accent' : ''
            } hover:bg-accent/80 transition-colors duration-200`}
          >
            <div className="flex items-center gap-2 flex-1">
              <Image
                src={lang.flag}
                alt={lang.label}
                width={20}
                height={15}
                className="rounded shadow-sm"
              />
              <span className={`text-sm ${lang.direction === 'rtl' ? 'font-arabic' : ''}`}>
                {lang.nativeLabel}
              </span>
            </div>
            <span className="text-xs text-muted-foreground">
              {lang.label}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
