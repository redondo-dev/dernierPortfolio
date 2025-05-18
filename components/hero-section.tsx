"use client";

import { Github, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from 'next-intl';

export function HeroSection() {
  const t = useTranslations('hero');
  
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 mb-16">
      <div className="flex-1">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              {t('greeting')} <span className="text-primary">Reda</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              {t('role')}
            </h2>
          </div>
        </div>
        <p className="text-lg text-muted-foreground mb-8">
          {t('description')}
        </p>
        <div className="flex gap-4">
          <Link href="/contact">
            <Button>
              <Mail className="mr-2 h-4 w-4" />
              {t('contactMe')}
            </Button>
          </Link>
          <a href="https://github.com/redondo-dev" target="_blank" rel="noopener noreferrer">
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" />
              {t('github')}
            </Button>
          </a>
        </div>
        <div className="flex items-center gap-2 mt-6 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{t('location')}</span>
        </div>
      </div>
      <div className="relative w-48 h-48 md:w-64 md:h-64">
        <Image
          src="https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747561665/redaprofil_suuayp.png"
          alt="Profile"
          fill
          className="rounded-full object-cover border-4 border-primary"
          priority
        />
      </div>
    </section>
  );
}