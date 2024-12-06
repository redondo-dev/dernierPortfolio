"use client";

import { HeroSection } from '@/components/hero-section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ProjectCard } from '@/components/project-card';
import { ServicesSection } from '@/components/services-section';
import { SkillsWithIcons } from '@/components/skills-with-icons';
import AboutSection from '@/components/about-section';
import ContactForm from '@/components/contactForm';
import { projects } from '@/lib/data';

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <div className="max-w-5xl mx-auto px-4 py-16">
        <HeroSection />

        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5 max-w-[500px] mx-auto">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="contact">Contact</TabsTrigger>
          </TabsList>

          <TabsContent value="projects" className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="services">
            <ServicesSection />
          </TabsContent>

          <TabsContent value="skills">
            <SkillsWithIcons />
          </TabsContent>

          <TabsContent value="about">
            <AboutSection />
          </TabsContent>

          <TabsContent value="contact">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
