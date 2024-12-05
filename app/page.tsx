import { redirect } from 'next/navigation';
import { HeroSection } from '@/components/hero-section';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { ProjectCard } from '@/components/project-card';
import { ServicesSection } from '@/components/services-section';
import { SkillsWithIcons } from '@/components/skills-with-icons';
import AboutSection from '@/components/about-section'; // Replaced with default import syntax
import ContactForm from '@/components/contactForm';
import { projects } from '@/lib/data';
import { Project } from '@/lib/types';

export default function Home() {
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
            <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <h3 className="text-2xl font-semibold mb-5">Technical Skills</h3>
              <SkillsWithIcons />
            </div>
          </TabsContent>

          <TabsContent value="about">
            <AboutSection />
          </TabsContent>
          <TabsContent value="contact">
            <div className="max-w-2xl mx-auto p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
              <ContactForm />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}