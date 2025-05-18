'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#f8fafc] to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#1e293b] to-[#3b82f6] bg-clip-text text-transparent dark:from-white dark:to-blue-400">
              {t('title')}
            </h2>
            <div className="prose prose-lg text-[#475569] dark:text-gray-300 mb-8">
              {t('text').split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <motion.div 
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a 
                href="/public/assets/cv.pdf" 
                download 
                className="group relative px-6 py-3 rounded-lg bg-[#3b82f6] text-white overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-200 dark:hover:shadow-blue-900"
              >
                <span className="relative z-10">{t('downloadCV')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://res.cloudinary.com/dzyq5ko7q/image/upload/v1747561665/redaprofil_suuayp.png"  
                alt="Profile"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
           
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}