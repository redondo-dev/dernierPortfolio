"use client";

import { useTranslations } from 'next-intl';
import { Laptop, Code2, Layout } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Service {
  icon: React.ReactNode;
  translationKey: string;
}

const services: Service[] = [
  {
    icon: <Laptop className="h-8 w-8" />,
    translationKey: "web_mobile"
  },
  {
    icon: <Code2 className="h-8 w-8" />,
    translationKey: "templates"
  },
  {
    icon: <Layout className="h-8 w-8" />,
    translationKey: "ui_showcase"
  }
];

export function ServicesSection() {
  const t = useTranslations('services');

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-semibold mb-8 text-center">{t('title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary/70 transition-colors"
          >
            <div className="mb-4 text-primary">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3">
              {t(`${service.translationKey}.title`)}
            </h3>
            <p className="text-muted-foreground">
              {t(`${service.translationKey}.description`)}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}