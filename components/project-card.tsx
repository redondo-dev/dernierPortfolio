"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github } from "lucide-react";
import Image from "next/image";
import { useTranslations } from 'next-intl';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
}

export function ProjectCard({ title, description, tech, image, github, demo }: ProjectCardProps) {
  const t = useTranslations('projects');
  const [imgSrc, setImgSrc] = useState(image);
  const [imgError, setImgError] = useState(false);
  
  // Check if the image is from an external URL
  const isExternalImage = imgSrc.startsWith('http');
  
  const handleImageError = () => {
    if (!imgError) {
      setImgError(true);
      // Fallback to a placeholder image if the image fails to load
      setImgSrc('/assets/placeholder.jpg');
    }
  };
  
  // For external images, we need to add the domain to next.config.js
  const imageProps = isExternalImage 
    ? {
        src: imgSrc,
        unoptimized: true, // Required for external images not in next.config.js domains
      }
    : {
        src: imgSrc,
      };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video w-full bg-gray-100 dark:bg-gray-800">
        <Image
          {...imageProps}
          alt={title}
          fill
          className="object-cover"
          priority={title === "Best Of Foot"}
          onError={handleImageError}
          loading={title === "Best Of Foot" ? undefined : "lazy"}
          unoptimized={process.env.NODE_ENV !== 'production' || isExternalImage}
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, i) => (
            <Badge key={i} variant="secondary">{item}</Badge>
          ))}
        </div>
        <div className="flex gap-4 mt-auto">
          <Button variant="outline" size="sm" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {t('viewCode')}
            </a>
          </Button>
          <Button size="sm" asChild>
            <a href={demo} target="_blank" rel="noopener noreferrer">
              {t('liveDemo')}
            </a>
          </Button>
        </div>
      </div>
    </Card>
  );
}