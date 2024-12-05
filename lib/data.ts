import { Project } from './types';

export const projects: Project[] = [
  {
    title: "Best Of Foot",
    description: "Application web pour suivre les résultats et statistiques de football en temps réel",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    image: "/assets/bestoffoot.png",
    github: "https://github.com/redondo-dev/best10",
    demo: "https://bestl0-app.vercel.app"
  },
  {
    title: "Cabinet Medical",
    description: "Application pour un cabinet médical d'esthetique avec epilation laser ",
    tech: ["React,Nextjs ,Tailwind css "],
    image: "/assets/cabinetMedical.jpg",
    github: "https://github.com/redondo-dev/cabinetMedical",
    demo: "https://cabinet-medical-gray.vercel.app"
  },
  {
    title: "Caferiad",
    description: "Site vitrine pour un marque de café Marseillais",
    tech: ["React", "Next.js", "Tailwind CSS"],
    image: "/assets/caferiad.png",
    github: "https://github.com/redondo-dev/riad-cofee",
    demo: "https://riad-cofee.vercel.app"
  },
  {
    title: "Weather App",
    description: "Application météo avec géolocalisation et prévisions sur 5 jours",
    tech: ["React-native ","Expo", "OpenWeather API" ],
    image: "/assets/meteoApp.png",
    github: "https://github.com/redondo-dev/MeteoApp-",
    demo: "https://weather-app-redondo-dev.vercel.app/"
  },
  {
    title: "AMVTC13",
    description: "Site pour un chauffeur de voiture vtc Marseillais ",
    tech: ["React"],
    image: "/assets/toyota-car.jpg",
    github: "https://github.com/redondo-dev/mariaVTC",
    demo: "https://amvtc13.com"
  }
];
